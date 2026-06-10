
# ⚡ GUÍA DE INICIO RÁPIDO - Sistema IA

## 🎯 En 5 Minutos

### Paso 1: Abre el Formulario
```
1. Abre: formulario-admision-productores.html
2. Completa todos los módulos (9 módulos)
3. Presiona "Enviar Solicitud"
```

### Paso 2: IA Automática Evalúa
```
✓ Procesa 5 módulos automáticamente
✓ Calcula puntaje final (0-5.0)
✓ Asigna clasificación (A/B/C/D/E)
✓ Guarda en localStorage
```

### Paso 3: Ve el Resultado
```
El formulario muestra:
🎨 Artística: X.X/10
⚙️ Técnica: X.X/10
👥 Humana: X.X/10
📁 Organizativa: X.X/10
💰 Comercial: X.X/10

Puntaje Final: X.XX/5.0
Clasificación: [MODELO] [ESTADO]
```

### Paso 4: Revisa en Panel Admin
```
1. Abre: panel-admin.html
2. Ve todas las solicitudes
3. Filtra por estado o búsqueda
4. Click en "Ver Detalles"
5. Cambia estado (Aprobado/Revisión/Rechazo)
```

---

## 📊 Atajos Importantes

### Qué Significa Cada Puntaje

| Puntaje | Significado | Color | Modelo |
|---------|------------|-------|--------|
| 4.6-5.0 | ¡PERFECTO! | 🟢 | A/B/C - Firma ya |
| 4.1-4.5 | Muy bueno | 🟢 | B/C - Firma en 3-5 días |
| 3.6-4.0 | Bueno | 🟡 | B - Entrevista |
| 3.1-3.5 | Aceptable | 🟡 | D - Etapa prueba |
| 2.6-3.0 | Desarrollo | 🟡 | D - Con mentoría |
| 2.1-2.5 | Bajo | 🔴 | E - Rechazo |
| <2.1 | Crítico | 🔴 | E - Rechazo directo |

---

## 🔴 Rechazos Automáticos

El productor es **rechazado automáticamente** si:

```
❌ Conflictos de derechos confirmados
❌ Usó samples sin autorización
❌ No demuestra autoría
❌ Rechaza procesos PRODUCERS GO
```

---

## 📱 Panel Admin - Vista General

### Vista Principal
```
📊 Estadísticas
- Total de solicitudes
- Pendientes de revisar
- En revisión legal
- Puntaje promedio

📈 Gráficos
- Distribución por modelo (A/B/C/D/E)
- Promedio de cada módulo
- Estado de solicitudes

🔍 Tabla
- ID | Nombre | Email | Puntaje | Clasificación | Estado | Fecha | Acciones
```

### Acciones en Panel
```
1. Buscar: 🔍 Buscar por nombre/email
2. Filtrar: Por estado o modelo
3. Ver detalles: Click en "Ver Detalles"
4. Cambiar estado: Botones de acción
5. Exportar: Descargar CSV
```

---

## 💡 Casos Reales

### CASO 1: Productor Excelente

**Puntaje:** 4.75/5.0
**Clasificación:** EXCELENTE - Modelo A/B/C (VERDE)

Características:
- ✅ Experiencia 5+ años
- ✅ Buena diferenciación
- ✅ 5+ producciones verificables
- ✅ Actitud colaborativa
- ✅ Catálogo ordenado
- ✅ Ingresos demostrables

**ACCIÓN:** Contactar en 24h para firma

---

### CASO 2: Productor Con Potencial

**Puntaje:** 3.8/5.0
**Clasificación:** BUENO - Modelo B (AMARILLO)

Características:
- ✅ 3 años de experiencia
- ✅ Buena propuesta artística
- ⚠️ Necesita mejorar técnica
- ✅ Actitud positiva
- ⚠️ Catálogo desorganizado

**ACCIÓN:** Agendar entrevista + prueba

---

### CASO 3: Riesgo Legal

**Puntaje:** 2.8/5.0
**Clasificación:** EN REVISIÓN - Modelo D (AMARILLO)

Características:
- ⚠️ Usa samples sin licencia (pero autorizados)
- ✅ Buena propuesta
- ✅ Experiencia moderada
- ⚠️ Conflictos menores

**ACCIÓN:** Revisión legal + entrevista + mentoría

---

### CASO 4: Rechazo

**Puntaje:** 1.9/5.0
**Clasificación:** RECHAZO - Modelo E (ROJO)

