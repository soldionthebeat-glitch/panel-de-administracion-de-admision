
# 🤖 SISTEMA DE EVALUACIÓN AUTOMÁTICA CON IA
## PRODUCERS GO - Documentación Técnica

---

## 📊 Descripción General

El sistema implementa una **IA automática de evaluación** que procesa cada solicitud en 5 módulos independientes y calcula un puntaje final integrado. Los fundadores pueden revisar todas las solicitudes en el **Panel Administrativo**.

---

## 🧠 Estructura de la IA

### Módulos de Evaluación (5 Dimensiones)

```
PUNTAJE FINAL = (Artística×0.25) + (Técnica×0.20) + (Humana×0.20) + (Organizativa×0.20) + (Comercial×0.15)
```

#### 1️⃣ **Módulo Artístico** (25%)
**Evalúa:** Identidad sonora, criterio musical, potencial creativo

**Criterios de la IA:**
- Descripción detallada de géneros (+1.5 pts por descripción profunda)
- Cantidad y profundidad de referencias musicales (+1.5 pts)
- Identidad sonora definida (+1.5 pts)
- Diferenciación clara (+2 pts - CRÍTICO)
- Cantidad de producciones con links (+1.5 a 2 pts por cada 3-5 links)
- Enfoque comercial (+1 pt)
- Versatilidad creativa (partes del proceso) (+1.5 pts por 4+ áreas)

**Puntuación:** 0-10 puntos

---

#### 2️⃣ **Módulo Técnico** (20%)
**Evalúa:** Capacidad técnica, profundidad de producción, conocimiento

**Criterios de la IA:**
- Experiencia productiva:
  - Menos de 1 año: 1.5 pts
  - 1-2 años: 3 pts
  - 3-5 años: 6 pts
  - Más de 5 años: 9 pts
- DAW utilizado (+2 pts)
- Capacidad de entregar stems (+0 a 3 pts)
- Conocimiento BPM/tonalidad (+0 a 3 pts)
- Sistema de organización (+1.5 a 2.5 pts)
- Nivel de mezcla (+0 a 3 pts)
- Nivel de mastering (+0 a 3 pts)
- Uso responsable de samples/IA (+0 a 3 pts)
- Demostración de licencias (+0 a 2 pts)

**Puntuación:** 0-10 puntos

---

#### 3️⃣ **Módulo Humano** (20%)
**Evalúa:** Actitud, disposición, colaboración, capacidad de aprender

**Criterios de la IA:**
- Motivación para unirse (+1.5 a 2 pts por detalle)
- Expectativas claras (+1.5 a 2 pts)
- Aportes específicos (+1.5 a 2.5 pts)
- Actitud ante feedback (+0.5 a 3 pts)
- Disposición a colaborar (+1 a 3 pts)
- Manejo de desacuerdos (+1.5 a 2 pts)
- Honestidad sobre debilidades (+1.5 a 2 pts)
- Disponibilidad horaria (+1 a 3 pts)
- Aceptación de procesos PRODUCERS GO (+0 a 3 pts)

**Puntuación:** 0-10 puntos

---

#### 4️⃣ **Módulo Organizativo** (20%)
**Evalúa:** Orden, profesionalismo, capacidad de gestión

**Criterios de la IA:**
- Sistema de organización documentado (+1.5 a 2.5 pts)
- Catálogo ordenado (+0.5 a 3 pts)
- Identificación de obras propias (+0.5 a 3 pts)
- Registro de colaboraciones (+0.5 a 3 pts)
- Información de producción (+0.5 a 3 pts)
- Entrega profesional (+0.5 a 3 pts)
- Cumplimiento de tiempos (+0.5 a 3 pts)
- Herramientas de gestión usadas (+1.5 a 2 pts)
- Adaptabilidad a sistema PG (+0 a 3 pts)

**Puntuación:** 0-10 puntos

---

#### 5️⃣ **Módulo Comercial** (15%)
**Evalúa:** Viabilidad económica, alcance, experiencia comercial

