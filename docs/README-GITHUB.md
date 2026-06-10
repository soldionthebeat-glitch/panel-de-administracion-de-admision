![Header](https://via.placeholder.com/1000x200/ff6b00/ffffff?text=PRODUCERS+GO+-+Sistema+de+Admisión+IA)

# 🎵 PRODUCERS GO - Sistema de Admisión Inteligente

![GitHub](https://img.shields.io/badge/GitHub-Live-blue)
![Status](https://img.shields.io/badge/Status-Production%20Ready-green)
![License](https://img.shields.io/badge/License-ISC-blue)
![Version](https://img.shields.io/badge/Version-1.0-orange)

**Sistema profesional de admisión de productores musicales con evaluación automática por IA, API REST y base de datos en Neon PostgreSQL.**

---

## 🎯 Características Principales

### 🤖 IA Automática
- **5 módulos** de evaluación independientes
- **Evaluación automática** del formulario
- **Puntajes** en escala 0-5.0
- **Clasificación** automática A/B/C/D/E

### 📊 Panel Administrativo
- **Dashboard** con estadísticas en tiempo real
- **Tabla filtrable** de solicitudes
- **Búsqueda** por nombre/email
- **Gráficos** de clasificación y puntajes
- **Exportar CSV** de datos

### 🔌 API REST Completa
- **8 endpoints** funcionales
- **Conexión a Neon PostgreSQL**
- **CORS habilitado**
- **Fallback a localStorage** si API no disponible

### 📈 Base de Datos
- **PostgreSQL en Neon** (gratuito)
- **3 tablas** configuradas
- **Views estadísticas** automáticas
- **Auditoría de cambios**

---

## 🚀 Quick Start

### 1️⃣ Opción Local (Sin Servidor)

```bash
# Abre en navegador
open formulario-admision-productores.html

# Completa y envía
# Los datos se guardan en localStorage
```

### 2️⃣ Opción Con API + Neon (Recomendado)

```bash
# 1. Crear cuenta Neon
# Ir a https://neon.tech

# 2. Crear proyecto
# Dashboard → Create Project → "producers_go"

# 3. Ejecutar database.sql
# SQL Editor → Copy & Paste → Execute

# 4. Configurar backend
cp .env.example .env
# Editar .env con tu DATABASE_URL

npm install
npm start

# ✅ API conectada en http://localhost:5000
```

### 3️⃣ Opción Producción (Render/Heroku)

```bash
# Push a GitHub
git push

# Conectar con Render/Heroku
# Deploy automático
```

---

## 📦 Estructura del Proyecto

```
├── 🎮 APLICACIÓN
│   ├── formulario-admision-productores.html    (Formulario IA)
│   ├── panel-admin.html                        (Dashboard)
│   └── index.html                              (Vista general)
│
├── 🔌 API & BACKEND
│   ├── server.js                               (Servidor Express)
│   ├── package.json                            (Dependencias)
│   ├── database.sql                            (Schema PostgreSQL)
│   ├── .env.example                            (Variables entorno)
│   ├── api-config.js                           (Cliente API)
│   └── panel-api-config.js                     (Cliente API panel)
│
├── 📚 DOCUMENTACIÓN
│   ├── QUICK-START.md                          (15 min)
│   ├── SETUP-NEON.md                           (Paso a paso)
│   ├── README-API.md                           (API referencia)
│   ├── GITHUB-SETUP.md                         (GitHub setup)
│   └── (más archivos)
│
└── ⚙️ SETUP
    ├── setup-github.sh                         (Script Linux/Mac)
    ├── setup-github.bat                        (Script Windows)
    ├── setup.sh                                (Setup Neon)
    └── setup.bat                               (Setup Neon)
```

---

## 📋 Endpoints API

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `GET` | `/api/test` | Test conexión a Neon |
| `POST` | `/api/aplicantes` | Crear nueva solicitud |
| `GET` | `/api/aplicantes` | Obtener todas (con filtros) |
| `GET` | `/api/aplicantes/:id` | Obtener una específica |
| `PUT` | `/api/aplicantes/:id/estado` | Cambiar estado |
| `GET` | `/api/estadisticas` | Dashboard stats |
| `GET` | `/api/exportar-csv` | Descargar CSV |
| `POST` | `/api/enviar-email` | Enviar email (próximo) |

---

## 🎨 Módulos de Evaluación IA

```
🎨 ARTÍSTICA (25%)        → Identidad sonora, diferenciación
⚙️ TÉCNICA (20%)          → Experiencia, habilidades, mezcla
👥 HUMANA (20%)           → Actitud, colaboración, feedback
📁 ORGANIZATIVA (20%)     → Orden, profesionalismo
💰 COMERCIAL (15%)        → Catálogo, ingresos, presencia
════════════════════════════════════════════════════════════════
PUNTAJE FINAL: 0-5.0 (Automático)
CLASIFICACIÓN: A/B/C/D/E (Automática)
```

---

## 📊 Clasificaciones

| Puntaje | Modelo | Estado | Acción |
|---------|--------|--------|--------|
| 4.6-5.0 | A/B/C | 🟢 EXCELENTE | Firma ya |
| 4.1-4.5 | B/C | 🟢 MUY BUENO | Firma 3-5 días |
| 3.6-4.0 | B | 🟡 BUENO | Entrevista |
| 3.1-3.5 | D | 🟡 ACEPTABLE | Prueba |
| <3.1 | E | 🔴 BAJO | Rechazo |

---

## 💻 Requisitos Técnicos

### Para Usar Localmente
- ✅ Navegador moderno (Chrome, Firefox, Safari, Edge)
- ✅ Node.js 14+ (para API)
- ✅ Git (para versionado)

### Para Producción
- ✅ Servidor web (Nginx, Apache)
- ✅ Node.js runtime
- ✅ PostgreSQL (Neon recomendado)
- ✅ HTTPS obligatorio
- ✅ Email service (SendGrid, Gmail)

---

## 🔧 Instalación

### 1. Clonar Repositorio

```bash
git clone https://github.com/tuusuario/producers-go.git
cd producers-go
```

### 2. Configurar Backend

```bash
# Copiar variables de entorno
cp .env.example .env

# Editar .env con tu DATABASE_URL de Neon
nano .env

# Instalar dependencias
npm install
```

### 3. Crear Base de Datos

```bash
# En Neon SQL Editor:
# Copy & Paste contenido de database.sql
# Click: Execute
```

### 4. Iniciar Servidor

```bash
npm start
# Server running on port 5000
```

### 5. Abrir Aplicación

```bash
# En navegador:
http://localhost:3000/formulario-admision-productores.html
```

---

## 📚 Documentación

| Documento | Contenido | Tiempo |
|-----------|-----------|--------|
| [QUICK-START.md](QUICK-START.md) | Start 15 minutos | ⚡ 15 min |
| [SETUP-NEON.md](SETUP-NEON.md) | Conectar a Neon | 📖 20 min |
| [README-API.md](README-API.md) | API referencia | 📚 30 min |
| [GITHUB-SETUP.md](GITHUB-SETUP.md) | GitHub vinculación | 🔗 5 min |
| [SISTEMA-IA-DOCUMENTACION.md](SISTEMA-IA-DOCUMENTACION.md) | IA técnico | 🧠 45 min |
| [REFERENCIA-VISUAL.md](REFERENCIA-VISUAL.md) | Tablas y gráficos | 📊 15 min |

---

## 🧪 Testing

### API Test

```bash
# Test conexión
curl http://localhost:5000/api/test

# Obtener solicitudes
curl http://localhost:5000/api/aplicantes

# Ver estadísticas
curl http://localhost:5000/api/estadisticas
```

### Browser Console

```javascript
// Test en consola (F12)
fetch('http://localhost:5000/api/test')
  .then(r => r.json())
  .then(console.log);
```

---

## 🚀 Deploy

### Render (Recomendado)

```bash
# 1. Push a GitHub
git push

# 2. Ve a https://render.com
# 3. Connect GitHub
# 4. Deploy automático
```

### Heroku

```bash
heroku create
heroku config:set DATABASE_URL="tu-neon-url"
git push heroku main
```

---

## 🔒 Seguridad

### Ya Implementado
- ✅ CORS habilitado
- ✅ Variables de entorno (.env)
- ✅ SQL Injection prevention (Prepared statements)
- ✅ .gitignore para secretos

### Próximo
- ⏳ Autenticación JWT
- ⏳ Rate limiting
- ⏳ HTTPS enforcement
- ⏳ Admin login

---

## 📧 Email Automático (Próximo)

Sistema preparado para integrar SendGrid:

```javascript
// Próximo: Enviar emails automáticos
- Confirmación recepción
- Aprobación
- En revisión legal
- Rechazo
```

---

## 🤝 Contribuir

Este proyecto está listo para colaboración:

1. Fork el repo
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push (`git push origin feature/AmazingFeature`)
5. Abre Pull Request

---

## 📞 Soporte

- 📖 Ver [documentación](README.md)
- 🐛 [Reportar bugs](https://github.com/tuusuario/producers-go/issues)
- 💡 [Sugerir features](https://github.com/tuusuario/producers-go/discussions)

---

## 📄 Licencia

Este proyecto está bajo licencia **ISC** - Ver [LICENSE](LICENSE) para detalles.

---

## 👨‍💻 Autor

**PRODUCERS GO Team**
- 🎵 Sistema de admisión para productores
- 🤖 IA automática de evaluación
- 🚀 Ready para producción

---

## 🙏 Agradecimientos

- Neon - Base de datos PostgreSQL
- Express.js - Framework web
- Node.js - Runtime

---

## 📈 Roadmap

### v1.0 (Actual)
- ✅ Formulario IA
- ✅ Panel Admin
- ✅ API REST
- ✅ Base datos Neon

### v1.1
- ⏳ Autenticación
- ⏳ Email automático
- ⏳ Dashboards avanzados

### v2.0
- ⏳ Mobile app
- ⏳ Analytics avanzado
- ⏳ Integraciones externas

---

## ⭐ Si Te Fue Útil

Dale una ⭐ al repositorio para mostrar tu apoyo!

---

**Última actualización:** Junio 2026  
**Estado:** ✅ Producción  
**Versión:** 1.0

---

[🔝 Volver al inicio](#-producers-go---sistema-de-admisión-inteligente)
