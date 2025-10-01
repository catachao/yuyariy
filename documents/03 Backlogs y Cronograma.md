
# Backlogs y Cronograma

La gestión de tareas y la planificación temporal del proyecto **Yuyariy** se estructuraron bajo la metodología **Scrum**, utilizando Jira como herramienta de seguimiento. Esto permitió mantener un **Backlog altamente estructurado** y una **planificación optimizada de Sprints**, alineados con el objetivo de fomentar la lectura crítica y combatir el sesgo de confirmación.

## 2. Estructura de Épicas

El backlog del proyecto está organizado en tres épicas principales que representan las áreas funcionales críticas de Yuyariy:

### EP01 | Consumo y Accesibilidad de Noticias
**Objetivo:** Garantizar que los usuarios puedan acceder, consumir y explorar noticias de manera efectiva desde múltiples fuentes y perspectivas.

**Due Date:** 11/Nov/25

**Valor de Negocio:** Establece la base fundamental de la plataforma, permitiendo la ingesta y presentación de contenido noticioso de forma accesible.

### EP02 | Pensamiento Crítico y Reducción del Sesgo
**Objetivo:** Proporcionar herramientas que permitan a los usuarios identificar sesgos mediáticos y desarrollar habilidades de pensamiento crítico.

**Due Date:** 27/Oct/25

**Valor de Negocio:** Diferenciador clave del producto que cumple directamente con la misión de combatir el sesgo de confirmación.

### EP03 | Interacción, Personalización y Validación
**Objetivo:** Facilitar la interacción personalizada del usuario con la plataforma y generar métricas de impacto educativo.

**Start Date:** 13/Oct/25  
**Due Date:** 10/Nov/25

**Valor de Negocio:** Aumenta el engagement del usuario y permite la medición del impacto social y educativo de la plataforma.

## 3. Product Backlog Detallado

### 3.1 Historias de Usuario - EP01: Consumo y Accesibilidad de Noticias

#### **SCRUM-4: LDT-1 HU01**
**Como** usuario,  
**Quiero** acceder a Yuyariy desde un navegador web,  
**Para** usarla sin necesidad de instalar nada.

**Como** usuario con discapacidad visual,  
**Quiero** que la plataforma sea accesible con lectores de pantalla,  
**Para** poder consumir noticias.

**Prioridad:** Medium  
**Story Points:** 3  
**Sprint:** Sprint 1  
**Asignado a:** MATIAS ZURIEL AQUINO CASTRO  

**Criterios de Aceptación:**
1. La aplicación web es accesible desde navegadores modernos (Chrome, Firefox, Safari, Edge) en versiones actuales
2. La interfaz responde correctamente en diferentes resoluciones de pantalla (desktop, tablet, mobile)
3. Todos los elementos interactivos son navegables mediante teclado
4. Las imágenes incluyen textos alternativos descriptivos
5. La estructura semántica HTML permite la navegación con lectores de pantalla (JAWS, NVDA)
6. El contraste de colores cumple con las pautas WCAG 2.1 nivel AA
7. Los formularios incluyen etiquetas apropiadas para tecnologías asistivas
8. El tiempo de carga inicial no excede los 3 segundos en conexiones 4G

**Dependencias:** Ninguna (Historia fundacional)

---

#### **SCRUM-6: LDT-2 HU02**
**Como** lector,  
**Quiero** ver una lista de noticias sobre un mismo evento desde distintos medios,  
**Para** comparar la información.

**Como** usuario,  
**Quiero** filtrar noticias por tema o categoría,  
**Para** enfocarme en mis intereses.

**Prioridad:** Medium  
**Story Points:** 4  
**Sprint:** Sprint 1  
**Asignado a:** CESAR AUGUSTO ATACHAO VILCHEZ 

**Criterios de Aceptación:**
1. El sistema muestra al menos 3 fuentes diferentes para un mismo evento noticioso
2. Cada noticia se presenta con: título, fuente, fecha, orientación ideológica y resumen breve
3. Las fuentes representan al menos dos perspectivas ideológicas diferentes (izquierda, centro, derecha)
4. Los filtros incluyen categorías: política, economía, sociedad, cultura, tecnología, deportes
5. La aplicación de filtros actualiza los resultados en menos de 2 segundos
6. Se muestra un contador de noticias encontradas para cada filtro

