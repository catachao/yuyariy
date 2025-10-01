# Diagrama de Gantt - Proyecto Yuyariy

```mermaid
gantt
    title Cronograma del Proyecto Yuyariy - Desarrollo de Plataforma de Noticias con Análisis de Sesgo
    dateFormat YYYY-MM-DD

    section Planificación
    Kickoff del Proyecto           :milestone, m1, 2025-09-02, 0d
    Configuración de Entornos      :done, setup1, 2025-09-02, 3d
    Definición de Arquitectura     :done, setup2, 2025-09-03, 2d

    section Sprint 1 - Fundamentos
    Sprint 1 Planning              :milestone, sp1_start, 2025-09-02, 0d
    SCRUM-4 HU01 Acceso Web        :done, s1_hu01, 2025-09-02, 7d
    Desarrollo Frontend Base       :done, s1_hu01_fe, 2025-09-02, 4d
    Implementación Accesibilidad   :done, s1_hu01_a11y, 2025-09-06, 3d
    Auditoría WCAG 2.1             :done, s1_hu01_audit, 2025-09-08, 2d
    SCRUM-6 HU02 Fuentes y Filtros :crit, done, s1_hu02, 2025-09-05, 8d
    API de Agregación de Noticias  :done, s1_hu02_api, 2025-09-05, 4d
    Sistema de Filtros             :done, s1_hu02_filter, 2025-09-09, 4d
    Testing e Integración Sprint 1 :done, s1_test, 2025-09-13, 2d
    Sprint 1 Review & Retro        :milestone, sp1_end, 2025-09-15, 0d

    section Sprint 2 - Resúmenes y Reflexión
    Sprint 2 Planning              :milestone, sp2_start, 2025-09-16, 0d
    SCRUM-8 HU05 Resúmenes         :active, s2_hu05, 2025-09-16, 7d
    Integración NLP/Summarization  :active, s2_hu05_nlp, 2025-09-16, 4d
    UI Niveles de Resumen          :s2_hu05_ui, 2025-09-20, 3d
    SCRUM-9 HU06 Preguntas         :s2_hu06, 2025-09-18, 7d
    Generador de Preguntas         :s2_hu06_gen, 2025-09-18, 4d
    Sistema de Retroalimentación   :s2_hu06_feedback, 2025-09-22, 3d
    Testing e Integración Sprint 2 :s2_test, 2025-09-25, 4d
    Sprint 2 Review & Retro        :milestone, sp2_end, 2025-09-29, 0d

    section Sprint 3 - Sesgo y Personalización
    Sprint 3 Planning              :milestone, sp3_start, 2025-09-30, 0d
    SCRUM-5 HU03 Detección Sesgo   :crit, s3_hu03, 2025-09-30, 8d
    Entrenamiento Modelo ML        :crit, s3_hu03_ml, 2025-09-30, 5d
    Validación y Ajuste Modelo     :crit, s3_hu03_val, 2025-10-05, 3d
    UI Indicadores Visuales        :s3_hu03_ui, 2025-10-06, 2d
    SCRUM-10 HU07 Notificaciones   :s3_hu07, 2025-10-02, 6d
    Backend Sistema Push           :s3_hu07_be, 2025-10-02, 3d
    Configuración de Preferencias  :s3_hu07_config, 2025-10-05, 3d
    SCRUM-11 HU08 Lectura Offline  :s3_hu08, 2025-10-08, 5d
    Service Workers y Cache        :s3_hu08_sw, 2025-10-08, 3d
    Gestión de Almacenamiento      :s3_hu08_storage, 2025-10-11, 2d
    Testing e Integración Sprint 3 :s3_test, 2025-10-11, 2d
    Sprint 3 Review & Retro        :milestone, sp3_end, 2025-10-13, 0d

    section Sprint 4 - Educación y Métricas
    Sprint 4 Planning              :milestone, sp4_start, 2025-10-14, 0d
    SCRUM-7 HU04 Glosario          :s4_hu04, 2025-10-14, 6d
    Desarrollo Base de Datos Términos :s4_hu04_db, 2025-10-14, 3d
    Sistema de Tooltips            :s4_hu04_ui, 2025-10-17, 3d
    SCRUM-12 HU09 Dashboard        :crit, s4_hu09, 2025-10-16, 8d
    Instrumentación Analytics      :s4_hu09_analytics, 2025-10-16, 4d
    Desarrollo Dashboard Admin     :s4_hu09_dash, 2025-10-20, 4d
    Generador de Reportes          :s4_hu09_reports, 2025-10-22, 2d
    Testing e Integración Sprint 4 :s4_test, 2025-10-24, 3d
    Sprint 4 Review & Retro        :milestone, sp4_end, 2025-10-27, 0d

    section Validación y Lanzamiento
    Testing UAT                    :crit, uat, 2025-10-28, 5d
    Corrección de Bugs Críticos    :bugfix, 2025-10-30, 3d
    Preparación Producción         :prod_prep, 2025-11-01, 4d
    Documentación Final            :docs, 2025-11-03, 3d
    Capacitación Usuarios          :training, 2025-11-05, 3d
    Deploy a Producción            :crit, milestone, prod_deploy, 2025-11-10, 0d
    Monitoreo Post-Lanzamiento     :monitoring, 2025-11-10, 7d

    section Hitos Críticos
    MVP Funcional                  :milestone, mvp, 2025-09-15, 0d
    Detección de Sesgo Operativa   :milestone, bias_ready, 2025-10-08, 0d
    Sistema Completo               :milestone, complete, 2025-10-27, 0d
    Lanzamiento Público            :milestone, launch, 2025-11-10, 0d
```

