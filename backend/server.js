// ================================
// 🚀 API PRODUCERS GO - NEON READY
// ================================

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const FOUNDER_ACCESS_CODE = String(process.env.FOUNDER_ACCESS_CODE || '').trim();
const FOUNDER_SESSION_TOKEN = String(process.env.FOUNDER_SESSION_TOKEN || '').trim();
const SERVE_FRONTEND = String(process.env.SERVE_FRONTEND || '').toLowerCase() === 'true';
const frontendPath = path.join(__dirname, '..', 'frontend');
const rootPath = path.join(__dirname, '..');
const configuredFrontendPath = process.env.FRONTEND_DIR || '';
const publicPath = configuredFrontendPath
  || (fs.existsSync(path.join(rootPath, 'index.html')) ? rootPath : '')
  || (fs.existsSync(path.join(frontendPath, 'index.html')) ? frontendPath : '');

// ================================
// MIDDLEWARE
// ================================

app.use(cors());
app.use(express.json());

if (SERVE_FRONTEND && publicPath) {
  app.use(express.static(publicPath));
  app.use('/docs', express.static(path.join(__dirname, '..', 'docs')));
}

if (!FOUNDER_ACCESS_CODE || !FOUNDER_SESSION_TOKEN) {
  console.error('Faltan FOUNDER_ACCESS_CODE y/o FOUNDER_SESSION_TOKEN en el archivo .env');
  process.exit(1);
}

function requireFounderAuth(req, res, next) {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : '';

  if (token === FOUNDER_SESSION_TOKEN) {
    return next();
  }

  return res.status(401).json({
    success: false,
    message: 'Acceso de fundador requerido'
  });
}

// ================================
// CONEXIÓN A NEON (PostgreSQL)
// ================================

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

pool.on('error', (err) => {
  console.error('Error en pool:', err);
});

// ================================
// RUTAS API
// ================================

app.get('/', (req, res) => {
  res.json({
    status: 'OK',
    service: 'PRODUCERS GO API',
    message: 'Backend listo. El frontend debe publicarse por separado.'
  });
});

// ✅ TEST - Verificar conexión
app.get('/api/test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ 
      status: 'OK',
      timestamp: result.rows[0],
      message: '✅ Conexión a Neon exitosa'
    });
  } catch (err) {
    res.status(500).json({ 
      status: 'ERROR',
      message: '❌ Error conectando a Neon',
      error: err.message 
    });
  }
});

// ✅ LOGIN - Acceso al panel de fundador
app.post('/api/fundador/login', (req, res) => {
  const accessCode = String(req.body?.accessCode || '').trim();

  if (accessCode && accessCode === FOUNDER_ACCESS_CODE) {
    return res.json({
      success: true,
      token: FOUNDER_SESSION_TOKEN,
      message: 'Acceso concedido'
    });
  }

  return res.status(401).json({
    success: false,
    message: 'Código de fundador incorrecto'
  });
});

app.get('/api/fundador/session', requireFounderAuth, (req, res) => {
  res.json({ success: true });
});

// ✅ POST - Recibir nueva solicitud del formulario
app.post('/api/aplicantes', async (req, res) => {
  try {
    const {
      personalData,
      scores,
      finalScore,
      classification,
      status = 'pending'
    } = req.body;

    const query = `
      INSERT INTO aplicantes (
        nombre, nombre_artistico, email, whatsapp, edad, pais,
        score_artistico, score_tecnico, score_humano, 
        score_organizativo, score_comercial,
        puntaje_final, modelo_clasificacion, estado,
        created_at, updated_at
      ) VALUES (
        $1, $2, $3, $4, $5, $6,
        $7, $8, $9, $10, $11,
        $12, $13, $14,
        NOW(), NOW()
      )
      ON CONFLICT (email) DO UPDATE SET
        nombre = EXCLUDED.nombre,
        nombre_artistico = EXCLUDED.nombre_artistico,
        whatsapp = EXCLUDED.whatsapp,
        edad = EXCLUDED.edad,
        pais = EXCLUDED.pais,
        score_artistico = EXCLUDED.score_artistico,
        score_tecnico = EXCLUDED.score_tecnico,
        score_humano = EXCLUDED.score_humano,
        score_organizativo = EXCLUDED.score_organizativo,
        score_comercial = EXCLUDED.score_comercial,
        puntaje_final = EXCLUDED.puntaje_final,
        modelo_clasificacion = EXCLUDED.modelo_clasificacion,
        estado = EXCLUDED.estado,
        updated_at = NOW()
      RETURNING id, created_at
    `;

    const values = [
      personalData.nombre,
      personalData.nombreArtistico,
      personalData.email,
      personalData.whatsapp,
      personalData.edad,
      personalData.pais,
      scores.artistico,
      scores.tecnico,
      scores.humano,
      scores.organizativo,
      scores.comercial,
      finalScore,
      classification.model,
      status
    ];

    const result = await pool.query(query, values);
    
    // Guardar datos completos en JSON
    await pool.query(
      'UPDATE aplicantes SET datos_completos = $1 WHERE id = $2',
      [JSON.stringify(req.body), result.rows[0].id]
    );

    res.status(201).json({
      success: true,
      id: result.rows[0].id,
      message: '✅ Solicitud recibida correctamente',
      data: result.rows[0]
    });

  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({
      success: false,
      message: '❌ Error guardando solicitud',
      error: err.message
    });
  }
});

