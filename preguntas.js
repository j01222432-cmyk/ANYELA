const preguntas = [
  {
    "pregunta": "El tamizaje de cáncer de mama se realiza dentro del grupo etario de 40 a 69 años, a través de….",
    "opciones": {
      "A": "mamografía bilateral cada año y examen clínico de mamas semestral.",
      "B": "mamografía bilateral cada dos años y examen clínico de mamas anual.",
      "C": "radiografía bilateral cada año y examen clínico cada tres meses.",
      "D": "autoexamen de mamas cada tres meses y el examen clínico cada seis meses."
    },
    "id": 1,
    "respuesta": "B",
    "tema": "Cuidado Integral - Prevención y control del Cáncer",
    "origen": "examen",
    "explicacion": "Según la norma técnica de prevención y control de cáncer de mama en el Perú, el tamizaje en mujeres de 40 a 69 años se realiza con mamografía bilateral cada 2 años complementada con examen clínico de mamas anual. La mamografía anual no se justifica por el balance riesgo-beneficio (radiación acumulada vs detección), y el autoexamen no es método de tamizaje sino de concientización."
  },
  {
    "pregunta": "En un establecimiento de salud que tiene a su cargo una población asignada, realizará acciones donde atenderá como mínimo 06 horas diarias la atención integral de salud de acuerdo a etapas de vida. Tiene asignado médico, enfermera, obstetra, personal técnico de enfermería. ¿A qué categoría corresponde?",
    "opciones": {
      "A": "I-3",
      "B": "I-2",
      "C": "II-1",
      "D": "I-4"
    },
    "id": 2,
    "respuesta": "B",
    "tema": "Gestión - Clasificación de establecimientos",
    "origen": "examen",
    "explicacion": "La categoría I-2 corresponde a un puesto de salud con población asignada que atiende mínimo 6 horas diarias, con médico, enfermera, obstetra y técnico de enfermería. Se diferencia del I-3 (centro de salud con 12 horas, laboratorio y farmacia) y del I-4 que cuenta con internamiento."
  },
  {
    "pregunta": "El instrumento de gestión que comprende la programación de actividades operativas e inversiones en todas las dependencias del ministerio con sus respectivas metas físicas y financieras es el:",
    "opciones": {
      "A": "PEI",
      "B": "POI",
      "C": "PDLC",
      "D": "PESEM"
    },
    "id": 3,
    "respuesta": "B",
    "tema": "Gestión - Planificación y Presupuesto",
    "origen": "examen",
    "explicacion": "El POI (Plan Operativo Institucional) es el instrumento de gestión que programa actividades operativas e inversiones con metas físicas y financieras a corto plazo (1 año). El PEI es estratégico a mediano plazo, el PESEM es sectorial multianual y el PDLC es el Plan de Desarrollo Local Concertado."
  },
  {
    "pregunta": "Una madre de familia acude al EESS con su menor de 15 días de nacido, por presentar tos intensa, dolor de garganta hace 8 días, se verifica que en su gestación no fue vacunada de Tdap. Se toma muestra por sospecha de tos ferina. Después de una semana se confirma caso; en la visita domiciliaria se observa que su bebé tiene tos persistente, asi como el personal que atendió presenta síntomas. ¿A qué corresponde esta situación?",
    "opciones": {
      "A": "Brote",
      "B": "Desastre",
      "C": "Emergencia sanitaria",
      "D": "Evento"
    },
    "id": 4,
    "respuesta": "A",
    "tema": "Salud Pública - Brotes y epidemias",
    "origen": "examen",
    "explicacion": "Es un brote porque se presentan más casos de los esperados en un área y tiempo determinados: la madre confirmada con tos ferina, el bebé con tos persistente y el personal de salud con síntomas, todos vinculados epidemiológicamente. No es desastre ni emergencia sanitaria porque se trata de una enfermedad transmisible con cadena de contagio identificable."
  },
  {
    "pregunta": "Paciente testigo de Jehová, de 60 años, con diagnosticado de leucemia mieloide crónica, se descompensa y llega al servicio de emergencia, presentando valores hematológicos alterados, entre ellos plaquetopenia severa, Hb. 5 mg/dL. El paciente se niega a recibir hemoderivados. La decisión del paciente aplica como la máxima expresión del principio de:",
    "opciones": {
      "A": "No maleficencia",
      "B": "Autonomía",
      "C": "Beneficencia",
      "D": "Justicia"
    },
    "id": 5,
    "respuesta": "B",
    "tema": "Ética - Bioética",
    "origen": "examen",
    "explicacion": "El principio de autonomía reconoce el derecho del paciente competente a tomar decisiones sobre su propio cuerpo y tratamiento, incluso si esa decisión implica riesgo vital. El paciente testigo de Jehová ejerce su autonomía al rechazar hemoderivados por convicción religiosa, y el equipo de salud debe respetar esa decisión."
  },
  {
    "pregunta": "Paciente procedente de zona minera, consume agua de rio contaminado; que a la evaluación no presenta ningún manifestación clínica de intoxicación por metales pesados y metaloides. ¿A qué definición de caso corresponde?",
    "opciones": {
      "A": "Confirmado",
      "B": "Sospechoso",
      "C": "Descartado",
      "D": "Probable"
    },
    "id": 6,
    "respuesta": "B",
    "tema": "Salud Pública - Exposición a metales pesados",
    "origen": "examen",
    "explicacion": "Un caso sospechoso de intoxicación por metales pesados es aquel con antecedente de exposición (zona minera, agua contaminada) pero sin manifestaciones clínicas. Si presentara síntomas sería caso probable, y si tuviera confirmación por laboratorio sería caso confirmado."
  },
  {
    "pregunta": "Una madre de familia acude a un establecimiento de salud I-2 con su niño de 6 meses de edad, refiere que desde hace 15 días presenta tos persistente, fiebre, a la evaluación se evidencia rubicundo, dificultad para respirar y lactar; en cartilla de vacunación se encuentra dosis incompleta de vacuna pentavalente. ¿Cuál es la medida de bioseguridad prioritaria para el personal de salud en la atención ambulatoria?",
    "opciones": {
      "A": "Calzado de guantes",
      "B": "Uso de mascarilla",
      "C": "Vacunación inmediata",
      "D": "Higienización de manos"
    },
    "id": 7,
    "respuesta": "B",
    "tema": "Salud Pública - Bioseguridad",
    "origen": "examen",
    "explicacion": "Ante un niño con tos persistente de 15 días, fiebre y dificultad respiratoria (sospecha de tos ferina u otra infección respiratoria), la medida de bioseguridad prioritaria para el personal es el uso de mascarilla, ya que la transmisión es por gotitas respiratorias. La mascarilla protege directamente al personal de la vía de contagio principal."
  },
  {
    "pregunta": "Niño de 6 años, es llevado al puesto de salud 1-I por presentar fiebre, con erupción maculo papular no vesicular en cara y tronco, el personal sospecha de sarampión. Dentro del sistema de vigilancia epidemiológica. ¿Cuál es la conducta a seguir?",
    "opciones": {
      "A": "Toma de muestra en el mismo puesto de salud y seguimiento a los contactos del niño",
      "B": "Notificación inmediata y coordinación con el establecimiento con laboratorio mas cercano para la toma de",
      "C": "Referir al niño al establecimiento de salud con mayor capacidad resolutiva para toma de muestra",
      "D": "Monitoreo del paciente y barrido con vacunación SPR a la comunidad"
    },
    "id": 8,
    "respuesta": "B",
    "tema": "Salud Pública - Vigilancia epidemiológica",
    "origen": "examen",
    "explicacion": "Ante un caso sospechoso de sarampión, la conducta es notificación inmediata (dentro de las 24 horas) al nivel superior y coordinar con el establecimiento con laboratorio más cercano para la toma de muestra de sangre e hisopado nasofaríngeo. Un puesto I-1 no tiene capacidad de laboratorio para tomar muestras."
  },
  {
    "pregunta": "Adolescente mujer de 15 años acude al establecimiento de salud de categoría I-2 para curación de herida cortante en mano, aparte de la atención del motivo de consulta. ¿Qué atenciones adicionales le ofertarías como parte de su cuidado integral?",
    "opciones": {
      "A": "Identificación de estrés/ansiedad, prevención de enfermedades crónicas, evaluación nutricional, suplementación",
      "B": "Prevención de caídas, desarrollo sexual, estilos de vida saludable, elaboración del plan de vida",
      "C": "Tamizaje de violencia familiar y conductas de riesgo, evaluación nutricional, tamizaje de anemia y parásitos",
      "D": "Tamizaje de cáncer de cérvix, evaluación odontológica, tamizaje de violencia familiar, inmunizaciones"
    },
    "id": 9,
    "respuesta": "C",
    "tema": "Cuidado Integral - Paquete del adolescente",
    "origen": "examen",
    "explicacion": "El paquete de atención integral del adolescente incluye tamizaje de violencia familiar y conductas de riesgo, evaluación nutricional, tamizaje de anemia y parásitos. El tamizaje de cáncer de cérvix no corresponde a esta edad (se inicia a los 25-30 años), y la prevención de caídas es propia del adulto mayor."
  },
  {
    "pregunta": "En el centro de salud de la Merced, en una reunión entre representantes de la DIRESA, red de salud y personal de salud, junto a las autoridades, agentes y autoridades comunales se va implementar la metodología del DIS (diálogo intercultural en salud). ¿Cuál es el primer momento en su implementación?",
    "opciones": {
      "A": "Análisis sociocultural e identificación de prioridades de salud",
      "B": "Planificación, acuerdos y compromisos",
      "C": "Programación de actividades",
      "D": "Reconocimiento de actores, difusión y preparación del diálogo"
    },
    "id": 10,
    "respuesta": "D",
    "tema": "Ética - Interculturalidad",
    "origen": "examen",
    "explicacion": "La metodología DIS (Diálogo Intercultural en Salud) tiene como primer momento el reconocimiento de actores, difusión y preparación del diálogo. Antes de analizar o planificar, es necesario identificar quiénes participarán, difundir la propuesta y preparar las condiciones para un diálogo respetuoso entre el sistema de salud y la comunidad."
  },
  {
    "pregunta": "¿En qué paquete de atención integral de salud del adolescente se realiza la identificación de riesgos psicológicos y la evaluación de desarrollo de Tanner?",
    "opciones": {
      "A": "Paquete completo de atención integral",
      "B": "Prestaciones colectivas que fortalecen factores protectores.",
      "C": "Paquete especializado de atención integral",
      "D": "Paquete básico de atención integral"
    },
    "id": 11,
    "respuesta": "D",
    "tema": "Cuidado Integral - Paquete del adolescente",
    "origen": "examen",
    "explicacion": "El paquete básico de atención integral del adolescente incluye la identificación de riesgos psicológicos y la evaluación del desarrollo sexual según los estadios de Tanner. Es la atención mínima que todo adolescente debe recibir en el primer contacto con el establecimiento de salud."
  },
  {
    "pregunta": "El paciente hipertenso con tratamiento instaurado debe recibir controles de la PA cada mes durante ……., si en el 75% de estos controles los valores están dentro del rango objetivo, sus controles se realizarán cada...",
    "opciones": {
      "A": "6 meses / 3 meses.",
      "B": "6 meses / 2 meses.",
      "C": "5 meses / 2 meses.",
      "D": "1 año / 3 meses."
    },
    "id": 12,
    "respuesta": "A",
    "tema": "Cuidado Integral - Enfermedades no transmisibles",
    "origen": "examen",
    "explicacion": "El paciente hipertenso con tratamiento debe controlarse mensualmente durante 6 meses. Si en el 75% de esos controles la PA está en rango objetivo, se espacian los controles a cada 3 meses. Este esquema permite verificar la adherencia y eficacia del tratamiento antes de reducir la frecuencia de seguimiento."
  },
  {
    "pregunta": "¿Cuáles son los productos finales del ASIS local, que se validan con los actores sociales en lo que llamamos el proceso de concentración?",
    "opciones": {
      "A": "Las líneas de acción y los territorios vulnerables priorizados",
      "B": "Análisis integrado y la lista de líneas de acción",
      "C": "Los problemas con impacto sanitario priorizado y la lista de líneas de acción",
      "D": "Análisis integrado y los territorios vulnerables priorizados"
    },
    "id": 13,
    "respuesta": "C",
    "tema": "Salud Pública - ASIS",
    "origen": "examen",
    "explicacion": "Los productos finales del ASIS local que se validan con los actores sociales en el proceso de concentración son: los problemas con impacto sanitario priorizado y la lista de líneas de acción. Estos productos orientan la planificación local en salud y permiten focalizar las intervenciones en los problemas más relevantes del territorio."
  },
  {
    "pregunta": "Es el conjunto de referencias compartidas entre todos, como resultado de una historia y de significados comunes que se dan a las situaciones y a las relaciones mediante el lenguaje cotidiano. Se forja y modifica en las relaciones de cotidianeidad de la organización. ¿A qué corresponde esta definición?",
    "opciones": {
      "A": "Cultura organizacional",
      "B": "Función institucional",
      "C": "Clima institucional",
      "D": "Ambiente laboral"
    },
    "id": 14,
    "respuesta": "A",
    "tema": "Gestión - Clima y cultura organizacional",
    "origen": "examen",
    "explicacion": "La cultura organizacional es el conjunto de referencias, significados, valores y creencias compartidos que se construyen históricamente y se transmiten en la cotidianeidad de la organización. Se diferencia del clima organizacional, que es la percepción momentánea del ambiente laboral."
  },
  {
    "pregunta": "Según el estudio de contactos. ¿Cuántos controles como mínimo deben recibir los contactos de casos de TB resistente?",
    "opciones": {
      "A": "6",
      "B": "2",
      "C": "3",
      "D": "4"
    },
    "id": 15,
    "respuesta": "A",
    "tema": "Cuidado Integral - Tuberculosis",
    "origen": "examen",
    "explicacion": "Según la norma técnica de TB, los contactos de casos de TB resistente deben recibir como mínimo 6 controles durante el seguimiento. Esto es más riguroso que en TB sensible debido al mayor riesgo de desarrollar enfermedad resistente, que tiene peor pronóstico y tratamiento más complejo."
  },
  {
    "pregunta": "En un establecimiento de salud de Miguel Grau, se han reunido todos los profesionales de salud y han desarrollado su análisis FODA. Dentro de su análisis la mejora al acceso digital y mayor conectividad en esta zona rural se considera una:",
    "opciones": {
      "A": "Amenaza",
      "B": "Debilidad",
      "C": "Oportunidad",
      "D": "Fortaleza"
    },
    "id": 16,
    "respuesta": "C",
    "tema": "Gestión - Planeamiento estratégico",
    "origen": "examen",
    "explicacion": "En el análisis FODA, la mejora al acceso digital y mayor conectividad es una oportunidad porque es un factor externo positivo que puede aprovecharse. Las oportunidades y amenazas son externas a la organización, mientras que las fortalezas y debilidades son internas."
  },
  {
    "pregunta": "Un establecimiento de salud del primer nivel de atención con capacidad resolutiva para satisfacer las necesidades de salud de la persona, familia y comunidad, en régimen ambulatorio en atención de 12 horas. Cuenta con población asignada, con dos o más médicos cirujanos, odontólogo, enfermera, obstetra; personal técnico de enfermería, laboratorio y farmacia. ¿A qué categoría pertenece?",
    "opciones": {
      "A": "I-1",
      "B": "I-4",
      "C": "I-3",
      "D": "I-2"
    },
    "id": 17,
    "respuesta": "C",
    "tema": "Gestión - Clasificación de establecimientos",
    "origen": "examen",
    "explicacion": "La categoría I-3 es un centro de salud del primer nivel con atención de 12 horas, población asignada, dos o más médicos cirujanos, odontólogo, enfermera, obstetra, técnico de enfermería, laboratorio y farmacia. La clave es la atención de 12 horas y contar con laboratorio y farmacia, que lo diferencia del I-2."
  },
  {
    "pregunta": "Todo servidor público debe ...… y ...… los bienes del Estado, debiendo utilizar los que le fueran asignados para el desempeño de sus funciones de manera racional, evitando su abuso, derroche o desaprovechamiento, sin emplear o permitir que otros empleen los bienes del Estado para fines particulares o propósitos que no sean aquellos para los cuales hubieran sido específicamente destinados.",
    "opciones": {
      "A": "ejecutar / depositar",
      "B": "proteger / conservar",
      "C": "atesorar / utilizar",
      "D": "usar / cuidar"
    },
    "id": 18,
    "respuesta": "B",
    "tema": "Ética - Función pública",
    "origen": "examen",
    "explicacion": "Según la Ley del Código de Ética de la Función Pública (Ley 27815), todo servidor público debe proteger y conservar los bienes del Estado, usándolos racionalmente para los fines asignados. Proteger implica resguardarlos de daño, y conservar implica mantenerlos en buen estado."
  },
  {
    "pregunta": "¿Qué tipo de prevención es, el conjunto de acciones dirigidas a reducir el progreso y las complicaciones de una enfermedad ya establecida en la persona, mediante la aplicación de medidas orientadas a reducir secuelas y discapacidades, minimizar el sufrimiento y facilitar la adaptación de los pacientes a su entorno o promover su reincorporación a sus actividades rutinarias?",
    "opciones": {
      "A": "Primordial",
      "B": "Secundaria",
      "C": "Primaria",
      "D": "Terciaria"
    },
    "id": 19,
    "respuesta": "D",
    "tema": "Salud Pública - Niveles de prevención",
    "origen": "examen",
    "explicacion": "La prevención terciaria se aplica cuando la enfermedad ya está establecida y busca reducir secuelas, discapacidades y complicaciones, facilitar la adaptación y promover la reinserción. La primaria evita la enfermedad, la secundaria la detecta precozmente, y la primordial actúa sobre los determinantes."
  },
  {
    "pregunta": "El desarrollo del sistema de información en salud debe contar con un conjunto de atributos. ¿Cuál es el atributo que identifica a la persona e integra a la familia?",
    "opciones": {
      "A": "Uso de la tecnología disponible",
      "B": "Uso de estándares a partir de la identificación de usuario",
      "C": "Seguridad y confidencialidad de la información",
      "D": "Integral"
    },
    "id": 20,
    "respuesta": "B",
    "tema": "Salud Comunitaria - Sistemas de información",
    "origen": "examen",
    "explicacion": "El uso de estándares a partir de la identificación de usuario (DNI, CUI) es el atributo que permite identificar a la persona de manera única e integrarla a su familia dentro del sistema de información en salud. Esto facilita el seguimiento longitudinal y la atención integral por curso de vida."
  },
  {
    "pregunta": "La fase inicial del periodo patogénico que transcurre entre el momento del estímulo y la aparición de síntomas y signos en las enfermedades transmisibles. ¿A qué período corresponde?",
    "opciones": {
      "A": "Incubación",
      "B": "Ventaja",
      "C": "Latencia",
      "D": "Inducción"
    },
    "id": 21,
    "respuesta": "A",
    "tema": "Salud Pública - Historia natural de la enfermedad",
    "origen": "examen",
    "explicacion": "El periodo de incubación es la fase inicial del periodo patogénico en enfermedades transmisibles, que va desde el ingreso del agente al huésped hasta la aparición de síntomas y signos. En enfermedades no transmisibles, este periodo equivalente se denomina periodo de latencia."
  },
  {
    "pregunta": "En un establecimiento de salud se está realizando un spot radial en idioma quechua para ser difundida en su radio local. Ésto es un ejemplo de medio de expresión que garantiza la...",
    "opciones": {
      "A": "creatividad.",
      "B": "responsabilidad étnica.",
      "C": "diversidad cultural.",
      "D": "política radial."
    },
    "id": 22,
    "respuesta": "C",
    "tema": "Ética - Interculturalidad",
    "origen": "examen",
    "explicacion": "Difundir un spot radial en idioma quechua es un ejemplo de garantía de la diversidad cultural, ya que se reconoce y respeta la lengua originaria de la población, facilitando el acceso a la información de salud en su propio idioma. Esto forma parte de la adecuación intercultural de los servicios."
  },
  {
    "pregunta": "Niña de 8 meses es llevada a su control de niño sano a un establecimiento de salud de la sierra central, madre refiere que no tomó el suplemento preventivo de hierro desde los 7 meses, se le hace dosaje de hemoglobina con un valor de 11.5 g/dL (con factor de corrección). ¿Cuál es la conducta a seguir respecto a su suplementación?",
    "opciones": {
      "A": "Continuar con la dosis preventiva hasta los 6 meses, previa consejería",
      "B": "Iniciar un nuevo esquema de suplementación preventiva y dar consejería",
      "C": "Iniciar tratamiento para la anemia con evaluación médica",
      "D": "Continuar con la dosis preventiva durante 3 meses y repetir dosaje de hemoglobina"
    },
    "id": 23,
    "respuesta": "A",
    "tema": "Cuidado Integral - Prevención y control de anemia",
    "origen": "examen",
    "explicacion": "Con Hb 11.5 g/dL (con factor de corrección por altitud) la niña no tiene anemia. Como abandonó la suplementación preventiva desde los 7 meses, se debe continuar con la dosis preventiva hasta completar los 6 meses de suplementación, previa consejería nutricional para asegurar la adherencia."
  },
  {
    "pregunta": "El responsable del establecimiento de salud, está recibiendo la relación y stock de materiales e insumos para la atención de la gestante y se percata que hay productos vencidos (hace un mes), que ya no pueden ser consumidos para la atención. ¿Cuál es el procedimiento a seguir?",
    "opciones": {
      "A": "Devolver a farmacia con informe",
      "B": "Solicitar a farmacia la rotación a otro establecimiento de salud",
      "C": "Eliminar el producto",
      "D": "Mantenerlo en su stock hasta nuevo requerimiento"
    },
    "id": 24,
    "respuesta": "A",
    "tema": "Gestión - Control de inventario y medicamentos",
    "origen": "examen",
    "explicacion": "Los productos vencidos deben devolverse a farmacia acompañados de un informe documentado. No se eliminan directamente ni se mantienen en stock porque representan un riesgo para la seguridad del paciente. Farmacia se encarga del procedimiento de baja según la normativa vigente."
  },
  {
    "pregunta": "En la visita familiar integral en la comunidad de San Gerónimo de Surco, madre de 26 años, con 5 hijos en edades comprendidas entre los 10 días de nacimiento y 7 años, fueron identificados riesgos por curso de vida y a la dinámica familiar, que permitió la intervención del personal de salud en tres ejes. ¿Qué tipo de trabajo es?",
    "opciones": {
      "A": "Multidisciplinario",
      "B": "Transgeneracional",
      "C": "Intersectorial",
      "D": "Transversal"
    },
    "id": 25,
    "respuesta": "A",
    "tema": "Salud Comunitaria - Intervenciones comunitarias",
    "origen": "examen",
    "explicacion": "Es trabajo multidisciplinario porque intervienen diferentes profesionales de salud (médico, enfermera, obstetra) en tres ejes de atención para abordar los riesgos identificados por curso de vida y dinámica familiar. Se diferencia del intersectorial (varios sectores: salud, educación, etc.) y del transversal (un tema que cruza varias áreas)."
  },
  {
    "pregunta": "En un establecimiento de salud de Santa Anita, el jefe realiza desplazamiento del personal a otro centro, sustentando la disminución de coberturas vacunales, la enfermera que labora más de 15 años, manifiesta su descontento presentando una queja a recursos humanos. ¿Qué aspecto de la gestión de recursos humanos se ve afectado?",
    "opciones": {
      "A": "Trabajo social",
      "B": "Ley del CAS",
      "C": "Clima organizacional",
      "D": "Salud mental"
    },
    "id": 26,
    "respuesta": "C",
    "tema": "Gestión - Clima y cultura organizacional",
    "origen": "examen",
    "explicacion": "El clima organizacional se ve afectado cuando decisiones administrativas como el desplazamiento de personal generan descontento, quejas y conflictos interpersonales. El clima refleja la percepción del ambiente laboral y se deteriora cuando el personal siente que las decisiones son injustas o no consensuadas."
  },
  {
    "pregunta": "Es la entrega de servicios de salud de acuerdo con los parámetros culturales de los/as usuarios/as; es decir, construidos a través de espacios de diálogo, en los que prestadores y usuarios/as acuerdan cuáles deben ser las características de los servicios que les son ofertados por parte del Estado:",
    "opciones": {
      "A": "Pertinencia cultural",
      "B": "Adecuación cultural",
      "C": "Interculturalidad en salud",
      "D": "Diversificación intercultural"
    },
    "id": 27,
    "respuesta": "A",
    "tema": "Ética - Interculturalidad",
    "origen": "examen",
    "explicacion": "La pertinencia cultural es la entrega de servicios de salud de acuerdo con los parámetros culturales de los usuarios, construidos a través de espacios de diálogo donde prestadores y usuarios acuerdan las características de los servicios ofertados por el Estado. Se diferencia de la adecuación cultural (ajuste técnico del servicio) y de la interculturalidad en salud (concepto más amplio)."
  },
  {
    "pregunta": "La obstetra del P.S. Lircay recibe multigesta de 38 sem de gestación, con evidente hemorragia vaginal, al examen: piel fría, signos vitales alterados. La coloca en decúbito lateral izquierdo, la abriga y despeja sus vías aéreas, administrándole oxigeno con cánula binasal. ¿Qué tipo de respuesta empleó ante esta emergencia?",
    "opciones": {
      "A": "Reposición de volumen",
      "B": "Medidas de soporte",
      "C": "Trato interpersonal",
      "D": "Reto de fluidos"
    },
    "id": 28,
    "respuesta": "B",
    "tema": "Cuidado Integral - Emergencias obstétricas",
    "origen": "examen",
    "explicacion": "Las medidas de soporte son las acciones iniciales para estabilizar a la paciente: posición en decúbito lateral izquierdo (evita compresión de vena cava), abrigar (prevenir hipotermia), despejar vías aéreas y administrar oxígeno. La reposición de volumen y el reto de fluidos son intervenciones posteriores específicas."
  },
  {
    "pregunta": "En el marco del ciclo de planeamiento estratégico la fase ...... es la encargada del diseño de objetivos y acciones estratégicas sectoriales en consistencia, alineamiento y coherencia con la definición de objetivos.",
    "opciones": {
      "A": "2",
      "B": "4",
      "C": "3",
      "D": "1"
    },
    "id": 29,
    "respuesta": "C",
    "tema": "Gestión - Planeamiento estratégico",
    "origen": "examen",
    "explicacion": "La fase 3 del ciclo de planeamiento estratégico según CEPLAN se encarga del diseño de objetivos y acciones estratégicas sectoriales en consistencia y coherencia con la definición de objetivos. La fase 1 es el conocimiento integral de la realidad, la fase 2 es el futuro deseado y la fase 4 es el seguimiento y evaluación."
  },
  {
    "pregunta": "¿Cuál es la herramienta que describe y analiza los problemas de salud de un distrito o provincia, su relación casual con los determinantes sociales, se construye de manera participativa, es útil para la toma de decisiones y necesaria para la planificación en salud?",
    "opciones": {
      "A": "Alerta epidemiológica",
      "B": "Plan de salud local",
      "C": "Boletines en salud",
      "D": "Análisis de situación de salud"
    },
    "id": 30,
    "respuesta": "D",
    "tema": "Salud Pública - ASIS",
    "origen": "examen",
    "explicacion": "El Análisis de Situación de Salud (ASIS) es la herramienta que describe y analiza los problemas de salud de un territorio, su relación con los determinantes sociales, se construye participativamente y es útil para la toma de decisiones y planificación en salud. No es una alerta epidemiológica (que es puntual) ni un boletín (que es informativo)."
  },
  {
    "pregunta": "El médico jefe de un establecimiento de salud, con el propósito de proyectar su plan de capacitación continua; evalúa a su personal con respecto al desecho de materiales como termómetros de mercurio rotos y productos radioactivos, encontrando escasos conocimientos. ¿En qué área debe capacitar?",
    "opciones": {
      "A": "Salud ambiental",
      "B": "Cambio climático",
      "C": "Clima organizacional",
      "D": "Gestión de recursos"
    },
    "id": 31,
    "respuesta": "A",
    "tema": "Salud Comunitaria - Gestión de residuos sólidos",
    "origen": "examen",
    "explicacion": "El manejo de termómetros de mercurio rotos y productos radioactivos corresponde al área de salud ambiental, que abarca la gestión de residuos peligrosos, sustancias tóxicas y su impacto en la salud. No es clima organizacional (relaciones laborales) ni cambio climático (fenómenos ambientales globales)."
  },
  {
    "pregunta": "Varón acude al establecimiento I–2 y solicita al jefe del PS información acerca del tratamiento que su señora esposa se realiza en Planificación Familiar todos los meses, está muy alterado. El jefe del establecimiento informa que debe guardar reserva respecto a la información referente a su esposa. ¿Qué deber del servidor público se está aplicando en este caso?",
    "opciones": {
      "A": "Discreción",
      "B": "Neutralidad",
      "C": "Responsabilidad",
      "D": "Transparencia"
    },
    "id": 32,
    "respuesta": "A",
    "tema": "Ética - Función pública",
    "origen": "examen",
    "explicacion": "El deber de discreción obliga al servidor público a guardar reserva sobre hechos o informaciones que conozca con motivo del ejercicio de sus funciones. La información médica de la esposa es confidencial y no puede revelarse a terceros, ni siquiera al cónyuge, sin autorización de la paciente."
  },
  {
    "pregunta": "¿Cuál es el indicador que permite determinar y dar a conocer la distribución de las determinantes sociales de la salud, la morbimortalidad en territorios o grupos poblacionales de un ámbito geográfico determinado?",
    "opciones": {
      "A": "Crecimiento de un evento de interés sanitario",
      "B": "Diferencia de riesgo de un evento de un interés sanitario",
      "C": "Razón de riesgo de evento de interés sanitario",
      "D": "Concentración de un evento de interés sanitario"
    },
    "id": 33,
    "respuesta": "D",
    "tema": "Salud Pública - Epidemiología",
    "origen": "examen",
    "explicacion": "El indicador de concentración de un evento de interés sanitario permite determinar cómo se distribuyen los determinantes sociales, la morbimortalidad en territorios o grupos poblacionales. Mide la desigualdad en la distribución de un evento de salud en un ámbito geográfico determinado."
  },
  {
    "pregunta": "Puérpera atendida en un establecimiento de salud de Tumbes se le realiza control de hemoglobina, obteniéndose el valor de 12.3 g/dL. ¿Cuál es el diagnóstico?",
    "opciones": {
      "A": "Anemia leve",
      "B": "Anemia severa",
      "C": "Anemia moderada",
      "D": "Sin anemia"
    },
    "id": 34,
    "respuesta": "D",
    "tema": "Cuidado Integral - Prevención y control de anemia",
    "origen": "examen",
    "explicacion": "En puérperas, el punto de corte para anemia es Hb < 12 g/dL. Tumbes está a nivel del mar, por lo que no requiere factor de corrección por altitud. Con Hb 12.3 g/dL la puérpera no tiene anemia. Anemia leve sería 11-11.9 g/dL, moderada 8-10.9 g/dL y severa < 8 g/dL."
  },
  {
    "pregunta": "Gestante de 25 semanas acude al establecimiento de salud, para su control. Examen: FC: 100 X', FR: 26 X', PA 160/90 mmHg, T°: 36.5 °C. Se coloca vía endovenosa segura de ClNa 0.9%. ¿Qué intervención corresponde según el relato?",
    "opciones": {
      "A": "Evaluar glucosa",
      "B": "Coordinar referencia",
      "C": "Administrar oxitócicos",
      "D": "Toma de exámenes de laboratorio"
    },
    "id": 35,
    "respuesta": "B",
    "tema": "Cuidado Integral - Emergencias obstétricas",
    "origen": "examen",
    "explicacion": "Gestante de 25 semanas con PA 160/90 mmHg presenta un cuadro compatible con trastorno hipertensivo del embarazo (preeclampsia). Tras estabilizar con vía endovenosa, la intervención correcta es coordinar la referencia a un establecimiento de mayor capacidad resolutiva, ya que requiere manejo especializado."
  },
  {
    "pregunta": "En el establecimiento de salud \"Chacra Colorada\" se está realizando una auditoría de salud para verificar y mejorar la calidad de atención en los servicios de salud, por múltiples quejas recibidas respecto al tiempo de espera en consultorios externos. Para ello el auditor procede con el debido cuidado, de acuerdo con la importancia de la tarea que desempeña y la confianza depositada en él por la entidad o servicio auditado, en resguardo de los intereses y derechos de los usuarios. ¿Qué principio de auditoría está aplicando?",
    "opciones": {
      "A": "Objetividad",
      "B": "Veracidad",
      "C": "Independencia",
      "D": "Diligencia"
    },
    "id": 36,
    "respuesta": "D",
    "tema": "Gestión - Calidad de servicios de salud",
    "origen": "examen",
    "explicacion": "El principio de diligencia en auditoría implica que el auditor procede con el debido cuidado profesional, de acuerdo con la importancia de la tarea y la confianza depositada en él. Se diferencia de la objetividad (imparcialidad), veracidad (apego a la verdad) e independencia (sin influencias externas)."
  },
  {
    "pregunta": "La enfermera del establecimiento de salud de Paucartambo, recibe a una mujer de 28 años quechua hablante para vacunación antitetánica; se presenta, la saluda y le brinda atención con adecuación intercultural. ¿A qué principio ético como servidor público alude su actuar?",
    "opciones": {
      "A": "Eficiencia",
      "B": "Responsabilidad",
      "C": "Justicia y equidad",
      "D": "Lealtad y obediencia"
    },
    "id": 37,
    "respuesta": "C",
    "tema": "Ética - Función pública",
    "origen": "examen",
    "explicacion": "El principio de justicia y equidad implica brindar atención sin discriminación, con adecuación intercultural. La enfermera al presentarse, saludar y atender con respeto a una mujer quechua hablante está garantizando un trato equitativo y justo, reconociendo su diversidad cultural y lingüística."
  },
  {
    "pregunta": "¿Cuál es la valoración clínica del adulto mayor que es realizada por el técnico de enfermería capacitado, en el primer nivel de atención, acorde a la disponibilidad de recursos humanos y tecnológicos del establecimiento de salud?",
    "opciones": {
      "A": "VACAM breve",
      "B": "VACAM completa",
      "C": "VACAM simple",
      "D": "VACAM corta"
    },
    "id": 38,
    "respuesta": "A",
    "tema": "Cuidado Integral - Paquete del adulto mayor",
    "origen": "examen",
    "explicacion": "La VACAM breve es la valoración clínica del adulto mayor que puede ser realizada por el técnico de enfermería capacitado en el primer nivel de atención. Es una versión simplificada que se adapta a la disponibilidad de recursos humanos y tecnológicos. La VACAM completa requiere profesional médico o de enfermería."
  },
  {
    "pregunta": "Toda persona diagnosticada con TB (pulmonar o extrapulmonar) y que debe ser registrado por el establecimiento de salud en el sistema de información gerencial de tuberculosis (SIGTB), inicie o no el tratamiento; se clasifica como caso de...",
    "opciones": {
      "A": "TB MDR",
      "B": "TB probable",
      "C": "TB con confirmación bacteriológica",
      "D": "TB"
    },
    "id": 39,
    "respuesta": "D",
    "tema": "Cuidado Integral - Tuberculosis",
    "origen": "examen",
    "explicacion": "Toda persona diagnosticada con TB (pulmonar o extrapulmonar) que debe registrarse en el SIGTB, inicie o no tratamiento, se clasifica como caso de TB. Esta definición operativa permite el registro y seguimiento de todos los casos diagnosticados independientemente de su condición de tratamiento. No se clasifica como TB MDR sin confirmación de resistencia."
  },
  {
    "pregunta": "En un estudio de investigación epidemiológico, de campo y cualitativo basada en la observación y entrevista, los principios éticos consideran lo siguiente:",
    "opciones": {
      "A": "No requiere contar con revisión por el comité de ética",
      "B": "Consentimiento, respeto y veracidad",
      "C": "No maleficencia, respeto y eficacia",
      "D": "Obtención del consentimiento, confidencialidad y beneficencia"
    },
    "id": 40,
    "respuesta": "D",
    "tema": "Investigación - Aspectos éticos",
    "origen": "examen",
    "explicacion": "Todo estudio de investigación, incluyendo los cualitativos de campo, debe cumplir principios éticos fundamentales: obtención del consentimiento informado (respeto a la autonomía), confidencialidad (protección de datos personales) y beneficencia (buscar el bien del participante). Siempre requiere revisión por comité de ética."
  },
  {
    "pregunta": "Acude al establecimiento de salud I-2 una madre de familia, por presentar somnolencia y pérdida de fuerza al caminar; menciona que hace 24 h le administraron la vacuna antitetánica. Con antecedente de hipotiroidismo, que desde hace 3 días olvidó tomar su medicación. ¿Cuál es el tipo de ESAVI que presenta?",
    "opciones": {
      "A": "Moderado",
      "B": "Leve y coincidente",
      "C": "Leve por error programático",
      "D": "Leve y atribuido a la vacuna"
    },
    "id": 41,
    "respuesta": "B",
    "tema": "Cuidado Integral - Vacunación y ESAVI",
    "origen": "examen",
    "explicacion": "Es un ESAVI leve y coincidente porque los síntomas (somnolencia, pérdida de fuerza) son más compatibles con el hipotiroidismo descompensado por abandono de medicación (3 días sin tratamiento) que con la vacuna antitetánica. La coincidencia temporal con la vacunación no implica causalidad."
  },
  {
    "pregunta": "Niña de 3 años de edad, tiene resultado de laboratorio PCR (+) para tos ferina, el personal realiza la investigación epidemiológica y búsqueda activa comunitaria, identificando a su padre como contacto directo, quien presentó tos persistente durante el periodo incubación de su hija y recibió tratamiento antibiótico en consultorio particular. ¿Cuál es la clasificación de caso para el padre en el sistema de vigilancia epidemiológica?",
    "opciones": {
      "A": "Sospechoso en investigación",
      "B": "Confirmado por nexo epidemiológico",
      "C": "Probable",
      "D": "Compatible"
    },
    "id": 42,
    "respuesta": "B",
    "tema": "Salud Pública - Vigilancia epidemiológica",
    "origen": "examen",
    "explicacion": "El padre se clasifica como caso confirmado por nexo epidemiológico porque tuvo contacto directo con un caso confirmado por laboratorio (su hija con PCR+ para tos ferina), presentó síntomas compatibles (tos persistente) durante el periodo de incubación, y no se le pudo tomar muestra porque ya recibió antibióticos."
  },
  {
    "pregunta": "Madre quechua hablante de la comunidad Sihuas, que se encuentra a 3 horas de caminata del centro de salud, acude para control de CRED de su bebé de 2 meses y no llega a obtener un cupo para su atención. ¿Cuál es la medida a tomar con la usuaria?",
    "opciones": {
      "A": "Asigna el primer cupo al siguiente día",
      "B": "Garantizar su atención de manera prioritaria",
      "C": "Indicarle que vuelva por la tarde",
      "D": "Se le atenderá al final de todos"
    },
    "id": 43,
    "respuesta": "B",
    "tema": "Ética - Interculturalidad",
    "origen": "examen",
    "explicacion": "Se debe garantizar la atención de manera prioritaria considerando la barrera geográfica (3 horas de caminata), la condición de vulnerabilidad (madre quechua hablante con bebé de 2 meses) y el principio de equidad. No se puede postergar la atención CRED cuando la madre ha realizado un esfuerzo significativo para acceder al servicio."
  },
  {
    "pregunta": "Lactante de 4 meses es atendido en consultorio de niño sano y a la valoración antropométrica presenta incremento de peso paralela al patrón de referencia y el indicador P/T se ubica por encima +3 DS, la madre refiere que lo alimenta solo con lactancia materna. ¿Cuál es la clasificación nutricional?",
    "opciones": {
      "A": "Sobrepeso",
      "B": "Crecimiento adecuado para la edad",
      "C": "Riesgo de hipotiroidismo",
      "D": "Crecimiento inadecuado por ganancia excesiva"
    },
    "id": 44,
    "respuesta": "B",
    "tema": "Cuidado Integral - Paquete del niño",
    "origen": "examen",
    "explicacion": "En un lactante de 4 meses alimentado exclusivamente con lactancia materna, cuyo incremento de peso es paralelo al patrón de referencia, se clasifica como crecimiento adecuado para la edad. En menores de 6 meses con lactancia materna exclusiva, el P/T elevado no se considera patológico si la tendencia es paralela al patrón, ya que es esperable una ganancia rápida de peso en este periodo."
  },
  {
    "pregunta": "Adolescente de 15 años llega al EESS I-1 acompañada por su madre y profesor, por propiciarse cortes profundos en la muñecas con sangrado considerable; después de su atención en tópico, la Enfermera pregunta a la paciente ¿Cómo se hizo esas lesiones?, ella responde, “quiero morirme, mi vida no me interesa”. Enfermera determina que este caso debe ser referido. ¿Quién firma el consentimiento informado para la referencia?",
    "opciones": {
      "A": "Madre",
      "B": "Enfermera",
      "C": "Profesor",
      "D": "Paciente"
    },
    "id": 45,
    "respuesta": "A",
    "tema": "Ética - Derechos de los usuarios",
    "origen": "examen",
    "explicacion": "Al tratarse de una menor de edad (15 años), el consentimiento informado para la referencia debe ser firmado por la madre, quien está presente como representante legal. Aunque sea una emergencia, la madre acompaña a la paciente y es quien tiene la potestad legal para autorizar procedimientos en menores de edad."
  },
  {
    "pregunta": "Usted atiende a una mujer joven de 25 años; encuentra los siguientes valores: índice de masa corporal de 31 y perímetro abdominal de 94 cm. ¿Cuál es su clasificación nutricional y su riesgo cardio metabólico?",
    "opciones": {
      "A": "Sobrepeso / elevado",
      "B": "Obesidad tipo 1 / normal",
      "C": "Obesidad tipo 1 / muy elevado",
      "D": "Obesidad tipo 3 / muy elevado"
    },
    "id": 46,
    "respuesta": "C",
    "tema": "Cuidado Integral - Enfermedades no transmisibles",
    "origen": "examen",
    "explicacion": "IMC de 31 corresponde a Obesidad tipo 1 (30-34.9). El perímetro abdominal de 94 cm en mujer supera el punto de corte de 88 cm, clasificándose como riesgo cardiometabólico muy elevado. La combinación de obesidad tipo 1 con perímetro abdominal >88 cm indica riesgo cardiovascular muy elevado que requiere intervención integral."
  },
  {
    "pregunta": "¿Cuál es el lavado de manos que implica una buena práctica de atención para la seguridad del paciente según la OMS?",
    "opciones": {
      "A": "Lavado de manos clínico, que dura de 20 a 30 segundos y tiene 08 pasos",
      "B": "Lavado de manos clínico, que dura de 30 a 60 segundos y tiene 10 pasos",
      "C": "Lavado de manos clínico, que dura de 40 a 60 segundos y tiene 11 pasos",
      "D": "Lavado de manos social, que dura de 5 a 10 segundos y tiene 8 pasos"
    },
    "id": 47,
    "respuesta": "C",
    "tema": "Salud Pública - Prevención y control de infecciones",
    "origen": "examen",
    "explicacion": "Según la OMS, el lavado de manos clínico dura de 40 a 60 segundos y consta de 11 pasos. Es la técnica recomendada para la seguridad del paciente. El lavado social es más corto y con menos pasos, mientras que el quirúrgico dura más tiempo y tiene pasos adicionales."
  },
  {
    "pregunta": "En el establecimiento de salud \"Vida Nueva\" se está haciendo un spot publicitario para promocionar la ventajas del parto vertical. ¿Cuál es uno de los criterios de inclusión para este tipo de parto?",
    "opciones": {
      "A": "Gestantes sin complicación obstétrica, incluye adolescentes y mujeres jóvenes",
      "B": "Falta de colaboración de la gestante para el trabajo de parto y la atención del mismo (problemas psiquiátricos)",
      "C": "Gestante con distocias de contracción",
      "D": "Gestante con antecedente de miomectomías"
    },
    "id": 48,
    "respuesta": "A",
    "tema": "Ética - Parto vertical",
    "origen": "examen",
    "explicacion": "Según la norma técnica de parto vertical, el criterio de inclusión es: gestantes sin complicación obstétrica, incluye adolescentes y mujeres jóvenes. Las opciones B (falta de colaboración por problemas psiquiátricos), C (distocias de contracción) y D (antecedente de miomectomías) son criterios de exclusión para parto vertical."
  },
  {
    "pregunta": "Para la formulación del plan estratégico institucional según el CEPLAN. ¿Cuál es la fase que se encarga de elaborar el futuro deseado?",
    "opciones": {
      "A": "3",
      "B": "2",
      "C": "4",
      "D": "1"
    },
    "id": 49,
    "respuesta": "B",
    "tema": "Gestión - Planeamiento estratégico",
    "origen": "examen",
    "explicacion": "Según el CEPLAN, la fase 2 del ciclo de planeamiento estratégico se encarga de elaborar el futuro deseado, que incluye la construcción de la visión y los escenarios futuros. La fase 1 es conocimiento de la realidad, la fase 3 es el diseño de objetivos y acciones estratégicas, y la fase 4 es seguimiento y evaluación."
  },
  {
    "pregunta": "¿Cuál es la actividad técnica operativa de residuos sólidos que involucre manipuleo, acondicionamiento, transporte, transferencia, tratamiento, disposición final o procedimiento técnico operativo hasta su disposición final?",
    "opciones": {
      "A": "Manejo integral de residuos sólidos",
      "B": "Manejo de residuos sólidos",
      "C": "Gestión de residuos sólidos",
      "D": "Plan de gestión de residuos sólidos"
    },
    "id": 50,
    "respuesta": "B",
    "tema": "Salud Comunitaria - Gestión de residuos sólidos",
    "origen": "examen",
    "explicacion": "El manejo de residuos sólidos es la actividad técnica operativa que involucra manipuleo, acondicionamiento, transporte, transferencia, tratamiento y disposición final. Se diferencia de la gestión de residuos sólidos (que es la planificación, coordinación y diseño de políticas) y del manejo integral (que abarca ambos conceptos)."
  },
  {
    "pregunta": "¿Cuáles son los factores de riesgo que afectan la función visual en el recién nacido que se deben de identificar durante el control CRED?",
    "opciones": {
      "A": "Internamiento en UCI, fototerapia, distrés respiratorio al nacer",
      "B": "Madre con exposición a metales pesados y tratamiento por infecciones en la gestación",
      "C": "Padres con visión anormal, ictericia al nacer, prematuro",
      "D": "Antecedente familiar con ceguera, prematuro, sufrimiento fetal, bajo peso al nacer"
    },
    "id": 51,
    "respuesta": "D",
    "tema": "Cuidado Integral - Paquete del niño",
    "origen": "examen",
    "explicacion": "Los factores de riesgo para la función visual del recién nacido que se identifican en CRED son: antecedente familiar de ceguera, prematuridad, sufrimiento fetal y bajo peso al nacer. Estos factores están directamente asociados a daño retiniano y del nervio óptico, requiriendo evaluación oftalmológica temprana."
  },
  {
    "pregunta": "Se considera ESAVI severo a todo evento adverso asociado a la vacunación o inmunización que tiene asociación temporal y no necesariamente causal que cumpla uno o mas de los siguientes criterios:",
    "opciones": {
      "A": "Efectos adversos masivos, fallecimiento, dolor intenso, anafilaxia.",
      "B": "Hospitalización, riesgo de muerte, discapacidad, fallecimiento.",
      "C": "Internamiento por emergencia, alteración hemodinámica, muerte inmediata, discapacidad",
      "D": "Hospitalización, fiebre súbita, efectos secundarios severos, anafilaxia."
    },
    "id": 52,
    "respuesta": "B",
    "tema": "Cuidado Integral - Vacunación y ESAVI",
    "origen": "examen",
    "explicacion": "Un ESAVI severo cumple al menos uno de estos criterios: hospitalización o prolongación de hospitalización, riesgo de muerte, discapacidad significativa o persistente, anomalía congénita o fallecimiento. Requiere notificación inmediata e investigación por comité de expertos."
  },
  {
    "pregunta": "En el neonato, el contacto piel a piel, la lactancia materna y la vacunación. ¿A qué tipo de prevención corresponden?",
    "opciones": {
      "A": "Cuaternaria",
      "B": "Primaria",
      "C": "Secundaria",
      "D": "Terciaria"
    },
    "id": 53,
    "respuesta": "B",
    "tema": "Salud Pública - Niveles de prevención",
    "origen": "examen",
    "explicacion": "El contacto piel a piel, la lactancia materna y la vacunación son medidas de prevención primaria porque se aplican antes de que aparezca la enfermedad, buscando evitar su aparición. Protegen al neonato fortaleciendo su sistema inmunológico y vínculo afectivo."
  },
  {
    "pregunta": "En un establecimiento de salud I-1, las actividades programadas para la detección oportuna y control de la diabetes mellitus tipo 2 incluye:",
    "opciones": {
      "A": "Modificación de estilos de vida / manejo farmacológico hasta el alta del paciente",
      "B": "Tamizaje de glucemia en ayunas a las personas con factores de riesgo / seguimiento de la adherencia al",
      "C": "Consejería nutricional / evaluación de nefropatías y neuropatías",
      "D": "Exámenes rutinarios glucemia, perfil lipídico completo / visita domiciliaria"
    },
    "id": 54,
    "respuesta": "B",
    "tema": "Cuidado Integral - Enfermedades no transmisibles",
    "origen": "examen",
    "explicacion": "En un establecimiento I-1, las actividades para detección oportuna y control de diabetes mellitus tipo 2 incluyen: tamizaje de glucemia en ayunas a personas con factores de riesgo y seguimiento de la adherencia al tratamiento. La evaluación de nefropatías y neuropatías requiere mayor capacidad resolutiva."
  },
  {
    "pregunta": "En cumplimiento al plan de atención integral, usted realiza evaluación de agudeza visual a escolar de 13 años. ¿Cuál es el criterio de referencia para evaluación médica según el resultado obtenido?",
    "opciones": {
      "A": "Menor a igual a 20/20 en ambos ojos",
      "B": "Menor o igual a 20/30 en uno o ambos ojos",
      "C": "Menor o igual a 20/50 en uno o ambos ojos",
      "D": "Mayor o igual a 20/40 en un ojo"
    },
    "id": 55,
    "respuesta": "C",
    "tema": "Cuidado Integral - Paquete del adolescente",
    "origen": "examen",
    "explicacion": "En escolares de 13 años, el criterio de referencia para evaluación médica oftalmológica es agudeza visual menor o igual a 20/50 en uno o ambos ojos. Este punto de corte indica una disminución significativa de la visión que requiere evaluación especializada y posible corrección óptica."
  },
  {
    "pregunta": "El grado en que un instrumento produce resultados consistentes y coherentes se denomina ...... y el grado en que un instrumento en verdad mide la variable que se busca medir se denomina...",
    "opciones": {
      "A": "confiabilidad / validez.",
      "B": "validez de constructo / validez de criterio.",
      "C": "validez / objetividad.",
      "D": "piloto / confiabilidad."
    },
    "id": 56,
    "respuesta": "A",
    "tema": "Investigación - Instrumentos de recolección",
    "origen": "examen",
    "explicacion": "La confiabilidad es el grado en que un instrumento produce resultados consistentes y coherentes al aplicarse repetidamente. La validez es el grado en que mide realmente la variable que pretende medir. Son dos propiedades psicométricas fundamentales de todo instrumento de investigación."
  },
  {
    "pregunta": "El …... de los equipos es uno de los factores que influyen decisivamente en la mejora de la calidad asistencial y en los resultados sobre la salud de la población.",
    "opciones": {
      "A": "coordinador",
      "B": "liderazgo",
      "C": "responsable",
      "D": "jefe"
    },
    "id": 57,
    "respuesta": "B",
    "tema": "Gestión - Liderazgo de servicios de salud",
    "origen": "examen",
    "explicacion": "El liderazgo de los equipos es uno de los factores que influyen decisivamente en la mejora de la calidad asistencial y en los resultados sobre la salud de la población. Un buen líder motiva, orienta y coordina al equipo hacia objetivos comunes de calidad en la atención."
  },
  {
    "pregunta": "En los establecimientos de salud categoría I-4 cuenta como mínimo para la atención ambulatoria e internamiento con capacidad resolutiva con las UPSS de consulta externa, ....... y farmacia.",
    "opciones": {
      "A": "hospitalización",
      "B": "nutrición",
      "C": "central de esterilización",
      "D": "patología clínica"
    },
    "id": 58,
    "respuesta": "D",
    "tema": "Gestión - Clasificación de establecimientos",
    "origen": "examen",
    "explicacion": "Los establecimientos I-4 cuentan como mínimo con las UPSS de consulta externa, patología clínica y farmacia para atención ambulatoria e internamiento. La UPSS de patología clínica (laboratorio) es indispensable para el diagnóstico y seguimiento de pacientes internados."
  },
  {
    "pregunta": "La enfermera del Centro de Salud Poques, identifica que hay un alto índice de malnutrición en los niños de la institución educativa local, situación que advierte al director y personal docente. Menciona la principal acción a desarrollar con el sector educación en el nivel local",
    "opciones": {
      "A": "Realizar escuela de padres",
      "B": "Capacitar a vigías escolares",
      "C": "Promover kioskos y comedores escolares saludables",
      "D": "Gestionar ante el municipio el apoyo alimentario"
    },
    "id": 59,
    "respuesta": "C",
    "tema": "Salud Comunitaria - Trabajo intersectorial",
    "origen": "examen",
    "explicacion": "La principal acción a desarrollar con el sector educación ante malnutrición infantil es promover kioscos y comedores escolares saludables. Esta intervención intersectorial salud-educación garantiza que los niños accedan a alimentos nutritivos durante la jornada escolar, abordando directamente el problema de malnutrición en la institución educativa."
  },
  {
    "pregunta": "¿Cuál es la enfermedad zoonótica relacionada al acceso a saneamiento básico, se contagia a través del contacto con la orina de animales infectados o agua contaminada y su prevención a través de la protección de fuentes de agua, disposición adecuada de basuras y excretas, control de roedores y protección personal?",
    "opciones": {
      "A": "Leptospirosis",
      "B": "Carbunco",
      "C": "Tifus",
      "D": "Peste"
    },
    "id": 60,
    "respuesta": "A",
    "tema": "Cuidado Integral - Enfermedades metaxénicas y zoonóticas",
    "origen": "examen",
    "explicacion": "La leptospirosis es la enfermedad zoonótica que se contagia por contacto con orina de animales infectados o agua contaminada. Su prevención incluye protección de fuentes de agua, disposición adecuada de basuras y excretas, control de roedores y protección personal. Está directamente relacionada al acceso a saneamiento básico."
  },
  {
    "pregunta": "En un establecimiento de salud del departamento de Junín se realiza el CRED al niño de un mes de edad, al realizar la evaluación ocular se evidencia ausencia de reflejo, se sospecha de retinoblastoma. ¿Qué test se aplicó para esta evaluación ocular?",
    "opciones": {
      "A": "Bruckner",
      "B": "Fijación de ojos",
      "C": "Reflejo de parpadeo",
      "D": "Fijación mononuclear"
    },
    "id": 61,
    "respuesta": "A",
    "tema": "Cuidado Integral - Paquete del niño",
    "origen": "examen",
    "explicacion": "El test de Bruckner evalúa el reflejo rojo retiniano bilateral. La ausencia de reflejo rojo (leucocoria) es el hallazgo clave para sospechar retinoblastoma. Se aplica iluminando ambos ojos simultáneamente con el oftalmoscopio directo a una distancia de 50-100 cm en un ambiente oscuro."
  },
  {
    "pregunta": "¿Qué tipo de indicador es \"el porcentaje de gestantes de parto vertical con manejo activo del tercer periodo\"?",
    "opciones": {
      "A": "De resultado",
      "B": "De proceso",
      "C": "De desempeño",
      "D": "De estructura"
    },
    "id": 62,
    "respuesta": "B",
    "tema": "Gestión - Calidad de servicios de salud",
    "origen": "examen",
    "explicacion": "El porcentaje de gestantes de parto vertical con manejo activo del tercer periodo es un indicador de proceso porque mide una actividad o procedimiento realizado durante la atención. Los indicadores de estructura miden recursos disponibles y los de resultado miden el impacto en la salud del paciente."
  },
  {
    "pregunta": "Los pueblos indígenas tienen derecho a establecer y controlar sus sistemas e instituciones docentes que impartan educación en sus propios idiomas, en consonancia con sus métodos culturales de enseñanza y aprendizaje. Por tanto, tienen derecho a todos los niveles y formas de educación del estado sin...",
    "opciones": {
      "A": "discriminación.",
      "B": "tolerancia.",
      "C": "diversidad.",
      "D": "comprensión."
    },
    "id": 63,
    "respuesta": "A",
    "tema": "Ética - Interculturalidad",
    "origen": "examen",
    "explicacion": "Los pueblos indígenas tienen derecho a todos los niveles y formas de educación del Estado sin discriminación. La Declaración de las Naciones Unidas sobre los Derechos de los Pueblos Indígenas establece el derecho a la educación en sus propios idiomas y métodos culturales, sin ser excluidos por su origen étnico."
  },
  {
    "pregunta": "Lactante de 3 meses de edad, con antecedente de bajo peso al nacer y distrés respiratorio al nacimiento, a la aplicación del TPED responde adecuadamente y no hay desviación a la izquierda de la línea vertical que describe las habilidades en las áreas evaluadas. ¿Cómo se interpreta su evaluación del desarrollo psicomotor?",
    "opciones": {
      "A": "Riesgo para trastorno del desarrollo",
      "B": "Coeficiente psicomotor en alto riesgo",
      "C": "Niño recuperado",
      "D": "Coeficiente del desarrollo normal"
    },
    "id": 64,
    "respuesta": "A",
    "tema": "Cuidado Integral - Paquete del niño",
    "origen": "examen",
    "explicacion": "En el TPED, un lactante con antecedentes de bajo peso al nacer y distrés respiratorio que responde adecuadamente y sin desviación a la izquierda se clasifica como riesgo para trastorno del desarrollo. A pesar de que su evaluación actual es adecuada, sus antecedentes de riesgo perinatal lo mantienen en categoría de riesgo y requiere seguimiento estrecho."
  },
  {
    "pregunta": "Un joven de 30 años en una comunidad se cae del puente sufriendo múltiples lesiones, encontrándose en una zona de difícil acceso; inmediatamente los pobladores, el agente de salud, el gobernador; coordinan su traslado al establecimiento de salud. ¿A que tipo de vigilancia corresponde?",
    "opciones": {
      "A": "De atención",
      "B": "Epidemiológica",
      "C": "De escenarios",
      "D": "Comunitaria en salud"
    },
    "id": 65,
    "respuesta": "D",
    "tema": "Salud Pública - Vigilancia epidemiológica",
    "origen": "examen",
    "explicacion": "Corresponde a vigilancia comunitaria en salud porque son los propios actores de la comunidad (pobladores, agente de salud, gobernador) quienes identifican el evento de salud y coordinan la respuesta de traslado al establecimiento. La vigilancia comunitaria involucra la participación activa de la comunidad en la detección y respuesta ante problemas de salud."
  },
  {
    "pregunta": "Madre acude al establecimiento de salud con su recién nacido, comenta que su niño no reacciona con sonidos fuertes desde que fue dado de alta; por lo que se le realiza el cribado neonatal para descartar hipoacusia. ¿Este cribado a qué tipo de prevención corresponde?",
    "opciones": {
      "A": "Primordial",
      "B": "Primaria",
      "C": "Secundaria",
      "D": "Terciaria"
    },
    "id": 66,
    "respuesta": "C",
    "tema": "Salud Pública - Niveles de prevención",
    "origen": "examen",
    "explicacion": "El cribado neonatal para descartar hipoacusia corresponde a prevención secundaria, ya que es una prueba de detección precoz (tamizaje) de una condición que ya puede estar presente. La prevención secundaria busca identificar la enfermedad en fase asintomática para intervenir tempranamente y evitar complicaciones en el desarrollo del lenguaje."
  },
  {
    "pregunta": "La relación médico-paciente se basa fundamentalmente en los principios de ...... y ...... pero cuando estos principios entran en conflicto, a menudo por la escasez de recursos, es el principio de justicia el que entra en juego para mediar entre ellos.",
    "opciones": {
      "A": "equidad/beneficencia",
      "B": "beneficencia/ autonomía",
      "C": "autonomía/justicia",
      "D": "no maleficencia/ autonomía"
    },
    "id": 67,
    "respuesta": "B",
    "tema": "Ética - Bioética",
    "origen": "examen",
    "explicacion": "La relación médico-paciente se basa fundamentalmente en los principios de beneficencia (buscar el bien del paciente) y autonomía (respetar las decisiones del paciente). Cuando estos principios entran en conflicto, especialmente por escasez de recursos, el principio de justicia entra en juego para mediar y distribuir equitativamente los recursos disponibles."
  },
  {
    "pregunta": "Alberto cría 50 gallinas y 50 patos en su vivienda, acude al centro porque la mitad de sus aves amanecieron muertas y muchas tienen \"moquillo\", quiere comprar alguna medicina para tratar a su aves enfermas. ¿A qué tipo de evento corresponde el caso y cuál es la conducta a seguir?",
    "opciones": {
      "A": "Es una zoonosis y debe reportarse al sistema de vigilancia epidemiológica",
      "B": "Es una epizootia y debe notificarse al sistema de vigilancia epidemiológica",
      "C": "Es un evento usual y su manejo solo corresponde a SENASA y al municipio",
      "D": "Es una zoonosis y se debe eliminar a las aves enfermas en coordinación con el municipio"
    },
    "id": 68,
    "respuesta": "B",
    "tema": "Salud Pública - Brotes y epidemias",
    "origen": "examen",
    "explicacion": "Una epizootia es una enfermedad que afecta a un gran número de animales en un área y tiempo determinados (equivalente a epidemia en humanos). La muerte súbita de la mitad de las aves con síntomas respiratorios ('moquillo') configura una epizootia que debe notificarse al sistema de vigilancia epidemiológica por el riesgo zoonótico."
  },
  {
    "pregunta": "En el establecimiento de salud el personal atiende a un poblador de 75 años con catarata bilateral, desde hace 6 meses conoce su diagnóstico. ¿A qué grupo enfermedades pertenece?",
    "opciones": {
      "A": "Congénitas",
      "B": "No transmisibles",
      "C": "Raras",
      "D": "Huérfanas"
    },
    "id": 69,
    "respuesta": "B",
    "tema": "Cuidado Integral - Enfermedades no transmisibles",
    "origen": "examen",
    "explicacion": "La catarata bilateral en un adulto mayor de 75 años pertenece al grupo de enfermedades no transmisibles. Es una condición degenerativa asociada al envejecimiento, no es contagiosa ni hereditaria en este contexto. Las enfermedades no transmisibles incluyen las crónico-degenerativas como cataratas, diabetes, hipertensión, entre otras."
  },
  {
    "pregunta": "Niño de 3 años es llevado por su tía para control de CRED en un establecimiento de categoría I-1, durante la atención se toma conocimiento de fallecimiento de sus padres. ¿Cuál es la conducta a seguir con la tutora del niño después de culminar la atención?",
    "opciones": {
      "A": "Hacer de conocimiento a la DEMUNA, INABIF, CEM o un similar para el seguimiento del caso",
      "B": "Referencia a un CSMC, o a un EESS I-3, I-4 que cuente con psicólogo",
      "C": "Brindar consejería en salud mental a la tía y elaborar el plan de atención individualizado",
      "D": "Referencia a un establecimiento I-2 para evaluación de síntomas ansiosos, depresivos"
    },
    "id": 70,
    "respuesta": "B",
    "tema": "Cuidado Integral - Salud mental",
    "origen": "examen",
    "explicacion": "Ante un niño huérfano de ambos padres, la conducta es referir a un Centro de Salud Mental Comunitario (CSMC) o a un establecimiento I-3 o I-4 que cuente con psicólogo. El niño necesita evaluación y acompañamiento psicológico especializado por duelo, que excede la capacidad de un I-1."
  },
  {
    "pregunta": "¿Cuál es la terapia preventiva de la tuberculosis en contactos de casos con TB sensible a administrar en menores de 2 años, como primera elección?",
    "opciones": {
      "A": "P + R y como alternativa H + R o sólo H",
      "B": "H + R y como alternativa administrar sólo H",
      "C": "P + H y como alternativa H + R o sólo H",
      "D": "P + H y como alternativa H + R o sólo P"
    },
    "id": 71,
    "respuesta": "B",
    "tema": "Cuidado Integral - Tuberculosis",
    "origen": "examen",
    "explicacion": "La terapia preventiva de TB en contactos menores de 2 años de casos con TB sensible tiene como primera elección Isoniazida + Rifampicina (H+R), y como alternativa administrar solo Isoniazida (H). Este esquema busca prevenir la progresión a enfermedad activa en niños pequeños altamente vulnerables."
  },
  {
    "pregunta": "El puesto de salud Miaria de categoría I-2, se atiende a un niño de 9 meses con diagnóstico de dengue con signos de alarma; que no puede ser referido por inaccesibilidad geográfica debido al incremento del caudal del río. ¿Qué acción puede ayudarle al personal a tomar decisiones adecuadas respecto al manejo clínico del niño?",
    "opciones": {
      "A": "Teleinterconsulta con especialista",
      "B": "Telecapacitación con médico de microrred",
      "C": "Teleorientación con especialista",
      "D": "Teleconsulta con la red de salud"
    },
    "id": 72,
    "respuesta": "A",
    "tema": "Gestión - Telesalud",
    "origen": "examen",
    "explicacion": "La teleinterconsulta es la consulta entre profesionales de salud a distancia para discutir un caso clínico y tomar decisiones conjuntas. Es la acción adecuada cuando no se puede referir al paciente por inaccesibilidad geográfica, permitiendo que un especialista guíe el manejo clínico del niño con dengue con signos de alarma."
  },
  {
    "pregunta": "¿Cómo se denomina al proceso que se inicia con la exposición de un huésped susceptible a un agente causal y termina con la recuperación, la discapacidad o la muerte?",
    "opciones": {
      "A": "Proceso salud enfermedad",
      "B": "Periodo patogénico de la enfermedad",
      "C": "Período prepatogénico de la enfermedad",
      "D": "Historia natural de la enfermedad"
    },
    "id": 73,
    "respuesta": "D",
    "tema": "Salud Pública - Historia natural de la enfermedad",
    "origen": "examen",
    "explicacion": "La historia natural de la enfermedad es el proceso completo que se inicia con la exposición del huésped susceptible al agente causal y termina con la recuperación, discapacidad o muerte. Incluye el periodo prepatogénico y patogénico. No es solo el periodo patogénico ni el prepatogénico aisladamente."
  },
  {
    "pregunta": "En una comunidad nativa, se reporta un caso confirmado de rabia en bovino y desde la presencia de mineros informales se observan murciélagos que vuelan por la noche. ¿Cuál es la medida más efectiva para prevenir transmisión de rabia silvestre en esa comunidad?",
    "opciones": {
      "A": "Eliminación de refugios de murciélagos con la comunidad organizada",
      "B": "Organización de la comunidad para la captura de murciélagos",
      "C": "Proteger con vacuna pre exposición a toda la comunidad",
      "D": "Colocar mallas en todas las viviendas de la comunidad"
    },
    "id": 74,
    "respuesta": "C",
    "tema": "Cuidado Integral - Enfermedades metaxénicas y zoonóticas",
    "origen": "examen",
    "explicacion": "La medida más efectiva para prevenir la transmisión de rabia silvestre en una comunidad nativa con caso confirmado en bovino es proteger con vacuna pre-exposición a toda la comunidad. La vacunación genera inmunidad activa y protege a las personas ante futuras exposiciones a murciélagos hematófagos infectados."
  },
  {
    "pregunta": "Mujer de 56 años, viene al establecimiento de salud, refiere preocupación porque está subiendo de peso en los últimos 3 meses. Hace 6 meses menopáusica con tratamiento no hormonal. ¿Sobre la prevención o control de qué riesgo debe orientarla?",
    "opciones": {
      "A": "De insuficiencia renal",
      "B": "De obesidad",
      "C": "De depresión",
      "D": "De ACV"
    },
    "id": 75,
    "respuesta": "B",
    "tema": "Cuidado Integral - Climaterio y menopausia",
    "origen": "examen",
    "explicacion": "En una mujer menopáusica de 56 años con aumento de peso en los últimos 3 meses, se debe orientar sobre la prevención y control de obesidad. La menopausia favorece el aumento de peso por cambios metabólicos y hormonales, y la obesidad es factor de riesgo para enfermedades cardiovasculares, diabetes y otras complicaciones."
  },
  {
    "pregunta": "Ingresa al establecimiento de salud gestante de 28 semanas, con antecedente de haber sido vacunada contra tétanos y difteria combinada con pertusis (Tdap) en su anterior gestación. ¿Cuál es la indicación respecto a la Tdap?",
    "opciones": {
      "A": "1ra dosis al contacto y 2da dosis después de 2 meses",
      "B": "No requiere vacunación",
      "C": "Aplicarle una dosis",
      "D": "Una dosis en el puerperio"
    },
    "id": 76,
    "respuesta": "C",
    "tema": "Cuidado Integral - Vacunación y ESAVI",
    "origen": "examen",
    "explicacion": "La gestante de 28 semanas debe recibir una dosis de Tdap en cada embarazo, independientemente de si fue vacunada en gestaciones anteriores. Se aplica entre las 27-36 semanas para transferir anticuerpos al feto y proteger al recién nacido contra tos ferina en sus primeros meses de vida."
  },
  {
    "pregunta": "Durante la visita a la comunidad los vecinos indican que un vecino se encuentra solo en su domicilio, el personal verifica que se trata de un adulto mayor con signos de desnutrición y descuidado. ¿Qué actitud debe tomar el personal de salud?",
    "opciones": {
      "A": "Cuidado integral e integrado de salud del adulto mayor en la comunidad",
      "B": "Invitarlo a ser parte del círculo del adulto mayor que tiene la municipalidad",
      "C": "El personal no tiene responsabilidad en en el marco de sus competencias",
      "D": "Buscar a sus familiares para que se hagan cargo del adulto mayor"
    },
    "id": 77,
    "respuesta": "A",
    "tema": "Cuidado Integral - Paquete del adulto mayor",
    "origen": "examen",
    "explicacion": "Ante un adulto mayor solo, desnutrido y descuidado, el personal de salud debe brindar cuidado integral e integrado en la comunidad. Esto incluye evaluación nutricional, valoración geriátrica, atención de sus necesidades de salud y coordinación con redes de apoyo social. Es responsabilidad directa del equipo de salud."
  },
  {
    "pregunta": "En un establecimiento de salud de Apurímac, una puérpera inmediata le pide a la obstetra que su placenta le sea devuelta para seguir una tradición ancestral, a lo cual ella accede respetuosamente. Esto es un ejemplo de aplicación del enfoque ...... en salud materna.",
    "opciones": {
      "A": "intercultural",
      "B": "transcultural",
      "C": "incultural",
      "D": "acultural"
    },
    "id": 78,
    "respuesta": "A",
    "tema": "Ética - Interculturalidad",
    "origen": "examen",
    "explicacion": "Devolver la placenta a la puérpera para seguir una tradición ancestral es un ejemplo de aplicación del enfoque intercultural en salud materna. Respetar las prácticas culturales de la paciente sin que afecten su salud es parte de la interculturalidad, que promueve el diálogo y respeto mutuo entre el sistema de salud y las costumbres de la población."
  },
  {
    "pregunta": "La madre de familia asiste para su atención de CRED es atendida por el profesional de salud registrando datos del procedimiento en la historia clínica, se percata del error en el registro. la corrección se debe hacer trazando una ...... sobre el mismo y escribiendo el término correcto por encima de la línea, anotando la fecha, firma y sello de la persona responsable de la corrección.",
    "opciones": {
      "A": "doble línea azul",
      "B": "línea punteada de cualquier color",
      "C": "línea con lapicero rojo",
      "D": "línea con corrector"
    },
    "id": 79,
    "respuesta": "C",
    "tema": "Gestión - Historia clínica",
    "origen": "examen",
    "explicacion": "Según la norma técnica de historia clínica, la corrección de errores se realiza trazando una línea con lapicero rojo sobre el texto erróneo, escribiendo el término correcto por encima, y anotando fecha, firma y sello del responsable. Nunca se usa corrector líquido ni se borra, ya que la historia clínica es un documento médico-legal."
  },
  {
    "pregunta": "¿Cuál es el indicador del estándar de atención de calidad que evita el desperdicio de recursos, incluidos equipos, medicamentos, energía e ideas?",
    "opciones": {
      "A": "Efectividad",
      "B": "Eficiencia",
      "C": "Oportunidad",
      "D": "Eficacia"
    },
    "id": 80,
    "respuesta": "B",
    "tema": "Gestión - Calidad de servicios de salud",
    "origen": "examen",
    "explicacion": "La eficiencia es el indicador de calidad que evita el desperdicio de recursos (equipos, medicamentos, energía, ideas), logrando los mejores resultados con el menor uso de recursos posible. Se diferencia de la eficacia (lograr el objetivo) y la efectividad (lograr el objetivo en condiciones reales)."
  },
  {
    "pregunta": "El hospital regional de Amazonas, ante un caso de gestante de 28 semanas con diagnóstico de espina bífida, solicita una ….... a los médicos especialistas del Instituto Materno Perinatal, con el fin de compartir recursos de información y conocimiento para la toma conjunta de decisiones.",
    "opciones": {
      "A": "telegestión",
      "B": "telemonitoreo",
      "C": "teleconsultoría",
      "D": "telejuntamédica"
    },
    "id": 81,
    "respuesta": "D",
    "tema": "Gestión - Telesalud",
    "origen": "examen",
    "explicacion": "La telejuntamédica es la modalidad de telesalud donde médicos de diferentes establecimientos comparten recursos de información y conocimiento para la toma conjunta de decisiones sobre un caso complejo. Se diferencia de la teleconsultoría (asesoría técnica) y el telemonitoreo (seguimiento de parámetros clínicos)."
  },
  {
    "pregunta": "Al realizar la inducción a profesionales del SERUMS 2025-II del establecimiento de salud; se les capacita sobre los principios, tecnologías y prácticas de contención que se implementan en el establecimiento para prevenir la exposición no intencional a agentes biológicos. ¿A qué corresponde esta definición?",
    "opciones": {
      "A": "Bioseguridad",
      "B": "Buenas prácticas",
      "C": "Probabilidad de incidente",
      "D": "Medidas de control"
    },
    "id": 82,
    "respuesta": "A",
    "tema": "Salud Pública - Bioseguridad",
    "origen": "examen",
    "explicacion": "La bioseguridad es el conjunto de principios, tecnologías y prácticas de contención implementadas para prevenir la exposición no intencional a agentes biológicos. Incluye normas, protocolos y procedimientos que protegen al personal de salud y a los pacientes de riesgos biológicos en el establecimiento."
  },
  {
    "pregunta": "El profesional de salud del establecimiento en el análisis de situación de salud local obtiene una información base al inicio de un nuevo ciclo de planificación, para respaldar decisiones del nivel local. Esta información es aplicada por los equipos de...",
    "opciones": {
      "A": "DISA.",
      "B": "planificación.",
      "C": "gestión.",
      "D": "intervención."
    },
    "id": 83,
    "respuesta": "C",
    "tema": "Salud Pública - ASIS",
    "origen": "examen",
    "explicacion": "La información base del ASIS local al inicio de un nuevo ciclo de planificación es aplicada por los equipos de gestión. Los equipos de gestión del establecimiento utilizan el ASIS como insumo para la toma de decisiones, la programación de intervenciones y la asignación de recursos a nivel local."
  },
  {
    "pregunta": "Se reporta un huayco con desborde de río que ha provocado inundación en la comunidad La Paz, afectando el sistema eléctrico y de agua potable. ¿Cuáles son las líneas de intervención en el marco de la vigilancia epidemiológica posterior a desastre?",
    "opciones": {
      "A": "Búsqueda de personas desaparecidas y damnificadas",
      "B": "Garantizar la atención psicológica a los afectados",
      "C": "Implementar un sistema de referencia comunal",
      "D": "Evaluación del riesgo potencial epidémico e implementación de la sala de situación de salud"
    },
    "id": 84,
    "respuesta": "D",
    "tema": "Salud Pública - Emergencias y desastres",
    "origen": "examen",
    "explicacion": "Las líneas de intervención en vigilancia epidemiológica posterior a desastre incluyen la evaluación del riesgo potencial epidémico (por contaminación de agua, hacinamiento, vectores) y la implementación de la sala de situación de salud para monitorear y tomar decisiones basadas en evidencia."
  },
  {
    "pregunta": "Madre de familia acude al establecimiento de salud con su hijo de 2 años 6 meses, para CRED, donde se le diagnostica anemia. ¿Qué número de controles de hemoglobina se llevará a cabo según su edad?",
    "opciones": {
      "A": "2",
      "B": "4",
      "C": "más de 5",
      "D": "3"
    },
    "id": 85,
    "respuesta": "B",
    "tema": "Cuidado Integral - Prevención y control de anemia",
    "origen": "examen",
    "explicacion": "En niños de 2 años 6 meses con diagnóstico de anemia, se realizan 4 controles de hemoglobina: al mes, a los 3 meses, a los 6 meses de iniciado el tratamiento y al finalizar. Esto permite evaluar la respuesta al tratamiento con hierro y ajustar la conducta terapéutica según la evolución."
  },
  {
    "pregunta": "En un centro de salud I-4 se presenta tres casos de endometritis en puérperas mediatas post parto normal en la sala de internamiento, de acuerdo a la investigación se observa que los materiales de atención de parto no estaban adecuadamente esterilizados. ¿A qué corresponde cada uno de estos eventos?",
    "opciones": {
      "A": "Infección puerperal",
      "B": "Infección intrahospitalaria",
      "C": "IAAS",
      "D": "Brote de endometritis"
    },
    "id": 86,
    "respuesta": "C",
    "tema": "Cuidado Integral - IAAS",
    "origen": "examen",
    "explicacion": "Cada caso de endometritis corresponde a una IAAS (Infección Asociada a la Atención de Salud), ya que la infección se adquirió durante la atención del parto en el establecimiento, vinculada a materiales inadecuadamente esterilizados. IAAS es el término actual que reemplaza a 'infección intrahospitalaria'."
  },
  {
    "pregunta": "¿Cuál es el tipo de gestión que se encarga de planificar, organizar, dirigir y controlar las actividades de trabajo de manera transversal y secuencial en las diferentes unidades de organización?",
    "opciones": {
      "A": "Por procesos",
      "B": "Por objetivos",
      "C": "Orientada a resultados",
      "D": "De la calidad"
    },
    "id": 87,
    "respuesta": "A",
    "tema": "Gestión - Administración de servicios",
    "origen": "examen",
    "explicacion": "La gestión por procesos planifica, organiza, dirige y controla las actividades de manera transversal y secuencial en las diferentes unidades de organización. Se enfoca en los flujos de trabajo que atraviesan la estructura organizacional, a diferencia de la gestión por objetivos (metas) o por resultados (impacto)."
  },
  {
    "pregunta": "¿Cómo se denomina a la metodología orientada a facilitar el acuerdo y la articulación entre representantes del sistema de salud, medicina tradicional y popular permitiendo un mutuo aprendizaje, especialmente con los pueblos indígenas y las poblaciones afroperuanas?",
    "opciones": {
      "A": "Medicina tradicional",
      "B": "Diálogo intercultural en salud",
      "C": "Medicina popular",
      "D": "Salud intercultural"
    },
    "id": 88,
    "respuesta": "B",
    "tema": "Ética - Interculturalidad",
    "origen": "examen",
    "explicacion": "El Diálogo Intercultural en Salud (DIS) es la metodología orientada a facilitar el acuerdo y articulación entre representantes del sistema de salud, medicina tradicional y popular, permitiendo un mutuo aprendizaje con pueblos indígenas y poblaciones afroperuanas. Es una herramienta participativa que promueve el respeto mutuo."
  },
  {
    "pregunta": "Profesional de la salud requiere implementar estrategias para que su establecimiento reduzca al mínimo el impacto ambiental negativo en el área de hospitalización. ¿Cuál de las siguientes debe implementar primero?",
    "opciones": {
      "A": "Control",
      "B": "Capacitación",
      "C": "Supervisión",
      "D": "Monitoreo"
    },
    "id": 89,
    "respuesta": "B",
    "tema": "Salud Comunitaria - Determinantes ambientales",
    "origen": "examen",
    "explicacion": "La capacitación es la primera estrategia a implementar para reducir el impacto ambiental negativo. Antes de controlar, supervisar o monitorear, el personal debe conocer los procedimientos correctos de manejo ambiental. Sin capacitación previa, las demás acciones no serán efectivas."
  },
  {
    "pregunta": "¿Cuáles son los cuatro determinantes de salud que introduce Marc Lalonde que orientan las políticas de salud?",
    "opciones": {
      "A": "Medio ambiente, interculturalidad, nivel de salud y cuidado sanitario",
      "B": "Entorno físico-social, estilos de vida, nivel de salud y cuidado sanitario",
      "C": "Entorno socio-económico, estilos de vida, nivel de educación y cuidado sanitario",
      "D": "Medio ambiente, estilos de vida, biología humana y atención sanitaria"
    },
    "id": 90,
    "respuesta": "D",
    "tema": "Salud Comunitaria - Determinantes sociales",
    "origen": "examen",
    "explicacion": "Los cuatro determinantes de salud de Marc Lalonde (1974) son: medio ambiente, estilos de vida, biología humana y atención sanitaria. Este modelo fue pionero en demostrar que la atención sanitaria no es el único ni el principal determinante de la salud poblacional, siendo los estilos de vida el factor con mayor impacto."
  },
  {
    "pregunta": "En situaciones de emergencia y desastres, el equipo de salud debe implementar una metodología eficaz para determinar las necesidades prioritarias de intervención, que permita el ...... de las operaciones de un hospital, así como las necesidades de refuerzo o de reconstrucción.",
    "opciones": {
      "A": "financiamiento",
      "B": "reclutamiento de brigadistas",
      "C": "contrato de expertos",
      "D": "diagnóstico temprano"
    },
    "id": 91,
    "respuesta": "D",
    "tema": "Salud Pública - Emergencias y desastres",
    "origen": "examen",
    "explicacion": "En emergencias y desastres, se debe implementar una metodología que permita el diagnóstico temprano de las operaciones del hospital, evaluando su funcionalidad y determinando necesidades de refuerzo o reconstrucción. Esto permite priorizar intervenciones y asignar recursos de manera eficiente."
  },
  {
    "pregunta": "El médico serumista, al llegar a su establecimiento de salud, organiza y coordina con diferentes lideres de su comunidad: talleres de lavado e higiene de manos para adoptar estilos de vida saludables para prevenir ETAs. ¿A qué corresponden estas acciones?",
    "opciones": {
      "A": "Promoción de la salud",
      "B": "Control de riesgo",
      "C": "Prevención del daño",
      "D": "Higiene sanitaria"
    },
    "id": 92,
    "respuesta": "A",
    "tema": "Salud Pública - Promoción de la salud",
    "origen": "examen",
    "explicacion": "Organizar talleres de lavado e higiene de manos con líderes comunitarios para adoptar estilos de vida saludables corresponde a promoción de la salud. La promoción busca empoderar a la comunidad para que adopte prácticas saludables, a diferencia de la prevención que se enfoca en evitar enfermedades específicas."
  },
  {
    "pregunta": "¿Cuándo se debe vacunar contra la varicela post exposición y control de brotes a las personas inmunocompetentes susceptibles (pacientes acompañantes y personal de salud)?",
    "opciones": {
      "A": "Dentro de los primeros 4 días de producido el contacto con el caso",
      "B": "Dentro de la semana de producido el contacto con el caso",
      "C": "Dentro de las primeras 72 horas de producido el contacto con el caso",
      "D": "No pasar del 5 día de producido el contacto con el caso"
    },
    "id": 93,
    "respuesta": "C",
    "tema": "Cuidado Integral - Vacunación y ESAVI",
    "origen": "examen",
    "explicacion": "La vacunación post-exposición contra varicela debe realizarse dentro de las primeras 72 horas (3 días) del contacto con el caso. Aplicada en este plazo, puede prevenir la enfermedad o reducir su severidad, ya que el periodo de incubación de la varicela (14-21 días) permite que la vacuna genere anticuerpos a tiempo."
  },
  {
    "pregunta": "El personal de salud del establecimiento realiza la evaluación de riesgo cardiovascular a un joven de 26 años; obteniendo un riesgo alto según tabla. ¿Mediante qué procedimiento se obtuvo la valoración del riesgo?",
    "opciones": {
      "A": "Glucometría",
      "B": "Perímetro abdominal",
      "C": "IMC",
      "D": "Dosaje de TSH"
    },
    "id": 94,
    "respuesta": "B",
    "tema": "Cuidado Integral - Enfermedades no transmisibles",
    "origen": "examen",
    "explicacion": "El perímetro abdominal es el procedimiento utilizado para valorar el riesgo cardiovascular en jóvenes. Un perímetro abdominal elevado indica obesidad central, que es un factor de riesgo independiente para enfermedades cardiovasculares, diabetes tipo 2 e hipertensión arterial."
  },
  {
    "pregunta": "El profesional de salud coordina actividades con la comunidad quechua hablante, estrategias de atención basadas en valores principios, derechos y respeto a la diferencia y la diversidad cultural, el objetivo es lograr el entendimiento, comprensión del sistema de salud y la medicina tradicional. Este enunciado corresponde a:",
    "opciones": {
      "A": "Diálogo intercultural",
      "B": "Agenda de salud",
      "C": "Actores sociales",
      "D": "Acuerdo de salud"
    },
    "id": 95,
    "respuesta": "A",
    "tema": "Ética - Interculturalidad",
    "origen": "examen",
    "explicacion": "El diálogo intercultural corresponde a la coordinación de actividades con la comunidad quechua hablante basadas en valores, principios, derechos y respeto a la diversidad cultural, con el objetivo de lograr el entendimiento y comprensión entre el sistema de salud y la medicina tradicional."
  },
  {
    "pregunta": "Madre recibe visita domiciliaria por su enfermera sectorista, quien observa que a su niña de 7 meses la está alimentando con el caldito de su mismo plato; por lo que pide a la madre un plato pequeño y le demuestra como debe ser la alimentación de su niña con los mismos alimentos de su olla. ¿Cuáles son las recomendaciones de alimentación complementaria?",
    "opciones": {
      "A": "Alimentos picados, 1/4 de plato mediano, 2 veces al día",
      "B": "Consistencia tipo puré, 1 a 2 cucharadas y 2 veces al día",
      "C": "Consistencia papilla aguadita, 1/2 plato mediano, 5 veces al día",
      "D": "Consistencia tipo puré, 3 a 5 cucharadas y de 2 a 3 veces al día"
    },
    "id": 96,
    "respuesta": "D",
    "tema": "Cuidado Integral - Alimentación y nutrición",
    "origen": "examen",
    "explicacion": "Para una niña de 7 meses, la alimentación complementaria debe ser de consistencia tipo puré espeso, 3 a 5 cucharadas y de 2 a 3 veces al día. Los alimentos picados corresponden a edades mayores (9-11 meses). La clave es que no se debe dar solo calditos sino alimentos espesos y nutritivos."
  },
  {
    "pregunta": "En el 2026 el Centro de Salud \"Palca\" será líder en la atención primaria en salud con calidad, calidez, equidad y eficiencia, logrando usuarios internos y externos satisfechos para conseguir estilos de vida saludables. Esto constituye la ...... de la institución.",
    "opciones": {
      "A": "meta",
      "B": "misión",
      "C": "estrategia",
      "D": "visión"
    },
    "id": 97,
    "respuesta": "D",
    "tema": "Gestión - Planeamiento estratégico",
    "origen": "examen",
    "explicacion": "El enunciado describe la visión de la institución: una imagen aspiracional del futuro deseado que orienta el accionar del establecimiento. 'En el 2026 será líder en atención primaria con calidad, calidez, equidad y eficiencia' es una declaración de visión que inspira y guía a la organización."
  },
  {
    "pregunta": "Adolescente de 15 años acude al establecimiento porque el día anterior tuvo un contacto sexual de riesgo y tiene dudas y miedos. ¿Cómo se debe abordar la atención en el marco de la atención integral?",
    "opciones": {
      "A": "Se le refiere al consultorio de psicología",
      "B": "Atender el motivo de consulta y darle la atención que requiere",
      "C": "Elaborar su plan de atención integral",
      "D": "Se le indica que retorne con su tutor para su atención"
    },
    "id": 98,
    "respuesta": "B",
    "tema": "Cuidado Integral - Paquete del adolescente",
    "origen": "examen",
    "explicacion": "Ante un adolescente con contacto sexual de riesgo reciente, se debe atender el motivo de consulta y darle la atención que requiere: evaluación de ITS, anticoncepción de emergencia si corresponde, consejería y soporte emocional. No se debe postergar ni derivar sin antes abordar la necesidad inmediata del paciente."
  },
  {
    "pregunta": "La mayor dificultad que afrontan los estados en lo concerniente a cuestiones normativas relacionadas con la práctica de la medicina tradicional y complementaria. Es la falta de...",
    "opciones": {
      "A": "control y reglamentación a productos herbarios.",
      "B": "apoyo financiero a la investigación.",
      "C": "datos de investigación.",
      "D": "mecanismos para controlar y reglamentar publicidad."
    },
    "id": 99,
    "respuesta": "C",
    "tema": "Ética - Medicina tradicional",
    "origen": "examen",
    "explicacion": "La mayor dificultad que afrontan los estados en cuestiones normativas de medicina tradicional y complementaria es la falta de datos de investigación. Sin evidencia científica suficiente, no se pueden establecer regulaciones adecuadas sobre seguridad, eficacia y calidad de las prácticas y productos de medicina tradicional."
  },
  {
    "pregunta": "El reporte de la última vigilancia vectorial del Aedes aegypti en una comunidad es IA=3, por lo que el personal programa el control focal al 100% de viviendas; esta actividad debe promover la participación de la comunidad en el control larvario físico / mecánico, que consiste en:",
    "opciones": {
      "A": "Uso de larvicida al 100% de viviendas con potenciales criaderos",
      "B": "Control biológico y uso de larvicida en viviendas con criaderos positivos",
      "C": "Cepillar y tapar recipientes de agua y eliminar o disponer adecuadamente los potenciales criaderos",
      "D": "Nebulización espacial y eliminación de criaderos en coordinación con las autoridades"
    },
    "id": 100,
    "respuesta": "C",
    "tema": "Salud Comunitaria - Control de vectores",
    "origen": "examen",
    "explicacion": "El control larvario físico/mecánico consiste en cepillar y tapar recipientes de agua y eliminar o disponer adecuadamente los potenciales criaderos del Aedes aegypti. Es una actividad que promueve la participación comunitaria. El uso de larvicida es control químico, no físico/mecánico."
  },
  {
    "pregunta": "Personal de salud del P.S. Inmaculada toma conocimiento de un parto domiciliario, al acudir al domicilio, se trata de un recién nacido con peso de 2800 g, edad gestacional 39 semanas y sin malformación congénita; a la evaluación se encuentra hipotonía, llanto débil; es llevado al establecimiento de salud y fallece en el trayecto. ¿A qué tipo de muerte corresponde?",
    "opciones": {
      "A": "Neonatal evitable",
      "B": "Por aspiración meconial",
      "C": "Perinatal por asfixia",
      "D": "Súbita del recién nacido"
    },
    "id": 101,
    "respuesta": "A",
    "tema": "Cuidado Integral - Paquete del niño",
    "origen": "examen",
    "explicacion": "Es una muerte neonatal evitable porque el recién nacido tenía peso adecuado (2800g), edad gestacional a término (39 sem) y sin malformaciones. La hipotonía y llanto débil sugieren asfixia perinatal por parto domiciliario sin atención calificada. Con atención institucional oportuna, este desenlace pudo haberse prevenido."
  },
  {
    "pregunta": "Madre quechua hablante de 30 años, tiene niño de un año con diarrea y deshidratación; ella niega su atención en el establecimiento de salud, porque según su creencia el caso corresponde a “susto” y lo debe atender el curandero. ¿Cómo procedes ante este caso?",
    "opciones": {
      "A": "Llegas a un acuerdo en la terapia del niño, respetando sus creencias",
      "B": "Discrepas con su decisión porque no es correcto",
      "C": "Solicitar presidente de la comunidad que intervenga",
      "D": "Constatar con la policía y autoridad comunal"
    },
    "id": 102,
    "respuesta": "A",
    "tema": "Ética - Interculturalidad",
    "origen": "examen",
    "explicacion": "El enfoque intercultural exige llegar a un acuerdo terapéutico respetando las creencias de la madre. Se puede negociar que el niño reciba tratamiento médico para la deshidratación y también sea atendido por el curandero. Imponer, discrepar o recurrir a autoridades genera rechazo y aleja a la familia del sistema de salud."
  },
  {
    "pregunta": "Si se orienta la formulación y actualización de las políticas y los planes en todos los niveles del gobierno, se refiere a ...…, a las cuales debe alinear sus objetivos operativos.",
    "opciones": {
      "A": "organizaciones institucionales",
      "B": "acciones institucionales",
      "C": "desarrollos institucionales",
      "D": "estrategias institucionales"
    },
    "id": 103,
    "respuesta": "D",
    "tema": "Gestión - Planeamiento estratégico",
    "origen": "examen",
    "explicacion": "Las estrategias institucionales orientan la formulación y actualización de políticas y planes en todos los niveles de gobierno. Los objetivos operativos de cada entidad deben alinearse a estas estrategias para garantizar coherencia entre la planificación estratégica y la ejecución operativa."
  },
  {
    "pregunta": "¿Cuál es el tipo de prevención cuyo objetivo es disminuir el avance y las complicaciones de la enfermedad establecida, mediante acciones orientadas a disminuir las secuelas y la discapacidad?",
    "opciones": {
      "A": "Secundaria",
      "B": "Primaria",
      "C": "Terciaria",
      "D": "Cuaternaria"
    },
    "id": 104,
    "respuesta": "C",
    "tema": "Salud Pública - Niveles de prevención",
    "origen": "examen",
    "explicacion": "La prevención terciaria busca disminuir el avance y complicaciones de una enfermedad ya establecida, reduciendo secuelas y discapacidad. Incluye rehabilitación y reinserción social. La secundaria detecta precozmente, la primaria evita la enfermedad y la cuaternaria evita intervenciones médicas innecesarias."
  },
  {
    "pregunta": "La enfermera Elizabeth al realizar sus intervenciones de promoción de la salud en el primer nivel de atención, en el programa de control de tuberculosis. ¿Qué acción debe realizar?",
    "opciones": {
      "A": "Estudio de contactos",
      "B": "Implementación de actividades con los agentes comunitarios de salud",
      "C": "Medidas de bioseguridad",
      "D": "Tamizaje sistemático de tuberculosis (búsqueda pasiva)"
    },
    "id": 105,
    "respuesta": "B",
    "tema": "Cuidado Integral - Tuberculosis",
    "origen": "examen",
    "explicacion": "Las intervenciones de promoción de la salud en TB incluyen la implementación de actividades con agentes comunitarios de salud (ACS). Los ACS son el nexo entre la comunidad y el establecimiento, facilitando la búsqueda activa de sintomáticos respiratorios, educación sanitaria y seguimiento de pacientes en tratamiento."
  },
  {
    "pregunta": "La ética en la función pública no se queda en la teoría (reflexión), sino que debe llevarse a la práctica para tener un adecuado desempeño laboral. Como profesional de salud ante un caso de un diagnóstico que es confidencial, por el tipo de enfermedad. ¿Qué principios éticos debe cumplirse?",
    "opciones": {
      "A": "Respeto, probidad y eficiencia",
      "B": "Veracidad, lealtad, eficiencia",
      "C": "Respeto y atención diferenciada",
      "D": "Silencio, manejo de la información"
    },
    "id": 106,
    "respuesta": "A",
    "tema": "Ética - Función pública",
    "origen": "examen",
    "explicacion": "Ante un diagnóstico confidencial, los principios éticos a cumplir son: respeto (a la dignidad y privacidad del paciente), probidad (actuar con honestidad e integridad) y eficiencia (manejar la información de manera adecuada). Estos tres principios garantizan una atención ética y profesional."
  },
  {
    "pregunta": "Para elaborar los planos de un futuro establecimiento de salud I-3, se reúne el equipo de salud. ¿Qué ambiente es necesario según normativa?",
    "opciones": {
      "A": "Depósito y lavado de carros",
      "B": "Zona de selección de residuos sólidos",
      "C": "Área de internamiento",
      "D": "Zona de almacenamiento de residuos contaminados"
    },
    "id": 107,
    "respuesta": "B",
    "tema": "Gestión - Clasificación de establecimientos",
    "origen": "examen",
    "explicacion": "Para un establecimiento de salud I-3, según normativa, es necesario contar con una zona de selección de residuos sólidos. El I-3 no tiene internamiento (eso es I-4), por lo que no requiere depósito de carros ni área de internamiento. La zona de selección permite la segregación adecuada de los residuos generados."
  },
  {
    "pregunta": "En el informe final de su investigación sobre ansiedad en estudiantes de secundaria, requiere compartir la descripción del instrumento de screening de ansiedad utilizado, su validez y confiabilidad. ¿En qué sección de su informe debe incluirla?",
    "opciones": {
      "A": "Marco teórico",
      "B": "Metodología",
      "C": "Resultados",
      "D": "Introducción"
    },
    "id": 108,
    "respuesta": "B",
    "tema": "Investigación - Metodología",
    "origen": "examen",
    "explicacion": "La descripción del instrumento utilizado, su validez y confiabilidad se incluyen en la sección de Metodología del informe de investigación. Esta sección detalla cómo se realizó el estudio: diseño, población, muestra, instrumentos de recolección de datos y procedimientos."
  },
  {
    "pregunta": "En la enfermedad de la Tuberculosis, la presencia del agente infeccioso (Mycobacterium tuberculosis), corresponde a una causa...",
    "opciones": {
      "A": "necesaria pero no suficiente.",
      "B": "necesaria y suficiente.",
      "C": "no necesaria pero suficiente.",
      "D": "de tipo ambiental."
    },
    "id": 109,
    "respuesta": "A",
    "tema": "Salud Pública - Causalidad y riesgo",
    "origen": "examen",
    "explicacion": "El Mycobacterium tuberculosis es causa necesaria pero no suficiente para desarrollar TB. Es necesaria porque sin el bacilo no hay enfermedad, pero no es suficiente porque no todos los infectados enferman; se requieren otros factores como inmunosupresión, desnutrición o hacinamiento para que la infección progrese a enfermedad."
  },
  {
    "pregunta": "¿Cuál es el esquema de suplementación preventiva con hierro a un lactante con bajo peso al nacer y/o prematuro?",
    "opciones": {
      "A": "Inicia a los 30 días de nacido hasta los 6 meses, 4 mg/Kg/día",
      "B": "Inicia a los 2 meses de nacido hasta los 5 meses con 29 días, 2 mg/Kg/día",
      "C": "Inicia a los 30 días de nacido hasta los 5 meses con 29 días, 2 mg/Kg/día",
      "D": "Inicia a los 4 meses días de nacido hasta los 6 meses, 2 mg/Kg/día"
    },
    "id": 110,
    "respuesta": "C",
    "tema": "Cuidado Integral - Prevención y control de anemia",
    "origen": "examen",
    "explicacion": "En lactantes con bajo peso al nacer y/o prematuros, la suplementación preventiva con hierro inicia a los 30 días de nacido hasta los 5 meses con 29 días, a dosis de 2 mg/Kg/día. Se inicia más temprano que en niños a término (que inician a los 4 meses) porque sus reservas de hierro son menores."
  },
  {
    "pregunta": "Para medir el riesgo de una enfermedad en la comunidad, se utilizan medidas de morbilidad como la incidencia que mide la ……. y la prevalencia que mide la …… de la enfermedad.",
    "opciones": {
      "A": "virulencia / frecuencia",
      "B": "casos antiguos / casos nuevos",
      "C": "proporción / frecuencia",
      "D": "velocidad / magnitud"
    },
    "id": 111,
    "respuesta": "D",
    "tema": "Salud Pública - Epidemiología",
    "origen": "examen",
    "explicacion": "La incidencia mide la velocidad de aparición de casos nuevos de una enfermedad en una población, y la prevalencia mide la magnitud o frecuencia total de la enfermedad (casos nuevos + existentes) en un momento o periodo determinado."
  },
  {
    "pregunta": "Luego de la recolección y procesamiento de datos de su estudio para investigar si hay asociación entre el alcoholismo y la violencia familiar en adultos varones de su comunidad. ¿Qué análisis estadístico llevará a cabo?",
    "opciones": {
      "A": "Inductivo",
      "B": "Probabilístico",
      "C": "Descriptivo",
      "D": "Inferencial"
    },
    "id": 112,
    "respuesta": "D",
    "tema": "Investigación - Procesamiento y análisis de datos",
    "origen": "examen",
    "explicacion": "Para investigar si hay asociación entre alcoholismo y violencia familiar se requiere análisis estadístico inferencial. Este tipo de análisis permite probar hipótesis y determinar si existe relación significativa entre variables, generalizando los resultados de la muestra a la población. El descriptivo solo caracteriza los datos sin buscar asociaciones."
  },
  {
    "pregunta": "Un servidor público, brinda información de un diagnóstico médico, a personas de la comunidad. ¿Qué principio ético esta vulnerando?",
    "opciones": {
      "A": "Individualidad",
      "B": "Confidencialidad",
      "C": "Respeto",
      "D": "Seguridad"
    },
    "id": 113,
    "respuesta": "C",
    "tema": "Ética - Función pública",
    "origen": "examen",
    "explicacion": "Al brindar información de un diagnóstico médico a personas de la comunidad, el servidor público vulnera el principio de respeto, que incluye respetar la dignidad, privacidad y confidencialidad del paciente. La información médica es personal y no debe divulgarse sin autorización del paciente."
  },
  {
    "pregunta": "En un estudio sobre la depresión en adolescentes en su comunidad, aplica un instrumento de detección de depresión en estudiantes de 5° año de secundaria de un colegio cercano al establecimiento. ¿Qué tipo de muestreo está realizando?",
    "opciones": {
      "A": "Probabilístico",
      "B": "Estadístico",
      "C": "No probabilístico",
      "D": "Censal"
    },
    "id": 114,
    "respuesta": "C",
    "tema": "Investigación - Metodología",
    "origen": "examen",
    "explicacion": "Al aplicar el instrumento a estudiantes de 5° año de un colegio cercano al establecimiento, se está realizando un muestreo no probabilístico por conveniencia. La selección del colegio por cercanía y de un grupo específico (5° año) no sigue un proceso aleatorio, por lo que no es probabilístico."
  },
  {
    "pregunta": "¿Cuál es la medida de tendencia central que se interpreta como el promedio de los datos, y se construye con la suma de todos los datos observados entre el total de observaciones?",
    "opciones": {
      "A": "Rango",
      "B": "Media",
      "C": "Mediana",
      "D": "Moda"
    },
    "id": 115,
    "respuesta": "B",
    "tema": "Investigación - Procesamiento y análisis de datos",
    "origen": "examen",
    "explicacion": "La media aritmética es la medida de tendencia central que se calcula sumando todos los datos observados y dividiendo entre el total de observaciones. Es el promedio de los datos. La mediana es el valor central, la moda es el valor más frecuente y el rango es la diferencia entre máximo y mínimo."
  },
  {
    "pregunta": "En el consultorio de crecimiento y desarrollo del puesto de salud Mariátegui, una mamita primeriza refiere que su niño es prematuro, estuvo con el método canguro, actualmente su hijo tiene un mes de edad. Usted debe realizar su atención de CRED según su edad. ¿Cómo debe programar sus siguientes controles?",
    "opciones": {
      "A": "Semanalmente hasta los 6 meses de edad",
      "B": "Semanalmente hasta los 3 meses de edad",
      "C": "Cada 15 días hasta los 3 meses de edad",
      "D": "Cada 15 días hasta los 6 meses de edad"
    },
    "id": 116,
    "respuesta": "B",
    "tema": "Cuidado Integral - Paquete del niño",
    "origen": "examen",
    "explicacion": "Los niños prematuros que estuvieron con método canguro deben tener controles CRED semanales hasta los 3 meses de edad, debido a su mayor vulnerabilidad y necesidad de seguimiento estrecho del crecimiento, desarrollo, alimentación y detección temprana de complicaciones."
  },
  {
    "pregunta": "El análisis de la situación actual es una fase del planeamiento estratégico. ¿En qué fase del ciclo se encuentra?",
    "opciones": {
      "A": "3",
      "B": "1",
      "C": "4",
      "D": "2"
    },
    "id": 117,
    "respuesta": "B",
    "tema": "Gestión - Planeamiento estratégico",
    "origen": "examen",
    "explicacion": "El análisis de la situación actual corresponde a la fase 1 del ciclo de planeamiento estratégico según CEPLAN: conocimiento integral de la realidad. Esta fase permite diagnosticar el estado actual de la organización y su entorno como base para la planificación."
  },
  {
    "pregunta": "Debido a que se observaron muchos casos de suicidios en adolescentes en la comunidad donde usted labora, le encargan realizar un estudio descriptivo sobre la depresión en adolescentes en su comunidad ¿Cuál será la principal limitante del estudio?",
    "opciones": {
      "A": "No permitirá hallar asociación de variables",
      "B": "Demandará costos económicos muy elevados",
      "C": "El análisis estadístico será muy complejo",
      "D": "Sus resultados no serán extrapolables"
    },
    "id": 118,
    "respuesta": "A",
    "tema": "Investigación - Tipos de investigación",
    "origen": "examen",
    "explicacion": "La principal limitante de un estudio descriptivo es que no permitirá hallar asociación de variables. Los estudios descriptivos solo caracterizan la distribución de una variable en una población, pero no pueden establecer relaciones causales ni asociaciones entre variables. Para eso se requieren estudios analíticos."
  },
  {
    "pregunta": "Se reportan 2 casos de peste en el hospital y se ha restringido el ingreso. Los casos son de la comunidad y no se sabe si hay más casos. ¿Cuál es la medida inicial a tomar?",
    "opciones": {
      "A": "Medidas de control químico de pulgas",
      "B": "Medidas de bioseguridad e identificar las casas de infectados",
      "C": "Control de roedores",
      "D": "Ordenamiento ambiental"
    },
    "id": 119,
    "respuesta": "B",
    "tema": "Salud Pública - Prevención y control de infecciones",
    "origen": "examen",
    "explicacion": "Ante casos de peste, la medida inicial es implementar medidas de bioseguridad e identificar las casas de los infectados. Esto permite proteger al personal de salud, aislar los casos y delimitar el área afectada para luego implementar las medidas de control vectorial (pulgas y roedores)."
  },
  {
    "pregunta": "En relación al almacenamiento de medicamentos: “Las condiciones de almacenamiento deben ser las recomendadas por el …… y autorizadas en el rotulado del producto, pudiendo ser de congelación, temperatura de refrigeración, temperatura ambiente y temperatura ambiente controlada, lo cual debe estar indicado en su procedimiento …… de almacenamiento.”",
    "opciones": {
      "A": "director / organizativo",
      "B": "farmacéutico / rutinario",
      "C": "fabricante / operativo",
      "D": "jefe / establecido"
    },
    "id": 120,
    "respuesta": "C",
    "tema": "Gestión - Control de inventario y medicamentos",
    "origen": "examen",
    "explicacion": "Las condiciones de almacenamiento de medicamentos deben ser las recomendadas por el fabricante y autorizadas en el rotulado del producto, siguiendo el procedimiento operativo de almacenamiento. El fabricante establece las condiciones óptimas de conservación según las características del producto."
  },
  {
    "pregunta": "Usted se entera que en un EESS administraron una medicación que produjo un daño discapacitante en un paciente. ¿Qué medida inmediata hubiera tomado para manejar esta situación?",
    "opciones": {
      "A": "Medidas de mejora en el EESS",
      "B": "Notificarlo al nivel inmediato superior",
      "C": "Informar a los familiares",
      "D": "Mejorar el proceso de atención sanitaria en EESS"
    },
    "id": 121,
    "respuesta": "B",
    "tema": "Gestión - Calidad de servicios de salud",
    "origen": "examen",
    "explicacion": "Ante un evento adverso grave (daño discapacitante por medicación), la medida inmediata es notificarlo al nivel inmediato superior. La notificación permite activar los mecanismos de investigación, farmacovigilancia y toma de decisiones para proteger a otros pacientes y corregir el problema."
  },
  {
    "pregunta": "¿Qué se define como la forma característica de pensar y hacer las cosas en una entidad, en base a principios, valores, creencias, conductas y normas?",
    "opciones": {
      "A": "Clima organizacional",
      "B": "Principios institucionales",
      "C": "Valores institucionales",
      "D": "Cultura organizacional"
    },
    "id": 122,
    "respuesta": "D",
    "tema": "Gestión - Clima y cultura organizacional",
    "origen": "examen",
    "explicacion": "La cultura organizacional es la forma característica de pensar y hacer las cosas en una entidad, basada en principios, valores, creencias, conductas y normas compartidas. Es más profunda y estable que el clima organizacional, que refleja percepciones momentáneas del ambiente laboral."
  },
  {
    "pregunta": "Varón de 23 años, acude al establecimiento por morbilidad, el personal después de atender el motivo de consulta le oferta el paquete de atención integral para identificar precozmente los factores, conductas de riesgo y potenciales problemas de salud. ¿Cómo debe ejecutarse el Plan de Atención Integral?",
    "opciones": {
      "A": "1 año con 7 sesiones como mínimo",
      "B": "6 meses con 6 sesiones como mínimo",
      "C": "1 año con 12 sesiones",
      "D": "12 meses con 6 sesiones como mínimo"
    },
    "id": 123,
    "respuesta": "A",
    "tema": "Cuidado Integral - Paquete del joven",
    "origen": "examen",
    "explicacion": "El Plan de Atención Integral del joven (18-29 años) se ejecuta en 1 año con un mínimo de 7 sesiones. Estas sesiones cubren evaluación nutricional, tamizaje de enfermedades, consejería en salud sexual y reproductiva, salud mental, inmunizaciones y promoción de estilos de vida saludables."
  },
  {
    "pregunta": "El POI Multianual del Ministerio de Salud es ……, en el cual se establece la programación de metas físicas y de costeo que se espera alcanzar en los próximos tres años.",
    "opciones": {
      "A": "herramienta de gestión",
      "B": "instrumento de gestión",
      "C": "instrumento de articulación",
      "D": "herramienta de articulación"
    },
    "id": 124,
    "respuesta": "A",
    "tema": "Gestión - Planificación y Presupuesto",
    "origen": "examen",
    "explicacion": "El POI Multianual del MINSA es un instrumento de gestión en el cual se establece la programación de metas físicas y de costeo que se espera alcanzar en los próximos tres años. Articula el planeamiento estratégico con la programación presupuestal."
  },
  {
    "pregunta": "Mujer de 22 años víctima de violencia física, es derivada por la fiscalía para su atención integral en el establecimiento de salud. El área de psicología luego de la evaluación, inicia su plan de atención integral que constará de 10 sesiones. ¿Qué tipo de determinante social de la salud se está abordando?",
    "opciones": {
      "A": "Estructural",
      "B": "Comercial",
      "C": "Económico",
      "D": "Intermedio"
    },
    "id": 125,
    "respuesta": "C",
    "tema": "Salud Comunitaria - Determinantes sociales",
    "origen": "examen",
    "explicacion": "La violencia física contra la mujer corresponde a un determinante social estructural. Los determinantes estructurales incluyen las condiciones socioeconómicas, políticas, culturales y de género que generan desigualdades y afectan la salud. La violencia de género es resultado de estructuras sociales de poder desiguales."
  },
  {
    "pregunta": "La salud pública está afectada por sobrepoblación mundial, grandes conflictos políticos-sociales y la pobreza creciente; como consecuencia inicial de estos fenómenos. ¿Qué ocurre principalmente?",
    "opciones": {
      "A": "El aumento en la incidencia de enfermedades",
      "B": "Las crisis psicosociales",
      "C": "La aparición de enfermedades epidémicas",
      "D": "El surgimiento de nuevas enfermedades"
    },
    "id": 126,
    "respuesta": "A",
    "tema": "Salud Pública - Conceptos básicos",
    "origen": "examen",
    "explicacion": "La sobrepoblación, conflictos político-sociales y pobreza creciente generan como consecuencia inicial el aumento en la incidencia de enfermedades. Estas condiciones deterioran los determinantes sociales (alimentación, vivienda, saneamiento, acceso a servicios) favoreciendo la aparición de más casos de enfermedad."
  },
  {
    "pregunta": "La pertinencia cultural en los servicios de salud implica que durante todo el proceso de la atención se tome en cuenta las características de la población a la que se atiende, en función a su cultura y contexto social. Evaluando cuatro dimensiones: gestión para la calidad de la atención, revaloración del sistema de salud tradicional, recursos humanos que promueven la salud intercultural y la …",
    "opciones": {
      "A": "participación ciudadana.",
      "B": "inclusión social.",
      "C": "interculturalidad en salud.",
      "D": "atención intercultural."
    },
    "id": 127,
    "respuesta": "C",
    "tema": "Ética - Interculturalidad",
    "origen": "examen",
    "explicacion": "La pertinencia cultural evalúa cuatro dimensiones: gestión para la calidad de la atención, revaloración del sistema de salud tradicional, recursos humanos que promueven la salud intercultural y la interculturalidad en salud. Esta última dimensión garantiza la integración de los saberes tradicionales con el sistema de salud."
  },
  {
    "pregunta": "Al consultorio del Centro de Salud de Ocongate llegó el señor Mario de 66 años de edad para ser evaluado; se encuentra el técnico de enfermería capacitado para realizar la atención. ¿Qué tipo de valoración clínica del adulto mayor le debe realizar?",
    "opciones": {
      "A": "Completa",
      "B": "VGI",
      "C": "Corta",
      "D": "Breve"
    },
    "id": 128,
    "respuesta": "D",
    "tema": "Cuidado Integral - Paquete del adulto mayor",
    "origen": "examen",
    "explicacion": "La VACAM breve es la valoración clínica del adulto mayor que puede realizar el técnico de enfermería capacitado en el primer nivel de atención. Es una evaluación simplificada que permite identificar rápidamente problemas de salud y riesgos en el adulto mayor cuando no se dispone de profesional médico."
  },
  {
    "pregunta": "¿Cuál es un síntoma/signo que es considerado como riesgo para la detección de cáncer en niños y adolescentes?",
    "opciones": {
      "A": "Eritema con fiebre mayor a 14 días",
      "B": "Ictericia conjuntival y palmar",
      "C": "Pérdida de apetito o cansancio en los últimos 3 meses",
      "D": "Linfadenopatía no dolorosa con evolución de un año"
    },
    "id": 129,
    "respuesta": "C",
    "tema": "Cuidado Integral - Prevención y control del Cáncer",
    "origen": "examen",
    "explicacion": "La pérdida de apetito o cansancio en los últimos 3 meses es un signo de alarma para detección de cáncer en niños y adolescentes. Estos síntomas inespecíficos pero persistentes pueden indicar procesos neoplásicos como leucemias o linfomas, que son los cánceres más frecuentes en esta población."
  },
  {
    "pregunta": "El lunes 30 de marzo se apersonan a un puesto de salud de categoría I-3, 15 personas con vómitos y diarrea, quienes participaron en una pollada el día anterior. El caso es identificado como una Enfermedad Transmitida por Alimentos. ¿En qué momento se realiza la notificación epidemiológica del brote al nivel inmediato superior?",
    "opciones": {
      "A": "De manera inmediata",
      "B": "Cuando se reporta el VEA de la semana",
      "C": "Hasta las 48 horas",
      "D": "Al alta de los pacientes"
    },
    "id": 130,
    "respuesta": "A",
    "tema": "Salud Pública - Vigilancia epidemiológica",
    "origen": "examen",
    "explicacion": "La notificación epidemiológica de un brote de ETA (Enfermedad Transmitida por Alimentos) con 15 personas afectadas debe realizarse de manera inmediata al nivel superior. Los brotes requieren notificación inmediata para iniciar la investigación epidemiológica, identificar la fuente y prevenir más casos."
  },
  {
    "pregunta": "Puérpera mediata de parto normal en un establecimiento de salud I-4, se decide mantenerla en observación un día más por un leve incremento de la presión arterial; a la evaluación médica al día siguiente, presenta signos de endometritis. ¿A qué caso corresponde?",
    "opciones": {
      "A": "Mala práctica en la atención de parto",
      "B": "Infección concomitante",
      "C": "Deficiente higiene de la puérpera",
      "D": "Infección asociada a la atención de salud"
    },
    "id": 131,
    "respuesta": "D",
    "tema": "Cuidado Integral - IAAS",
    "origen": "examen",
    "explicacion": "La endometritis que aparece durante la hospitalización de la puérpera corresponde a una Infección Asociada a la Atención de Salud (IAAS). La infección no estaba presente al ingreso y se desarrolló durante la estancia hospitalaria, cumpliendo la definición de IAAS (aparece después de 48 horas de hospitalización)."
  },
  {
    "pregunta": "Gestante de 30 semanas, es atendida en establecimiento I-4, presenta signos compatibles con shock hipovolémico, el personal decide referir a un establecimiento de mayor complejidad. ¿Qué medidas incluyen el manejo durante su referencia?",
    "opciones": {
      "A": "Una vía de NaCl 9/00 catéter N° 16, Oxígeno a 3 litros x min, posición decúbito lateral",
      "B": "Dos vías de NaCl 9/00 catéter N° 18, Oxígeno a 3 litros x min, estimar pérdidas sanguíneas",
      "C": "Dos vías de NaCl 9/00 catéter N° 18, monitoreo de la dilatación, Oxígeno a 5 litros x min",
      "D": "Un catéter venoso central, monitoreo de funciones vitales, monitoreo de la dilatación"
    },
    "id": 132,
    "respuesta": "B",
    "tema": "Cuidado Integral - Emergencias obstétricas",
    "origen": "examen",
    "explicacion": "En shock hipovolémico obstétrico durante la referencia se requiere: dos vías de NaCl 9/00 con catéter N° 18 (grueso para reposición rápida de volumen), oxígeno a 3 litros por minuto y estimar pérdidas sanguíneas. Dos vías permiten infusión rápida de cristaloides para mantener la perfusión tisular."
  },
  {
    "pregunta": "Mujer de 40 años de la etnia Ashaninka, con diagnóstico de VIH, con tratamiento en establecimiento I-3, presenta infección oportunista y el personal sospecha de fracaso al tratamiento. ¿Cuál es la medida a seguir?",
    "opciones": {
      "A": "Reiniciar el tratamiento y tratar infecciones",
      "B": "Referir por la ley de emergencias",
      "C": "Darle tratamiento antibiótico y hacer seguimiento",
      "D": "Referir por consulta externa, previa coordinación"
    },
    "id": 133,
    "respuesta": "B",
    "tema": "Cuidado Integral - VIH",
    "origen": "examen",
    "explicacion": "Ante sospecha de fracaso al tratamiento antirretroviral con infección oportunista en un establecimiento I-3, la medida es darle tratamiento antibiótico para la infección oportunista y hacer seguimiento. Se debe tratar la infección actual mientras se evalúa la respuesta al tratamiento antirretroviral."
  },
  {
    "pregunta": "Después de brindar una atención por violencia sexual a una paciente de 13 años, se debe presentar un informe social, requerido por las autoridades del Poder Judicial. Si hay información que faltan a la verdad, está cometiendo actos en contra de:",
    "opciones": {
      "A": "Beneficencia",
      "B": "Ética",
      "C": "Justicia",
      "D": "Responsabilidad"
    },
    "id": 134,
    "respuesta": "B",
    "tema": "Ética - Bioética",
    "origen": "examen",
    "explicacion": "Presentar información falsa en un informe social requerido por el Poder Judicial es un acto contra la ética. La ética profesional exige veracidad en toda documentación, especialmente en informes médico-legales. Falsear información en un caso de violencia sexual a una menor constituye una falta ética grave con implicancias legales."
  },
  {
    "pregunta": "Es una actividad que se ejecuta dentro de las 72 horas de notificado un caso probable de una enfermedad prevenible por vacuna y consiste en completar dosis pendientes de vacunación; en zona rural en toda la comunidad o en zona urbana a 5 manzanas a la redonda del caso. ¿A qué actividad corresponde?",
    "opciones": {
      "A": "Campaña de seguimiento",
      "B": "Semana de vacunación de las Américas",
      "C": "Bloqueo vacunal",
      "D": "Jornada de vacunación de cierre de brechas"
    },
    "id": 135,
    "respuesta": "C",
    "tema": "Cuidado Integral - Vacunación y ESAVI",
    "origen": "examen",
    "explicacion": "El bloqueo vacunal se ejecuta dentro de las 72 horas de notificado un caso probable de enfermedad prevenible por vacuna. Consiste en completar dosis pendientes en zona rural (toda la comunidad) o urbana (5 manzanas a la redonda). Su objetivo es crear una barrera inmunológica que detenga la transmisión."
  },
  {
    "pregunta": "La ética sugiere aquello que es deseable y condena lo que no debe hacerse, mientras que la deontología cuenta con las herramientas administrativas para garantizar que la profesión se ejerza de manera ética. ¿Con qué debe contar un profesional de la salud para su ejercicio profesional?",
    "opciones": {
      "A": "Estudios de posgrado",
      "B": "Currículo vitae documentado",
      "C": "Título profesional, colegiatura",
      "D": "Diplomados"
    },
    "id": 136,
    "respuesta": "C",
    "tema": "Ética - Deontología",
    "origen": "examen",
    "explicacion": "La deontología profesional exige que todo profesional de salud cuente con título profesional y colegiatura vigente para ejercer. Estos son los requisitos administrativos mínimos que garantizan la formación académica y el compromiso ético del profesional ante su colegio profesional y la sociedad."
  },
  {
    "pregunta": "La promoción de la salud se define como la acción de ofrecer a los pueblos las vías y los medios suficientes para …… los problemas de salud y autocontrolar el proceso de salud-enfermedad.",
    "opciones": {
      "A": "restringir o acortar",
      "B": "diferir o mitigar",
      "C": "atenuar o eliminar",
      "D": "controlar o mantener"
    },
    "id": 137,
    "respuesta": "C",
    "tema": "Salud Pública - Promoción de la salud",
    "origen": "examen",
    "explicacion": "La promoción de la salud ofrece a los pueblos vías y medios para atenuar o eliminar los problemas de salud y autocontrolar el proceso salud-enfermedad. Busca empoderar a la población para que tenga control sobre los factores que afectan su salud, reduciendo o eliminando los problemas identificados."
  },
  {
    "pregunta": "Una prueba de screening que tiene muy baja sensibilidad, tiene mayor probabilidad de clasificar a sujetos enfermos como sanos. ¿Qué tipo de resultado es?",
    "opciones": {
      "A": "Falso positivo",
      "B": "Valor predictivo positivo",
      "C": "Falso negativo",
      "D": "Sensibilidad ineficiente"
    },
    "id": 138,
    "respuesta": "C",
    "tema": "Salud Pública - Pruebas diagnósticas",
    "origen": "examen",
    "explicacion": "Una prueba con muy baja sensibilidad clasifica incorrectamente a enfermos como sanos, generando falsos negativos. El falso negativo ocurre cuando la prueba da resultado negativo en una persona que realmente está enferma, lo que es peligroso porque el paciente no recibe tratamiento oportuno."
  },
  {
    "pregunta": "Son comportamientos que pueden o no ser saludables e influir de manera positiva o negativa en la salud del individuo, caracterizan el modo de vida de un individuo y suelen ser permanentes. Esta definición corresponde a:",
    "opciones": {
      "A": "Hábito saludable",
      "B": "Práctica",
      "C": "Autocuidado",
      "D": "Estilo de vida"
    },
    "id": 139,
    "respuesta": "D",
    "tema": "Salud Pública - Promoción de la salud",
    "origen": "examen",
    "explicacion": "El estilo de vida comprende comportamientos que pueden o no ser saludables, influyen positiva o negativamente en la salud, caracterizan el modo de vida de un individuo y suelen ser permanentes. Incluye hábitos alimentarios, actividad física, consumo de sustancias, manejo del estrés, entre otros."
  },
  {
    "pregunta": "La Enfermera del puesto de salud, se encuentra con uñas cortas sin accesorios por debajo del codo; atiende a madre de familia que viene con su hija de 3 años de edad citada por inmunización; cuenta con desinfectante de base alcohólica, se higieniza la mano, prepara la vacuna para administrar; ayuda a la niña a tomar posición cómoda. ¿Qué momento del lavado de manos continúa?",
    "opciones": {
      "A": "Segundo",
      "B": "Primer",
      "C": "Cuarto",
      "D": "Tercer"
    },
    "id": 140,
    "respuesta": "A",
    "tema": "Salud Pública - Prevención y control de infecciones",
    "origen": "examen",
    "explicacion": "La enfermera ya se higienizó las manos y preparó la vacuna. El siguiente momento del lavado de manos según la OMS es el segundo momento: 'antes de realizar una tarea aséptica', que en este caso es la administración de la vacuna (procedimiento invasivo con aguja). Los 5 momentos de la OMS guían cuándo higienizarse."
  },
  {
    "pregunta": "Danuska de 16 años acude sola al Centro de Salud Natividad de categoría I-2, no quiere sacar historia clínica, solo desea preguntar a la enfermera sobre un “problema de salud”. ¿Cómo se debería proceder al respecto?",
    "opciones": {
      "A": "Debe ser atendida en presencia de otro personal, protegiendo su privacidad y confidencialidad",
      "B": "El personal debe solicitar que la adolescente regrese acompañada por un familiar",
      "C": "No se puede atender si no saca la historia clínica y no está acompañada por un adulto",
      "D": "Debe ser atendida aun esté sola, con privacidad y respeto a su autonomía"
    },
    "id": 141,
    "respuesta": "A",
    "tema": "Cuidado Integral - Paquete del adolescente",
    "origen": "examen",
    "explicacion": "La adolescente debe ser atendida en presencia de otro personal de salud, protegiendo su privacidad y confidencialidad. Esto garantiza tanto la protección legal del profesional como la seguridad de la paciente, manteniendo un ambiente de confianza y respeto a su autonomía."
  },
  {
    "pregunta": "Comprende la sucesión de eventos que ocurren a lo largo de la existencia de las personas y la población, los cuales interactúan para influir en su salud desde la preconcepción hasta la muerte. ¿A qué definición se refiere?",
    "opciones": {
      "A": "Vías de cuidados",
      "B": "Determinante social",
      "C": "Curso de vida",
      "D": "Cuidado integral"
    },
    "id": 142,
    "respuesta": "C",
    "tema": "Cuidado Integral - Cuidado integral por curso de vida",
    "origen": "examen",
    "explicacion": "El curso de vida comprende la sucesión de eventos que ocurren a lo largo de la existencia de las personas y la población, desde la preconcepción hasta la muerte, que interactúan para influir en su salud. Es el marco conceptual que organiza las intervenciones de salud según las etapas de vida."
  },
  {
    "pregunta": "Varón de 67 años se atiende en un establecimiento de salud, refiere ser hipertenso con diagnóstico de diabetes mellitus. Al examen PA:160/100 mmHg. Su riesgo cardiovascular es alto por historia clínica. Como profesional de salud del primer nivel. ¿Qué intervención corresponde?",
    "opciones": {
      "A": "Cribado",
      "B": "Referencia",
      "C": "Medidas preventivas",
      "D": "Estratificación"
    },
    "id": 143,
    "respuesta": "B",
    "tema": "Cuidado Integral - Enfermedades no transmisibles",
    "origen": "examen",
    "explicacion": "En un paciente hipertenso con diabetes y PA 160/100 mmHg con riesgo cardiovascular alto, la intervención que corresponde desde el primer nivel es la referencia a un establecimiento de mayor complejidad. El riesgo alto con múltiples comorbilidades requiere manejo especializado que excede la capacidad del primer nivel."
  },
  {
    "pregunta": "En el centro de salud, el serumista, atiende a varón de 20 años y le brinda consejería sobre salud bucal con la técnica del cepillado e hilo dental. ¿Qué desea implementar en la persona?",
    "opciones": {
      "A": "Autocuidado",
      "B": "Destreza",
      "C": "Cambio de dieta",
      "D": "Motivación"
    },
    "id": 144,
    "respuesta": "B",
    "tema": "Cuidado Integral - Salud bucal",
    "origen": "examen",
    "explicacion": "La consejería sobre técnica de cepillado e hilo dental busca implementar la motivación en la persona. Motivar al paciente es el primer paso para lograr cambios de conducta en salud bucal, generando interés y compromiso con su autocuidado oral."
  },
  {
    "pregunta": "Un serumista luego de haber diagnosticado y tratado un caso clínico muy interesante, ha hecho una revisión profunda de la literatura sobre el tema y desea compartirlo con la comunidad científica. ¿Qué tipo de informe de investigación debe preparar?",
    "opciones": {
      "A": "Reporte de caso",
      "B": "Artículo original",
      "C": "Revisión sistemática",
      "D": "Carta al editor"
    },
    "id": 145,
    "respuesta": "A",
    "tema": "Investigación - Publicación de resultados",
    "origen": "examen",
    "explicacion": "Un reporte de caso es el tipo de informe adecuado para compartir un caso clínico interesante con revisión profunda de la literatura. Permite describir detalladamente el diagnóstico, tratamiento y evolución del paciente, acompañado de la revisión bibliográfica que contextualiza el caso."
  },
  {
    "pregunta": "La transmisión del dengue a un huésped susceptible se da a través de la picadura de un zancudo hembra infectado (Aedes aegypti), estos zancudos pican preferentemente ...... y transmiten la enfermedad a varias personas durante toda su vida.",
    "opciones": {
      "A": "solo en época de lluvias",
      "B": "a medio día y sin lluvia",
      "C": "al atardecer y durante la noche",
      "D": "al amanecer y al atardecer"
    },
    "id": 146,
    "respuesta": "D",
    "tema": "Cuidado Integral - Enfermedades metaxénicas y zoonóticas",
    "origen": "examen",
    "explicacion": "El Aedes aegypti pica preferentemente al amanecer y al atardecer (horas crepusculares). Es un mosquito de hábitos diurnos y domésticos que se reproduce en agua limpia estancada en recipientes artificiales. Transmite dengue, zika, chikungunya y fiebre amarilla urbana."
  },
  {
    "pregunta": "Ante la presencia de un caso probable de Tos Ferina. ¿Cuáles son las medidas a implementar?",
    "opciones": {
      "A": "Censo de contactos, barrido vacunal, investigación del caso índice",
      "B": "Jornada de vacunación, quimioprofilaxis, búsqueda de contactos indirectos",
      "C": "Búsqueda de casos secundarios, barrido vacunal, inamovilidad del caso",
      "D": "Seguimiento de contactos, búsqueda activa comunitaria e institucional, bloqueo vacunal"
    },
    "id": 147,
    "respuesta": "D",
    "tema": "Salud Pública - Vigilancia epidemiológica",
    "origen": "examen",
    "explicacion": "Ante un caso probable de tos ferina, las medidas a implementar son: seguimiento de contactos, búsqueda activa comunitaria e institucional, y bloqueo vacunal. Estas acciones buscan identificar todos los casos, cortar la cadena de transmisión y proteger a los susceptibles mediante vacunación."
  },
  {
    "pregunta": "Un serumista está trabajando en un establecimiento de salud con población asignada, que cuenta con médico cirujano, profesionales de enfermería, obstetricia y personal técnico de enfermería. Según su cartera de servicios. ¿Cuál es el nivel de atención en el que se encuentra?",
    "opciones": {
      "A": "I-4",
      "B": "I-1",
      "C": "I-3",
      "D": "I-2"
    },
    "id": 148,
    "respuesta": "C",
    "tema": "Gestión - Clasificación de establecimientos",
    "origen": "examen",
    "explicacion": "Un establecimiento con población asignada que cuenta con médico cirujano, enfermera, obstetra y técnico de enfermería corresponde a la categoría I-2 (puesto de salud con médico). El I-3 requiere además laboratorio, farmacia y atención de 12 horas, y el I-4 incluye internamiento."
  },
  {
    "pregunta": "Se labora en un establecimiento de salud donde no hay una visión definida sobre el trabajo que se realiza; y existen muchos problemas interpersonales. Si se desea cambiar esta situación. ¿Qué se debe mejorar?",
    "opciones": {
      "A": "Recursos humanos",
      "B": "Proyecto de mejora",
      "C": "Plan de acción",
      "D": "Clima organizacional"
    },
    "id": 149,
    "respuesta": "D",
    "tema": "Gestión - Clima y cultura organizacional",
    "origen": "examen",
    "explicacion": "Cuando no hay visión definida y existen problemas interpersonales, se debe mejorar el clima organizacional. El clima refleja la percepción del ambiente laboral y se deteriora cuando hay falta de dirección y conflictos entre el personal. Mejorar el clima implica trabajar en comunicación, liderazgo y relaciones interpersonales."
  },
  {
    "pregunta": "En el análisis FODA, los aspectos positivos de los recursos y actividades internas con que cuenta la institución, se les define como:",
    "opciones": {
      "A": "Amenazas",
      "B": "Fortalezas",
      "C": "Estrategias",
      "D": "Oportunidades"
    },
    "id": 150,
    "respuesta": "B",
    "tema": "Gestión - Planeamiento estratégico",
    "origen": "examen",
    "explicacion": "En el análisis FODA, las fortalezas son los aspectos positivos internos de la organización: recursos, capacidades y actividades que funcionan bien. Las oportunidades son externas positivas, las amenazas son externas negativas y las debilidades son internas negativas. Las estrategias son el resultado del análisis, no un componente del FODA."
  },
  {
    "pregunta": "Usted desea motivar a su personal de salud para realizar una investigación científica sobre la anemia infantil en su comunidad, para ello les dice que el principal propósito de la investigación científica es...",
    "opciones": {
      "A": "consolidar el trabajo en equipo.",
      "B": "generar conocimiento científico útil.",
      "C": "mejorar la gestión de la salud.",
      "D": "captar inversiones en salud."
    },
    "id": 151,
    "respuesta": "B",
    "tema": "Investigación - Conceptos básicos",
    "origen": "examen",
    "explicacion": "El principal propósito de la investigación científica es generar conocimiento científico útil. La investigación produce evidencia que permite comprender los problemas de salud, desarrollar intervenciones efectivas y mejorar la toma de decisiones en salud pública."
  },
  {
    "pregunta": "Un paciente fue referido para evaluación y tratamiento por una probable gastritis a un nivel de atención superior. Se resolvió su problema de salud de manera parcial, continuando su tratamiento en su establecimiento de origen. ¿En qué condición considera fue contrarreferido?",
    "opciones": {
      "A": "Mejorado",
      "B": "Curado",
      "C": "Retiro voluntario",
      "D": "Deserción"
    },
    "id": 152,
    "respuesta": "A",
    "tema": "Gestión - Referencia y contrarreferencia",
    "origen": "examen",
    "explicacion": "Cuando el problema de salud se resuelve de manera parcial y el paciente continúa tratamiento en su establecimiento de origen, la condición de contrarreferencia es mejorado. El paciente mejoró con la atención recibida pero aún requiere seguimiento y continuidad del tratamiento en su establecimiento."
  },
  {
    "pregunta": "En un establecimiento de salud que tiene bajos indicadores de desempeño, se desea realizar un concepto compartido para un futuro mejor, pues cada quien tiene una idea diferente de lo que se quiere lograr. ¿Qué componente estratégico se debe plantear entre todos?",
    "opciones": {
      "A": "Misión",
      "B": "FODA",
      "C": "Visión",
      "D": "Valores"
    },
    "id": 153,
    "respuesta": "C",
    "tema": "Gestión - Planeamiento estratégico",
    "origen": "examen",
    "explicacion": "Cuando cada quien tiene una idea diferente de lo que se quiere lograr, se debe plantear la visión entre todos. La visión es el concepto compartido del futuro deseado que orienta y unifica al equipo hacia un mismo objetivo, generando identidad y compromiso institucional."
  },
  {
    "pregunta": "En pro de la salud y el desarrollo social entre los diferentes actores, en los distintos niveles de gobierno y de la sociedad, lo primero que se debe fortalecer son las...",
    "opciones": {
      "A": "alianzas estratégicas.",
      "B": "capacidades de gestión.",
      "C": "coordinaciones intersectoriales.",
      "D": "decisiones multisectoriales."
    },
    "id": 154,
    "respuesta": "A",
    "tema": "Gestión - Coordinación intersectorial",
    "origen": "examen",
    "explicacion": "Lo primero que se debe fortalecer para la salud y el desarrollo social entre los diferentes actores son las alianzas estratégicas. Las alianzas permiten articular esfuerzos, recursos y capacidades entre distintos sectores y niveles de gobierno para abordar los determinantes sociales de la salud."
  },
  {
    "pregunta": "El personal de un establecimiento de salud desea saber lo que debe desarrollar prioritariamente. ¿Qué componente debe conocer para orientar sus objetivos estratégicos?",
    "opciones": {
      "A": "FODA",
      "B": "Visión",
      "C": "Misión",
      "D": "Valores"
    },
    "id": 155,
    "respuesta": "A",
    "tema": "Gestión - Planeamiento estratégico",
    "origen": "examen",
    "explicacion": "El FODA es el componente que el personal debe conocer para orientar sus objetivos estratégicos. El análisis FODA identifica la situación actual (fortalezas, oportunidades, debilidades, amenazas) y a partir de ese diagnóstico se definen las prioridades y objetivos estratégicos del establecimiento."
  },
  {
    "pregunta": "Al Centro de Salud de Chuquibamba de la provincia de Condesuyos, acude una gestante añosa, en periodo expulsivo, con antecedentes de preeclampsia; el parto se complica y fallecen madre y niño. Ante este evento. ¿Qué Auditoría de la Calidad de la Atención en Salud corresponde seguir?",
    "opciones": {
      "A": "Dirimente",
      "B": "Externa",
      "C": "De caso",
      "D": "Regular"
    },
    "id": 156,
    "respuesta": "C",
    "tema": "Gestión - Calidad de servicios de salud",
    "origen": "examen",
    "explicacion": "Ante la muerte materna y neonatal, corresponde una auditoría de caso. Este tipo de auditoría analiza un caso específico de muerte materna o neonatal para determinar si fue evitable, identificar las demoras en la atención y establecer recomendaciones para mejorar la calidad de atención."
  },
  {
    "pregunta": "Varón de 34 años en puesto de vacunación, se le administra la vacuna de Influenza; 8 horas después presenta dolor, enrojecimiento, fiebre, irritabilidad y síntomas no específicos. Llega al puesto de salud para su evaluación. ¿Cuál es el diagnóstico probable?",
    "opciones": {
      "A": "Inmunogenicidad",
      "B": "Evento adverso",
      "C": "ESAVI leve",
      "D": "Reacción adversa"
    },
    "id": 157,
    "respuesta": "C",
    "tema": "Cuidado Integral - Vacunación y ESAVI",
    "origen": "examen",
    "explicacion": "Los síntomas presentados (dolor, enrojecimiento, fiebre, irritabilidad) 8 horas después de la vacuna de Influenza corresponden a un ESAVI leve. Son reacciones locales y sistémicas esperadas que no ponen en riesgo la vida del paciente y se resuelven espontáneamente."
  },
  {
    "pregunta": "Al llegar a su comunidad de SERUMS observa que hay baja adherencia a la lactancia materna por lo cual plantea hacer una investigación sobre factores asociados a lactancia materna. ¿Qué debe realizar en primer lugar para su estudio?",
    "opciones": {
      "A": "Revisar literatura científica sobre el tema",
      "B": "Elaborar su pregunta de investigación",
      "C": "Definir sus instrumentos de medición",
      "D": "Elegir los objetivos de estudio"
    },
    "id": 158,
    "respuesta": "A",
    "tema": "Investigación - Conceptos básicos",
    "origen": "examen",
    "explicacion": "El primer paso de toda investigación es revisar la literatura científica sobre el tema. La revisión bibliográfica permite conocer el estado del arte, identificar vacíos de conocimiento y fundamentar la pregunta de investigación con evidencia previa."
  },
  {
    "pregunta": "La atención integral donde el objetivo es la participación de la gestante, pareja y su familia en la preparación para un parto institucional, puerperio y cuidado del recién nacido; además de actividades preventivo promocionales y evitar complicaciones. ¿A qué tipo de atención corresponde?",
    "opciones": {
      "A": "Preconcepcional",
      "B": "Prenatal reenfocada",
      "C": "Primaria",
      "D": "Básica"
    },
    "id": 159,
    "respuesta": "B",
    "tema": "Cuidado Integral - Paquete prenatal",
    "origen": "examen",
    "explicacion": "La atención prenatal reenfocada tiene como objetivo la participación de la gestante, pareja y familia en la preparación para el parto institucional, puerperio y cuidado del recién nacido, además de actividades preventivo-promocionales para evitar complicaciones. Es un enfoque integral que involucra a toda la familia."
  },
  {
    "pregunta": "Los sistemas de vigilancia en salud (SVES) son la guía para la acción que el personal de salud utiliza para tomar decisiones prácticas frente a los problemas de salud. El tipo tradicional se caracteriza por que se...",
    "opciones": {
      "A": "usan datos específicos de información adicional.",
      "B": "incluye los procedimientos del proceso de la práctica «centinela».",
      "C": "usa mediciones sistemáticas.",
      "D": "basan en los sistemas de declaración de enfermedades transmisibles y morbilidad."
    },
    "id": 160,
    "respuesta": "D",
    "tema": "Salud Pública - Vigilancia epidemiológica",
    "origen": "examen",
    "explicacion": "El sistema de vigilancia epidemiológica tradicional se caracteriza por basarse en los sistemas de declaración de enfermedades transmisibles y morbilidad. Es el método clásico de notificación obligatoria donde los establecimientos reportan los casos de enfermedades de vigilancia al nivel superior."
  },
  {
    "pregunta": "En el proceso de redacción del informe final de su estudio transversal analítico sobre la relación entre la ingesta de bebidas gaseosas y sobrepeso; usted desea que todas las secciones tengan coherencia entre sí. ¿Qué herramienta debe usar para verificarla?",
    "opciones": {
      "A": "Lista de verificación",
      "B": "Revisión de Turniting",
      "C": "Matriz de consistencia",
      "D": "Matriz de operacionalización"
    },
    "id": 161,
    "respuesta": "C",
    "tema": "Investigación - Metodología",
    "origen": "examen",
    "explicacion": "La matriz de consistencia es la herramienta que permite verificar la coherencia entre todas las secciones del informe de investigación. Relaciona el problema, objetivos, hipótesis, variables, metodología e instrumentos, asegurando que todas las secciones estén alineadas entre sí."
  },
  {
    "pregunta": "En una farmacia se va a instalar el control termostático de la unidad de refrigeración. ¿Qué se debe tener en cuenta con los sensores?",
    "opciones": {
      "A": "Áreas con poca variabilidad en temperatura",
      "B": "Dependientes del sistema de monitoreo",
      "C": "Deben estar calibrados",
      "D": "Con exactitud de aproximadamente 0.3°C"
    },
    "id": 162,
    "respuesta": "C",
    "tema": "Gestión - Control de inventario y medicamentos",
    "origen": "examen",
    "explicacion": "Los sensores del control termostático de la unidad de refrigeración deben estar calibrados. La calibración garantiza que las lecturas de temperatura sean precisas y confiables, lo cual es crítico para la conservación adecuada de medicamentos termosensibles y vacunas."
  },
  {
    "pregunta": "Se define como transición epidemiológica al proceso de paso del predominio de enfermedades …… a la preponderancia de las enfermedades...",
    "opciones": {
      "A": "infecciosas / crónicas.",
      "B": "degenerativas / infecciosas.",
      "C": "infecciosas / prevalentes.",
      "D": "crónicas / infecciosas."
    },
    "id": 163,
    "respuesta": "A",
    "tema": "Salud Pública - Demografía en salud",
    "origen": "examen",
    "explicacion": "La transición epidemiológica es el paso del predominio de enfermedades infecciosas (transmisibles) a la preponderancia de enfermedades crónicas (no transmisibles). Este fenómeno ocurre con el desarrollo socioeconómico, mejora del saneamiento, vacunación y envejecimiento poblacional."
  },
  {
    "pregunta": "En una institución educativa primaria de 100 alumnos, se presenta un brote de varicela con 50 casos. ¿Cuál es el indicador y el valor que corresponde para caracterizar el riesgo?",
    "opciones": {
      "A": "Razón de prevalencia, 50%",
      "B": "Tasa de incidencia, 50%",
      "C": "Tasa de prevalencia, 500 x 1000 hab",
      "D": "Tasa de ataque, 50%"
    },
    "id": 164,
    "respuesta": "D",
    "tema": "Salud Pública - Epidemiología",
    "origen": "examen",
    "explicacion": "La tasa de ataque es el indicador adecuado para brotes en poblaciones cerradas (como un colegio). Se calcula: casos/población expuesta x 100 = 50/100 x 100 = 50%. Mide la proporción de personas que enferman entre las expuestas durante un brote en un periodo corto y definido."
  },
  {
    "pregunta": "Milena, una obstetra serumista coloca una ampolla intramuscular de metamizol a una gestante que viene con fiebre, minutos después siente mareos, nauseas y se observa en la zona de aplicación un rash; por tanto ella debe consignar en la historia clínica de manera obligatoria las sospechas de reacciones adversas, reportarlas en el formato correspondiente y remitirlo al comité de ...... y tecnovigilancia de la IPRESS en los plazos correspondientes.",
    "opciones": {
      "A": "control interno",
      "B": "auditoría externa",
      "C": "auditoría interna",
      "D": "farmacovigilancia"
    },
    "id": 165,
    "respuesta": "D",
    "tema": "Gestión - Uso racional de medicamentos",
    "origen": "examen",
    "explicacion": "Las sospechas de reacciones adversas a medicamentos deben reportarse al comité de farmacovigilancia y tecnovigilancia de la IPRESS. La farmacovigilancia es la ciencia que detecta, evalúa y previene los efectos adversos de los medicamentos, garantizando la seguridad del paciente."
  },
  {
    "pregunta": "El Ministerio de Salud a través de ...... es responsable de distribuir, difundir, dirigir, supervisar, monitorear, evaluar los medicamentos en los sectores públicos y privados.",
    "opciones": {
      "A": "CENARES",
      "B": "DIGESA",
      "C": "DIGEMID",
      "D": "CENSOPAS"
    },
    "id": 166,
    "respuesta": "C",
    "tema": "Gestión - Uso racional de medicamentos",
    "origen": "examen",
    "explicacion": "La DIGEMID (Dirección General de Medicamentos, Insumos y Drogas) es el órgano del MINSA responsable de distribuir, difundir, dirigir, supervisar, monitorear y evaluar los medicamentos en los sectores público y privado. CENARES se encarga del abastecimiento y DIGESA de la salud ambiental."
  },
  {
    "pregunta": "Mujer de 70 años, procedente de Loreto, hace 2 días presentó fiebre de 39°C, dolor de articulaciones y cefalea, el día de hoy acude al establecimiento con vómitos persistentes y sangrado de mucosas. Funciones vitales: T°: 36°C, PA: 100/70 mmHg, FR: 28X'. ¿Qué tipo de dengue es?",
    "opciones": {
      "A": "Grave",
      "B": "Confirmado sin signos de alarma",
      "C": "Probable con signos de alarma",
      "D": "Hemorrágico con signos de alarma"
    },
    "id": 167,
    "respuesta": "C",
    "tema": "Cuidado Integral - Enfermedades metaxénicas y zoonóticas",
    "origen": "examen",
    "explicacion": "Mujer de 70 años procedente de Loreto con fiebre, artralgias, cefalea, vómitos persistentes y sangrado de mucosas presenta dengue probable con signos de alarma. Los vómitos persistentes y el sangrado de mucosas son signos de alarma. Es 'probable' porque aún no tiene confirmación por laboratorio."
  },
  {
    "pregunta": "Dentro de las intervenciones de promoción de la salud. El programa “familia saludable” considera a la familia como la unidad de ...... de mayor eficacia.",
    "opciones": {
      "A": "riesgo",
      "B": "soporte",
      "C": "análisis",
      "D": "intervención"
    },
    "id": 168,
    "respuesta": "C",
    "tema": "Salud Pública - Promoción de la salud",
    "origen": "examen",
    "explicacion": "El programa 'familia saludable' considera a la familia como la unidad de soporte de mayor eficacia. La familia es el núcleo básico de apoyo emocional, económico y social que influye directamente en los comportamientos de salud de sus miembros."
  },
  {
    "pregunta": "En su comunidad observa con mucha frecuencia casos de alcoholismo en varones y también violencia física de ellos contra sus esposas, para investigar en el menor tiempo posible, si hay asociación entre el alcoholismo y la violencia familiar. ¿Qué diseño de estudio elegirá?",
    "opciones": {
      "A": "Analítico",
      "B": "Cohortes",
      "C": "Descriptivo",
      "D": "Cuasi experimental"
    },
    "id": 169,
    "respuesta": "A",
    "tema": "Investigación - Tipos de investigación",
    "origen": "examen",
    "explicacion": "Para investigar la asociación entre alcoholismo y violencia familiar en el menor tiempo posible, se elige un diseño analítico (transversal analítico). Permite medir ambas variables simultáneamente y buscar asociación estadística, a diferencia del cohortes que requiere seguimiento prolongado."
  },
  {
    "pregunta": "La sala situacional de salud es una herramienta que ofrece evidencia sobre la eficacia de las intervenciones en salud y sobre la capacidad de los sistemas de salud para responder a las necesidades de salud de la población. ¿Quiénes la deben conocer y analizar prioritariamente?",
    "opciones": {
      "A": "Promotores de salud y responsable de promoción de la salud",
      "B": "Todo el personal de salud y autoridades locales",
      "C": "Coordinadores de red y responsable de epidemiología",
      "D": "El responsable de epidemiologia y jefe de establecimiento"
    },
    "id": 170,
    "respuesta": "A",
    "tema": "Salud Pública - ASIS",
    "origen": "examen",
    "explicacion": "La sala situacional de salud debe ser conocida y analizada prioritariamente por todo el personal de salud y las autoridades locales. Es una herramienta de gestión que debe ser compartida ampliamente para que todos los actores tomen decisiones informadas basadas en la evidencia epidemiológica."
  },
  {
    "pregunta": "Llega a consulta de crecimiento y desarrollo una madre con su recién nacido de siete días, la enfermera ejecuta el control, encontrándose en valores normales en su evaluación. Se deja indicaciones. ¿A qué edad será su próxima cita?",
    "opciones": {
      "A": "21 días",
      "B": "28 días",
      "C": "1 mes",
      "D": "14 días"
    },
    "id": 171,
    "respuesta": "D",
    "tema": "Cuidado Integral - Paquete del niño",
    "origen": "examen",
    "explicacion": "Un recién nacido evaluado a los 7 días con valores normales tiene su próxima cita CRED a los 14 días de vida. El calendario de controles del recién nacido establece: 48 horas, 7 días, 14 días y 28 días. El siguiente control después de los 7 días es a los 14 días."
  },
  {
    "pregunta": "Según la historia natural de la enfermedad, identificar una persona con diabetes en la fase subclínica corresponde al periodo ...... y el nivel de prevención es...",
    "opciones": {
      "A": "patogénico / secundario.",
      "B": "patogénico / primario.",
      "C": "patogénico / terciario.",
      "D": "pre patogénico / secundario."
    },
    "id": 172,
    "respuesta": "A",
    "tema": "Salud Pública - Historia natural de la enfermedad",
    "origen": "examen",
    "explicacion": "Identificar diabetes en fase subclínica corresponde al periodo patogénico (la enfermedad ya inició pero aún no hay síntomas) y el nivel de prevención es secundario. La prevención secundaria busca la detección precoz de la enfermedad en fase asintomática mediante tamizaje para intervenir tempranamente."
  },
  {
    "pregunta": "En el centro de salud de Lamas, reportan que un varón de 30 años, presenta fiebre, malestar general, sangrado y shock. Se informa que han aparecido muchos más casos en estos días y se sospecha de un brote de fiebre amarilla. Siendo Ro: el número promedio de casos nuevos que genera un caso dado a lo largo de un período infeccioso. ¿Cuál es el Ro que se espera tener en brote de fiebre amarilla?",
    "opciones": {
      "A": "Ro > 0.5",
      "B": "Ro > 1",
      "C": "Ro < 1",
      "D": "Ro = 0"
    },
    "id": 173,
    "respuesta": "B",
    "tema": "Salud Pública - Epidemiología",
    "origen": "examen",
    "explicacion": "En un brote de fiebre amarilla se espera un Ro > 1, lo que indica que cada caso genera más de un caso nuevo y la epidemia se propaga. Un Ro > 1 significa que la transmisión se mantiene y el brote crece. Si Ro < 1, el brote tiende a extinguirse."
  },
  {
    "pregunta": "Usted va a realizar un estudio sobre la obesidad infantil en un colegio de la pequeña comunidad donde labora, pero el director le pide que los padres autoricen voluntariamente la participación de sus menores hijos. ¿Qué documento debe usar para este cometido?",
    "opciones": {
      "A": "Asentimiento informado",
      "B": "Carta de investigación",
      "C": "Compromiso paterno",
      "D": "Consentimiento informado"
    },
    "id": 174,
    "respuesta": "D",
    "tema": "Investigación - Aspectos éticos",
    "origen": "examen",
    "explicacion": "Para que los padres autoricen voluntariamente la participación de sus hijos menores en un estudio de investigación, se utiliza el consentimiento informado. Este documento explica los objetivos, procedimientos, riesgos y beneficios del estudio, y los padres firman autorizando la participación de sus hijos."
  },
  {
    "pregunta": "Cuenta con las herramientas administrativas para garantizar que la profesión se ejerza de manera ética. Este enunciado pertenece a la:",
    "opciones": {
      "A": "Comisión de ética",
      "B": "Responsabilidad",
      "C": "Deontología",
      "D": "Moral"
    },
    "id": 175,
    "respuesta": "C",
    "tema": "Ética - Deontología",
    "origen": "examen",
    "explicacion": "La deontología cuenta con las herramientas administrativas para garantizar que la profesión se ejerza de manera ética. Incluye códigos de ética profesional, normas de conducta, sanciones disciplinarias y mecanismos de regulación del ejercicio profesional a través de los colegios profesionales."
  },
  {
    "pregunta": "¿Cuáles son los medicamentos y productos biológicos que cubren la mayor parte de la morbilidad en el país, que luego de una evaluación técnica especializada multidisciplinaria han demostrado ser seguros, eficaces, costo-efectivos y deben estar disponibles en todo momento?",
    "opciones": {
      "A": "Genéricos",
      "B": "Esenciales",
      "C": "Comunes",
      "D": "Básicos"
    },
    "id": 176,
    "respuesta": "B",
    "tema": "Gestión - Uso racional de medicamentos",
    "origen": "examen",
    "explicacion": "Los medicamentos esenciales son aquellos que cubren la mayor parte de la morbilidad del país, han demostrado ser seguros, eficaces, costo-efectivos y deben estar disponibles en todo momento. La OMS define los medicamentos esenciales como los que satisfacen las necesidades prioritarias de salud de la población."
  },
  {
    "pregunta": "Para investigar la relación entre la anemia y la talla de niños de 5° grado de primaria de un colegio, usted acude un día de la semana para medir la Hb y talla a todos ellos. ¿Qué enfoque de investigación está realizando?",
    "opciones": {
      "A": "Cualitativo",
      "B": "Cuantitativo",
      "C": "Mixto",
      "D": "Observacional"
    },
    "id": 177,
    "respuesta": "B",
    "tema": "Investigación - Enfoques de investigación",
    "origen": "examen",
    "explicacion": "Medir Hb y talla en un solo día para investigar su relación corresponde a un enfoque cuantitativo. Se recolectan datos numéricos (Hb en g/dL, talla en cm) que serán analizados estadísticamente para determinar si existe relación entre las variables."
  },
  {
    "pregunta": "Personal de serenazgo, lleva al centro de salud a un paciente adulto mayor con problemas de salud y sin familiares, presenta indigencia y sin documentos. ¿Qué derecho se le atribuye?",
    "opciones": {
      "A": "Acceso a servicios de salud",
      "B": "Recuperación",
      "C": "Acceso a la información",
      "D": "Consentimiento informado"
    },
    "id": 178,
    "respuesta": "A",
    "tema": "Ética - Derechos de los usuarios",
    "origen": "examen",
    "explicacion": "El derecho que se le atribuye al adulto mayor indigente sin documentos es el acceso a servicios de salud. Todo paciente tiene derecho a recibir atención de salud independientemente de su condición social, económica o documentaria. La falta de documentos no puede ser barrera para la atención."
  },
  {
    "pregunta": "Un paciente desea realizar un reclamo por un posible maltrato de un trabajador del establecimiento de salud contra él, al no respetarse el orden de llegada para la atención. ¿Qué procedimiento corresponde?",
    "opciones": {
      "A": "Queja",
      "B": "Consejería",
      "C": "Sugerencia",
      "D": "Consulta"
    },
    "id": 179,
    "respuesta": "A",
    "tema": "Ética - Derechos de los usuarios",
    "origen": "examen",
    "explicacion": "Ante un posible maltrato por no respetar el orden de llegada, el procedimiento que corresponde es la queja. La queja es el mecanismo formal que tiene el usuario para expresar su insatisfacción por el trato recibido o por el incumplimiento de sus derechos en el establecimiento de salud."
  },
  {
    "pregunta": "Realizando visita domiciliaria, según el plan del cuidado integral de salud de las personas adultas mayores, se encuentra a un varón de 66 años de edad, vive solo; refiere tener “mal de ojo”, presenta “dolor de cabeza y dolor muscular”, llegará el curandero, realizará una limpia con cuy macho de color negro. Se le muestra interés e integración de los cuidados que requiere. ¿Éste enunciado se denomina?",
    "opciones": {
      "A": "Población indígena",
      "B": "Salud pública",
      "C": "Cultura",
      "D": "Interculturalidad en salud"
    },
    "id": 180,
    "respuesta": "D",
    "tema": "Ética - Interculturalidad",
    "origen": "examen",
    "explicacion": "Mostrar interés e integración de los cuidados que requiere un adulto mayor que cree en el 'mal de ojo' y espera al curandero corresponde a interculturalidad en salud. Es el enfoque que reconoce, respeta e integra las prácticas de medicina tradicional con el sistema de salud convencional."
  },
  {
    "pregunta": "El puesto de salud del distrito de Lares a 2 horas del Cusco reporta que veinte gallinas amanecieron muertas en toda su localidad; realiza el reporte como corresponde. ¿Esto se denomina?",
    "opciones": {
      "A": "Contingencia",
      "B": "Brote",
      "C": "Evento",
      "D": "Epizootia"
    },
    "id": 181,
    "respuesta": "C",
    "tema": "Salud Pública - Brotes y epidemias",
    "origen": "examen",
    "explicacion": "La muerte de veinte gallinas en una localidad se denomina evento. Un evento es cualquier suceso o circunstancia que puede tener implicancias para la salud pública y debe ser reportado. A diferencia de un brote (casos humanos) o epizootia (enfermedad masiva en animales), un evento es el término más general."
  },
  {
    "pregunta": "Para investigar la relación entre la anemia y el peso de niños de 6° grado de primaria de un colegio, usted acude un día de la semana para medir la Hb y el peso a todos ellos. ¿Qué método de investigación está realizando?",
    "opciones": {
      "A": "Mixto",
      "B": "Experimental",
      "C": "Observacional",
      "D": "Cuasi experimental"
    },
    "id": 182,
    "respuesta": "C",
    "tema": "Investigación - Tipos de investigación",
    "origen": "examen",
    "explicacion": "Medir Hb y peso en un día para investigar su relación corresponde a un método observacional. El investigador solo observa y mide variables sin manipularlas ni intervenir. Es un estudio transversal donde se recolectan datos en un momento único."
  },
  {
    "pregunta": "Pablo vive con su hermano, que es un paciente con tuberculosis, fue registrado en el SIG-TB, ha recibido una evaluación médica y además le han realizado el examen de PPD y radiografía. ¿Qué tipo de contacto es Pablo?",
    "opciones": {
      "A": "Examinado",
      "B": "Censado",
      "C": "Controlado",
      "D": "Sospechoso"
    },
    "id": 183,
    "respuesta": "A",
    "tema": "Cuidado Integral - Tuberculosis",
    "origen": "examen",
    "explicacion": "Pablo es un contacto examinado porque fue registrado en el SIG-TB, recibió evaluación médica y le realizaron PPD y radiografía. El contacto examinado es aquel que ya completó todos los exámenes de evaluación. El censado solo está identificado y registrado, y el controlado ya tiene seguimiento completo."
  },
  {
    "pregunta": "En la metodología del análisis FODA, el comportamiento de la población, costumbre y hábitos negativos que son difíciles de cambiar, se identifican como:",
    "opciones": {
      "A": "Amenazas",
      "B": "Negatividad",
      "C": "Debilidades",
      "D": "Oportunidades"
    },
    "id": 184,
    "respuesta": "A",
    "tema": "Gestión - Planeamiento estratégico",
    "origen": "examen",
    "explicacion": "En el análisis FODA, los comportamientos, costumbres y hábitos negativos de la población difíciles de cambiar se identifican como amenazas. Son factores externos negativos que afectan la gestión del establecimiento y dificultan el logro de los objetivos sanitarios."
  },
  {
    "pregunta": "Las acciones para mejorar la calidad de la atención orientados a mejorar la experiencia y la confianza de las personas, las familias y las comunidades en los servicios de salud, más allá de la optimización de los procesos, se enmarca dentro de las Funciones Esenciales de Salud Publica. ¿A qué función corresponde?",
    "opciones": {
      "A": "Asegurar el acceso y el uso racional de medicamentos",
      "B": "Acceso equitativo a servicios de salud integrales y de",
      "C": "Desarrollo de recursos humanos para la salud",
      "D": "Financiamiento de la salud eficiente y equitativo"
    },
    "id": 185,
    "respuesta": "B",
    "tema": "Salud Pública - Conceptos básicos",
    "origen": "examen",
    "explicacion": "Las acciones para mejorar la calidad de atención orientadas a mejorar la experiencia y confianza de las personas en los servicios de salud corresponden a la FESP de acceso equitativo a servicios de salud integrales y de calidad. Esta función busca que los servicios sean accesibles, oportunos y satisfactorios."
  },
  {
    "pregunta": "Salud Escolar lleva a cabo la vacunación masiva, descarte de anemia, cuidado de la salud bucal, desparasitación a los alumnos de las IE públicas. En cumplimiento al derecho de ......, se hace de conocimiento a los padres de familia quienes firman y el personal interviene atendiendo.",
    "opciones": {
      "A": "beneficencia",
      "B": "autorización",
      "C": "justicia",
      "D": "consentimiento informado"
    },
    "id": 186,
    "respuesta": "D",
    "tema": "Ética - Derechos de los usuarios",
    "origen": "examen",
    "explicacion": "En Salud Escolar, los padres firman en cumplimiento al derecho de consentimiento informado. Al tratarse de menores de edad, los padres deben dar su consentimiento informado para las intervenciones de salud (vacunación, descarte de anemia, desparasitación) que se realizarán a sus hijos."
  },
  {
    "pregunta": "Un profesional de la salud desea realizar una ecografía, pero no cuenta en su centro con ese apoyo diagnóstico. Para realizar una referencia a otro establecimiento de salud. ¿Qué debe evaluar?",
    "opciones": {
      "A": "Organigrama",
      "B": "Categorización",
      "C": "Cartera de servicios",
      "D": "Flujograma"
    },
    "id": 187,
    "respuesta": "C",
    "tema": "Gestión - Referencia y contrarreferencia",
    "origen": "examen",
    "explicacion": "Para referir a un paciente que necesita ecografía, se debe evaluar la cartera de servicios del establecimiento de destino. La cartera de servicios detalla qué prestaciones ofrece cada establecimiento, permitiendo identificar cuál cuenta con el servicio de ecografía requerido."
  },
  {
    "pregunta": "La ética cultiva y promueve el ejercicio de la moral y los valores para que los actos estén encuadrados en el bien y en el derecho en beneficio de la sociedad. Como profesional de la salud. ¿Qué principios debe cumplir en la atención a la población objetivo?",
    "opciones": {
      "A": "Orden, fraternidad, moral y derecho",
      "B": "Fraternidad, moral, deber y orden",
      "C": "Orden, moral, deber y derecho",
      "D": "Solidaridad, orden, deber y derecho"
    },
    "id": 188,
    "respuesta": "A",
    "tema": "Ética - Bioética",
    "origen": "examen",
    "explicacion": "Los principios que debe cumplir el profesional de salud en la atención son: orden, fraternidad, moral y derecho. Estos principios enmarcan el actuar profesional dentro del bien común, la solidaridad con el paciente, los valores morales y el cumplimiento del marco legal vigente."
  },
  {
    "pregunta": "Respecto a la valoración nutricional en el adulto mayor, el índice de masa corporal es referencial debido a las modificaciones antropométricas por el envejecimiento; por lo que, se recomienda determinar el ……, para identificar el riesgo de diabetes mellitus tipo 2, hipertensión arterial y enfermedades cardiovasculares.",
    "opciones": {
      "A": "índice de grasa",
      "B": "perímetro abdominal",
      "C": "riesgo de comorbilidad",
      "D": "porcentaje de grasa"
    },
    "id": 189,
    "respuesta": "B",
    "tema": "Cuidado Integral - Paquete del adulto mayor",
    "origen": "examen",
    "explicacion": "En el adulto mayor, el IMC es referencial por los cambios antropométricos del envejecimiento. Se recomienda determinar el perímetro abdominal para identificar riesgo de diabetes tipo 2, hipertensión y enfermedades cardiovasculares. El perímetro abdominal es un indicador de obesidad central, principal factor de riesgo cardiometabólico."
  },
  {
    "pregunta": "Niño de un año 6 meses, es llevado a su control de crecimiento y desarrollo, a la evaluación antropométrica tiene los siguientes resultados: Indicador P/E: entre -2 y +2 DS, Indicador P/T: por debajo de -2 DS e Indicador T/E: entre -2 y +2 DS. ¿Cuál es su clasificación nutricional?",
    "opciones": {
      "A": "Desnutrición aguda",
      "B": "Desnutrición global",
      "C": "Ganancia inadecuada de peso",
      "D": "Desnutrición crónica"
    },
    "id": 190,
    "respuesta": "A",
    "tema": "Cuidado Integral - Alimentación y nutrición",
    "origen": "examen",
    "explicacion": "Con P/E normal, P/T por debajo de -2 DS y T/E normal, la clasificación es desnutrición aguda. El indicador P/T bajo indica que el niño tiene peso insuficiente para su talla actual (adelgazamiento), lo que configura desnutrición aguda. La T/E normal descarta desnutrición crónica."
  },
  {
    "pregunta": "¿Cuáles son los principales ejes estratégicos que garantizan el éxito de la participación comunitaria en la planeación en salud?",
    "opciones": {
      "A": "El abordaje territorial, espacios participativos y la familia como base",
      "B": "La participación comunitaria y escuelas saludables",
      "C": "La actitud política y el esfuerzo de la administración local",
      "D": "Los cambios en la realidad económico-social y ordenanzas municipales"
    },
    "id": 191,
    "respuesta": "C",
    "tema": "Salud Comunitaria - Participación social y comunitaria",
    "origen": "examen",
    "explicacion": "Los principales ejes estratégicos que garantizan el éxito de la participación comunitaria en la planeación en salud son: el abordaje territorial, los espacios participativos y la familia como base. Estos tres ejes articulan el territorio, la participación activa y el núcleo familiar para promover la salud integral."
  },
  {
    "pregunta": "Los medicamentos que han perdido su eficacia y que han llevado a diezmar la efectividad en la lucha contra la tuberculosis, las enfermedades diarreicas y la neumonía debido a la resistencia antimicrobiana, se debe a:",
    "opciones": {
      "A": "Uso irracional de medicamentos",
      "B": "Petitorio de los mismos medicamentos",
      "C": "Uso adecuado de medicamentos de marca",
      "D": "Uso de medicamentos genéricos"
    },
    "id": 192,
    "respuesta": "A",
    "tema": "Salud Pública - Uso racional de medicamentos",
    "origen": "examen",
    "explicacion": "La resistencia antimicrobiana que ha reducido la efectividad contra TB, enfermedades diarreicas y neumonía se debe al uso irracional de medicamentos. La prescripción inadecuada, automedicación, dosis incompletas y uso innecesario de antibióticos favorecen la selección de cepas resistentes."
  },
  {
    "pregunta": "Se desea reorganizar el servicio de admisión y para ello es necesario separar las historias clínicas. ¿Cuántos años se debe considerar para el archivo pasivo de historias clínicas que no han sido requeridas?",
    "opciones": {
      "A": "Más de 10",
      "B": "Más de 5",
      "C": "Más de 15",
      "D": "Más de 1"
    },
    "id": 193,
    "respuesta": "B",
    "tema": "Gestión - Historia clínica",
    "origen": "examen",
    "explicacion": "Las historias clínicas que no han sido requeridas por más de 5 años pasan al archivo pasivo. Esta organización permite mantener el archivo activo con historias de uso frecuente y liberar espacio, mientras se conserva la documentación médico-legal por el tiempo normado."
  },
  {
    "pregunta": "Llega al centro materno una gestante proveniente del sur de nuestro país, quién solicita tener un parto vertical. Como profesional de la salud. ¿Cómo procedería para atender y responder al requerimiento de la paciente?",
    "opciones": {
      "A": "Respetar su pedido",
      "B": "Denegarle la atención",
      "C": "Persuadir su deseo",
      "D": "Enviarla a otro establecimiento"
    },
    "id": 194,
    "respuesta": "A",
    "tema": "Ética - Parto vertical",
    "origen": "examen",
    "explicacion": "Ante una gestante que solicita parto vertical, el profesional de salud debe respetar su pedido. El parto vertical es una opción reconocida por la norma técnica del MINSA y forma parte de la adecuación intercultural de los servicios de salud materna. Negar o persuadir vulnera los derechos de la gestante."
  },
  {
    "pregunta": "Dentro del petitorio nacional único de medicamentos esenciales para el sector salud existen consideraciones especiales de su uso, por lo cual requieren de un manejo especializado. ¿Qué tipo de medicamentos están en este rubro?",
    "opciones": {
      "A": "Para métodos de planificación familiar",
      "B": "Exclusivo para dolor oncológico",
      "C": "Controlado para infecciones intrahospitalarias",
      "D": "Específico para hepatitis A"
    },
    "id": 195,
    "respuesta": "B",
    "tema": "Gestión - Uso racional de medicamentos",
    "origen": "examen",
    "explicacion": "Dentro del petitorio nacional, los medicamentos exclusivos para dolor oncológico requieren manejo especializado por sus consideraciones especiales de uso: son opioides y analgésicos potentes que requieren prescripción médica especializada, control estricto y seguimiento por el riesgo de dependencia y efectos adversos."
  },
  {
    "pregunta": "El C.S. Paz, ha sectorizado su jurisdicción para realizar intervenciones de promoción y prevención basados en el Modelo de Cuidado Integral de la Familia y Comunidad por Curso de Vida. En el marco de las Funciones Esenciales de la Salud Pública renovada, esta acción corresponde a la etapa de:",
    "opciones": {
      "A": "Evaluación",
      "B": "Acceso",
      "C": "Asignación de recursos",
      "D": "Desarrollo de políticas"
    },
    "id": 196,
    "respuesta": "B",
    "tema": "Salud Pública - Conceptos básicos",
    "origen": "examen",
    "explicacion": "La sectorización para intervenciones de promoción y prevención basadas en el MAIS-BFC corresponde a la etapa de acceso en las FESP renovadas. Sectorizar permite organizar el territorio para garantizar que la población acceda a los servicios de salud de manera equitativa y oportuna."
  },
  {
    "pregunta": "La señora Kathia se acerca al puesto de salud temprano por una cita programada por enfermería, con su menor hijo de 15 meses de edad, trae su cartilla de vacunación. Según calendario vacunal. ¿Qué vacunas se le debe aplicar?",
    "opciones": {
      "A": "Varicela, contra Hepatitis B",
      "B": "Virus Hepatitis, influenza pediátrica",
      "C": "SPR, influenza pediátrica",
      "D": "Antiamarílica, contra Hepatitis A"
    },
    "id": 197,
    "respuesta": "D",
    "tema": "Cuidado Integral - Vacunación y ESAVI",
    "origen": "examen",
    "explicacion": "A los 15 meses, según el calendario de vacunación peruano, corresponde aplicar la vacuna antiamarílica (AMA) y la vacuna contra Hepatitis A. Estas vacunas se administran en dosis única a esta edad como parte del esquema regular de inmunizaciones del niño."
  },
  {
    "pregunta": "El personal de salud en Cañete atiende a una madre de familia y su hija de 5 años de edad; en la evaluación de la niña se evidencia: inapetente, sueño incrementado, piel seca y su ganancia de peso no fue de acuerdo a su edad; usa el hemoglobinómetro portátil, obteniendo Hb: 9 g/dL. ¿Inmediatamente correspondería realizar?",
    "opciones": {
      "A": "Análisis de laboratorio",
      "B": "Referir a hospital",
      "C": "Diagnostico diferencial",
      "D": "Prescripción nutricional"
    },
    "id": 198,
    "respuesta": "C",
    "tema": "Cuidado Integral - Prevención y control de anemia",
    "origen": "examen",
    "explicacion": "Con Hb de 9 g/dL (anemia moderada) y síntomas como inapetencia, sueño incrementado, piel seca y ganancia de peso inadecuada, lo inmediato es realizar diagnóstico diferencial. Los síntomas sugieren que la anemia puede tener múltiples causas (nutricional, parasitaria, hipotiroidismo) que deben diferenciarse para un tratamiento adecuado."
  },
  {
    "pregunta": "¿A qué corresponde la siguiente definición?: “Es el conjunto de acciones que desarrolla un profesional de la salud mediante el uso de las TIC, para proporcionar a la persona usuaria de salud, consejería y asesoría con fines de promoción de la salud, prevención, recuperación o rehabilitación de las enfermedades”.",
    "opciones": {
      "A": "Telemonitoreo",
      "B": "Teleconsulta",
      "C": "Teleorientación",
      "D": "Teleinterconsulta"
    },
    "id": 199,
    "respuesta": "C",
    "tema": "Gestión - Telesalud",
    "origen": "examen",
    "explicacion": "La teleorientación es el conjunto de acciones que desarrolla un profesional de salud mediante TIC para proporcionar consejería y asesoría con fines de promoción, prevención, recuperación o rehabilitación. Se diferencia de la teleconsulta (atención clínica) y la teleinterconsulta (entre profesionales)."
  },
  {
    "pregunta": "Varón de 35 años, acude al establecimiento I-2 para atención de morbilidad, como parte de la atención integral, se hace tamizaje de VIH con prueba rápida y tiene resultado reactivo, se aplica una segunda prueba con resultado No reactivo. ¿Cuál es el procedimiento a seguir?",
    "opciones": {
      "A": "Hacer seguimiento y tomar prueba en 3 días",
      "B": "Tomar muestra de suero para prueba confirmatoria",
      "C": "Iniciar tratamiento con primer resultado",
      "D": "Se descarta el caso con segundo resultado"
    },
    "id": 200,
    "respuesta": "B",
    "tema": "Cuidado Integral - VIH",
    "origen": "examen",
    "explicacion": "Cuando la primera prueba rápida de VIH es reactiva y la segunda es no reactiva (resultados discordantes), se debe tomar muestra de suero para prueba confirmatoria (ELISA o Western Blot). No se puede confirmar ni descartar el caso solo con pruebas rápidas discordantes; se requiere una prueba de mayor especificidad."
  },
  {
    "id": 201,
    "pregunta": "Las Funciones Esenciales de Salud Publica (FESP) son un conjunto de competencias y acciones necesarias para alcanzar el objetivo central de la salud publica. Cuantas FESP renovadas se reconocen actualmente?",
    "opciones": {
      "A": "9",
      "B": "11",
      "C": "8",
      "D": "12"
    },
    "respuesta": "B",
    "origen": "nueva",
    "tema": "Salud Pública - Conceptos básicos",
    "explicacion": "Actualmente se reconocen 11 Funciones Esenciales de Salud Pública (FESP) renovadas según la OPS/OMS. Incluyen vigilancia, promoción, gobernanza, financiamiento, acceso a servicios, recursos humanos, medicamentos, investigación, emergencias, equidad y acción intersectorial."
  },
  {
    "id": 202,
    "pregunta": "En epidemiologia, la medida que expresa la probabilidad de que un individuo expuesto a un factor de riesgo desarrolle la enfermedad en comparacion con uno no expuesto se denomina:",
    "opciones": {
      "A": "Odds ratio",
      "B": "Riesgo relativo",
      "C": "Riesgo atribuible",
      "D": "Tasa de mortalidad"
    },
    "respuesta": "B",
    "origen": "nueva",
    "tema": "Salud Pública - Epidemiología",
    "explicacion": "El riesgo relativo (RR) compara la probabilidad de enfermar entre expuestos vs no expuestos. Un RR > 1 indica mayor riesgo en expuestos. Se usa en estudios de cohortes. El Odds Ratio se usa en casos y controles, y el riesgo atribuible mide la diferencia absoluta de riesgo."
  },
  {
    "id": 203,
    "pregunta": "Segun los criterios de causalidad de Bradford Hill, cual es el unico criterio considerado indispensable?",
    "opciones": {
      "A": "Consistencia",
      "B": "Especificidad",
      "C": "Temporalidad",
      "D": "Plausibilidad biologica"
    },
    "respuesta": "C",
    "origen": "nueva",
    "tema": "Salud Pública - Causalidad y riesgo",
    "explicacion": "La temporalidad es el único criterio indispensable de Bradford Hill: la causa debe preceder al efecto. Sin temporalidad no puede haber causalidad. Los demás criterios refuerzan la asociación causal pero no son obligatorios."
  },
  {
    "id": 204,
    "pregunta": "La piramide poblacional de un pais muestra una base ancha y una cuspide estrecha. A que tipo de estructura poblacional corresponde?",
    "opciones": {
      "A": "Poblacion envejecida",
      "B": "Poblacion estacionaria",
      "C": "Poblacion joven o expansiva",
      "D": "Poblacion regresiva"
    },
    "respuesta": "C",
    "origen": "nueva",
    "tema": "Salud Pública - Demografía en salud",
    "explicacion": "Una pirámide con base ancha y cúspide estrecha indica población joven o expansiva: alta natalidad, alta mortalidad y baja esperanza de vida, típica de países en desarrollo. La población envejecida tiene base estrecha y cúspide ancha."
  },
  {
    "id": 205,
    "pregunta": "En la historia natural de la enfermedad, el periodo prepatogenico se caracteriza por la interaccion de tres elementos fundamentales conocidos como la triada ecologica. Cuales son?",
    "opciones": {
      "A": "Huesped, agente y vector",
      "B": "Agente, huesped y medio ambiente",
      "C": "Agente, vector y medio ambiente",
      "D": "Huesped, vector y reservorio"
    },
    "respuesta": "B",
    "origen": "nueva",
    "tema": "Salud Pública - Historia natural de la enfermedad",
    "explicacion": "La tríada ecológica está formada por agente (causa de enfermedad), huésped (persona susceptible) y medio ambiente (condiciones que facilitan la interacción). El vector es un medio de transmisión, no un componente de la tríada."
  },
  {
    "id": 206,
    "pregunta": "La prevencion cuaternaria tiene como objetivo evitar el dano producido por intervenciones medicas innecesarias. Cual de las siguientes acciones corresponde a este nivel?",
    "opciones": {
      "A": "Vacunacion contra la influenza",
      "B": "Tamizaje de cancer de mama",
      "C": "Evitar la medicalizacion innecesaria de procesos normales",
      "D": "Rehabilitacion de pacientes con secuelas de ACV"
    },
    "respuesta": "C",
    "origen": "nueva",
    "tema": "Salud Pública - Niveles de prevención",
    "explicacion": "La prevención cuaternaria evita el daño por intervenciones médicas innecesarias. Evitar la medicalización de procesos normales (parto fisiológico, duelo normal) es su ejemplo clásico. La vacunación es primaria, el tamizaje es secundaria y la rehabilitación es terciaria."
  },
  {
    "id": 207,
    "pregunta": "Una prueba diagnostica tiene alta especificidad. Esto significa que:",
    "opciones": {
      "A": "Detecta correctamente a la mayoria de los enfermos",
      "B": "Tiene pocos falsos positivos entre los sanos",
      "C": "Tiene alto valor predictivo negativo",
      "D": "Es util como prueba de tamizaje masivo"
    },
    "respuesta": "B",
    "origen": "nueva",
    "tema": "Salud Pública - Pruebas diagnósticas",
    "explicacion": "Alta especificidad significa que la prueba identifica correctamente a los sanos, generando pocos falsos positivos. Es buena para confirmar diagnóstico (SpPin). La sensibilidad detecta enfermos (pocos falsos negativos) y es mejor para tamizaje (SnNout)."
  },
  {
    "id": 208,
    "pregunta": "Cuando una enfermedad se presenta de forma habitual y constante en una region geografica determinada, se denomina:",
    "opciones": {
      "A": "Epidemia",
      "B": "Pandemia",
      "C": "Endemia",
      "D": "Brote"
    },
    "respuesta": "C",
    "origen": "nueva",
    "tema": "Salud Pública - Brotes y epidemias",
    "explicacion": "La endemia es la presencia habitual y constante de una enfermedad en una región geográfica con frecuencia esperada. La epidemia es un aumento inusual de casos, la pandemia se extiende a múltiples países y el brote es un aumento localizado."
  },
  {
    "id": 209,
    "pregunta": "Los cinco momentos del lavado de manos segun la OMS incluyen: antes del contacto con el paciente, antes de realizar una tarea aseptica, despues de la exposicion a fluidos corporales, despues del contacto con el paciente y:",
    "opciones": {
      "A": "Despues de retirarse los guantes",
      "B": "Antes de colocarse los guantes",
      "C": "Despues del contacto con el entorno del paciente",
      "D": "Antes de ingresar al establecimiento"
    },
    "respuesta": "C",
    "origen": "nueva",
    "tema": "Salud Pública - Prevención y control de infecciones",
    "explicacion": "El quinto momento es después del contacto con el entorno del paciente (cama, mesa, equipos). Los 5 momentos OMS: 1) antes del contacto, 2) antes de tarea aséptica, 3) después de fluidos, 4) después del contacto con paciente, 5) después del contacto con entorno."
  },
  {
    "id": 210,
    "pregunta": "Los determinantes sociales estructurales de la salud incluyen:",
    "opciones": {
      "A": "Condiciones de vivienda y acceso a agua potable",
      "B": "Gobernanza, politicas macroeconomicas, politicas sociales y valores culturales",
      "C": "Estilos de vida y conductas de riesgo individuales",
      "D": "Factores biologicos y geneticos"
    },
    "respuesta": "B",
    "origen": "nueva",
    "tema": "Salud Comunitaria - Determinantes sociales",
    "explicacion": "Los determinantes estructurales incluyen gobernanza, políticas macroeconómicas, políticas sociales y valores culturales. Generan estratificación social y determinan la posición socioeconómica. Los intermedios (vivienda, estilos de vida) son consecuencia de los estructurales."
  },
  {
    "id": 211,
    "pregunta": "La ficha familiar es un instrumento que permite al personal de salud identificar los riesgos de la familia. Cual es su principal utilidad en la atencion primaria?",
    "opciones": {
      "A": "Registrar las atenciones realizadas en el establecimiento",
      "B": "Identificar riesgos individuales y familiares para planificar intervenciones",
      "C": "Reemplazar la historia clinica individual",
      "D": "Cumplir con los indicadores de gestion del establecimiento"
    },
    "respuesta": "B",
    "origen": "nueva",
    "tema": "Salud Comunitaria - Sectorización y ficha familiar",
    "explicacion": "La ficha familiar identifica riesgos individuales y familiares para planificar intervenciones. No reemplaza la historia clínica sino que la complementa con información del contexto familiar y social, permitiendo un abordaje integral de la salud."
  },
  {
    "id": 212,
    "pregunta": "El sistema HIS en el Peru es utilizado principalmente para:",
    "opciones": {
      "A": "Registrar las referencias y contrarreferencias",
      "B": "Registrar las actividades y atenciones de salud realizadas en los establecimientos",
      "C": "Gestionar el inventario de medicamentos",
      "D": "Realizar la vigilancia epidemiologica de enfermedades transmisibles"
    },
    "respuesta": "B",
    "origen": "nueva",
    "tema": "Salud Comunitaria - Sistemas de información",
    "explicacion": "El HIS (Health Information System) registra las actividades y atenciones de salud realizadas en los establecimientos. Es el principal sistema de información del MINSA para el registro de prestaciones, permitiendo el análisis de producción y coberturas."
  },
  {
    "id": 213,
    "pregunta": "La inocuidad alimentaria se refiere a:",
    "opciones": {
      "A": "El valor nutricional de los alimentos consumidos",
      "B": "La garantia de que los alimentos no causaran dano al consumidor cuando se preparen y consuman",
      "C": "La cantidad suficiente de alimentos para la poblacion",
      "D": "La disponibilidad de alimentos organicos en el mercado"
    },
    "respuesta": "B",
    "origen": "nueva",
    "tema": "Salud Comunitaria - Alimentacion y nutricion",
    "explicacion": "La inocuidad alimentaria garantiza que los alimentos no causarán daño al consumidor cuando se preparen y consuman según su uso previsto. Abarca la ausencia de contaminantes biológicos, químicos y físicos en toda la cadena alimentaria."
  },
  {
    "id": 214,
    "pregunta": "En salud ocupacional, los riesgos psicosociales en el trabajador de salud incluyen:",
    "opciones": {
      "A": "Exposicion a radiaciones ionizantes",
      "B": "Estres laboral, burnout, acoso laboral y violencia en el trabajo",
      "C": "Manipulacion de sustancias quimicas peligrosas",
      "D": "Riesgos ergonomicos por posturas inadecuadas"
    },
    "respuesta": "B",
    "origen": "nueva",
    "tema": "Salud Comunitaria - Salud ocupacional",
    "explicacion": "Los riesgos psicosociales en trabajadores de salud incluyen estrés laboral, burnout (síndrome de agotamiento profesional), acoso laboral y violencia en el trabajo. Son factores que afectan la salud mental y el bienestar del trabajador, diferentes de los riesgos físicos, químicos o ergonómicos."
  },
  {
    "id": 215,
    "pregunta": "El modelo de salud mental comunitaria en el Peru se implementa a traves de los CSMC. Cual es su principal caracteristica?",
    "opciones": {
      "A": "Brindan atencion exclusivamente a pacientes con trastornos severos",
      "B": "Ofrecen atencion ambulatoria especializada en salud mental con enfoque comunitario y territorial",
      "C": "Funcionan como hospitales psiquiatricos descentralizados",
      "D": "Solo realizan actividades de promocion y prevencion"
    },
    "respuesta": "B",
    "origen": "nueva",
    "tema": "Salud Comunitaria - Salud mental comunitaria",
    "explicacion": "Los CSMC (Centros de Salud Mental Comunitaria) ofrecen atención ambulatoria especializada en salud mental con enfoque comunitario y territorial. No son hospitales psiquiátricos ni atienden solo trastornos severos; brindan atención integral incluyendo promoción, prevención, tratamiento y rehabilitación."
  },
  {
    "id": 216,
    "pregunta": "La Carta de Ottawa (1986) establece cinco areas de accion para la promocion de la salud. Cual de las siguientes NO es una de ellas?",
    "opciones": {
      "A": "Crear ambientes favorables para la salud",
      "B": "Fortalecer la accion comunitaria",
      "C": "Garantizar el acceso universal a medicamentos",
      "D": "Desarrollar aptitudes personales"
    },
    "respuesta": "C",
    "origen": "nueva",
    "tema": "Salud Pública - Promoción de la salud",
    "explicacion": "Garantizar el acceso universal a medicamentos NO es una de las 5 áreas de acción de la Carta de Ottawa. Las 5 áreas son: elaborar políticas públicas saludables, crear ambientes favorables, fortalecer la acción comunitaria, desarrollar aptitudes personales y reorientar los servicios de salud."
  },
  {
    "id": 217,
    "pregunta": "En bioseguridad, los residuos biocontaminados generados en establecimientos de salud se identifican con bolsas de color:",
    "opciones": {
      "A": "Negro",
      "B": "Amarillo",
      "C": "Rojo",
      "D": "Azul"
    },
    "respuesta": "C",
    "origen": "nueva",
    "tema": "Salud Pública - Bioseguridad",
    "explicacion": "Los residuos biocontaminados se identifican con bolsas rojas. Los residuos comunes van en bolsas negras y los residuos especiales en bolsas amarillas. Esta codificación por colores permite la segregación correcta desde el punto de generación y reduce el riesgo de contaminación cruzada."
  },
  {
    "id": 218,
    "pregunta": "La gestion del riesgo de desastres en salud comprende tres procesos fundamentales: estimacion del riesgo, prevencion y reduccion del riesgo, y:",
    "opciones": {
      "A": "Evaluacion de danos",
      "B": "Preparacion, respuesta y rehabilitacion",
      "C": "Reconstruccion de infraestructura",
      "D": "Capacitacion del personal"
    },
    "respuesta": "B",
    "origen": "nueva",
    "tema": "Salud Pública - Emergencias y desastres",
    "explicacion": "Los tres procesos de gestión del riesgo de desastres son: estimación del riesgo, prevención y reducción del riesgo, y preparación, respuesta y rehabilitación. Este último proceso incluye los planes de contingencia, la respuesta inmediata ante el desastre y la recuperación posterior."
  },
  {
    "id": 219,
    "pregunta": "El Proceso de Atencion de Enfermeria (PAE) consta de cinco etapas. Cual es el orden correcto?",
    "opciones": {
      "A": "Diagnostico, valoracion, planificacion, ejecucion, evaluacion",
      "B": "Valoracion, diagnostico, planificacion, ejecucion, evaluacion",
      "C": "Planificacion, valoracion, diagnostico, ejecucion, evaluacion",
      "D": "Valoracion, planificacion, diagnostico, ejecucion, evaluacion"
    },
    "respuesta": "B",
    "origen": "nueva",
    "tema": "Cuidado Integral - Proceso de atención de enfermería",
    "explicacion": "El PAE sigue el orden: Valoración (recolección de datos), Diagnóstico (identificación de problemas), Planificación (objetivos e intervenciones), Ejecución (implementación) y Evaluación (resultados). Es un método sistemático y científico para brindar cuidados de enfermería."
  },
  {
    "id": 220,
    "pregunta": "El esquema regular de vacunacion del nino incluye la vacuna BCG al recien nacido. Contra que formas de tuberculosis protege principalmente?",
    "opciones": {
      "A": "Tuberculosis pulmonar del adulto",
      "B": "Formas graves como meningitis tuberculosa y TB miliar en ninos",
      "C": "Tuberculosis extrapulmonar en adultos",
      "D": "Tuberculosis multidrogoresistente"
    },
    "respuesta": "B",
    "origen": "nueva",
    "tema": "Cuidado Integral - Vacunación y ESAVI",
    "explicacion": "La BCG protege contra formas graves de TB en niños: meningitis tuberculosa y TB miliar, con eficacia del 70-80%. No previene la TB pulmonar del adulto ni la TB multidrogoresistente. Se aplica al recién nacido dentro de las primeras 24 horas de vida."
  },
  {
    "id": 221,
    "pregunta": "La cadena de frio es el sistema de conservacion, transporte y distribucion de vacunas. Cual es el rango de temperatura recomendado para la mayoria de las vacunas?",
    "opciones": {
      "A": "-15 a -25 grados C",
      "B": "+2 a +8 grados C",
      "C": "0 a +2 grados C",
      "D": "+8 a +15 grados C"
    },
    "respuesta": "B",
    "origen": "nueva",
    "tema": "Cuidado Integral - Vacunación y ESAVI",
    "explicacion": "El rango de +2°C a +8°C mantiene la potencia de la mayoría de vacunas. Temperaturas menores a 0°C destruyen vacunas adsorbidas (Pentavalente, DPT, HvB) y temperaturas mayores a +8°C degradan los antígenos, especialmente de vacunas virales vivas."
  },
  {
    "id": 222,
    "pregunta": "La suplementacion preventiva con hierro en ninos nacidos a termino con adecuado peso al nacer se inicia a partir de los:",
    "opciones": {
      "A": "2 meses con 2 mg/kg/dia",
      "B": "4 meses con 2 mg/kg/dia",
      "C": "6 meses con 2 mg/kg/dia",
      "D": "1 mes con 2 mg/kg/dia"
    },
    "respuesta": "B",
    "origen": "nueva",
    "tema": "Cuidado Integral - Prevención y control de anemia",
    "explicacion": "En niños nacidos a término con peso adecuado, la suplementación preventiva con hierro inicia a los 4 meses con 2 mg/kg/día. Se inicia a esta edad porque las reservas de hierro del nacimiento empiezan a agotarse y la lactancia materna exclusiva no cubre los requerimientos."
  },
  {
    "id": 223,
    "pregunta": "Para el tamizaje de cancer de cuello uterino, la prueba recomendada en mujeres de 30 a 49 anos en el primer nivel de atencion es:",
    "opciones": {
      "A": "Papanicolaou anual",
      "B": "Inspeccion visual con acido acetico (IVAA)",
      "C": "Colposcopia directa",
      "D": "Biopsia de cuello uterino"
    },
    "respuesta": "B",
    "origen": "nueva",
    "tema": "Cuidado Integral - Prevención y control del Cáncer",
    "explicacion": "La IVAA (Inspección Visual con Ácido Acético) es la prueba recomendada para tamizaje de cáncer de cuello uterino en mujeres de 30-49 años en el primer nivel. Es simple, de bajo costo, resultado inmediato y no requiere laboratorio, ideal para establecimientos con recursos limitados."
  },
  {
    "id": 224,
    "pregunta": "En el tratamiento de tuberculosis sensible, el esquema de primera linea consta de dos fases. La primera fase dura:",
    "opciones": {
      "A": "1 mes con 4 medicamentos",
      "B": "2 meses con 4 medicamentos",
      "C": "3 meses con 3 medicamentos",
      "D": "2 meses con 3 medicamentos"
    },
    "respuesta": "B",
    "origen": "nueva",
    "tema": "Cuidado Integral - Tuberculosis",
    "explicacion": "El esquema de primera línea para TB sensible tiene dos fases: la primera dura 2 meses con 4 medicamentos (Isoniazida, Rifampicina, Pirazinamida y Etambutol) y la segunda fase dura 4 meses con 2 medicamentos (Isoniazida y Rifampicina). Total: 6 meses de tratamiento."
  },
  {
    "id": 225,
    "pregunta": "La transmision materno infantil del VIH puede ocurrir durante el embarazo, parto y lactancia. Cual es la medida mas efectiva para prevenirla?",
    "opciones": {
      "A": "Cesarea electiva en todos los casos",
      "B": "Tratamiento antirretroviral a la gestante y profilaxis al recien nacido",
      "C": "Suspension de lactancia materna exclusivamente",
      "D": "Tamizaje en el tercer trimestre solamente"
    },
    "respuesta": "B",
    "origen": "nueva",
    "tema": "Cuidado Integral - VIH",
    "explicacion": "La medida más efectiva para prevenir la transmisión materno-infantil del VIH es el tratamiento antirretroviral (TARGA) a la gestante y profilaxis al recién nacido. Esto reduce la transmisión vertical a menos del 2%. La cesárea sola o la suspensión de lactancia no son suficientes sin TARGA."
  },
  {
    "id": 226,
    "pregunta": "En la clasificacion nutricional del nino menor de 5 anos, cuando el indicador Talla/Edad se encuentra por debajo de -2 DS, se clasifica como:",
    "opciones": {
      "A": "Desnutricion aguda",
      "B": "Desnutricion cronica",
      "C": "Desnutricion global",
      "D": "Talla baja normal"
    },
    "respuesta": "B",
    "origen": "nueva",
    "tema": "Cuidado Integral - Alimentación y nutrición",
    "explicacion": "Cuando T/E está por debajo de -2 DS se clasifica como desnutrición crónica, que refleja un déficit nutricional prolongado que afectó el crecimiento lineal. La desnutrición aguda se refleja en P/T bajo y la global en P/E bajo. La talla baja es irreversible si no se interviene oportunamente."
  },
  {
    "id": 227,
    "pregunta": "El tamizaje neonatal permite la deteccion temprana de enfermedades raras. Cual de las siguientes se detecta mediante este tamizaje en el Peru?",
    "opciones": {
      "A": "Sindrome de Down",
      "B": "Hipotiroidismo congenito",
      "C": "Cardiopatia congenita",
      "D": "Displasia de cadera"
    },
    "respuesta": "B",
    "origen": "nueva",
    "tema": "Cuidado Integral - Enfermedades raras y huerfanas",
    "explicacion": "El hipotiroidismo congénito se detecta mediante el tamizaje neonatal (prueba del talón) midiendo TSH. La detección temprana permite iniciar tratamiento con levotiroxina antes de los 15 días de vida, previniendo el retardo mental irreversible. El Síndrome de Down se detecta prenatalmente."
  },
  {
    "id": 228,
    "pregunta": "Las IAAS se definen como aquellas que el paciente adquiere mientras recibe tratamiento. El tiempo minimo de hospitalizacion para considerar una IAAS es de:",
    "opciones": {
      "A": "24 horas",
      "B": "48 horas",
      "C": "72 horas",
      "D": "12 horas"
    },
    "respuesta": "B",
    "origen": "nueva",
    "tema": "Cuidado Integral - IAAS",
    "explicacion": "Una IAAS se considera cuando la infección aparece después de 48 horas de hospitalización y no estaba presente ni en incubación al momento del ingreso. Este criterio temporal permite diferenciar las infecciones adquiridas en el establecimiento de las que el paciente traía desde la comunidad."
  },
  {
    "id": 229,
    "pregunta": "En la atencion prenatal reenfocada, el numero minimo de controles prenatales recomendados es:",
    "opciones": {
      "A": "4 controles",
      "B": "6 controles",
      "C": "8 controles",
      "D": "10 controles"
    },
    "respuesta": "B",
    "origen": "nueva",
    "tema": "Cuidado Integral - Paquete prenatal",
    "explicacion": "La atención prenatal reenfocada recomienda un mínimo de 6 controles prenatales. El primero debe ser antes de las 14 semanas. Los controles permiten detectar riesgos, complicaciones, brindar suplementación, vacunación, consejería y preparación para el parto institucional."
  },
  {
    "id": 230,
    "pregunta": "El puerperio inmediato comprende las primeras:",
    "opciones": {
      "A": "2 horas postparto",
      "B": "24 horas postparto",
      "C": "48 horas postparto",
      "D": "72 horas postparto"
    },
    "respuesta": "B",
    "origen": "nueva",
    "tema": "Cuidado Integral - Embarazo, parto y puerperio",
    "explicacion": "El puerperio inmediato comprende las primeras 24 horas postparto. Es el periodo de mayor riesgo de hemorragia postparto y complicaciones. Se debe vigilar signos vitales, contracción uterina, sangrado vaginal y promover la lactancia materna y el contacto piel a piel."
  },
  {
    "id": 231,
    "pregunta": "El codigo de etica del Colegio de Enfermeros establece que la enfermera debe respetar la autonomia del paciente. Esto implica:",
    "opciones": {
      "A": "Tomar decisiones por el paciente cuando este confundido",
      "B": "Respetar el derecho del paciente a tomar decisiones informadas sobre su cuidado",
      "C": "Informar a la familia antes que al paciente",
      "D": "Seguir las indicaciones medicas sin consultar al paciente"
    },
    "respuesta": "B",
    "origen": "nueva",
    "tema": "Ética - Deontología",
    "explicacion": "Respetar la autonomía del paciente implica reconocer su derecho a tomar decisiones informadas sobre su cuidado. La enfermera debe proporcionar información clara y respetar la decisión del paciente, sin imponer ni decidir por él, salvo en situaciones de emergencia vital."
  },
  {
    "id": 232,
    "pregunta": "El derecho a la informacion del usuario incluye recibir informacion completa sobre su diagnostico en terminos:",
    "opciones": {
      "A": "Tecnicos y cientificos exclusivamente",
      "B": "Comprensibles y adecuados a su nivel cultural",
      "C": "Escritos y firmados por el medico tratante",
      "D": "Proporcionados solo a los familiares directos"
    },
    "respuesta": "B",
    "origen": "nueva",
    "tema": "Ética - Derechos de los usuarios",
    "explicacion": "El derecho a la información exige que el paciente reciba explicaciones comprensibles y adecuadas a su nivel cultural. No basta con usar términos técnicos; se debe adaptar el lenguaje para que el paciente entienda su diagnóstico, tratamiento, pronóstico y alternativas."
  },
  {
    "id": 233,
    "pregunta": "La adecuacion intercultural incluye la implementacion de la casa materna de espera. Cual es su principal objetivo?",
    "opciones": {
      "A": "Brindar alojamiento a gestantes de zonas alejadas para garantizar el parto institucional",
      "B": "Funcionar como centro de rehabilitacion para puerperas",
      "C": "Ofrecer atencion medica especializada a gestantes de alto riesgo",
      "D": "Capacitar a parteras tradicionales"
    },
    "respuesta": "A",
    "origen": "nueva",
    "tema": "Ética - Interculturalidad",
    "explicacion": "La casa materna de espera brinda alojamiento a gestantes de zonas alejadas para garantizar el parto institucional. Es una estrategia de adecuación intercultural que reduce la barrera geográfica, permitiendo que gestantes rurales accedan a atención calificada del parto cerca del establecimiento de salud."
  },
  {
    "id": 234,
    "pregunta": "En investigacion, un estudio de cohortes se caracteriza por:",
    "opciones": {
      "A": "Partir de la enfermedad y buscar la exposicion previa",
      "B": "Seguir a un grupo de expuestos y no expuestos en el tiempo para comparar la aparicion de la enfermedad",
      "C": "Medir prevalencia en un momento determinado",
      "D": "Asignar aleatoriamente la intervencion a los participantes"
    },
    "respuesta": "B",
    "origen": "nueva",
    "tema": "Investigación - Tipos de investigación",
    "explicacion": "El estudio de cohortes sigue a un grupo de expuestos y no expuestos en el tiempo para comparar la aparición de la enfermedad. Es prospectivo, permite calcular riesgo relativo e incidencia. Se diferencia de casos y controles (parte de la enfermedad) y del transversal (mide en un momento)."
  },
  {
    "id": 235,
    "pregunta": "La operacionalizacion de variables en una investigacion consiste en:",
    "opciones": {
      "A": "Definir el tamano de la muestra",
      "B": "Transformar las variables abstractas en indicadores medibles y observables",
      "C": "Seleccionar el diseno de investigacion adecuado",
      "D": "Elaborar el marco teorico del estudio"
    },
    "respuesta": "B",
    "origen": "nueva",
    "tema": "Investigación - Metodología",
    "explicacion": "La operacionalización transforma variables abstractas (como 'calidad de vida') en indicadores medibles y observables (puntaje en escala, dimensiones específicas). Define cómo se medirá cada variable, sus dimensiones, indicadores, ítems y escala de medición."
  },
  {
    "id": 236,
    "pregunta": "El ROF de un establecimiento de salud es un documento que:",
    "opciones": {
      "A": "Establece los procedimientos operativos de cada servicio",
      "B": "Define la estructura organica, funciones generales y especificas de la entidad",
      "C": "Programa las actividades anuales del establecimiento",
      "D": "Determina el presupuesto institucional"
    },
    "respuesta": "B",
    "origen": "nueva",
    "tema": "Gestión - Documentos normativos",
    "explicacion": "El ROF (Reglamento de Organización y Funciones) define la estructura orgánica, funciones generales y específicas de la entidad. Es diferente del MOF (funciones de cada cargo), del POI (actividades anuales) y del PIA (presupuesto institucional)."
  },
  {
    "id": 237,
    "pregunta": "Las Redes Integradas de Salud (RIS) tienen como finalidad:",
    "opciones": {
      "A": "Centralizar la atencion en hospitales de alta complejidad",
      "B": "Articular los establecimientos de salud para garantizar la continuidad de la atencion",
      "C": "Reemplazar el sistema de referencia y contrarreferencia",
      "D": "Administrar exclusivamente los recursos financieros"
    },
    "respuesta": "B",
    "origen": "nueva",
    "tema": "Gestion - Redes integradas de salud",
    "explicacion": "Las RIS articulan los establecimientos de salud de diferentes niveles para garantizar la continuidad de la atención. Permiten que el paciente transite entre niveles de complejidad de manera coordinada, asegurando atención integral desde la promoción hasta la rehabilitación."
  },
  {
    "id": 238,
    "pregunta": "La seguridad del paciente es un componente fundamental de la calidad en salud. Cual de las siguientes es una meta internacional de seguridad del paciente?",
    "opciones": {
      "A": "Reducir el tiempo de espera en consulta externa",
      "B": "Identificar correctamente a los pacientes",
      "C": "Aumentar la productividad del personal de salud",
      "D": "Mejorar la infraestructura del establecimiento"
    },
    "respuesta": "B",
    "origen": "nueva",
    "tema": "Gestión - Calidad de servicios de salud",
    "explicacion": "Identificar correctamente a los pacientes es una de las 6 metas internacionales de seguridad del paciente. Las demás son: mejorar comunicación efectiva, seguridad de medicamentos de alto riesgo, cirugía segura, reducir riesgo de IAAS y reducir riesgo de caídas."
  },
  {
    "id": 239,
    "pregunta": "El valor predictivo positivo (VPP) de una prueba diagnostica depende de:",
    "opciones": {
      "A": "Solo de la sensibilidad de la prueba",
      "B": "La prevalencia de la enfermedad en la poblacion",
      "C": "Solo de la especificidad de la prueba",
      "D": "El tamano de la muestra del estudio"
    },
    "respuesta": "B",
    "origen": "nueva",
    "tema": "Salud Pública - Pruebas diagnósticas",
    "explicacion": "El VPP depende de la prevalencia de la enfermedad en la población. A mayor prevalencia, mayor VPP. Una misma prueba tendrá diferente VPP según la población donde se aplique. También depende de sensibilidad y especificidad, pero la prevalencia es el factor determinante."
  },
  {
    "id": 240,
    "pregunta": "La tasa de mortalidad infantil mide las defunciones de menores de:",
    "opciones": {
      "A": "5 anos por cada 1000 nacidos vivos",
      "B": "1 ano por cada 1000 nacidos vivos",
      "C": "28 dias por cada 1000 nacidos vivos",
      "D": "1 ano por cada 10000 habitantes"
    },
    "respuesta": "B",
    "origen": "nueva",
    "tema": "Salud Pública - Demografía en salud",
    "explicacion": "La tasa de mortalidad infantil mide defunciones de menores de 1 año por cada 1000 nacidos vivos. La mortalidad neonatal es menores de 28 días y la mortalidad en menores de 5 años es otro indicador diferente. Es un indicador clave del desarrollo sanitario de un país."
  },
  {
    "id": 241,
    "pregunta": "El valor predictivo positivo (VPP) de una prueba diagnóstica depende de:",
    "opciones": {
      "A": "Solo de la sensibilidad de la prueba",
      "B": "La prevalencia de la enfermedad en la población",
      "C": "Solo de la especificidad de la prueba",
      "D": "El tamaño de la muestra del estudio"
    },
    "respuesta": "B",
    "origen": "nueva",
    "tema": "Salud Pública - Pruebas diagnósticas",
    "explicacion": "El VPP indica la probabilidad de que un resultado positivo sea verdaderamente positivo. Depende fundamentalmente de la prevalencia: en poblaciones con alta prevalencia el VPP aumenta, y en poblaciones con baja prevalencia disminuye, generando más falsos positivos."
  },
  {
    "id": 242,
    "pregunta": "El riesgo atribuible poblacional mide:",
    "opciones": {
      "A": "La proporción de enfermedad en expuestos que se debe al factor de riesgo",
      "B": "La proporción de enfermedad en la población total que se eliminaría si se suprimiera el factor de riesgo",
      "C": "La razón entre la incidencia en expuestos y no expuestos",
      "D": "La diferencia entre prevalencia e incidencia"
    },
    "respuesta": "B",
    "origen": "nueva",
    "tema": "Salud Pública - Epidemiología",
    "explicacion": "El riesgo atribuible poblacional mide la proporción de enfermedad en la población total que se eliminaría si se suprimiera el factor de riesgo. Es útil para priorizar intervenciones de salud pública, ya que indica el impacto potencial de eliminar un factor de riesgo a nivel poblacional."
  },
  {
    "id": 243,
    "pregunta": "La tasa bruta de mortalidad se calcula dividiendo el numero total de defunciones en un periodo entre:",
    "opciones": {
      "A": "El numero de nacidos vivos en ese periodo",
      "B": "La poblacion total estimada a mitad del periodo",
      "C": "El numero total de enfermos registrados",
      "D": "La poblacion mayor de 60 anos"
    },
    "respuesta": "B",
    "origen": "nueva",
    "tema": "Salud Pública - Demografía en salud",
    "explicacion": "La tasa bruta de mortalidad se calcula: defunciones totales / población total estimada a mitad del periodo x 1000. Se usa la población a mitad del periodo como denominador porque representa mejor la población expuesta al riesgo durante todo el año."
  },
  {
    "id": 244,
    "pregunta": "En la prevención secundaria, la detección precoz de enfermedades se realiza mediante:",
    "opciones": {
      "A": "Vacunación y quimioprofilaxis",
      "B": "Tamizaje y diagnóstico temprano",
      "C": "Rehabilitación y reinserción social",
      "D": "Promoción de estilos de vida saludables"
    },
    "respuesta": "B",
    "origen": "nueva",
    "tema": "Salud Pública - Niveles de prevención",
    "explicacion": "La prevención secundaria detecta precozmente enfermedades mediante tamizaje y diagnóstico temprano, cuando aún no hay síntomas o están en fase inicial. La vacunación es primaria, la rehabilitación es terciaria y la promoción de estilos de vida es primaria/primordial."
  },
  {
    "id": 245,
    "pregunta": "La vigilancia centinela se diferencia de la vigilancia universal porque:",
    "opciones": {
      "A": "Notifica todos los casos de todas las enfermedades",
      "B": "Se realiza en establecimientos seleccionados para monitorear tendencias de enfermedades específicas",
      "C": "Solo se aplica en situaciones de brote",
      "D": "Es exclusiva para enfermedades no transmisibles"
    },
    "respuesta": "B",
    "origen": "nueva",
    "tema": "Salud Pública - Vigilancia epidemiológica",
    "explicacion": "La vigilancia centinela se realiza en establecimientos seleccionados para monitorear tendencias de enfermedades específicas. A diferencia de la universal (todos los casos en todos los establecimientos), es más eficiente y permite obtener datos de mayor calidad sobre enfermedades priorizadas."
  },
  {
    "id": 246,
    "pregunta": "El saneamiento básico comprende un conjunto de intervenciones que incluyen:",
    "opciones": {
      "A": "Solo el abastecimiento de agua potable",
      "B": "Agua potable, disposición de excretas, manejo de residuos sólidos y control de vectores",
      "C": "Exclusivamente la construcción de letrinas",
      "D": "La pavimentación de calles y alumbrado público"
    },
    "respuesta": "B",
    "origen": "nueva",
    "tema": "Salud Comunitaria - Determinantes ambientales",
    "explicacion": "El saneamiento básico comprende: agua potable, disposición de excretas, manejo de residuos sólidos y control de vectores. Son intervenciones fundamentales para prevenir enfermedades transmisibles, especialmente diarreicas y metaxénicas, que afectan principalmente a poblaciones vulnerables."
  },
  {
    "id": 247,
    "pregunta": "La participación comunitaria en salud se fortalece a través de los agentes comunitarios de salud (ACS). Su principal función es:",
    "opciones": {
      "A": "Prescribir medicamentos básicos en la comunidad",
      "B": "Ser nexo entre la comunidad y los servicios de salud, promoviendo prácticas saludables",
      "C": "Reemplazar al personal de salud en zonas rurales",
      "D": "Realizar diagnósticos clínicos en la comunidad"
    },
    "respuesta": "B",
    "origen": "nueva",
    "tema": "Salud Comunitaria - Participación social y comunitaria",
    "explicacion": "Los ACS son el nexo entre la comunidad y los servicios de salud, promoviendo prácticas saludables. No prescriben medicamentos ni reemplazan al personal de salud. Su rol es educativo, de vigilancia comunitaria y de facilitación del acceso a los servicios de salud."
  },
  {
    "id": 248,
    "pregunta": "El plan de salud local es un instrumento de gestión que se elabora de manera participativa. Su principal insumo es:",
    "opciones": {
      "A": "El presupuesto institucional",
      "B": "El análisis de situación de salud (ASIS) local",
      "C": "El plan estratégico institucional",
      "D": "Las estadísticas nacionales de salud"
    },
    "respuesta": "B",
    "origen": "nueva",
    "tema": "Salud Comunitaria - Plan de salud local",
    "explicacion": "El plan de salud local se elabora participativamente y su principal insumo es el ASIS local. El ASIS proporciona el diagnóstico de la situación de salud del territorio, identificando problemas priorizados y determinantes que orientan las intervenciones del plan."
  },
  {
    "id": 249,
    "pregunta": "La receta electrónica en el sistema de salud peruano tiene como ventaja principal:",
    "opciones": {
      "A": "Eliminar la necesidad de farmacéutico",
      "B": "Reducir errores de prescripción y mejorar la trazabilidad del medicamento",
      "C": "Permitir la automedicación segura",
      "D": "Reemplazar la consulta médica presencial"
    },
    "respuesta": "B",
    "origen": "nueva",
    "tema": "Salud Comunitaria - Sistemas de información",
    "explicacion": "La receta electrónica reduce errores de prescripción (legibilidad, dosis, interacciones) y mejora la trazabilidad del medicamento desde la prescripción hasta la dispensación. No elimina la necesidad del farmacéutico ni permite automedicación."
  },
  {
    "id": 250,
    "pregunta": "La información, educación y comunicación (IEC) para la salud es una estrategia de promoción que busca:",
    "opciones": {
      "A": "Imponer conductas saludables a la población",
      "B": "Empoderar a las personas con conocimientos para tomar decisiones informadas sobre su salud",
      "C": "Difundir exclusivamente información sobre enfermedades",
      "D": "Capacitar solo al personal de salud"
    },
    "respuesta": "B",
    "origen": "nueva",
    "tema": "Salud Pública - Promoción de la salud",
    "explicacion": "La IEC busca empoderar a las personas con conocimientos para tomar decisiones informadas sobre su salud. No impone conductas sino que brinda herramientas para que la persona elija comportamientos saludables de manera autónoma e informada."
  },
  {
    "id": 251,
    "pregunta": "Los cuidados paliativos en enfermería se orientan a:",
    "opciones": {
      "A": "Curar la enfermedad terminal del paciente",
      "B": "Mejorar la calidad de vida del paciente y su familia ante una enfermedad amenazante para la vida",
      "C": "Prolongar la vida del paciente a toda costa",
      "D": "Aplicar exclusivamente tratamiento farmacológico para el dolor"
    },
    "respuesta": "B",
    "explicacion": "Los cuidados paliativos, según la OMS, buscan mejorar la calidad de vida del paciente y su familia frente a una enfermedad amenazante para la vida, mediante la prevención y alivio del sufrimiento con tratamiento del dolor y otros problemas físicos, psicosociales y espirituales. No buscan curar ni prolongar la vida a toda costa.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Cuidados paliativos"
  },
  {
    "id": 252,
    "pregunta": "La Atención Primaria de Salud (APS) renovada se basa en principios como universalidad, equidad, solidaridad e intersectorialidad. Su enfoque principal es:",
    "opciones": {
      "A": "La atención hospitalaria de alta complejidad",
      "B": "El derecho a la salud con participación social y abordaje integral",
      "C": "La atención exclusiva de enfermedades transmisibles",
      "D": "La reducción de costos en el sistema de salud"
    },
    "respuesta": "B",
    "explicacion": "La APS renovada (OPS/OMS) se fundamenta en el derecho a la salud, con participación social y abordaje integral. Sus principios incluyen universalidad, equidad, solidaridad e intersectorialidad, orientándose a resolver los problemas de salud desde el primer nivel de atención, no desde la alta complejidad hospitalaria.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Atención primaria de salud"
  },
  {
    "id": 253,
    "pregunta": "En el paquete de cuidado integral del adulto, el tamizaje de diabetes mellitus tipo 2 se realiza mediante:",
    "opciones": {
      "A": "Hemoglobina glicosilada en todos los pacientes",
      "B": "Glucemia en ayunas en personas con factores de riesgo",
      "C": "Prueba de tolerancia oral a la glucosa de rutina",
      "D": "Glucemia postprandial en todos los mayores de 18 años"
    },
    "respuesta": "B",
    "explicacion": "El tamizaje de diabetes mellitus tipo 2 en el paquete de cuidado integral del adulto se realiza mediante glucemia en ayunas en personas con factores de riesgo (sobrepeso, obesidad, antecedentes familiares, sedentarismo, etc.). No se usa hemoglobina glicosilada ni prueba de tolerancia oral como tamizaje de rutina en el primer nivel.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Enfermedades no transmisibles"
  },
  {
    "id": 254,
    "pregunta": "La malaria o paludismo es una enfermedad metaxénica transmitida por el mosquito del género:",
    "opciones": {
      "A": "Aedes",
      "B": "Anopheles",
      "C": "Culex",
      "D": "Lutzomyia"
    },
    "respuesta": "B",
    "explicacion": "La malaria es transmitida por la picadura de mosquitos hembra del género Anopheles infectados con Plasmodium. Aedes transmite dengue, Zika y chikungunya; Culex transmite filariasis y encefalitis; Lutzomyia transmite leishmaniasis.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Enfermedades metaxénicas y zoonóticas"
  },
  {
    "id": 255,
    "pregunta": "En el climaterio, los síntomas vasomotores como los bochornos y sudoraciones nocturnas se deben a:",
    "opciones": {
      "A": "Aumento de progesterona",
      "B": "Disminución de estrógenos",
      "C": "Aumento de testosterona",
      "D": "Disminución de prolactina"
    },
    "respuesta": "B",
    "explicacion": "Los bochornos y sudoraciones nocturnas del climaterio se producen por la disminución de estrógenos ováricos, lo que altera el centro termorregulador del hipotálamo. Esta caída estrogénica es la característica hormonal principal de la menopausia.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Climaterio y menopausia"
  },
  {
    "id": 256,
    "pregunta": "El principio de no maleficencia en bioética establece que el profesional de salud debe:",
    "opciones": {
      "A": "Hacer el mayor bien posible al paciente",
      "B": "No causar daño intencionado al paciente",
      "C": "Distribuir los recursos de manera equitativa",
      "D": "Respetar las decisiones del paciente"
    },
    "respuesta": "B",
    "explicacion": "El principio de no maleficencia (primum non nocere) establece la obligación de no causar daño intencionado al paciente. Se diferencia de la beneficencia (hacer el bien), la justicia (distribución equitativa) y la autonomía (respetar decisiones del paciente).",
    "origen": "nueva",
    "tema": "Ética - Bioética"
  },
  {
    "id": 257,
    "pregunta": "La estigma y discriminación hacia personas con VIH/SIDA en los servicios de salud vulnera principalmente el principio de:",
    "opciones": {
      "A": "Beneficencia",
      "B": "Justicia y equidad",
      "C": "Autonomía",
      "D": "No maleficencia"
    },
    "respuesta": "B",
    "explicacion": "La estigma y discriminación hacia personas con VIH/SIDA vulnera el principio de justicia y equidad, ya que se les niega un trato igualitario y acceso equitativo a los servicios de salud. Toda persona tiene derecho a recibir atención sin discriminación por su condición de salud.",
    "origen": "nueva",
    "tema": "Ética - Interculturalidad"
  },
  {
    "id": 258,
    "pregunta": "En investigación cuantitativa, la hipótesis nula (H0) generalmente establece que:",
    "opciones": {
      "A": "Existe una relación significativa entre las variables",
      "B": "No existe diferencia o asociación significativa entre las variables",
      "C": "La intervención produce un efecto positivo",
      "D": "Los resultados son estadísticamente significativos"
    },
    "respuesta": "B",
    "explicacion": "La hipótesis nula (H0) plantea que no existe diferencia o asociación significativa entre las variables estudiadas. Es la hipótesis que se busca rechazar mediante la prueba estadística. La hipótesis alternativa (H1) es la que propone que sí existe relación o diferencia.",
    "origen": "nueva",
    "tema": "Investigación - Procesamiento y análisis de datos"
  },
  {
    "id": 259,
    "pregunta": "El MOP (Manual de Organización y Procedimientos) de un establecimiento de salud describe:",
    "opciones": {
      "A": "Los objetivos estratégicos institucionales",
      "B": "Los procedimientos operativos y flujos de trabajo de cada unidad orgánica",
      "C": "El presupuesto anual del establecimiento",
      "D": "Las metas físicas del plan operativo"
    },
    "respuesta": "B",
    "explicacion": "El MOP (Manual de Organización y Procedimientos) es un documento normativo que describe los procedimientos operativos, flujos de trabajo y funciones de cada unidad orgánica del establecimiento de salud. No se refiere al presupuesto ni a los objetivos estratégicos, que corresponden a otros documentos de gestión.",
    "origen": "nueva",
    "tema": "Gestión - Documentos normativos"
  },
  {
    "id": 260,
    "pregunta": "En el sistema de referencia y contrarreferencia, la referencia se define como:",
    "opciones": {
      "A": "El retorno del paciente a su establecimiento de origen",
      "B": "El envío de un paciente a un establecimiento de mayor capacidad resolutiva para su atención",
      "C": "La interconsulta entre profesionales del mismo establecimiento",
      "D": "La derivación a medicina complementaria"
    },
    "respuesta": "B",
    "explicacion": "La referencia es el procedimiento por el cual un paciente es enviado desde un establecimiento de menor capacidad resolutiva a uno de mayor capacidad para su atención. La contrarreferencia es el proceso inverso: el retorno del paciente a su establecimiento de origen una vez resuelto el problema.",
    "origen": "nueva",
    "tema": "Gestión - Referencia y contrarreferencia"
  },
  {
    "id": 261,
    "pregunta": "La tasa de letalidad mide:",
    "opciones": {
      "A": "El número de casos nuevos en un periodo determinado",
      "B": "La proporción de personas que mueren entre los que enferman",
      "C": "El número total de muertes en la población",
      "D": "La velocidad de propagación de una enfermedad"
    },
    "respuesta": "B",
    "explicacion": "La tasa de letalidad mide la proporción de personas que mueren entre los que enferman de una determinada enfermedad. Se calcula: (número de muertes por la enfermedad / número de casos de la enfermedad) x 100. Indica la gravedad o virulencia de una enfermedad.",
    "origen": "nueva",
    "tema": "Salud Pública - Epidemiología"
  },
  {
    "id": 262,
    "pregunta": "En un estudio epidemiológico, el sesgo de selección ocurre cuando:",
    "opciones": {
      "A": "El instrumento de medición no es válido",
      "B": "Los participantes del estudio no son representativos de la población objetivo",
      "C": "El investigador conoce la hipótesis del estudio",
      "D": "Se pierde seguimiento de los participantes"
    },
    "respuesta": "B",
    "explicacion": "El sesgo de selección ocurre cuando los participantes del estudio no son representativos de la población objetivo, lo que distorsiona los resultados. Puede deberse a criterios de inclusión inadecuados, autoexclusión o muestreo no aleatorio. El sesgo de medición se refiere a instrumentos inválidos.",
    "origen": "nueva",
    "tema": "Salud Pública - Epidemiología"
  },
  {
    "id": 263,
    "pregunta": "La tasa de fecundidad general mide:",
    "opciones": {
      "A": "El número de nacidos vivos por cada 1000 habitantes",
      "B": "El número de nacidos vivos por cada 1000 mujeres en edad fértil (15-49 años)",
      "C": "El número de embarazos por cada 1000 mujeres",
      "D": "El promedio de hijos por mujer al final de su vida reproductiva"
    },
    "respuesta": "B",
    "explicacion": "La tasa de fecundidad general mide el número de nacidos vivos por cada 1000 mujeres en edad fértil (15-49 años). Se diferencia de la tasa de natalidad (nacidos vivos por 1000 habitantes totales) y de la tasa global de fecundidad (promedio de hijos por mujer al final de su vida reproductiva).",
    "origen": "nueva",
    "tema": "Salud Pública - Demografía en salud"
  },
  {
    "id": 264,
    "pregunta": "La prevención primordial se enfoca en:",
    "opciones": {
      "A": "Detectar la enfermedad en fase asintomática",
      "B": "Evitar la aparición de factores de riesgo en la población mediante políticas públicas",
      "C": "Tratar la enfermedad para evitar complicaciones",
      "D": "Rehabilitar al paciente después de la enfermedad"
    },
    "respuesta": "B",
    "explicacion": "La prevención primordial busca evitar la aparición de factores de riesgo en la población mediante políticas públicas y condiciones sociales favorables (ej: prohibir publicidad de tabaco). Va antes de la prevención primaria, que actúa cuando los factores de riesgo ya existen.",
    "origen": "nueva",
    "tema": "Salud Pública - Niveles de prevención"
  },
  {
    "id": 265,
    "pregunta": "El canal endémico es una herramienta gráfica utilizada en vigilancia epidemiológica que permite:",
    "opciones": {
      "A": "Calcular la tasa de incidencia de una enfermedad",
      "B": "Determinar si el número de casos observados está dentro de lo esperado o en situación de alerta/epidemia",
      "C": "Identificar el agente causal de una enfermedad",
      "D": "Establecer la cadena de transmisión de un brote"
    },
    "respuesta": "B",
    "explicacion": "El canal endémico es una gráfica que muestra las zonas de éxito, seguridad, alerta y epidemia de una enfermedad, construida con datos históricos de años anteriores. Permite comparar los casos observados actuales con lo esperado y detectar oportunamente situaciones de brote o epidemia.",
    "origen": "nueva",
    "tema": "Salud Pública - Vigilancia epidemiológica"
  },
  {
    "id": 266,
    "pregunta": "Los residuos sólidos especiales en establecimientos de salud incluyen:",
    "opciones": {
      "A": "Gasas y algodones contaminados con sangre",
      "B": "Residuos químicos, farmacéuticos y radioactivos",
      "C": "Restos de alimentos de los pacientes",
      "D": "Papel y cartón de oficina"
    },
    "respuesta": "B",
    "explicacion": "Los residuos especiales en establecimientos de salud incluyen residuos químicos (reactivos de laboratorio), farmacéuticos (medicamentos vencidos) y radioactivos. Los residuos biocontaminados (gasas con sangre) son otra categoría, y los residuos comunes (papel, cartón, restos de alimentos) son otra diferente.",
    "origen": "nueva",
    "tema": "Salud Comunitaria - Gestión de residuos sólidos"
  },
  {
    "id": 267,
    "pregunta": "El control biológico de vectores del dengue incluye el uso de:",
    "opciones": {
      "A": "Insecticidas piretroides en nebulización",
      "B": "Peces larvicidas como Gambusia en depósitos de agua",
      "C": "Trampas de luz ultravioleta",
      "D": "Repelentes de uso personal"
    },
    "respuesta": "B",
    "explicacion": "El control biológico de vectores del dengue utiliza organismos vivos como los peces larvicidas (Gambusia affinis) que se colocan en depósitos de agua para que se alimenten de las larvas de Aedes aegypti. Es una alternativa ecológica al control químico con insecticidas.",
    "origen": "nueva",
    "tema": "Salud Comunitaria - Control de vectores"
  },
  {
    "id": 268,
    "pregunta": "Las barreras geográficas de accesibilidad a los servicios de salud se refieren a:",
    "opciones": {
      "A": "El costo de los servicios de salud",
      "B": "La distancia, dificultad de transporte y condiciones del terreno que impiden llegar al establecimiento",
      "C": "Las diferencias culturales entre el personal y la población",
      "D": "La falta de personal de salud capacitado"
    },
    "respuesta": "B",
    "explicacion": "Las barreras geográficas se refieren a la distancia, dificultad de transporte y condiciones del terreno que impiden o dificultan el acceso al establecimiento de salud. Las barreras económicas se refieren al costo, las culturales a las diferencias culturales, y las organizativas a la falta de personal o recursos.",
    "origen": "nueva",
    "tema": "Salud Comunitaria - Accesibilidad a servicios de salud"
  },
  {
    "id": 269,
    "pregunta": "La estrategia de escuelas saludables como escenario de promoción de la salud busca:",
    "opciones": {
      "A": "Brindar atención médica a los escolares",
      "B": "Desarrollar conocimientos, habilidades y destrezas para el autocuidado de la salud en la comunidad educativa",
      "C": "Vacunar exclusivamente a los niños en edad escolar",
      "D": "Realizar diagnóstico de enfermedades prevalentes"
    },
    "respuesta": "B",
    "explicacion": "La estrategia de escuelas saludables busca desarrollar conocimientos, habilidades y destrezas para el autocuidado de la salud en toda la comunidad educativa (estudiantes, docentes, padres). Es un escenario de promoción de la salud que va más allá de la atención médica o la vacunación.",
    "origen": "nueva",
    "tema": "Salud Pública - Promoción de la salud"
  },
  {
    "id": 270,
    "pregunta": "Los equipos de protección personal (EPP) en bioseguridad se seleccionan según:",
    "opciones": {
      "A": "La disponibilidad en el almacén del establecimiento",
      "B": "El tipo de exposición y el mecanismo de transmisión del agente infeccioso",
      "C": "La preferencia del profesional de salud",
      "D": "El costo del equipo de protección"
    },
    "respuesta": "B",
    "explicacion": "Los EPP se seleccionan según el tipo de exposición (contacto, gotas, aérea) y el mecanismo de transmisión del agente infeccioso. No se eligen por disponibilidad, preferencia personal ni costo, sino por el riesgo específico del procedimiento a realizar.",
    "origen": "nueva",
    "tema": "Salud Pública - Bioseguridad"
  },
  {
    "id": 271,
    "pregunta": "La vacuna contra el VPH (Virus del Papiloma Humano) en el esquema regular peruano se administra a niñas de:",
    "opciones": {
      "A": "9 a 11 años en dos dosis",
      "B": "9 a 13 años en dos dosis",
      "C": "12 a 15 años en tres dosis",
      "D": "6 a 8 años en una dosis"
    },
    "respuesta": "B",
    "explicacion": "Según el esquema nacional de vacunación del Perú, la vacuna contra el VPH se administra a niñas de 9 a 13 años en dos dosis (con intervalo de 6 meses entre dosis). Se aplica antes del inicio de la actividad sexual para mayor efectividad en la prevención del cáncer de cuello uterino.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Vacunación y ESAVI"
  },
  {
    "id": 272,
    "pregunta": "En la evaluación del desarrollo psicomotor del niño menor de 5 años, el Test Peruano de Evaluación del Desarrollo (TPED) evalúa las áreas de:",
    "opciones": {
      "A": "Solo motricidad gruesa y fina",
      "B": "Comportamiento motor postural, viso motor, lenguaje, personal social e inteligencia-aprendizaje",
      "C": "Exclusivamente el área cognitiva y del lenguaje",
      "D": "Motricidad, nutrición y crecimiento"
    },
    "respuesta": "B",
    "explicacion": "El TPED (Test Peruano de Evaluación del Desarrollo) evalúa 12 líneas del desarrollo agrupadas en: comportamiento motor postural, comportamiento viso motor, lenguaje, personal social e inteligencia-aprendizaje. Se aplica a niños menores de 30 meses y permite detectar precozmente retrasos del desarrollo.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Paquete del niño"
  },
  {
    "id": 273,
    "pregunta": "La anemia en niños de 6 meses a 5 años se diagnostica cuando la hemoglobina ajustada por altitud es menor a:",
    "opciones": {
      "A": "12 g/dL",
      "B": "11 g/dL",
      "C": "10 g/dL",
      "D": "10.5 g/dL"
    },
    "respuesta": "B",
    "explicacion": "Según la OMS y la norma técnica peruana, la anemia en niños de 6 meses a 5 años se diagnostica cuando la hemoglobina (ajustada por altitud) es menor a 11 g/dL. Se clasifica en leve (10-10.9), moderada (7-9.9) y severa (menor a 7 g/dL).",
    "origen": "nueva",
    "tema": "Cuidado Integral - Prevención y control de anemia"
  },
  {
    "id": 274,
    "pregunta": "La búsqueda activa de sintomáticos respiratorios (SR) en tuberculosis consiste en identificar a personas que presentan tos por más de:",
    "opciones": {
      "A": "7 días",
      "B": "15 días o más",
      "C": "21 días",
      "D": "10 días"
    },
    "respuesta": "B",
    "explicacion": "El sintomático respiratorio (SR) es toda persona que presenta tos con o sin expectoración por 15 días o más. La búsqueda activa de SR es una estrategia clave para la detección temprana de tuberculosis pulmonar en el primer nivel de atención.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Tuberculosis"
  },
  {
    "id": 275,
    "pregunta": "La profilaxis post exposición (PEP) al VIH debe iniciarse idealmente dentro de las primeras:",
    "opciones": {
      "A": "24 horas y no más de 48 horas",
      "B": "2 horas y no más de 72 horas",
      "C": "6 horas y no más de 7 días",
      "D": "12 horas y no más de 5 días"
    },
    "respuesta": "B",
    "explicacion": "La profilaxis post exposición (PEP) al VIH debe iniciarse idealmente dentro de las primeras 2 horas y no más de 72 horas después de la exposición. Consiste en un esquema antirretroviral de 28 días. Después de 72 horas la eficacia disminuye significativamente.",
    "origen": "nueva",
    "tema": "Cuidado Integral - VIH"
  },
  {
    "id": 276,
    "pregunta": "Los signos de alarma en el embarazo que requieren atención inmediata incluyen:",
    "opciones": {
      "A": "Náuseas matutinas leves y cansancio",
      "B": "Sangrado vaginal, cefalea intensa, edema de manos y cara, convulsiones",
      "C": "Aumento de apetito y poliuria",
      "D": "Dolor lumbar leve y calambres en piernas"
    },
    "respuesta": "B",
    "explicacion": "Los signos de alarma en el embarazo que requieren atención inmediata son: sangrado vaginal, cefalea intensa, edema de manos y cara, convulsiones, visión borrosa, fiebre, pérdida de líquido amniótico y disminución de movimientos fetales. Las náuseas leves y el cansancio son síntomas normales del embarazo.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Emergencias obstétricas"
  },
  {
    "id": 277,
    "pregunta": "La comunicación intercultural en salud requiere que el profesional:",
    "opciones": {
      "A": "Imponga el modelo biomédico sobre las creencias del paciente",
      "B": "Escuche, comprenda y respete las concepciones de salud-enfermedad del usuario según su cultura",
      "C": "Traduzca literalmente los términos médicos al idioma local",
      "D": "Evite hablar sobre las prácticas tradicionales del paciente"
    },
    "respuesta": "B",
    "explicacion": "La comunicación intercultural requiere que el profesional escuche, comprenda y respete las concepciones de salud-enfermedad del usuario según su cultura. No se trata de imponer el modelo biomédico ni de traducir literalmente, sino de establecer un diálogo respetuoso que integre ambas perspectivas.",
    "origen": "nueva",
    "tema": "Ética - Interculturalidad"
  },
  {
    "id": 278,
    "pregunta": "El consentimiento informado en investigación debe incluir como mínimo:",
    "opciones": {
      "A": "Solo la firma del participante",
      "B": "Propósito del estudio, procedimientos, riesgos, beneficios, voluntariedad y confidencialidad",
      "C": "Exclusivamente los beneficios del estudio",
      "D": "La aprobación del director del establecimiento"
    },
    "respuesta": "B",
    "explicacion": "El consentimiento informado en investigación debe incluir como mínimo: propósito del estudio, procedimientos, riesgos, beneficios, voluntariedad de la participación, derecho a retirarse sin consecuencias y confidencialidad de los datos. Es un requisito ético fundamental según la Declaración de Helsinki.",
    "origen": "nueva",
    "tema": "Investigación - Aspectos éticos"
  },
  {
    "id": 279,
    "pregunta": "El proceso de mejora continua de la calidad en salud sigue el ciclo PHVA que significa:",
    "opciones": {
      "A": "Prevenir, Hacer, Verificar, Actuar",
      "B": "Planificar, Hacer, Verificar, Actuar",
      "C": "Planificar, Habilitar, Valorar, Analizar",
      "D": "Programar, Hacer, Validar, Ajustar"
    },
    "respuesta": "B",
    "explicacion": "El ciclo PHVA (Deming) significa: Planificar (identificar el problema y planear la mejora), Hacer (ejecutar lo planificado), Verificar (evaluar los resultados) y Actuar (estandarizar o corregir). Es la base de la mejora continua de la calidad en los servicios de salud.",
    "origen": "nueva",
    "tema": "Gestión - Calidad de servicios de salud"
  },
  {
    "id": 280,
    "pregunta": "La gestión de recursos humanos en salud incluye como componente fundamental:",
    "opciones": {
      "A": "Solo la contratación de personal",
      "B": "Planificación, selección, capacitación, evaluación del desempeño y bienestar del personal",
      "C": "Exclusivamente el control de asistencia",
      "D": "La distribución de medicamentos"
    },
    "respuesta": "B",
    "explicacion": "La gestión de recursos humanos en salud es un proceso integral que incluye: planificación de necesidades, selección del personal, capacitación continua, evaluación del desempeño y bienestar del personal. No se limita solo a la contratación o al control de asistencia.",
    "origen": "nueva",
    "tema": "Gestión - Recursos humanos"
  },
  {
    "id": 281,
    "pregunta": "El Odds Ratio (OR) se utiliza principalmente en estudios de tipo:",
    "opciones": {
      "A": "Cohortes prospectivas",
      "B": "Casos y controles",
      "C": "Ensayos clínicos aleatorizados",
      "D": "Ecológicos"
    },
    "respuesta": "B",
    "explicacion": "El Odds Ratio (OR) es la medida de asociación utilizada principalmente en estudios de casos y controles. Estima la probabilidad de exposición en los casos respecto a los controles. En estudios de cohortes se utiliza el Riesgo Relativo (RR).",
    "origen": "nueva",
    "tema": "Salud Pública - Epidemiología"
  },
  {
    "id": 282,
    "pregunta": "La esperanza de vida al nacer es un indicador que refleja:",
    "opciones": {
      "A": "La tasa de natalidad de un país",
      "B": "El número promedio de años que se espera viva un recién nacido según las condiciones de mortalidad actuales",
      "C": "La proporción de adultos mayores en la población",
      "D": "El número de defunciones por cada 1000 habitantes"
    },
    "respuesta": "B",
    "explicacion": "La esperanza de vida al nacer indica el número promedio de años que se espera viva un recién nacido si las condiciones de mortalidad actuales se mantienen. Es un indicador resumen de las condiciones de salud y desarrollo de un país. No mide natalidad ni proporción de adultos mayores.",
    "origen": "nueva",
    "tema": "Salud Pública - Demografía en salud"
  },
  {
    "id": 283,
    "pregunta": "En la historia natural de la enfermedad, el horizonte clínico marca:",
    "opciones": {
      "A": "El inicio del periodo prepatogénico",
      "B": "El momento en que aparecen los signos y síntomas clínicos",
      "C": "La recuperación total del paciente",
      "D": "El fin del periodo de incubación"
    },
    "respuesta": "B",
    "explicacion": "El horizonte clínico en la historia natural de la enfermedad marca el momento en que aparecen los signos y síntomas clínicos, separando el periodo subclínico (asintomático) del periodo clínico (sintomático). Antes del horizonte clínico la enfermedad solo es detectable por métodos de laboratorio o imagen.",
    "origen": "nueva",
    "tema": "Salud Pública - Historia natural de la enfermedad"
  },
  {
    "id": 284,
    "pregunta": "La investigación de un brote epidemiológico sigue pasos sistemáticos. El primer paso es:",
    "opciones": {
      "A": "Formular hipótesis sobre la fuente",
      "B": "Confirmar la existencia del brote y verificar el diagnóstico",
      "C": "Implementar medidas de control",
      "D": "Realizar la curva epidémica"
    },
    "respuesta": "B",
    "explicacion": "El primer paso en la investigación de un brote es confirmar su existencia y verificar el diagnóstico de los casos. Solo después se procede a definir el caso, buscar casos adicionales, describir la epidemiología (tiempo, lugar, persona), formular hipótesis e implementar medidas de control.",
    "origen": "nueva",
    "tema": "Salud Pública - Brotes y epidemias"
  },
  {
    "id": 285,
    "pregunta": "La descontaminación, limpieza, desinfección y esterilización son procesos de bioseguridad. La esterilización se diferencia de la desinfección porque:",
    "opciones": {
      "A": "Solo elimina bacterias patógenas",
      "B": "Elimina todas las formas de vida microbiana incluyendo esporas",
      "C": "Reduce la carga microbiana a niveles seguros",
      "D": "Solo se aplica a superficies"
    },
    "respuesta": "B",
    "explicacion": "La esterilización elimina todas las formas de vida microbiana, incluyendo esporas bacterianas, que son las más resistentes. La desinfección solo reduce la carga microbiana a niveles seguros pero no elimina esporas. Por eso la esterilización es necesaria para instrumental quirúrgico crítico.",
    "origen": "nueva",
    "tema": "Salud Pública - Bioseguridad"
  },
  {
    "id": 286,
    "pregunta": "Los determinantes intermedios de la salud incluyen:",
    "opciones": {
      "A": "Políticas macroeconómicas y gobernanza",
      "B": "Condiciones materiales de vida, factores psicosociales, conductas y sistema de salud",
      "C": "Clase social, género y etnia",
      "D": "Valores culturales y normas sociales"
    },
    "respuesta": "B",
    "explicacion": "Según el modelo de determinantes sociales de la OMS, los determinantes intermedios incluyen: condiciones materiales de vida (vivienda, alimentación), factores psicosociales (estrés), conductas (tabaquismo, sedentarismo) y el sistema de salud. Los determinantes estructurales son clase social, género, etnia y políticas macroeconómicas.",
    "origen": "nueva",
    "tema": "Salud Comunitaria - Determinantes sociales"
  },
  {
    "id": 287,
    "pregunta": "La sectorización en salud consiste en:",
    "opciones": {
      "A": "Clasificar los establecimientos por niveles de atención",
      "B": "Dividir el ámbito geográfico del establecimiento en sectores para asignar responsabilidad al personal de salud",
      "C": "Separar los servicios de salud por especialidades",
      "D": "Distribuir el presupuesto por áreas programáticas"
    },
    "respuesta": "B",
    "explicacion": "La sectorización consiste en dividir el ámbito geográfico del establecimiento de salud en sectores para asignar responsabilidad al personal. Cada sector tiene un equipo de salud responsable de las familias de esa zona, facilitando el seguimiento, la vigilancia comunitaria y las visitas domiciliarias.",
    "origen": "nueva",
    "tema": "Salud Comunitaria - Sectorización y ficha familiar"
  },
  {
    "id": 288,
    "pregunta": "El SIS (Seguro Integral de Salud) en el Perú tiene como objetivo principal:",
    "opciones": {
      "A": "Financiar exclusivamente la atención hospitalaria",
      "B": "Proteger financieramente a la población vulnerable garantizando el acceso a servicios de salud",
      "C": "Administrar los establecimientos de salud públicos",
      "D": "Regular los precios de los medicamentos"
    },
    "respuesta": "B",
    "explicacion": "El SIS tiene como objetivo principal proteger financieramente a la población en situación de pobreza y vulnerabilidad, garantizando su acceso a prestaciones de salud. Cubre atenciones en todos los niveles, no solo hospitalarias, y no administra establecimientos ni regula precios de medicamentos.",
    "origen": "nueva",
    "tema": "Salud Comunitaria - Sistemas de información"
  },
  {
    "id": 289,
    "pregunta": "La visita domiciliaria integral tiene como finalidad:",
    "opciones": {
      "A": "Verificar que el paciente tome su medicación",
      "B": "Evaluar las condiciones de vida, identificar riesgos y brindar cuidado integral a la familia en su entorno",
      "C": "Realizar censos poblacionales",
      "D": "Entregar medicamentos a domicilio"
    },
    "respuesta": "B",
    "explicacion": "La visita domiciliaria integral tiene como finalidad evaluar las condiciones de vida, identificar riesgos y brindar cuidado integral a la familia en su propio entorno. Permite conocer los determinantes de salud, fortalecer el vínculo con la familia y realizar intervenciones preventivo-promocionales.",
    "origen": "nueva",
    "tema": "Salud Comunitaria - Intervenciones comunitarias"
  },
  {
    "id": 290,
    "pregunta": "La educación para la salud se diferencia de la promoción de la salud porque:",
    "opciones": {
      "A": "Se enfoca en políticas públicas saludables",
      "B": "Se centra en el cambio de comportamientos individuales mediante procesos educativos",
      "C": "Aborda los determinantes sociales de la salud",
      "D": "Requiere participación intersectorial"
    },
    "respuesta": "B",
    "explicacion": "La educación para la salud se centra en el cambio de comportamientos individuales mediante procesos educativos (información, motivación, habilidades). La promoción de la salud es más amplia: incluye políticas públicas, entornos saludables, participación comunitaria y aborda los determinantes sociales.",
    "origen": "nueva",
    "tema": "Salud Pública - Promoción de la salud"
  },
  {
    "id": 291,
    "pregunta": "El cuidado integral de salud por curso de vida organiza las intervenciones según las etapas de vida. La etapa de vida joven comprende las edades de:",
    "opciones": {
      "A": "12 a 17 años",
      "B": "18 a 29 años",
      "C": "20 a 35 años",
      "D": "15 a 24 años"
    },
    "respuesta": "B",
    "explicacion": "Según la norma técnica peruana de cuidado integral por curso de vida, la etapa de vida joven comprende de 18 a 29 años. Las etapas son: niño (0-11), adolescente (12-17), joven (18-29), adulto (30-59) y adulto mayor (60 a más).",
    "origen": "nueva",
    "tema": "Cuidado Integral - Cuidado integral por curso de vida"
  },
  {
    "id": 292,
    "pregunta": "En el paquete de atención integral del adulto mayor, la escala de Katz evalúa:",
    "opciones": {
      "A": "El estado cognitivo",
      "B": "Las actividades básicas de la vida diaria",
      "C": "El riesgo de caídas",
      "D": "El estado nutricional"
    },
    "respuesta": "B",
    "explicacion": "La escala de Katz evalúa las actividades básicas de la vida diaria (ABVD): bañarse, vestirse, usar el inodoro, movilizarse, continencia y alimentarse. El estado cognitivo se evalúa con el Mini Mental (Pfeiffer), el riesgo de caídas con la escala de Tinetti y el estado nutricional con el MNA.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Paquete del adulto mayor"
  },
  {
    "id": 293,
    "pregunta": "La leishmaniasis cutánea (uta) es transmitida por el vector:",
    "opciones": {
      "A": "Aedes aegypti",
      "B": "Lutzomyia (mosquito de la arena)",
      "C": "Anopheles",
      "D": "Triatoma infestans"
    },
    "respuesta": "B",
    "explicacion": "La leishmaniasis cutánea (uta) es transmitida por la picadura de mosquitos del género Lutzomyia (mosquito de la arena o titira). Aedes aegypti transmite dengue, Anopheles transmite malaria y Triatoma infestans (chinche) transmite la enfermedad de Chagas.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Enfermedades metaxénicas y zoonóticas"
  },
  {
    "id": 294,
    "pregunta": "La sífilis congénita se previene mediante:",
    "opciones": {
      "A": "Vacunación del recién nacido",
      "B": "Tamizaje y tratamiento oportuno de la gestante con prueba reactiva",
      "C": "Cesárea electiva en todas las gestantes",
      "D": "Profilaxis antibiótica al recién nacido"
    },
    "respuesta": "B",
    "explicacion": "La sífilis congénita se previene mediante el tamizaje serológico (RPR/VDRL) de la gestante durante el control prenatal y el tratamiento oportuno con penicilina benzatínica cuando la prueba es reactiva. No existe vacuna contra la sífilis y la cesárea no previene la transmisión vertical.",
    "origen": "nueva",
    "tema": "Cuidado Integral - ITS y hepatitis"
  },
  {
    "id": 295,
    "pregunta": "El principio de justicia en bioética aplicado a la salud pública implica:",
    "opciones": {
      "A": "Tratar a todos los pacientes de la misma manera sin distinción",
      "B": "Distribuir equitativamente los recursos de salud priorizando a los más vulnerables",
      "C": "Respetar la autonomía del paciente en todas las circunstancias",
      "D": "Maximizar los beneficios para la mayoría"
    },
    "respuesta": "B",
    "explicacion": "El principio de justicia en salud pública implica distribuir equitativamente los recursos de salud priorizando a los más vulnerables. No significa tratar a todos igual (igualdad), sino dar más a quien más necesita (equidad). Busca reducir las inequidades en salud.",
    "origen": "nueva",
    "tema": "Ética - Bioética"
  },
  {
    "id": 296,
    "pregunta": "La medicina tradicional en el Perú es reconocida por la Constitución y la OMS. Su integración al sistema de salud se denomina:",
    "opciones": {
      "A": "Medicina alternativa obligatoria",
      "B": "Articulación entre la medicina tradicional y la medicina convencional",
      "C": "Reemplazo del sistema biomédico",
      "D": "Medicina complementaria exclusiva"
    },
    "respuesta": "B",
    "explicacion": "La integración de la medicina tradicional al sistema de salud se denomina articulación entre la medicina tradicional y la medicina convencional. La Constitución peruana y la OMS reconocen su valor y promueven su integración respetuosa, sin reemplazar el sistema biomédico.",
    "origen": "nueva",
    "tema": "Ética - Medicina tradicional"
  },
  {
    "id": 297,
    "pregunta": "En investigación, la validez interna de un estudio se refiere a:",
    "opciones": {
      "A": "La capacidad de generalizar los resultados a otras poblaciones",
      "B": "El grado en que los resultados reflejan la verdadera relación entre las variables estudiadas",
      "C": "La reproducción de los resultados en otros estudios",
      "D": "El tamaño de la muestra utilizada"
    },
    "respuesta": "B",
    "explicacion": "La validez interna se refiere al grado en que los resultados del estudio reflejan la verdadera relación entre las variables estudiadas, libre de sesgos y factores de confusión. La validez externa (generalizabilidad) es la capacidad de extrapolar los resultados a otras poblaciones.",
    "origen": "nueva",
    "tema": "Investigación - Metodología"
  },
  {
    "id": 298,
    "pregunta": "El presupuesto por resultados (PpR) en salud se orienta a:",
    "opciones": {
      "A": "Asignar recursos según la demanda histórica",
      "B": "Vincular la asignación de recursos al logro de resultados medibles en la población",
      "C": "Distribuir el presupuesto equitativamente entre todos los establecimientos",
      "D": "Financiar exclusivamente la compra de medicamentos"
    },
    "respuesta": "B",
    "explicacion": "El Presupuesto por Resultados (PpR) vincula la asignación de recursos públicos al logro de resultados medibles en la población. En salud, los programas presupuestales (como el Programa Articulado Nutricional) definen productos y resultados específicos que deben alcanzarse con los recursos asignados.",
    "origen": "nueva",
    "tema": "Gestión - Planificación y Presupuesto"
  },
  {
    "id": 299,
    "pregunta": "La teleconsulta se define como:",
    "opciones": {
      "A": "La consulta entre profesionales de salud para discutir un caso clínico",
      "B": "La atención de salud a distancia entre el profesional y el paciente mediante TIC",
      "C": "La capacitación virtual del personal de salud",
      "D": "El monitoreo remoto de signos vitales del paciente"
    },
    "respuesta": "B",
    "explicacion": "La teleconsulta es la atención de salud a distancia entre el profesional y el paciente mediante tecnologías de información y comunicación (TIC). Se diferencia de la teleinterconsulta (entre profesionales), la telecapacitación (formación virtual) y el telemonitoreo (seguimiento remoto de signos vitales).",
    "origen": "nueva",
    "tema": "Gestión - Telesalud"
  },
  {
    "id": 300,
    "pregunta": "El trabajo colaborativo en los servicios de salud se caracteriza por:",
    "opciones": {
      "A": "La competencia entre profesionales para lograr mejores resultados individuales",
      "B": "La cooperación entre diferentes profesionales con objetivos comunes centrados en el paciente",
      "C": "La delegación de funciones exclusivamente al personal técnico",
      "D": "El trabajo independiente de cada profesional sin coordinación"
    },
    "respuesta": "B",
    "explicacion": "El trabajo colaborativo en salud se caracteriza por la cooperación entre diferentes profesionales (médicos, enfermeras, obstetrices, etc.) con objetivos comunes centrados en el paciente. Implica comunicación efectiva, respeto mutuo y complementariedad de competencias para lograr mejores resultados en salud.",
    "origen": "nueva",
    "tema": "Gestión - Trabajo colaborativo"
  },
  {
    "id": 301,
    "pregunta": "La tasa de prevalencia de periodo mide:",
    "opciones": {
      "A": "Solo los casos nuevos de una enfermedad",
      "B": "Los casos nuevos y antiguos existentes en un periodo determinado",
      "C": "La velocidad de aparición de nuevos casos",
      "D": "La proporción de muertes por una enfermedad"
    },
    "respuesta": "B",
    "explicacion": "La tasa de prevalencia de periodo mide todos los casos (nuevos y antiguos) existentes durante un periodo determinado. Se diferencia de la prevalencia puntual (casos en un momento específico) y de la incidencia (solo casos nuevos).",
    "origen": "nueva",
    "tema": "Salud Pública - Epidemiología"
  },
  {
    "id": 302,
    "pregunta": "La razón de mortalidad materna se expresa por cada:",
    "opciones": {
      "A": "1000 mujeres en edad fértil",
      "B": "100,000 nacidos vivos",
      "C": "10,000 habitantes",
      "D": "1000 nacidos vivos"
    },
    "respuesta": "B",
    "explicacion": "La razón de mortalidad materna se expresa por cada 100,000 nacidos vivos. Mide las muertes maternas (durante el embarazo, parto o hasta 42 días postparto) en relación con los nacidos vivos, y es un indicador clave del desarrollo sanitario de un país.",
    "origen": "nueva",
    "tema": "Salud Pública - Demografía en salud"
  },
  {
    "id": 303,
    "pregunta": "El periodo de transmisibilidad de una enfermedad infecciosa es:",
    "opciones": {
      "A": "El tiempo entre la exposición y la aparición de síntomas",
      "B": "El intervalo durante el cual el agente infeccioso puede ser transferido de una persona infectada a otra",
      "C": "El tiempo que dura la enfermedad clínica",
      "D": "El periodo de convalecencia del paciente"
    },
    "respuesta": "B",
    "explicacion": "El periodo de transmisibilidad es el intervalo durante el cual el agente infeccioso puede ser transferido de una persona infectada a otra. Se diferencia del periodo de incubación (exposición a síntomas) y del periodo clínico (duración de la enfermedad).",
    "origen": "nueva",
    "tema": "Salud Pública - Historia natural de la enfermedad"
  },
  {
    "id": 304,
    "pregunta": "Una pandemia se diferencia de una epidemia porque:",
    "opciones": {
      "A": "Afecta solo a países en desarrollo",
      "B": "Se extiende a múltiples países o continentes afectando a un gran número de personas",
      "C": "Es causada exclusivamente por virus",
      "D": "Tiene mayor tasa de letalidad"
    },
    "respuesta": "B",
    "explicacion": "Una pandemia se diferencia de una epidemia porque se extiende a múltiples países o continentes afectando a un gran número de personas. No depende del tipo de agente ni de la letalidad, sino de la extensión geográfica y la magnitud de la propagación.",
    "origen": "nueva",
    "tema": "Salud Pública - Brotes y epidemias"
  },
  {
    "id": 305,
    "pregunta": "El manejo de los residuos punzocortantes en establecimientos de salud requiere su disposición en:",
    "opciones": {
      "A": "Bolsas rojas de plástico grueso",
      "B": "Recipientes rígidos, resistentes a punciones, con tapa y rotulados",
      "C": "Bolsas negras comunes",
      "D": "Cajas de cartón selladas"
    },
    "respuesta": "B",
    "explicacion": "Los residuos punzocortantes (agujas, bisturíes, ampollas rotas) deben disponerse en recipientes rígidos, resistentes a punciones, con tapa y rotulados (color amarillo). Nunca en bolsas plásticas ni cajas de cartón, ya que pueden causar accidentes por punción.",
    "origen": "nueva",
    "tema": "Salud Pública - Bioseguridad"
  },
  {
    "id": 306,
    "pregunta": "La exposición crónica a plomo en niños puede causar principalmente:",
    "opciones": {
      "A": "Problemas dermatológicos",
      "B": "Daño neurológico, retraso del desarrollo y anemia",
      "C": "Insuficiencia renal aguda",
      "D": "Problemas respiratorios crónicos"
    },
    "respuesta": "B",
    "explicacion": "La exposición crónica a plomo en niños causa daño neurológico (afecta el desarrollo cerebral), retraso del desarrollo psicomotor e intelectual, y anemia (interfiere con la síntesis de hemoglobina). Los niños son especialmente vulnerables porque absorben más plomo que los adultos.",
    "origen": "nueva",
    "tema": "Salud Pública - Exposición a metales pesados"
  },
  {
    "id": 307,
    "pregunta": "El enfoque de género en salud reconoce que:",
    "opciones": {
      "A": "Hombres y mujeres tienen las mismas necesidades de salud",
      "B": "Las desigualdades de género generan diferencias en el acceso, exposición a riesgos y resultados en salud",
      "C": "Solo las mujeres requieren atención diferenciada",
      "D": "Las diferencias biológicas son el único factor relevante"
    },
    "respuesta": "B",
    "explicacion": "El enfoque de género reconoce que las desigualdades de género generan diferencias en el acceso a servicios, exposición a riesgos y resultados en salud. No se trata solo de diferencias biológicas, sino de cómo los roles sociales de género afectan la salud de hombres y mujeres de manera diferenciada.",
    "origen": "nueva",
    "tema": "Salud Comunitaria - Determinantes sociales"
  },
  {
    "id": 308,
    "pregunta": "El trabajo intersectorial en salud implica:",
    "opciones": {
      "A": "La coordinación exclusiva entre establecimientos de salud",
      "B": "La articulación de diferentes sectores (educación, vivienda, agricultura) para abordar los determinantes de la salud",
      "C": "La derivación de pacientes entre niveles de atención",
      "D": "La contratación de personal de otros sectores"
    },
    "respuesta": "B",
    "explicacion": "El trabajo intersectorial implica la articulación de diferentes sectores (educación, vivienda, agricultura, transporte) para abordar los determinantes de la salud. Reconoce que la salud no depende solo del sector salud, sino de múltiples factores que requieren acción coordinada.",
    "origen": "nueva",
    "tema": "Salud Comunitaria - Trabajo intersectorial"
  },
  {
    "id": 309,
    "pregunta": "La salud ocupacional del trabajador de salud incluye la identificación de riesgos biológicos. El principal riesgo biológico es:",
    "opciones": {
      "A": "La exposición a ruido excesivo",
      "B": "El contacto con sangre y fluidos corporales de pacientes",
      "C": "La manipulación de sustancias químicas",
      "D": "Las posturas inadecuadas durante la jornada laboral"
    },
    "respuesta": "B",
    "explicacion": "El principal riesgo biológico para el trabajador de salud es el contacto con sangre y fluidos corporales de pacientes, que puede transmitir enfermedades como VIH, hepatitis B y C. El ruido es riesgo físico, las sustancias químicas son riesgo químico y las posturas inadecuadas son riesgo ergonómico.",
    "origen": "nueva",
    "tema": "Salud Comunitaria - Salud ocupacional"
  },
  {
    "id": 310,
    "pregunta": "Los ejes temáticos de promoción de la salud incluyen alimentación saludable, actividad física, salud sexual y reproductiva, higiene y ambiente, salud mental y cultura de paz, y:",
    "opciones": {
      "A": "Atención de emergencias",
      "B": "Seguridad vial y cultura de tránsito",
      "C": "Cirugía preventiva",
      "D": "Gestión hospitalaria"
    },
    "respuesta": "B",
    "explicacion": "Los ejes temáticos de promoción de la salud en Perú incluyen: alimentación saludable, actividad física, salud sexual y reproductiva, higiene y ambiente, salud mental y cultura de paz, y seguridad vial y cultura de tránsito. No incluyen atención de emergencias ni cirugía.",
    "origen": "nueva",
    "tema": "Salud Pública - Promoción de la salud"
  },
  {
    "id": 311,
    "pregunta": "La vacuna pentavalente protege contra cinco enfermedades: difteria, tétanos, tos ferina, hepatitis B y:",
    "opciones": {
      "A": "Poliomielitis",
      "B": "Haemophilus influenzae tipo b",
      "C": "Sarampión",
      "D": "Rotavirus"
    },
    "respuesta": "B",
    "explicacion": "La vacuna pentavalente protege contra: difteria, tétanos, tos ferina (pertussis), hepatitis B y Haemophilus influenzae tipo b (Hib). Se administra a los 2, 4 y 6 meses de edad. La polio se administra por separado (IPV/APO).",
    "origen": "nueva",
    "tema": "Cuidado Integral - Vacunación y ESAVI"
  },
  {
    "id": 312,
    "pregunta": "La lactancia materna exclusiva se recomienda durante los primeros:",
    "opciones": {
      "A": "4 meses de vida",
      "B": "6 meses de vida",
      "C": "8 meses de vida",
      "D": "12 meses de vida"
    },
    "respuesta": "B",
    "explicacion": "La OMS y el MINSA recomiendan lactancia materna exclusiva durante los primeros 6 meses de vida. Después se inicia la alimentación complementaria manteniendo la lactancia materna hasta los 2 años o más. La leche materna cubre todas las necesidades nutricionales del bebé hasta los 6 meses.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Alimentación y nutrición"
  },
  {
    "id": 313,
    "pregunta": "El cáncer de próstata se tamiza en varones mayores de 50 años mediante:",
    "opciones": {
      "A": "Ecografía abdominal anual",
      "B": "Tacto rectal y dosaje de PSA (Antígeno Prostático Específico)",
      "C": "Tomografía computarizada",
      "D": "Análisis de orina completo"
    },
    "respuesta": "B",
    "explicacion": "El tamizaje de cáncer de próstata en varones mayores de 50 años se realiza mediante tacto rectal y dosaje de PSA (Antígeno Prostático Específico) en sangre. Ambas pruebas son complementarias; el PSA elevado no confirma cáncer pero indica necesidad de estudios adicionales.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Prevención y control del Cáncer"
  },
  {
    "id": 314,
    "pregunta": "La canasta PAN TB (Paquete de Atención Nutricional para pacientes con TB) incluye:",
    "opciones": {
      "A": "Solo suplementos vitamínicos",
      "B": "Alimentos de alto valor nutricional para el paciente y su familia durante el tratamiento",
      "C": "Medicamentos antituberculosos",
      "D": "Equipos de protección personal"
    },
    "respuesta": "B",
    "explicacion": "La canasta PAN TB proporciona alimentos de alto valor nutricional para el paciente con tuberculosis y su familia durante el tratamiento. La nutrición adecuada es fundamental para la recuperación del paciente con TB, ya que la desnutrición es un factor de riesgo para mala evolución.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Tuberculosis"
  },
  {
    "id": 315,
    "pregunta": "La hepatitis B se transmite principalmente por:",
    "opciones": {
      "A": "Vía fecal-oral",
      "B": "Contacto con sangre, fluidos corporales, vía sexual y transmisión vertical",
      "C": "Picadura de mosquitos",
      "D": "Contacto con alimentos contaminados"
    },
    "respuesta": "B",
    "explicacion": "La hepatitis B se transmite por contacto con sangre y fluidos corporales (parenteral), vía sexual y transmisión vertical (madre a hijo). La hepatitis A y E se transmiten por vía fecal-oral. La vacunación contra hepatitis B se aplica al recién nacido dentro de las primeras 24 horas.",
    "origen": "nueva",
    "tema": "Cuidado Integral - ITS y hepatitis"
  },
  {
    "id": 316,
    "pregunta": "El manejo activo del tercer periodo del parto incluye:",
    "opciones": {
      "A": "Esperar la expulsión espontánea de la placenta sin intervención",
      "B": "Administración de oxitocina, tracción controlada del cordón y masaje uterino",
      "C": "Realizar cesárea de emergencia",
      "D": "Administrar antibióticos profilácticos"
    },
    "respuesta": "B",
    "explicacion": "El manejo activo del tercer periodo del parto (alumbramiento) incluye tres componentes: administración de oxitocina 10 UI IM dentro del primer minuto, tracción controlada del cordón umbilical y masaje uterino. Esto reduce el riesgo de hemorragia postparto, principal causa de muerte materna.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Embarazo, parto y puerperio"
  },
  {
    "id": 317,
    "pregunta": "La diversidad cultural en salud implica reconocer que:",
    "opciones": {
      "A": "Existe una única forma correcta de entender la salud y la enfermedad",
      "B": "Las diferentes culturas tienen concepciones propias sobre salud, enfermedad y prácticas de cuidado que deben ser respetadas",
      "C": "Las prácticas tradicionales deben ser prohibidas",
      "D": "Solo la medicina occidental es válida"
    },
    "respuesta": "B",
    "explicacion": "La diversidad cultural en salud implica reconocer que las diferentes culturas tienen concepciones propias sobre salud, enfermedad y prácticas de cuidado que deben ser respetadas. El enfoque intercultural busca integrar estas visiones sin imponer ni prohibir prácticas tradicionales.",
    "origen": "nueva",
    "tema": "Ética - Interculturalidad"
  },
  {
    "id": 318,
    "pregunta": "El asentimiento informado se requiere en investigación cuando los participantes son:",
    "opciones": {
      "A": "Adultos mayores de 65 años",
      "B": "Niños y adolescentes que pueden comprender la información del estudio",
      "C": "Gestantes en el tercer trimestre",
      "D": "Pacientes hospitalizados"
    },
    "respuesta": "B",
    "explicacion": "El asentimiento informado se requiere cuando los participantes son niños y adolescentes que pueden comprender la información del estudio. Además del asentimiento del menor, se necesita el consentimiento informado de sus padres o tutores legales. Es un requisito ético para proteger a poblaciones vulnerables.",
    "origen": "nueva",
    "tema": "Investigación - Aspectos éticos"
  },
  {
    "id": 319,
    "pregunta": "La categorización de establecimientos de salud en el Perú tiene como finalidad:",
    "opciones": {
      "A": "Determinar el presupuesto de cada establecimiento",
      "B": "Clasificar los establecimientos según su capacidad resolutiva para organizar la oferta de servicios",
      "C": "Asignar personal de salud según la demanda",
      "D": "Establecer los horarios de atención"
    },
    "respuesta": "B",
    "explicacion": "La categorización clasifica los establecimientos según su capacidad resolutiva (I-1 a III-2) para organizar la oferta de servicios en redes. Determina qué servicios puede ofrecer cada establecimiento según su infraestructura, equipamiento y recursos humanos disponibles.",
    "origen": "nueva",
    "tema": "Gestión - Clasificación de establecimientos"
  },
  {
    "id": 320,
    "pregunta": "El indicador de estructura en calidad de atención evalúa:",
    "opciones": {
      "A": "Los resultados obtenidos en la salud del paciente",
      "B": "Los recursos físicos, humanos, tecnológicos y organizacionales disponibles para la atención",
      "C": "Los procedimientos y actividades realizadas durante la atención",
      "D": "La satisfacción del usuario con el servicio recibido"
    },
    "respuesta": "B",
    "explicacion": "Según el modelo de Donabedian, los indicadores de estructura evalúan los recursos físicos, humanos, tecnológicos y organizacionales disponibles para la atención. Los indicadores de proceso evalúan las actividades realizadas, y los de resultado evalúan los cambios en la salud del paciente.",
    "origen": "nueva",
    "tema": "Gestión - Calidad de servicios de salud"
  },
  {
    "id": 321,
    "pregunta": "La incidencia acumulada se calcula dividiendo:",
    "opciones": {
      "A": "Casos prevalentes entre la población total",
      "B": "Casos nuevos entre la población en riesgo al inicio del periodo",
      "C": "Casos totales entre los años-persona de seguimiento",
      "D": "Defunciones entre los casos diagnosticados"
    },
    "respuesta": "B",
    "explicacion": "La incidencia acumulada se calcula dividiendo los casos nuevos entre la población en riesgo al inicio del periodo. Representa la probabilidad de que un individuo desarrolle la enfermedad durante un periodo específico. Se diferencia de la densidad de incidencia que usa personas-tiempo.",
    "origen": "nueva",
    "tema": "Salud Pública - Epidemiología"
  },
  {
    "id": 322,
    "pregunta": "La tasa bruta de natalidad se expresa como el número de nacidos vivos por cada:",
    "opciones": {
      "A": "100 mujeres en edad fértil",
      "B": "1000 habitantes en un año",
      "C": "10,000 habitantes",
      "D": "100,000 nacidos vivos"
    },
    "respuesta": "B",
    "explicacion": "La tasa bruta de natalidad se expresa como el número de nacidos vivos por cada 1000 habitantes en un año. Se diferencia de la tasa de fecundidad que usa como denominador solo las mujeres en edad fértil (15-49 años).",
    "origen": "nueva",
    "tema": "Salud Pública - Demografía en salud"
  },
  {
    "id": 323,
    "pregunta": "En la cadena epidemiológica, el reservorio es:",
    "opciones": {
      "A": "El mecanismo por el cual el agente sale del huésped",
      "B": "El hábitat natural donde el agente infeccioso vive, se multiplica y se mantiene",
      "C": "La vía por la cual el agente ingresa al nuevo huésped",
      "D": "El organismo que transporta al agente de un huésped a otro"
    },
    "respuesta": "B",
    "explicacion": "En la cadena epidemiológica, el reservorio es el hábitat natural donde el agente infeccioso vive, se multiplica y se mantiene. Puede ser humano, animal o ambiental. La puerta de salida es el mecanismo por el cual el agente sale, y el vector es el organismo que lo transporta.",
    "origen": "nueva",
    "tema": "Salud Pública - Historia natural de la enfermedad"
  },
  {
    "id": 324,
    "pregunta": "La curva epidémica de un brote por fuente común puntual se caracteriza por:",
    "opciones": {
      "A": "Múltiples picos a lo largo del tiempo",
      "B": "Un pico único con ascenso rápido y descenso gradual",
      "C": "Una meseta prolongada sin pico definido",
      "D": "Un patrón ondulante con periodos de remisión"
    },
    "respuesta": "B",
    "explicacion": "La curva epidémica de fuente común puntual (ej: intoxicación alimentaria en un evento) muestra un pico único con ascenso rápido y descenso gradual. Los casos se concentran en un periodo corto. En brotes propagados (persona a persona) se observan múltiples picos sucesivos.",
    "origen": "nueva",
    "tema": "Salud Pública - Brotes y epidemias"
  },
  {
    "id": 325,
    "pregunta": "El principio de precaución estándar en bioseguridad establece que:",
    "opciones": {
      "A": "Solo se deben usar EPP con pacientes diagnosticados con enfermedades infecciosas",
      "B": "Todo paciente y sus fluidos corporales deben considerarse potencialmente infectantes",
      "C": "Las medidas de bioseguridad solo aplican en áreas críticas",
      "D": "El lavado de manos es opcional si se usan guantes"
    },
    "respuesta": "B",
    "explicacion": "Las precauciones estándar en bioseguridad establecen que todo paciente y sus fluidos corporales deben considerarse potencialmente infectantes, independientemente de su diagnóstico. Se aplican en toda atención, no solo con pacientes diagnosticados con enfermedades infecciosas.",
    "origen": "nueva",
    "tema": "Salud Pública - Bioseguridad"
  },
  {
    "id": 326,
    "pregunta": "La pobreza como determinante social de la salud afecta principalmente a través de:",
    "opciones": {
      "A": "Factores genéticos heredados",
      "B": "Limitaciones en el acceso a alimentación, vivienda, educación y servicios de salud",
      "C": "La falta de voluntad individual para cuidar la salud",
      "D": "Exclusivamente la falta de medicamentos"
    },
    "respuesta": "B",
    "explicacion": "La pobreza afecta la salud a través de limitaciones en el acceso a alimentación adecuada, vivienda digna, educación y servicios de salud. Es el determinante social más importante de las inequidades en salud. No se debe a factores genéticos ni a falta de voluntad individual.",
    "origen": "nueva",
    "tema": "Salud Comunitaria - Determinantes sociales"
  },
  {
    "id": 327,
    "pregunta": "El modelo de atención integral de salud basado en familia y comunidad (MAIS-BFC) tiene como eje central:",
    "opciones": {
      "A": "La atención hospitalaria especializada",
      "B": "La persona, familia y comunidad como sujetos de atención con enfoque territorial",
      "C": "La gestión administrativa de los establecimientos",
      "D": "La investigación científica en salud"
    },
    "respuesta": "B",
    "explicacion": "El MAIS-BFC tiene como eje central a la persona, familia y comunidad como sujetos de atención con enfoque territorial. Prioriza la atención integral en el primer nivel, con énfasis en promoción, prevención y participación comunitaria, no en la atención hospitalaria.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Atención primaria de salud"
  },
  {
    "id": 328,
    "pregunta": "La alimentación complementaria del niño de 9 a 11 meses debe tener consistencia:",
    "opciones": {
      "A": "Líquida tipo sopa",
      "B": "Picada o en trozos pequeños",
      "C": "Tipo puré espeso",
      "D": "Igual a la del adulto"
    },
    "respuesta": "B",
    "explicacion": "A los 9-11 meses la alimentación complementaria debe ser picada o en trozos pequeños. La progresión es: 6-8 meses (puré espeso/aplastados), 9-11 meses (picados/trozos pequeños), 12 meses en adelante (consistencia de la familia). Nunca sopas ni caldos como alimento principal.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Alimentación y nutrición"
  },
  {
    "id": 329,
    "pregunta": "El tamizaje de cáncer colorrectal se recomienda a partir de los 50 años mediante:",
    "opciones": {
      "A": "Ecografía abdominal anual",
      "B": "Sangre oculta en heces y/o colonoscopía",
      "C": "Radiografía de abdomen simple",
      "D": "Marcadores tumorales en sangre"
    },
    "respuesta": "B",
    "explicacion": "El tamizaje de cáncer colorrectal a partir de los 50 años se realiza mediante prueba de sangre oculta en heces (anual) y/o colonoscopía (cada 10 años). La ecografía abdominal y la radiografía simple no son métodos adecuados para este tamizaje.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Prevención y control del Cáncer"
  },
  {
    "id": 330,
    "pregunta": "Las medidas de control de infecciones en tuberculosis en los servicios de salud incluyen tres niveles: administrativo, ambiental y:",
    "opciones": {
      "A": "Farmacológico",
      "B": "Protección respiratoria personal",
      "C": "Quirúrgico",
      "D": "Nutricional"
    },
    "respuesta": "B",
    "explicacion": "Las medidas de control de infecciones en TB tienen tres niveles: administrativo (triaje, separación de SR), ambiental (ventilación natural o mecánica, luz ultravioleta) y protección respiratoria personal (uso de respirador N95 por el personal de salud). Los tres niveles son complementarios.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Tuberculosis"
  },
  {
    "id": 331,
    "pregunta": "La enfermedad de Chagas es causada por el parásito Trypanosoma cruzi y transmitida por:",
    "opciones": {
      "A": "Mosquito Aedes aegypti",
      "B": "Chinche triatomino (Triatoma infestans)",
      "C": "Pulga del ratón",
      "D": "Garrapata"
    },
    "respuesta": "B",
    "explicacion": "La enfermedad de Chagas es causada por Trypanosoma cruzi y transmitida por el chinche triatomino (Triatoma infestans), conocido como 'chinche besucona' o 'vinchuca'. El parásito se transmite a través de las heces del insecto que se depositan en la piel durante la picadura.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Enfermedades metaxénicas y zoonóticas"
  },
  {
    "id": 332,
    "pregunta": "En la atención del puerperio, la primera consulta de control debe realizarse:",
    "opciones": {
      "A": "A los 15 días postparto",
      "B": "Dentro de los primeros 7 días postparto",
      "C": "Al mes del parto",
      "D": "Solo si la puérpera presenta complicaciones"
    },
    "respuesta": "B",
    "explicacion": "La primera consulta de control del puerperio debe realizarse dentro de los primeros 7 días postparto para evaluar involución uterina, loquios, signos de infección, lactancia materna, estado emocional y planificación familiar. No se debe esperar a que aparezcan complicaciones.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Embarazo, parto y puerperio"
  },
  {
    "id": 333,
    "pregunta": "El trato digno y humanizado en la atención de salud implica:",
    "opciones": {
      "A": "Atender rápidamente sin explicar los procedimientos",
      "B": "Respetar la dignidad, privacidad y derechos del paciente brindando un trato cálido y empático",
      "C": "Priorizar la eficiencia sobre la calidad de la relación con el paciente",
      "D": "Delegar la comunicación con el paciente al personal técnico"
    },
    "respuesta": "B",
    "explicacion": "El trato digno y humanizado implica respetar la dignidad, privacidad y derechos del paciente, brindando un trato cálido y empático. Incluye llamar al paciente por su nombre, explicar los procedimientos, respetar su intimidad y considerar sus necesidades emocionales y culturales.",
    "origen": "nueva",
    "tema": "Ética - Función pública"
  },
  {
    "id": 334,
    "pregunta": "La promoción del parto vertical responde al enfoque de:",
    "opciones": {
      "A": "Reducción de costos en la atención obstétrica",
      "B": "Pertinencia cultural y respeto a las prácticas ancestrales de las gestantes",
      "C": "Modernización de los servicios de salud",
      "D": "Estandarización de protocolos obstétricos"
    },
    "respuesta": "B",
    "explicacion": "La promoción del parto vertical responde al enfoque de pertinencia cultural y respeto a las prácticas ancestrales de las gestantes, especialmente de comunidades andinas y amazónicas. La norma técnica peruana reconoce el parto vertical como una opción válida que reduce barreras culturales de acceso.",
    "origen": "nueva",
    "tema": "Ética - Parto vertical"
  },
  {
    "id": 335,
    "pregunta": "En un estudio experimental, el grupo control es aquel que:",
    "opciones": {
      "A": "Recibe la intervención que se está evaluando",
      "B": "No recibe la intervención o recibe un placebo, sirviendo de comparación",
      "C": "Es seleccionado por conveniencia",
      "D": "Abandona el estudio antes de su finalización"
    },
    "respuesta": "B",
    "explicacion": "En un estudio experimental, el grupo control no recibe la intervención o recibe un placebo, sirviendo de comparación con el grupo experimental que sí recibe la intervención. Esto permite determinar si los efectos observados se deben realmente a la intervención y no a otros factores.",
    "origen": "nueva",
    "tema": "Investigación - Tipos de investigación"
  },
  {
    "id": 336,
    "pregunta": "La revisión sistemática como tipo de investigación se caracteriza por:",
    "opciones": {
      "A": "Recopilar datos primarios de pacientes",
      "B": "Sintetizar de manera rigurosa y reproducible la evidencia científica disponible sobre una pregunta específica",
      "C": "Describir un caso clínico interesante",
      "D": "Realizar encuestas a profesionales de salud"
    },
    "respuesta": "B",
    "explicacion": "La revisión sistemática sintetiza de manera rigurosa y reproducible toda la evidencia científica disponible sobre una pregunta específica. Utiliza una metodología explícita de búsqueda, selección y análisis crítico de estudios. Es el nivel más alto de evidencia científica.",
    "origen": "nueva",
    "tema": "Investigación - Publicación de resultados"
  },
  {
    "id": 337,
    "pregunta": "El PEI (Plan Estratégico Institucional) se elabora para un periodo de:",
    "opciones": {
      "A": "1 año",
      "B": "3 años",
      "C": "5 años",
      "D": "10 años"
    },
    "respuesta": "B",
    "explicacion": "El PEI (Plan Estratégico Institucional) se elabora para un periodo de 3 años. Define los objetivos estratégicos, acciones estratégicas e indicadores de la institución. El POI (Plan Operativo Institucional) es anual y el PESEM (Plan Estratégico Sectorial Multianual) es de mayor alcance.",
    "origen": "nueva",
    "tema": "Gestión - Planificación y Presupuesto"
  },
  {
    "id": 338,
    "pregunta": "La UPSS (Unidad Productora de Servicios de Salud) es:",
    "opciones": {
      "A": "Un documento normativo de gestión",
      "B": "La unidad básica funcional del establecimiento que genera un servicio de salud específico",
      "C": "El órgano de dirección del establecimiento",
      "D": "Un indicador de calidad de atención"
    },
    "respuesta": "B",
    "explicacion": "La UPSS es la unidad básica funcional del establecimiento que genera un servicio de salud específico (consulta externa, emergencia, hospitalización, laboratorio, etc.). Cada UPSS tiene recursos humanos, infraestructura y equipamiento propios para brindar su servicio.",
    "origen": "nueva",
    "tema": "Gestión - Clasificación de establecimientos"
  },
  {
    "id": 339,
    "pregunta": "El control de stock de medicamentos mediante el sistema FEFO (First Expire, First Out) significa:",
    "opciones": {
      "A": "El primero en entrar es el primero en salir",
      "B": "El primero en vencer es el primero en salir",
      "C": "El de mayor costo sale primero",
      "D": "El de menor demanda sale primero"
    },
    "respuesta": "B",
    "explicacion": "FEFO (First Expire, First Out) significa que el primero en vencer es el primero en salir. Es el sistema recomendado para el control de stock de medicamentos, ya que prioriza la dispensación de los medicamentos con fecha de vencimiento más próxima, evitando pérdidas por vencimiento.",
    "origen": "nueva",
    "tema": "Gestión - Control de inventario y medicamentos"
  },
  {
    "id": 340,
    "pregunta": "El liderazgo transformacional en los servicios de salud se caracteriza por:",
    "opciones": {
      "A": "Mantener el statu quo y evitar cambios",
      "B": "Inspirar y motivar al equipo hacia una visión compartida, promoviendo la innovación y el desarrollo profesional",
      "C": "Tomar todas las decisiones de manera unilateral",
      "D": "Enfocarse exclusivamente en el cumplimiento de normas"
    },
    "respuesta": "B",
    "explicacion": "El liderazgo transformacional inspira y motiva al equipo hacia una visión compartida, promoviendo la innovación y el desarrollo profesional. Se diferencia del liderazgo transaccional (basado en recompensas y castigos) y del autocrático (decisiones unilaterales).",
    "origen": "nueva",
    "tema": "Gestión - Liderazgo de servicios de salud"
  },
  {
    "id": 341,
    "pregunta": "La densidad de incidencia se diferencia de la incidencia acumulada porque utiliza como denominador:",
    "opciones": {
      "A": "La población total al inicio del estudio",
      "B": "Las personas-tiempo de observación (años-persona)",
      "C": "El número total de casos",
      "D": "La población al final del periodo"
    },
    "respuesta": "B",
    "explicacion": "La densidad de incidencia utiliza como denominador las personas-tiempo de observación (años-persona), lo que permite considerar los diferentes tiempos de seguimiento de cada participante. La incidencia acumulada usa la población en riesgo al inicio del periodo como denominador.",
    "origen": "nueva",
    "tema": "Salud Pública - Epidemiología"
  },
  {
    "id": 342,
    "pregunta": "La tasa global de fecundidad (TGF) representa:",
    "opciones": {
      "A": "El número de nacimientos por cada 1000 mujeres",
      "B": "El número promedio de hijos que tendría una mujer al final de su vida reproductiva",
      "C": "La proporción de mujeres embarazadas en un año",
      "D": "El número de partos atendidos en establecimientos de salud"
    },
    "respuesta": "B",
    "explicacion": "La tasa global de fecundidad (TGF) representa el número promedio de hijos que tendría una mujer al final de su vida reproductiva si las tasas de fecundidad actuales se mantuvieran. En Perú la TGF ha disminuido progresivamente y actualmente es alrededor de 2.2 hijos por mujer.",
    "origen": "nueva",
    "tema": "Salud Pública - Demografía en salud"
  },
  {
    "id": 343,
    "pregunta": "El periodo de latencia en enfermedades no transmisibles corresponde a:",
    "opciones": {
      "A": "El tiempo entre la exposición al agente y la aparición de síntomas en enfermedades infecciosas",
      "B": "El tiempo entre la exposición al factor de riesgo y la aparición de la enfermedad crónica",
      "C": "El periodo de contagiosidad de la enfermedad",
      "D": "La fase de recuperación del paciente"
    },
    "respuesta": "B",
    "explicacion": "El periodo de latencia en enfermedades no transmisibles (crónicas) es el tiempo entre la exposición al factor de riesgo y la aparición de la enfermedad. Puede ser de años o décadas (ej: exposición a tabaco y cáncer de pulmón). En enfermedades infecciosas se llama periodo de incubación.",
    "origen": "nueva",
    "tema": "Salud Pública - Historia natural de la enfermedad"
  },
  {
    "id": 344,
    "pregunta": "La inmunidad de rebaño o colectiva se logra cuando:",
    "opciones": {
      "A": "Todos los individuos de la población están vacunados",
      "B": "Un porcentaje suficiente de la población está inmunizada, protegiendo indirectamente a los no inmunizados",
      "C": "Se administran antibióticos profilácticos a toda la población",
      "D": "Se aísla a todos los casos confirmados"
    },
    "respuesta": "B",
    "explicacion": "La inmunidad de rebaño se logra cuando un porcentaje suficiente de la población está inmunizada, protegiendo indirectamente a los no inmunizados al reducir la circulación del agente. El umbral varía según la enfermedad (ej: sarampión requiere >95%, polio >80%).",
    "origen": "nueva",
    "tema": "Salud Pública - Prevención y control de infecciones"
  },
  {
    "id": 345,
    "pregunta": "El ASIS (Análisis de Situación de Salud) local analiza cuatro componentes principales: análisis del entorno, análisis de los determinantes, análisis del estado de salud y:",
    "opciones": {
      "A": "Análisis del presupuesto institucional",
      "B": "Análisis de la respuesta social e institucional",
      "C": "Análisis de la infraestructura hospitalaria",
      "D": "Análisis de los recursos humanos disponibles"
    },
    "respuesta": "B",
    "explicacion": "El ASIS local analiza cuatro componentes: análisis del entorno (geografía, demografía), análisis de los determinantes de la salud, análisis del estado de salud (morbilidad, mortalidad) y análisis de la respuesta social e institucional (servicios, programas, recursos). Es la base para la planificación local.",
    "origen": "nueva",
    "tema": "Salud Pública - ASIS"
  },
  {
    "id": 346,
    "pregunta": "La gestión integral de residuos sólidos en establecimientos de salud comprende las etapas de: acondicionamiento, segregación, almacenamiento primario, recolección interna, almacenamiento intermedio, transporte interno, almacenamiento final, tratamiento y:",
    "opciones": {
      "A": "Reciclaje",
      "B": "Disposición final",
      "C": "Incineración",
      "D": "Comercialización"
    },
    "respuesta": "B",
    "explicacion": "La última etapa de la gestión integral de residuos sólidos es la disposición final, que consiste en el confinamiento definitivo de los residuos en rellenos sanitarios autorizados. El reciclaje no aplica a residuos biocontaminados, y la incineración es un método de tratamiento, no de disposición final.",
    "origen": "nueva",
    "tema": "Salud Comunitaria - Gestión de residuos sólidos"
  },
  {
    "id": 347,
    "pregunta": "Las barreras culturales de accesibilidad a los servicios de salud incluyen:",
    "opciones": {
      "A": "La falta de transporte público",
      "B": "Diferencias de idioma, creencias sobre salud-enfermedad y desconfianza hacia el sistema de salud occidental",
      "C": "El costo elevado de los medicamentos",
      "D": "La falta de equipamiento médico"
    },
    "respuesta": "B",
    "explicacion": "Las barreras culturales incluyen diferencias de idioma, creencias sobre salud-enfermedad y desconfianza hacia el sistema de salud occidental. Son especialmente relevantes en poblaciones indígenas y rurales. Las barreras geográficas se refieren al transporte, y las económicas al costo.",
    "origen": "nueva",
    "tema": "Salud Comunitaria - Accesibilidad a servicios de salud"
  },
  {
    "id": 348,
    "pregunta": "Los municipios saludables como escenario de promoción de la salud buscan:",
    "opciones": {
      "A": "Construir hospitales en cada municipio",
      "B": "Que los gobiernos locales incorporen la salud como eje transversal en sus políticas y planes de desarrollo",
      "C": "Vacunar a toda la población del municipio",
      "D": "Contratar médicos para cada comunidad"
    },
    "respuesta": "B",
    "explicacion": "Los municipios saludables buscan que los gobiernos locales incorporen la salud como eje transversal en sus políticas y planes de desarrollo. Implica que las decisiones municipales (agua, saneamiento, transporte, espacios públicos) consideren su impacto en la salud de la población.",
    "origen": "nueva",
    "tema": "Salud Pública - Promoción de la salud"
  },
  {
    "id": 349,
    "pregunta": "La vacuna contra rotavirus se administra en el esquema regular peruano a los:",
    "opciones": {
      "A": "Al nacer y a los 2 meses",
      "B": "2 y 4 meses de edad",
      "C": "4 y 6 meses de edad",
      "D": "6 y 12 meses de edad"
    },
    "respuesta": "B",
    "explicacion": "La vacuna contra rotavirus en el esquema peruano se administra a los 2 y 4 meses de edad (dos dosis). Protege contra la gastroenteritis grave por rotavirus, principal causa de diarrea severa en niños menores de 5 años. Se administra por vía oral.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Vacunación y ESAVI"
  },
  {
    "id": 350,
    "pregunta": "La evaluación nutricional de la gestante se realiza mediante el índice de masa corporal (IMC) pregestacional y la ganancia de peso durante el embarazo. Una gestante con IMC pregestacional normal (18.5-24.9) debe ganar durante todo el embarazo:",
    "opciones": {
      "A": "5 a 9 kg",
      "B": "11.5 a 16 kg",
      "C": "7 a 11 kg",
      "D": "16 a 20 kg"
    },
    "respuesta": "B",
    "explicacion": "Según las recomendaciones del IOM (Institute of Medicine), una gestante con IMC pregestacional normal (18.5-24.9) debe ganar entre 11.5 a 16 kg durante todo el embarazo. Gestantes con bajo peso deben ganar más (12.5-18 kg), con sobrepeso menos (7-11.5 kg) y con obesidad aún menos (5-9 kg).",
    "origen": "nueva",
    "tema": "Cuidado Integral - Paquete prenatal"
  },
  {
    "id": 351,
    "pregunta": "El tratamiento de la anemia leve en niños de 6 meses a 5 años se realiza con hierro elemental a dosis de:",
    "opciones": {
      "A": "2 mg/kg/día",
      "B": "3 mg/kg/día",
      "C": "5 mg/kg/día",
      "D": "1 mg/kg/día"
    },
    "respuesta": "B",
    "explicacion": "El tratamiento de anemia leve en niños de 6 meses a 5 años es hierro elemental a 3 mg/kg/día durante 6 meses continuos. La dosis de suplementación preventiva es 2 mg/kg/día. En anemia moderada-severa también se usa 3 mg/kg/día pero con seguimiento más estrecho.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Prevención y control de anemia"
  },
  {
    "id": 352,
    "pregunta": "La enfermedad de Bartonelosis (Enfermedad de Carrión) es endémica en el Perú y se transmite por:",
    "opciones": {
      "A": "Mosquito Aedes aegypti",
      "B": "Picadura del mosquito Lutzomyia (titira)",
      "C": "Contacto directo con personas infectadas",
      "D": "Ingesta de agua contaminada"
    },
    "respuesta": "B",
    "explicacion": "La Bartonelosis (Enfermedad de Carrión) es endémica en valles interandinos del Perú y se transmite por la picadura del mosquito Lutzomyia (titira), el mismo vector de la leishmaniasis. Tiene dos fases: aguda (Fiebre de la Oroya) y crónica (Verruga Peruana).",
    "origen": "nueva",
    "tema": "Cuidado Integral - Enfermedades metaxénicas y zoonóticas"
  },
  {
    "id": 353,
    "pregunta": "La preeclampsia se diagnostica cuando la gestante presenta presión arterial ≥ 140/90 mmHg después de las 20 semanas de gestación asociada a:",
    "opciones": {
      "A": "Fiebre y escalofríos",
      "B": "Proteinuria significativa u otros signos de daño de órgano blanco",
      "C": "Sangrado vaginal abundante",
      "D": "Contracciones uterinas frecuentes"
    },
    "respuesta": "B",
    "explicacion": "La preeclampsia se diagnostica con PA ≥ 140/90 mmHg después de las 20 semanas asociada a proteinuria significativa (≥ 300 mg/24h) u otros signos de daño de órgano blanco (trombocitopenia, elevación de transaminasas, insuficiencia renal, edema pulmonar o síntomas cerebrales/visuales).",
    "origen": "nueva",
    "tema": "Cuidado Integral - Emergencias obstétricas"
  },
  {
    "id": 354,
    "pregunta": "La prevención de la estigma y discriminación étnico-cultural en los servicios de salud requiere:",
    "opciones": {
      "A": "Ignorar las diferencias culturales para tratar a todos por igual",
      "B": "Capacitar al personal en competencias interculturales y promover el respeto a la diversidad",
      "C": "Separar la atención por grupos étnicos",
      "D": "Aplicar protocolos estándar sin considerar el contexto cultural"
    },
    "respuesta": "B",
    "explicacion": "Prevenir la estigma étnico-cultural requiere capacitar al personal en competencias interculturales y promover el respeto a la diversidad. No se trata de ignorar las diferencias ni de separar la atención, sino de valorar y respetar las distintas culturas en el proceso de atención.",
    "origen": "nueva",
    "tema": "Ética - Interculturalidad"
  },
  {
    "id": 355,
    "pregunta": "El enfoque mixto en investigación combina:",
    "opciones": {
      "A": "Dos tipos de muestreo probabilístico",
      "B": "Métodos cuantitativos y cualitativos en un mismo estudio",
      "C": "Investigación básica y aplicada",
      "D": "Estudios longitudinales y transversales"
    },
    "respuesta": "B",
    "explicacion": "El enfoque mixto combina métodos cuantitativos (datos numéricos, estadística) y cualitativos (entrevistas, observación, análisis de contenido) en un mismo estudio. Permite una comprensión más completa del fenómeno al integrar ambas perspectivas metodológicas.",
    "origen": "nueva",
    "tema": "Investigación - Enfoques de investigación"
  },
  {
    "id": 356,
    "pregunta": "La escala de Likert es un instrumento de recolección de datos que mide:",
    "opciones": {
      "A": "Variables cuantitativas continuas",
      "B": "Actitudes, opiniones o percepciones mediante grados de acuerdo o desacuerdo",
      "C": "Variables dicotómicas exclusivamente",
      "D": "Datos antropométricos"
    },
    "respuesta": "B",
    "explicacion": "La escala de Likert mide actitudes, opiniones o percepciones mediante grados de acuerdo o desacuerdo (ej: totalmente de acuerdo, de acuerdo, neutral, en desacuerdo, totalmente en desacuerdo). Es una escala ordinal ampliamente usada en investigación en salud.",
    "origen": "nueva",
    "tema": "Investigación - Instrumentos de recolección"
  },
  {
    "id": 357,
    "pregunta": "El establecimiento de salud de categoría II-1 corresponde a:",
    "opciones": {
      "A": "Puesto de salud",
      "B": "Hospital con atención general",
      "C": "Centro de salud con internamiento",
      "D": "Instituto especializado"
    },
    "respuesta": "B",
    "explicacion": "La categoría II-1 corresponde a un hospital con atención general (segundo nivel). Las categorías del primer nivel son: I-1 (puesto de salud), I-2 (puesto con médico), I-3 (centro de salud) e I-4 (centro con internamiento). II-2 es hospital con especialidades y III son institutos especializados.",
    "origen": "nueva",
    "tema": "Gestión - Clasificación de establecimientos"
  },
  {
    "id": 358,
    "pregunta": "La historia clínica es un documento médico-legal que tiene carácter:",
    "opciones": {
      "A": "Público y de libre acceso",
      "B": "Confidencial y de propiedad del establecimiento de salud",
      "C": "Privado y de propiedad exclusiva del paciente",
      "D": "Opcional según el tipo de atención"
    },
    "respuesta": "B",
    "explicacion": "La historia clínica es un documento médico-legal de carácter confidencial y de propiedad del establecimiento de salud. El paciente tiene derecho a acceder a su información y solicitar copias, pero el documento físico pertenece al establecimiento. Su manejo debe respetar la confidencialidad.",
    "origen": "nueva",
    "tema": "Gestión - Historia clínica"
  },
  {
    "id": 359,
    "pregunta": "El telemonitoreo en salud se define como:",
    "opciones": {
      "A": "La consulta médica a distancia entre profesional y paciente",
      "B": "El seguimiento y control a distancia de parámetros clínicos del paciente mediante dispositivos y TIC",
      "C": "La capacitación virtual del personal de salud",
      "D": "La interconsulta entre especialistas a distancia"
    },
    "respuesta": "B",
    "explicacion": "El telemonitoreo es el seguimiento y control a distancia de parámetros clínicos del paciente (presión arterial, glucemia, saturación) mediante dispositivos y TIC. Se diferencia de la teleconsulta (atención profesional-paciente), teleinterconsulta (entre profesionales) y telecapacitación (formación).",
    "origen": "nueva",
    "tema": "Gestión - Telesalud"
  },
  {
    "id": 360,
    "pregunta": "La satisfacción del usuario es un indicador de calidad que mide:",
    "opciones": {
      "A": "La eficiencia en el uso de recursos",
      "B": "La percepción del usuario sobre el cumplimiento de sus expectativas respecto a la atención recibida",
      "C": "El número de atenciones realizadas por día",
      "D": "La capacidad resolutiva del establecimiento"
    },
    "respuesta": "B",
    "explicacion": "La satisfacción del usuario mide la percepción del usuario sobre el cumplimiento de sus expectativas respecto a la atención recibida. Es un indicador de resultado en calidad (modelo Donabedian). Se evalúa mediante encuestas como SERVQUAL adaptada a servicios de salud.",
    "origen": "nueva",
    "tema": "Gestión - Calidad de servicios de salud"
  },
  {
    "id": 361,
    "pregunta": "El sesgo de información en un estudio epidemiológico ocurre cuando:",
    "opciones": {
      "A": "Los participantes no son representativos de la población",
      "B": "Hay errores sistemáticos en la medición o clasificación de las variables",
      "C": "Una tercera variable confunde la relación entre exposición y enfermedad",
      "D": "El tamaño de muestra es insuficiente"
    },
    "respuesta": "B",
    "explicacion": "El sesgo de información (o medición) ocurre cuando hay errores sistemáticos en la medición o clasificación de las variables (exposición o desenlace). El sesgo de selección se refiere a participantes no representativos, y la confusión a una tercera variable que distorsiona la relación.",
    "origen": "nueva",
    "tema": "Salud Pública - Epidemiología"
  },
  {
    "id": 362,
    "pregunta": "La tasa de mortalidad neonatal mide las defunciones ocurridas en los primeros:",
    "opciones": {
      "A": "7 días de vida por cada 1000 nacidos vivos",
      "B": "28 días de vida por cada 1000 nacidos vivos",
      "C": "24 horas de vida por cada 1000 nacidos vivos",
      "D": "1 año de vida por cada 1000 nacidos vivos"
    },
    "respuesta": "B",
    "explicacion": "La mortalidad neonatal mide las defunciones en los primeros 28 días de vida por cada 1000 nacidos vivos. Se subdivide en neonatal precoz (0-6 días) y neonatal tardía (7-27 días). La mortalidad infantil incluye todo el primer año de vida.",
    "origen": "nueva",
    "tema": "Salud Pública - Demografía en salud"
  },
  {
    "id": 363,
    "pregunta": "La puerta de entrada del agente infeccioso en la cadena epidemiológica puede ser:",
    "opciones": {
      "A": "Solo la vía respiratoria",
      "B": "Respiratoria, digestiva, cutánea, mucosas, genital o parenteral",
      "C": "Exclusivamente la vía parenteral",
      "D": "Solo la vía digestiva"
    },
    "respuesta": "B",
    "explicacion": "La puerta de entrada del agente infeccioso puede ser múltiple: respiratoria (inhalación), digestiva (ingestión), cutánea (piel lesionada), mucosas (conjuntival), genital (sexual) o parenteral (inyección, transfusión). No se limita a una sola vía.",
    "origen": "nueva",
    "tema": "Salud Pública - Historia natural de la enfermedad"
  },
  {
    "id": 364,
    "pregunta": "La notificación inmediata en vigilancia epidemiológica se realiza para enfermedades como:",
    "opciones": {
      "A": "Hipertensión arterial y diabetes",
      "B": "Sarampión, peste, cólera, rabia humana y muerte materna",
      "C": "Infecciones respiratorias agudas leves",
      "D": "Caries dental y gingivitis"
    },
    "respuesta": "B",
    "explicacion": "La notificación inmediata (dentro de las 24 horas) se realiza para enfermedades de alto impacto como sarampión, peste, cólera, rabia humana, muerte materna, parálisis fláccida aguda, entre otras. Las enfermedades crónicas como HTA y diabetes no requieren notificación inmediata.",
    "origen": "nueva",
    "tema": "Salud Pública - Vigilancia epidemiológica"
  },
  {
    "id": 365,
    "pregunta": "El uso racional de medicamentos según la OMS implica que los pacientes reciban:",
    "opciones": {
      "A": "El medicamento más costoso disponible",
      "B": "El medicamento apropiado, en la dosis correcta, durante el tiempo adecuado y al menor costo",
      "C": "Medicamentos de marca exclusivamente",
      "D": "Todos los medicamentos que soliciten"
    },
    "respuesta": "B",
    "explicacion": "Según la OMS, el uso racional de medicamentos implica que los pacientes reciban el medicamento apropiado a sus necesidades clínicas, en la dosis correcta, durante el tiempo adecuado y al menor costo posible. Esto incluye preferir medicamentos genéricos cuando estén disponibles.",
    "origen": "nueva",
    "tema": "Salud Pública - Uso racional de medicamentos"
  },
  {
    "id": 366,
    "pregunta": "El agua segura para consumo humano debe cumplir con parámetros de calidad que incluyen ausencia de:",
    "opciones": {
      "A": "Solo minerales pesados",
      "B": "Coliformes termotolerantes, parásitos y sustancias químicas por encima de los límites permisibles",
      "C": "Exclusivamente cloro residual",
      "D": "Solo turbidez"
    },
    "respuesta": "B",
    "explicacion": "El agua segura debe estar libre de coliformes termotolerantes (indicadores de contaminación fecal), parásitos y sustancias químicas por encima de los límites permisibles. También debe tener cloro residual entre 0.5-1 mg/L como garantía de potabilidad.",
    "origen": "nueva",
    "tema": "Salud Comunitaria - Determinantes ambientales"
  },
  {
    "id": 367,
    "pregunta": "La Junta Vecinal Comunal de Salud (JUVECS) es un espacio de:",
    "opciones": {
      "A": "Gestión administrativa del establecimiento",
      "B": "Participación ciudadana para la vigilancia y mejora de los servicios de salud",
      "C": "Capacitación exclusiva del personal de salud",
      "D": "Distribución de medicamentos a la comunidad"
    },
    "respuesta": "B",
    "explicacion": "La JUVECS es un espacio de participación ciudadana para la vigilancia y mejora de los servicios de salud. Está conformada por representantes de la comunidad que vigilan la calidad de atención, canalizan quejas y proponen mejoras en coordinación con el establecimiento.",
    "origen": "nueva",
    "tema": "Salud Comunitaria - Participación social y comunitaria"
  },
  {
    "id": 368,
    "pregunta": "Las familias saludables como escenario de promoción de la salud se caracterizan por:",
    "opciones": {
      "A": "No tener ningún miembro enfermo",
      "B": "Adoptar prácticas saludables, mantener un entorno favorable y participar activamente en el cuidado de su salud",
      "C": "Tener acceso a seguro de salud privado",
      "D": "Vivir en zonas urbanas con todos los servicios básicos"
    },
    "respuesta": "B",
    "explicacion": "Las familias saludables adoptan prácticas saludables (alimentación, higiene, actividad física), mantienen un entorno favorable (vivienda limpia, agua segura) y participan activamente en el cuidado de su salud. No significa ausencia de enfermedad, sino capacidad de autocuidado.",
    "origen": "nueva",
    "tema": "Salud Pública - Promoción de la salud"
  },
  {
    "id": 369,
    "pregunta": "La vacuna antiamarílica se administra en el esquema regular peruano a los:",
    "opciones": {
      "A": "12 meses de edad",
      "B": "15 meses de edad",
      "C": "18 meses de edad",
      "D": "9 meses de edad"
    },
    "respuesta": "B",
    "explicacion": "La vacuna antiamarílica (fiebre amarilla) se administra a los 15 meses de edad en el esquema regular peruano, en dosis única. Es obligatoria para personas que viajan a zonas endémicas (selva). Confiere inmunidad de por vida según la OMS.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Vacunación y ESAVI"
  },
  {
    "id": 370,
    "pregunta": "La escala de Capurro se utiliza para evaluar:",
    "opciones": {
      "A": "El estado nutricional del recién nacido",
      "B": "La edad gestacional del recién nacido",
      "C": "El desarrollo psicomotor del lactante",
      "D": "La agudeza visual del neonato"
    },
    "respuesta": "B",
    "explicacion": "La escala de Capurro evalúa la edad gestacional del recién nacido mediante parámetros somáticos (textura de piel, forma de oreja, glándula mamaria, pliegues plantares) y neurológicos. Es útil cuando no se cuenta con ecografía del primer trimestre para datar la gestación.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Paquete del niño"
  },
  {
    "id": 371,
    "pregunta": "La anemia en gestantes se diagnostica cuando la hemoglobina ajustada por altitud es menor a:",
    "opciones": {
      "A": "12 g/dL",
      "B": "11 g/dL",
      "C": "10 g/dL",
      "D": "13 g/dL"
    },
    "respuesta": "B",
    "explicacion": "La anemia en gestantes se diagnostica cuando la hemoglobina ajustada por altitud es menor a 11 g/dL. Se clasifica en leve (10-10.9), moderada (7-9.9) y severa (<7 g/dL). El punto de corte es el mismo que en niños de 6 meses a 5 años, pero diferente al de mujeres no gestantes (12 g/dL).",
    "origen": "nueva",
    "tema": "Cuidado Integral - Prevención y control de anemia"
  },
  {
    "id": 372,
    "pregunta": "El cáncer de piel se previene principalmente mediante:",
    "opciones": {
      "A": "Consumo de antioxidantes",
      "B": "Protección solar, uso de bloqueador y evitar exposición prolongada al sol",
      "C": "Vacunación específica",
      "D": "Tamizaje con biopsia anual"
    },
    "respuesta": "B",
    "explicacion": "La prevención del cáncer de piel se basa en protección solar: uso de bloqueador (FPS 30+), ropa protectora, sombrero, evitar exposición prolongada al sol especialmente entre 10am-4pm. No existe vacuna contra el cáncer de piel y los antioxidantes no son medida principal.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Prevención y control del Cáncer"
  },
  {
    "id": 373,
    "pregunta": "El DOTS (Directly Observed Therapy Short-course) en tuberculosis se refiere a:",
    "opciones": {
      "A": "Un esquema de tratamiento de larga duración",
      "B": "La estrategia de tratamiento acortado directamente observado para garantizar la adherencia",
      "C": "Un método diagnóstico de tuberculosis",
      "D": "Una vacuna contra la tuberculosis"
    },
    "respuesta": "B",
    "explicacion": "DOTS es la estrategia de tratamiento acortado directamente observado, donde un personal de salud supervisa que el paciente tome cada dosis de medicamento. Garantiza la adherencia al tratamiento, reduce el abandono y previene la aparición de tuberculosis multidrogoresistente (TB-MDR).",
    "origen": "nueva",
    "tema": "Cuidado Integral - Tuberculosis"
  },
  {
    "id": 374,
    "pregunta": "La salud mental comunitaria promueve la desinstitucionalización, lo que significa:",
    "opciones": {
      "A": "Cerrar todos los servicios de salud mental",
      "B": "Trasladar la atención de hospitales psiquiátricos a servicios comunitarios cercanos al entorno del paciente",
      "C": "Eliminar el tratamiento farmacológico",
      "D": "Dejar que las familias se encarguen solas del cuidado"
    },
    "respuesta": "B",
    "explicacion": "La desinstitucionalización en salud mental comunitaria significa trasladar la atención de hospitales psiquiátricos a servicios comunitarios cercanos al entorno del paciente (centros de salud mental comunitarios). Busca la reinserción social del paciente, no eliminar el tratamiento ni abandonar al paciente.",
    "origen": "nueva",
    "tema": "Salud Comunitaria - Salud mental comunitaria"
  },
  {
    "id": 375,
    "pregunta": "El principio de beneficencia en bioética obliga al profesional de salud a:",
    "opciones": {
      "A": "No causar daño al paciente",
      "B": "Actuar en beneficio del paciente, promoviendo su bienestar",
      "C": "Respetar la decisión del paciente aunque sea perjudicial",
      "D": "Distribuir equitativamente los recursos"
    },
    "respuesta": "B",
    "explicacion": "El principio de beneficencia obliga al profesional a actuar en beneficio del paciente, promoviendo su bienestar. Se diferencia de la no maleficencia (no causar daño), la autonomía (respetar decisiones) y la justicia (distribución equitativa). Beneficencia implica una acción positiva a favor del paciente.",
    "origen": "nueva",
    "tema": "Ética - Bioética"
  },
  {
    "id": 376,
    "pregunta": "La probidad como principio ético del servidor público implica:",
    "opciones": {
      "A": "Cumplir con el horario de trabajo",
      "B": "Actuar con rectitud, honradez y honestidad, priorizando el interés público sobre el privado",
      "C": "Mantener la confidencialidad de la información",
      "D": "Obedecer las órdenes del superior jerárquico"
    },
    "respuesta": "B",
    "explicacion": "La probidad es un principio ético del servidor público que implica actuar con rectitud, honradez y honestidad, priorizando el interés público sobre el privado. Está establecido en el Código de Ética de la Función Pública (Ley 27815) del Perú.",
    "origen": "nueva",
    "tema": "Ética - Función pública"
  },
  {
    "id": 377,
    "pregunta": "El muestreo probabilístico se caracteriza porque:",
    "opciones": {
      "A": "Los participantes se seleccionan por conveniencia",
      "B": "Todos los elementos de la población tienen una probabilidad conocida y no nula de ser seleccionados",
      "C": "Se eligen los casos más representativos según el investigador",
      "D": "Se incluyen solo voluntarios"
    },
    "respuesta": "B",
    "explicacion": "En el muestreo probabilístico, todos los elementos de la población tienen una probabilidad conocida y no nula de ser seleccionados. Incluye: aleatorio simple, sistemático, estratificado y por conglomerados. El muestreo no probabilístico (conveniencia, bola de nieve) no garantiza representatividad.",
    "origen": "nueva",
    "tema": "Investigación - Metodología"
  },
  {
    "id": 378,
    "pregunta": "El alfa de Cronbach es un coeficiente que mide:",
    "opciones": {
      "A": "La validez de un instrumento",
      "B": "La confiabilidad o consistencia interna de un instrumento",
      "C": "La significancia estadística de los resultados",
      "D": "El tamaño del efecto de una intervención"
    },
    "respuesta": "B",
    "explicacion": "El alfa de Cronbach mide la confiabilidad o consistencia interna de un instrumento (qué tan consistentes son las respuestas entre los ítems). Valores ≥ 0.7 se consideran aceptables. La validez (si mide lo que debe medir) se evalúa con otros métodos como juicio de expertos o análisis factorial.",
    "origen": "nueva",
    "tema": "Investigación - Instrumentos de recolección"
  },
  {
    "id": 379,
    "pregunta": "El análisis FODA en planeamiento estratégico analiza factores internos y externos. Las debilidades corresponden a:",
    "opciones": {
      "A": "Factores externos negativos",
      "B": "Factores internos negativos que limitan el desempeño de la organización",
      "C": "Factores externos positivos",
      "D": "Factores internos positivos"
    },
    "respuesta": "B",
    "explicacion": "En el análisis FODA, las debilidades son factores internos negativos que limitan el desempeño. Las fortalezas son factores internos positivos, las oportunidades son factores externos positivos y las amenazas son factores externos negativos. Interno = lo que la organización controla.",
    "origen": "nueva",
    "tema": "Gestión - Planeamiento estratégico"
  },
  {
    "id": 380,
    "pregunta": "La contrarreferencia se realiza cuando:",
    "opciones": {
      "A": "El paciente solicita cambio de establecimiento",
      "B": "El establecimiento receptor devuelve al paciente a su establecimiento de origen con indicaciones para continuar su atención",
      "C": "Se transfiere al paciente a un nivel de mayor complejidad",
      "D": "El paciente abandona el tratamiento"
    },
    "respuesta": "B",
    "explicacion": "La contrarreferencia se realiza cuando el establecimiento receptor (de mayor complejidad) devuelve al paciente a su establecimiento de origen con indicaciones para continuar su atención. Incluye el informe de lo realizado, diagnóstico, tratamiento e indicaciones de seguimiento.",
    "origen": "nueva",
    "tema": "Gestión - Referencia y contrarreferencia"
  },
  {
    "id": 381,
    "pregunta": "La variable confusora en un estudio epidemiológico es aquella que:",
    "opciones": {
      "A": "Es la variable dependiente del estudio",
      "B": "Está asociada tanto a la exposición como al desenlace, distorsionando la relación real entre ambos",
      "C": "Es la variable independiente principal",
      "D": "No tiene relación con las variables del estudio"
    },
    "respuesta": "B",
    "explicacion": "La variable confusora está asociada tanto a la exposición como al desenlace, distorsionando la relación real entre ambos. Por ejemplo, la edad puede confundir la relación entre ejercicio y enfermedad cardíaca. Se controla mediante estratificación, emparejamiento o análisis multivariado.",
    "origen": "nueva",
    "tema": "Salud Pública - Epidemiología"
  },
  {
    "id": 382,
    "pregunta": "El índice de desarrollo humano (IDH) incluye como componentes:",
    "opciones": {
      "A": "Solo el ingreso per cápita",
      "B": "Esperanza de vida, educación e ingreso per cápita",
      "C": "Tasa de mortalidad y natalidad",
      "D": "Cobertura de vacunación y acceso a agua potable"
    },
    "respuesta": "B",
    "explicacion": "El IDH (PNUD) incluye tres componentes: esperanza de vida al nacer (salud), años de escolaridad esperados y promedio (educación), e ingreso nacional bruto per cápita (nivel de vida). Es un indicador compuesto que refleja el desarrollo humano más allá del aspecto económico.",
    "origen": "nueva",
    "tema": "Salud Pública - Demografía en salud"
  },
  {
    "id": 383,
    "pregunta": "El aislamiento de pacientes con tuberculosis pulmonar bacilífera corresponde a precauciones de tipo:",
    "opciones": {
      "A": "De contacto",
      "B": "Aéreas (por núcleos de gotitas)",
      "C": "Por gotas",
      "D": "Estándar solamente"
    },
    "respuesta": "B",
    "explicacion": "La TB pulmonar bacílfera se transmite por núcleos de gotitas (aerosoles <5 micras) que permanecen suspendidos en el aire. Requiere precauciones aéreas: habitación individual con presión negativa y uso de respirador N95. Las precauciones por gotas son para partículas >5 micras (gripe, meningococo).",
    "origen": "nueva",
    "tema": "Salud Pública - Prevención y control de infecciones"
  },
  {
    "id": 384,
    "pregunta": "La evaluación de daños y análisis de necesidades (EDAN) en situaciones de desastre tiene como objetivo:",
    "opciones": {
      "A": "Reconstruir la infraestructura dañada",
      "B": "Determinar rápidamente el impacto del desastre y las necesidades prioritarias de la población afectada",
      "C": "Evacuar a toda la población de la zona afectada",
      "D": "Distribuir medicamentos a los damnificados"
    },
    "respuesta": "B",
    "explicacion": "El EDAN tiene como objetivo determinar rápidamente el impacto del desastre y las necesidades prioritarias de la población afectada (salud, agua, alimentos, albergue). Es el primer paso para organizar la respuesta y asignar recursos de manera eficiente tras un desastre.",
    "origen": "nueva",
    "tema": "Salud Pública - Emergencias y desastres"
  },
  {
    "id": 385,
    "pregunta": "El síndrome de burnout en el personal de salud se manifiesta por:",
    "opciones": {
      "A": "Aumento de la productividad laboral",
      "B": "Agotamiento emocional, despersonalización y baja realización personal",
      "C": "Mayor satisfacción con el trabajo",
      "D": "Mejora en las relaciones interpersonales"
    },
    "respuesta": "B",
    "explicacion": "El síndrome de burnout (Maslach) se manifiesta por tres dimensiones: agotamiento emocional (sentirse emocionalmente agotado), despersonalización (actitud cínica hacia los pacientes) y baja realización personal (sentimiento de incompetencia). Es frecuente en profesionales de salud.",
    "origen": "nueva",
    "tema": "Salud Comunitaria - Salud ocupacional"
  },
  {
    "id": 386,
    "pregunta": "El abogacía o abogamiento en promoción de la salud se refiere a:",
    "opciones": {
      "A": "La asesoría legal a pacientes",
      "B": "La acción de influir en los tomadores de decisiones para que adopten políticas públicas favorables a la salud",
      "C": "La defensa legal del personal de salud",
      "D": "La mediación de conflictos en el establecimiento"
    },
    "respuesta": "B",
    "explicacion": "La abogacía (advocacy) en promoción de la salud es la acción de influir en los tomadores de decisiones para que adopten políticas públicas favorables a la salud. Es una de las tres estrategias de la Carta de Ottawa junto con la mediación y la capacitación. No se refiere a asesoría legal.",
    "origen": "nueva",
    "tema": "Salud Pública - Promoción de la salud"
  },
  {
    "id": 387,
    "pregunta": "La vacuna SPR (Sarampión, Paperas, Rubéola) se administra en el esquema regular peruano como primera dosis a los:",
    "opciones": {
      "A": "6 meses",
      "B": "12 meses",
      "C": "15 meses",
      "D": "18 meses"
    },
    "respuesta": "B",
    "explicacion": "La vacuna SPR (Sarampión, Paperas, Rubéola) se administra como primera dosis a los 12 meses de edad y el refuerzo a los 18 meses en el esquema peruano. Es una vacuna de virus vivos atenuados que se aplica por vía subcutánea.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Vacunación y ESAVI"
  },
  {
    "id": 388,
    "pregunta": "El test de Apgar evalúa al recién nacido en cinco parámetros: frecuencia cardíaca, esfuerzo respiratorio, tono muscular, irritabilidad refleja y:",
    "opciones": {
      "A": "Peso al nacer",
      "B": "Color de la piel",
      "C": "Temperatura corporal",
      "D": "Perímetro cefálico"
    },
    "respuesta": "B",
    "explicacion": "El test de Apgar evalúa 5 parámetros: frecuencia cardíaca, esfuerzo respiratorio, tono muscular, irritabilidad refleja y color de la piel. Se puntua de 0-2 cada uno (total 0-10) al minuto y a los 5 minutos de vida. Un puntaje de 7-10 es normal.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Paquete del niño"
  },
  {
    "id": 389,
    "pregunta": "La obesidad en adultos se clasifica como tipo I cuando el IMC se encuentra entre:",
    "opciones": {
      "A": "25 a 29.9",
      "B": "30 a 34.9",
      "C": "35 a 39.9",
      "D": "Mayor o igual a 40"
    },
    "respuesta": "B",
    "explicacion": "La obesidad tipo I tiene IMC de 30-34.9. La clasificación es: normopeso (18.5-24.9), sobrepeso (25-29.9), obesidad tipo I (30-34.9), obesidad tipo II (35-39.9) y obesidad tipo III o mórbida (≥40). El sobrepeso no es obesidad.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Enfermedades no transmisibles"
  },
  {
    "id": 390,
    "pregunta": "La enfermedad de Chagas en fase crónica puede causar principalmente:",
    "opciones": {
      "A": "Insuficiencia renal",
      "B": "Miocardiopatía dilatada y megavísceras (megaesófago, megacolon)",
      "C": "Cirrosis hepática",
      "D": "Meningitis crónica"
    },
    "respuesta": "B",
    "explicacion": "La enfermedad de Chagas en fase crónica (años después de la infección) causa miocardiopatía dilatada (insuficiencia cardíaca, arritmias, muerte súbita) y megavísceras (megaesófago con disfagia, megacolon con estreñimiento severo). Afecta al 30% de los infectados crónicos.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Enfermedades metaxénicas y zoonóticas"
  },
  {
    "id": 391,
    "pregunta": "La hemorragia postparto se define como la pérdida sanguínea mayor a:",
    "opciones": {
      "A": "250 mL en parto vaginal",
      "B": "500 mL en parto vaginal o 1000 mL en cesárea",
      "C": "1000 mL en parto vaginal",
      "D": "200 mL en cualquier tipo de parto"
    },
    "respuesta": "B",
    "explicacion": "La hemorragia postparto se define como pérdida sanguínea >500 mL en parto vaginal o >1000 mL en cesárea. Es la primera causa de muerte materna en el Perú y el mundo. Su prevención principal es el manejo activo del tercer periodo del parto.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Emergencias obstétricas"
  },
  {
    "id": 392,
    "pregunta": "El proceso de atención de enfermería (PAE) en la etapa de diagnóstico utiliza la taxonomía:",
    "opciones": {
      "A": "NIC (Nursing Interventions Classification)",
      "B": "NANDA (North American Nursing Diagnosis Association)",
      "C": "NOC (Nursing Outcomes Classification)",
      "D": "CIE-10"
    },
    "respuesta": "B",
    "explicacion": "En el PAE, la etapa de diagnóstico utiliza la taxonomía NANDA para formular diagnósticos de enfermería. NIC se usa para las intervenciones y NOC para los resultados esperados. CIE-10 es la clasificación médica de enfermedades, no de enfermería.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Proceso de atención de enfermería"
  },
  {
    "id": 393,
    "pregunta": "La confidencialidad en la relación profesional-paciente puede romperse legítimamente cuando:",
    "opciones": {
      "A": "La familia del paciente lo solicita",
      "B": "Existe riesgo inminente para la vida del paciente o de terceros, o por mandato judicial",
      "C": "El jefe del establecimiento lo ordena",
      "D": "El paciente es menor de edad en cualquier circunstancia"
    },
    "respuesta": "B",
    "explicacion": "La confidencialidad puede romperse legítimamente cuando existe riesgo inminente para la vida del paciente o de terceros (ej: enfermedades de notificación obligatoria, violencia), o por mandato judicial. No basta con que la familia lo solicite o el jefe lo ordene.",
    "origen": "nueva",
    "tema": "Ética - Bioética"
  },
  {
    "id": 394,
    "pregunta": "La medicina complementaria y alternativa incluye prácticas como:",
    "opciones": {
      "A": "Solo la medicina herbolaria",
      "B": "Acupuntura, fitoterapia, medicina ayurvédica, homeopatía, entre otras",
      "C": "Exclusivamente la cirugía tradicional",
      "D": "Solo las terapias manuales"
    },
    "respuesta": "B",
    "explicacion": "La medicina complementaria y alternativa incluye diversas prácticas: acupuntura, fitoterapia (plantas medicinales), medicina ayurvédica, homeopatía, quiropraxia, naturopatía, entre otras. No se limita a una sola práctica. La OMS promueve su integración segura al sistema de salud.",
    "origen": "nueva",
    "tema": "Ética - Medicina tradicional"
  },
  {
    "id": 395,
    "pregunta": "El valor p (p-value) en investigación estadística representa:",
    "opciones": {
      "A": "La probabilidad de que la hipótesis alternativa sea verdadera",
      "B": "La probabilidad de obtener los resultados observados si la hipótesis nula fuera verdadera",
      "C": "El porcentaje de error del instrumento",
      "D": "La proporción de la muestra que presentó el evento"
    },
    "respuesta": "B",
    "explicacion": "El valor p representa la probabilidad de obtener los resultados observados (o más extremos) si la hipótesis nula fuera verdadera. Si p < 0.05, se rechaza la H0 y se considera el resultado estadísticamente significativo. No indica la probabilidad de que la hipótesis sea verdadera.",
    "origen": "nueva",
    "tema": "Investigación - Procesamiento y análisis de datos"
  },
  {
    "id": 396,
    "pregunta": "La publicación de resultados de investigación en revistas científicas indexadas requiere que el artículo pase por un proceso de:",
    "opciones": {
      "A": "Aprobación del director del establecimiento",
      "B": "Revisión por pares (peer review)",
      "C": "Validación por el comité de ética exclusivamente",
      "D": "Aprobación del Ministerio de Salud"
    },
    "respuesta": "B",
    "explicacion": "La publicación en revistas científicas indexadas requiere revisión por pares (peer review), donde expertos independientes evalúan la calidad metodológica, validez y relevancia del artículo antes de su aceptación. Es el estándar de calidad en la comunicación científica.",
    "origen": "nueva",
    "tema": "Investigación - Publicación de resultados"
  },
  {
    "id": 397,
    "pregunta": "La misión institucional responde a la pregunta:",
    "opciones": {
      "A": "¿Dónde queremos estar en el futuro?",
      "B": "¿Quiénes somos, qué hacemos y para quién lo hacemos?",
      "C": "¿Cuáles son nuestras fortalezas?",
      "D": "¿Cuánto presupuesto necesitamos?"
    },
    "respuesta": "B",
    "explicacion": "La misión responde a: ¿Quiénes somos, qué hacemos y para quién lo hacemos? Define la razón de ser de la organización en el presente. La visión responde a ¿dónde queremos estar en el futuro? Las fortalezas y presupuesto corresponden al análisis FODA y planificación financiera.",
    "origen": "nueva",
    "tema": "Gestión - Planeamiento estratégico"
  },
  {
    "id": 398,
    "pregunta": "El establecimiento de salud de categoría I-1 corresponde a:",
    "opciones": {
      "A": "Centro de salud con médico",
      "B": "Puesto de salud con profesional de salud no médico",
      "C": "Hospital general",
      "D": "Centro de salud con internamiento"
    },
    "respuesta": "B",
    "explicacion": "La categoría I-1 corresponde a un puesto de salud con profesional de salud no médico (enfermera, obstetra, técnico). I-2 es puesto con médico, I-3 es centro de salud sin internamiento e I-4 es centro con internamiento. Son establecimientos del primer nivel de atención.",
    "origen": "nueva",
    "tema": "Gestión - Clasificación de establecimientos"
  },
  {
    "id": 399,
    "pregunta": "La telecapacitación en salud se define como:",
    "opciones": {
      "A": "La atención de pacientes a distancia",
      "B": "El proceso de formación y educación continua del personal de salud mediante TIC",
      "C": "El monitoreo remoto de pacientes crónicos",
      "D": "La interconsulta entre especialistas"
    },
    "respuesta": "B",
    "explicacion": "La telecapacitación es el proceso de formación y educación continua del personal de salud mediante TIC (videoconferencias, plataformas virtuales). Se diferencia de la teleconsulta (atención al paciente), telemonitoreo (seguimiento de parámetros) y teleinterconsulta (entre profesionales).",
    "origen": "nueva",
    "tema": "Gestión - Telesalud"
  },
  {
    "id": 400,
    "pregunta": "El evento adverso en la atención de salud se define como:",
    "opciones": {
      "A": "Un error intencional del personal de salud",
      "B": "Un daño no intencional al paciente causado por la atención sanitaria y no por la enfermedad de base",
      "C": "Una complicación esperada del tratamiento",
      "D": "Una queja del paciente por la atención recibida"
    },
    "respuesta": "B",
    "explicacion": "Un evento adverso es un daño no intencional al paciente causado por la atención sanitaria y no por la enfermedad de base. Puede ser prevenible o no prevenible. No es un error intencional ni una complicación esperada. Su identificación y reporte son clave para mejorar la seguridad del paciente.",
    "origen": "nueva",
    "tema": "Gestión - Calidad de servicios de salud"
  },
  {
    "id": 401,
    "pregunta": "La proporción de casos que resultan fatales entre los infectados por una enfermedad se denomina:",
    "opciones": {
      "A": "Tasa de mortalidad",
      "B": "Tasa de letalidad",
      "C": "Tasa de incidencia",
      "D": "Tasa de prevalencia"
    },
    "respuesta": "B",
    "explicacion": "La tasa de letalidad mide la proporción de casos fatales entre los infectados. Se calcula: (muertes por la enfermedad / total de casos) x 100. Indica la gravedad de la enfermedad. La tasa de mortalidad usa la población total como denominador, no solo los enfermos.",
    "origen": "nueva",
    "tema": "Salud Pública - Epidemiología"
  },
  {
    "id": 402,
    "pregunta": "La transición demográfica describe el paso de una sociedad con altas tasas de natalidad y mortalidad a una con:",
    "opciones": {
      "A": "Altas tasas de natalidad y baja mortalidad",
      "B": "Bajas tasas de natalidad y mortalidad",
      "C": "Baja natalidad y alta mortalidad",
      "D": "Tasas variables sin patrón definido"
    },
    "respuesta": "B",
    "explicacion": "La transición demográfica describe el paso de altas tasas de natalidad y mortalidad a bajas tasas de ambas, resultado del desarrollo socioeconómico. Perú se encuentra en una fase avanzada de transición, con envejecimiento progresivo de la población.",
    "origen": "nueva",
    "tema": "Salud Pública - Demografía en salud"
  },
  {
    "id": 403,
    "pregunta": "La quimioprofilaxis como medida de prevención primaria consiste en:",
    "opciones": {
      "A": "Tratar la enfermedad ya diagnosticada",
      "B": "Administrar medicamentos a personas sanas expuestas para prevenir la enfermedad",
      "C": "Vacunar a la población en riesgo",
      "D": "Realizar tamizaje masivo de enfermedades"
    },
    "respuesta": "B",
    "explicacion": "La quimioprofilaxis consiste en administrar medicamentos a personas sanas expuestas para prevenir la enfermedad. Ejemplos: isoniacida para contactos de TB, antirretrovirales post-exposición al VIH. Es una medida de prevención primaria, diferente del tratamiento (prevención secundaria).",
    "origen": "nueva",
    "tema": "Salud Pública - Niveles de prevención"
  },
  {
    "id": 404,
    "pregunta": "El sistema de vigilancia epidemiológica en el Perú está a cargo del Centro Nacional de Epidemiología, Prevención y Control de Enfermedades, conocido como:",
    "opciones": {
      "A": "DIGESA",
      "B": "CDC Perú",
      "C": "DIGEMID",
      "D": "CENARES"
    },
    "respuesta": "B",
    "explicacion": "El CDC Perú (Centro Nacional de Epidemiología, Prevención y Control de Enfermedades) es el órgano encargado del sistema de vigilancia epidemiológica. DIGESA se encarga de salud ambiental, DIGEMID de medicamentos y CENARES de abastecimiento de recursos estratégicos.",
    "origen": "nueva",
    "tema": "Salud Pública - Vigilancia epidemiológica"
  },
  {
    "id": 405,
    "pregunta": "La clasificación de residuos sólidos en establecimientos de salud incluye tres categorías: biocontaminados, especiales y:",
    "opciones": {
      "A": "Peligrosos",
      "B": "Comunes",
      "C": "Reciclables",
      "D": "Orgánicos"
    },
    "respuesta": "B",
    "explicacion": "Los residuos sólidos en establecimientos de salud se clasifican en tres categorías: biocontaminados (bolsa roja), especiales (bolsa amarilla) y comunes (bolsa negra). Los comunes son similares a los residuos domésticos (papel, cartón, restos de alimentos no contaminados).",
    "origen": "nueva",
    "tema": "Salud Comunitaria - Gestión de residuos sólidos"
  },
  {
    "id": 406,
    "pregunta": "Las barreras económicas de accesibilidad a los servicios de salud se refieren a:",
    "opciones": {
      "A": "La distancia al establecimiento de salud",
      "B": "Los costos directos e indirectos que impiden a la población acceder a la atención de salud",
      "C": "Las diferencias culturales con el personal de salud",
      "D": "La falta de horarios de atención adecuados"
    },
    "respuesta": "B",
    "explicacion": "Las barreras económicas incluyen costos directos (consulta, medicamentos, exámenes) e indirectos (transporte, pérdida de días laborales, alimentación) que impiden acceder a la atención. El SIS busca reducir estas barreras en población vulnerable.",
    "origen": "nueva",
    "tema": "Salud Comunitaria - Accesibilidad a servicios de salud"
  },
  {
    "id": 407,
    "pregunta": "El empoderamiento comunitario en promoción de la salud busca:",
    "opciones": {
      "A": "Que el personal de salud tome todas las decisiones por la comunidad",
      "B": "Que las personas y comunidades adquieran control sobre los factores que afectan su salud",
      "C": "Que el gobierno central dirija todas las intervenciones de salud",
      "D": "Que las ONG reemplacen al sistema de salud"
    },
    "respuesta": "B",
    "explicacion": "El empoderamiento comunitario busca que las personas y comunidades adquieran control sobre los factores que afectan su salud. Es un proceso por el cual la comunidad gana capacidad de tomar decisiones, gestionar recursos y participar activamente en la solución de sus problemas de salud.",
    "origen": "nueva",
    "tema": "Salud Pública - Promoción de la salud"
  },
  {
    "id": 408,
    "pregunta": "La vacuna contra la hepatitis B se administra al recién nacido dentro de las primeras:",
    "opciones": {
      "A": "48 horas de vida",
      "B": "24 horas de vida",
      "C": "72 horas de vida",
      "D": "Al mes de vida"
    },
    "respuesta": "B",
    "explicacion": "La vacuna contra hepatitis B se administra al recién nacido dentro de las primeras 24 horas de vida para prevenir la transmisión vertical (madre-hijo). Es especialmente importante si la madre es portadora del virus. Se aplica por vía intramuscular en el muslo.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Vacunación y ESAVI"
  },
  {
    "id": 409,
    "pregunta": "El clampaje tardío del cordón umbilical se recomienda realizarlo entre:",
    "opciones": {
      "A": "Inmediatamente al nacer",
      "B": "2 a 3 minutos después del nacimiento",
      "C": "5 a 10 minutos después del nacimiento",
      "D": "Después de la expulsión de la placenta"
    },
    "respuesta": "B",
    "explicacion": "El clampaje tardío del cordón umbilical se recomienda entre 2 a 3 minutos después del nacimiento. Permite la transfusión placentaria de sangre al recién nacido, aumentando las reservas de hierro y reduciendo el riesgo de anemia en los primeros meses de vida.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Paquete del niño"
  },
  {
    "id": 410,
    "pregunta": "La hipertensión arterial en adultos se diagnostica cuando la presión arterial sistólica es ≥ 140 mmHg y/o la diastólica es:",
    "opciones": {
      "A": "≥ 80 mmHg",
      "B": "≥ 90 mmHg",
      "C": "≥ 100 mmHg",
      "D": "≥ 85 mmHg"
    },
    "respuesta": "B",
    "explicacion": "La hipertensión arterial se diagnostica con PAS ≥ 140 mmHg y/o PAD ≥ 90 mmHg en al menos dos mediciones en diferentes ocasiones. Se clasifica en: normal (<120/80), elevada (120-129/<80), HTA estadio 1 (130-139/80-89 según AHA) o ≥140/90 según criterio clásico.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Enfermedades no transmisibles"
  },
  {
    "id": 411,
    "pregunta": "La fiebre amarilla es una enfermedad viral transmitida por mosquitos del género Haemagogus (selvática) y Aedes aegypti (urbana). Su prevención principal es:",
    "opciones": {
      "A": "Quimioprofilaxis con antivirales",
      "B": "Vacunación con una dosis única que confiere inmunidad de por vida",
      "C": "Uso de repelentes exclusivamente",
      "D": "Aislamiento de los casos confirmados"
    },
    "respuesta": "B",
    "explicacion": "La prevención principal de la fiebre amarilla es la vacunación con una dosis única que confiere inmunidad de por vida (OMS 2013). Es obligatoria para viajeros a zonas endémicas. No existe quimioprofilaxis antiviral para fiebre amarilla; el tratamiento es solo de soporte.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Enfermedades metaxénicas y zoonóticas"
  },
  {
    "id": 412,
    "pregunta": "El método anticonceptivo de lactancia materna exclusiva y amenorrea (MELA) es efectivo cuando se cumplen tres condiciones: lactancia materna exclusiva, amenorrea y:",
    "opciones": {
      "A": "El bebé tiene menos de 12 meses",
      "B": "El bebé tiene menos de 6 meses",
      "C": "La madre tiene más de 30 años",
      "D": "La madre no tiene antecedentes de embarazo múltiple"
    },
    "respuesta": "B",
    "explicacion": "El MELA es efectivo cuando se cumplen tres condiciones simultáneas: lactancia materna exclusiva (a libre demanda, día y noche), amenorrea (ausencia de menstruación) y el bebé tiene menos de 6 meses. Si falla alguna condición, se debe usar otro método anticonceptivo.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Embarazo, parto y puerperio"
  },
  {
    "id": 413,
    "pregunta": "El derecho a una segunda opinión médica es un derecho del usuario de servicios de salud que implica:",
    "opciones": {
      "A": "Que el médico tratante debe cambiar su diagnóstico",
      "B": "Que el paciente puede solicitar la evaluación de otro profesional sobre su diagnóstico o tratamiento",
      "C": "Que el establecimiento debe pagar la consulta con otro especialista",
      "D": "Que el paciente puede automedicarse"
    },
    "respuesta": "B",
    "explicacion": "El derecho a una segunda opinión médica permite al paciente solicitar la evaluación de otro profesional sobre su diagnóstico o tratamiento. Está reconocido en la Ley de Derechos de los Usuarios de Servicios de Salud (Ley 29414). No obliga al médico a cambiar su diagnóstico.",
    "origen": "nueva",
    "tema": "Ética - Derechos de los usuarios"
  },
  {
    "id": 414,
    "pregunta": "La equidad en salud significa:",
    "opciones": {
      "A": "Dar lo mismo a todos sin distinción",
      "B": "Dar a cada quien según su necesidad, eliminando las diferencias injustas y evitables",
      "C": "Atender primero a quien llega primero",
      "D": "Priorizar la atención a quienes pueden pagar"
    },
    "respuesta": "B",
    "explicacion": "La equidad en salud significa dar a cada quien según su necesidad, eliminando las diferencias injustas y evitables en salud. No es igualdad (dar lo mismo a todos), sino justicia distributiva que prioriza a los más vulnerables para reducir las brechas en salud.",
    "origen": "nueva",
    "tema": "Ética - Bioética"
  },
  {
    "id": 415,
    "pregunta": "Un estudio transversal o de prevalencia se caracteriza por:",
    "opciones": {
      "A": "Seguir a los participantes durante un periodo prolongado",
      "B": "Medir la exposición y el desenlace en un mismo momento del tiempo",
      "C": "Asignar aleatoriamente la intervención",
      "D": "Partir de los casos para buscar la exposición previa"
    },
    "respuesta": "B",
    "explicacion": "El estudio transversal mide la exposición y el desenlace en un mismo momento del tiempo (como una fotografía). Permite calcular prevalencia pero no establece causalidad ni temporalidad. Es rápido y económico, ideal para planificación en salud pública.",
    "origen": "nueva",
    "tema": "Investigación - Tipos de investigación"
  },
  {
    "id": 416,
    "pregunta": "La validez de contenido de un instrumento de investigación se evalúa mediante:",
    "opciones": {
      "A": "Análisis factorial",
      "B": "Juicio de expertos",
      "C": "Alfa de Cronbach",
      "D": "Prueba piloto estadística"
    },
    "respuesta": "B",
    "explicacion": "La validez de contenido se evalúa mediante juicio de expertos, quienes determinan si los ítems del instrumento representan adecuadamente el constructo que se pretende medir. El análisis factorial evalúa validez de constructo y el alfa de Cronbach evalúa confiabilidad.",
    "origen": "nueva",
    "tema": "Investigación - Instrumentos de recolección"
  },
  {
    "id": 417,
    "pregunta": "El POI (Plan Operativo Institucional) se elabora para un periodo de:",
    "opciones": {
      "A": "3 años",
      "B": "1 año",
      "C": "5 años",
      "D": "6 meses"
    },
    "respuesta": "B",
    "explicacion": "El POI (Plan Operativo Institucional) se elabora para 1 año. Operativiza los objetivos del PEI (3 años) en actividades concretas con metas, responsables, cronograma y presupuesto. Es la herramienta de gestión que guía el trabajo anual del establecimiento.",
    "origen": "nueva",
    "tema": "Gestión - Planificación y Presupuesto"
  },
  {
    "id": 418,
    "pregunta": "El inventario físico de medicamentos en un establecimiento de salud debe realizarse como mínimo:",
    "opciones": {
      "A": "Semanalmente",
      "B": "Mensualmente",
      "C": "Trimestralmente",
      "D": "Anualmente"
    },
    "respuesta": "B",
    "explicacion": "El inventario físico de medicamentos debe realizarse como mínimo mensualmente para verificar existencias, fechas de vencimiento, condiciones de almacenamiento y detectar diferencias entre el stock físico y el registro. Permite el control adecuado y evita desabastecimiento.",
    "origen": "nueva",
    "tema": "Gestión - Control de inventario y medicamentos"
  },
  {
    "id": 419,
    "pregunta": "La gestión por resultados en salud se enfoca en:",
    "opciones": {
      "A": "Cumplir con los procesos administrativos establecidos",
      "B": "Lograr cambios medibles en la salud de la población como objetivo principal de la gestión",
      "C": "Aumentar el número de atenciones realizadas",
      "D": "Reducir los costos operativos del establecimiento"
    },
    "respuesta": "B",
    "explicacion": "La gestión por resultados se enfoca en lograr cambios medibles en la salud de la población como objetivo principal. No se centra solo en cumplir procesos administrativos o aumentar atenciones, sino en el impacto real sobre indicadores de salud (reducción de mortalidad, anemia, desnutrición, etc.).",
    "origen": "nueva",
    "tema": "Gestión - Administración de servicios"
  },
  {
    "id": 420,
    "pregunta": "La acreditación de establecimientos de salud es un proceso de evaluación externa que verifica:",
    "opciones": {
      "A": "Solo la infraestructura del establecimiento",
      "B": "El cumplimiento de estándares de calidad en la atención de salud",
      "C": "Exclusivamente la formación académica del personal",
      "D": "El presupuesto asignado al establecimiento"
    },
    "respuesta": "B",
    "explicacion": "La acreditación es un proceso de evaluación externa que verifica el cumplimiento de estándares de calidad en la atención de salud. Es voluntaria y periódica. Evalúa múltiples dimensiones: infraestructura, procesos, resultados, seguridad del paciente y gestión, no solo un aspecto.",
    "origen": "nueva",
    "tema": "Gestión - Calidad de servicios de salud"
  },
  {
    "id": 421,
    "pregunta": "El número necesario a tratar (NNT) indica:",
    "opciones": {
      "A": "La cantidad de medicamentos necesarios para un tratamiento",
      "B": "El número de pacientes que deben recibir un tratamiento para prevenir un evento adverso adicional",
      "C": "La dosis mínima efectiva de un fármaco",
      "D": "El número de días de tratamiento requeridos"
    },
    "respuesta": "B",
    "explicacion": "El NNT indica cuántos pacientes deben recibir un tratamiento para prevenir un evento adverso adicional. Se calcula como 1/RAR (reducción absoluta del riesgo). Un NNT bajo indica mayor efectividad del tratamiento. Es una medida clínicamente útil para tomar decisiones terapéuticas.",
    "origen": "nueva",
    "tema": "Salud Pública - Epidemiología"
  },
  {
    "id": 422,
    "pregunta": "La tasa de mortalidad materna directa incluye las muertes causadas por:",
    "opciones": {
      "A": "Accidentes de tránsito durante el embarazo",
      "B": "Complicaciones obstétricas del embarazo, parto o puerperio",
      "C": "Enfermedades crónicas preexistentes",
      "D": "Suicidio durante el embarazo"
    },
    "respuesta": "B",
    "explicacion": "La mortalidad materna directa incluye muertes por complicaciones obstétricas del embarazo, parto o puerperio (hemorragia, preeclampsia/eclampsia, sepsis, aborto complicado). La mortalidad materna indirecta incluye enfermedades preexistentes agravadas por el embarazo. Los accidentes son muertes incidentales.",
    "origen": "nueva",
    "tema": "Salud Pública - Demografía en salud"
  },
  {
    "id": 423,
    "pregunta": "El vector mecánico se diferencia del vector biológico porque:",
    "opciones": {
      "A": "El agente se multiplica dentro del vector mecánico",
      "B": "El vector mecánico solo transporta al agente sin que este se multiplique o transforme en él",
      "C": "El vector biológico no participa en la transmisión",
      "D": "Ambos son idénticos en su función"
    },
    "respuesta": "B",
    "explicacion": "El vector mecánico solo transporta al agente sin que este se multiplique o transforme en él (ej: moscas que transportan bacterias en sus patas). En el vector biológico, el agente se multiplica o completa parte de su ciclo vital dentro del vector (ej: Plasmodium en Anopheles).",
    "origen": "nueva",
    "tema": "Salud Pública - Historia natural de la enfermedad"
  },
  {
    "id": 424,
    "pregunta": "La vigilancia sindromática se utiliza cuando:",
    "opciones": {
      "A": "Se dispone de confirmación de laboratorio para todos los casos",
      "B": "Se monitorean síndromes clínicos antes de tener confirmación etiológica, especialmente en emergencias",
      "C": "Solo se vigilan enfermedades crónicas",
      "D": "Se realiza exclusivamente en hospitales"
    },
    "respuesta": "B",
    "explicacion": "La vigilancia sindromática monitorea síndromes clínicos (fiebre + rash, síndrome diarreico agudo, síndrome respiratorio) antes de tener confirmación etiológica. Es especialmente útil en emergencias sanitarias y brotes donde se necesita respuesta rápida sin esperar resultados de laboratorio.",
    "origen": "nueva",
    "tema": "Salud Pública - Vigilancia epidemiológica"
  },
  {
    "id": 425,
    "pregunta": "El accidente punzocortante con material biológico en el personal de salud requiere como primera acción:",
    "opciones": {
      "A": "Exprimir la herida para que sangre",
      "B": "Lavar la zona con agua y jabón sin frotar, y notificar el incidente",
      "C": "Aplicar alcohol directamente en la herida",
      "D": "Colocar un vendaje compresivo"
    },
    "respuesta": "B",
    "explicacion": "Ante un accidente punzocortante, la primera acción es lavar la zona con agua y jabón sin frotar ni exprimir, y notificar el incidente. Luego se evalúa el riesgo, se toman muestras basales y se decide sobre profilaxis post-exposición. No se debe exprimir la herida ni aplicar alcohol directamente.",
    "origen": "nueva",
    "tema": "Salud Pública - Bioseguridad"
  },
  {
    "id": 426,
    "pregunta": "El control vectorial integrado combina métodos físicos, químicos, biológicos y:",
    "opciones": {
      "A": "Farmacológicos",
      "B": "De manejo ambiental y participación comunitaria",
      "C": "Quirúrgicos",
      "D": "De aislamiento de pacientes"
    },
    "respuesta": "B",
    "explicacion": "El control vectorial integrado combina métodos físicos (eliminación de criaderos), químicos (insecticidas), biológicos (peces larvicidas) y de manejo ambiental con participación comunitaria. Es la estrategia más efectiva y sostenible para el control de vectores.",
    "origen": "nueva",
    "tema": "Salud Comunitaria - Control de vectores"
  },
  {
    "id": 427,
    "pregunta": "La estrategia de comunidades saludables busca:",
    "opciones": {
      "A": "Construir establecimientos de salud en cada comunidad",
      "B": "Que las comunidades organizadas desarrollen entornos y comportamientos saludables con participación activa",
      "C": "Vacunar a toda la comunidad",
      "D": "Realizar censos de salud periódicos"
    },
    "respuesta": "B",
    "explicacion": "Las comunidades saludables buscan que las comunidades organizadas desarrollen entornos y comportamientos saludables con participación activa de sus miembros. Es un escenario de promoción de la salud que empodera a la comunidad para gestionar sus propios determinantes de salud.",
    "origen": "nueva",
    "tema": "Salud Pública - Promoción de la salud"
  },
  {
    "id": 428,
    "pregunta": "El refuerzo de la vacuna DPT (Difteria, Pertusis, Tétanos) en el esquema regular peruano se administra a los:",
    "opciones": {
      "A": "12 meses",
      "B": "18 meses y 4 años",
      "C": "24 meses",
      "D": "6 meses"
    },
    "respuesta": "B",
    "explicacion": "El refuerzo de DPT se administra a los 18 meses (primer refuerzo) y a los 4 años (segundo refuerzo) en el esquema peruano. Las dosis primarias se aplican como pentavalente a los 2, 4 y 6 meses. La DPT solo se usa como refuerzo, no como serie primaria.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Vacunación y ESAVI"
  },
  {
    "id": 429,
    "pregunta": "La escala de Glasgow evalúa el nivel de conciencia mediante tres parámetros: apertura ocular, respuesta verbal y:",
    "opciones": {
      "A": "Frecuencia cardíaca",
      "B": "Respuesta motora",
      "C": "Presión arterial",
      "D": "Saturación de oxígeno"
    },
    "respuesta": "B",
    "explicacion": "La escala de Glasgow evalúa el nivel de conciencia mediante: apertura ocular (1-4), respuesta verbal (1-5) y respuesta motora (1-6). Puntaje total de 3-15. Un puntaje ≤ 8 indica coma y necesidad de protección de vía aérea. No incluye signos vitales.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Cuidados paliativos"
  },
  {
    "id": 430,
    "pregunta": "La diabetes mellitus tipo 2 se confirma cuando la glucemia en ayunas es:",
    "opciones": {
      "A": "≥ 100 mg/dL en una sola medición",
      "B": "≥ 126 mg/dL en dos mediciones en días diferentes",
      "C": "≥ 140 mg/dL en una sola medición",
      "D": "≥ 110 mg/dL en dos mediciones"
    },
    "respuesta": "B",
    "explicacion": "La diabetes mellitus tipo 2 se confirma con glucemia en ayunas ≥ 126 mg/dL en dos mediciones en días diferentes. También se confirma con glucemia al azar ≥ 200 mg/dL con síntomas, HbA1c ≥ 6.5% o prueba de tolerancia oral a la glucosa ≥ 200 mg/dL a las 2 horas.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Enfermedades no transmisibles"
  },
  {
    "id": 431,
    "pregunta": "La rabia humana se previene después de la mordedura de un animal sospechoso mediante:",
    "opciones": {
      "A": "Solo antibióticos profilácticos",
      "B": "Lavado de la herida, vacunación antirrábica y según el caso, suero antirrábico",
      "C": "Sutura inmediata de la herida",
      "D": "Observación del paciente sin intervención"
    },
    "respuesta": "B",
    "explicacion": "La prevención de rabia post-mordedura incluye: lavado inmediato de la herida con agua y jabón (15 minutos), vacunación antirrábica (esquema de 4-5 dosis) y según la gravedad, suero antirrábico. La herida no debe suturarse inmediatamente. La observación del animal es complementaria.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Enfermedades metaxénicas y zoonóticas"
  },
  {
    "id": 432,
    "pregunta": "La eclampsia se define como la aparición de convulsiones en una gestante con preeclampsia que no pueden atribuirse a:",
    "opciones": {
      "A": "La hipertensión arterial",
      "B": "Otras causas como epilepsia u otras patologías neurológicas",
      "C": "El uso de medicamentos",
      "D": "La anemia severa"
    },
    "respuesta": "B",
    "explicacion": "La eclampsia se define como convulsiones en una gestante con preeclampsia que no pueden atribuirse a otras causas como epilepsia u otras patologías neurológicas. Es una emergencia obstétrica que requiere sulfato de magnesio como tratamiento de elección y terminación del embarazo.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Emergencias obstétricas"
  },
  {
    "id": 433,
    "pregunta": "El cuidado integral de salud incluye cuatro componentes: promoción, prevención, recuperación y:",
    "opciones": {
      "A": "Investigación",
      "B": "Rehabilitación",
      "C": "Gestión",
      "D": "Docencia"
    },
    "respuesta": "B",
    "explicacion": "El cuidado integral de salud incluye cuatro componentes: promoción (fomentar estilos de vida saludables), prevención (evitar enfermedades), recuperación (diagnóstico y tratamiento) y rehabilitación (restaurar funciones y reinserción social). Los cuatro son complementarios e indivisibles.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Cuidado integral por curso de vida"
  },
  {
    "id": 434,
    "pregunta": "La humanización de la atención en salud implica:",
    "opciones": {
      "A": "Aumentar la tecnología en los servicios de salud",
      "B": "Reconocer al paciente como persona integral con dignidad, derechos y necesidades emocionales",
      "C": "Reducir los tiempos de consulta",
      "D": "Estandarizar todos los protocolos de atención"
    },
    "respuesta": "B",
    "explicacion": "La humanización de la atención implica reconocer al paciente como persona integral con dignidad, derechos y necesidades emocionales. Va más allá de la competencia técnica: incluye empatía, comunicación efectiva, respeto a la autonomía y consideración del contexto sociocultural del paciente.",
    "origen": "nueva",
    "tema": "Ética - Función pública"
  },
  {
    "id": 435,
    "pregunta": "La objeción de conciencia del profesional de salud se refiere a:",
    "opciones": {
      "A": "Negarse a trabajar horas extras",
      "B": "El derecho a negarse a realizar un procedimiento que contradice sus convicciones morales o religiosas, sin abandonar al paciente",
      "C": "Rechazar la atención de pacientes difíciles",
      "D": "No cumplir con las normas del establecimiento"
    },
    "respuesta": "B",
    "explicacion": "La objeción de conciencia es el derecho del profesional a negarse a realizar un procedimiento que contradice sus convicciones morales o religiosas (ej: aborto terapéutico), sin abandonar al paciente. Debe garantizar que otro profesional realice el procedimiento y no puede usarse para discriminar.",
    "origen": "nueva",
    "tema": "Ética - Bioética"
  },
  {
    "id": 436,
    "pregunta": "Un estudio de casos y controles se caracteriza por:",
    "opciones": {
      "A": "Seguir a un grupo en el tiempo para ver quién enferma",
      "B": "Partir de personas con la enfermedad (casos) y sin ella (controles) para comparar la exposición previa",
      "C": "Asignar aleatoriamente un tratamiento",
      "D": "Medir la prevalencia en un momento dado"
    },
    "respuesta": "B",
    "explicacion": "El estudio de casos y controles parte de personas con la enfermedad (casos) y sin ella (controles) para comparar la exposición previa. Es retrospectivo, eficiente para enfermedades raras y utiliza el Odds Ratio (OR) como medida de asociación.",
    "origen": "nueva",
    "tema": "Investigación - Tipos de investigación"
  },
  {
    "id": 437,
    "pregunta": "La prueba chi-cuadrado (χ²) se utiliza para:",
    "opciones": {
      "A": "Comparar promedios entre dos grupos",
      "B": "Evaluar la asociación entre dos variables categóricas",
      "C": "Medir la correlación entre variables continuas",
      "D": "Calcular la regresión lineal"
    },
    "respuesta": "B",
    "explicacion": "La prueba chi-cuadrado (χ²) evalúa la asociación entre dos variables categóricas (nominales u ordinales). Compara las frecuencias observadas con las esperadas bajo independencia. Para comparar promedios se usa t de Student o ANOVA, y para correlación entre variables continuas se usa Pearson.",
    "origen": "nueva",
    "tema": "Investigación - Procesamiento y análisis de datos"
  },
  {
    "id": 438,
    "pregunta": "La visión institucional responde a la pregunta:",
    "opciones": {
      "A": "¿Qué hacemos actualmente?",
      "B": "¿Dónde queremos estar en el futuro?",
      "C": "¿Cuáles son nuestras debilidades?",
      "D": "¿Cuánto presupuesto tenemos?"
    },
    "respuesta": "B",
    "explicacion": "La visión institucional responde a: ¿Dónde queremos estar en el futuro? Define la imagen objetivo de la organización a largo plazo. La misión responde a qué hacemos actualmente. Ambas son componentes fundamentales del planeamiento estratégico.",
    "origen": "nueva",
    "tema": "Gestión - Planeamiento estratégico"
  },
  {
    "id": 439,
    "pregunta": "El establecimiento de salud de categoría I-4 se diferencia del I-3 porque además cuenta con:",
    "opciones": {
      "A": "Solo consulta externa",
      "B": "Internamiento y atención de parto",
      "C": "Cirugía mayor",
      "D": "Unidad de cuidados intensivos"
    },
    "respuesta": "B",
    "explicacion": "La categoría I-4 se diferencia de la I-3 porque además cuenta con internamiento y atención de parto. I-3 es centro de salud sin internamiento. I-4 es el nivel más alto del primer nivel de atención y puede resolver partos normales y emergencias básicas.",
    "origen": "nueva",
    "tema": "Gestión - Clasificación de establecimientos"
  },
  {
    "id": 440,
    "pregunta": "La auditoría en salud tiene como finalidad:",
    "opciones": {
      "A": "Sancionar al personal de salud por errores",
      "B": "Evaluar y mejorar la calidad de la atención mediante la revisión sistemática de los procesos",
      "C": "Controlar el presupuesto del establecimiento",
      "D": "Verificar la asistencia del personal"
    },
    "respuesta": "B",
    "explicacion": "La auditoría en salud tiene como finalidad evaluar y mejorar la calidad de la atención mediante la revisión sistemática de los procesos asistenciales. No es punitiva sino educativa y de mejora continua. Incluye auditoría de historias clínicas, de caso y de muerte materna.",
    "origen": "nueva",
    "tema": "Gestión - Calidad de servicios de salud"
  },
  {
    "id": 441,
    "pregunta": "La mediana como medida de tendencia central es preferible a la media cuando:",
    "opciones": {
      "A": "Los datos siguen una distribucion normal",
      "B": "Existen valores extremos (outliers) que distorsionan el promedio",
      "C": "Se trabaja con variables categoricas",
      "D": "La muestra es muy grande"
    },
    "respuesta": "B",
    "explicacion": "La mediana es preferible a la media cuando existen valores extremos (outliers) que distorsionan el promedio. La mediana divide los datos en dos mitades iguales y no se ve afectada por valores atípicos. Es la medida de tendencia central adecuada para distribuciones asimétricas.",
    "origen": "nueva",
    "tema": "Investigación - Procesamiento y análisis de datos"
  },
  {
    "id": 442,
    "pregunta": "La tasa de mortalidad perinatal incluye las muertes fetales tardias (a partir de las 22 semanas) y las muertes neonatales tempranas (primeros 7 dias). Se expresa por cada:",
    "opciones": {
      "A": "100 nacidos vivos",
      "B": "1000 nacimientos (nacidos vivos + mortinatos)",
      "C": "10,000 habitantes",
      "D": "100,000 nacidos vivos"
    },
    "respuesta": "B",
    "explicacion": "La mortalidad perinatal incluye muertes fetales tardías (≥22 semanas) y neonatales tempranas (primeros 7 días). Se expresa por cada 1000 nacimientos (nacidos vivos + mortinatos). Es un indicador de la calidad de atención prenatal, del parto y neonatal.",
    "origen": "nueva",
    "tema": "Salud Pública - Demografía en salud"
  },
  {
    "id": 443,
    "pregunta": "La resistencia antimicrobiana es un problema de salud publica que se agrava por:",
    "opciones": {
      "A": "El uso de vacunas",
      "B": "El uso indiscriminado e irracional de antibioticos",
      "C": "La mejora en el saneamiento basico",
      "D": "El aumento de la cobertura de salud"
    },
    "respuesta": "B",
    "explicacion": "La resistencia antimicrobiana se agrava por el uso indiscriminado e irracional de antibióticos: prescripción innecesaria, automedicación, dosis inadecuadas y tratamientos incompletos. La OMS la considera una de las mayores amenazas para la salud pública mundial.",
    "origen": "nueva",
    "tema": "Salud Pública - Uso racional de medicamentos"
  },
  {
    "id": 444,
    "pregunta": "El triage en situaciones de emergencia y desastres tiene como objetivo:",
    "opciones": {
      "A": "Atender a todos los pacientes por orden de llegada",
      "B": "Clasificar a las victimas segun la gravedad para priorizar la atencion y optimizar recursos",
      "C": "Evacuar a todos los pacientes al hospital mas cercano",
      "D": "Registrar los datos de todos los afectados"
    },
    "respuesta": "B",
    "explicacion": "El triage clasifica a las víctimas según gravedad para priorizar la atención y optimizar recursos limitados. Usa colores: rojo (emergencia inmediata), amarillo (urgencia), verde (puede esperar) y negro (fallecido/irrecuperable). No se atiende por orden de llegada en emergencias masivas.",
    "origen": "nueva",
    "tema": "Salud Pública - Emergencias y desastres"
  },
  {
    "id": 445,
    "pregunta": "La disposicion sanitaria de excretas en zonas rurales sin alcantarillado se realiza mediante:",
    "opciones": {
      "A": "Vertimiento directo a rios",
      "B": "Letrinas sanitarias o banos ecologicos",
      "C": "Pozos ciegos sin proteccion",
      "D": "Quema de residuos organicos"
    },
    "respuesta": "B",
    "explicacion": "En zonas rurales sin alcantarillado, la disposición sanitaria de excretas se realiza mediante letrinas sanitarias o baños ecológicos (baños secos, biodigestores). Nunca se debe verter directamente a ríos ni usar pozos ciegos sin protección, ya que contaminan las fuentes de agua.",
    "origen": "nueva",
    "tema": "Salud Comunitaria - Determinantes ambientales"
  },
  {
    "id": 446,
    "pregunta": "La vigilancia comunitaria en salud se realiza a traves de:",
    "opciones": {
      "A": "Solo el personal de salud del establecimiento",
      "B": "Agentes comunitarios de salud capacitados que identifican y reportan eventos de salud en su comunidad",
      "C": "Encuestas nacionales de salud",
      "D": "Sistemas informaticos automatizados"
    },
    "respuesta": "B",
    "explicacion": "La vigilancia comunitaria se realiza a través de agentes comunitarios de salud (ACS) capacitados que identifican y reportan eventos de salud en su comunidad (gestantes sin control, niños con desnutrición, brotes). Son el nexo entre la comunidad y el establecimiento de salud.",
    "origen": "nueva",
    "tema": "Salud Comunitaria - Participación social y comunitaria"
  },
  {
    "id": 447,
    "pregunta": "La consejeria en salud se diferencia de la educacion en salud porque:",
    "opciones": {
      "A": "Se dirige a grupos grandes de personas",
      "B": "Es un proceso personalizado de dialogo que ayuda a la persona a tomar decisiones informadas sobre su salud",
      "C": "Utiliza medios masivos de comunicacion",
      "D": "Se realiza solo en establecimientos de salud"
    },
    "respuesta": "B",
    "explicacion": "La consejería es un proceso personalizado de diálogo que ayuda a la persona a tomar decisiones informadas sobre su salud. Se diferencia de la educación en salud (dirigida a grupos) porque es individual, bidireccional y centrada en las necesidades específicas del usuario.",
    "origen": "nueva",
    "tema": "Salud Pública - Promoción de la salud"
  },
  {
    "id": 448,
    "pregunta": "La vacuna contra la influenza se administra anualmente al personal de salud porque:",
    "opciones": {
      "A": "La vacuna pierde eficacia con el tiempo",
      "B": "Los virus de influenza mutan frecuentemente y la composicion de la vacuna se actualiza cada ano",
      "C": "Se requieren multiples dosis para lograr inmunidad",
      "D": "Solo protege durante 3 meses"
    },
    "respuesta": "B",
    "explicacion": "La vacuna contra influenza se administra anualmente porque los virus de influenza mutan frecuentemente (drift antigénico) y la composición de la vacuna se actualiza cada año según las cepas circulantes predichas por la OMS. El personal de salud es grupo prioritario por su exposición.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Vacunación y ESAVI"
  },
  {
    "id": 449,
    "pregunta": "El indicador Peso/Edad en ninos menores de 5 anos evalua:",
    "opciones": {
      "A": "Desnutricion cronica",
      "B": "Desnutricion global (aguda y cronica combinadas)",
      "C": "Solo desnutricion aguda",
      "D": "Sobrepeso exclusivamente"
    },
    "respuesta": "B",
    "explicacion": "El indicador Peso/Edad evalúa desnutrición global, que combina aguda y crónica. Talla/Edad evalúa desnutrición crónica (retardo del crecimiento). Peso/Talla evalúa desnutrición aguda (emaciación). Los tres indicadores son complementarios en la evaluación nutricional infantil.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Alimentación y nutrición"
  },
  {
    "id": 450,
    "pregunta": "La prevencion combinada del VIH incluye:",
    "opciones": {
      "A": "Solo el uso de preservativos",
      "B": "Uso de preservativos, tamizaje, profilaxis pre y post exposicion, tratamiento como prevencion y educacion",
      "C": "Exclusivamente el tratamiento antirretroviral",
      "D": "Solo la abstinencia sexual"
    },
    "respuesta": "B",
    "explicacion": "La prevención combinada del VIH integra múltiples estrategias: uso de preservativos, tamizaje voluntario, profilaxis pre-exposición (PrEP), profilaxis post-exposición (PEP), tratamiento como prevención (indetectable = intransmisible) y educación. Ninguna estrategia aislada es suficiente.",
    "origen": "nueva",
    "tema": "Cuidado Integral - VIH"
  },
  {
    "id": 451,
    "pregunta": "El sulfato de magnesio es el medicamento de eleccion para la prevencion y tratamiento de convulsiones en:",
    "opciones": {
      "A": "Epilepsia",
      "B": "Eclampsia y preeclampsia severa",
      "C": "Convulsiones febriles en ninos",
      "D": "Status epileptico"
    },
    "respuesta": "B",
    "explicacion": "El sulfato de magnesio es el medicamento de elección para prevenir y tratar convulsiones en eclampsia y preeclampsia severa. Se administra en dosis de carga (4-6g IV) seguida de mantenimiento (1-2g/h). No se usa para epilepsia ni convulsiones febriles, que tienen otros tratamientos específicos.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Emergencias obstétricas"
  },
  {
    "id": 452,
    "pregunta": "La VACAM (Valoracion Clinica del Adulto Mayor) completa es realizada por:",
    "opciones": {
      "A": "El tecnico de enfermeria",
      "B": "El medico del establecimiento de salud",
      "C": "El agente comunitario de salud",
      "D": "Cualquier personal de salud"
    },
    "respuesta": "B",
    "explicacion": "La VACAM completa es realizada por el médico del establecimiento de salud. Incluye evaluación funcional (Katz, Lawton), cognitiva (Pfeiffer), afectiva (Yesavage), social y clínica integral. El personal de enfermería puede realizar la valoración breve, pero la completa requiere evaluación médica.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Paquete del adulto mayor"
  },
  {
    "id": 453,
    "pregunta": "El principio de veracidad en la funcion publica obliga al servidor a:",
    "opciones": {
      "A": "Guardar silencio sobre informacion institucional",
      "B": "Expresarse con autenticidad y no falsear la informacion en el ejercicio de sus funciones",
      "C": "Compartir toda la informacion con los medios de comunicacion",
      "D": "Obedecer las ordenes sin cuestionarlas"
    },
    "respuesta": "B",
    "explicacion": "El principio de veracidad obliga al servidor público a expresarse con autenticidad y no falsear la información en el ejercicio de sus funciones. Está establecido en el Código de Ética de la Función Pública (Ley 27815). No significa compartir toda la información, sino no falsearla.",
    "origen": "nueva",
    "tema": "Ética - Función pública"
  },
  {
    "id": 454,
    "pregunta": "La investigacion descriptiva tiene como objetivo principal:",
    "opciones": {
      "A": "Establecer relaciones causales entre variables",
      "B": "Describir las caracteristicas de un fenomeno, poblacion o situacion",
      "C": "Probar la eficacia de una intervencion",
      "D": "Predecir el comportamiento futuro de las variables"
    },
    "respuesta": "B",
    "explicacion": "La investigación descriptiva tiene como objetivo describir las características de un fenómeno, población o situación. No busca establecer causalidad (eso es analítica/experimental) ni probar intervenciones. Responde a preguntas como ¿qué?, ¿cómo?, ¿dónde?, ¿cuándo? y ¿quiénes?",
    "origen": "nueva",
    "tema": "Investigación - Tipos de investigación"
  },
  {
    "id": 455,
    "pregunta": "La prueba t de Student se utiliza para:",
    "opciones": {
      "A": "Comparar proporciones entre dos grupos",
      "B": "Comparar promedios entre dos grupos independientes o relacionados",
      "C": "Evaluar la asociacion entre variables categoricas",
      "D": "Medir la confiabilidad de un instrumento"
    },
    "respuesta": "B",
    "explicacion": "La prueba t de Student compara promedios entre dos grupos independientes (t para muestras independientes) o relacionados (t para muestras pareadas). Para comparar proporciones se usa chi-cuadrado, para correlación se usa Pearson y para confiabilidad se usa alfa de Cronbach.",
    "origen": "nueva",
    "tema": "Investigación - Procesamiento y análisis de datos"
  },
  {
    "id": 456,
    "pregunta": "El seguimiento y evaluacion del PEI se realiza mediante:",
    "opciones": {
      "A": "Auditorias externas anuales",
      "B": "Indicadores de desempeno y reportes periodicos de avance de metas",
      "C": "Encuestas de satisfaccion del usuario",
      "D": "Inspecciones sorpresa del nivel superior"
    },
    "respuesta": "B",
    "explicacion": "El seguimiento del PEI se realiza mediante indicadores de desempeño y reportes periódicos de avance de metas. Permite verificar si los objetivos estratégicos se están cumpliendo y tomar medidas correctivas oportunas. Es un proceso continuo, no solo auditorías puntuales.",
    "origen": "nueva",
    "tema": "Gestión - Planificación y Presupuesto"
  },
  {
    "id": 457,
    "pregunta": "La buena practica de almacenamiento (BPA) de medicamentos incluye:",
    "opciones": {
      "A": "Almacenar todos los medicamentos juntos para facilitar el acceso",
      "B": "Control de temperatura, humedad, iluminacion, orden y limpieza del area de almacenamiento",
      "C": "Solo verificar las fechas de vencimiento",
      "D": "Mantener los medicamentos en cualquier espacio disponible"
    },
    "respuesta": "B",
    "explicacion": "Las BPA incluyen control de temperatura (15-25°C para la mayoría, 2-8°C para termosensibles), humedad (<70%), iluminación adecuada, orden (FEFO), limpieza y ventilación del área. No basta con verificar vencimientos; se requiere un control integral de las condiciones de almacenamiento.",
    "origen": "nueva",
    "tema": "Gestión - Control de inventario y medicamentos"
  },
  {
    "id": 458,
    "pregunta": "La coordinacion intersectorial en salud se diferencia de la coordinacion intrasectorial porque:",
    "opciones": {
      "A": "Se realiza solo entre establecimientos de salud",
      "B": "Involucra la articulacion con sectores fuera del sector salud como educacion, vivienda y agricultura",
      "C": "Es exclusiva del nivel central del gobierno",
      "D": "Solo se aplica en situaciones de emergencia"
    },
    "respuesta": "B",
    "explicacion": "La coordinación intersectorial involucra la articulación con sectores fuera del sector salud (educación, vivienda, agricultura, transporte). La coordinación intrasectorial es entre establecimientos y niveles dentro del propio sector salud. Ambas son necesarias para abordar los determinantes de la salud.",
    "origen": "nueva",
    "tema": "Gestión - Coordinación intersectorial"
  },
  {
    "id": 459,
    "pregunta": "El consentimiento informado en la atencion clinica es obligatorio antes de:",
    "opciones": {
      "A": "Tomar la presion arterial",
      "B": "Procedimientos invasivos, cirugias y tratamientos con riesgos significativos",
      "C": "Cualquier consulta medica ambulatoria",
      "D": "La prescripcion de medicamentos comunes"
    },
    "respuesta": "B",
    "explicacion": "El consentimiento informado clínico es obligatorio antes de procedimientos invasivos, cirugías y tratamientos con riesgos significativos. No se requiere para procedimientos rutinarios como tomar la presión arterial o prescribir medicamentos comunes. Debe informar riesgos, beneficios y alternativas.",
    "origen": "nueva",
    "tema": "Ética - Derechos de los usuarios"
  },
  {
    "id": 460,
    "pregunta": "La historia clinica electronica tiene como ventaja principal sobre la fisica:",
    "opciones": {
      "A": "No requiere respaldo legal",
      "B": "Facilita el acceso, busqueda, intercambio de informacion y reduce errores de legibilidad",
      "C": "Elimina la necesidad de confidencialidad",
      "D": "No necesita actualizacion"
    },
    "respuesta": "B",
    "explicacion": "La historia clínica electrónica facilita el acceso rápido, búsqueda eficiente, intercambio de información entre profesionales y reduce errores de legibilidad. Mantiene los mismos requisitos legales y de confidencialidad que la física. Requiere respaldo legal y actualización constante.",
    "origen": "nueva",
    "tema": "Gestión - Historia clínica"
  },
  {
    "id": 461,
    "pregunta": "La moda como medida de tendencia central representa:",
    "opciones": {
      "A": "El valor central de los datos ordenados",
      "B": "El valor que se repite con mayor frecuencia en un conjunto de datos",
      "C": "El promedio aritmetico de los datos",
      "D": "La diferencia entre el valor maximo y minimo"
    },
    "respuesta": "B",
    "explicacion": "La moda es el valor que se repite con mayor frecuencia en un conjunto de datos. La mediana es el valor central de los datos ordenados y la media es el promedio aritmético. Un conjunto de datos puede ser unimodal (una moda), bimodal (dos modas) o multimodal.",
    "origen": "nueva",
    "tema": "Investigación - Procesamiento y análisis de datos"
  },
  {
    "id": 462,
    "pregunta": "La desviacion estandar como medida de dispersion indica:",
    "opciones": {
      "A": "El valor central de los datos",
      "B": "Que tan dispersos estan los datos respecto a la media",
      "C": "La frecuencia del valor mas comun",
      "D": "El rango de los datos"
    },
    "respuesta": "B",
    "explicacion": "La desviación estándar indica qué tan dispersos están los datos respecto a la media. Una DE pequeña indica datos agrupados cerca de la media; una DE grande indica datos muy dispersos. Es la raíz cuadrada de la varianza y se expresa en las mismas unidades que los datos.",
    "origen": "nueva",
    "tema": "Investigación - Procesamiento y análisis de datos"
  },
  {
    "id": 463,
    "pregunta": "El ensayo clinico aleatorizado es considerado el estandar de oro en investigacion porque:",
    "opciones": {
      "A": "Es el mas economico de realizar",
      "B": "La asignacion aleatoria minimiza los sesgos y permite establecer causalidad",
      "C": "No requiere consentimiento informado",
      "D": "Se puede realizar sin grupo control"
    },
    "respuesta": "B",
    "explicacion": "El ensayo clínico aleatorizado (ECA) es el estándar de oro porque la asignación aleatoria minimiza los sesgos de selección y confusión, permitiendo establecer causalidad. Sí requiere consentimiento informado y grupo control. Es el diseño con mayor nivel de evidencia después de las revisiones sistemáticas.",
    "origen": "nueva",
    "tema": "Investigación - Tipos de investigación"
  },
  {
    "id": 464,
    "pregunta": "La busqueda activa de casos en tuberculosis se realiza en:",
    "opciones": {
      "A": "Solo en hospitales de tercer nivel",
      "B": "Poblaciones de riesgo como contactos de pacientes TB, personas privadas de libertad, personas con VIH y comunidades vulnerables",
      "C": "Exclusivamente en zonas urbanas",
      "D": "Solo cuando hay brotes confirmados"
    },
    "respuesta": "B",
    "explicacion": "La búsqueda activa de casos de TB se realiza en poblaciones de riesgo: contactos de pacientes TB, personas privadas de libertad, personas con VIH, personas en situación de calle, comunidades indígenas y trabajadores de salud. No se limita a hospitales ni a zonas urbanas.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Tuberculosis"
  },
  {
    "id": 465,
    "pregunta": "El dengue sin signos de alarma se maneja con:",
    "opciones": {
      "A": "Hospitalizacion inmediata y liquidos intravenosos",
      "B": "Hidratacion oral abundante, paracetamol para la fiebre y seguimiento ambulatorio",
      "C": "Antibioticos de amplio espectro",
      "D": "Transfusion de plaquetas"
    },
    "respuesta": "B",
    "explicacion": "El dengue sin signos de alarma se maneja ambulatoriamente con hidratación oral abundante, paracetamol para la fiebre (nunca aspirina ni AINEs por riesgo de sangrado) y seguimiento diario. No requiere hospitalización ni antibióticos. Se hospitaliza solo si aparecen signos de alarma.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Enfermedades metaxénicas y zoonóticas"
  },
  {
    "id": 466,
    "pregunta": "La suplementacion con acido folico en la gestante se recomienda para prevenir:",
    "opciones": {
      "A": "Anemia ferropenica",
      "B": "Defectos del tubo neural en el feto",
      "C": "Diabetes gestacional",
      "D": "Preeclampsia"
    },
    "respuesta": "B",
    "explicacion": "El ácido fólico previene defectos del tubo neural (espina bífida, anencefalia) en el feto. Se recomienda 400 mcg/día desde 3 meses antes de la concepción y durante el primer trimestre. La anemia ferropénica se previene con hierro, no con ácido fólico.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Paquete prenatal"
  },
  {
    "id": 467,
    "pregunta": "La escala de depresion de PHQ-9 se utiliza en atencion primaria para:",
    "opciones": {
      "A": "Diagnosticar esquizofrenia",
      "B": "Tamizar y evaluar la severidad de sintomas depresivos",
      "C": "Evaluar el desarrollo cognitivo en ninos",
      "D": "Medir la ansiedad generalizada"
    },
    "respuesta": "B",
    "explicacion": "El PHQ-9 (Patient Health Questionnaire-9) es un instrumento validado para tamizar y evaluar la severidad de síntomas depresivos en atención primaria. Tiene 9 ítems basados en criterios del DSM. Para ansiedad se usa el GAD-7. No diagnostica esquizofrenia ni evalúa desarrollo cognitivo.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Salud mental"
  },
  {
    "id": 468,
    "pregunta": "Las enfermedades no transmisibles (ENT) representan la principal causa de mortalidad a nivel mundial. Las cuatro principales son: enfermedades cardiovasculares, cancer, diabetes y:",
    "opciones": {
      "A": "VIH/SIDA",
      "B": "Enfermedades respiratorias cronicas",
      "C": "Tuberculosis",
      "D": "Malaria"
    },
    "respuesta": "B",
    "explicacion": "Las cuatro principales ENT según la OMS son: enfermedades cardiovasculares, cáncer, diabetes y enfermedades respiratorias crónicas (EPOC, asma). Juntas causan más del 70% de las muertes a nivel mundial. VIH, TB y malaria son enfermedades transmisibles.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Enfermedades no transmisibles"
  },
  {
    "id": 469,
    "pregunta": "La tecnica de cepillado dental recomendada por la OMS para ninos es la tecnica de:",
    "opciones": {
      "A": "Bass modificada",
      "B": "Fones (movimientos circulares)",
      "C": "Stillman",
      "D": "Charters"
    },
    "respuesta": "B",
    "explicacion": "La técnica de Fones (movimientos circulares) es la recomendada para niños por ser sencilla y fácil de aprender. La técnica de Bass modificada es más compleja y se recomienda para adultos. Stillman y Charters son técnicas especializadas para situaciones específicas.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Salud bucal"
  },
  {
    "id": 470,
    "pregunta": "La etica de la investigacion en salud se rige por principios establecidos en:",
    "opciones": {
      "A": "La Carta de Ottawa",
      "B": "La Declaracion de Helsinki y el Informe Belmont",
      "C": "La Constitucion Politica del Peru exclusivamente",
      "D": "El Codigo Civil"
    },
    "respuesta": "B",
    "explicacion": "La ética de investigación en salud se rige por la Declaración de Helsinki (1964, actualizada) y el Informe Belmont (1979), que establecen los principios de respeto a las personas, beneficencia y justicia. La Carta de Ottawa (1986) se refiere a promoción de la salud, no a ética de investigación.",
    "origen": "nueva",
    "tema": "Investigación - Aspectos éticos"
  },
  {
    "id": 471,
    "pregunta": "La atencion de salud con pertinencia cultural implica que los servicios deben:",
    "opciones": {
      "A": "Ser identicos en todo el pais sin variaciones",
      "B": "Adaptarse a las caracteristicas culturales, linguisticas y sociales de la poblacion que atienden",
      "C": "Priorizar la medicina tradicional sobre la convencional",
      "D": "Atender solo en idioma espanol"
    },
    "respuesta": "B",
    "explicacion": "La pertinencia cultural implica que los servicios de salud deben adaptarse a las características culturales, lingüísticas y sociales de la población. Incluye atención en idioma local, respeto a prácticas tradicionales compatibles y adecuación de los servicios al contexto cultural.",
    "origen": "nueva",
    "tema": "Ética - Interculturalidad"
  },
  {
    "id": 472,
    "pregunta": "El indicador de proceso en calidad de atencion evalua:",
    "opciones": {
      "A": "Los recursos disponibles en el establecimiento",
      "B": "Las actividades y procedimientos realizados durante la atencion al paciente",
      "C": "Los resultados en la salud del paciente",
      "D": "La infraestructura del establecimiento"
    },
    "respuesta": "B",
    "explicacion": "El indicador de proceso evalúa las actividades y procedimientos realizados durante la atención (ej: cumplimiento de protocolos, tiempo de espera, número de controles prenatales). Los indicadores de estructura evalúan recursos disponibles y los de resultado evalúan cambios en la salud del paciente.",
    "origen": "nueva",
    "tema": "Gestión - Calidad de servicios de salud"
  },
  {
    "id": 473,
    "pregunta": "La farmacovigilancia tiene como objetivo principal:",
    "opciones": {
      "A": "Controlar el precio de los medicamentos",
      "B": "Detectar, evaluar y prevenir las reacciones adversas a medicamentos",
      "C": "Distribuir medicamentos a los establecimientos",
      "D": "Autorizar la comercializacion de nuevos farmacos"
    },
    "respuesta": "B",
    "explicacion": "La farmacovigilancia tiene como objetivo detectar, evaluar y prevenir las reacciones adversas a medicamentos (RAM) una vez comercializados. Es responsabilidad de DIGEMID en Perú. No se encarga de precios, distribución ni autorización de comercialización.",
    "origen": "nueva",
    "tema": "Gestión - Uso racional de medicamentos"
  },
  {
    "id": 474,
    "pregunta": "El clima organizacional se evalua mediante:",
    "opciones": {
      "A": "Auditorias financieras",
      "B": "Encuestas de percepcion del personal sobre el ambiente laboral",
      "C": "Indicadores de productividad",
      "D": "Evaluacion de la infraestructura"
    },
    "respuesta": "B",
    "explicacion": "El clima organizacional se evalúa mediante encuestas de percepción del personal sobre el ambiente laboral: relaciones interpersonales, liderazgo, comunicación, motivación y condiciones de trabajo. Un buen clima organizacional se asocia con mejor desempeño y menor rotación de personal.",
    "origen": "nueva",
    "tema": "Gestión - Clima y cultura organizacional"
  },
  {
    "id": 475,
    "pregunta": "La vacuna antineumococica conjugada en el esquema regular peruano se administra a los:",
    "opciones": {
      "A": "Al nacer y a los 6 meses",
      "B": "2, 4 y 12 meses de edad",
      "C": "6, 10 y 14 meses de edad",
      "D": "4, 8 y 15 meses de edad"
    },
    "respuesta": "B",
    "explicacion": "La vacuna antineumocócica conjugada se administra a los 2, 4 meses (serie primaria) y 12 meses (refuerzo) en el esquema peruano. Protege contra Streptococcus pneumoniae, principal causa de neumonía, meningitis y otitis media en niños.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Vacunación y ESAVI"
  },
  {
    "id": 476,
    "pregunta": "La desparasitacion en ninos de 2 a 5 anos se realiza con mebendazol o albendazol cada:",
    "opciones": {
      "A": "3 meses",
      "B": "6 meses",
      "C": "12 meses",
      "D": "Mensualmente"
    },
    "respuesta": "B",
    "explicacion": "La desparasitación en niños de 2 a 5 años se realiza cada 6 meses con mebendazol (500 mg dosis única) o albendazol (400 mg dosis única). Es parte del paquete de atención integral del niño y contribuye a prevenir la anemia por parasitosis intestinal.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Paquete del niño"
  },
  {
    "id": 477,
    "pregunta": "El perimetro cefalico del recien nacido a termino normal mide aproximadamente:",
    "opciones": {
      "A": "30-32 cm",
      "B": "33-36 cm",
      "C": "37-40 cm",
      "D": "28-30 cm"
    },
    "respuesta": "B",
    "explicacion": "El perímetro cefálico del recién nacido a término normal mide aproximadamente 33-36 cm. Es un indicador importante del crecimiento cerebral. Valores por debajo sugieren microcefalia y por encima pueden indicar hidrocefalia. Se mide con cinta métrica a nivel de la circunferencia máxima.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Paquete del niño"
  },
  {
    "id": 478,
    "pregunta": "La anemia severa en ninos de 6 meses a 5 anos se diagnostica cuando la hemoglobina ajustada es menor a:",
    "opciones": {
      "A": "9 g/dL",
      "B": "7 g/dL",
      "C": "8 g/dL",
      "D": "10 g/dL"
    },
    "respuesta": "B",
    "explicacion": "La anemia severa en niños de 6 meses a 5 años se diagnostica con hemoglobina ajustada menor a 7 g/dL. La clasificación es: leve (10-10.9 g/dL), moderada (7-9.9 g/dL) y severa (<7 g/dL). La anemia severa requiere referencia inmediata y puede necesitar transfusión sanguínea.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Prevención y control de anemia"
  },
  {
    "id": 479,
    "pregunta": "El plan de contingencia en un establecimiento de salud se elabora para:",
    "opciones": {
      "A": "Programar las actividades rutinarias del ano",
      "B": "Preparar la respuesta ante situaciones de emergencia o desastre especificas",
      "C": "Distribuir el presupuesto anual",
      "D": "Evaluar el desempeno del personal"
    },
    "respuesta": "B",
    "explicacion": "El plan de contingencia se elabora para preparar la respuesta ante situaciones de emergencia o desastre específicas (sismos, inundaciones, epidemias). Define roles, recursos, procedimientos y rutas de evacuación. Es diferente del POI que programa actividades rutinarias.",
    "origen": "nueva",
    "tema": "Salud Pública - Emergencias y desastres"
  },
  {
    "id": 480,
    "pregunta": "La validez externa de un estudio de investigacion se refiere a:",
    "opciones": {
      "A": "El grado en que los resultados son correctos para la muestra estudiada",
      "B": "La capacidad de generalizar los resultados a otras poblaciones o contextos",
      "C": "La confiabilidad del instrumento utilizado",
      "D": "La ausencia de sesgos en la seleccion"
    },
    "respuesta": "B",
    "explicacion": "La validez externa se refiere a la capacidad de generalizar los resultados a otras poblaciones o contextos. Depende de la representatividad de la muestra y las condiciones del estudio. La validez interna se refiere a que los resultados sean correctos para la muestra estudiada.",
    "origen": "nueva",
    "tema": "Investigación - Metodología"
  },
  {
    "id": 481,
    "pregunta": "La tasa de ataque secundario mide:",
    "opciones": {
      "A": "Los casos iniciales de un brote",
      "B": "La proporcion de casos nuevos entre los contactos de un caso primario",
      "C": "La mortalidad total del brote",
      "D": "El numero de brotes en un ano"
    },
    "respuesta": "B",
    "explicacion": "La tasa de ataque secundario mide la proporción de casos nuevos entre los contactos de un caso primario durante el periodo de incubación. Es útil para evaluar la transmisibilidad de una enfermedad y la efectividad de las medidas de control en contactos.",
    "origen": "nueva",
    "tema": "Salud Pública - Brotes y epidemias"
  },
  {
    "id": 482,
    "pregunta": "La segregacion de residuos solidos en establecimientos de salud consiste en:",
    "opciones": {
      "A": "Transportar los residuos al almacen final",
      "B": "Separar los residuos en el punto de generacion segun su clasificacion",
      "C": "Tratar los residuos antes de su disposicion",
      "D": "Incinerar todos los residuos generados"
    },
    "respuesta": "B",
    "explicacion": "La segregación consiste en separar los residuos en el punto de generación según su clasificación: biocontaminados (bolsa roja), especiales (bolsa amarilla) y comunes (bolsa negra). Es responsabilidad del personal que genera el residuo y es el paso más importante de la gestión.",
    "origen": "nueva",
    "tema": "Salud Comunitaria - Gestión de residuos sólidos"
  },
  {
    "id": 483,
    "pregunta": "La segunda fase del tratamiento de tuberculosis sensible dura:",
    "opciones": {
      "A": "2 meses con 2 medicamentos",
      "B": "4 meses con 2 medicamentos",
      "C": "3 meses con 3 medicamentos",
      "D": "6 meses con 4 medicamentos"
    },
    "respuesta": "B",
    "explicacion": "El tratamiento de TB sensible tiene dos fases: primera fase (2 meses con 4 medicamentos: rifampicina, isoniacida, pirazinamida y etambutol) y segunda fase (4 meses con 2 medicamentos: rifampicina e isoniacida). Total: 6 meses de tratamiento.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Tuberculosis"
  },
  {
    "id": 484,
    "pregunta": "La ITS (Infeccion de Transmision Sexual) mas frecuente a nivel mundial es:",
    "opciones": {
      "A": "Sifilis",
      "B": "Infeccion por Chlamydia trachomatis",
      "C": "Gonorrea",
      "D": "Herpes genital"
    },
    "respuesta": "B",
    "explicacion": "La infección por Chlamydia trachomatis es la ITS más frecuente a nivel mundial. Frecuentemente es asintomática, lo que facilita su transmisión. Puede causar enfermedad inflamatoria pélvica, infertilidad y embarazo ectópico. Se trata con azitromicina o doxiciclina.",
    "origen": "nueva",
    "tema": "Cuidado Integral - ITS y hepatitis"
  },
  {
    "id": 485,
    "pregunta": "El parto pretermino se define como aquel que ocurre antes de las:",
    "opciones": {
      "A": "40 semanas de gestacion",
      "B": "37 semanas de gestacion",
      "C": "38 semanas de gestacion",
      "D": "36 semanas de gestacion"
    },
    "respuesta": "B",
    "explicacion": "El parto pretérmino ocurre antes de las 37 semanas de gestación. Se clasifica en: extremadamente pretérmino (<28 semanas), muy pretérmino (28-31 semanas) y pretérmino moderado a tardío (32-36 semanas). El parto a término es de 37 a 41 semanas.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Embarazo, parto y puerperio"
  },
  {
    "id": 486,
    "pregunta": "El proceso de enfermeria en la etapa de evaluacion consiste en:",
    "opciones": {
      "A": "Recopilar datos del paciente",
      "B": "Comparar los resultados obtenidos con los objetivos planteados para determinar el logro de las metas",
      "C": "Formular diagnosticos de enfermeria",
      "D": "Ejecutar las intervenciones planificadas"
    },
    "respuesta": "B",
    "explicacion": "La etapa de evaluación del PAE consiste en comparar los resultados obtenidos con los objetivos planteados para determinar el logro de las metas. Las 5 etapas del PAE son: valoración (recopilar datos), diagnóstico (NANDA), planificación (NOC/NIC), ejecución y evaluación.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Proceso de atención de enfermería"
  },
  {
    "id": 487,
    "pregunta": "La Declaracion de Alma-Ata (1978) establecio como meta:",
    "opciones": {
      "A": "La erradicacion de todas las enfermedades infecciosas",
      "B": "Salud para todos en el ano 2000 mediante la Atencion Primaria de Salud",
      "C": "La privatizacion de los servicios de salud",
      "D": "La creacion de hospitales en todas las comunidades"
    },
    "respuesta": "B",
    "explicacion": "La Declaración de Alma-Ata (1978) estableció la meta de 'Salud para todos en el año 2000' mediante la Atención Primaria de Salud como estrategia clave. Definió la APS como la asistencia sanitaria esencial, accesible, con participación comunitaria y a un costo asequible.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Atención primaria de salud"
  },
  {
    "id": 488,
    "pregunta": "El intervalo de confianza del 95% en investigacion significa que:",
    "opciones": {
      "A": "El 95% de los datos estan dentro del rango normal",
      "B": "Si se repitiera el estudio 100 veces, en 95 de ellas el valor real estaria dentro del intervalo calculado",
      "C": "El 95% de los participantes respondieron correctamente",
      "D": "La probabilidad de error es del 95%"
    },
    "respuesta": "B",
    "explicacion": "El intervalo de confianza del 95% significa que si se repitiera el estudio 100 veces, en 95 de ellas el valor real (parámetro poblacional) estaría dentro del intervalo calculado. No significa que el 95% de los datos estén en ese rango. A mayor IC, mayor precisión con intervalos más estrechos.",
    "origen": "nueva",
    "tema": "Investigación - Procesamiento y análisis de datos"
  },
  {
    "id": 489,
    "pregunta": "El consentimiento informado debe obtenerse de manera:",
    "opciones": {
      "A": "Verbal sin documentacion",
      "B": "Libre, voluntaria, informada y documentada",
      "C": "Obligatoria sin opcion de rechazo",
      "D": "Solo por escrito del familiar"
    },
    "respuesta": "B",
    "explicacion": "El consentimiento informado debe obtenerse de manera libre (sin coerción), voluntaria (el paciente puede rechazar), informada (con explicación clara de riesgos, beneficios y alternativas) y documentada (por escrito con firma). El paciente siempre tiene derecho a rechazar.",
    "origen": "nueva",
    "tema": "Ética - Derechos de los usuarios"
  },
  {
    "id": 490,
    "pregunta": "La gestion de la calidad en salud se basa en tres dimensiones segun Donabedian:",
    "opciones": {
      "A": "Eficiencia, eficacia y efectividad",
      "B": "Estructura, proceso y resultado",
      "C": "Acceso, oportunidad y seguridad",
      "D": "Planificacion, ejecucion y evaluacion"
    },
    "respuesta": "B",
    "explicacion": "Según Donabedian, la calidad en salud se evalúa en tres dimensiones: estructura (recursos disponibles), proceso (actividades realizadas durante la atención) y resultado (cambios en la salud del paciente). Este modelo es el más utilizado mundialmente para evaluar calidad de atención.",
    "origen": "nueva",
    "tema": "Gestión - Calidad de servicios de salud"
  },
  {
    "id": 491,
    "pregunta": "El CENARES (Centro Nacional de Abastecimiento de Recursos Estrategicos en Salud) tiene como funcion principal:",
    "opciones": {
      "A": "Regular los precios de medicamentos",
      "B": "Programar, adquirir, almacenar y distribuir recursos estrategicos en salud a nivel nacional",
      "C": "Autorizar la comercializacion de medicamentos",
      "D": "Capacitar al personal de farmacia"
    },
    "respuesta": "B",
    "explicacion": "CENARES tiene como función principal programar, adquirir, almacenar y distribuir recursos estratégicos en salud (medicamentos, insumos, equipos) a nivel nacional. DIGEMID autoriza la comercialización de medicamentos y regula precios. Son entidades complementarias pero con funciones distintas.",
    "origen": "nueva",
    "tema": "Gestión - Uso racional de medicamentos"
  },
  {
    "id": 492,
    "pregunta": "La evaluacion del desempeno del personal de salud tiene como finalidad:",
    "opciones": {
      "A": "Sancionar al personal con bajo rendimiento",
      "B": "Identificar fortalezas y areas de mejora para optimizar la calidad de atencion",
      "C": "Determinar los salarios del personal",
      "D": "Reducir la plantilla de trabajadores"
    },
    "respuesta": "B",
    "explicacion": "La evaluación del desempeño tiene como finalidad identificar fortalezas y áreas de mejora para optimizar la calidad de atención. No es punitiva sino formativa: busca retroalimentar al personal, planificar capacitaciones y mejorar los procesos de atención.",
    "origen": "nueva",
    "tema": "Gestión - Recursos humanos"
  },
  {
    "id": 493,
    "pregunta": "La anemia moderada en ninos de 6 meses a 5 anos se diagnostica cuando la hemoglobina ajustada se encuentra entre:",
    "opciones": {
      "A": "10 a 10.9 g/dL",
      "B": "7 a 9.9 g/dL",
      "C": "9 a 10.9 g/dL",
      "D": "8 a 10 g/dL"
    },
    "respuesta": "B",
    "explicacion": "La anemia moderada en niños de 6 meses a 5 años se diagnostica con hemoglobina ajustada entre 7 y 9.9 g/dL. La clasificación completa es: leve (10-10.9 g/dL), moderada (7-9.9 g/dL) y severa (<7 g/dL). La anemia moderada requiere tratamiento con hierro y seguimiento estrecho.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Prevención y control de anemia"
  },
  {
    "id": 494,
    "pregunta": "La estrategia AIEPI (Atencion Integrada a las Enfermedades Prevalentes de la Infancia) tiene como objetivo:",
    "opciones": {
      "A": "Tratar exclusivamente la desnutricion infantil",
      "B": "Reducir la mortalidad y morbilidad en ninos menores de 5 anos mediante un abordaje integrado",
      "C": "Vacunar a todos los ninos menores de 1 ano",
      "D": "Hospitalizar a todos los ninos enfermos"
    },
    "respuesta": "B",
    "explicacion": "AIEPI busca reducir la mortalidad y morbilidad en niños menores de 5 años mediante un abordaje integrado de las enfermedades prevalentes (IRA, EDA, desnutrición, malaria, sarampión). Tiene tres componentes: clínico, comunitario y de organización de servicios.",
    "origen": "nueva",
    "tema": "Cuidado Integral - Paquete del niño"
  },
  {
    "id": 495,
    "pregunta": "La poblacion clave para la prevencion del VIH incluye:",
    "opciones": {
      "A": "Solo gestantes",
      "B": "Hombres que tienen sexo con hombres, personas trans, trabajadores sexuales y personas que se inyectan drogas",
      "C": "Exclusivamente adolescentes",
      "D": "Solo personal de salud"
    },
    "respuesta": "B",
    "explicacion": "Las poblaciones clave para la prevención del VIH son: hombres que tienen sexo con hombres (HSH), personas trans, trabajadores sexuales y personas que se inyectan drogas. Tienen mayor vulnerabilidad y riesgo de infección. Las estrategias de prevención deben priorizarlas sin estigmatizarlas.",
    "origen": "nueva",
    "tema": "Cuidado Integral - VIH"
  },
  {
    "id": 496,
    "pregunta": "La causa mas frecuente de hemorragia postparto es:",
    "opciones": {
      "A": "Laceraciones del canal del parto",
      "B": "Atonia uterina",
      "C": "Retencion de restos placentarios",
      "D": "Coagulopatia"
    },
    "respuesta": "B",
    "explicacion": "La atonía uterina (falta de contracción del útero después del parto) es la causa más frecuente de hemorragia postparto (70-80% de los casos). Las otras causas se recuerdan con las 4T: Tono (atonía), Tejido (retención placentaria), Trauma (laceraciones) y Trombina (coagulopatía).",
    "origen": "nueva",
    "tema": "Cuidado Integral - Emergencias obstétricas"
  },
  {
    "id": 497,
    "pregunta": "La investigacion aplicada se diferencia de la investigacion basica porque:",
    "opciones": {
      "A": "No utiliza metodo cientifico",
      "B": "Busca resolver problemas practicos especificos utilizando el conocimiento existente",
      "C": "Solo genera teorias sin aplicacion practica",
      "D": "No requiere revision bibliografica"
    },
    "respuesta": "B",
    "explicacion": "La investigación aplicada busca resolver problemas prácticos específicos utilizando el conocimiento existente. La investigación básica (pura) busca generar nuevo conocimiento teórico sin aplicación práctica inmediata. Ambas usan método científico y requieren revisión bibliográfica.",
    "origen": "nueva",
    "tema": "Investigación - Conceptos básicos"
  },
  {
    "id": 498,
    "pregunta": "El incidente en la atencion de salud se diferencia del evento adverso porque:",
    "opciones": {
      "A": "Siempre causa dano al paciente",
      "B": "Es una situacion que pudo haber causado dano pero no lo causo (cuasi-evento)",
      "C": "Es mas grave que el evento adverso",
      "D": "Solo ocurre en cirugias"
    },
    "respuesta": "B",
    "explicacion": "El incidente (cuasi-evento o near miss) es una situación que pudo haber causado daño al paciente pero no lo causó, ya sea por azar o por detección oportuna. El evento adverso sí causa daño. Reportar incidentes es fundamental para prevenir futuros eventos adversos.",
    "origen": "nueva",
    "tema": "Gestión - Calidad de servicios de salud"
  },
  {
    "id": 499,
    "pregunta": "La Ley General de Salud del Peru establece que toda persona tiene derecho a:",
    "opciones": {
      "A": "Recibir atencion solo si tiene seguro de salud",
      "B": "La proteccion de su salud en los terminos y condiciones que establece la ley",
      "C": "Elegir libremente cualquier medicamento sin prescripcion",
      "D": "Atencion gratuita en establecimientos privados"
    },
    "respuesta": "B",
    "explicacion": "La Ley General de Salud (Ley 26842) establece que toda persona tiene derecho a la protección de su salud en los términos y condiciones que establece la ley. Este derecho es irrenunciable y no está condicionado a tener seguro de salud. La atención de emergencia es obligatoria en cualquier establecimiento.",
    "origen": "nueva",
    "tema": "Ética - Derechos de los usuarios"
  },
  {
    "id": 500,
    "pregunta": "El trabajo en equipo multidisciplinario en salud se caracteriza por:",
    "opciones": {
      "A": "Que cada profesional trabaja de forma independiente sin coordinacion",
      "B": "La integracion de diferentes disciplinas profesionales que aportan desde su especialidad para lograr objetivos comunes en beneficio del paciente",
      "C": "Que solo el medico toma las decisiones",
      "D": "La competencia entre profesionales por el reconocimiento"
    },
    "respuesta": "B",
    "explicacion": "El trabajo multidisciplinario integra diferentes disciplinas profesionales (médicos, enfermeras, obstetrices, psicólogos, nutricionistas) que aportan desde su especialidad para lograr objetivos comunes en beneficio del paciente. Requiere comunicación, coordinación y respeto mutuo entre profesionales.",
    "origen": "nueva",
    "tema": "Gestión - Trabajo colaborativo"
  },
  {
      "id": 501,
      "pregunta": "La organización mundial de la salud ratifica la importancia de la actividad física y la considera como el factor que interviene en el estado de salud de las personas y la define como la principal estrategia en prevención de la ...",
      "opciones": {
          "A": "morbilidad.",
          "B": "obesidad.",
          "C": "letalidad.",
          "D": "mortalidad."
      },
      "respuesta": "B",
      "tema": "Salud Pública - Promoción de la salud",
      "origen": "examen",
      "explicacion": "La OMS define la actividad física como la principal estrategia en prevención de la obesidad. La inactividad física es uno de los principales factores de riesgo para enfermedades no transmisibles, y la actividad física regular previene el sobrepeso y la obesidad."
  },
  {
      "id": 502,
      "pregunta": "En un establecimiento de salud I-4 el médico jefe debe elaborar el ...... que es una herramienta de gestión que considera las actividades para la implementación del plan operativo institucional.",
      "opciones": {
          "A": "Plan de abastecimiento e inversiones",
          "B": "Plan estratégico institucional",
          "C": "Cuadro multianual de necesidades",
          "D": "Plan de salud local"
      },
      "respuesta": "D",
      "tema": "Gestión - Planificación y Presupuesto",
      "origen": "examen",
      "explicacion": "El Plan de salud local es la herramienta de gestión que considera las actividades para la implementación del plan operativo institucional a nivel del establecimiento de salud. Permite operativizar las intervenciones sanitarias según la realidad local."
  },
  {
      "id": 503,
      "pregunta": "Personal de salud, realiza sesión educativa en el establecimiento e identifica a mujer con vida sexual activa, que desde hace un año no usa método anticonceptivo, la refiere a consultorio de PPFF, donde opta por un método. ¿Cuál es la definición operacional para su registro en el HIS?",
      "opciones": {
          "A": "Usuaria captada",
          "B": "Atención en PPFF",
          "C": "Charla informativa",
          "D": "Consejería en PPFF"
      },
      "respuesta": "A",
      "tema": "Cuidado Integral - Salud sexual y reproductiva",
      "origen": "examen",
      "explicacion": "Una usuaria captada es aquella mujer en edad fértil con vida sexual activa que no usaba método anticonceptivo y que, tras ser identificada y referida, opta por un método. Esta definición operacional se registra en el HIS para el seguimiento de indicadores de planificación familiar."
  },
  {
      "id": 504,
      "pregunta": "Dentro del paquete integral de salud adulto mujer. ¿Qué atenciones preventivas se realizan?",
      "opciones": {
          "A": "Despistaje de Sífilis, VIH/SIDA, cáncer de cérvix",
          "B": "Atención de violencia familiar",
          "C": "Tratamiento de algún daño prevalente",
          "D": "Identificación de síndrome de maltrato"
      },
      "respuesta": "A",
      "tema": "Cuidado Integral - Paquete del adulto",
      "origen": "examen",
      "explicacion": "Las atenciones preventivas del paquete integral de salud adulto mujer incluyen despistaje de Sífilis, VIH/SIDA y cáncer de cérvix. La atención de violencia familiar y el tratamiento de daños prevalentes son atenciones recuperativas, no preventivas."
  },
  {
      "id": 505,
      "pregunta": "Al realizar la visita de seguimiento a una gestante de 28 años de edad, relata que su esposo la dopa y abusa sexualmente, por lo que el embarazo es no deseado, pide confidencialidad no comentar con otros profesionales de la salud por sentir vergüenza. Si la intervención es multidisciplinaria. ¿Qué acciones se debe tener en cuenta para respetar el derecho a la confidencialidad?",
      "opciones": {
          "A": "Coordinar acciones conjuntas para el acompañamiento y protección",
          "B": "Prevención de enfermedades de transmisión sexual",
          "C": "Derivar a psicología para atención en salud mental",
          "D": "Derivar a un establecimiento de salud de mayor complejidad"
      },
      "respuesta": "A",
      "tema": "Ética - Derechos de los usuarios",
      "origen": "examen",
      "explicacion": "Para respetar la confidencialidad en una intervención multidisciplinaria ante violencia sexual, se deben coordinar acciones conjuntas para el acompañamiento y protección de la gestante. La información se comparte solo entre los profesionales involucrados en su atención, manteniendo la reserva del caso."
  },
  {
      "id": 506,
      "pregunta": "En la comunidad rural donde realiza su SERUMS varios moradores reportan el hallazgo de muerte y enfermedad inusuales en cuyes y ratas de campo, por lo que debe proceder a la notificación respectiva. ¿Cuál es el acontecimiento epidemiológico presentado?",
      "opciones": {
          "A": "Zoonosis",
          "B": "Endemia animal",
          "C": "Epizootia",
          "D": "Brote infeccioso"
      },
      "respuesta": "C",
      "tema": "Salud Pública - Brotes y epidemias",
      "origen": "examen",
      "explicacion": "Una epizootia es una enfermedad que afecta a un gran número de animales de manera inusual en un área y tiempo determinados, equivalente a una epidemia en humanos. La muerte y enfermedad inusuales en cuyes y ratas de campo configura una epizootia que debe notificarse al sistema de vigilancia."
  },
  {
      "id": 507,
      "pregunta": "En el centro de salud del primer nivel de atención, se está llevando a cabo, pruebas de tamizaje de enfermedades venéreas. Dicha estrategia corresponde al nivel de prevención:",
      "opciones": {
          "A": "Primaria",
          "B": "Cuaternaria",
          "C": "Terciaria",
          "D": "Secundaria"
      },
      "respuesta": "D",
      "tema": "Salud Pública - Niveles de prevención",
      "origen": "examen",
      "explicacion": "Las pruebas de tamizaje corresponden a prevención secundaria, ya que buscan la detección precoz de enfermedades en personas aparentemente sanas. El tamizaje de enfermedades venéreas permite identificar casos asintomáticos para tratamiento temprano y evitar complicaciones."
  },
  {
      "id": 508,
      "pregunta": "Adolescente de 13 años, con 38 semanas de gestación, migrante de los andes, sin control, indica relaciones sexuales han sido voluntaria con ex pareja de 35 años, viene acompañada de madre al establecimiento I-3 ¿Cuál es la conducta a seguir?",
      "opciones": {
          "A": "Comunicar a las autoridades, como código violeta y referencia hospitalaria",
          "B": "Responsabilizar a sus progenitores por negligencia hacia la paciente",
          "C": "Aplicar kits completos de emergencia para descarte de ITS, VIH, Hepatitis B",
          "D": "Brindar actividades socio educativas a fin de que paciente identifique riesgos"
      },
      "respuesta": "A",
      "tema": "Cuidado Integral - Violencia y protección",
      "origen": "examen",
      "explicacion": "Una adolescente de 13 años gestante constituye un caso de violencia sexual por ley (menor de 14 años no puede consentir relaciones sexuales). Se debe comunicar a las autoridades como código violeta y referir a un establecimiento hospitalario para atención integral de la gestación de alto riesgo."
  },
  {
      "id": 509,
      "pregunta": "Varón de 35 años acude al establecimiento de salud para evaluación médica. Durante la consulta refiere que presenta tos y flema desde hace 15 días. Según la Norma Técnica de salud para la prevención y control de tuberculosis. ¿Cómo se denomina a un paciente con esta sintomatología?",
      "opciones": {
          "A": "Paciente con infección latente por tuberculosis",
          "B": "Sintomático respiratorio examinado",
          "C": "Sintomático respiratorio",
          "D": "Paciente con tuberculosis sensible"
      },
      "respuesta": "C",
      "tema": "Cuidado Integral - Tuberculosis",
      "origen": "examen",
      "explicacion": "Un sintomático respiratorio es toda persona que presenta tos con o sin flema por 15 días o más. Es la definición operativa para la búsqueda activa de casos de tuberculosis. El sintomático respiratorio examinado es aquel al que ya se le tomó muestra de esputo."
  },
  {
      "id": 510,
      "pregunta": "¿Cuál es una vacuna multidosis, indicada a partir de los 15 meses hasta los 59 años?",
      "opciones": {
          "A": "BCG",
          "B": "Sarampión, Papera y Rubeola (SPR)",
          "C": "Antiamarílica (AMA)",
          "D": "Tétano y Difteria (DT)"
      },
      "respuesta": "C",
      "tema": "Cuidado Integral - Vacunación y ESAVI",
      "origen": "examen",
      "explicacion": "La vacuna antiamarílica (AMA) es multidosis, se indica a partir de los 15 meses hasta los 59 años. Se aplica en dosis única y protege contra la fiebre amarilla. La BCG es monodosis al recién nacido, la SPR se aplica al año y 18 meses, y la DT es para adultos."
  },
  {
      "id": 511,
      "pregunta": "En estudios clínicos y epidemiológicos, la medición de variables que incluyen la perspectiva del paciente con referencia a resultados relacionados a su calidad de vida. ¿Cuáles son los instrumentos de recolección de datos más indicados?",
      "opciones": {
          "A": "Entrevistas y cuestionarios",
          "B": "Observación directa e indirecta",
          "C": "Registro por el paciente y familiar",
          "D": "Registros y documentos ya existentes"
      },
      "respuesta": "A",
      "tema": "Investigación - Instrumentos de recolección",
      "origen": "examen",
      "explicacion": "Las entrevistas y cuestionarios son los instrumentos más indicados para medir variables que incluyen la perspectiva del paciente sobre su calidad de vida. Permiten captar la percepción subjetiva del paciente sobre su estado de salud, bienestar y funcionamiento."
  },
  {
      "id": 512,
      "pregunta": "Un médico serumista se encuentra trabajando en un centro de salud de 12 horas, al cual acude una gestante de bajo riesgo obstétrico con contracciones. ¿A qué establecimiento de salud le corresponde referir?",
      "opciones": {
          "A": "II - 1",
          "B": "III - 1",
          "C": "I - 3",
          "D": "I - 4"
      },
      "respuesta": "D",
      "tema": "Gestión - Referencia y contrarreferencia",
      "origen": "examen",
      "explicacion": "Una gestante con contracciones en un centro de salud de 12 horas (I-3) debe ser referida a un establecimiento I-4, que cuenta con internamiento y capacidad para atención de partos. El I-4 es el siguiente nivel de complejidad en el primer nivel de atención."
  },
  {
      "id": 513,
      "pregunta": "El responsable de la RIS desea saber la cantidad de atenciones realizadas por el médico serumista en consulta externa. ¿Qué indicador de gestión debe utilizar?",
      "opciones": {
          "A": "Rendimiento",
          "B": "Productividad",
          "C": "Permanencia",
          "D": "Concentración"
      },
      "respuesta": "B",
      "tema": "Gestión - Indicadores de gestión",
      "origen": "examen",
      "explicacion": "La productividad es el indicador que mide la cantidad de atenciones realizadas por un profesional en un periodo determinado. Se diferencia del rendimiento (hora/profesional), la concentración (atenciones por usuario) y la permanencia (tiempo de estancia)."
  },
  {
      "id": 514,
      "pregunta": "El pueblo de Coronilla, están experimentando una contaminación ambiental por derrame de petróleo en un lago circundante a la población, la enfermera encargada de la posta de salud prioriza la etiqueta diagnóstica de \"Gestión ineficaz de salud comunitaria\". ¿Qué intervención NIC es prioritario?",
      "opciones": {
          "A": "Colaboración con otros profesionales sanitarios",
          "B": "Favorecimiento de la resiliencia: comunidad",
          "C": "Desarrollo de la salud de la comunidad",
          "D": "Manejo ambiental: comunidad"
      },
      "respuesta": "C",
      "tema": "Cuidado Integral - Proceso de atención de enfermería",
      "origen": "examen",
      "explicacion": "Ante una gestión ineficaz de salud comunitaria por contaminación ambiental, la intervención NIC prioritaria es el desarrollo de la salud de la comunidad. Esta intervención facilita que los miembros de la comunidad identifiquen sus problemas de salud y gestionen estrategias para mejorarlos."
  },
  {
      "id": 515,
      "pregunta": "La infección de un ciudadano por el virus del dengue y el desenlace en muerte, corresponde a la historia natural de la enfermedad. Considerando este concepto, la ... es un momento importante en el conocimiento de la enfermedad.",
      "opciones": {
          "A": "vacunación",
          "B": "aparición de síntomas",
          "C": "investigación",
          "D": "promoción de la salud"
      },
      "respuesta": "B",
      "tema": "Salud Pública - Historia natural de la enfermedad",
      "origen": "examen",
      "explicacion": "La aparición de síntomas es un momento importante en el conocimiento de la historia natural de la enfermedad, ya que marca la transición de la fase subclínica a la fase clínica del periodo patogénico. Permite identificar el inicio de las manifestaciones y orientar el diagnóstico y tratamiento."
  },
  {
      "id": 516,
      "pregunta": "En la evaluación de una gestante se evidencia úlcera indurada e indolora (chancro) localizada en mucosa genital. ¿En qué fase de la historia natural de la enfermedad se encuentra?",
      "opciones": {
          "A": "Clínica",
          "B": "Subclínica",
          "C": "Inducción",
          "D": "Resolutiva"
      },
      "respuesta": "A",
      "tema": "Salud Pública - Historia natural de la enfermedad",
      "origen": "examen",
      "explicacion": "La presencia de una úlcera indurada e indolora (chancro sifilítico) es una manifestación clínica visible, por lo que la gestante se encuentra en la fase clínica de la historia natural de la enfermedad. La fase subclínica no presenta signos ni síntomas evidentes."
  },
  {
      "id": 517,
      "pregunta": "Si la interacción entre un paciente y el personal sanitario tratante, se da mediante uso de las TICs, ¿Qué concepto de salud se está aplicando?",
      "opciones": {
          "A": "Salud intercultural",
          "B": "Promoviendo salud",
          "C": "Cuidado integral",
          "D": "Telesalud"
      },
      "respuesta": "D",
      "tema": "Gestión - Telesalud",
      "origen": "examen",
      "explicacion": "La telesalud es el concepto que se aplica cuando la interacción entre paciente y personal sanitario se realiza mediante el uso de las TIC. Incluye teleconsulta, teleorientación, telemonitoreo y teleinterconsulta como modalidades de atención a distancia."
  },
  {
      "id": 518,
      "pregunta": "Melissa gestante adolescente de 14 años acude al Cs Huáscar para colocarse sus dosis de vacunas indicando a la enfermera que no presenta antecedente de antidiftérica. ¿Cuál es el trimestre de vacunación que le corresponde?",
      "opciones": {
          "A": "II trimestre",
          "B": "I trimestre",
          "C": "VI trimestre",
          "D": "III trimestre"
      },
      "respuesta": "A",
      "tema": "Cuidado Integral - Vacunación y ESAVI",
      "origen": "examen",
      "explicacion": "La vacunación antidiftérica en gestantes sin antecedente de vacunación se inicia en el II trimestre de gestación. Se administra la vacuna dT (difteria y tétanos) a partir de las 20 semanas para proteger a la madre y al recién nacido."
  },
  {
      "id": 519,
      "pregunta": "Cuando un niño menor de 5 años con diagnóstico de enfermería de Organización del desarrollo infantil deteriorado está en control del servicio de CRED, la priorización de resultados NOC e intervención NIC es:",
      "opciones": {
          "A": "Desarrollo infantil: 5 años - Manejo ambiental: seguridad",
          "B": "Conocimiento: conducta de salud - Enseñanza: seguridad del niño",
          "C": "Conocimiento: manejo del TDAH – Enseñanza: desarrollo en la primera infancia",
          "D": "Desempeño de rol de padres niño pequeño – Favorecimiento del rol parental"
      },
      "respuesta": "C",
      "tema": "Cuidado Integral - Proceso de atención de enfermería",
      "origen": "examen",
      "explicacion": "Para un niño con organización del desarrollo infantil deteriorado, el resultado NOC priorizado es el conocimiento sobre manejo del TDAH y la intervención NIC es la enseñanza sobre desarrollo en la primera infancia. Esto permite orientar a los padres sobre estimulación temprana y manejo del desarrollo."
  },
  {
      "id": 520,
      "pregunta": "Paciente migrante gestante quechua hablante, tiene derecho a …… para parto vertical",
      "opciones": {
          "A": "Presencia solo de pareja",
          "B": "Servicios de salud con adecuación cultural",
          "C": "Traductor de idioma original",
          "D": "Acompañamiento de familia"
      },
      "respuesta": "B",
      "tema": "Ética - Interculturalidad",
      "origen": "examen",
      "explicacion": "La gestante quechua hablante tiene derecho a servicios de salud con adecuación cultural para parto vertical. La adecuación cultural implica que el establecimiento adapte sus servicios respetando las prácticas culturales de la paciente, incluyendo la posición del parto, el idioma y las costumbres."
  },
  {
      "id": 521,
      "pregunta": "El enfermero ubicado en un centro asistencial comunitario de salud mental, está liderando el programa \"TaytaWuasi\" en el centro poblado Huaycarán, ha iniciado un plan de acción \"Intervención familiar para influir positivamente\" ¿Qué actividad realizó primero para este plan?",
      "opciones": {
          "A": "Identificar puntos fuertes en los recursos dentro de la familia",
          "B": "Ver que los familiares sean expertos en el cuidado de su paciente",
          "C": "Fomentar la toma de decisiones familiares en el plan de cuidado",
          "D": "Establecer una relación de confianza con los miembros familiares"
      },
      "respuesta": "D",
      "tema": "Salud Comunitaria - Salud mental comunitaria",
      "origen": "examen",
      "explicacion": "La primera actividad en un plan de intervención familiar es establecer una relación de confianza con los miembros familiares. Sin confianza no es posible identificar recursos, fomentar decisiones ni lograr que los familiares participen activamente en el cuidado."
  },
  {
      "id": 522,
      "pregunta": "En la lucha contra la anemia, se realiza el dosaje de hemoglobina a los 6 meses de nacido, para determinar si tiene anemia. Sí es positivo se inicia el tratamiento …",
      "opciones": {
          "A": "promocional.",
          "B": "recuperativo.",
          "C": "profiláctico.",
          "D": "preventivo."
      },
      "respuesta": "B",
      "tema": "Cuidado Integral - Prevención y control de anemia",
      "origen": "examen",
      "explicacion": "Si el dosaje de hemoglobina a los 6 meses confirma anemia, se inicia tratamiento recuperativo con hierro terapéutico. El tratamiento recuperativo busca restablecer los niveles normales de hemoglobina. El preventivo o profiláctico se da cuando NO tiene anemia."
  },
  {
      "id": 523,
      "pregunta": "Los pobladores de una comunidad ashaninka llegan al centro de salud preocupados debido a que sus niños presentan dolor y diarrea con mucha frecuencia. Además, refieren que tomaron preparados de hierbas y posteriormente algunos fallecieron. ¿Cuál es la función de salud pública que debe fortalecer el personal de salud?",
      "opciones": {
          "A": "Vigilancia y valoración por el laboratorio",
          "B": "Valoración del estado de salud",
          "C": "Valoración clínica y laboratorio",
          "D": "Vigilancia y valoración del estado de salud"
      },
      "respuesta": "D",
      "tema": "Salud Pública - Conceptos básicos",
      "origen": "examen",
      "explicacion": "Ante una situación de enfermedad frecuente con fallecimientos en una comunidad, la función de salud pública a fortalecer es la vigilancia y valoración del estado de salud. Esto permite monitorear, investigar y analizar los problemas de salud de la comunidad para tomar decisiones oportunas."
  },
  {
      "id": 524,
      "pregunta": "En un caserío de Pasco, se presentan 5 casos de la enfermedad de pertussis durante los meses de enero y febrero. Como jefe de establecimiento. ¿Qué actividades dispone realizar?",
      "opciones": {
          "A": "Complementarias de vacunación",
          "B": "Vacunación regular",
          "C": "Desinfección en comunidad",
          "D": "Control de vectores"
      },
      "respuesta": "A",
      "tema": "Cuidado Integral - Vacunación y ESAVI",
      "origen": "examen",
      "explicacion": "Ante 5 casos de pertussis (tos ferina) se deben realizar actividades complementarias de vacunación, que incluyen bloqueo vacunal y barrido en la comunidad afectada. No es vacunación regular sino una respuesta específica al brote para completar esquemas y proteger a susceptibles."
  },
  {
      "id": 525,
      "pregunta": "El jefe del establecimiento de salud nivel I-2 ha identificado que existe necesidad de otro personal técnico para las visitas domiciliarias, porque no se logran las metas programadas. ¿En qué instrumento de gestión se debe programar este recurso?",
      "opciones": {
          "A": "Presupuesto por resultados",
          "B": "Plan de salud local",
          "C": "Plan operativo",
          "D": "Plan estratégico"
      },
      "respuesta": "C",
      "tema": "Gestión - Planificación y Presupuesto",
      "origen": "examen",
      "explicacion": "La necesidad de personal técnico adicional para cumplir metas se programa en el Plan Operativo. Este instrumento de gestión programa las actividades, recursos humanos y financieros necesarios para el cumplimiento de metas en el corto plazo (1 año)."
  },
  {
      "id": 526,
      "pregunta": "Ud. es jefe de un establecimiento I-4 en la región norte del país y los boletines informativos de epidemiología indican un aumento de casos de melanomas por exposición a rayos UV en el último año. ¿A qué tipo de casos corresponden?",
      "opciones": {
          "A": "Incidentes",
          "B": "Reincidentes",
          "C": "Probables",
          "D": "Prevalentes"
      },
      "respuesta": "A",
      "tema": "Salud Pública - Epidemiología",
      "origen": "examen",
      "explicacion": "Los casos nuevos de melanoma que aparecen en un periodo determinado corresponden a casos incidentes. La incidencia mide los casos nuevos de una enfermedad en una población durante un tiempo específico. Los prevalentes incluyen tanto casos nuevos como existentes."
  },
  {
      "id": 527,
      "pregunta": "A un establecimiento de salud, llegan 25 niños beneficiarios del programa de alimentación escolar, por presentar cuadro de intoxicación alimentaria, luego del consumir el desayuno escolar. Este tipo de evento debe ser notificado y corresponde a:",
      "opciones": {
          "A": "Endemia",
          "B": "Epizootia",
          "C": "Brote",
          "D": "Pandemia"
      },
      "respuesta": "C",
      "tema": "Salud Pública - Brotes y epidemias",
      "origen": "examen",
      "explicacion": "25 niños con intoxicación alimentaria tras consumir el mismo desayuno escolar configura un brote. Un brote es la aparición de dos o más casos de una enfermedad vinculados epidemiológicamente en un área y tiempo determinados, con una fuente común identificable."
  },
  {
      "id": 528,
      "pregunta": "En un pueblo amazónico se está implementando una RIS de manera ordenada, siguiendo la normativa del MINSA, considerando su realidad local. ¿Qué característica del proceso se está cumpliendo?",
      "opciones": {
          "A": "Progresivo",
          "B": "Sostenible",
          "C": "Planificado",
          "D": "Sistemático"
      },
      "respuesta": "D",
      "tema": "Gestión - Administración de servicios",
      "origen": "examen",
      "explicacion": "Implementar una RIS de manera ordenada, siguiendo normativa y considerando la realidad local corresponde a un proceso sistemático. Lo sistemático implica seguir un orden lógico, metódico y estructurado basado en normas y procedimientos establecidos."
  },
  {
      "id": 529,
      "pregunta": "El fortalecimiento de capacidades del personal de salud para mejorar la calidad en un servicio específico de atención primaria de salud, es una actividad acorde al objetivo de planeamiento estratégico relacionado a …",
      "opciones": {
          "A": "fortalecer el ejercicio de la rectoría de la autoridad nacional de salud.",
          "B": "mejorar asignación de presupuesto para atención integral.",
          "C": "incrementar el acceso a atención integral de salud.",
          "D": "difundir la importancia de la salud como derecho."
      },
      "respuesta": "C",
      "tema": "Gestión - Planeamiento estratégico",
      "origen": "examen",
      "explicacion": "El fortalecimiento de capacidades del personal para mejorar la calidad en atención primaria se relaciona con el objetivo de incrementar el acceso a atención integral de salud. Mejorar las competencias del personal permite ofrecer servicios de mayor calidad y ampliar el acceso efectivo."
  },
  {
      "id": 530,
      "pregunta": "La autoridad regional de salud está implementando la estrategia de Salud Familiar para que se pueda desarrollar efectivamente en el siguiente año. ¿En qué plan institucional se debe programar?",
      "opciones": {
          "A": "Contingencia",
          "B": "Continuidad",
          "C": "Operativo",
          "D": "Estratégico"
      },
      "respuesta": "C",
      "tema": "Gestión - Planificación y Presupuesto",
      "origen": "examen",
      "explicacion": "Una estrategia que se implementará en el siguiente año se programa en el Plan Operativo. El plan operativo programa actividades a corto plazo (1 año) con metas físicas y financieras. El plan estratégico es a mediano-largo plazo y el de contingencia es para emergencias."
  },
  {
      "id": 531,
      "pregunta": "Durante la campaña de vacunación se interviene a las Instituciones Educativas a fin de vacunar a los niños y niñas con la vacuna de VPH para protegerlos y prevenir el cáncer cervical. ¿Desde qué edad se puede vacunar y cuantas dosis se debe aplicar?",
      "opciones": {
          "A": "9 años y dos dosis",
          "B": "13 años y dosis única",
          "C": "11 años y dosis única",
          "D": "9 años y dosis única"
      },
      "respuesta": "D",
      "tema": "Cuidado Integral - Vacunación y ESAVI",
      "origen": "examen",
      "explicacion": "La vacuna contra el VPH se aplica desde los 9 años en dosis única según el esquema actual del calendario de vacunación peruano. Protege contra los tipos de VPH que causan cáncer cervical, siendo más efectiva cuando se administra antes del inicio de la actividad sexual."
  },
  {
      "id": 532,
      "pregunta": "Mujer de 25 años con diagnóstico de TB pulmonar, es evaluada por especialista quien le detecta que presenta resistencia a la Isoniacida y a la Rifampicina. ¿Cómo se denomina a la tuberculosis que presenta resistencia a ambos fármacos?",
      "opciones": {
          "A": "Extensamente resistente",
          "B": "Multidrogorresistente",
          "C": "Sensible",
          "D": "Pre- extensamente resistente"
      },
      "respuesta": "B",
      "tema": "Cuidado Integral - Tuberculosis",
      "origen": "examen",
      "explicacion": "La TB multidrogorresistente (TB MDR) es aquella que presenta resistencia simultánea a Isoniazida y Rifampicina, los dos fármacos de primera línea más importantes. La extensamente resistente (XDR) agrega resistencia a fluoroquinolonas y al menos un inyectable de segunda línea."
  },
  {
      "id": 533,
      "pregunta": "Personal de salud de P.S. I-1, se dispone a transportar una muestra para despistaje de TBC hacia el hospital, según el documento técnico para el transporte seguro de sustancias infecciosas, la muestra debe almacenarse en:",
      "opciones": {
          "A": "Contenedor de plástico hermético",
          "B": "Contenedor de metal",
          "C": "Cooler resistente",
          "D": "Placa petri recubierta"
      },
      "respuesta": "A",
      "tema": "Salud Pública - Bioseguridad",
      "origen": "examen",
      "explicacion": "Para el transporte seguro de muestras de TBC, se debe usar un contenedor de plástico hermético que evite derrames y contaminación. El sistema de triple embalaje incluye recipiente primario hermético, embalaje secundario y embalaje exterior rígido."
  },
  {
      "id": 534,
      "pregunta": "Disminución de la tolerancia a la actividad, carga excesiva de fatiga, recuperación quirúrgica deteriorada ¿a qué dominio pertenece?",
      "opciones": {
          "A": "Dominio 2. Descanso y sueño / Clase 3 regulación",
          "B": "Dominio 1. Promoción de la salud / Clase 3 autocuidado",
          "C": "Dominio 5. Autocuidado / clase 2 regulación",
          "D": "Dominio 4. Actividad / descanso - clase 3. Balance energético"
      },
      "respuesta": "D",
      "tema": "Cuidado Integral - Proceso de atención de enfermería",
      "origen": "examen",
      "explicacion": "La disminución de tolerancia a la actividad, fatiga excesiva y recuperación quirúrgica deteriorada pertenecen al Dominio 4 (Actividad/descanso), Clase 3 (Balance energético) de la taxonomía NANDA. Este dominio abarca la producción, conservación y gasto de energía."
  },
  {
      "id": 535,
      "pregunta": "Tras administrar un medicamento \"x\" a un paciente, este reporta náuseas. Esta reacción a pesar de solo ser una sospecha de haber sido generada por el medicamento \"x\", sin necesidad de confirmar la relación causal, debe reportarse en la historia clínica del paciente; porque corresponde a:",
      "opciones": {
          "A": "Evento centinela",
          "B": "Sospecha de reacción adversa",
          "C": "Reacción bien caracterizada",
          "D": "ESAVI"
      },
      "respuesta": "B",
      "tema": "Gestión - Uso racional de medicamentos",
      "origen": "examen",
      "explicacion": "Una sospecha de reacción adversa es cualquier efecto no deseado que se presenta tras la administración de un medicamento, sin necesidad de confirmar la relación causal. Debe registrarse obligatoriamente en la historia clínica y reportarse al sistema de farmacovigilancia."
  },
  {
      "id": 536,
      "pregunta": "Un centro de salud I-3 que no genera más de 10 litros al día de residuos sólidos biocontaminados y cuenta con autoclave para el tratamiento. ¿Cuál es el tiempo máximo que puede almacenarlos antes de su disposición final?",
      "opciones": {
          "A": "Un mes",
          "B": "Siete días",
          "C": "48 horas",
          "D": "Tres días"
      },
      "respuesta": "B",
      "tema": "Salud Comunitaria - Gestión de residuos sólidos",
      "origen": "examen",
      "explicacion": "Un establecimiento que genera menos de 10 litros diarios de residuos biocontaminados y cuenta con autoclave puede almacenarlos hasta siete días antes de su disposición final. Este plazo permite acumular suficiente volumen para un tratamiento eficiente."
  },
  {
      "id": 537,
      "pregunta": "En un establecimiento de salud I-4, mujer de 25 años, recibió tratamiento según esquema TB, pero indica que los síntomas continúan, y que su hija menor de 5 años, también fue diagnosticada de lo mismo. ¿Qué principio del uso de medicamentos antimicrobianos NO se aplicó?",
      "opciones": {
          "A": "Resistencia",
          "B": "Biodisponibilidad",
          "C": "Concentración",
          "D": "Calidad"
      },
      "respuesta": "A",
      "tema": "Gestión - Uso racional de medicamentos",
      "origen": "examen",
      "explicacion": "Si los síntomas de TB continúan tras el tratamiento y la hija también fue diagnosticada, el principio que no se aplicó es el de resistencia. No se evaluó la posible resistencia del Mycobacterium tuberculosis a los fármacos, lo que llevó a un tratamiento ineficaz y transmisión intrafamiliar."
  },
  {
      "id": 538,
      "pregunta": "En el centro de salud del primer nivel, como serumista, el registro de los datos organizados (estadística de casos) o la colecta de datos en campo (estudios de flora y fauna, vectores, entre otros) son acciones de:",
      "opciones": {
          "A": "Salud pública",
          "B": "Vigilancia epidemiológica",
          "C": "Vigilancia centinela",
          "D": "Investigación"
      },
      "respuesta": "B",
      "tema": "Salud Pública - Vigilancia epidemiológica",
      "origen": "examen",
      "explicacion": "El registro de datos organizados y la colecta de datos en campo sobre casos, flora, fauna y vectores son acciones de vigilancia epidemiológica. La vigilancia recopila, analiza e interpreta datos de salud de forma sistemática para la toma de decisiones en salud pública."
  },
  {
      "id": 539,
      "pregunta": "¿Con qué se determina el número de la historia clínica de una persona de nacionalidad peruana?",
      "opciones": {
          "A": "Carnet de extranjería",
          "B": "Pasaporte",
          "C": "Según número de ingreso",
          "D": "Documento Nacional de Identidad"
      },
      "respuesta": "D",
      "tema": "Gestión - Historia clínica",
      "origen": "examen",
      "explicacion": "El número de historia clínica de una persona de nacionalidad peruana se determina con el Documento Nacional de Identidad (DNI). El DNI es el documento único de identificación que permite vincular al paciente con su registro médico de manera unívoca."
  },
  {
      "id": 540,
      "pregunta": "Es un componente prioritario y esencial de los programas de inmunización y comprende el cumplimiento de un conjunto de procedimientos normalizados, estandarizados o protocolizados que se observan desde la formulación de la vacuna, su producción, transporte, almacenamiento y conservación, distribución, reconstitución, administración (inyección segura), eliminación (bioseguridad) y la vigilancia epidemiológica e investigación de los ESAVI. ¿A qué vacuna corresponde?",
      "opciones": {
          "A": "Vacuna regular",
          "B": "Vacuna segura",
          "C": "Vacuna inatenuada",
          "D": "Vacuna atenuada"
      },
      "respuesta": "B",
      "tema": "Cuidado Integral - Vacunación y ESAVI",
      "origen": "examen",
      "explicacion": "El concepto de vacuna segura comprende todos los procedimientos estandarizados desde la formulación hasta la vigilancia de ESAVI. Garantiza que cada etapa del proceso de inmunización cumpla estándares de calidad y seguridad para proteger al paciente."
  },
  {
      "id": 541,
      "pregunta": "Durante la vacunación casa por casa muy cerca al establecimiento de salud, una enfermera aplica la última vacuna de DT que le quedaba a una mujer de 40 años de edad. De regreso al EESS, al abrir su thermo para guardar los paquetes de hielo, visualiza que la T° registraba 10°C. ¿Qué riesgos puede padecer última mujer vacunada ante la ruptura de la cadena de frio?",
      "opciones": {
          "A": "Disminución del número de personas susceptibles",
          "B": "Incremento de la eficacia de la vacuna",
          "C": "Presentación abscesos no sépticos",
          "D": "Ganancia de la confianza de la población"
      },
      "respuesta": "C",
      "tema": "Cuidado Integral - Vacunación y ESAVI",
      "origen": "examen",
      "explicacion": "Ante la ruptura de cadena de frío (T° de 10°C, superior al rango de +2 a +8°C), la vacuna DT puede perder potencia y generar abscesos no sépticos en el sitio de aplicación. La degradación del adyuvante de aluminio por temperatura inadecuada causa reacciones locales inflamatorias."
  },
  {
      "id": 542,
      "pregunta": "¿Cuál es el rango de T° en °C, necesario para la conservación de las vacunas?",
      "opciones": {
          "A": "1 a 8",
          "B": "2 a 8",
          "C": "4 a 10",
          "D": "-1 a -8"
      },
      "respuesta": "B",
      "tema": "Cuidado Integral - Vacunación y ESAVI",
      "origen": "examen",
      "explicacion": "El rango de temperatura para la conservación de la mayoría de vacunas es de +2°C a +8°C. Temperaturas menores a 0°C destruyen vacunas adsorbidas y temperaturas mayores a +8°C degradan los antígenos, especialmente de vacunas virales vivas."
  },
  {
      "id": 543,
      "pregunta": "Para garantizar el adecuado desempeño de los recursos humanos de su establecimiento de salud. ¿Qué se debe considerar?",
      "opciones": {
          "A": "Valores",
          "B": "Competencias",
          "C": "Virtudes",
          "D": "Caracteres"
      },
      "respuesta": "B",
      "tema": "Gestión - Administración de servicios",
      "origen": "examen",
      "explicacion": "Para garantizar el adecuado desempeño de los recursos humanos se deben considerar las competencias. Las competencias integran conocimientos, habilidades y actitudes necesarias para el desempeño efectivo de las funciones asignadas en el establecimiento de salud."
  },
  {
      "id": 544,
      "pregunta": "Adela es una adulta mayor viviendo con diabetes mellitus, la cual tiene dificultad para movilizarse. Refiere que vive con su hija que trabaja todo el día y no puede acompañarla siempre al establecimiento de salud. Está estable, pero necesita su medicación de manera oportuna. ¿Qué tipo de intervención de Telesalud requiere?",
      "opciones": {
          "A": "Telemonitoreo",
          "B": "Telecapacitación",
          "C": "Teleconsulta",
          "D": "Teleorientación"
      },
      "respuesta": "A",
      "tema": "Gestión - Telesalud",
      "origen": "examen",
      "explicacion": "El telemonitoreo es la intervención adecuada para una paciente estable con diabetes que tiene dificultad para movilizarse. Permite el seguimiento a distancia de sus parámetros clínicos, adherencia al tratamiento y estado de salud sin necesidad de acudir al establecimiento."
  },
  {
      "id": 545,
      "pregunta": "En las sesiones educativas a madres de familia del programa JUNTOS, manifiestan que para eliminar la anemia les dan a sus niños remolacha, hojas de berros entre otros productos de la zona. Como personal de salud. ¿Qué acciones se deben realizar para continuar las capacitaciones sin contradecir las creencias de la comunidad?",
      "opciones": {
          "A": "Desestimar las opiniones e indicar que estos alimentos no son ricos en hierro",
          "B": "Retirarlos del beneficio económico del programa JUNTOS",
          "C": "Fortalecer el consumo de alimentos ricos en hierro, respetando sus opiniones",
          "D": "Obligar el consumo de alimentos ricos en hierro para evitar la anemia"
      },
      "respuesta": "C",
      "tema": "Ética - Interculturalidad",
      "origen": "examen",
      "explicacion": "Se debe fortalecer el consumo de alimentos ricos en hierro respetando las opiniones de las madres. El enfoque intercultural exige no contradecir las creencias sino complementarlas, orientando sobre alimentos con mayor contenido de hierro hemínico sin desvalorizar sus prácticas tradicionales."
  },
  {
      "id": 546,
      "pregunta": "¿Cuál es la vacuna que se administra vía intradérmica, en la región del músculo deltoides del brazo derecho a 2 cm del acromion o vértice del hombro?",
      "opciones": {
          "A": "APO",
          "B": "BCG",
          "C": "Fiebre amarilla",
          "D": "Hepatitis B"
      },
      "respuesta": "B",
      "tema": "Cuidado Integral - Vacunación y ESAVI",
      "origen": "examen",
      "explicacion": "La BCG (Bacilo de Calmette-Guérin) se administra vía intradérmica en la región del músculo deltoides del brazo derecho, a 2 cm del acromion. Es la única vacuna del esquema regular que se aplica por vía intradérmica. La APO es oral, y la fiebre amarilla y hepatitis B son subcutánea e intramuscular respectivamente."
  },
  {
      "id": 547,
      "pregunta": "Dentro del periodo prenatal. ¿Qué factor de riesgo neonatal consideramos en la evaluación de la gestante?",
      "opciones": {
          "A": "Cesárea de emergencia",
          "B": "Diabetes materna",
          "C": "Parto prolongado",
          "D": "Placenta previa"
      },
      "respuesta": "B",
      "tema": "Cuidado Integral - Paquete prenatal",
      "origen": "examen",
      "explicacion": "La diabetes materna es un factor de riesgo neonatal que se evalúa durante el periodo prenatal. Puede causar macrosomía fetal, hipoglucemia neonatal, distrés respiratorio y malformaciones congénitas. La cesárea de emergencia, parto prolongado y placenta previa son factores intraparto."
  },
  {
      "id": 548,
      "pregunta": "Mujer de 52 años, natural de región selva, trabaja en prostitución, refiere a profesional de salud que el día anterior fue dopada y sufrió agresión sexual, tiene dolor pélvico y moretones en el cuerpo, ¿Qué debe hacer el profesional de salud?",
      "opciones": {
          "A": "Derivar a paciente para que se le brinde atención en salud mental",
          "B": "Aplicar kit completo de emergencia, previo consentimiento",
          "C": "Aplicar kit de descarte sin consentimiento para que no se asuste",
          "D": "Hacer denuncia a las autoridades sin autorización de paciente"
      },
      "respuesta": "B",
      "tema": "Cuidado Integral - Violencia y protección",
      "origen": "examen",
      "explicacion": "Ante una agresión sexual, el profesional de salud debe aplicar el kit completo de emergencia previo consentimiento informado de la paciente. El kit incluye anticoncepción de emergencia, profilaxis de ITS, VIH y Hepatitis B. Siempre se requiere el consentimiento de la paciente."
  },
  {
      "id": 549,
      "pregunta": "Se observa que hay migrantes de selva que viven en un asentamiento humano de un distrito de Lima, que son discriminados y rechazados entre los pobladores del distrito donde pernoctan, por lo que se debe …",
      "opciones": {
          "A": "imponer acciones socio educativas.",
          "B": "normalizar el comportamiento de la comunidad.",
          "C": "cambiar hábitos, costumbres y creencias.",
          "D": "reforzar la interacción cultural."
      },
      "respuesta": "D",
      "tema": "Ética - Interculturalidad",
      "origen": "examen",
      "explicacion": "Ante la discriminación de migrantes de la selva, se debe reforzar la interacción cultural. La interculturalidad promueve el diálogo, respeto mutuo y convivencia entre diferentes culturas. No se imponen cambios ni se normalizan comportamientos discriminatorios."
  },
  {
      "id": 550,
      "pregunta": "Recientemente usted fue asignado a un C.S. y quiere conocer cómo se transmite una enfermedad de una persona a otra o de un reservorio no humano a una población humana, además de las razones por las que los comportamientos de riesgo causan enfermedades. ¿En qué se basa para realizar este estudio?",
      "opciones": {
          "A": "Tanatología",
          "B": "Epidemiología",
          "C": "Estadística",
          "D": "Salud pública"
      },
      "respuesta": "B",
      "tema": "Salud Pública - Epidemiología",
      "origen": "examen",
      "explicacion": "La epidemiología es la ciencia que estudia cómo se transmiten las enfermedades, su distribución en la población y los factores que las determinan. Permite conocer las cadenas de transmisión y los comportamientos de riesgo que causan enfermedades."
  },
  {
      "id": 551,
      "pregunta": "En una comunidad se reportan dos o más casos de una misma enfermedad y están relacionados entre sí, el personal de salud según criterio epidemiológico identifica que es:",
      "opciones": {
          "A": "Pandemia",
          "B": "Brote",
          "C": "Endemia",
          "D": "Epidemia"
      },
      "respuesta": "B",
      "tema": "Salud Pública - Brotes y epidemias",
      "origen": "examen",
      "explicacion": "Dos o más casos de una misma enfermedad relacionados entre sí configuran un brote. El brote es la aparición de casos vinculados epidemiológicamente que superan lo esperado en un área y tiempo determinados."
  },
  {
      "id": 552,
      "pregunta": "En un establecimiento de salud, acude mujer de 25 años, indicando que su pareja la obligó a ver \"material pornográfico\", el médico que la atiende brinda atención integral y requiere registrarla en su HIS. Este acontecimiento está tipificado como:",
      "opciones": {
          "A": "Abuso sexual",
          "B": "Agresión física",
          "C": "Violencia sexual",
          "D": "Violencia de género"
      },
      "respuesta": "C",
      "tema": "Cuidado Integral - Violencia y protección",
      "origen": "examen",
      "explicacion": "Obligar a ver material pornográfico está tipificado como violencia sexual. La violencia sexual incluye cualquier acto de naturaleza sexual impuesto sin consentimiento, incluyendo obligar a ver pornografía, tocamientos, acoso y violación."
  },
  {
      "id": 553,
      "pregunta": "Gestante de 8 semanas de 36 años, refiere ser violentada sexualmente por su pareja, acude al servicio a solicitar apoyo. Como profesional de la salud se debe indicar que la gestante realice su denuncia en primera instancia a la:",
      "opciones": {
          "A": "Ministerio de la mujer",
          "B": "Policía del sector",
          "C": "Centro de emergencia mujer",
          "D": "Fiscalía de familia"
      },
      "respuesta": "D",
      "tema": "Cuidado Integral - Violencia y protección",
      "origen": "examen",
      "explicacion": "La gestante víctima de violencia sexual debe realizar su denuncia en primera instancia a la Fiscalía de familia. La fiscalía es la entidad competente para recibir denuncias, investigar y actuar de oficio en casos de violencia familiar y sexual."
  },
  {
      "id": 554,
      "pregunta": "En un establecimiento de salud I-4, un ejemplo de UPSS podría considerarse al servicio de …",
      "opciones": {
          "A": "docencia.",
          "B": "gestión de investigación.",
          "C": "pediatría.",
          "D": "epidemiología."
      },
      "respuesta": "C",
      "tema": "Gestión - Clasificación de establecimientos",
      "origen": "examen",
      "explicacion": "En un establecimiento I-4, un ejemplo de UPSS (Unidad Productora de Servicios de Salud) es el servicio de pediatría. Las UPSS son unidades que brindan atención directa al usuario. Docencia, investigación y epidemiología son unidades de apoyo, no UPSS."
  },
  {
      "id": 555,
      "pregunta": "Paciente migrante con tuberculosis pulmonar acude al establecimiento de salud solicitando ser atendido en el programa de PCT, no cuenta con documento de identificación. ¿Cuál es el procedimiento para solucionar el problema y brindar una atención adecuada y oportuna?",
      "opciones": {
          "A": "Por estrategia sanitaria no requiere documento",
          "B": "Referir a migraciones con el diagnóstico de TB",
          "C": "Solicitar la exoneración del tratamiento",
          "D": "Exigir su inscripción al SIS por enfermedad infecto contagiosa"
      },
      "respuesta": "B",
      "tema": "Cuidado Integral - Tuberculosis",
      "origen": "examen",
      "explicacion": "El paciente migrante con TB sin documento de identificación debe ser referido a migraciones con el diagnóstico de TB para regularizar su situación documentaria y acceder al tratamiento. La TB es una enfermedad de interés en salud pública que requiere atención independientemente del estatus migratorio."
  },
  {
      "id": 556,
      "pregunta": "En el establecimiento de salud I-4, acude paciente con tratamiento de sífilis. Para la clasificación de la etapa clínica y diagnóstico de neurosífilis. ¿Cuál es la prueba indicada?",
      "opciones": {
          "A": "VDRL (Venereal Disease Research Laboratory)",
          "B": "FTA Abs (Fluorescent Treponemal Antibody-Absorption)",
          "C": "TPPA (Treponema pallidum particle agglutination)",
          "D": "TPHA (Treponema pallidum Haemagglutination)"
      },
      "respuesta": "A",
      "tema": "Cuidado Integral - ITS",
      "origen": "examen",
      "explicacion": "El VDRL es la prueba indicada para la clasificación de la etapa clínica y diagnóstico de neurosífilis. Se realiza en líquido cefalorraquídeo (LCR) y es la prueba estándar para detectar compromiso del sistema nervioso central por Treponema pallidum."
  },
  {
      "id": 557,
      "pregunta": "Si un adulto recibió las 3 dosis de vacunación completa de la difteria y tétanos, ¿a los cuantos años después debe reforzar la inmunidad con una sola dosis?",
      "opciones": {
          "A": "15",
          "B": "10",
          "C": "20",
          "D": "5"
      },
      "respuesta": "B",
      "tema": "Cuidado Integral - Vacunación y ESAVI",
      "origen": "examen",
      "explicacion": "Después de completar las 3 dosis de dT, se debe reforzar la inmunidad cada 10 años con una dosis de refuerzo. Este intervalo mantiene niveles protectores de anticuerpos contra difteria y tétanos a lo largo de la vida adulta."
  },
  {
      "id": 558,
      "pregunta": "Los factores que afectan a la salud son múltiples, y las relaciones entre ellos, complejas. Los determinantes sociales, definidos como las condiciones en las que viven las personas y a sus experiencias sociales que tienen un efecto sobre su salud, tienen los siguientes componentes:",
      "opciones": {
          "A": "Etnia - factores biológicos",
          "B": "Posición socioeconómica - genética",
          "C": "Estructurales - intermedios",
          "D": "Socioeconómicos - interculturales"
      },
      "respuesta": "C",
      "tema": "Salud Comunitaria - Determinantes sociales",
      "origen": "examen",
      "explicacion": "Los determinantes sociales de la salud tienen dos componentes principales: estructurales (gobernanza, políticas, valores culturales que generan estratificación social) e intermedios (condiciones materiales, factores psicosociales, conductas, sistema de salud). Ambos interactúan para producir inequidades en salud."
  },
  {
      "id": 559,
      "pregunta": "Se realiza la visita a un niño con anemia, se le orienta a la madre darle alimentos ricos en hierro como la sangrecita. La madre señala que su religión no le permite. ¿Cuál es la conducta más adecuada para mejorar el estado de salud del menor?",
      "opciones": {
          "A": "Respetar la decisión y creencia de la familia",
          "B": "Fortalecer el consumo de hierro intradomiciliario",
          "C": "Llamarle la atención por negligencia y desidia",
          "D": "Obligar a que la madre lo alimente con la sangrecita"
      },
      "respuesta": "B",
      "tema": "Ética - Interculturalidad",
      "origen": "examen",
      "explicacion": "La conducta adecuada es fortalecer el consumo de hierro intradomiciliario, ofreciendo alternativas de alimentos ricos en hierro que sean aceptables para la familia según sus creencias religiosas. Se respeta la creencia pero se buscan opciones para mejorar la salud del niño."
  },
  {
      "id": 560,
      "pregunta": "En la comunidad, se identifican a niños <1 año sin vacunas, sin CRED y sin tamizaje de anemia. Se les brinda orientación y consejería a las madres de la importancia de cumplir con el calendario de atención integral de salud de los menores, quienes responden que no tienen tiempo para llevarlos al centro de salud. ¿Qué estrategias se deben realizar para sensibilizar y promover el cuidado integral de salud de los infantes?",
      "opciones": {
          "A": "Comunicar a las autoridades por exposición al peligro de los menores",
          "B": "Organizar un plan de visitas por el equipo multidisciplinario",
          "C": "Hacer de conocimiento a la fiscalía de la familia",
          "D": "Captar y capacitar a líderes comunales para las visitas continuas"
      },
      "respuesta": "D",
      "tema": "Salud Comunitaria - Participación social y comunitaria",
      "origen": "examen",
      "explicacion": "La estrategia más efectiva es captar y capacitar a líderes comunales para realizar visitas continuas. Los líderes comunales son el nexo entre el establecimiento y la comunidad, pueden sensibilizar a las madres en su propio entorno y facilitar el acceso a los servicios de salud."
  },
  {
      "id": 561,
      "pregunta": "En un establecimiento de primer nivel de atención detectamos un caso de tamizaje positivo de TBC pero el paciente tiene el diagnóstico de problemas de salud mental, ¿dónde se debe derivar?",
      "opciones": {
          "A": "Hospital psiquiátrico",
          "B": "Centro de salud mental y comunitaria",
          "C": "Considerar como un paciente altamente de riesgo",
          "D": "Establecimiento de salud de más complejidad"
      },
      "respuesta": "B",
      "tema": "Salud Comunitaria - Salud mental comunitaria",
      "origen": "examen",
      "explicacion": "Un paciente con TBC y problemas de salud mental debe derivarse al Centro de Salud Mental Comunitaria (CSMC). El CSMC ofrece atención ambulatoria especializada en salud mental con enfoque comunitario, permitiendo el manejo integral del paciente sin necesidad de hospitalización psiquiátrica."
  },
  {
      "id": 562,
      "pregunta": "¿Cuál es la función esencial que ha sido identificada como crítica para la práctica de la salud pública relacionada a la colaboración activa del personal de los servicios de salud en el desarrollo de programas educativos en la comunidad?",
      "opciones": {
          "A": "Participación social",
          "B": "Promoción de la salud",
          "C": "Regulación y fiscalización",
          "D": "Promoción del acceso equitativo"
      },
      "respuesta": "B",
      "tema": "Salud Pública - Promoción de la salud",
      "origen": "examen",
      "explicacion": "La promoción de la salud es la función esencial relacionada con la colaboración activa del personal en programas educativos comunitarios. Incluye educación sanitaria, comunicación social y empoderamiento de la comunidad para adoptar estilos de vida saludables."
  },
  {
      "id": 563,
      "pregunta": "La búsqueda intencionada y sistemática de casos de dislipidemia y obesidad infantil en las historias clínicas y archivos estadísticos del centro de salud. ¿A qué tipo de vigilancia corresponde?",
      "opciones": {
          "A": "Activa",
          "B": "Centinela",
          "C": "Pasiva",
          "D": "Retrospectiva"
      },
      "respuesta": "C",
      "tema": "Salud Pública - Vigilancia epidemiológica",
      "origen": "examen",
      "explicacion": "La búsqueda de casos en historias clínicas y archivos estadísticos ya existentes corresponde a vigilancia pasiva. La vigilancia pasiva utiliza datos que ya fueron recolectados rutinariamente en los servicios de salud, a diferencia de la activa que sale a buscar casos en la comunidad."
  },
  {
      "id": 564,
      "pregunta": "La tendencia del crecimiento y peso de una niña que acude a su control de CRED no se encuentran paralelos al patrón de referencia, esto se ha visualizado con respecto a su control anterior. En esta situación. ¿Cómo es su crecimiento?",
      "opciones": {
          "A": "Inadecuado",
          "B": "Adecuado",
          "C": "Logrado",
          "D": "Esperado"
      },
      "respuesta": "A",
      "tema": "Cuidado Integral - Paquete del niño",
      "origen": "examen",
      "explicacion": "Cuando la tendencia de crecimiento y peso no es paralela al patrón de referencia, el crecimiento se clasifica como inadecuado. El crecimiento adecuado se caracteriza por una curva paralela al patrón de referencia entre controles consecutivos."
  },
  {
      "id": 565,
      "pregunta": "Adolescente de iniciales J.P.C. de 14 años, tiene autismo moderado, hace 3 años dejó la medicación, en los últimos meses tiene conducta agresiva con la comunidad (vecinos y colegio), mamá refiere \"no es colérico en casa, pero tiene actitud negativista y aptitud apática, rechaza a la gente\" ¿Cuál es la etiqueta diagnóstica NANDA priorizada para iniciar la intervención primaria de vida adolescente?",
      "opciones": {
          "A": "Deterioro de la regulación del estado de ánimo",
          "B": "Interacción social deteriorada",
          "C": "Gestión ineficaz de la salud comunitaria",
          "D": "Conectividad social deteriorada"
      },
      "respuesta": "B",
      "tema": "Cuidado Integral - Proceso de atención de enfermería",
      "origen": "examen",
      "explicacion": "La etiqueta diagnóstica NANDA priorizada es interacción social deteriorada. El adolescente presenta conducta agresiva con la comunidad, actitud negativista y rechazo a las personas, lo que evidencia un deterioro en su capacidad de interactuar socialmente de manera efectiva."
  },
  {
      "id": 566,
      "pregunta": "En una comunidad amazónica se registra un brote de malaria por Plasmodium falciparum, donde dos niños fallecieron de un total de 50 pacientes (4%) confirmados con gota gruesa y PCR. ¿Cuál es la medida epidemiológica de frecuencia referida?",
      "opciones": {
          "A": "Tasa de ataque",
          "B": "Tasa de letalidad",
          "C": "Incidencia acumulada",
          "D": "Tasa de mortalidad general"
      },
      "respuesta": "B",
      "tema": "Salud Pública - Epidemiología",
      "origen": "examen",
      "explicacion": "La tasa de letalidad mide la proporción de personas que mueren entre los enfermos (2 fallecidos / 50 enfermos = 4%). Se diferencia de la tasa de mortalidad (muertes / población total) y la tasa de ataque (enfermos / población expuesta)."
  },
  {
      "id": 567,
      "pregunta": "Se encuentra atendiendo el serumista profesional de salud no médico en un establecimiento de salud nivel I-1. ¿Cuál es la atención de salud de urgencia prioritaria que debe referir?",
      "opciones": {
          "A": "Parasitosis intestinal",
          "B": "Hemorragia leve",
          "C": "Asma no complicada",
          "D": "Síndrome febril"
      },
      "respuesta": "D",
      "tema": "Gestión - Referencia y contrarreferencia",
      "origen": "examen",
      "explicacion": "El síndrome febril es la urgencia prioritaria que debe referir un profesional no médico en un I-1, ya que puede ser manifestación de enfermedades graves (malaria, dengue, fiebre amarilla) que requieren evaluación médica y exámenes de laboratorio no disponibles en un I-1."
  },
  {
      "id": 568,
      "pregunta": "Juana y Gregorio acuden al centro de salud para recibir orientación por personal capacitado en ITS, al finalizar la sesión, les proveen preservativos masculinos y condones femeninos en un número de ... respectivamente.",
      "opciones": {
          "A": "20 y 30",
          "B": "20 y 10",
          "C": "60 y 20",
          "D": "30 y 10"
      },
      "respuesta": "B",
      "tema": "Cuidado Integral - Salud sexual y reproductiva",
      "origen": "examen",
      "explicacion": "Según la norma, se proveen 20 preservativos masculinos y 10 condones femeninos por pareja en cada sesión de orientación en ITS. Esta cantidad cubre aproximadamente un mes de uso regular para la prevención de ITS."
  },
  {
      "id": 569,
      "pregunta": "Es una estrategia de intervención que consiste en la indicación y la entrega de los micronutrientes o hierro (en forma de sulfato ferroso o complejo polimaltosado férrico) con la finalidad de prevenir la anemia por deficiencia de hierro, ¿quién es el profesional que prescribe?",
      "opciones": {
          "A": "El profesional de salud médico",
          "B": "El profesional de salud en general",
          "C": "El profesional de salud nutricionista",
          "D": "El profesional de salud que realiza el control de la niña o niño"
      },
      "respuesta": "D",
      "tema": "Cuidado Integral - Prevención y control de anemia",
      "origen": "examen",
      "explicacion": "El profesional de salud que realiza el control de la niña o niño (CRED) es quien prescribe la suplementación preventiva con hierro. Puede ser médico, enfermera u obstetra que realiza el control de crecimiento y desarrollo, según la norma técnica de prevención de anemia."
  },
  {
      "id": 570,
      "pregunta": "El jefe del puesto de salud acudió a la reunión convocada por el municipio para empadronamiento y evaluación sanitaria de los drogadictos que pernoctan a las afueras de la ciudad y que han ido en aumento. Este hábito negativo para la salud, está dentro del grupo de determinantes:",
      "opciones": {
          "A": "Biológicos",
          "B": "Ambientales",
          "C": "Asistenciales",
          "D": "Genéticos"
      },
      "respuesta": "B",
      "tema": "Salud Comunitaria - Determinantes sociales",
      "origen": "examen",
      "explicacion": "La drogadicción como hábito negativo para la salud está dentro del grupo de determinantes ambientales. Los determinantes ambientales incluyen el entorno físico y social donde viven las personas, incluyendo las condiciones que favorecen conductas de riesgo como el consumo de drogas."
  },
  {
      "id": 571,
      "pregunta": "Cerca al centro de salud de primer nivel, existe una tienda de abarrotes que vende medicamentos, a la que acuden los pacientes. Las fechas de expiración de dichos medicamentos están dentro del rango apropiado y no se observa indicios de ser de dudosa procedencia, según comenta un poblador. Según la \"Política Nacional de Medicamentos\" se debe:",
      "opciones": {
          "A": "Verificar periódicamente las fechas de vencimiento",
          "B": "Velar por precios asequibles de medicamentos",
          "C": "Formalizar dicho comercio",
          "D": "Erradicar el comercio informal"
      },
      "respuesta": "D",
      "tema": "Gestión - Uso racional de medicamentos",
      "origen": "examen",
      "explicacion": "Según la Política Nacional de Medicamentos, se debe erradicar el comercio informal de medicamentos. La venta de medicamentos en tiendas de abarrotes es ilegal y pone en riesgo la salud de la población, independientemente de que los productos parezcan estar en buen estado."
  },
  {
      "id": 572,
      "pregunta": "El enfoque intercultural implica que el estado valore e incorpore las diferentes visiones de grupos étnico culturales para la generación de los servicios con pertinencia cultural, promoviendo el reconocimiento de la ciudadanía intercultural basada en el diálogo y la atención diferenciada. Estos enfoques debería ser diferenciada de manera especial en los:",
      "opciones": {
          "A": "Pueblos latinos y europeos",
          "B": "Pueblos indígenas y población afroperuana",
          "C": "Población en general",
          "D": "Pueblos aymaras e indígenas"
      },
      "respuesta": "B",
      "tema": "Ética - Interculturalidad",
      "origen": "examen",
      "explicacion": "El enfoque intercultural debe aplicarse de manera especial en los pueblos indígenas y la población afroperuana. Estos grupos históricamente han enfrentado barreras culturales y lingüísticas para acceder a servicios de salud, requiriendo atención diferenciada con pertinencia cultural."
  },
  {
      "id": 573,
      "pregunta": "Ud. desea definir las líneas de mejora continua de su centro de salud para lo cual es necesario conocer sus fortalezas. ¿Qué pregunta debe realizar?",
      "opciones": {
          "A": "¿Qué se está haciendo bien?",
          "B": "¿Qué facilidades se presentan?",
          "C": "¿Qué nos falta para mejorar?",
          "D": "¿Qué riesgos externos existen?"
      },
      "respuesta": "A",
      "tema": "Gestión - Planeamiento estratégico",
      "origen": "examen",
      "explicacion": "Para identificar fortalezas se debe preguntar '¿Qué se está haciendo bien?'. Las fortalezas son aspectos positivos internos. '¿Qué facilidades se presentan?' identifica oportunidades (externas), '¿Qué nos falta?' identifica debilidades y '¿Qué riesgos externos?' identifica amenazas."
  },
  {
      "id": 574,
      "pregunta": "El tabaco es un factor de riesgo para cáncer pulmonar y EPOC, una intervención efectiva para disminuir la exposición es la implementación de medidas correctivas que favorezcan espacios libres de humo, siendo una función de salud...",
      "opciones": {
          "A": "individual.",
          "B": "familiar.",
          "C": "pública.",
          "D": "participativa."
      },
      "respuesta": "C",
      "tema": "Salud Pública - Conceptos básicos",
      "origen": "examen",
      "explicacion": "La implementación de medidas para espacios libres de humo es una función de salud pública. Las políticas de control del tabaco y protección de la población frente al humo de segunda mano son intervenciones poblacionales que corresponden al ámbito de la salud pública."
  },
  {
      "id": 575,
      "pregunta": "La Enfermera según su norma técnica tiene visita de seguimiento de casos inconclusos del plan de atención de salud para adolescentes, determina la visita en al menos ... visitas para conocer el entorno personal, social y familiar saludable.",
      "opciones": {
          "A": "3",
          "B": "2",
          "C": "5",
          "D": "4"
      },
      "respuesta": "B",
      "tema": "Cuidado Integral - Paquete del adolescente",
      "origen": "examen",
      "explicacion": "La enfermera debe realizar al menos 2 visitas de seguimiento para casos inconclusos del plan de atención de salud del adolescente. Estas visitas permiten conocer el entorno personal, social y familiar, y completar las atenciones pendientes del plan integral."
  },
  {
      "id": 576,
      "pregunta": "NT de prevención y control de anemia del niño(a) menor de 36 meses en diagnóstico situacional de Hb baja, habiendo tenido un diagnóstico de enfermería \"dinámica ineficaz de la alimentación infantil relacionado a estreñimiento\", en la efectividad del suplemento de hierro, la recomendación es:",
      "opciones": {
          "A": "Cambie el horario de las gotas y fraccione la dosis indicada",
          "B": "Dele lactancia materna seguida y fraccione la dosis en 2 tomas",
          "C": "No se preocupe, las gotas cambian el color de las deposiciones",
          "D": "Mezcle el suplemento con un poco de agua o jugo de frutas"
      },
      "respuesta": "B",
      "tema": "Cuidado Integral - Prevención y control de anemia",
      "origen": "examen",
      "explicacion": "Ante estreñimiento por suplemento de hierro, la recomendación es dar lactancia materna seguida y fraccionar la dosis en 2 tomas. La lactancia materna ayuda a mejorar el tránsito intestinal y fraccionar la dosis reduce los efectos gastrointestinales del hierro."
  },
  {
      "id": 577,
      "pregunta": "En la comunidad de un PS I-2 se identifica que existe un número elevado de adolescentes entre 13 y 15 años que se encuentran laborando pasteando ganado y pernoctando en el campo y que no han sido matriculados en la escuela. ¿A qué determinantes corresponde esta situación?",
      "opciones": {
          "A": "Estilo de vida",
          "B": "Intermedios",
          "C": "Ambientales",
          "D": "Estructurales"
      },
      "respuesta": "B",
      "tema": "Salud Comunitaria - Determinantes sociales",
      "origen": "examen",
      "explicacion": "El trabajo infantil y la deserción escolar corresponden a determinantes intermedios de la salud. Los determinantes intermedios incluyen las condiciones materiales de vida, circunstancias psicosociales y conductas que son consecuencia de la posición socioeconómica (determinante estructural)."
  },
  {
      "id": 578,
      "pregunta": "Los migrantes de la selva que viven en una comunidad de Lima, mantienen sus estilos de vida donde prevalece el trabajo informal, la deserción escolar y el ausentismo en servicios de salud, por lo que se debe realizar …",
      "opciones": {
          "A": "brindar solamente acceso a los diversos programas sociales.",
          "B": "censo a fin de conocer las personas que se encuentran en riesgo de salud.",
          "C": "gestionar políticas públicas que brinden recursos en la comunidad.",
          "D": "visitas domiciliarias a fin de integrarlos a los servicios de salud."
      },
      "respuesta": "C",
      "tema": "Salud Comunitaria - Determinantes sociales",
      "origen": "examen",
      "explicacion": "Ante migrantes con trabajo informal, deserción escolar y ausentismo en salud, se deben gestionar políticas públicas que brinden recursos en la comunidad. Las políticas públicas abordan los determinantes estructurales que generan estas condiciones de vulnerabilidad."
  },
  {
      "id": 579,
      "pregunta": "Para prevenir las muertes neonatales institucionales, la población de las zonas rurales por costumbre y cultura prefieren los partos intradomiciliarios. ¿Qué acciones se deben de tomar en cuenta para cumplir con los objetivos del sector al impulsar el parto?",
      "opciones": {
          "A": "Prometer la entrega de canastas de víveres",
          "B": "Educación vivencial de participación comunitaria",
          "C": "Informar a las gestantes que la atención es gratuita",
          "D": "Atender los partos intradomiciliarios"
      },
      "respuesta": "B",
      "tema": "Salud Comunitaria - Participación social y comunitaria",
      "origen": "examen",
      "explicacion": "La educación vivencial de participación comunitaria es la acción más efectiva para impulsar el parto institucional en zonas rurales. Involucra a la comunidad en experiencias educativas prácticas que demuestran los beneficios del parto institucional respetando su cultura."
  },
  {
      "id": 580,
      "pregunta": "En el PS I-2 de la región central se ha detectado un caso de fiebre amarilla selvática, en este caso la notificación es:",
      "opciones": {
          "A": "Semanal",
          "B": "Mensual",
          "C": "Inmediata",
          "D": "Quincenal"
      },
      "respuesta": "C",
      "tema": "Salud Pública - Vigilancia epidemiológica",
      "origen": "examen",
      "explicacion": "La fiebre amarilla selvática es una enfermedad de notificación inmediata. Al ser una enfermedad con alto potencial epidémico y letalidad, requiere notificación dentro de las primeras 24 horas para activar las medidas de control y prevención oportunamente."
  },
  {
      "id": 581,
      "pregunta": "En el Cs San Cosme una de las acciones para diagnóstico de la Depresión es realizar tamizaje a personas mayores de 18 años a lo cual se realiza prioritariamente en los servicios de …",
      "opciones": {
          "A": "crecimiento y desarrollo.",
          "B": "odontología.",
          "C": "consulta externa.",
          "D": "nutrición."
      },
      "respuesta": "C",
      "tema": "Cuidado Integral - Salud mental",
      "origen": "examen",
      "explicacion": "El tamizaje de depresión en personas mayores de 18 años se realiza prioritariamente en consulta externa. Es el servicio donde acuden la mayoría de adultos por morbilidad, siendo una oportunidad para detectar precozmente problemas de salud mental."
  },
  {
      "id": 582,
      "pregunta": "Se desea ordenar el servicio de Admisión en un establecimiento de salud. ¿Hasta cuántos años de la última consulta se pueden tener las historias clínicas en el archivo activo?",
      "opciones": {
          "A": "2",
          "B": "3",
          "C": "10",
          "D": "5"
      },
      "respuesta": "D",
      "tema": "Gestión - Historia clínica",
      "origen": "examen",
      "explicacion": "Las historias clínicas se mantienen en el archivo activo hasta 5 años desde la última consulta. Después de este periodo sin ser requeridas, pasan al archivo pasivo. Esto permite mantener organizado el servicio de admisión con las historias de uso frecuente."
  },
  {
      "id": 583,
      "pregunta": "Usted acaba de ganar su plaza SERUMS, y en su primer día de trabajo, su jefatura le indica que se encuentran en el proceso de búsqueda de información a fin de elaborar el documento que oriente una gestión eficiente en salud acorde con los procesos de planificación. ¿Cuál es el documento?",
      "opciones": {
          "A": "Análisis de Situación de Salud",
          "B": "Análisis Global del Estado de la Salud",
          "C": "Análisis Global de los Determinantes de la Salud",
          "D": "Análisis de la Vulnerabilidad territorial"
      },
      "respuesta": "A",
      "tema": "Salud Pública - ASIS",
      "origen": "examen",
      "explicacion": "El Análisis de Situación de Salud (ASIS) es el documento que orienta una gestión eficiente en salud acorde con los procesos de planificación. Proporciona información sobre los problemas de salud, determinantes y recursos disponibles para la toma de decisiones."
  },
  {
      "id": 584,
      "pregunta": "En una comunidad de la selva del Perú, sólo los casos ... de mordeduras por serpientes venenosas y no venenosas se reportan ...",
      "opciones": {
          "A": "Probable y confirmado / inmediatamente.",
          "B": "Probable y confirmado / semanalmente.",
          "C": "Sospechoso, probable y confirmado / inmediatamente.",
          "D": "Confirmado / semanalmente."
      },
      "respuesta": "B",
      "tema": "Salud Pública - Vigilancia epidemiológica",
      "origen": "examen",
      "explicacion": "Los casos probables y confirmados de mordeduras por serpientes se reportan semanalmente. Las mordeduras de serpientes son eventos de vigilancia epidemiológica de notificación semanal, a diferencia de enfermedades como fiebre amarilla o peste que son de notificación inmediata."
  },
  {
      "id": 585,
      "pregunta": "Personal de enfermería de I-2, se dispone a la preparación de una vacuna con el uso de polvo liofilizado que requiere constitución con cloruro de sodio al 0.9%. ¿Qué característica de la vacuna aplica?",
      "opciones": {
          "A": "Composición",
          "B": "Presentación",
          "C": "Conservación",
          "D": "Dosis"
      },
      "respuesta": "A",
      "tema": "Cuidado Integral - Vacunación y ESAVI",
      "origen": "examen",
      "explicacion": "El uso de polvo liofilizado que requiere reconstitución con cloruro de sodio corresponde a la característica de composición de la vacuna. La composición describe los componentes de la vacuna incluyendo el antígeno, adyuvantes, conservantes y diluyentes necesarios."
  },
  {
      "id": 586,
      "pregunta": "El conjunto de procedimientos asistenciales a través del cual se asegura la continuidad de la atención de las necesidades de salud de los usuarios, transfiriéndolo del establecimiento de menor a mayor capacidad resolutiva corresponde a:",
      "opciones": {
          "A": "Atención primaria",
          "B": "Contrarreferencia",
          "C": "Referencia",
          "D": "Atención compartida"
      },
      "respuesta": "C",
      "tema": "Gestión - Referencia y contrarreferencia",
      "origen": "examen",
      "explicacion": "La referencia es el conjunto de procedimientos asistenciales que transfiere al usuario de un establecimiento de menor a mayor capacidad resolutiva para asegurar la continuidad de la atención. La contrarreferencia es el proceso inverso, de mayor a menor complejidad."
  },
  {
      "id": 587,
      "pregunta": "En una comunidad con escenario de intervención III para Aedes aegypti se realizaron actividades de vigilancia mediante ovitrampas, obteniendo un índice IPO/IDH de 70. ¿Qué medidas se debe adoptar, considerando la estratificación del riesgo entomológico?",
      "opciones": {
          "A": "Identificar criaderos para eliminar",
          "B": "Aplicar larvicidas y adulticidas",
          "C": "Realizar inspecciones adicionales",
          "D": "Seguir con el monitoreo"
      },
      "respuesta": "B",
      "tema": "Salud Comunitaria - Control de vectores",
      "origen": "examen",
      "explicacion": "Con un índice IPO/IDH de 70 en escenario III, se deben aplicar larvicidas y adulticidas. Un índice alto indica alta infestación vectorial que requiere intervención química intensiva para reducir rápidamente la población de Aedes aegypti y el riesgo de transmisión."
  },
  {
      "id": 588,
      "pregunta": "Una persona después de haberse vacunado contra el dengue. ¿Cuánto tiempo debe permanecer en el área de reposo?",
      "opciones": {
          "A": "Una hora",
          "B": "30 minutos",
          "C": "45 minutos",
          "D": "2 horas"
      },
      "respuesta": "B",
      "tema": "Cuidado Integral - Vacunación y ESAVI",
      "origen": "examen",
      "explicacion": "Después de vacunarse contra el dengue, la persona debe permanecer 30 minutos en el área de reposo. Este tiempo permite observar posibles reacciones adversas inmediatas, especialmente reacciones anafilácticas que suelen presentarse en los primeros 30 minutos post-vacunación."
  },
  {
      "id": 589,
      "pregunta": "Se apersona una mujer de 25 años, al establecimiento de salud, con 20 semanas de gestación, sin controles previos, de acuerdo a protocolo le realizan los exámenes de VIH, con resultados positivo. ¿Qué acciones se realizan desde el centro de salud nivel I-3?",
      "opciones": {
          "A": "Control de gestación y psicoprofilaxis",
          "B": "Derivación a centro hospitalario para recibir retrovirales",
          "C": "Ubicación de familiares para soporte socio familiar",
          "D": "Gestionar apoyo con programa social del MIDIS"
      },
      "respuesta": "B",
      "tema": "Cuidado Integral - VIH",
      "origen": "examen",
      "explicacion": "Una gestante con VIH positivo en un I-3 debe ser derivada a un centro hospitalario para recibir tratamiento antirretroviral. La terapia antirretroviral en gestantes es urgente para prevenir la transmisión vertical al feto y requiere manejo especializado."
  },
  {
      "id": 590,
      "pregunta": "En un establecimiento de salud I-4, ingresa paciente con parto inminente, no controlada. ¿Cuál de las siguientes pruebas de tamizaje rápido se utiliza para detectar anticuerpos contra VIH y treponema pallidum o anticuerpos treponémicos totales?",
      "opciones": {
          "A": "PRT (pruebas rápidas triples)",
          "B": "PRD (pruebas rápidas duales)",
          "C": "FTA-Abs",
          "D": "PM (pruebas moleculares)"
      },
      "respuesta": "B",
      "tema": "Cuidado Integral - ITS",
      "origen": "examen",
      "explicacion": "Las pruebas rápidas duales (PRD) detectan simultáneamente anticuerpos contra VIH y Treponema pallidum en una sola muestra de sangre. Son ideales para gestantes no controladas con parto inminente porque permiten un tamizaje rápido de ambas infecciones."
  },
  {
      "id": 591,
      "pregunta": "En un establecimiento de salud I-4 el personal de salud está organizado para identificar problemas de salud, facilitando el control y resolución de los mismos en su comunidad. ¿Qué estrategia han implementado?",
      "opciones": {
          "A": "Gestión por procesos",
          "B": "Presupuesto por resultados",
          "C": "Vigilancia epidemiológica",
          "D": "Oferta de servicios"
      },
      "respuesta": "C",
      "tema": "Salud Pública - Vigilancia epidemiológica",
      "origen": "examen",
      "explicacion": "La vigilancia epidemiológica es la estrategia que permite al personal de salud identificar problemas de salud, facilitar su control y resolución en la comunidad. Implica la recolección, análisis e interpretación sistemática de datos para la toma de decisiones."
  },
  {
      "id": 592,
      "pregunta": "En el EESS Conde de la Vega acude un varón de 72 años al cual la enfermera determina su condición clínica, su estado físico, emocional y cognitivo, así como su situación socioeconómica. ¿Qué acciones viene aplicando dentro del cuidado integral de salud?",
      "opciones": {
          "A": "Valoración clínica del adulto mayor",
          "B": "Mini valoración nutricional",
          "C": "Consejería integral de salud",
          "D": "Tamizaje de salud"
      },
      "respuesta": "A",
      "tema": "Cuidado Integral - Paquete del adulto mayor",
      "origen": "examen",
      "explicacion": "Determinar la condición clínica, estado físico, emocional, cognitivo y situación socioeconómica del adulto mayor corresponde a la Valoración Clínica del Adulto Mayor (VACAM). Es una evaluación integral que permite clasificar al adulto mayor según su nivel de funcionalidad."
  },
  {
      "id": 593,
      "pregunta": "Paciente migrante de la zona alto andina llega al establecimiento de salud I-3, solicitando una referencia al hospital, por incapacidad motora. El SIS de la paciente es de provincia. ¿Qué acciones se debe realizar para solucionar el requerimiento de la paciente?",
      "opciones": {
          "A": "Que regrese a su lugar de origen para su referencia",
          "B": "Hacer su referencia para una atención inmediata",
          "C": "Negarle la atención por no tener HC en el establecimiento",
          "D": "Coordinar y gestionar con los responsables del SIS central"
      },
      "respuesta": "D",
      "tema": "Gestión - Referencia y contrarreferencia",
      "origen": "examen",
      "explicacion": "Se debe coordinar y gestionar con los responsables del SIS central para solucionar la cobertura de la paciente migrante. El SIS tiene mecanismos de portabilidad que permiten atender a asegurados de otras regiones, previa coordinación con la sede central."
  },
  {
      "id": 594,
      "pregunta": "El establecimiento I-3 de una comunidad se encuentra celebrando su aniversario, por lo cual limitó el número de atenciones a los usuarios de los servicios de salud, generando malestar en ellos. En relación a la Atención Primaria en Salud ¿Qué atributo se está afectando?",
      "opciones": {
          "A": "Integralidad",
          "B": "Accesibilidad",
          "C": "Coordinación",
          "D": "Longitudinalidad"
      },
      "respuesta": "B",
      "tema": "Salud Pública - Conceptos básicos",
      "origen": "examen",
      "explicacion": "Al limitar el número de atenciones por celebración de aniversario se afecta la accesibilidad. La accesibilidad es el atributo de la APS que garantiza que los servicios estén disponibles y sean utilizables por la población cuando los necesite, sin barreras organizativas."
  },
  {
      "id": 595,
      "pregunta": "Neonato de 8 horas de parto domiciliario, en zona rural. Deben recibir BCG y HvB. ¿Cuál es el tiempo ideal para recibirlas?",
      "opciones": {
          "A": "Dentro de las 24 horas",
          "B": "Hasta un año",
          "C": "Dentro de una semana",
          "D": "Hasta un mes"
      },
      "respuesta": "A",
      "tema": "Cuidado Integral - Vacunación y ESAVI",
      "origen": "examen",
      "explicacion": "Las vacunas BCG y HvB deben administrarse dentro de las primeras 24 horas de nacido. La BCG protege contra formas graves de TB infantil y la HvB previene la transmisión vertical de hepatitis B. La administración temprana maximiza la protección del recién nacido."
  },
  {
      "id": 596,
      "pregunta": "En un centro de salud I-4, el nuevo médico jefe ha reestructurado el rol central de esta institución, la población objetivo asignada y los atributos de la entidad. Esta construcción de elementos se denomina:",
      "opciones": {
          "A": "Indicador",
          "B": "Misión",
          "C": "Objetivo",
          "D": "Visión"
      },
      "respuesta": "B",
      "tema": "Gestión - Planeamiento estratégico",
      "origen": "examen",
      "explicacion": "La construcción del rol central, población objetivo y atributos de la entidad corresponde a la misión. La misión define la razón de ser de la institución, a quién sirve y cómo lo hace. La visión es la imagen futura deseada y los objetivos son las metas a alcanzar."
  },
  {
      "id": 597,
      "pregunta": "Recién nacida de parto eutócico con bajo peso (2kg) debe recibir sus vacunas de acuerdo a calendario de vacunación para su edad. ¿Qué vacunas le corresponden recibir antes del alta?",
      "opciones": {
          "A": "Vacuna combinada hexavalente",
          "B": "Vacuna antipolio inactivada",
          "C": "Vacuna combinada pentavalente",
          "D": "BCG (antituberculosis) y HvB (antihepatitis)"
      },
      "respuesta": "D",
      "tema": "Cuidado Integral - Vacunación y ESAVI",
      "origen": "examen",
      "explicacion": "La recién nacida con bajo peso (2kg) debe recibir BCG y HvB antes del alta. Estas son las vacunas del recién nacido según el calendario de vacunación. La BCG se aplica con peso mínimo de 2kg y la HvB dentro de las primeras 24 horas de vida."
  },
  {
      "id": 598,
      "pregunta": "Durante la atención integral de la gestante, los controles prenatales buscan detectar riesgos para eliminarlos o minimizarlos. ¿Qué tipo de prevención es?",
      "opciones": {
          "A": "Secundaria",
          "B": "Cuaternaria",
          "C": "Primaria",
          "D": "Terciaria"
      },
      "respuesta": "C",
      "tema": "Salud Pública - Niveles de prevención",
      "origen": "examen",
      "explicacion": "Los controles prenatales que buscan detectar riesgos para eliminarlos o minimizarlos corresponden a prevención primaria. La prevención primaria actúa antes de que aparezca la enfermedad, identificando y controlando factores de riesgo para evitar complicaciones."
  },
  {
      "id": 599,
      "pregunta": "Para realizar un trabajo de investigación y obtener información de las exposiciones anteriores y actuales. ¿Qué tipo de recolección se debe realizar?",
      "opciones": {
          "A": "Informante",
          "B": "Instrumento",
          "C": "Observación",
          "D": "Entrevista"
      },
      "respuesta": "D",
      "tema": "Investigación - Instrumentos de recolección",
      "origen": "examen",
      "explicacion": "La entrevista es el tipo de recolección adecuado para obtener información sobre exposiciones anteriores y actuales. Permite indagar directamente con el sujeto sobre sus antecedentes, hábitos y exposiciones pasadas y presentes de manera detallada."
  },
  {
      "id": 600,
      "pregunta": "Un estudio de investigación realizado en una población aledaña a su centro de salud, reporta que los niños cuya familia es monoparental tiene el doble de riesgo de presentar anemia (RR=2.0), respecto a aquellos con familia biparental. ¿Cuál es el tipo de medida epidemiológica a la que se hace referencia?",
      "opciones": {
          "A": "Frecuencia",
          "B": "Asociación",
          "C": "Mortalidad",
          "D": "Impacto"
      },
      "respuesta": "B",
      "tema": "Salud Pública - Epidemiología",
      "origen": "examen",
      "explicacion": "El Riesgo Relativo (RR=2.0) es una medida de asociación epidemiológica. Las medidas de asociación comparan el riesgo de enfermar entre expuestos y no expuestos. Un RR de 2.0 indica que los niños de familias monoparentales tienen el doble de riesgo de anemia que los de familias biparentales."
  }
];
