# Informe Técnico: Proyecto Integrador de Aprendizaje Automático
## Visión Artificial para Seguridad y Prevención de Riesgos en la Construcción

---

### Control de Versiones del Documento
| Versión | Fecha | Descripción | Autor |
| :--- | :--- | :--- | :--- |
| 1.0.0 | 2026-06-04 | Hito 1: Definición del Problema (EPP - Construcción) | Grupo de Proyecto |

---

# Hito 1: Definición del Problema
## Proyecto 1: Monitoreo de Elementos de Protección Personal (EPP)

### 1.1 Contexto Organizacional
El proyecto se enmarca dentro de una constructora, específicamente en el desarrollo de una obra de edificación y desarrollo urbano a gran escala. La obra opera durante jornadas diurnas y turnos especiales extendidos, gestionando el movimiento constante de materiales pesados, maquinaria de excavación, grúas torre y una fuerza laboral dinámica en el terreno. 

Dentro de este entorno laboral complejo, conviven múltiples riesgos físicos y peligros:
* Caída de objetos desde altura (herramientas, escombros o materiales de construcción).
* Operaciones de izaje de carga pesada mediante grúas torre y camiones pluma.
* Tránsito continuo de maquinaria pesada de movimiento de tierra (retroexcavadoras, camiones tolva, mezcladores de concreto) en zonas compartidas con personal de a pie.
* Condiciones climáticas variables y riesgos eléctricos asociados a la instalación de faenas y construcción en altura.

Para mitigar estos riesgos, la organización cuenta con una estricta política de seguridad alineada con normativas internacionales (como las directrices de la OSHA y normativas locales de seguridad laboral). Esta política establece el uso obligatorio de **Elementos de Protección Personal (EPP)** básicos para todo el personal de obra, subcontratistas y visitantes dentro del perímetro de faena:
1. **Casco de seguridad**: Protección contra impactos por caída de objetos o colisiones.
2. **Chaleco reflectante**: Garantiza la visibilidad de los operarios ante los operadores de maquinaria pesada.
3. **Lentes de seguridad**: Protección ocular frente a partículas en suspensión, polvo de concreto y radiación solar.
4. **Guantes de protección**: Cuidado de extremidades superiores en tareas de manipulación manual de materiales (fierro, madera, cemento) y herramientas.

El departamento de **Prevención de Riesgos y Seguridad Ocupacional** de la constructora es el encargado de supervisar el cumplimiento de estas normas. Sin embargo, con una obra vertical y horizontal que abarca múltiples frentes de trabajo simultáneos y más de 400 trabajadores, la supervisión directa y manual es insuficiente e ineficiente.

---

### 1.2 Problema a Resolver
Actualmente, el monitoreo del uso de EPP en la obra se realiza mediante inspecciones físicas aleatorias e intermitentes por parte de los prevencionistas de riesgos, y a través de revisiones reactivas de las grabaciones de las cámaras de seguridad cuando ya ha ocurrido un incidente.

Esta metodología presenta los siguientes problemas críticos:
1. **Inspección manual ineficiente y propensa al error humano**: Es físicamente imposible que los prevencionistas controlen visualmente a todos los trabajadores en frentes de altura, excavaciones y áreas comunes en tiempo real de manera simultánea.
2. **Falta de proactividad**: Las infracciones solo se detectan si un prevencionista coincide temporalmente en la misma zona de riesgo o tras un accidente laboral, imposibilitando una acción preventiva inmediata.
3. **Pérdida de datos e imposibilidad de análisis de tendencias**: Al no registrar sistemáticamente los incumplimientos diarios (quién, cuándo y en qué nivel de la obra no se usó el EPP), la empresa no puede tomar acciones correctivas basadas en datos, como charlas focalizadas o redistribución de prevencionistas.
4. **Costos operacionales y legales**: Un accidente grave en construcción provoca la clausura de la obra por orden de la Dirección del Trabajo, con los consecuentes retrasos en la entrega, multas de gran escala y el encarecimiento de la prima de seguro por siniestralidad.

