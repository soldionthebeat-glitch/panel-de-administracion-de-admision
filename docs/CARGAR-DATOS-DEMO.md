
# 🎮 DEMOSTRACIÓN - Carga de Datos de Ejemplo

## Cómo Cargar Datos de Prueba en el Panel Admin

El sistema almacena datos en `localStorage` del navegador. Aquí hay dos formas de cargar datos de ejemplo:

---

## Opción 1️⃣: Copia y Pega en Consola (Lo Más Fácil)

### Paso 1: Abre el Panel Admin
```
1. Abre: panel-admin.html
2. Presiona: F12 (para abrir Developer Tools)
3. Ve a: Console (Consola)
```

### Paso 2: Copia Este Código Completo

```javascript
// CARGAR 5 EJEMPLOS DE SOLICITUDES
const ejemplosSolicitudes = [
  {
    "id": 1717945200000,
    "timestamp": "9/6/2026, 14:30:00",
    "personalData": {
      "nombre": "Juan García López",
      "nombreArtistico": "ProducerX",
      "email": "juan.garcia@email.com",
      "whatsapp": "+54 9 11 12345678",
      "edad": "28",
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
      "label": "EXCELENTE",
      "color": "#4CAF50",
      "status": "VERDE"
    },
    "status": "pending"
  },
  {
    "id": 1717945200001,
    "timestamp": "9/6/2026, 15:45:00",
    "personalData": {
      "nombre": "Carlos Martínez",
      "nombreArtistico": "BeatMaster23",
      "email": "carlos@producermail.com",
      "whatsapp": "+54 9 22 87654321",
      "edad": "24",
      "pais": "Argentina"
    },
    "scores": {
      "artistico": 7.1,
      "tecnico": 7.5,
      "humano": 7.3,
      "organizativo": 6.8,
      "comercial": 6.9
    },
    "finalScore": 7.18,
    "classification": {
      "model": "B/C",
      "label": "MUY BUENO",
      "color": "#4CAF50",
      "status": "VERDE"
    },
    "status": "pending"
  },
  {
    "id": 1717945200002,
    "timestamp": "9/6/2026, 16:20:00",
    "personalData": {
      "nombre": "María Rodríguez",
      "nombreArtistico": "SonicGirl",
      "email": "maria.sonic@email.com",
      "whatsapp": "+54 9 33 55443322",
      "edad": "26",
      "pais": "Argentina"
    },
    "scores": {
      "artistico": 6.5,
      "tecnico": 6.8,
      "humano": 6.9,
      "organizativo": 6.2,
      "comercial": 6.1
    },
    "finalScore": 6.52,
    "classification": {
      "model": "B",
      "label": "BUENO",
      "color": "#FF9800",
      "status": "AMARILLO"
    },
    "status": "pending"
  },
  {
    "id": 1717945200003,
    "timestamp": "9/6/2026, 17:15:00",
    "personalData": {
      "nombre": "Diego Fernández",
      "nombreArtistico": "TrapKing",
      "email": "diego.trap@gmail.com",
      "whatsapp": "+54 9 44 11223344",
      "edad": "22",
      "pais": "Argentina"
    },
    "scores": {
      "artistico": 5.8,
      "tecnico": 5.5,
      "humano": 5.9,
      "organizativo": 5.2,
      "comercial": 5.6
    },
    "finalScore": 5.62,
    "classification": {
      "model": "D",
      "label": "ACEPTABLE",
      "color": "#FF9800",
      "status": "AMARILLO"
    },
    "status": "review"
  },
  {
    "id": 1717945200004,
    "timestamp": "9/6/2026, 18:00:00",
    "personalData": {
      "nombre": "Pablo Vázquez",
      "nombreArtistico": "NoiseCollector",
      "email": "pablo.noise@hotmail.com",
      "whatsapp": "+54 9 55 99887766",
      "edad": "19",
      "pais": "Argentina"
    },
    "scores": {
      "artistico": 3.2,
      "tecnico": 2.8,
      "humano": 3.5,
      "organizativo": 2.5,
      "comercial": 2.9
    },
    "finalScore": 3.02,
    "classification": {
      "model": "E",
      "label": "BAJO",
      "color": "#F44336",
      "status": "ROJO"
    },
    "status": "rejected"
  }
];

// Guardar en localStorage
localStorage.setItem('pg_applications', JSON.stringify(ejemplosSolicitudes));
console.log('✅ 5 ejemplos cargados exitosamente!');
console.log('📊 Ahora actualiza la página (F5) para verlos en el panel');
```

