ÍÍ# 🚀 API PRODUCERS GO - GUÍA COMPLETA

**Estado:** ✅ Lista para Neon  
**Backend:** Node.js + Express  
**Base de Datos:** PostgreSQL (Neon)  
**Versión:** 1.0

---

## 📦 Archivos de API

```
├── server.js                    ← SERVIDOR PRINCIPAL
├── package.json                 ← DEPENDENCIAS
├── .env.example                 ← VARIABLES DE ENTORNO (copiar a .env)
├── database.sql                 ← SCHEMA DE BASE DE DATOS
├── api-config.js                ← CLIENTE API (para formulario)
├── panel-api-config.js          ← CLIENTE API (para panel admin)
├── SETUP-NEON.md               ← GUÍA PASO A PASO
├── EJEMPLO-INTEGRACION-API.js  ← CÓDIGO DE EJEMPLO
└── README-API.md               ← Este archivo
```

---

## ⚡ Inicio Rápido (5 min)

### 1. Preparar Neon
```bash
# Crear cuenta: https://neon.tech
# Crear proyecto
# Ejecutar database.sql en SQL Editor
# Copiar CONNECTION STRING
```

### 2. Configurar Backend
```bash
# Copiar .env.example a .env
cp .env.example .env

# Editar .env con tu DATABASE_URL de Neon
# DATABASE_URL=postgresql://...

# Instalar dependencias
npm install

# Iniciar servidor
npm start
```

### 3. Probar API
```bash
# En otra terminal
curl http://localhost:5000/api/test
# Deberías ver: { "status": "OK", ... }
```

### 4. Conectar Frontend
```javascript
// En formulario-admision-productores.html
// Incluir: <script src="api-config.js"></script>
// Usar: await enviarAplicanteAAPI(datos)

// En panel-admin.html
// Incluir: <script src="panel-api-config.js"></script>
// Usar: const apps = await obtenerAplicantesDeAPI()
```

---

## 🔌 ENDPOINTS

### Solicitudes

#### POST `/api/aplicantes` - Crear solicitud
```bash
curl -X POST http://localhost:5000/api/aplicantes \
  -H "Content-Type: application/json" \
  -d '{
    "personalData": { "nombre": "...", ... },
    "scores": { "artistico": 8.2, ... },
    "finalScore": 8.14,
    "classification": { "model": "A/B/C", ... }
  }'
```

**Response:**
```json
{
  "success": true,
  "id": 1,
  "message": "✅ Solicitud recibida correctamente"
}
```

#### GET `/api/aplicantes` - Obtener todas
```bash
curl "http://localhost:5000/api/aplicantes?estado=pending&modelo=A/B/C&buscar=juan"
```

**Query params:**
- `estado`: pending, review, approved, rejected
- `modelo`: A/B/C, B/C, B, D, E
- `buscar`: nombre o email

**Response:**
```json
{
  "success": true,
  "total": 5,
  "data": [
    {
      "id": 1,
      "nombre": "Juan García",
      "email": "juan@example.com",
      "puntaje_final": 8.14,
      "estado": "pending",
      ...
    }
  ]
}
```

#### GET `/api/aplicantes/:id` - Obtener una
```bash
curl http://localhost:5000/api/aplicantes/1
```

#### PUT `/api/aplicantes/:id/estado` - Actualizar estado
```bash
curl -X PUT http://localhost:5000/api/aplicantes/1/estado \
  -H "Content-Type: application/json" \
  -d '{ "estado": "approved", "notas": "Excelente perfil" }'
```

---

### Estadísticas

#### GET `/api/estadisticas` - Dashboard
```bash
curl http://localhost:5000/api/estadisticas
```

**Response:**
```json
{
  "success": true,
  "data": {
    "total": [{ "total": 5 }],
    "porEstado": [
      { "estado": "pending", "cantidad": 2 },
      { "estado": "approved", "cantidad": 1 }
    ],
    "promedioPuntaje": [{ "promedio": "6.50" }],
    "promedioModulos": [{
      "artistico": "6.36",
      "tecnico": "6.30",
      ...
    }]
  }
}
```

---

### Exportar

#### GET `/api/exportar-csv` - Descargar CSV
```bash
curl http://localhost:5000/api/exportar-csv > aplicantes.csv
```

---

### Email (Próximo)

#### POST `/api/enviar-email` - Enviar email
```bash
curl -X POST http://localhost:5000/api/enviar-email \
  -H "Content-Type: application/json" \
  -d '{
    "email": "juan@example.com",
    "nombre": "Juan García",
    "tipo": "confirmacion"
  }'
```

---

## 📁 Base de Datos

### Tabla: `aplicantes`

| Campo | Tipo | Descripción |
|-------|------|-------------|
| id | SERIAL | ID único |
| nombre | VARCHAR | Nombre completo |
| nombre_artistico | VARCHAR | Nombre artístico |
| email | VARCHAR | Email (único) |
| whatsapp | VARCHAR | Teléfono |
| edad | INTEGER | Edad |
| pais | VARCHAR | País |
| score_artistico | DECIMAL | Puntaje módulo artístico |
| score_tecnico | DECIMAL | Puntaje módulo técnico |
| score_humano | DECIMAL | Puntaje módulo humano |
| score_organizativo | DECIMAL | Puntaje módulo organizativo |
| score_comercial | DECIMAL | Puntaje módulo comercial |
| puntaje_final | DECIMAL | Puntaje final (0-5.0) |
| modelo_clasificacion | VARCHAR | Modelo (A/B/C, B/C, B, D, E) |
| estado | VARCHAR | Estado (pending, review, approved, rejected) |
| datos_completos | JSONB | Datos completos en JSON |
| created_at | TIMESTAMP | Fecha de creación |
| updated_at | TIMESTAMP | Última actualización |