Características:
- ❌ Conflictos legales confirmados
- ❌ Samples sin autorización
- ❌ No demuestra autoría

**ACCIÓN:** Rechazar (sin oportunidad de apelación)

---

## 📋 Checklist Diario

Para los fundadores que revisan solicitudes:

- [ ] Abrir panel-admin.html
- [ ] Revisar "Pendientes de revisar"
- [ ] Leer puntaje de IA para cada uno
- [ ] Ver "En Revisión Legal" (ver con abogado)
- [ ] Actualizar estados
- [ ] Enviar emails de confirmación
- [ ] Exportar datos si es necesario

---

## 🎨 Módulos Explicados Rápido

### 🎨 Artística (25%)
¿Tiene identidad sonora? ¿Diferenciación clara? ¿Producciones verificables?

### ⚙️ Técnica (20%)
¿Años de experiencia? ¿Sabe sus DAW? ¿Puede mezclar? ¿Stems profesionales?

### 👥 Humana (20%)
¿Buena actitud? ¿Acepta feedback? ¿Colaborativo? ¿Disponible?

### 📁 Organizativa (20%)
¿Catálogo ordenado? ¿Identifica sus obras? ¿Profesional? ¿Tiempos?

### 💰 Comercial (15%)
¿Volumen de beats? ¿Ingresos? ¿Plataformas? ¿Experiencia con artistas?

---

## 🔧 Troubleshooting

### P: No veo las solicitudes en el panel
```
R: 1. Verifica haber abierto formulario en el mismo navegador
   2. Comprueba que no hayas vaciado caché
   3. Abre Consola (F12) y ejecuta:
      JSON.parse(localStorage.getItem('pg_applications'))
   4. Deberías ver un array con las solicitudes
```

### P: Quiero limpiar todos los datos
```
R: Abre Consola (F12) y ejecuta:
   localStorage.removeItem('pg_applications')
   Presiona Enter. ¡Listo!
```

### P: ¿Puedo editar una solicitud?
```
R: No directamente en el panel. Puedes:
   1. Ver detalles
   2. Cambiar estado (Aprobado/Revisión/Rechazo)
   3. Exportar a Excel y editar allí
```

### P: ¿Los datos se pierden si cierro el navegador?
```
R: NO. localStorage es persistente.
   Los datos quedan guardados indefinidamente
   hasta que hagas "Limpiar caché"
```

---

## 🚀 Próximos Pasos

### Para Producción

1. **Agregar Base de Datos**
   - MySQL, PostgreSQL o Firebase
   - Cambiar de localStorage a API REST

2. **Autenticación del Panel**
   - Login de fundadores
   - Roles y permisos

3. **Emails Automáticos**
   - Nodemailer o SendGrid
   - Plantillas dinámicas

4. **Mejorar UI**
   - Diseño más moderno
   - Responsive mejorado
   - Gráficos interactivos

5. **Seguridad**
   - HTTPS obligatorio
   - Validación en backend
   - Rate limiting

---

## 📞 Comandos de Consola Útiles

```javascript
// Ver todas las solicitudes
JSON.parse(localStorage.getItem('pg_applications'))

// Contar solicitudes
JSON.parse(localStorage.getItem('pg_applications')).length

// Promedio de puntajes
const apps = JSON.parse(localStorage.getItem('pg_applications'));
apps.reduce((sum, a) => sum + a.finalScore, 0) / apps.length

// Contar por estado
const apps = JSON.parse(localStorage.getItem('pg_applications'));
apps.filter(a => a.status === 'pending').length

// Limpiar todo
localStorage.removeItem('pg_applications')
```

---

## 📧 Emails Automáticos (Próximos)

Sistema preparado para enviar:

```
✓ Confirmación de recepción (24h)
✓ Aprobación (inmediato)
✓ En revisión legal (dentro de 5 días)
✓ Rechazo (dentro de 5 días)
```

Necesitas configurar:
- Servicio de email (Gmail, SendGrid, etc.)
- Backend (Node.js, Python, PHP)
- Plantillas HTML

---

## 🎯 Métricas de Éxito

Cuando tengas varias solicitudes, monitorea:

| Métrica | Objetivo |
|---------|----------|
| % Verde (A/B/C) | >20% |
| % Amarillo (B/D) | 50-60% |
| % Rojo (E) | <30% |
| Promedio puntaje | >3.5 |
| Tiempo decisión | <7 días |

---

**¡Listo! Ya puedes usar el sistema completo con IA.**

Preguntas? Revisa SISTEMA-IA-DOCUMENTACION.md