### Paso 3: Pega el Código
```
1. Selecciona TODO el código arriba
2. Ctrl+C para copiar
3. En la Consola, Ctrl+V para pegar
4. Presiona Enter
```

### Paso 4: Recarga la Página
```
1. Presiona F5 o Ctrl+R para recargar
2. ¡Verás los datos en la tabla!
```

---

## Opción 2️⃣: Crear un Archivo HTML (Alternativa)

Crea un archivo llamado `cargar-demo.html`:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Cargar Datos de Demo</title>
    <style>
        body {
            font-family: Arial;
            padding: 20px;
            background: #f5f5f5;
        }
        button {
            padding: 10px 20px;
            background: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }
        button:hover {
            background: #45a049;
        }
        .message {
            margin-top: 20px;
            padding: 15px;
            background: white;
            border-radius: 5px;
            border-left: 4px solid #4CAF50;
        }
    </style>
</head>
<body>
    <h1>🎮 Cargar Datos de Demostración</h1>
    
    <p>Haz clic en el botón para cargar 5 solicitudes de ejemplo en el panel admin:</p>
    
    <button onclick="cargarDatos()">Cargar Datos de Ejemplo</button>
    
    <div id="mensaje"></div>

    <script>
        function cargarDatos() {
            const ejemplos = [
                {
                    "id": 1717945200000,
                    "timestamp": "9/6/2026, 14:30:00",
                    "personalData": {
                        "nombre": "Juan García López",
                        "nombreArtistico": "ProducerX",
                        "email": "juan.garcia@email.com",
                        "whatsapp": "+54 9 11 12345678",
                        "edad": "28",
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
                        "label": "EXCELENTE",
                        "color": "#4CAF50",
                        "status": "VERDE"
                    },
                    "status": "pending"
                },
                {
                    "id": 1717945200001,
                    "timestamp": "9/6/2026, 15:45:00",
                    "personalData": {
                        "nombre": "Carlos Martínez",
                        "nombreArtistico": "BeatMaster23",
                        "email": "carlos@producermail.com",
                        "whatsapp": "+54 9 22 87654321",
                        "edad": "24",
                        "pais": "Argentina"
                    },
                    "scores": {
                        "artistico": 7.1,
                        "tecnico": 7.5,
                        "humano": 7.3,
                        "organizativo": 6.8,
                        "comercial": 6.9
                    },
                    "finalScore": 7.18,
                    "classification": {
                        "model": "B/C",
                        "label": "MUY BUENO",
                        "color": "#4CAF50",
                        "status": "VERDE"
                    },
                    "status": "pending"
                },
                {
                    "id": 1717945200002,
                    "timestamp": "9/6/2026, 16:20:00",
                    "personalData": {
                        "nombre": "María Rodríguez",
                        "nombreArtistico": "SonicGirl",
                        "email": "maria.sonic@email.com",
                        "whatsapp": "+54 9 33 55443322",
                        "edad": "26",
                        "pais": "Argentina"
                    },
                    "scores": {
                        "artistico": 6.5,
                        "tecnico": 6.8,
                        "humano": 6.9,
                        "organizativo": 6.2,
                        "comercial": 6.1
                    },
                    "finalScore": 6.52,
                    "classification": {
                        "model": "B",
                        "label": "BUENO",
                        "color": "#FF9800",
                        "status": "AMARILLO"
                    },
                    "status": "pending"
                },
                {
                    "id": 1717945200003,
                    "timestamp": "9/6/2026, 17:15:00",
                    "personalData": {
                        "nombre": "Diego Fernández",
                        "nombreArtistico": "TrapKing",
                        "email": "diego.trap@gmail.com",
                        "whatsapp": "+54 9 44 11223344",
                        "edad": "22",
                        "pais": "Argentina"
                    },
                    "scores": {
                        "artistico": 5.8,
                        "tecnico": 5.5,
                        "humano": 5.9,
                        "organizativo": 5.2,
                        "comercial": 5.6
                    },
                    "finalScore": 5.62,
                    "classification": {
                        "model": "D",
                        "label": "ACEPTABLE",
                        "color": "#FF9800",
                        "status": "AMARILLO"
                    },
                    "status": "review"
                },
                {
                    "id": 1717945200004,
                    "timestamp": "9/6/2026, 18:00:00",
                    "personalData": {
                        "nombre": "Pablo Vázquez",
                        "nombreArtistico": "NoiseCollector",
                        "email": "pablo.noise@hotmail.com",
                        "whatsapp": "+54 9 55 99887766",
                        "edad": "19",
                        "pais": "Argentina"
                    },
                    "scores": {
                        "artistico": 3.2,
                        "tecnico": 2.8,
                        "humano": 3.5,
                        "organizativo": 2.5,
                        "comercial": 2.9
                    },
                    "finalScore": 3.02,
                    "classification": {
                        "model": "E",
                        "label": "BAJO",
                        "color": "#F44336",
                        "status": "ROJO"
                    },
                    "status": "rejected"
                }
            ];

            localStorage.setItem('pg_applications', JSON.stringify(ejemplos));
            
            document.getElementById('mensaje').innerHTML = 
                '<div class="message">' +
                '<h3>✅ Datos cargados exitosamente!</h3>' +
                '<p>Se han cargado 5 solicitudes de ejemplo.</p>' +
                '<p><strong>Próximo paso:</strong> Abre <a href="panel-admin.html" target="_blank">panel-admin.html</a></p>' +
                '</div>';
        }
    </script>
