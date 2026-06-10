// ================================
// 🔌 CONFIGURACIÓN API - FORMULARIO
// ================================
// Incluye esto en formulario-admision-productores.html

const API_CONFIG = {
  // Cambiar según tu ambiente
  BASE_URL: process.env.NODE_ENV === 'production'
    ? 'https://tu-dominio.com/api'  // URL producción
    : 'http://localhost:5000/api',  // URL local
  
  TIMEOUT: 10000 // 10 segundos
};

// ================================
// HELPER: Enviar datos a API
// ================================

async function enviarAplicanteAAPI(datos) {
  try {
    console.log('📤 Enviando solicitud a API...', datos);

    const response = await fetch(`${API_CONFIG.BASE_URL}/aplicantes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(datos),
      timeout: API_CONFIG.TIMEOUT
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const result = await response.json();
    
    console.log('✅ Solicitud guardada en BD:', result);
    
    return {
      success: true,
      id: result.id,
      message: '✅ Solicitud enviada correctamente'
    };

  } catch (error) {
    console.error('❌ Error enviando a API:', error);

    // Fallback a localStorage si API no está disponible
    console.log('⚠️ Guardando en localStorage como backup...');
    guardarEnLocalStorage(datos);

    return {
      success: false,
      message: `⚠️ API no disponible. Datos guardados localmente. ${error.message}`,
      local: true
    };
  }
}

// ================================
// GUARDAR EN localStorage (BACKUP)
// ================================

function guardarEnLocalStorage(datos) {
  try {
    let aplicantes = JSON.parse(localStorage.getItem('pg_applications')) || [];
    aplicantes.push({
      ...datos,
      localId: Date.now(),
      savedLocally: true
    });
    localStorage.setItem('pg_applications', JSON.stringify(aplicantes));
    console.log('📱 Guardado en localStorage');
  } catch (error) {
    console.error('Error guardando en localStorage:', error);
  }
}

// ================================
// SINCRONIZAR localStorage → API
// ================================

async function sincronizarConAPI() {
  try {
    const aplicantes = JSON.parse(localStorage.getItem('pg_applications')) || [];
    const noEnviados = aplicantes.filter(a => a.savedLocally);

    console.log(`🔄 Sincronizando ${noEnviados.length} solicitudes...`);

    for (const aplicante of noEnviados) {
      const resultado = await enviarAplicanteAAPI(aplicante);
      if (resultado.success) {
        // Eliminar del localStorage
        const index = aplicantes.indexOf(aplicante);
        aplicantes.splice(index, 1);
      }
    }

    localStorage.setItem('pg_applications', JSON.stringify(aplicantes));
    console.log('✅ Sincronización completada');

  } catch (error) {
    console.error('Error sincronizando:', error);
  }
}

// ================================
// ENVIAR EMAIL (PRÓXIMO)
// ================================

async function enviarEmailConfirmacion(email, nombre) {
  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}/enviar-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        nombre,
        tipo: 'confirmacion'
      })
    });

    return await response.json();

  } catch (error) {
    console.error('Error enviando email:', error);
    return null;
  }
}

// ================================
// EXPORTAR
// ================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    API_CONFIG,
    enviarAplicanteAAPI,
    guardarEnLocalStorage,
    sincronizarConAPI,
    enviarEmailConfirmacion
  };
}