**Criterios de la IA:**
- Volumen de catálogo (+0.5 a 3 pts)
- Catálogo libre (no comprometido) (+0.5 a 3 pts)
- Tipo de ingresos actuales (+1 a 3 pts)
- Presencia en plataformas (+1.5 a 2.5 pts)
- Actividad en redes sociales (+1.5 a 2 pts)
- Experiencia con artistas (+0.5 a 3 pts)
- Objetivos comerciales claros (+1.5 a 2 pts)
- Potencial de monetización en PG (+0.5 a 3 pts)

**Puntuación:** 0-10 puntos

---

## 🎯 Clasificación de Resultados

### Rango de Puntajes y Modelos

| Puntaje | Clasificación | Modelo | Color | Estado | Acción |
|---------|---------------|--------|-------|--------|--------|
| 4.6-5.0 | EXCELENTE | A/B/C | 🟢 Verde | Firma inmediata | Contactar en 24h |
| 4.1-4.5 | MUY BUENO | B/C | 🟢 Verde | Firma en 3-5 días | Llamada confirmación |
| 3.6-4.0 | BUENO | B | 🟡 Amarillo | Revisar + Entrevista | Agendar entrevista |
| 3.1-3.5 | ACEPTABLE | D | 🟡 Amarillo | Etapa de prueba | Enviar propuesta prueba |
| 2.6-3.0 | EN DESARROLLO | D | 🟡 Amarillo | Mentoría | Ofrecer mentoría |
| 2.1-2.5 | BAJO | E | 🔴 Rojo | Rechazo | Rechazar amablemente |
| 1.0-2.0 | CRÍTICO | E | 🔴 Rojo | Rechazo | Rechazar directo |

---

## 🔴 Filtros Críticos (Rechazo Automático)

La IA identifica y marca como **RECHAZO** automático si:

✗ **Conflictos legales confirmados**
- Respuesta SÍ a conflictos de derechos

✗ **Samples sin autorización**
- Respuesta SÍ a uso de samples sin permiso

✗ **Información incompleta o contradictoria**
- Falta de documentación legal
- Referencias no verificables

✗ **Rechazo de procesos internos**
- No acepta procedimientos PRODUCERS GO

---

## ⚠️ Flags de Revisión Manual

Estos casos requieren revisión por el **equipo legal** antes de cualquier decisión:

🟡 Uso de samples sin licencia (pero autorizados)
🟡 Uso significativo de IA en producciones
🟡 Imposibilidad de demostrar licencias
🟡 Contratos vigentes con terceros

**Estado en Panel:** `🔍 En Revisión`

---

## 📱 Panel Administrativo

### Acceso

```
URL: panel-admin.html
Ubicación: Misma carpeta que formulario-admision-productores.html
Método: Almacenamiento local (localStorage)
```

### Características

#### 1️⃣ **Dashboard Principal**
- Total de solicitudes
- Pendientes de revisar
- En revisión legal
- Puntaje promedio

#### 2️⃣ **Gráficos Automáticos**
- Distribución por modelo (A/B/C/D/E)
- Promedio de puntajes por módulo
- Estado de solicitudes

#### 3️⃣ **Tabla de Solicitudes**
Muestra:
- ID único
- Nombre artístico
- Email
- Puntaje final (con color)
- Clasificación
- Estado actual
- Fecha de envío
- Botón "Ver Detalles"

#### 4️⃣ **Filtros y Búsqueda**
- 🔍 Búsqueda por nombre/email
- Estado (Pendiente/Revisión/Aprobado/Rechazado)
- Modelo (A/B/C/D/E)

#### 5️⃣ **Modal de Detalles**
Muestra:
- Información personal completa
- Evaluación por módulo (5 módulos)
- Puntaje final
- Clasificación recomendada
- Botones para cambiar estado

#### 6️⃣ **Exportación**
- Descargar CSV con todas las solicitudes
- Formato compatible con Excel

---

## 💾 Almacenamiento de Datos

### Estructura JSON Guardada

```javascript
{
  "id": 1717945200000,
  "timestamp": "9/6/2026, 14:30:00",
  "personalData": {
    "nombre": "Juan García",
    "nombreArtistico": "ProducerX",
    "email": "juan@email.com",
    "whatsapp": "+54123456789",
    "edad": "25",
    "pais": "Argentina"
  },
  "scores": {
    "artistico": 7.5,
    "tecnico": 8.2,
    "humano": 7.8,
    "organizativo": 6.5,
    "comercial": 7.0
  },
  "finalScore": 7.50,
  "classification": {
    "model": "B/C",
    "label": "MUY BUENO",
    "color": "#4CAF50",
    "status": "VERDE"
  },
  "status": "pending"
}
```