// ✅ GET - Obtener todas las solicitudes (para panel admin)
app.get('/api/aplicantes', requireFounderAuth, async (req, res) => {
  try {
    const { estado, modelo, buscar } = req.query;

    let query = 'SELECT * FROM aplicantes WHERE 1=1';
    let params = [];

    if (estado) {
      query += ` AND estado = $${params.length + 1}`;
      params.push(estado);
    }

    if (modelo) {
      query += ` AND modelo_clasificacion = $${params.length + 1}`;
      params.push(modelo);
    }

    if (buscar) {
      query += ` AND (nombre ILIKE $${params.length + 1} OR email ILIKE $${params.length + 2})`;
      params.push(`%${buscar}%`);
      params.push(`%${buscar}%`);
    }

    query += ' ORDER BY created_at DESC';

    const result = await pool.query(query, params);

    res.json({
      success: true,
      total: result.rows.length,
      data: result.rows
    });

  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({
      success: false,
      message: '❌ Error obteniendo solicitudes',
      error: err.message
    });
  }
});

// ✅ GET - Obtener una solicitud específica
app.get('/api/aplicantes/:id', requireFounderAuth, async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      'SELECT * FROM aplicantes WHERE id = $1',
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: '❌ Solicitud no encontrada'
      });
    }

    res.json({
      success: true,
      data: result.rows[0]
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: '❌ Error obteniendo solicitud',
      error: err.message
    });
  }
});

// ✅ PUT - Actualizar estado de solicitud
app.put('/api/aplicantes/:id/estado', requireFounderAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const { estado, notas } = req.body;

    const result = await pool.query(
      `UPDATE aplicantes 
       SET estado = $1, notas = $2, updated_at = NOW() 
       WHERE id = $3
       RETURNING *`,
      [estado, notas || null, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: '❌ Solicitud no encontrada'
      });
    }

    res.json({
      success: true,
      message: `✅ Estado actualizado a: ${estado}`,
      data: result.rows[0]
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: '❌ Error actualizando estado',
      error: err.message
    });
  }
});

// ✅ GET - Estadísticas para dashboard
app.get('/api/estadisticas', requireFounderAuth, async (req, res) => {
  try {
    const queries = {
      total: 'SELECT COUNT(*) as total FROM aplicantes',
      porEstado: `
        SELECT estado, COUNT(*) as cantidad 
        FROM aplicantes 
        GROUP BY estado
      `,
      porModelo: `
        SELECT modelo_clasificacion as modelo, COUNT(*) as cantidad 
        FROM aplicantes 
        GROUP BY modelo_clasificacion
      `,
      promedioPuntaje: `
        SELECT AVG(puntaje_final)::NUMERIC(10,2) as promedio
        FROM aplicantes
      `,
      promedioModulos: `
        SELECT 
          AVG(score_artistico)::NUMERIC(10,2) as artistico,
          AVG(score_tecnico)::NUMERIC(10,2) as tecnico,
          AVG(score_humano)::NUMERIC(10,2) as humano,
          AVG(score_organizativo)::NUMERIC(10,2) as organizativo,
          AVG(score_comercial)::NUMERIC(10,2) as comercial
        FROM aplicantes
      `
    };

    const stats = {};
    for (const [key, query] of Object.entries(queries)) {
      const result = await pool.query(query);
      stats[key] = result.rows;
    }

    res.json({
      success: true,
      data: stats
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: '❌ Error obteniendo estadísticas',
      error: err.message
    });
  }
});