**Dependencias:** SCRUM-4 (plataforma web funcional)

---

#### **SCRUM-7: LDT-4 HU04**
**Como** usuario estudiante,  
**Quiero** acceder a definiciones claras de términos políticos o económicos,  
**Para** comprender mejor la noticia.

**Prioridad:** Medium  
**Sprint:** Sprint 4  
**Asignado a:** MATIAS ZURIEL AQUINO CASTRO  

**Criterios de Aceptación:**
1. Los términos complejos aparecen destacados visualmente dentro del texto (subrayado o color diferente)
2. Al hacer hover/clic sobre un término, aparece un tooltip con la definición
3. La definición tiene un máximo de 80 palabras y está escrita en lenguaje claro
4. Las definiciones pueden cerrarse haciendo clic fuera del tooltip
5. Los términos definidos permanecen destacados después de consultar la definición
6. Las definiciones son neutrales ideológicamente y basadas en fuentes académicas

**Dependencias:** SCRUM-6 (visualización de noticias)

---

#### **SCRUM-8: LDT-5 HU05**
**Como** lector con poco tiempo,  
**Quiero** leer una versión resumida de la noticia,  
**Para** informarme rápidamente.

**Como** usuario avanzado,  
**Quiero** elegir entre un resumen básico, intermedio o avanzado,  
**Para** adaptar la complejidad del texto.

**Prioridad:** Medium  
**Sprint:** Sprint 2  
**Asignado a:** CESAR AUGUSTO ATACHAO VILCHEZ  

**Criterios de Aceptación:**
1. Cada noticia ofrece tres niveles de resumen: básico (50-80 palabras), intermedio (120-150 palabras), avanzado (200-250 palabras)
2. El resumen básico presenta únicamente el qué, quién, cuándo y dónde
3. El resumen intermedio añade el por qué y contexto inmediato
4. El resumen avanzado incluye análisis de consecuencias y antecedentes
5. El usuario puede cambiar entre niveles sin recargar la página
6. Los resúmenes mantienen la neutralidad y no añaden interpretaciones
7. El tiempo de generación de resúmenes no excede los 3 segundos

**Dependencias:** SCRUM-6 (visualización de noticias)

---

### 3.2 Historias de Usuario - EP02: Pensamiento Crítico y Reducción del Sesgo

#### **SCRUM-5: LDT-3 HU03**
**Como** usuario crítico,  
**Quiero** ver un indicador visual del sesgo político en una cobertura,  
**Para** entender la orientación ideológica del medio.

**Como** usuario curioso,  
**Quiero** leer un breve resumen de por qué una noticia fue clasificada con cierto sesgo,  
**Para** aprender a detectarlo.

**Prioridad:** Medium  
**Story Points:** 3  
**Sprint:** Sprint 3  
**Asignado a:** MATIAS ZURIEL AQUINO CASTRO  

**Criterios de Aceptación:**
1. Cada noticia muestra un indicador visual de orientación: izquierda (azul), centro (gris), derecha (rojo)
2. El indicador incluye un nivel de intensidad (suave, moderado, marcado)
5. Se citan al menos 3 variantes concretas del texto analizado
6. El sistema utiliza un modelo de análisis de sesgo validado académicamente
7. La precisión del clasificador supera el 75% en pruebas con noticias etiquetadas
8. Los usuarios pueden reportar desacuerdos con la clasificación

**Dependencias:** SCRUM-6 (múltiples fuentes del mismo evento)

---

#### **SCRUM-9: LDT-6 HU06**
**Como** lector crítico,  
**Quiero** responder preguntas al final de cada noticia,  
**Para** reflexionar sobre la información que leí.

**Prioridad:** Medium  
**Sprint:** Sprint 2  
**Asignado a:** MATIAS ZURIEL AQUINO CASTRO  

**Criterios de Aceptación:**
1. Al finalizar cada noticia, aparecen 3-5 preguntas de reflexión crítica
3. Las preguntas son de opción múltiple con 4 alternativas
4. Se proporciona retroalimentación inmediata explicando por qué cada opción es correcta o incorrecta
5. La retroalimentación tiene 50-80 palabras y refiere a elementos específicos de la noticia
7. Se calcula un puntaje de pensamiento crítico basado en respuestas acumuladas
8. Las preguntas se generan de forma semi-automática basándose en el contenido de la noticia

