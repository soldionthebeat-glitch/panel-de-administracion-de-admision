# Configuracion de login

## Backend

El backend necesita estas variables de entorno para permitir el login:

```env
DATABASE_URL=postgresql://...
PORT=5000
FOUNDER_ACCESS_CODE=tu-codigo-privado
FOUNDER_SESSION_TOKEN=un-token-largo-y-privado
```

En local van en:

```text
backend/.env
```

En Render, Railway u otro deploy van en la seccion de Environment Variables.

Importante: `FOUNDER_ACCESS_CODE` es la contrasena que escribis en el login. Si no existe, el backend no arranca.

## Frontend

El index queda en la raiz:

```text
index.html
```

Las paginas internas quedan en:

```text
frontend/panel-admin.html
frontend/formulario-admision-productores.html
frontend/config.js
```

El frontend necesita apuntar al backend real desde:

```text
frontend/config.js
```

Ejemplo local:

```js
window.PRODUCERS_GO_CONFIG = {
  API_BASE_URL: 'http://localhost:5000/api'
};
```

Ejemplo produccion:

```js
window.PRODUCERS_GO_CONFIG = {
  API_BASE_URL: 'https://tu-backend.onrender.com/api'
};
```

Si el login no entra, revisa:

- Que el backend este corriendo.
- Que `frontend/config.js` apunte al backend correcto.
- Que `FOUNDER_ACCESS_CODE` en el backend coincida con lo que escribis.
- Que estes entrando desde `index.html` en la raiz.
