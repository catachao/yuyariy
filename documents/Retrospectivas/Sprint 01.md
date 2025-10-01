Perfecto. Aquí tienes la **versión adaptada del informe** centrada **solo en el Sprint 01**, manteniendo el mismo nivel de detalle, lenguaje técnico y formato profesional en Markdown:

---

# RETROSPECTIVA SPRINT 1

## Proyecto Yuyariy - Análisis Inicial y Lecciones del Primer Sprint

**Fecha:** 15/Sep/2025
**Hora:** 4:00 PM - 5:30 PM
**Duración:** 1.5 horas
**Facilitador:** MATIAS ZURIEL AQUINO CASTRO (Scrum Master)
**Técnica utilizada:** Start-Stop-Continue + 5 Whys

---

## Participantes

* MATIAS ZURIEL AQUINO CASTRO (Frontend Lead / Scrum Master)
* CESAR AUGUSTO ATACHAO VILCHEZ (Backend Lead)
* JAVIER PAUL FLORES TAIPE (Full Stack Developer / DevOps)

---

## Métricas del Sprint 1 - Análisis Cuantitativo

| Métrica                      | Resultado   | Observación                                |
| ---------------------------- | ----------- | ------------------------------------------ |
| **Story Points Completados** | 7/7 (100%)  | Todas las historias cerradas exitosamente  |
| **Velocidad Real**           | 0.5 pts/día | Consistente con la planificación inicial   |
| **Lead Time Promedio**       | 3.2 días    | Aceptable para primer sprint               |
| **Cycle Time Promedio**      | 2.1 días    | Buen ritmo de desarrollo                   |
| **Defectos Descubiertos**    | 2           | Ambos menores y corregidos en menos de 24h |
| **Cobertura de Tests**       | 82%         | Meta de 80% alcanzada                      |
| **Tiempo en Impedimentos**   | 12 hrs      | Principalmente por configuración de CI/CD  |
| **Satisfacción del Equipo**  | 4.3/5       | Buen inicio y sin conflictos               |
| **Deploys a Staging**        | 12          | Flujo de entrega continuo y estable        |

---

## FASE 1: RECOLECCIÓN DE DATOS

### Técnica: Start-Stop-Continue

#### 🟢 START (Empezar a hacer)

* “POC técnico para nuevas integraciones antes de comprometer historias.” (3 votos)
* “Planificar tiempo específico para documentación técnica.” (2 votos)
* “Revisar dependencias externas antes del sprint.” (2 votos)

#### 🛑 STOP (Dejar de hacer)

* “Evitar merge directo a develop sin PR.” (4 votos)
* “Dejar de asumir que las fuentes de scraping son iguales.” (3 votos)
* “No dejar tareas sin validación de criterios de aceptación.” (2 votos)

#### 🟡 CONTINUE (Continuar haciendo)

* “Daily stand-ups efectivos de 15 minutos.” (5 votos)
* “Comunicación asíncrona por Slack.” (4 votos)
* “Integración continua automatizada en cada push.” (3 votos)
* “Code reviews colaborativos con feedback constructivo.” (3 votos)

---

## FASE 2: ANÁLISIS DE CAUSAS RAÍZ (5 Whys)

### PROBLEMA #1: Retraso en Configuración de CI/CD

**Contexto:** La integración inicial de GitHub Actions y despliegue en staging falló durante los primeros dos días.

**Análisis 5 Whys:**

1. ¿Por qué falló el pipeline?
   → *Javier:* “Las variables de entorno no estaban configuradas en el entorno remoto.”
2. ¿Por qué no estaban configuradas?
   → *César:* “No se documentó la lista completa en el README.”
3. ¿Por qué no se documentó?
   → *Matías:* “Pensamos que la configuración era temporal.”
4. ¿Por qué asumimos eso?
   → *César:* “Porque se realizó una prueba rápida sin checklist formal.”
