# 🚀 QUICK START - 15 MINUTOS A PRODUCCIÓN

## ⚡ LA FORMA MÁS RÁPIDA

Aquí está exactamente qué hacer, SIN explicaciones largas.

---

## ✅ VERIFICACIONES (2 min)

```bash
# ¿Tienes Node.js?
node --version

# ¿Ves la versión? OK, continúa.
# ¿No ves nada? Instala desde https://nodejs.org
```

---

## 🔐 SETUP NEON (5 min)

### 1. Ve a https://neon.tech → Sign up

### 2. En Dashboard: Create Project
- Name: `producers_go`
- Region: Tu región más cercana
- Click: Create

### 3. Ve a SQL Editor
- Copia TODÍTO de `database.sql`
- Pégalo en SQL Editor
- Click: Execute
- Espera: ✅ Tables created

### 4. Ve a Connection
- Copia la URL (comienza con `postgresql://`)
- Guárdala (la necesitaremos en 30 segundos)

---

## ⚙️ SETUP LOCAL (5 min)

### 1. Terminal - Crear .env

```bash
# Si estás en Windows, copia en cmd:
copy .env.example .env

# Si estás en Mac/Linux:
cp .env.example .env
```

### 2. Abre `.env` y reemplaza

**Busca:**
```
DATABASE_URL=postgresql://user:password@...
```

**Reemplaza con** la URL que copiaste de Neon (debe tener `?sslmode=require` al final)

### 3. Terminal - Instalar

```bash
npm install
```

Espera ~2-3 minutos.

---

## 🧪 TEST (1 min)

### Terminal 1 - Iniciar servidor
```bash
npm start
```

Espera a ver:
```
🚀 API PRODUCERS GO - NEON READY
Server running on port 5000
```

### Terminal 2 - Test conexión
```bash
curl http://localhost:5000/api/test
```

Deberías ver:
```json
{"status":"OK","message":"✅ Conexión a Neon exitosa"}
```

✅ **¡LISTO!** Tu API está conectada a Neon

---

## 📝 USAR EL SISTEMA (2 min)

### Opción A: Formulario → API → BD

1. Abre: `formulario-admision-productores.html` en navegador
2. Completa y envía
3. Los datos se guardan AUTOMÁTICAMENTE en Neon
4. Abre: `panel-admin.html`
5. Recarga la página
6. **¡VES LOS DATOS DE TU BD!** 🎉

### Opción B: Test con curl

```bash
# Enviar datos de prueba
curl -X POST http://localhost:5000/api/aplicantes \
  -H "Content-Type: application/json" \
  -d '{
    "personalData": {"nombre":"Test","email":"test@ex.com","nombreArtistico":"TX","whatsapp":"+54 9 11 12345678","edad":25,"pais":"Argentina"},
    "scores":{"artistico":8,"tecnico":7,"humano":8,"organizativo":7,"comercial":7},
    "finalScore":7.6,
    "classification":{"model":"B/C","label":"MUY BUENO"}
  }'
```

---

## 🌍 A PRODUCCIÓN (1 min config)

### Render (MÁS FÁCIL)

1. Push a GitHub
2. Ve a https://render.com → Sign up
3. Create → Web Service
4. Conecta tu GitHub repo
5. Name: `producers-go-api`
6. Build: `npm install`
7. Start: `node server.js`
8. Environment → Add: `DATABASE_URL` = tu-neon-url
9. Deploy
10. Espera ~3 minutos
11. **Tu API está en producción** 🚀

### Heroku (Alternativa)

```bash
heroku create
heroku config:set DATABASE_URL="tu-neon-url"
git push heroku main
```

### URL de Producción
- Render: https://producers-go-api.onrender.com/api/test
- Heroku: https://producers-go-api.herokuapp.com/api/test

---

## 🔌 CONECTAR FRONTEND A PRODUCCIÓN

En `formulario-admision-productores.html`, busca:

```javascript
const API_BASE = 'http://localhost:5000/api';
```

Cámbialo a:

```javascript
const API_BASE = 'https://producers-go-api.onrender.com/api'; // O tu URL
```

Lo mismo en `panel-admin.html`.

---

## 📊 CHECKLIST FINAL

- [ ] ¿Tienes Node.js?
- [ ] ¿Creaste proyecto en Neon?
- [ ] ¿Ejecutaste database.sql en Neon?
- [ ] ¿Copias tu Neon URL en .env?
- [ ] ¿Instalaste con `npm install`?
- [ ] ¿Iniciaste con `npm start`?
- [ ] ¿Test `/api/test` muestra OK?
- [ ] ¿Formulario envía datos?
- [ ] ¿Panel admin muestra datos?
- [ ] ¿Desplegado en producción?

✅ **TODO HECHO**

---

## 🆘 PROBLEMAS RÁPIDOS

| Problema | Solución |
|----------|----------|
| "Cannot connect to database" | Verifica DATABASE_URL en .env |
| "ECONNREFUSED" | Ejecuta `npm start` |
| "relation aplicantes does not exist" | Ejecuta database.sql en Neon SQL Editor |
| "SSL error" | Verifica URL tenga `?sslmode=require` |
| Formulario no envía | Verifica `API_BASE` en HTML |

---

## 💡 EJEMPLO DE FLUJO

```
1. Productor completa formulario
   ↓
2. IA evalúa automáticamente
   ↓
3. Envía a: POST http://localhost:5000/api/aplicantes
   ↓
4. Servidor recibe datos
   ↓
5. Guarda en Neon PostgreSQL
   ↓
6. Fundador abre panel admin
   ↓
7. Panel hace: GET http://localhost:5000/api/aplicantes
   ↓
8. Panel muestra tabla con datos de Neon
   ↓
9. Fundador cambia estado: PUT /api/aplicantes/:id/estado
   ↓
10. Base de datos actualiza automáticamente
```

---

## 📞 SOPORTE RÁPIDO

Abre DevTools (F12) en navegador:

```javascript
// Test conexión a API
fetch('http://localhost:5000/api/test')
  .then(r => r.json())
  .then(console.log);

// Ver datos en BD
fetch('http://localhost:5000/api/aplicantes')
  .then(r => r.json())
  .then(console.log);

// Ver estadísticas
fetch('http://localhost:5000/api/estadisticas')
  .then(r => r.json())
  .then(console.log);
```

---

## 📚 DOCUMENTACIÓN COMPLETA

Si necesitas más detalles:
- **Setup detallado:** [SETUP-NEON.md](SETUP-NEON.md)
- **API referencia:** [README-API.md](README-API.md)
- **Código ejemplo:** [EJEMPLO-INTEGRACION-API.js](EJEMPLO-INTEGRACION-API.js)
- **Proyecto completo:** [RESUMEN-PROYECTO.md](RESUMEN-PROYECTO.md)

---

## 🎯 PRÓXIMOS PASOS (Futuro)

- [ ] Agregar autenticación (JWT)
- [ ] Integrar SendGrid (emails automáticos)
- [ ] Agregar rate limiting
- [ ] Crear admin dashboard avanzado
- [ ] Agregar WebSockets (notificaciones real-time)

---

## ✅ TL;DR (Too Long; Didn't Read)

```bash
# 1. Crea proyecto en Neon (https://neon.tech)
# 2. Ejecuta database.sql en Neon SQL Editor
# 3. Copia tu Connection String

cp .env.example .env
# 4. Edita .env con tu DATABASE_URL

npm install
# 5. Instala dependencias

npm start
# 6. Inicia servidor

# 7. En otra terminal:
curl http://localhost:5000/api/test
# ✅ Ves "OK"? ¡ÉXITO!

# 8. Abre formulario en navegador
# 9. Completa y envía
# 10. Panel admin muestra datos de Neon

# 🎉 ¡LISTO!
```

---

**Tiempo total:** ~15 minutos  
**Complicidad:** Mínima  
**Resultado:** Sistema profesional en BD real  

**¿Listo?** ¡Comienza! 🚀