**Dependencias:** SCRUM-8 (contenido de noticias disponible)

---

### 3.3 Historias de Usuario - EP03: Interacción, Personalización y Validación

#### **SCRUM-10: LDT-7 HU07**
**Como** usuario,  
**Quiero** recibir notificaciones sobre temas que sigo,  
**Para** mantenerme actualizado sin buscar manualmente.

**Prioridad:** Medium  
**Sprint:** Sprint 3  
**Asignado a:** CESAR AUGUSTO ATACHAO VILCHEZ  

**Criterios de Aceptación:**
1. Los usuarios pueden seleccionar temas de interés para seguimiento
2. El sistema envía notificaciones push cuando hay noticias nuevas sobre temas seguidos
3. Las notificaciones se agrupan si hay múltiples noticias del mismo tema (máximo 1 notificación cada 2 horas)
4. Los usuarios pueden configurar: frecuencia (inmediata, diaria, semanal), horario preferido, tipos de eventos
8. El sistema respeta la configuración "No molestar" del navegador
9. Se incluye un resumen semanal de temas seguidos enviado por correo

**Dependencias:** SCRUM-6 (sistema de categorías y temas)

---

#### **SCRUM-11: LDT-8 HU08**
**Como** usuario,  
**Quiero** guardar noticias para leer después sin internet,  
**Para** usarlas en viajes o lugares con mala señal.

**Prioridad:** Medium  
**Sprint:** Sprint 3  
**Asignado a:** JAVIER PAUL FLORES TAIPE  

**Criterios de Aceptación:**
1. Cada noticia incluye un botón "Guardar para leer después"
2. Las noticias guardadas son accesibles desde una sección "Mis lecturas guardadas"
3. El contenido guardado incluye: texto completo, imágenes, resúmenes, indicador de sesgo
8. El límite de almacenamiento es de 50 noticias
10. Las noticias guardadas se sincronizan entre dispositivos del mismo usuario

**Dependencias:** SCRUM-4 (plataforma web con PWA capabilities)

---

#### **SCRUM-12: LDT-9 HU09**
**Como** equipo de gestión,  
**Quiero** generar reportes sobre el uso de la plataforma,  
**Para** medir impacto educativo y social.

**Prioridad:** Medium  
**Sprint:** Sprint 4  
**Asignado a:** JAVIER PAUL FLORES TAIPE  

**Criterios de Aceptación:**
1. El panel de administración muestra métricas de: usuarios activos, noticias leídas, tiempo promedio de lectura, preguntas respondidas
2. Se generan reportes semanales y mensuales exportables
3. Las métricas incluyen: distribución de orientaciones ideológicas consultadas, temas más seguidos, términos más consultados
4. El sistema calcula el "índice de exposición diversa": porcentaje de usuarios que consultan al menos 2 perspectivas diferentes
6. Los reportes incluyen visualizaciones gráficas (líneas de tendencia, barras comparativas, distribuciones)
8. Los datos personales están anonimizados cumpliendo con normativas de privacidad
9. El sistema genera alertas cuando se detectan patrones de uso inusuales
10. Se incluye un dashboard ejecutivo con KPIs principales actualizados en tiempo real

**Dependencias:** Todas las historias de usuario previas (requiere datos de uso completos)

---

## 4. Planificación de Sprints

### Sprint 1 (02/Sep/25 - 15/Sep/25)
**Objetivo:** Establecer la infraestructura base y el acceso fundamental a noticias

**Historias incluidas:**
- SCRUM-4: HU01 - Acceso web y accesibilidad (3 pts) ✅ Completado
- SCRUM-6: HU02 - Comparación de fuentes y filtros (4 pts) ✅ Completado

**Total Story Points:** 7  
**Capacidad del equipo:** 7-8 puntos  
**Estado:** Completado

**Retrospectiva:**
- Completadas exitosamente ambas historias fundacionales
- La accesibilidad establecida permitirá auditorías continuas
- El sistema de filtros proporciona la base para personalización futura