El desafío principal consiste en **automatizar la detección de personas que no cuentan con sus Elementos de Protección Personal obligatorios (ausencia de casco, chaleco, lentes o guantes)** en los flujos de video de las cámaras de circuito cerrado (CCTV) instaladas en los puntos críticos de la faena (accesos, grúas, losas activas), identificando instantáneamente cualquier infracción de seguridad y alertando a los supervisores de forma proactiva.

---

### 1.3 Impacto Esperado
La implementación del sistema de visión artificial generará impactos positivos en múltiples áreas de la organización:

* **Impacto en Seguridad y Salud (Principal)**:
  * Reducción proyectada de hasta un **85% en infracciones por falta de EPP** gracias a la retroalimentación oportuna.
  * Disminución directa de lesiones graves por accidentes que involucren golpes en la cabeza, atropellos por baja visibilidad, proyecciones oculares o cortes en manos.
  * Fomento de una cultura de autocuidado activa apoyada por tecnología no invasiva.

* **Impacto Operativo**:
  * Transición de un esquema de supervisión reactivo a uno **preventivo en tiempo real**.
  * Optimización del tiempo del equipo de Prevención de Riesgos, permitiéndoles concentrarse en áreas de alto peligro (trabajos en altura, izaje) en lugar de patrullas rutinarias de control visual de vestimenta.
  * Generación de mapas de calor de infracciones para identificar qué frentes o niveles de la obra presentan mayor incumplimiento de normas.

* **Impacto Económico**:
  * Reducción de costos por multas gubernamentales debido al incumplimiento de normativas de higiene y seguridad laboral.
  * Disminución del tiempo de inactividad de las operaciones (downtime) derivado de la investigación de accidentes graves.
  * Potencial reducción de las primas de seguro por siniestralidad laboral al demostrar un sistema activo de mitigación de riesgos con base tecnológica.

* **Impacto Reputacional y de Innovación**:
  * Posicionamiento de la constructora como una empresa pionera en construcción inteligente (*Smart Construction*) y líder en la adopción de tecnologías de Inteligencia Artificial para el bienestar y la seguridad laboral de sus trabajadores.

---

### 1.4 Objetivo General
Diseñar, implementar y evaluar un sistema integral de visión artificial y aprendizaje automático centrado en la **detección y alerta temprana de personas sin Elementos de Protección Personal** (casco, chaleco reflectante, lentes de seguridad y guantes) en tiempo real en la obra de construcción, con el propósito de optimizar la fiscalización preventiva, mitigar el riesgo de accidentes y garantizar el cumplimiento normativo de la organización.

---

### 1.5 Objetivos Específicos
Para alcanzar el objetivo general, se proponen los siguientes objetivos específicos:

1. **Desarrollar y comparar experimentalmente dos arquitecturas de aprendizaje profundo** para la detección y clasificación multiclase de infracciones de seguridad (identificando la ausencia de casco, chaleco, lentes o guantes en los trabajadores) en imágenes y video: una basada en redes neuronales convolucionales (CNN, como YOLO o Faster R-CNN) y otra basada en modelos de atención (Vision Transformers, como ViT o Swin Transformer), analizando métricas de precisión (Precision, Recall, F1-Score) y costos computacionales (tiempo de inferencia, frames por segundo).
2. **Implementar una arquitectura de software robusta e integrada** que conecte un servicio de inferencia de IA con un Backend API para la gestión de solicitudes, una Base de Datos relacional para registrar de manera persistente las infracciones detectadas (trabajadores desprotegidos) e incidentes con marca de tiempo, y un Frontend interactivo que permita a los supervisores de seguridad subir medios, consultar el historial de infracciones y visualizar reportes analíticos.
3. **Diseñar y ejecutar un plan de evaluación operacional, económica y ética** del sistema, detallando el análisis de retorno de inversión (ROI) frente a multas y accidentes prevenidos, y estableciendo directrices claras de privacidad y confidencialidad para asegurar que el monitoreo visual respete los derechos fundamentales de los trabajadores.