</body>
</html>
```

---

## 📊 Datos de Ejemplo Explicados

### Productor 1: ProducerX (8.14/5.0 - EXCELENTE 🟢)
```
✅ Muy bueno en todos los módulos
✅ Experiencia, diferenciación clara
✅ Actitud colaborativa
✅ Catálogo profesional
✅ Ingresos demostrados
→ RECOMENDACIÓN: Contactar para firma inmediata
```

### Productor 2: BeatMaster23 (7.18/5.0 - MUY BUENO 🟢)
```
✅ Buen potencial general
✅ Técnica sólida
⚠️ Requiere confirmación
→ RECOMENDACIÓN: Agendar entrevista, firma en 3-5 días
```

### Productor 3: SonicGirl (6.52/5.0 - BUENO 🟡)
```
✅ Potencial artístico
⚠️ Técnica moderada
⚠️ Organización mejorable
→ RECOMENDACIÓN: Entrevista + período de prueba
```

### Productor 4: TrapKing (5.62/5.0 - ACEPTABLE 🟡)
```
⚠️ Requiere revisión legal (samples)
✅ Actitud positiva
⚠️ Experiencia limitada
→ RECOMENDACIÓN: Revisión legal + mentoría
```

### Productor 5: NoiseCollector (3.02/5.0 - BAJO 🔴)
```
❌ Conflictos o problemas legales
⚠️ Experiencia insuficiente
→ RECOMENDACIÓN: Rechazo (ya rechazado)
```

---

## 🎯 Cosas que Puedes Hacer con los Datos

Una vez cargados, en el panel admin puedes:

1. **Ver tabla completa** con las 5 solicitudes
2. **Filtrar por estado:** Pendiente, Revisión, Aprobado, Rechazado
3. **Filtrar por modelo:** A/B/C, B/C, B, D, E
4. **Buscar:** Por nombre "ProducerX" o email
5. **Ver detalles:** Click en cada solicitud
6. **Cambiar estado:** Aprobar, revisar, rechazar
7. **Exportar CSV:** Descargar todos los datos
8. **Ver gráficos:** Distribución de modelos y puntajes

---

## 🔧 Eliminar Datos de Demo

Si quieres empezar de nuevo, en la Consola ejecuta:

```javascript
localStorage.removeItem('pg_applications');
console.log('✅ Datos eliminados');
```

Luego recarga (F5).

---

## 📈 Estadísticas de los Datos Demo

```
Total de solicitudes: 5
Estado:
  - Pendiente: 3
  - Revisión: 1
  - Rechazado: 1
  - Aprobado: 0

Puntaje promedio: 6.30/5.0

Modelos:
  - A/B/C: 1 (20%)
  - B/C: 1 (20%)
  - B: 1 (20%)
  - D: 1 (20%)
  - E: 1 (20%)

Promedio por módulo:
  - Artística: 6.36/10
  - Técnica: 6.30/10
  - Humana: 6.54/10
  - Organizativa: 5.90/10
  - Comercial: 6.00/10
```

---

## 💡 Próximos Pasos

1. **Carga los datos de ejemplo**
2. **Explora el panel admin:**
   - Busca por nombre
   - Filtra por estado
   - Ve detalles de cada solicitud
   - Cambia estados
3. **Prueba exportar CSV**
4. **Completa el formulario real** para crear más datos
5. **Verifica que aparecen en el panel**

---

¡Diviértete explorando el sistema! 🎮