// ✅ POST - Enviar email (próximo: integrar SendGrid)
app.post('/api/enviar-email', async (req, res) => {
  try {
    const { email, tipo, nombre } = req.body;

    // TODO: Integrar SendGrid
    console.log(`📧 Email ${tipo} a ${email} para ${nombre}`);

    res.json({
      success: true,
      message: '✅ Email enviado (TODO: Implementar SendGrid)'
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: '❌ Error enviando email',
      error: err.message
    });
  }
});

// ✅ GET - Exportar datos como CSV
function escapeCsvCell(value) {
  if (value === null || value === undefined) return '""';
  const text = Array.isArray(value) ? value.join(' | ') : String(value);
  return `"${text.replace(/"/g, '""')}"`;
}

function parseDatosCompletos(raw) {
  if (!raw) return {};
  if (typeof raw === 'object') return raw;
  try {
    return JSON.parse(raw);
  } catch (err) {
    return {};
  }
}

function collectResponseKeys(rows) {
  const keys = new Set();
  rows.forEach((row) => {
    const datos = parseDatosCompletos(row.datos_completos);
    const responses = datos.responses || {};
    Object.keys(responses).forEach((key) => keys.add(key));
  });
  return Array.from(keys).sort();
}

function buildApplicantsCsv(rows) {
  const responseKeys = collectResponseKeys(rows);
  const baseHeaders = [
    'ID',
    'Nombre',
    'Nombre Artístico',
    'Email',
    'WhatsApp',
    'Edad',
    'País',
    'Score Artístico',
    'Score Técnico',
    'Score Humano',
    'Score Organizativo',
    'Score Comercial',
    'Puntaje Final',
    'Modelo',
    'Estado',
    'Fecha'
  ];
  const headers = [...baseHeaders, ...responseKeys.map((key) => `Respuesta: ${key}`)];

  let csv = `${headers.map(escapeCsvCell).join(',')}\n`;

  rows.forEach((row) => {
    const datos = parseDatosCompletos(row.datos_completos);
    const responses = datos.responses || {};
    const baseValues = [
      row.id,
      row.nombre,
      row.nombre_artistico,
      row.email,
      row.whatsapp,
      row.edad,
      row.pais,
      row.score_artistico,
      row.score_tecnico,
      row.score_humano,
      row.score_organizativo,
      row.score_comercial,
      row.puntaje_final,
      row.modelo_clasificacion,
      row.estado,
      row.created_at
    ];
    const responseValues = responseKeys.map((key) => responses[key] ?? '');
    csv += `${[...baseValues, ...responseValues].map(escapeCsvCell).join(',')}\n`;
  });

  return csv;
}

app.get('/api/exportar-csv', requireFounderAuth, async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT *
      FROM aplicantes
      ORDER BY created_at DESC
    `);

    const csv = buildApplicantsCsv(result.rows);

    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader('Content-Disposition', 'attachment; filename="aplicantes_completo.csv"');
    res.send(`\uFEFF${csv}`);

  } catch (err) {
    res.status(500).json({
      success: false,
      message: '❌ Error exportando CSV',
      error: err.message
    });
  }
});

app.get('/api/aplicantes/:id/exportar-csv', requireFounderAuth, async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      'SELECT * FROM aplicantes WHERE id = $1',
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: '❌ Solicitud no encontrada'
      });
    }

    const row = result.rows[0];
    const csv = buildApplicantsCsv([row]);
    const safeName = String(row.nombre_artistico || row.nombre || 'aplicante')
      .replace(/[^a-zA-Z0-9_-]+/g, '_')
      .slice(0, 40);

    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader('Content-Disposition', `attachment; filename="aplicante_${row.id}_${safeName}.csv"`);
    res.send(`\uFEFF${csv}`);

  } catch (err) {
    res.status(500).json({
      success: false,
      message: '❌ Error exportando CSV individual',
      error: err.message
    });
  }
});

// ================================
// INICIAR SERVIDOR
// ================================

app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════╗
║  🚀 API PRODUCERS GO - NEON READY     ║
╠════════════════════════════════════════╣
║  Server running on port ${PORT}              
║  Database: PostgreSQL (Neon)
║  Endpoints ready for frontend
╚════════════════════════════════════════╝

📍 Test: http://localhost:${PORT}/api/test
📍 POST formulario: POST /api/aplicantes
📍 GET solicitudes: GET /api/aplicantes
📍 Dashboard: GET /api/estadisticas
  `);
});

module.exports = app;
