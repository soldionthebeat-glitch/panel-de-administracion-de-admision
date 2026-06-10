# 🚀 CONECTAR A NEON - GUÍA PASO A PASO

## 📋 ¿Qué es Neon?

**Neon** es una plataforma que hospeda bases de datos PostgreSQL en la nube de forma **gratuita** (con límite de uso). Es perfecta para este proyecto.

🔗 Sitio: https://neon.tech

---

## ⚡ PASO 1: Crear Cuenta en Neon

1. **Ve a** https://console.neon.tech/
2. **Click en** "Sign Up" o regístrate con GitHub
3. **Confirma** tu email
4. **Completa** tu perfil

---

## 🔧 PASO 2: Crear Proyecto en Neon

1. **En el dashboard**, click en **"Create Project"**
2. **Dale un nombre:** `producers_go` (o similar)
3. **Region:** Elige más cercana a ti (e.g., `us-east-1`)
4. **Branch:** Deja default
5. **Click en "Create"**

---

## 📊 PASO 3: Obtener Connection String

1. **Ve a tu proyecto recién creado**
2. **Ve a la pestaña "Connection"**
3. **Copia la URL de conexión** que aparece. Se verá así:

```
postgresql://user:password@ep-xyz123.us-east-1.neon.tech/producers_go?sslmode=require
```

---

## 🗄️ PASO 4: Crear Tablas en Neon

### Opción A: Usar Neon SQL Editor (Más Fácil)

1. **En Neon dashboard**, click en **"SQL Editor"**
2. **Copia TODO el contenido** de `database.sql`
3. **Pégalo en el SQL Editor**
4. **Click en "Execute"**
5. ✅ ¡Tablas creadas!

### Opción B: Usar psql (Línea de comandos)

```bash
# Instalar postgres client (si no lo tienes)
# Windows: https://www.postgresql.org/download/windows/
# Mac: brew install postgresql
# Linux: sudo apt install postgresql-client

# Conectar a Neon
psql "postgresql://user:password@ep-xyz123.us-east-1.neon.tech/producers_go?sslmode=require"

# Copiar y pegar el contenido de database.sql
\i database.sql

# Ver tablas creadas
\dt
```

---

## 💻 PASO 5: Configurar Backend Local

### 5.1 Instalar Node.js (si no lo tienes)

**Descarga desde:** https://nodejs.org/ (versión LTS)

### 5.2 Crear archivo `.env`

1. **En la carpeta del proyecto**, copia `.env.example` como `.env`

```bash
cp .env.example .env
```

2. **Abre `.env`** y reemplaza `DATABASE_URL`:

```
DATABASE_URL=postgresql://user:password@ep-xyz123.us-east-1.neon.tech/producers_go?sslmode=require
```

(Usa la URL que copiaste en PASO 3)

### 5.3 Instalar dependencias

```bash
npm install
```

Esto instalará:
- Express (framework web)
- pg (cliente PostgreSQL)
- cors (seguridad)
- dotenv (variables de entorno)

### 5.4 Iniciar servidor

```bash
npm start
```

Deberías ver:

```
╔════════════════════════════════════════╗
║  🚀 API PRODUCERS GO - NEON READY     ║
╠════════════════════════════════════════╣
║  Server running on port 5000              
║  Database: PostgreSQL (Neon)
║  Endpoints ready for frontend
╚════════════════════════════════════════╝
```

---

## 🧪 PASO 6: Probar API

### Test 1: ¿Conecta a Neon?

```bash
curl http://localhost:5000/api/test
```

Deberías ver:
```json
{
  "status": "OK",
  "message": "✅ Conexión a Neon exitosa"
}
```

### Test 2: POST - Enviar solicitud

```bash
curl -X POST http://localhost:5000/api/aplicantes \
  -H "Content-Type: application/json" \
  -d '{
    "personalData": {
      "nombre": "Juan García",
      "nombreArtistico": "ProducerX",
      "email": "juan@example.com",
      "whatsapp": "+54 9 11 12345678",
      "edad": 28,
      "pais": "Argentina"
    },
    "scores": {
      "artistico": 8.2,
      "tecnico": 8.9,
      "humano": 8.1,
      "organizativo": 7.8,
      "comercial": 7.5
    },
    "finalScore": 8.14,
    "classification": {
      "model": "A/B/C",
      "label": "EXCELENTE"
    }
  }'
```

### Test 3: GET - Obtener solicitudes

```bash
curl http://localhost:5000/api/aplicantes
```

### Test 4: GET - Estadísticas

```bash
curl http://localhost:5000/api/estadisticas
```

---

## 🔗 PASO 7: Conectar Frontend (Formulario)