5. ¿Por qué no existía un checklist formal?
   → *Matías:* “Porque no habíamos definido un flujo estándar para despliegue.”

**Causa raíz:** Falta de checklist de CI/CD y documentación centralizada.
**Impacto:** 8 horas de retraso acumuladas.
**Acción correctiva:** Crear guía estándar de despliegue y checklist de variables de entorno.

---

### PROBLEMA #2: Inconsistencias en Web Scraping

**Contexto:** Los artículos de una fuente (La República) no mostraban fecha ni autor en el resumen generado.

**Análisis 5 Whys:**

1. ¿Por qué faltaban datos?
   → *César:* “El selector CSS no coincidía con el formato de esa fuente.”
2. ¿Por qué no se detectó antes?
   → *Matías:* “Solo probamos con una fuente durante el POC.”
3. ¿Por qué se probó con una sola?
   → *Javier:* “No se definió una validación mínima de fuentes.”
4. ¿Por qué no había validación mínima?
   → *Matías:* “Asumimos que todas las fuentes eran similares.”
5. ¿Por qué se asumió eso?
   → *César:* “Falta de documentación sobre variabilidad en estructuras HTML.”

**Causa raíz:** Pruebas limitadas en el POC de scraping.
**Impacto:** 4 horas de retrabajo + defectos menores.
**Acción correctiva:** Probar mínimo 3 fuentes distintas antes de cerrar historia.

---

## FASE 3: DISCUSIÓN Y APRENDIZAJES CLAVE

**Tema 1:** Claridad en los criterios de aceptación

* Se identificó que algunos criterios no estaban definidos por completo, lo que causó interpretaciones distintas entre los miembros.

**Tema 2:** Balance entre velocidad y calidad

* El equipo logró cumplir los objetivos, pero a costa de ciertos atajos técnicos (ej. falta de pruebas de carga).

**Tema 3:** Comunicación y visibilidad de bloqueos

* Se valoró positivamente la cultura de apoyo, pero se acordó mejorar la visibilidad de impedimentos.

---

## FASE 4: PLAN DE ACCIÓN

| ID           | Acción                                                       | Responsable | Fecha Límite | Prioridad  | Criterio de Éxito                                        |
| ------------ | ------------------------------------------------------------ | ----------- | ------------ | ---------- | -------------------------------------------------------- |
| **RET1-001** | Crear checklist de CI/CD con variables y pasos de despliegue | Javier      | 17/Sep       | 🔴 Crítica | Pipeline funcional sin fallos                            |
| **RET1-002** | Definir template de criterios de aceptación para historias   | Matías      | 18/Sep       | 🟡 Alta    | Todas las historias del Sprint 2 tienen criterios claros |
| **RET1-003** | Pruebas de scraping con mínimo 3 fuentes distintas           | César       | 19/Sep       | 🟡 Alta    | Validación exitosa en todas las fuentes                  |
| **RET1-004** | Crear documento técnico “setup inicial del proyecto”         | Javier      | 20/Sep       | 🟢 Media   | Guía en Confluence revisada por equipo                   |
| **RET1-005** | Reunión de refinamiento semanal (miércoles 5PM)              | Matías      | Permanente   | 🟢 Media   | Flujo constante de mejora en historias                   |

---

## Compromisos Individuales

### MATIAS ZURIEL AQUINO CASTRO

* Mejorar planificación técnica antes del sprint.
* Garantizar que cada historia tenga criterios claros y revisados.
* Facilitar retrospectiva con enfoque en mejora continua.

### CESAR AUGUSTO ATACHAO VILCHEZ

* Implementar validación mínima de scraping con múltiples fuentes.
* Documentar decisiones arquitectónicas clave.
* Asegurar que los endpoints estén cubiertos por pruebas automáticas.

### JAVIER PAUL FLORES TAIPE

* Configurar correctamente pipelines de CI/CD y documentar el proceso.
* Implementar checklist de despliegue estándar.
* Monitorear métricas de integración continua semanalmente.

---

