@echo off
pushd "%~dp0..\backend"
REM ================================
REM 🚀 SETUP RÁPIDO - NEON + API
REM ================================
REM Ejecuta esto en CMD o PowerShell

cls
echo.
echo ╔════════════════════════════════════════════════════════════════════════╗
echo ║                   🎵 PRODUCERS GO - SETUP RÁPIDO                      ║
echo ║                                                                        ║
echo ║  Tu sistema está 100%% listo. Sigue estos pasos para conectar a Neon  ║
echo ╚════════════════════════════════════════════════════════════════════════╝
echo.

echo 📋 PREREQUISITOS
echo ================
echo 1. Crea cuenta en Neon: https://neon.tech
echo 2. Crea proyecto: 'producers_go'
echo 3. Copia Connection String (copiaremos en paso 5)
echo.

echo ⚡ PASO 1: Verificar Node.js instalado
echo =======================================
node --version
echo ✅ Si ves versión, continúa. Si no, instala desde https://nodejs.org
echo.
pause

cls
echo 📁 PASO 2: Ver archivos creados
echo ================================
dir /B | find "server.js"
dir /B | find "package.json"
dir /B | find ".env"
dir /B | find "database.sql"
echo ✅ Deberías ver estos archivos
echo.
pause

cls
echo 🔑 PASO 3: Crear archivo .env
echo ==============================
if exist .env (
    echo ⚠️  .env ya existe
) else (
    copy .env.example .env
    echo ✅ .env creado
)
echo.
pause

cls
echo ✏️  PASO 4: Editar .env (IMPORTANTE)
echo ===================================
echo Abre .env en tu editor favorito y reemplaza:
echo.
echo DATABASE_URL=postgresql://user:password@ep-xyz.us-east-1.neon.tech/producers_go?sslmode=require
echo.
echo Guarda el archivo cuando termines.
pause

cls
echo 📦 PASO 5: Instalar dependencias
echo =================================
call npm install
echo ✅ Dependencias instaladas
echo.
pause

cls
echo 🗄️  PASO 6: Crear tablas en Neon (IMPORTANTE)
echo =================================================
echo 1. Ve a: https://console.neon.tech
echo 2. Abre tu proyecto 'producers_go'
echo 3. Ve a SQL Editor
echo 4. Abre database.sql en notepad:
notepad database.sql
echo 5. Copia todo el contenido
echo 6. Pégalo en SQL Editor de Neon
echo 7. Click Execute
echo.
echo Espera cuando hayas creado las tablas...
pause

cls
echo 🧪 PASO 7: Test conexión a Neon
echo ================================
node -e "require('dotenv').config(); const { Pool } = require('pg'); const pool = new Pool({connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false }}); pool.query('SELECT NOW()', (err, res) => { if (err) { console.log('❌ Error conectando a Neon:'); console.error(err.message); } else { console.log('✅ Conectado a Neon!'); console.log('Timestamp:', res.rows[0]); } process.exit(0); });"
echo.
pause

cls
echo 🚀 PASO 8: Iniciar servidor
echo ============================
echo Ejecuta:
echo.
echo npm start
echo.
echo Deberías ver:
echo ╔════════════════════════════════════════╗
echo ║  🚀 API PRODUCERS GO - NEON READY     ║
echo ║  Server running on port 5000           ║
echo ╚════════════════════════════════════════╝
echo.
pause

start cmd /k npm start

cls
echo 📡 PASO 9: En otra terminal, test API
echo ======================================
echo Abre otra ventana de CMD y ejecuta:
echo.
echo curl http://localhost:5000/api/test
echo.
echo Deberías ver:
echo {"status":"OK","message":"✅ Conexión a Neon exitosa"}
echo.
pause

cls
echo 🎉 LISTO!
echo ==========
echo ✅ API conectada a Neon
echo ✅ Formulario envía a API
echo ✅ Panel admin lee de API
echo ✅ Datos guardados en PostgreSQL
echo.
echo Próximos pasos:
echo 1. Abre formulario en navegador
echo 2. Completa y envía
echo 3. Abre panel admin
echo 4. Ve los datos desde BD
echo 5. Ready para producción! 🚀
echo.
echo 📚 DOCUMENTACIÓN
echo ================
echo - Setup completo: SETUP-NEON.md
echo - API completa: README-API.md
echo - Ejemplos: EJEMPLO-INTEGRACION-API.js
echo - Todo: RESUMEN-PROYECTO.md
echo.
pause
