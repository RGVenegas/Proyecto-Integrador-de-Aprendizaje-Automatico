# Informe Técnico: Proyecto Integrador de Aprendizaje Automático
## Visión Artificial para Seguridad, Logística y Operaciones Inteligentes

---

### Control de Versiones del Documento
| Versión | Fecha | Descripción | Autor |
| :--- | :--- | :--- | :--- |
| 1.0.0 | 2026-06-04 | Hito 1: Definición del Problema (EPP) | Grupo de Proyecto |

---

# Hito 1: Definición del Problema
## Proyecto 1: Monitoreo de Elementos de Protección Personal (EPP)

### 1.1 Contexto Organizacional
El proyecto se enmarca dentro de la **Terminal Portuaria del Pacífico (TPP)**, una de las instalaciones de logística y transporte de carga más grandes de la región. La TPP opera las 24 horas del día, los 7 días de la semana, gestionando el flujo constante de contenedores, camiones, grúas pórtico y personal en tierra. 

Dentro de esta infraestructura crítica, conviven múltiples riesgos físicos:
* Operaciones de izaje de carga pesada.
* Tránsito continuo de maquinaria pesada y vehículos de transporte interno (reach stackers, tractocamiones).
* Condiciones climáticas variables (alta radiación solar, humedad, viento y turnos nocturnos).

Para mitigar estos riesgos, la organización cuenta con una estricta política de seguridad alineada con normativas internacionales (como las directrices de la OSHA y normativas locales de seguridad laboral). Esta política establece el uso obligatorio de **Elementos de Protección Personal (EPP)** básicos para todo el personal operativo y visitantes en las zonas de patio de contenedores y muelles:
1. **Casco de seguridad**: Protección contra impactos por caída de objetos o colisiones.
2. **Chaleco reflectante**: Garantiza la visibilidad de los operarios ante los conductores de maquinaria pesada.
3. **Lentes de seguridad**: Protección ocular frente a partículas en suspensión y radiación solar.
4. **Guantes de protección**: Cuidado de extremidades superiores en tareas de manipulación física y trincado.

El departamento de **Prevención de Riesgos y Seguridad Ocupacional** de la TPP es el encargado de supervisar el cumplimiento de estas normas. Sin embargo, con un área operativa de más de 50 hectáreas y más de 300 trabajadores en turnos rotativos, la supervisión directa y manual es insuficiente e ineficiente.

---

### 1.2 Problema a Resolver
Actualmente, el monitoreo del uso de EPP en la TPP se realiza mediante inspecciones físicas aleatorias e intermitentes por parte de los prevencionistas de riesgos, y a través de revisiones reactivas de las grabaciones de las cámaras de seguridad cuando ya ha ocurrido un incidente.

Esta metodología presenta los siguientes problemas críticos:
1. **Inspección manual ineficiente y propensa al error humano**: Es físicamente imposible que el personal de seguridad controle visualmente a todos los operadores en tiempo real. Los prevencionistas no pueden estar en todos los frentes de trabajo simultáneamente.
2. **Falta de proactividad**: Las infracciones solo se detectan cuando un inspector está presente o tras un accidente laboral, lo que impide prevenir el riesgo en el momento en que ocurre.
3. **Pérdida de datos e imposibilidad de análisis de tendencias**: Al no registrar sistemáticamente los incumplimientos diarios (quién, cuándo y dónde no se usó el EPP), la empresa no puede tomar acciones correctivas focalizadas, charlas de seguridad basadas en datos o rediseño de zonas de tránsito.
4. **Costos operacionales y legales**: La falta de adherencia al uso de EPP incrementa la tasa de siniestralidad, lo que se traduce en paralizaciones operativas por orden de la autoridad del trabajo, multas financieras significativas y primas de seguros de accidentes laborales más elevadas.

El desafío principal consiste en **automatizar la detección visual de los cuatro EPP críticos (casco, chaleco, lentes y guantes)** en los flujos de video de las cámaras de circuito cerrado (CCTV) existentes en la terminal, identificando instantáneamente cualquier infracción y alertando a los supervisores de forma proactiva.

---

### 1.3 Impacto Esperado
La implementación del sistema de visión artificial generará impactos positivos en múltiples áreas de la organización:

* **Impacto en Seguridad y Salud (Principal)**:
  * Reducción proyectada de hasta un **85% en infracciones por falta de EPP** gracias a la retroalimentación oportuna.
  * Disminución directa de lesiones graves por accidentes que involucren golpes en la cabeza, atropellos por baja visibilidad, proyecciones oculares o cortes en manos.
  * Fomento de una cultura de autocuidado activa apoyada por tecnología no invasiva.

* **Impacto Operativo**:
  * Transición de un esquema de supervisión reactivo a uno **preventivo en tiempo real**.
  * Optimización del tiempo del equipo de Prevención de Riesgos, permitiéndoles concentrarse en áreas críticas y análisis de procesos en lugar de patrullas rutinarias de control de vestimenta.
  * Generación de mapas de calor de infracciones para identificar qué áreas del puerto presentan mayor incumplimiento de normas.

* **Impacto Económico**:
  * Reducción de costos por multas gubernamentales debido al incumplimiento de normativas de higiene y seguridad laboral.
  * Disminución del tiempo de inactividad de las operaciones (downtime) derivado de la investigación de accidentes graves.
  * Potencial reducción de las primas de seguro por siniestralidad laboral al demostrar un sistema activo de mitigación de riesgos con base tecnológica.

* **Impacto Reputacional y de Innovación**:
  * Posicionamiento de la Terminal Portuaria del Pacífico como un puerto inteligente (*Smart Port*) líder en la adopción de tecnologías de Inteligencia Artificial para el bienestar de sus trabajadores.

---

### 1.4 Objetivo General
Diseñar, implementar y evaluar un sistema integral de visión artificial y aprendizaje automático para el monitoreo automatizado del uso de Elementos de Protección Personal (casco, chaleco reflectante, lentes de seguridad y guantes) en tiempo real en la Terminal Portuaria del Pacífico, con el propósito de optimizar la fiscalización de seguridad industrial, prevenir accidentes y garantizar el cumplimiento regulatorio de la organización.

---

### 1.5 Objetivos Específicos
Para alcanzar el objetivo general, se proponen los siguientes objetivos específicos:

1. **Desarrollar y comparar experimentalmente dos arquitecturas de aprendizaje profundo** para la detección y clasificación multiclase de EPP (casco, chaleco, lentes y guantes) en imágenes y video: una basada en redes neuronales convolucionales (CNN, como YOLO o Faster R-CNN) y otra basada en modelos de atención (Vision Transformers, como ViT o Swin Transformer), analizando métricas de precisión (Precision, Recall, F1-Score) y costos computacionales (tiempo de inferencia, frames por segundo).
2. **Implementar una arquitectura de software robusta e integrada** que conecte un servicio de inferencia de IA con un Backend API para la gestión de solicitudes, una Base de Datos relacional para registrar de manera persistente las detecciones e incidentes con marca de tiempo, y un Frontend interactivo que permita a los supervisores de seguridad subir medios, consultar el historial de infracciones y visualizar reportes analíticos.
3. **Diseñar y ejecutar un plan de evaluación operacional, económica y ética** del sistema, detallando el análisis de retorno de inversión (ROI) frente a multas y accidentes prevenidos, y estableciendo directrices claras de privacidad y confidencialidad para asegurar que el monitoreo visual respete los derechos fundamentales de los trabajadores.
