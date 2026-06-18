@echo off
REM ================================
REM 🔗 CONECTAR A GITHUB
REM ================================
REM Ejecuta esto en CMD

cls
echo.
echo ╔════════════════════════════════════════════════════════════════╗
echo ║           🔗 CONECTAR PROYECTO A GITHUB                       ║
echo ╠════════════════════════════════════════════════════════════════╣
echo ║  Sigue estos pasos para vincular a GitHub                     ║
echo ╚════════════════════════════════════════════════════════════════╝
echo.

echo PASO 1: Crear Repositorio en GitHub
echo ====================================
echo.
echo 1. Ve a: https://github.com/new
echo 2. Nombre repo: producers-go (o lo que prefieras)
echo 3. Descripción: Sistema de Admisión de Productores con IA + API Neon
echo 4. Selecciona: Public
echo 5. NO selecciones 'Initialize this repository'
echo 6. Click: Create Repository
echo.
echo Presiona ENTER cuando hayas creado el repo...
pause

cls
echo.
echo Abre tu navegador, copia la URL de tu repositorio (https://github.com/...)
echo y pégala en esta ventana.
echo.
set /p REPO_URL="https://github.com/soldionthebeat-glitch/panel-de-administracion-de-admision.git\"

cls
echo.
echo PASO 2: Verificar Git
echo =====================
git --version
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ❌ Git no está instalado
    echo Descárgalo desde: https://git-scm.com/
    pause
    exit /b 1
)
echo ✅ Git encontrado
pause

cls
echo.
echo PASO 3: Inicializar Git Localmente
echo ===================================
if not exist .git (
    git init
    echo ✅ Repositorio Git inicializado
) else (
    echo ✅ Repositorio Git ya existe
)
pause

cls
echo.
echo PASO 4: Agregar Todos los Archivos
echo ==================================
git add .
echo ✅ Archivos agregados
pause

cls
echo.
echo PASO 5: Configurar Usuario (Primera vez)
echo ========================================
git config --global user.email "tu-email@ejemplo.com"
git config --global user.name "Tu Nombre"
echo ✅ Usuario configurado
pause

cls
echo.
echo PASO 6: Primer Commit
echo ====================
git commit -m "🚀 Initial commit - Sistema de Admisión de Productores con IA + API Neon"
echo ✅ Commit realizado
pause

cls
echo.
echo PASO 7: Conectar Repositorio Remoto
echo ===================================
git remote add origin %REPO_URL%
echo ✅ Repositorio remoto agregado
pause

cls
echo.
echo PASO 8: Push a GitHub (Primera vez)
echo ===================================
echo Esto puede pedir autenticación en el navegador...
echo.
git branch -M main
git push -u origin main

if %ERRORLEVEL% EQU 0 (
    cls
    echo.
    echo ╔════════════════════════════════════════════════════════════════╗
    echo ║           ✅ ¡PROYECTO VINCULADO A GITHUB!                   ║
    echo ╠════════════════════════════════════════════════════════════════╣
    echo ║                                                                ║
    echo ║  Tu repositorio está en:                                       ║
    echo ║  %REPO_URL%
    echo ║                                                                ║
    echo ║  Próximos pasos:                                               ║
    echo ║  1. Ve a tu repo en GitHub                                     ║
    echo ║  2. Verifica que todos los archivos estén                      ║
    echo ║  3. Comparte el link                                           ║
    echo ║                                                                ║
    echo ╚════════════════════════════════════════════════════════════════╝
    echo.
) else (
    echo.
    echo ❌ Error en el push
    echo Verifica que:
    echo - Tu repositorio en GitHub sea público
    echo - Hayas copiado bien la URL
    echo - Tengas conexión a Internet
    echo.
)

pause
