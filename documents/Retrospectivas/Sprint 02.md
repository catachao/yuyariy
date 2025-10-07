## 🟦 **Informe de Reflexión – Sprint 02 (16/Sep – 29/Sep)**

### 🧭 Contexto general

El segundo sprint se enfocó en mejorar la experiencia del usuario mediante la implementación del **sistema de resúmenes** y las **preguntas de reflexión crítica**, además de fortalecer los aspectos técnicos de monitoreo e integración continua.

---

### ✅ Logros alcanzados

- Se implementaron las historias **HU05 (Resúmenes multinivel)** y **HU06 (Preguntas de reflexión crítica)**.
- Se realizaron pruebas A/B con 50 noticias, alcanzando una **coherencia del 90 %** y **tiempos de generación menores a 3 s**.
- Se completó la configuración de **CI/CD** con despliegues automatizados en entornos de prueba.
- Se avanzó en el diseño del esquema de **base de datos en MongoDB**, estableciendo las colecciones principales.

---

### ⚠️ Dificultades encontradas

- **Diseño de la base de datos:** la definición del esquema en MongoDB resultó más compleja de lo previsto, especialmente por la naturaleza variable de las noticias y sus metadatos.
- **Integración de monitoreo:** configurar alertas y métricas en tiempo real presentó desafíos técnicos.
- **Arquitectura serverless futura:** se identificaron retos a mediano plazo para migrar a AWS (S3, Lambda, API Gateway) debido a los cambios en estructura y gestión de recursos.

---

### 💡 Aprendizajes clave

- La gestión de datos no estructurados requiere un diseño flexible y bien documentado.
- La integración de CI/CD permitió reducir errores humanos y mejorar la eficiencia en el despliegue.
- Planificar una futura migración a arquitectura **serverless** demanda entender sus implicancias en costos, rendimiento y mantenimiento.

---

### 🔜 Próximos pasos

- Optimizar la estructura de la base de datos y establecer índices para mejorar rendimiento.
- Iniciar el diseño del módulo de detección de sesgo político.
- Evaluar los requerimientos técnicos para la futura adopción de arquitectura serverless.

---

### 🧠 Reflexión final

El segundo sprint consolidó la **madurez técnica del proyecto**. El equipo superó los retos de integración continua y gestión de datos, mostrando una curva de aprendizaje sólida. Los resultados del A/B testing validaron la funcionalidad de resúmenes, y se establecieron bases para escalar el proyecto hacia una arquitectura más moderna y sostenible.