### 1. Ruta Crítica Identificada

La ruta crítica del proyecto incluye las siguientes tareas secuenciales:

```
Configuración → SCRUM-6 (HU02) → SCRUM-5 (HU03) → SCRUM-12 (HU09) → UAT → Despliegue
```

**Duración total de la ruta crítica:** 70 días (02/Sep/25 - 10/Nov/25)

**Tareas críticas:**

- **SCRUM-6 (HU02):** Base para todas las funcionalidades posteriores
- **SCRUM-5 (HU03):** Diferenciador clave del producto (detección de sesgo)
- **SCRUM-12 (HU09):** Requiere datos de todas las funcionalidades
- **Testing UAT:** Validación final antes de producción

### 2. Asignación de Recursos

#### Equipo de Desarrollo

| Miembro                           | Sprint 1                  | Sprint 2            | Sprint 3                  | Sprint 4             |
| --------------------------------- | ------------------------- | ------------------- | ------------------------- | -------------------- |
| **MATIAS ZURIEL AQUINO CASTRO**   | SCRUM-4 (Frontend + A11y) | SCRUM-9 (Preguntas) | SCRUM-5 (UI Sesgo)        | SCRUM-7 (Glosario)   |
| **CESAR AUGUSTO ATACHAO VILCHEZ** | SCRUM-6 (Backend + API)   | SCRUM-8 (NLP)       | SCRUM-10 (Notificaciones) | Support + Testing    |
| **JAVIER PAUL FLORES TAIPE**      | Support + Testing         | Support + Testing   | SCRUM-11 (Offline)        | SCRUM-12 (Dashboard) |

**Capacidad por Sprint:**

- **Sprint 1-2:** 3 desarrolladores, carga balanceada
- **Sprint 3:** Carga alta (3 historias), requiere coordinación estricta
- **Sprint 4:** Enfoque en métricas y documentación

### 3. Desglose de Estructura de Trabajo (WBS)

