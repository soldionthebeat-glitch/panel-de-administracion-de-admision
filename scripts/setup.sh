#!/bin/bash
cd "$(dirname "$0")/../backend" || exit 1
# ================================
# 🚀 SETUP RÁPIDO - NEON + API
# ================================
# Copia y pega estos comandos en terminal

echo "
╔════════════════════════════════════════════════════════════════════════╗
║                   🎵 PRODUCERS GO - SETUP RÁPIDO                      ║
║                                                                        ║
║  Tu sistema está 100% listo. Sigue estos pasos para conectar a Neon  ║
╚════════════════════════════════════════════════════════════════════════╝
"

echo "
📋 PREREQUISITOS
================
1. Crea cuenta en Neon: https://neon.tech
2. Crea proyecto: 'producers_go'
3. Copia Connection String (copiaremos en paso 5)
"

echo "
⚡ PASO 1: Verificar Node.js instalado
======================================="
node --version
echo "✅ Si ves versión, continúa. Si no, instala desde https://nodejs.org"

echo "
📁 PASO 2: Ver archivos creados
================================"
ls -la | grep -E "(server.js|package.json|.env|database.sql|api-config)"
echo "✅ Deberías ver estos archivos"

echo "
🔑 PASO 3: Crear archivo .env
=============================="
if [ -f .env ]; then
  echo "⚠️  .env ya existe"
else
  cp .env.example .env
  echo "✅ .env creado"
fi

echo "
✏️  PASO 4: Editar .env (IMPORTANTE)
====================================="
echo "Abre .env en tu editor favorito y reemplaza:"
echo "DATABASE_URL=postgresql://user:password@ep-xyz.us-east-1.neon.tech/producers_go?sslmode=require"
echo ""
echo "Espera antes de continuar..."
echo "Press ENTER cuando hayas guardado .env"
read

echo "
📦 PASO 5: Instalar dependencias
================================="
npm install
echo "✅ Dependencias instaladas"

echo "
🗄️  PASO 6: Crear tablas en Neon (IMPORTANTE)
================================================"
echo "1. Ve a: https://console.neon.tech"
echo "2. Abre tu proyecto 'producers_go'"
echo "3. Ve a SQL Editor"
echo "4. Copia contenido de 'database.sql'"
echo "5. Pégalo en SQL Editor"
echo "6. Click Execute"
echo ""
echo "Espera antes de continuar..."
echo "Press ENTER cuando hayas creado las tablas"
read

echo "
🧪 PASO 7: Test conexión a Neon
================================"
node -e "
require('dotenv').config();
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.log('❌ Error conectando a Neon:');
    console.error(err.message);
  } else {
    console.log('✅ Conectado a Neon!');
    console.log('Timestamp:', res.rows[0]);
  }
  process.exit(0);
});
"

echo "
🚀 PASO 8: Iniciar servidor
============================="
echo "Ejecuta:"
echo "npm start"
echo ""
echo "Deberías ver:"
echo "╔════════════════════════════════════════╗"
echo "║  🚀 API PRODUCERS GO - NEON READY     ║"
echo "║  Server running on port 5000           ║"
echo "╚════════════════════════════════════════╝"

echo "
📡 PASO 9: En otra terminal, test API
========================================"
echo "Abre otra ventana de terminal y ejecuta:"
echo ""
echo "curl http://localhost:5000/api/test"
echo ""
echo "Deberías ver:"
echo '{\"status\":\"OK\",\"message\":\"✅ Conexión a Neon exitosa\"}'

echo "
🎉 LISTO!
=========="
echo "✅ API conectada a Neon"
echo "✅ Formulario envía a API"
echo "✅ Panel admin lee de API"
echo "✅ Datos guardados en PostgreSQL"
echo ""
echo "Próximos pasos:"
echo "1. Abre formulario en navegador"
echo "2. Completa y envía"
echo "3. Abre panel admin"
echo "4. Ve los datos desde BD"
echo "5. Ready para producción! 🚀"

echo "
📚 DOCUMENTACIÓN
================"
echo "- Setup completo: SETUP-NEON.md"
echo "- API completa: README-API.md"
echo "- Ejemplos: EJEMPLO-INTEGRACION-API.js"
echo "- Todo: RESUMEN-PROYECTO.md"
