# 🔗 CONECTAR A GITHUB - GUÍA COMPLETA

## ⚡ Forma Más Rápida (3 minutos)

### Si Usas Windows

```bash
# Simplemente ejecuta:
setup-github.bat
```

### Si Usas Mac/Linux

```bash
# Dale permisos y ejecuta:
chmod +x setup-github.sh
./setup-github.sh
```

---

## 🎯 Pasos Manuales (Si Prefieres)

### PASO 1️⃣: Crear Repositorio en GitHub

1. Ve a **https://github.com/new**
2. **Nombre:** `producers-go` (o como prefieras)
3. **Descripción:** Sistema de Admisión de Productores con IA + API Neon
4. **Visibilidad:** Public ✓
5. **NO** inicializes con README
6. Click: **Create Repository**
7. **Copia la URL** que aparecerá (ej: `https://github.com/tuusuario/producers-go.git`)

---

### PASO 2️⃣: Verificar Git Instalado

```bash
git --version
```

**Si no lo ves:**
- Windows: Descarga de https://git-scm.com/
- Mac: `brew install git`
- Linux: `sudo apt install git`

---

### PASO 3️⃣: Inicializar Repositorio Local

En la carpeta del proyecto:

```bash
git init
```

---

### PASO 4️⃣: Agregar Todos los Archivos

```bash
git add .
```

**Ver qué se agregó:**
```bash
git status
```

---

### PASO 5️⃣: Configurar Usuario (Primera Vez)

```bash
git config --global user.email "tu-email@gmail.com"
git config --global user.name "Tu Nombre"
```

---

### PASO 6️⃣: Primer Commit

```bash
git commit -m "🚀 Initial commit - Sistema de Admisión de Productores con IA + API Neon"
```

---

### PASO 7️⃣: Conectar Repositorio Remoto

```bash
git remote add origin https://github.com/tuusuario/producers-go.git
```

(Reemplaza con tu URL real)

**Verificar que se conectó:**
```bash
git remote -v
```

---

### PASO 8️⃣: Renombrar Rama a `main`

```bash
git branch -M main
```

---

### PASO 9️⃣: Push a GitHub

```bash
git push -u origin main
```

**Primera vez:** Te pedirá autenticación. Elige una opción:
- **GitHub CLI** (recomendado)
- **Personal Access Token**
- **SSH Key**

---

## ✅ ¡Listo!

Visita tu repositorio:
```
https://github.com/tuusuario/producers-go
```

Deberías ver todos los archivos del proyecto.

---

## 📝 Comandos Diarios

### Ver cambios
```bash
git status
```

### Agregar cambios
```bash
git add .
```

### Hacer commit
```bash
git commit -m "Tu mensaje descriptivo"
```

### Subir a GitHub
```bash
git push
```

### Ver historial
```bash
git log --oneline
```

### Crear rama nueva
```bash
git branch tu-rama
git checkout tu-rama
```

### Descargar cambios de GitHub
```bash
git pull
```

---

## 🆘 Problemas Comunes

### "fatal: not a git repository"
```bash
# Asegúrate de estar en la carpeta correcta
cd "c:\Users\apell\OneDrive\Escritorio\Codigos\pagina admision"
git init
```

### "error: remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/tuusuario/producers-go.git
```

### "Permission denied (publickey)"
- Necesitas agregar SSH key
- O usa HTTPS en lugar de SSH

### "fatal: The current branch main does not have any upstream"
```bash
git push -u origin main
```

### "error: src refspec main does not match any"
```bash
# Hiciste commit? Verifica:
git log
# Si no hay commits:
git add .
git commit -m "Initial commit"
```

---

## 🚀 Deploy Automático Desde GitHub

Una vez en GitHub, puedes hacer deploy automático con:

### Opción 1: Render (Recomendado)
1. Ve a https://render.com
2. Conecta con GitHub
3. Selecciona tu repo
4. Deploy automático

### Opción 2: Heroku
```bash
heroku login
heroku create
git push heroku main
```

### Opción 3: Vercel (Para Frontend)
1. Ve a https://vercel.com
2. Import Project
3. Selecciona repo de GitHub
4. Deploy

---

## 📊 Estructura del Repo

Tu repositorio en GitHub tendrá esta estructura:

```
producers-go/
├── 🎮 Aplicación
│   ├── formulario-admision-productores.html
│   ├── panel-admin.html
│   └── index.html
├── 🔌 API Backend
│   ├── server.js
│   ├── package.json
│   └── database.sql
├── 📚 Documentación
│   ├── SETUP-NEON.md
│   ├── QUICK-START.md
│   ├── README-API.md
│   └── (más archivos)
├── .env.example
├── .gitignore
└── README.md
```

---

## 🔒 Variables Privadas

**Importante:** El archivo `.env` tiene datos sensibles:

✅ **`.env.example`** está en GitHub (es público)  
❌ **`.env`** NO está en GitHub (está en .gitignore)

Cuando clones el repo:
```bash
cp .env.example .env
# Luego edita .env con tus valores reales
```

---

## 📌 Badges para README

Puedes agregar estos badges en tu `README.md`:

```markdown
# PRODUCERS GO

[![GitHub](https://img.shields.io/badge/GitHub-producers--go-blue?logo=github)](https://github.com/tuusuario/producers-go)
[![License](https://img.shields.io/badge/License-ISC-green)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-14+-green?logo=node.js)](https://nodejs.org)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-blue?logo=postgresql)](https://neon.tech)
[![API](https://img.shields.io/badge/API-Express-orange?logo=express)](server.js)

Sistema de Admisión Inteligente para Productores Musicales
```

---

## ✅ Checklist Final

- [ ] ¿Creaste repo en GitHub?
- [ ] ¿Ejecutaste `git init`?
- [ ] ¿Hiciste `git add .`?
- [ ] ¿Hiciste `git commit`?
- [ ] ¿Conectaste remote con `git remote add`?
- [ ] ¿Hiciste `git push`?
- [ ] ¿Ves los archivos en GitHub?
- [ ] ¿Descargaste nuevamente para verificar?

---

## 🎉 ¡Listo!

Tu proyecto está en GitHub.

**Próximos pasos:**
1. Compartir el link con el equipo
2. Agregar colaboradores
3. Configurar CI/CD (GitHub Actions)
4. Deploy automático a Render
5. ¡A producción! 🚀

---

**Preguntas?** Mira los comandos en la sección "Comandos Diarios"

**¿Necesitas colaboradores?** Ve a Settings → Collaborators en tu repo de GitHub