### 7.1 Editar URL Base

En `formulario-admision-productores.html`, busca:

```javascript
const API_BASE = 'http://localhost:5000/api';
```

Cámbialo a tu URL (mantén `http://localhost:5000/api` para desarrollo local)

### 7.2 Modificar Submit del Formulario

En el evento `submit`, cambia:

**De:**
```javascript
localStorage.setItem('pg_applications', JSON.stringify(aplicantes));
```

**A:**
```javascript
// Llamar a función de api-config.js
const resultado = await enviarAplicanteAAPI(datosFormulario);
if (resultado.success) {
  // Mostrar éxito
  console.log('✅ Solicitud guardada en Neon');
} else {
  // Fallback a localStorage
  console.log('⚠️ Usando localStorage como backup');
}
```

---

## 📊 PASO 8: Conectar Panel Admin

### 8.1 Cargar datos de API

En `panel-admin.html`, al cargar:

**De:**
```javascript
const apps = JSON.parse(localStorage.getItem('pg_applications')) || [];
displayApplications(apps);
```

**A:**
```javascript
// Llamar a función de panel-api-config.js
const apps = await obtenerAplicantesDeAPI();
displayApplications(apps);
```

### 8.2 Actualizar estado

**De:**
```javascript
apps[index].status = newStatus;
localStorage.setItem('pg_applications', JSON.stringify(apps));
```

**A:**
```javascript
await actualizarEstado(apps[index].id, newStatus);
```

---

## 🌍 PASO 9: Deploy a Producción

### Opción A: Netlify (Estático, RECOMENDADO)

1. Sube HTML/CSS/JS a GitHub
2. Conecta GitHub a Netlify
3. Deploy automático

### Opción B: Render (Dinámico con Backend)

1. Sube código a GitHub
2. Conecta GitHub a Render
3. Crea "New Web Service"
4. Conecta con tu repo
5. Render detecta `package.json`
6. Deploy automático

### Opción C: Heroku (Alternativa)

1. `heroku create`
2. `heroku config:set DATABASE_URL="tu-neon-url"`
3. `git push heroku main`

---

## 🔒 Variables de Entorno en Producción

**Nunca** hagas push de `.env` a GitHub. En su lugar:

### Render:
1. Go to Dashboard → Settings
2. Environment
3. Agregar `DATABASE_URL`

### Netlify:
1. Site settings → Environment
2. Agregar `REACT_APP_API_URL`

### Heroku:
```bash
heroku config:set DATABASE_URL="tu-neon-url"
```

---

## 📝 CHECKLIST

- [ ] Cuenta creada en Neon
- [ ] Proyecto creado en Neon
- [ ] Tablas creadas (database.sql ejecutado)
- [ ] `.env` creado con `DATABASE_URL`
- [ ] `npm install` completado
- [ ] Servidor iniciado: `npm start`
- [ ] Test API pasó: `/api/test`
- [ ] Formulario envía a API
- [ ] Panel admin lee de API
- [ ] Todo funciona localmente
- [ ] Deploy en producción
- [ ] Variables de entorno en prod

---

## 🆘 TROUBLESHOOTING

### Error: "Cannot connect to database"

**Causa:** URL incorrecta o no copiada bien
**Solución:** Copia nuevamente desde Neon SQL editor

### Error: "ECONNREFUSED"

**Causa:** Servidor Node no está corriendo
**Solución:** 
```bash
npm start
```

### Error: "relation aplicantes does not exist"

**Causa:** Tablas no fueron creadas
**Solución:** Ejecuta `database.sql` en Neon SQL editor

### Error: "ssl: CERTIFICATE_VERIFY_FAILED"

**Causa:** SSL no configurado correctamente
**Solución:** Verifica que URL tenga `?sslmode=require`

### Las solicitudes se guardan pero no aparecen

**Causa:** Pool de conexiones no cerrada
**Solución:** Asegúrate de hacer `await` en queries

---

## 📧 PRÓXIMO: Integrar Email

Una vez que todo funcione, agrega SendGrid:

1. Crear cuenta en https://sendgrid.com
2. Obtener API key
3. Agregar a `.env`: `SENDGRID_API_KEY=...`
4. Usar en `server.js` para enviar emails automáticos

---

## 📚 REFERENCIAS

- Neon docs: https://neon.tech/docs
- PostgreSQL: https://www.postgresql.org/docs/
- Express: https://expressjs.com/
- Node.js: https://nodejs.org/docs/

---

## ✅ ¡LISTO!

Una vez completes todos los pasos:

```
✅ API funcionando
✅ Neon conectado
✅ Datos en BD
✅ Frontend leyendo API
✅ Sistema completo
```

¡A producción! 🚀
