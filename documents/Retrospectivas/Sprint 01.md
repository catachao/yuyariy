## 🟩 **Informe de Reflexión – Sprint 01 (02/Sep – 15/Sep)**

### 🧭 Contexto general

Durante el primer sprint del proyecto **Yuyariy**, el equipo conformado por **Matías, César y Javier** se centró en establecer la infraestructura base del sistema y habilitar las funcionalidades iniciales de acceso a las fuentes de noticias. El objetivo principal fue construir un **MVP funcional** que permitiera validar el acceso, la usabilidad y la correcta captura de información desde las fuentes seleccionadas.

---

### ✅ Logros alcanzados

* Se completaron las historias **HU01 (Acceso web y accesibilidad)** y **HU02 (Comparación de fuentes y filtros)**.
* Se implementó un sistema inicial de autenticación y un panel básico de visualización de fuentes.
* Se configuraron los entornos de desarrollo y pruebas, estableciendo un flujo de trabajo común entre los tres integrantes.
* Se realizó una **demo con 10 usuarios beta**, logrando un **80 % de satisfacción** y sin bugs críticos.

---

### ⚠️ Dificultades encontradas

* **Web Scraping:** se detectó que algunos campos importantes, como la **fecha de publicación**, no se estaban capturando correctamente. Esto obligó a refactorizar parte del código y actualizar las reglas de extracción.
* **Monitoreo de procesos:** la ausencia de métricas de ejecución dificultó la detección de errores en tiempo real.
* **Integración CI/CD:** hubo retrasos en la configuración de los pipelines automáticos por falta de sincronización en los entornos locales.

---

### 💡 Aprendizajes clave

* La definición temprana de campos y metadatos es crítica para la calidad del scraping.
* La comunicación constante entre los miembros (vía issues y commits) mejora la trazabilidad y reduce errores.
* La automatización debe planificarse desde el inicio, evitando configuraciones manuales que luego generan inconsistencias.

---

### 🔜 Próximos pasos

* Completar la integración de CI/CD para los despliegues automáticos.
* Añadir un sistema básico de monitoreo de scraping (tiempos, errores, logs).
* Preparar el entorno para el desarrollo del módulo de **resúmenes automáticos**.

---

### 🧠 Reflexión final

El primer sprint representó la **base técnica y organizacional del proyecto**. Aunque se encontraron fallos en la etapa de scraping y monitoreo, el equipo logró entregar un MVP estable. La colaboración entre Matías (backend), César (frontend) y Javier (testing) permitió alinear esfuerzos hacia un flujo de trabajo ágil y colaborativo.