### Tabla: `auditoria`

Registra todos los cambios de estado para auditoría.

---

## 🔐 Seguridad (TODO)

Implementar próximamente:

- [ ] **CORS**: Restringir a dominios permitidos
- [ ] **Rate Limiting**: Limitar requests por IP
- [ ] **Validación**: Validar datos en servidor
- [ ] **Autenticación**: Login para panel admin
- [ ] **JWT**: Tokens para API
- [ ] **HTTPS**: Obligatorio en producción
- [ ] **SQL Injection**: Usar prepared statements (ya hecho)

---

## 🧪 Tests en Consola

### Test 1: Conexión
```javascript
fetch('http://localhost:5000/api/test')
  .then(r => r.json())
  .then(console.log);
```

### Test 2: Crear solicitud
```javascript
fetch('http://localhost:5000/api/aplicantes', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    personalData: {
      nombre: 'Test', nombreArtistico: 'TX',
      email: `test${Date.now()}@ex.com`,
      whatsapp: '+54 9 11 12345678', edad: 25, pais: 'Argentina'
    },
    scores: { artistico: 8, tecnico: 7, humano: 8, organizativo: 7, comercial: 7 },
    finalScore: 7.6,
    classification: { model: 'B/C', label: 'MUY BUENO' }
  })
})
.then(r => r.json())
.then(console.log);
```

### Test 3: Obtener solicitudes
```javascript
fetch('http://localhost:5000/api/aplicantes')
  .then(r => r.json())
  .then(console.log);
```

### Test 4: Actualizar estado
```javascript
fetch('http://localhost:5000/api/aplicantes/1/estado', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    estado: 'approved',
    notas: 'Aprobado por el equipo'
  })
})
.then(r => r.json())
.then(console.log);
```

### Test 5: Estadísticas
```javascript
fetch('http://localhost:5000/api/estadisticas')
  .then(r => r.json())
  .then(console.log);
```

---

## 📝 Variables de Entorno

**`.env`** (crear copiando de `.env.example`):

```env
# Base de Datos
DATABASE_URL=postgresql://user:pass@ep-xyz.us-east-1.neon.tech/producers_go?sslmode=require

# Servidor
PORT=5000
NODE_ENV=development

# Frontend
FRONTEND_URL=http://localhost:3000

# Email (próximo)
SENDGRID_API_KEY=your_key

# Seguridad (próximo)
JWT_SECRET=your_secret
API_KEY=your_api_key
```

---

## 🐛 Troubleshooting

| Problema | Causa | Solución |
|----------|-------|----------|
| "Cannot connect to database" | URL incorrecta | Verifica DATABASE_URL en .env |
| "ECONNREFUSED" | Servidor no corre | Ejecuta `npm start` |
| "relation aplicantes does not exist" | Tablas no creadas | Ejecuta database.sql en Neon |
| "SSL error" | SSL no configurado | URL debe tener `?sslmode=require` |
| CORS error | Frontend en diferente puerto | Instalar cors en server (ya hecho) |

---

## 🚀 Deploy a Producción

### Opción A: Render (Recomendado)

1. Push a GitHub
2. Conectar con Render
3. Agregar `DATABASE_URL` en variables
4. Deploy automático

### Opción B: Heroku

```bash
heroku create app-name
heroku config:set DATABASE_URL="..."
git push heroku main
```

### Opción C: AWS/Azure

Usar Elastic Beanstalk o App Service

---

## 📊 Monitoreo

### Ver logs en Render
```
Dashboard → Logs
```

### Ver logs locales
```bash
npm start
# Los logs aparecen en consola
```

### Monitorear BD en Neon
```
Neon Dashboard → Monitoring
```

---

## 🔄 Roadmap

**v1.0** (Actual)
- ✅ API básica con CRUD
- ✅ Conexión a Neon
- ✅ Endpoints funcionales
- ✅ Almacenamiento JSON

**v1.1** (Próximo)
- ⏳ Autenticación JWT
- ⏳ Rate limiting
- ⏳ Validación mejorada
- ⏳ Logs de auditoría

**v1.2**
- ⏳ Email automático (SendGrid)
- ⏳ Webhooks
- ⏳ Caché Redis
- ⏳ Búsqueda avanzada

**v2.0**
- ⏳ Admin dashboard en API
- ⏳ Reportes automáticos
- ⏳ Análisis de datos
- ⏳ Alertas en tiempo real

---

## 📚 Documentación Relacionada

- [SETUP-NEON.md](SETUP-NEON.md) - Conectar a Neon paso a paso
- [database.sql](database.sql) - Schema de base de datos
- [EJEMPLO-INTEGRACION-API.js](EJEMPLO-INTEGRACION-API.js) - Código de ejemplo
- [api-config.js](api-config.js) - Cliente para formulario
- [panel-api-config.js](panel-api-config.js) - Cliente para panel admin

---

## 💡 Tips

- **Desarrollo local:** Usa `npm run dev` (con nodemon)
- **Testing:** Usa Postman o Insomnia
- **Debugging:** Activa logs en `server.js`
- **Performance:** Agrega índices en BD según necesidad

---

## 📞 Soporte

Si algo no funciona:

1. Verifica `.env`
2. Verifica conexión a Neon (`/api/test`)
3. Revisa logs en consola
4. Verifica BD en Neon SQL editor
5. Prueba endpoints en consola (F12)

---

**API lista para usar y escalar** ✅

Próximo paso: [SETUP-NEON.md](SETUP-NEON.md)
