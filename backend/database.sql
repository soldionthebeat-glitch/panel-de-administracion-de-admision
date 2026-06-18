-- ================================
-- 📊 SCHEMA PARA NEON PostgreSQL
-- ================================
-- Ejecuta este script en Neon para crear las tablas

-- ================================
-- TABLA: Aplicantes
-- ================================

CREATE TABLE IF NOT EXISTS aplicantes (
  id SERIAL PRIMARY KEY,
  
  -- DATOS PERSONALES
  nombre VARCHAR(255) NOT NULL,
  nombre_artistico VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  whatsapp VARCHAR(20),
  edad INTEGER,
  pais VARCHAR(100),
  
  -- PUNTAJES MÓDULOS
  score_artistico DECIMAL(10, 2),
  score_tecnico DECIMAL(10, 2),
  score_humano DECIMAL(10, 2),
  score_organizativo DECIMAL(10, 2),
  score_comercial DECIMAL(10, 2),
  
  -- EVALUACIÓN FINAL
  puntaje_final DECIMAL(10, 2) NOT NULL,
  modelo_clasificacion VARCHAR(50),
  
  -- ESTADO
  estado VARCHAR(50) DEFAULT 'pending',
  notas TEXT,
  
  -- DATOS COMPLETOS (JSON)
  datos_completos JSONB,
  
  -- TIMESTAMPS
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_aplicantes_email ON aplicantes (email);
CREATE INDEX IF NOT EXISTS idx_aplicantes_estado ON aplicantes (estado);
CREATE INDEX IF NOT EXISTS idx_aplicantes_modelo ON aplicantes (modelo_clasificacion);
CREATE INDEX IF NOT EXISTS idx_aplicantes_created ON aplicantes (created_at);

-- ================================
-- TABLA: Auditoría
-- ================================

CREATE TABLE IF NOT EXISTS auditoria (
  id SERIAL PRIMARY KEY,
  aplicante_id INTEGER REFERENCES aplicantes(id),
  accion VARCHAR(100) NOT NULL,
  estado_anterior VARCHAR(50),
  estado_nuevo VARCHAR(50),
  usuario VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ================================
-- TABLA: Notas del Equipo (Próximo)
-- ================================

CREATE TABLE IF NOT EXISTS notas_evaluacion (
  id SERIAL PRIMARY KEY,
  aplicante_id INTEGER REFERENCES aplicantes(id),
  evaluador VARCHAR(255),
  nota TEXT,
  modulo VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ================================
-- VIEWS ÚTILES
-- ================================

CREATE OR REPLACE VIEW estadisticas_aplicantes AS
SELECT 
  COUNT(*) as total_aplicantes,
  COUNT(CASE WHEN estado = 'pending' THEN 1 END) as pendientes,
  COUNT(CASE WHEN estado = 'review' THEN 1 END) as en_revision,
  COUNT(CASE WHEN estado = 'approved' THEN 1 END) as aprobados,
  COUNT(CASE WHEN estado = 'rejected' THEN 1 END) as rechazados,
  AVG(puntaje_final) as puntaje_promedio,
  AVG(score_artistico) as promedio_artistico,
  AVG(score_tecnico) as promedio_tecnico,
  AVG(score_humano) as promedio_humano,
  AVG(score_organizativo) as promedio_organizativo,
  AVG(score_comercial) as promedio_comercial
FROM aplicantes;

-- ================================
-- FUNCIONES ÚTILES
-- ================================

-- Función para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para aplicantes
DROP TRIGGER IF EXISTS trigger_update_aplicantes ON aplicantes;
CREATE TRIGGER trigger_update_aplicantes
BEFORE UPDATE ON aplicantes
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();

-- ================================
-- INSERTS DE PRUEBA (OPCIONAL)
-- ================================

-- Descomenta para agregar datos de prueba:
/*
INSERT INTO aplicantes (
  nombre, nombre_artistico, email, whatsapp, edad, pais,
  score_artistico, score_tecnico, score_humano, score_organizativo, score_comercial,
  puntaje_final, modelo_clasificacion, estado
) VALUES (
  'Juan García', 'ProducerX', 'juan@example.com', '+54 9 11 12345678', 28, 'Argentina',
  8.2, 8.9, 8.1, 7.8, 7.5,
  8.14, 'A/B/C', 'pending'
);
*/

-- ================================
-- CONSULTAS ÚTILES
-- ================================

-- Ver todas las solicitudes
-- SELECT * FROM aplicantes ORDER BY created_at DESC;

-- Ver estadísticas
-- SELECT * FROM estadisticas_aplicantes;

-- Contar por estado
-- SELECT estado, COUNT(*) FROM aplicantes GROUP BY estado;

-- Contar por modelo
-- SELECT modelo_clasificacion, COUNT(*) FROM aplicantes GROUP BY modelo_clasificacion;

-- Promedio de puntajes
-- SELECT AVG(puntaje_final) FROM aplicantes;

-- Email duplicados
-- SELECT email, COUNT(*) FROM aplicantes GROUP BY email HAVING COUNT(*) > 1;

-- Últimas 10 solicitudes
-- SELECT * FROM aplicantes ORDER BY created_at DESC LIMIT 10;
