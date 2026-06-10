// ================================
// 📝 EJEMPLO: Integración API en Formulario
// ================================
// COPIA Y PEGA ESTO EN TU FORMULARIO HTML (donde actualmente hace localStorage)

/**
 * PASO 1: Incluye esto en el <head> del formulario
 * 
 * <script src="api-config.js"></script>
 */

/**
 * PASO 2: Modifica el evento submit del formulario
 * 
 * Busca el código que dice:
 *   form.addEventListener('submit', function(e) { ... })
 * 
 * Y reemplaza la parte de guardar datos
 */

// ================================
// EJEMPLO COMPLETO
// ================================

// Supongamos que tienes el ProducerEvaluator funcionando
// y el formulario completo. En el submit, haz esto:

document.getElementById('admissionForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  // 1. OBTENER DATOS DEL FORMULARIO
  const formData = new FormData(this);
  
  const personalData = {
    nombre: formData.get('nombre'),
    nombreArtistico: formData.get('nombreArtistico'),
    email: formData.get('email'),
    whatsapp: formData.get('whatsapp'),
    edad: formData.get('edad'),
    pais: formData.get('pais')
  };

  // 2. EVALUAR CON IA (ProducerEvaluator)
  const evaluator = new ProducerEvaluator(formData);
  
  const artisticoScore = evaluator.evaluateArtistic();
  const tecnicoScore = evaluator.evaluateTechnical();
  const humanoScore = evaluator.evaluateHuman();
  const organizativoScore = evaluator.evaluateOrganization();
  const comercialScore = evaluator.evaluateCommercial();

  // 3. CALCULAR PUNTAJE FINAL
  const finalScore = (
    artisticoScore * 0.25 +
    tecnicoScore * 0.20 +
    humanoScore * 0.20 +
    organizativoScore * 0.20 +
    comercialScore * 0.15
  ) / 5;

  // 4. CLASIFICAR
  let classification = getClassification(finalScore);

  // 5. PREPARAR DATOS
  const datosParaAPI = {
    personalData,
    scores: {
      artistico: artisticoScore,
      tecnico: tecnicoScore,
      humano: humanoScore,
      organizativo: organizativoScore,
      comercial: comercialScore
    },
    finalScore: parseFloat(finalScore.toFixed(2)),
    classification
  };

  // 6. ENVIAR A API
  console.log('📤 Enviando a API...', datosParaAPI);
  
  const resultado = await enviarAplicanteAAPI(datosParaAPI);

  // 7. MOSTRAR RESULTADO
  if (resultado.success) {
    // ✅ Guardado en API (Neon)
    showSuccessMessage(`
      ✅ ¡Solicitud recibida!
      <br><br>
      <strong>Puntaje Final:</strong> ${finalScore.toFixed(2)}/5.0
      <br>
      <strong>Clasificación:</strong> ${classification.label}
      <br><br>
      ID: ${resultado.id}
      <br>
      <small>Tu solicitud fue guardada en nuestra base de datos</small>
    `);
  } else if (resultado.local) {
    // ⚠️ Fallback a localStorage (API no disponible)
    showWarningMessage(`
      ⚠️ Datos guardados localmente
      <br><br>
      La API no está disponible en este momento.
      Tus datos están seguros en tu navegador.
      <br><br>
      Cuando la API esté disponible, se sincronizarán automáticamente.
    `);
  } else {
    // ❌ Error
    showErrorMessage(`
      ❌ Error enviando solicitud
      <br><br>
      ${resultado.message}
    `);
  }
});

// ================================
// HELPER: Clasificar por puntaje
// ================================

function getClassification(score) {
  if (score >= 4.6) {
    return {
      model: 'A/B/C',
      label: 'EXCELENTE',
      color: '#4CAF50',
      status: 'VERDE'
    };
  } else if (score >= 4.1) {
    return {
      model: 'B/C',
      label: 'MUY BUENO',
      color: '#4CAF50',
      status: 'VERDE'
    };
  } else if (score >= 3.6) {
    return {
      model: 'B',
      label: 'BUENO',
      color: '#FF9800',
      status: 'AMARILLO'
    };
  } else if (score >= 3.1) {
    return {
      model: 'D',
      label: 'ACEPTABLE',
      color: '#FF9800',
      status: 'AMARILLO'
    };
  } else if (score >= 2.1) {
    return {
      model: 'D',
      label: 'BAJO',
      color: '#F44336',
      status: 'ROJO'
    };
  } else {
    return {
      model: 'E',
      label: 'CRÍTICO',
      color: '#F44336',
      status: 'ROJO'
    };
  }
}

// ================================
// HELPERS: Mostrar mensajes
// ================================

function showSuccessMessage(html) {
  const div = document.createElement('div');
  div.style.cssText = `
    background: #4CAF50;
    color: white;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;
    text-align: center;
  `;
  div.innerHTML = html;
  
  const form = document.getElementById('admissionForm');
  form.parentNode.insertBefore(div, form);
  
  // Scroll to top
  window.scrollTo(0, 0);
}

function showWarningMessage(html) {
  const div = document.createElement('div');
  div.style.cssText = `
    background: #FF9800;
    color: white;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;
    text-align: center;
  `;
  div.innerHTML = html;
  
  const form = document.getElementById('admissionForm');
  form.parentNode.insertBefore(div, form);
  
  window.scrollTo(0, 0);
}

function showErrorMessage(html) {
  const div = document.createElement('div');
  div.style.cssText = `
    background: #F44336;
    color: white;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;
    text-align: center;
  `;
  div.innerHTML = html;
  
  const form = document.getElementById('admissionForm');
  form.parentNode.insertBefore(div, form);
  
  window.scrollTo(0, 0);
}

// ================================
// SINCRONIZAR AL CARGAR PÁGINA
// ================================

// Si hay datos sin sincronizar, intenta sincronizar
window.addEventListener('load', async () => {
  console.log('🔄 Verificando datos para sincronizar...');
  await sincronizarConAPI();
});

// ================================
// ALTERNATIVA SIMPLE: Copiar esto en la consola
// ================================

/*
// En la consola del navegador (F12), ejecuta:

// 1. Test de API
fetch('http://localhost:5000/api/test')
  .then(r => r.json())
  .then(d => console.log('✅', d))
  .catch(e => console.error('❌', e));

// 2. Enviar datos de prueba
fetch('http://localhost:5000/api/aplicantes', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    personalData: {
      nombre: 'Test User',
      nombreArtistico: 'TestX',
      email: 'test@example.com',
      whatsapp: '+54 9 11 12345678',
      edad: 25,
      pais: 'Argentina'
    },
    scores: {
      artistico: 8, tecnico: 7.5, humano: 8, organizativo: 7, comercial: 7
    },
    finalScore: 7.65,
    classification: { model: 'B/C', label: 'MUY BUENO' }
  })
})
.then(r => r.json())
.then(d => console.log('✅', d))
.catch(e => console.error('❌', e));

// 3. Obtener datos
fetch('http://localhost:5000/api/aplicantes')
  .then(r => r.json())
  .then(d => console.log('✅', d))
  .catch(e => console.error('❌', e));
*/