### Ubicación
- **Navegador:** localStorage
- **Clave:** `pg_applications`
- **Capacidad:** ~5-10MB
- **Persistencia:** Mientras se mantenga el navegador/sitio

### Para Base de Datos Real

Necesitarás crear un endpoint POST en tu servidor que reciba:

```javascript
POST /api/applications
Content-Type: application/json

{
  // Misma estructura JSON de arriba
}
```

---

## 🔧 Integración Backend

### Paso 1: Capturar Envío (Formulario)

Modifica el evento `submit`:

```javascript
form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // ... código de evaluación IA ...
    
    // Enviar al servidor
    const response = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(applicationData)
    });
    
    if (response.ok) {
        // Guardaciólogo successful
    }
});
```

### Paso 2: Cargar en Panel Admin

```javascript
async function loadApplications() {
    const response = await fetch('/api/applications');
    const applications = await response.json();
    displayApplications(applications);
}
```

### Paso 3: Actualizar Estado

```javascript
async function updateStatus(index, newStatus) {
    const response = await fetch(`/api/applications/${appId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
    });
    // ...
}
```

---

## 📧 Plantillas de Email Automáticas

### 1️⃣ Confirmación de Recepción

```
Asunto: ✅ Solicitud Recibida - PRODUCERS GO

Hola [Nombre],

Gracias por enviar tu solicitud de admisión a PRODUCERS GO.

Tu Evaluación Automática de IA:
- Artística: [7.5]/10
- Técnica: [8.2]/10
- Humana: [7.8]/10
- Organizativa: [6.5]/10
- Comercial: [7.0]/10

Puntaje Final: [7.50]/5.0
Clasificación: [MUY BUENO]

Revisaremos tu solicitud en los próximos 5-7 días hábiles.

Saludos,
Equipo PRODUCERS GO
```

### 2️⃣ Aprobación

```
Asunto: 🎉 ¡Aprobado! - Solicitud PRODUCERS GO

Hola [Nombre],

¡Excelentes noticias! Tu solicitud ha sido APROBADA.

Clasificación: [MODELO B/C]

Próximos pasos:
1. Llamada de bienvenida (agendar)
2. Firma de contrato
3. Inducción al sistema
4. Primer proyecto

Nos contactaremos en 24 horas.

Saludos,
Equipo PRODUCERS GO
```

### 3️⃣ En Revisión Legal

```
Asunto: ⏳ Revisión Pendiente - PRODUCERS GO

Hola [Nombre],

Tu solicitud requiere revisión adicional por parte de nuestro equipo legal.

Motivo: [Detalles]

Te contactaremos dentro de 5-10 días hábiles con la decisión final.

Saludos,
Equipo PRODUCERS GO
```

### 4️⃣ Rechazo

```
Asunto: Resultado de Solicitud - PRODUCERS GO

Hola [Nombre],

Agradecemos tu interés en PRODUCERS GO. Después de revisar cuidadosamente 
tu solicitud, en esta ocasión no podemos ofrecerte un lugar.

Razón: [Detalles específicos]

Te animamos a mejorar en [áreas] y reaplicar en el futuro.

Saludos,
Equipo PRODUCERS GO
```

---

## 🚀 Flujo Completo

```
1. Productor completa formulario
   ↓
2. IA evalúa automáticamente (5 módulos)
   ↓
3. IA calcula puntaje final
   ↓
4. IA clasifica según modelo
   ↓
5. Datos guardados en localStorage (o BD)
   ↓
6. Solicitud aparece en Panel Admin
   ↓
7. Fundador ve evaluación de IA + estadísticas
   ↓
8. Fundador puede cambiar estado manualmente
   ↓
9. Sistema prepara email según estado
   ↓