---

### Sprint 2 (16/Sep/25 - 29/Sep/25)
**Objetivo:** Implementar funcionalidades de resumen y pensamiento crítico inicial

**Historias incluidas:**
- SCRUM-8: HU05 - Resúmenes multinivel
- SCRUM-9: HU06 - Preguntas de reflexión crítica

**Total Story Points:** Estimado 6-7 puntos  
**Capacidad del equipo:** 7-8 puntos  
**Estado:** En progreso

**Dependencias críticas:**
- Ambas historias dependen de SCRUM-6 (noticias y contenido disponible)
- La generación de resúmenes requiere integración con servicios de NLP

---

### Sprint 3 (30/Sep/25 - 13/Oct/25)
**Objetivo:** Añadir detección de sesgo y funcionalidades de personalización

**Historias incluidas:**
- SCRUM-5: HU03 - Indicadores de sesgo político (3 pts)
- SCRUM-10: HU07 - Sistema de notificaciones
- SCRUM-11: HU08 - Lectura offline

**Total Story Points:** Estimado 9-10 puntos  
**Capacidad del equipo:** 7-8 puntos  
**Estado:** Planificado

**Consideraciones:**
- Sprint con alta carga; posible redistribución de SCRUM-11 a Sprint 4
- La detección de sesgo (SCRUM-5) es crítica para la propuesta de valor
- Requiere modelo de ML entrenado y validado

---

### Sprint 4 (14/Oct/25 - 27/Oct/25)
**Objetivo:** Completar herramientas educativas y sistema de métricas

**Historias incluidas:**
- SCRUM-7: HU04 - Glosario de términos
- SCRUM-12: HU09 - Dashboard de métricas y reportes

**Total Story Points:** Estimado 6-7 puntos  
**Capacidad del equipo:** 7-8 puntos  
**Estado:** Planificado

**Entregables finales:**
- Sistema completo de análisis de impacto
- Herramientas educativas integradas
- Preparación para beta pública

---

## 5. Mapa de Dependencias

```
SCRUM-4 (HU01) [Base Web]
    ↓
SCRUM-6 (HU02) [Noticias y Filtros]
    ↓
    ├─→ SCRUM-8 (HU05) [Resúmenes]
    ├─→ SCRUM-9 (HU06) [Preguntas]
    ├─→ SCRUM-7 (HU04) [Glosario]
    └─→ SCRUM-5 (HU03) [Sesgo]
            ↓
        SCRUM-10 (HU07) [Notificaciones]
        SCRUM-11 (HU08) [Offline]
            ↓
        SCRUM-12 (HU09) [Métricas] ← Requiere todas las anteriores
```

## 6. Gestión de Riesgos por Sprint

### Sprint 2 - Riesgos Identificados:
- **Riesgo:** Complejidad en generación automática de resúmenes multinivel
- **Mitigación:** Considerar resúmenes semi-automáticos con revisión editorial inicial
- **Riesgo:** Calidad de preguntas de reflexión generadas automáticamente
- **Mitigación:** Crear banco inicial de preguntas tipo para validar el enfoque

### Sprint 3 - Riesgos Identificados:
- **Riesgo:** Precisión del modelo de detección de sesgo por debajo del umbral
- **Mitigación:** Dataset de entrenamiento pre-etiquetado por expertos en comunicación
- **Riesgo:** Sobrecarga del sprint con tres historias complejas
- **Mitigación:** Mover SCRUM-11 a Sprint 4 si se detectan retrasos en semana 1

### Sprint 4 - Riesgos Identificados:
- **Riesgo:** Recolección insuficiente de datos de uso para métricas significativas
- **Mitigación:** Instrumentación de analytics desde Sprint 1; considerar datos simulados para dashboard


## 7. Métricas del Proyecto

### Velocidad del Equipo:
- **Sprint 1:** 7 puntos completados
- **Velocidad promedio proyectada:** 7-8 puntos por sprint
- **Total puntos estimados:** 28-30 puntos para el proyecto completo

### Burndown del Proyecto:
- **Inicio:** 30 story points
- **Después de Sprint 1:** 23 puntos restantes
- **Fecha estimada de completación:** 27/Oct/25

---
