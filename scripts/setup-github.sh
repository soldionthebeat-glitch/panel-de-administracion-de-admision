#!/bin/bash
# ================================
# 🔗 CONECTAR A GITHUB
# ================================
# Ejecuta estos comandos en orden

echo "
╔════════════════════════════════════════════════════════════════╗
║           🔗 CONECTAR PROYECTO A GITHUB                       ║
╠════════════════════════════════════════════════════════════════╣
║  Sigue estos pasos para vincular a GitHub                     ║
╚════════════════════════════════════════════════════════════════╝
"

echo "
PASO 1: Ir a GitHub
=================
1. Ve a: https://github.com/new
2. Nombre repo: producers-go (o lo que prefieras)
3. Descripción: Sistema de Admisión de Productores con IA + API Neon
4. Selecciona: Public
5. NO selecciones 'Initialize this repository'
6. Click: Create Repository
7. Copia la URL (será algo como: https://github.com/tuusuario/producers-go.git)

Presiona ENTER cuando hayas creado el repo en GitHub..."
read

# Obtener la URL del repo
echo "
Pega la URL de tu repositorio en GitHub:"
read REPO_URL

echo "
PASO 2: Inicializar Git Localmente
===================================
"

# Verificar si git está instalado
if ! command -v git &> /dev/null; then
    echo "❌ Git no está instalado"
    echo "Descárgalo desde: https://git-scm.com/"
    exit 1
fi

echo "✅ Git encontrado: $(git --version)"

# Inicializar repositorio
if [ ! -d .git ]; then
    git init
    echo "✅ Repositorio Git inicializado"
else
    echo "✅ Repositorio Git ya existe"
fi

echo "
PASO 3: Agregar Todos los Archivos
==================================
"

git add .
echo "✅ Archivos agregados"

echo "
PASO 4: Primer Commit
====================
"

git config user.email "tu-email@ejemplo.com" 2>/dev/null || \
  git config --global user.email "tu-email@ejemplo.com"

git config user.name "Tu Nombre" 2>/dev/null || \
  git config --global user.name "Tu Nombre"

git commit -m "🚀 Initial commit - Sistema de Admisión de Productores con IA + API Neon"
echo "✅ Commit realizado"

echo "
PASO 5: Conectar Repositorio Remoto
===================================
"

git remote add origin "$REPO_URL"
echo "✅ Repositorio remoto agregado"

echo "
PASO 6: Push a GitHub
====================
"

# Detectar rama principal (main o master)
if git rev-parse --verify main 2>/dev/null; then
    BRANCH="main"
else
    BRANCH="master"
fi

echo "Haciendo push a rama: $BRANCH"

git branch -M main 2>/dev/null
git push -u origin main

echo "
╔════════════════════════════════════════════════════════════════╗
║           ✅ ¡PROYECTO VINCULADO A GITHUB!                   ║
╠════════════════════════════════════════════════════════════════╣
║                                                                ║
║  Tu repositorio está en:                                       ║
║  $REPO_URL
║                                                                ║
║  Próximos pasos:                                               ║
║  1. Ve a tu repo en GitHub                                     ║
║  2. Verifica que todos los archivos estén                      ║
║  3. Copia el README para tu perfil                             ║
║  4. Comparte el link                                           ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
"

echo "
COMANDOS ÚTILES PARA EL FUTURO:
==============================="
echo ""
echo "Agregar cambios:"
echo "  git add ."
echo ""
echo "Hacer commit:"
echo "  git commit -m 'Tu mensaje'"
echo ""
echo "Push a GitHub:"
echo "  git push"
echo ""
echo "Ver estado:"
echo "  git status"
echo ""
echo "Ver commits:"
echo "  git log --oneline"