10. Se notifica al productor
```

---

## 📊 Métricas y Análisis

El panel automáticamente calcula:

- **Total de solicitudes:** Conteo global
- **Pendientes:** Solicitudes sin revisar
- **En revisión:** Requieren decisión humana
- **Puntaje promedio:** Media de todos los puntajes
- **Distribución por modelo:** Gráfico de A/B/C/D/E
- **Promedio por módulo:** Artística, Técnica, Humana, etc.
- **Estado de solicitudes:** Pendiente/Revisión/Aprobado/Rechazado

---

## 🔐 Consideraciones de Seguridad

### Actual (localStorage - para pruebas)
- ✓ Datos locales en el navegador
- ✗ No sincronizado entre dispositivos
- ✗ No seguro para producción

### Recomendado (Base de datos)
- ✓ Encriptación en tránsito (HTTPS)
- ✓ Autenticación del panel admin
- ✓ Logs de auditoría
- ✓ Backup automático

### Implementar
```javascript
// Agregar autenticación
if (!isUserAuthenticated()) {
    redirect('/login');
}

// Validar todas las entradas
const validate = (data) => {
    // Validar campos
    // Sanitizar inputs
};
```

---

## 🔄 Mejoras Futuras

1. **Integración con base de datos real**
2. **Autenticación en panel admin**
3. **Notificaciones automáticas por email**
4. **Plantillas de contrato dinámicas**
5. **Estadísticas avanzadas (gráficos interactivos)**
6. **Exportación a múltiples formatos (PDF, Excel)**
7. **Historial de cambios (auditoría)**
8. **Comentarios internos entre fundadores**
9. **Fórmula de IA personalizable**
10. **Sistema de puntuación manual adicional**

---

## 📱 Uso del Panel

### Para Fundadores

1. **Abrir panel:** `panel-admin.html`
2. **Ver solicitudes:** Tabla principal
3. **Ver detalles:** Click en "Ver Detalles"
4. **Cambiar estado:** Botones de acción
5. **Filtrar:** Usar búsqueda y selectores
6. **Exportar:** Botón "Exportar" (CSV)

### Atajos

- `Ctrl+F`: Buscar en la tabla
- `Ctrl+S`: Exportar datos
- `ESC`: Cerrar modal

---

## 💡 Ejemplo de Evaluación Real

### Productor: "ProducerX"

**Respuestas del Formulario:**
- Géneros: "Trap oscuro, drill y reggaetón" (32 caracteres)
- Referencias: "Tainy, Bizarrap, Ovy On The Drums, Sky Rompiendo" (49 caracteres)
- Sonido: "Oscuro y minimalista, beat trap con atmosferas experimentales" (60 caracteres)
- Diferenciación: "Uso de sintetizadores vintage y modulation compleja..." (>50 caracteres)
- Links de producciones: 5 links verificables
- Experiencia: "Más de 5 años"
- DAW: "FL Studio y Ableton"
- Mezcla: "Nivel profesional"
- Etc.

**Cálculo IA:**
```
Artística = (1.5 + 1.5 + 1.5 + 2 + 2 + 1 + 1.5) / 7 × 2 = 7.86
Técnica = (9 + 2 + 3 + 3 + 2 + 3 + 3 + 2.5 + 3 + 3) / 10 × 1.2 = 9.24
Humana = (2 + 2 + 2.5 + 3 + 3 + 2 + 2 + 3 + 3) / 9 × 1.1 = 8.04
Organizativa = (2.5 + 3 + 3 + 2 + 3 + 3 + 3 + 2 + 3) / 9 × 1.1 = 8.36
Comercial = (3 + 2.5 + 3 + 2.5 + 2 + 3 + 2 + 3) / 8 × 1.1 = 7.75

PUNTAJE FINAL = (7.86 × 0.25) + (9.24 × 0.20) + (8.04 × 0.20) + (8.36 × 0.20) + (7.75 × 0.15)
              = 1.965 + 1.848 + 1.608 + 1.672 + 1.1625
              = 8.25 / 5.0

CLASIFICACIÓN: EXCELENTE (A/B/C - VERDE) ✅
```

---

## 📞 Soporte

Para preguntas o mejoras del sistema:
- Email: tech@producersgo.com
- Sistema: GitHub Issues
- Documentación: Wiki del proyecto

---

**Última actualización:** 9 de Junio, 2026
**Versión:** 1.0 (Beta)
**Estado:** Funcional en localStorage, listo para integración backend