```
1. Proyecto Yuyariy
   │
   ├── 1.1 Infraestructura Base
   │   ├── 1.1.1 Configuración de Entornos (Dev/Staging/Prod)
   │   ├── 1.1.2 CI/CD Pipeline
   │   ├── 1.1.3 Arquitectura de Microservicios
   │   └── 1.1.4 Base de Datos (Esquema inicial)
   │
   ├── 1.2 EP01 - Consumo y Accesibilidad
   │   ├── 1.2.1 SCRUM-4 (HU01) - Acceso Web
   │   │   ├── Frontend Base (React)
   │   │   ├── Responsive Design
   │   │   └──  Accesibilidad WCAG 2.1
   │   ├── 1.2.2 SCRUM-6 (HU02) - Fuentes y Filtros
   │   │   ├── API Agregación (Web Scraping)
   │   │   ├── Normalización de Datos
   │   │   ├── Sistema de Filtros
   │   │   └── Cache y Optimización
   │   ├── 1.2.3 SCRUM-8 (HU05) - Resúmenes
   │   │   ├── Integración NLP
   │   │   ├── Generación Multinivel
   │   │   └── UI de Resúmenes
   │   └── 1.2.4 SCRUM-7 (HU04) - Glosario
   │       ├── Base de Datos de Términos
   │       ├── Sistema de Tooltips
   │       └── Analytics de Consultas
   │
   ├── 1.3 EP02 - Pensamiento Crítico
   │   ├── 1.3.1 SCRUM-5 (HU03) - Detección de Sesgo
   │   │   ├── Recolección Dataset
   │   │   ├── Entrenamiento Modelo ML
   │   │   ├── Validación (>75% precisión)
   │   │   ├── API de Clasificación
   │   │   └── UI Indicadores Visuales
   │   └── 1.3.2 SCRUM-9 (HU06) - Preguntas Reflexivas
   │       ├── Generador de Preguntas
   │       ├── Sistema de Evaluación
   │       ├── Retroalimentación Personalizada
   │       └── Historial de Usuario
   │
   ├── 1.4 EP03 - Personalización
   │   ├── 1.4.1 SCRUM-10 (HU07) - Notificaciones
   │   │   ├── Backend Sistema Push
   │   │   ├── Web Push API
   │   │   ├── Configuración Preferencias
   │   │   └── Email Semanal
   │   ├── 1.4.2 SCRUM-11 (HU08) - Offline
   │   │   ├── Gestión de Cache
   │   │   └── Sincronización
   │   └── 1.4.3 SCRUM-12 (HU09) - Dashboard
   │       ├── Instrumentación Analytics
   │       ├── Dashboard Admin
   │       ├── Generador de Reportes
   │       └── Visualizaciones
   │
   ├── 1.5 Testing y Calidad
   │   ├── 1.5.1 Testing Unitario (por Sprint)
   │   ├── 1.5.2 Testing de Integración
   │   └── 1.5.3 Testing UAT
   │
   └── 1.6 Despliegue y Operaciones
       ├── 1.6.1 Preparación Producción
       ├── 1.6.2 Documentación
       ├── 1.6.3 Deploy
       └── 1.6.4 Monitoreo Post-Lanzamiento
```

### 4. Hitos de Validación

Aquí tienes la información organizada en una **tabla de hitos del proyecto Yuyariy**:

| **Sprint**      | **Periodo**     | **Objetivo Principal**                                  | **Historias Incluidas**                                                                               | **Story Points** | **Estado**     | **Comentarios Clave / Dependencias**                                                                                                                |
| --------------- | --------------- | ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ---------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🟩 **Sprint 1** | 02/Sep – 15/Sep | Establecer infraestructura base y acceso a noticias     | - HU01: Acceso web y accesibilidad<br>- HU02: Comparación de fuentes y filtros                        | 7                | ✅ Completado  | Ambas historias fundacionales completadas. La accesibilidad permitirá auditorías continuas y los filtros serán base para la personalización futura. |
| 🟦 **Sprint 2** | 16/Sep – 29/Sep | Implementar resúmenes y pensamiento crítico inicial     | - HU05: Resúmenes multinivel<br>- HU06: Preguntas de reflexión crítica                                | 6–7              | 🔄 En progreso | Depende de HU02 (contenido disponible). Requiere integración con servicios de NLP.                                                                  |
| 🟧 **Sprint 3** | 30/Sep – 13/Oct | Añadir detección de sesgo y personalización             | - HU03: Indicadores de sesgo político<br>- HU07: Sistema de notificaciones<br>- HU08: Lectura offline | 9–10             | 📅 Planificado | Alta carga de trabajo; posible mover HU08 a Sprint 4. Requiere modelo de ML validado.                                                               |
| 🟨 **Sprint 4** | 14/Oct – 27/Oct | Completar herramientas educativas y sistema de métricas | - HU04: Glosario de términos<br>- HU09: Dashboard de métricas y reportes                              | 6–7              | 📅 Planificado | Entregables finales: sistema de análisis de impacto, herramientas educativas y preparación para beta pública.                                       |
