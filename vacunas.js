const preguntasVacunas = [
  {
    "id": 1001,
    "pregunta": "La vacuna BCG se administra al recién nacido dentro de las primeras 24 horas de vida. ¿Contra qué formas de tuberculosis protege principalmente?",
    "opciones": {
      "A": "Tuberculosis pulmonar del adulto",
      "B": "Formas graves: meningitis tuberculosa y TB miliar en niños",
      "C": "Tuberculosis multidrogoresistente",
      "D": "Tuberculosis extrapulmonar en adultos"
    },
    "respuesta": "B",
    "tema": "Vacunas - BCG",
    "origen": "vacunas",
    "explicacion": "La BCG no previene la infección primaria ni la reactivación pulmonar en adultos, pero tiene alta eficacia (70-80%) para prevenir las formas graves diseminadas en niños pequeños como la meningitis tuberculosa y la TB miliar, que son las de mayor mortalidad en menores de 5 años."
  },
  {
    "id": 1002,
    "pregunta": "¿A qué edad se administra la primera dosis de la vacuna contra la Hepatitis B (HvB) en el recién nacido y cuál es el plazo máximo recomendado?",
    "opciones": {
      "A": "Al nacer, dentro de las primeras 12 horas de vida",
      "B": "Al nacer, dentro de las primeras 24 horas de vida",
      "C": "A las 48 horas de nacido",
      "D": "A los 7 días de nacido"
    },
    "respuesta": "B",
    "tema": "Vacunas - Hepatitis B",
    "origen": "vacunas",
    "explicacion": "La dosis de HvB al recién nacido debe aplicarse dentro de las primeras 24 horas de vida para prevenir la transmisión vertical (madre-hijo). La vacunación temprana es crucial porque si el RN se infecta en el periodo perinatal, tiene un 90% de probabilidad de desarrollar hepatitis B crónica."
  },
  {
    "id": 1003,
    "pregunta": "La vacuna Pentavalente protege contra cinco enfermedades. ¿Cuáles son y a qué edades se administran las tres dosis en el esquema regular peruano?",
    "opciones": {
      "A": "Difteria, tétanos, tos ferina, hepatitis B y Hib; a los 2, 4 y 6 meses",
      "B": "Difteria, tétanos, tos ferina, polio y Hib; a los 2, 4 y 6 meses",
      "C": "Difteria, tétanos, tos ferina, hepatitis A y Hib; a los 3, 5 y 7 meses",
      "D": "Difteria, tétanos, sarampión, hepatitis B y Hib; a los 2, 4 y 6 meses"
    },
    "respuesta": "A",
    "tema": "Vacunas - Pentavalente",
    "origen": "vacunas",
    "explicacion": "La Pentavalente (DPT-HvB-Hib) combina protección contra difteria, tétanos, pertussis (tos ferina), hepatitis B y Haemophilus influenzae tipo b. Se administra a los 2, 4 y 6 meses porque a esa edad disminuyen los anticuerpos maternos transferidos y el lactante necesita generar su propia inmunidad activa. Se requieren 3 dosis para alcanzar niveles protectores adecuados."
  },
  {
    "id": 1004,
    "pregunta": "La vacuna contra el Rotavirus se administra por vía oral a los 2 y 4 meses de edad. ¿Cuál es la edad máxima para aplicar la primera dosis?",
    "opciones": {
      "A": "Hasta los 3 meses con 29 días",
      "B": "Hasta los 5 meses con 29 días",
      "C": "Hasta los 6 meses",
      "D": "No tiene límite de edad"
    },
    "respuesta": "B",
    "tema": "Vacunas - Rotavirus",
    "origen": "vacunas",
    "explicacion": "La primera dosis de Rotavirus puede administrarse hasta los 5 meses con 29 días como máximo. Este límite existe porque el riesgo de intususcepción intestinal (efecto adverso raro pero grave) aumenta si se aplica en edades mayores. La vacuna previene las formas graves de diarrea por rotavirus, principal causa de deshidratación severa en lactantes."
  },
  {
    "id": 1005,
    "pregunta": "La vacuna antipoliomielítica inactivada (IPV) se aplica en el esquema regular peruano. ¿Cuántas dosis se administran y a qué edades?",
    "opciones": {
      "A": "2 dosis: a los 2 y 4 meses",
      "B": "3 dosis: a los 2, 4 y 6 meses",
      "C": "1 dosis: a los 4 meses",
      "D": "3 dosis: a los 4, 6 y 12 meses"
    },
    "respuesta": "B",
    "tema": "Vacunas - Poliomielitis (IPV)",
    "origen": "vacunas",
    "explicacion": "En el esquema peruano actual se administran 3 dosis de IPV (inyectable) a los 2, 4 y 6 meses. Se usa la vacuna inactivada (IPV) en lugar de la oral (OPV) para eliminar el riesgo de polio paralítica asociada a la vacuna. La poliomielitis puede causar parálisis irreversible, por lo que la vacunación completa es fundamental para mantener la erradicación."
  },
  {
    "id": 1006,
    "pregunta": "La vacuna contra la Influenza pediátrica se administra a partir de los 6 meses de edad. ¿Cuántas dosis recibe un niño que se vacuna por primera vez?",
    "opciones": {
      "A": "1 sola dosis",
      "B": "2 dosis con intervalo de 1 mes entre ellas",
      "C": "3 dosis con intervalo de 2 meses",
      "D": "2 dosis con intervalo de 15 días"
    },
    "respuesta": "B",
    "tema": "Vacunas - Influenza",
    "origen": "vacunas",
    "explicacion": "Los niños que se vacunan por primera vez contra la Influenza necesitan 2 dosis separadas por al menos 1 mes (4 semanas). Esto se debe a que su sistema inmunológico no ha tenido contacto previo con el virus y requiere una dosis de sensibilización (priming) y una segunda dosis de refuerzo para generar una respuesta inmune adecuada. En años posteriores solo necesitan 1 dosis anual."
  },
  {
    "id": 1007,
    "pregunta": "La vacuna SPR (Sarampión, Paperas y Rubéola) se administra en el esquema regular peruano. ¿A qué edades se aplican la primera y segunda dosis?",
    "opciones": {
      "A": "A los 6 meses y 12 meses",
      "B": "A los 12 meses y 18 meses",
      "C": "A los 9 meses y 15 meses",
      "D": "A los 12 meses y 4 años"
    },
    "respuesta": "B",
    "tema": "Vacunas - SPR (Triple vírica)",
    "origen": "vacunas",
    "explicacion": "La primera dosis de SPR se aplica a los 12 meses porque antes de esa edad los anticuerpos maternos transferidos por la placenta pueden neutralizar el virus vacunal y reducir la eficacia. La segunda dosis a los 18 meses no es un refuerzo sino una segunda oportunidad para inmunizar al 5-10% de niños que no respondieron a la primera dosis, logrando así coberturas cercanas al 95% necesarias para la inmunidad de rebaño."
  },
  {
    "id": 1008,
    "pregunta": "La vacuna contra la Varicela se incorporó al esquema regular peruano. ¿A qué edad se administra la dosis única?",
    "opciones": {
      "A": "A los 6 meses",
      "B": "A los 12 meses, con la SPR",
      "C": "A los 15 meses",
      "D": "A los 18 meses"
    },
    "respuesta": "C",
    "tema": "Vacunas - Varicela",
    "origen": "vacunas",
    "explicacion": "La vacuna contra la Varicela se administra a los 15 meses de edad como dosis única en el esquema regular. Se aplica a esta edad porque se necesita que el sistema inmune del niño esté lo suficientemente maduro para generar una respuesta adecuada, y se separa de la SPR (12 meses) para evitar interferencia entre vacunas virales vivas. La varicela puede causar complicaciones graves como neumonía, encefalitis y sobreinfecciones bacterianas."
  },
  {
    "id": 1009,
    "pregunta": "La vacuna contra la Fiebre Amarilla (antiamarílica) se administra en zonas endémicas del Perú. ¿A qué edad se aplica y cuántas dosis se requieren para protección de por vida?",
    "opciones": {
      "A": "A los 12 meses, dosis única de por vida",
      "B": "A los 15 meses, con refuerzo cada 10 años",
      "C": "A los 9 meses, con refuerzo a los 5 años",
      "D": "A los 18 meses, dosis única"
    },
    "respuesta": "B",
    "tema": "Vacunas - Fiebre Amarilla",
    "origen": "vacunas",
    "explicacion": "La vacuna antiamarílica se aplica a los 15 meses de edad en el esquema regular peruano. Según la normativa peruana, se administra un refuerzo cada 10 años para personas que viven o viajan a zonas endémicas. La fiebre amarilla es una enfermedad viral hemorrágica transmitida por mosquitos Aedes y Haemagogus, endémica en la selva peruana, con una tasa de letalidad del 20-50% en casos graves."
  },
  {
    "id": 1010,
    "pregunta": "La vacuna contra el Virus del Papiloma Humano (VPH) se administra en el esquema regular peruano para prevenir el cáncer de cuello uterino. ¿A qué población objetivo va dirigida y cuántas dosis se requieren?",
    "opciones": {
      "A": "Niñas de 9 a 13 años, 2 dosis con intervalo de 6 meses",
      "B": "Mujeres de 15 a 25 años, 3 dosis",
      "C": "Niñas de 6 a 8 años, 1 dosis",
      "D": "Adolescentes de 14 a 17 años, 2 dosis con intervalo de 3 meses"
    },
    "respuesta": "A",
    "tema": "Vacunas - VPH",
    "origen": "vacunas",
    "explicacion": "La vacuna contra el VPH se dirige a niñas de 9 a 13 años con esquema de 2 dosis separadas por 6 meses. Se vacuna a esta edad porque la vacuna es más efectiva antes del inicio de la actividad sexual (antes de la exposición al virus). El VPH tipos 16 y 18 causan aproximadamente el 70% de los cánceres de cuello uterino. La vacunación temprana genera una respuesta inmune superior en preadolescentes que en adultas."
  },
  {
    "id": 1011,
    "pregunta": "La cadena de frío es el sistema que garantiza la conservación de las vacunas. ¿Cuál es el rango de temperatura recomendado para la mayoría de las vacunas del esquema regular?",
    "opciones": {
      "A": "De 0°C a +2°C",
      "B": "De +2°C a +8°C",
      "C": "De -15°C a -25°C",
      "D": "De +8°C a +15°C"
    },
    "respuesta": "B",
    "tema": "Vacunas - Cadena de frío",
    "origen": "vacunas",
    "explicacion": "El rango de +2°C a +8°C mantiene la potencia inmunogénica de la mayoría de vacunas. Temperaturas por debajo de 0°C destruyen las vacunas adsorbidas (Pentavalente, DPT, HvB, Td) al romper el adyuvante de aluminio, y temperaturas superiores a +8°C aceleran la degradación de los antígenos, especialmente en vacunas virales vivas como SPR y Varicela."
  },
  {
    "id": 1012,
    "pregunta": "La vacuna antineumocócica conjugada se administra en el esquema regular peruano para prevenir enfermedades invasivas por neumococo. ¿A qué edades se aplican las dosis?",
    "opciones": {
      "A": "A los 2, 4 meses y un refuerzo a los 12 meses",
      "B": "A los 3, 5 y 7 meses",
      "C": "A los 2, 4 y 6 meses sin refuerzo",
      "D": "Una sola dosis a los 12 meses"
    },
    "respuesta": "A",
    "tema": "Vacunas - Neumococo",
    "origen": "vacunas",
    "explicacion": "El esquema 2+1 (dos dosis primarias a los 2 y 4 meses más un refuerzo a los 12 meses) es el recomendado en Perú. El Streptococcus pneumoniae es la principal causa de neumonía bacteriana, meningitis y otitis media en niños menores de 5 años. El refuerzo a los 12 meses es esencial porque los anticuerpos generados por las dosis primarias disminuyen y se necesita una respuesta de memoria inmunológica duradera."
  },
  {
    "id": 1013,
    "pregunta": "Los refuerzos de DPT (Difteria, Pertussis y Tétanos) se administran después de completar las 3 dosis de Pentavalente. ¿A qué edades se aplican estos refuerzos?",
    "opciones": {
      "A": "Al año y a los 2 años",
      "B": "A los 18 meses y 4 años",
      "C": "A los 15 meses y 6 años",
      "D": "A los 12 meses y 5 años"
    },
    "respuesta": "B",
    "tema": "Vacunas - DPT (Refuerzos)",
    "origen": "vacunas",
    "explicacion": "Los refuerzos de DPT se aplican a los 18 meses (1er refuerzo) y a los 4 años (2do refuerzo). Estos refuerzos son necesarios porque la inmunidad contra la tos ferina (pertussis) disminuye con el tiempo. Sin los refuerzos, los niveles de anticuerpos protectores caen significativamente, dejando al niño vulnerable. La tos ferina sigue siendo una causa importante de morbimortalidad en lactantes no vacunados o con esquema incompleto."
  },
  {
    "id": 1014,
    "pregunta": "¿Cuál de las siguientes es una contraindicación ABSOLUTA para la administración de cualquier vacuna?",
    "opciones": {
      "A": "Fiebre leve (menor de 38°C)",
      "B": "Reacción anafiláctica previa a una dosis anterior de la misma vacuna o a alguno de sus componentes",
      "C": "Infección respiratoria aguda leve",
      "D": "Desnutrición crónica"
    },
    "respuesta": "B",
    "tema": "Vacunas - Contraindicaciones",
    "origen": "vacunas",
    "explicacion": "La anafilaxia previa es la única contraindicación absoluta universal para todas las vacunas, ya que una nueva exposición al alérgeno puede desencadenar un shock anafiláctico potencialmente mortal. La fiebre leve, las infecciones leves y la desnutrición NO son contraindicaciones; son falsas contraindicaciones que frecuentemente causan oportunidades perdidas de vacunación."
  },
  {
    "id": 1015,
    "pregunta": "La vacuna contra la Hepatitis A se incorporó al esquema regular peruano. ¿A qué edad se administra y cuántas dosis se requieren?",
    "opciones": {
      "A": "A los 15 meses, dosis única",
      "B": "A los 12 meses, 2 dosis",
      "C": "A los 18 meses, dosis única",
      "D": "A los 6 meses, 2 dosis"
    },
    "respuesta": "A",
    "tema": "Vacunas - Hepatitis A",
    "origen": "vacunas",
    "explicacion": "La vacuna contra Hepatitis A se administra como dosis única a los 15 meses en el esquema peruano. La Hepatitis A se transmite por vía fecal-oral a través de agua y alimentos contaminados, siendo muy prevalente en zonas con deficiente saneamiento básico. A los 15 meses el niño ya tiene un sistema inmune capaz de generar una respuesta protectora duradera con una sola dosis."
  },
  {
    "id": 1016,
    "pregunta": "¿Qué vacunas están CONTRAINDICADAS en gestantes por ser vacunas de virus vivos atenuados?",
    "opciones": {
      "A": "Influenza y Hepatitis B",
      "B": "SPR, Varicela y Fiebre Amarilla",
      "C": "Pentavalente y Neumococo",
      "D": "Tdap y Td"
    },
    "respuesta": "B",
    "tema": "Vacunas - Vacunación en gestantes",
    "origen": "vacunas",
    "explicacion": "Las vacunas de virus vivos atenuados (SPR, Varicela, Fiebre Amarilla, BCG) están contraindicadas en el embarazo porque existe un riesgo teórico de que el virus vacunal atraviese la placenta e infecte al feto, causando malformaciones congénitas o aborto. En cambio, las vacunas inactivadas como Influenza, Tdap y Td son seguras y recomendadas durante la gestación."
  },
  {
    "id": 1017,
    "pregunta": "La vacuna Tdap (Tétanos, Difteria acelular y Pertussis) se recomienda en gestantes. ¿En qué trimestre del embarazo se debe administrar y cuál es su principal objetivo?",
    "opciones": {
      "A": "Primer trimestre, para proteger a la madre",
      "B": "A partir de las 27 semanas de gestación, para transferir anticuerpos al feto y proteger al recién nacido",
      "C": "En cualquier momento del embarazo, solo para prevenir tétanos neonatal",
      "D": "Solo en el puerperio inmediato"
    },
    "respuesta": "B",
    "tema": "Vacunas - Vacunación en gestantes",
    "origen": "vacunas",
    "explicacion": "La Tdap se administra a partir de las 27 semanas (tercer trimestre) en cada embarazo. El objetivo principal es que la madre genere anticuerpos anti-pertussis que se transfieran al feto por vía transplacentaria, protegiendo al recién nacido durante sus primeros meses de vida antes de que pueda recibir sus propias vacunas. La tos ferina es especialmente letal en neonatos menores de 3 meses."
  },
  {
    "id": 1018,
    "pregunta": "Si una vacuna que debe conservarse entre +2°C y +8°C se congela accidentalmente, ¿qué se debe hacer con las vacunas adsorbidas como la Pentavalente?",
    "opciones": {
      "A": "Se pueden usar normalmente si se descongelan lentamente",
      "B": "Se deben descartar porque la congelación destruye el adyuvante de aluminio y pierde su eficacia",
      "C": "Se pueden usar solo en las próximas 24 horas",
      "D": "Se deben agitar vigorosamente y aplicar"
    },
    "respuesta": "B",
    "tema": "Vacunas - Cadena de frío",
    "origen": "vacunas",
    "explicacion": "Las vacunas adsorbidas (Pentavalente, DPT, Td, Tdap, HvB, Neumococo) contienen hidróxido de aluminio como adyuvante. La congelación rompe la estructura del adyuvante de forma irreversible, formando grumos que no se redisuelven. Esto reduce drásticamente la inmunogenicidad y puede causar reacciones locales severas. Se puede realizar la prueba de agitación: si al agitar se observan grumos o sedimento que no se resuspende, la vacuna está dañada."
  },
  {
    "id": 1019,
    "pregunta": "Un niño de 8 meses acude al establecimiento de salud y no tiene ninguna vacuna. ¿Cuál es la conducta correcta respecto a su vacunación?",
    "opciones": {
      "A": "Iniciar el esquema desde cero aplicando todas las vacunas que correspondan a su edad",
      "B": "Esperar a que cumpla 12 meses para iniciar la vacunación",
      "C": "Solo aplicar BCG y Hepatitis B porque las demás ya no corresponden",
      "D": "Referir a un hospital para evaluación antes de vacunar"
    },
    "respuesta": "A",
    "tema": "Vacunas - Esquema de vacunación atrasado",
    "origen": "vacunas",
    "explicacion": "Ante un niño con esquema atrasado, se debe aplicar todas las vacunas que correspondan según su edad actual, sin reiniciar esquemas. No existen intervalos máximos entre dosis: cada dosis previa cuenta. El principio es 'dosis puesta, dosis que vale'. Se deben administrar simultáneamente todas las vacunas posibles en diferentes sitios anatómicos para recuperar el esquema lo más rápido posible y no perder oportunidades de vacunación."
  },
  {
    "id": 1020,
    "pregunta": "¿Cuál es la vía de administración y el sitio de aplicación correcto de la vacuna BCG en el recién nacido?",
    "opciones": {
      "A": "Intramuscular en el muslo derecho",
      "B": "Intradérmica en la región deltoidea del brazo derecho",
      "C": "Subcutánea en el brazo izquierdo",
      "D": "Intramuscular en el glúteo"
    },
    "respuesta": "B",
    "tema": "Vacunas - BCG",
    "origen": "vacunas",
    "explicacion": "La BCG se administra por vía intradérmica (ID) estricta en la región deltoidea del brazo derecho. La vía intradérmica es esencial porque deposita la vacuna en la dermis donde están las células presentadoras de antígeno (células de Langerhans) que inician la respuesta inmune celular. Si se aplica subcutánea o intramuscular por error, puede causar un absceso frío o adenitis supurativa. La dosis es 0.05 mL en menores de 1 año y 0.1 mL en mayores."
  },
  {
    "id": 1021,
    "pregunta": "Un lactante de 4 meses recibe su segunda dosis de Pentavalente y 6 horas después presenta fiebre de 38.5°C, irritabilidad y enrojecimiento en la zona de aplicación. ¿Cómo se clasifica este ESAVI?",
    "opciones": {
      "A": "ESAVI severo que requiere hospitalización inmediata",
      "B": "ESAVI leve, reacción esperada y común de la vacuna",
      "C": "ESAVI moderado por error programático",
      "D": "ESAVI coincidente no relacionado con la vacuna"
    },
    "respuesta": "B",
    "tema": "Vacunas - ESAVI",
    "origen": "vacunas",
    "explicacion": "La fiebre menor de 39°C, irritabilidad y reacción local (dolor, enrojecimiento, hinchazón) son reacciones esperadas y frecuentes tras la Pentavalente, clasificadas como ESAVI leve. Ocurren por la respuesta inflamatoria normal del sistema inmune al antígeno vacunal y al adyuvante de aluminio. Se resuelven espontáneamente en 24-48 horas con manejo sintomático (paracetamol). No contraindican dosis posteriores."
  },
  {
    "id": 1022,
    "pregunta": "¿Cuál es el intervalo mínimo recomendado entre dos vacunas de virus vivos atenuados inyectables (como SPR y Varicela) si no se aplican el mismo día?",
    "opciones": {
      "A": "7 días",
      "B": "28 días (4 semanas)",
      "C": "14 días",
      "D": "No requieren intervalo, se pueden aplicar en cualquier momento"
    },
    "respuesta": "B",
    "tema": "Vacunas - Intervalos entre vacunas",
    "origen": "vacunas",
    "explicacion": "Si dos vacunas virales vivas inyectables no se administran el mismo día, se debe esperar al menos 28 días entre ellas. Esto se debe a que la primera vacuna viral viva estimula la producción de interferón, que puede inhibir la replicación del segundo virus vacunal y reducir su eficacia. Si se aplican simultáneamente en sitios diferentes, no hay interferencia porque ambos virus comienzan a replicarse al mismo tiempo."
  },
  {
    "id": 1023,
    "pregunta": "La inmunidad que adquiere un recién nacido a través de los anticuerpos maternos transferidos por la placenta se denomina:",
    "opciones": {
      "A": "Inmunidad activa natural",
      "B": "Inmunidad pasiva natural",
      "C": "Inmunidad activa artificial",
      "D": "Inmunidad pasiva artificial"
    },
    "respuesta": "B",
    "tema": "Vacunas - Tipos de inmunidad",
    "origen": "vacunas",
    "explicacion": "Es inmunidad pasiva porque el recién nacido recibe anticuerpos (IgG) ya formados por la madre, sin que su propio sistema inmune los produzca. Es natural porque la transferencia ocurre de forma fisiológica a través de la placenta. Esta protección es temporal (dura 3-6 meses) porque los anticuerpos maternos se degradan progresivamente. Por eso la vacunación del lactante inicia a los 2 meses, cuando estos anticuerpos empiezan a disminuir."
  },
  {
    "id": 1024,
    "pregunta": "El bloqueo vacunal se realiza ante un caso probable de enfermedad prevenible por vacuna. ¿En qué plazo debe ejecutarse y cuál es su alcance en zona urbana?",
    "opciones": {
      "A": "Dentro de las 72 horas, vacunando a 5 manzanas a la redonda del caso",
      "B": "Dentro de las 48 horas, vacunando a 3 manzanas a la redonda",
      "C": "Dentro de la primera semana, vacunando todo el distrito",
      "D": "Dentro de las 24 horas, solo a los contactos directos"
    },
    "respuesta": "A",
    "tema": "Vacunas - Bloqueo vacunal",
    "origen": "vacunas",
    "explicacion": "El bloqueo vacunal debe ejecutarse dentro de las 72 horas de notificado el caso probable. En zona urbana se vacuna a 5 manzanas a la redonda y en zona rural a toda la comunidad. El objetivo es completar dosis pendientes en la población susceptible del entorno del caso para crear una barrera inmunológica que detenga la cadena de transmisión y evite la propagación del brote."
  },
  {
    "id": 1025,
    "pregunta": "¿Cuál de las siguientes situaciones constituye una 'oportunidad perdida de vacunación'?",
    "opciones": {
      "A": "No vacunar a un niño porque presenta fiebre de 40°C y convulsiones",
      "B": "No vacunar a un niño que acude por diarrea leve y tiene vacunas pendientes",
      "C": "No vacunar porque el niño tiene antecedente de anafilaxia a la vacuna",
      "D": "No vacunar porque no hay stock de vacunas en el establecimiento"
    },
    "respuesta": "B",
    "tema": "Vacunas - Oportunidades perdidas",
    "origen": "vacunas",
    "explicacion": "Una oportunidad perdida ocurre cuando un niño elegible para vacunación acude al establecimiento de salud y no se le vacuna sin una contraindicación válida. La diarrea leve, fiebre leve, resfrío común, desnutrición, uso de antibióticos y prematuridad NO son contraindicaciones. Las falsas contraindicaciones son la principal causa de oportunidades perdidas y contribuyen a bajas coberturas vacunales."
  },
  {
    "id": 1026,
    "pregunta": "En pacientes inmunosuprimidos (VIH avanzado, quimioterapia, trasplantados), ¿qué tipo de vacunas están CONTRAINDICADAS?",
    "opciones": {
      "A": "Las vacunas inactivadas y toxoides",
      "B": "Las vacunas de virus vivos atenuados y bacterias vivas",
      "C": "Todas las vacunas sin excepción",
      "D": "Solo las vacunas conjugadas"
    },
    "respuesta": "B",
    "tema": "Vacunas - Vacunación en inmunosuprimidos",
    "origen": "vacunas",
    "explicacion": "Las vacunas de microorganismos vivos atenuados (BCG, SPR, Varicela, Fiebre Amarilla, Rotavirus, OPV) están contraindicadas en inmunosuprimidos severos porque el microorganismo vacunal, aunque debilitado, puede multiplicarse sin control en un huésped sin defensas adecuadas, causando enfermedad diseminada grave. Las vacunas inactivadas, conjugadas y toxoides son seguras porque no contienen microorganismos vivos."
  },
  {
    "id": 1027,
    "pregunta": "La vacuna contra la Influenza se recomienda anualmente a grupos de riesgo. ¿Cuáles son los grupos prioritarios para la vacunación según el esquema peruano?",
    "opciones": {
      "A": "Solo adultos mayores de 65 años",
      "B": "Niños de 6 a 23 meses, gestantes, adultos mayores de 60 años, personal de salud y personas con comorbilidades",
      "C": "Solo personal de salud y gestantes",
      "D": "Toda la población sin distinción de edad"
    },
    "respuesta": "B",
    "tema": "Vacunas - Influenza",
    "origen": "vacunas",
    "explicacion": "Los grupos prioritarios incluyen a quienes tienen mayor riesgo de complicaciones graves por influenza: niños pequeños (sistema inmune inmaduro), gestantes (cambios inmunológicos del embarazo), adultos mayores (inmunosenescencia), personas con enfermedades crónicas (diabetes, asma, cardiopatías) y personal de salud (alta exposición y riesgo de transmitir a pacientes vulnerables)."
  },
  {
    "id": 1028,
    "pregunta": "La prueba de agitación (shake test) se utiliza para verificar si una vacuna adsorbida ha sido congelada. ¿Cómo se interpreta un resultado positivo?",
    "opciones": {
      "A": "La vacuna está en buen estado y puede usarse",
      "B": "La vacuna fue congelada: se observan partículas gruesas que sedimentan rápidamente dejando un líquido claro",
      "C": "La vacuna necesita ser refrigerada nuevamente",
      "D": "La vacuna debe agitarse más fuerte antes de aplicar"
    },
    "respuesta": "B",
    "tema": "Vacunas - Cadena de frío",
    "origen": "vacunas",
    "explicacion": "En la prueba de agitación se compara el frasco sospechoso con uno de control (nunca congelado). Si al agitar el frasco sospechoso se observan partículas gruesas o grumos que sedimentan rápidamente dejando un sobrenadante claro, significa que el adyuvante de aluminio fue destruido por congelación (test positivo = vacuna dañada). Una vacuna en buen estado muestra una suspensión homogénea turbia después de agitar."
  },
  {
    "id": 1029,
    "pregunta": "La inmunidad que se adquiere mediante la vacunación se clasifica como:",
    "opciones": {
      "A": "Inmunidad pasiva natural",
      "B": "Inmunidad activa artificial",
      "C": "Inmunidad pasiva artificial",
      "D": "Inmunidad innata"
    },
    "respuesta": "B",
    "tema": "Vacunas - Tipos de inmunidad",
    "origen": "vacunas",
    "explicacion": "La vacunación genera inmunidad activa porque estimula al propio sistema inmune del individuo a producir anticuerpos y células de memoria. Es artificial porque se logra mediante la introducción deliberada de antígenos (vacuna), a diferencia de la inmunidad activa natural que se adquiere al padecer la enfermedad. La ventaja de la vacunación es que confiere protección sin los riesgos de la enfermedad natural."
  },
  {
    "id": 1030,
    "pregunta": "Un ESAVI severo se define como aquel que cumple al menos uno de los siguientes criterios. ¿Cuál es correcto?",
    "opciones": {
      "A": "Fiebre mayor de 38°C y llanto persistente por más de 3 horas",
      "B": "Hospitalización, riesgo de muerte, discapacidad o fallecimiento",
      "C": "Enrojecimiento mayor de 3 cm en la zona de aplicación",
      "D": "Vómitos y diarrea leve en las primeras 24 horas"
    },
    "respuesta": "B",
    "tema": "Vacunas - ESAVI",
    "origen": "vacunas",
    "explicacion": "Un ESAVI severo requiere al menos uno de estos criterios: hospitalización o prolongación de hospitalización existente, riesgo de muerte inminente, discapacidad significativa o persistente, anomalía congénita, o fallecimiento. Estos eventos requieren notificación inmediata, investigación causal por un comité de expertos y seguimiento del caso. La fiebre, llanto y reacciones locales son ESAVI leves."
  },
  {
    "id": 1031,
    "pregunta": "La vacunación post-exposición contra la varicela en personas susceptibles debe realizarse dentro de:",
    "opciones": {
      "A": "Las primeras 24 horas del contacto",
      "B": "Las primeras 72 horas (3 días) del contacto con el caso",
      "C": "La primera semana del contacto",
      "D": "Los primeros 5 días del contacto"
    },
    "respuesta": "B",
    "tema": "Vacunas - Vacunación post-exposición",
    "origen": "vacunas",
    "explicacion": "La vacuna contra varicela administrada dentro de las primeras 72 horas post-exposición puede prevenir la enfermedad o reducir significativamente su severidad. Esto se debe a que el periodo de incubación de la varicela es de 14-21 días, y la vacuna genera anticuerpos protectores en 7-10 días, lo que permite 'ganarle la carrera' al virus salvaje si se aplica tempranamente."
  },
  {
    "id": 1032,
    "pregunta": "En un recién nacido prematuro de 1.8 kg, ¿cuál es la conducta correcta respecto a la vacuna BCG?",
    "opciones": {
      "A": "Aplicar BCG inmediatamente al nacer independientemente del peso",
      "B": "Esperar a que alcance los 2 kg de peso para aplicar la BCG",
      "C": "No aplicar BCG en prematuros",
      "D": "Aplicar media dosis de BCG"
    },
    "respuesta": "B",
    "tema": "Vacunas - Vacunación en prematuros",
    "origen": "vacunas",
    "explicacion": "La BCG se posterga en recién nacidos con peso menor a 2 kg porque su piel es muy delgada y el sistema inmune celular aún no está lo suficientemente maduro para generar una respuesta adecuada. Además, la técnica intradérmica es más difícil en piel muy fina, aumentando el riesgo de aplicación subcutánea accidental y complicaciones locales. Una vez que alcanza 2 kg, se aplica normalmente."
  },
  {
    "id": 1033,
    "pregunta": "La cobertura vacunal mínima necesaria para lograr la inmunidad de rebaño contra el sarampión es de:",
    "opciones": {
      "A": "80%",
      "B": "95%",
      "C": "70%",
      "D": "85%"
    },
    "respuesta": "B",
    "tema": "Vacunas - Coberturas vacunales",
    "origen": "vacunas",
    "explicacion": "El sarampión es una de las enfermedades más contagiosas (R0 = 12-18), lo que significa que cada caso puede infectar a 12-18 personas susceptibles. Por ello se necesita una cobertura del 95% para interrumpir la transmisión. Cuando la cobertura cae por debajo de este umbral, se acumulan susceptibles y pueden ocurrir brotes, como los observados en países que redujeron sus coberturas vacunales."
  },
  {
    "id": 1034,
    "pregunta": "La vacuna Td (Tétanos y Difteria) en adultos se administra como refuerzo cada:",
    "opciones": {
      "A": "5 años",
      "B": "10 años",
      "C": "15 años",
      "D": "Solo una vez en la vida adulta"
    },
    "respuesta": "B",
    "tema": "Vacunas - Td (adultos)",
    "origen": "vacunas",
    "explicacion": "La inmunidad contra tétanos y difteria disminuye progresivamente después de la vacunación, con niveles protectores que caen significativamente después de 10 años. Por eso se recomienda un refuerzo de Td cada 10 años durante toda la vida adulta. El tétanos no genera inmunidad natural (no se adquiere inmunidad por padecer la enfermedad), por lo que la vacunación es la única forma de protección."
  },
  {
    "id": 1035,
    "pregunta": "¿Cuál es la vía de administración y el sitio correcto para aplicar la vacuna Pentavalente en un lactante de 2 meses?",
    "opciones": {
      "A": "Intramuscular en el tercio medio del muslo (vástago lateral), cara anterolateral",
      "B": "Subcutánea en el brazo derecho",
      "C": "Intradérmica en la región deltoidea",
      "D": "Intramuscular en el glúteo"
    },
    "respuesta": "A",
    "tema": "Vacunas - Vías de administración",
    "origen": "vacunas",
    "explicacion": "En lactantes menores de 12 meses, las vacunas intramusculares se aplican en el tercio medio de la cara anterolateral del muslo porque es la zona con mayor masa muscular a esa edad. NO se usa el glúteo porque el nervio ciático puede lesionarse y la grasa subcutánea es abundante, lo que reduce la absorción del antígeno. A partir de los 12 meses se puede usar la región deltoidea del brazo."
  },
  {
    "id": 1036,
    "pregunta": "El termómetro de máxima y mínima en la cadena de frío permite registrar:",
    "opciones": {
      "A": "Solo la temperatura actual del refrigerador",
      "B": "La temperatura actual, la máxima y la mínima alcanzadas desde la última lectura",
      "C": "Solo si hubo corte de energía eléctrica",
      "D": "La humedad relativa del refrigerador"
    },
    "respuesta": "B",
    "tema": "Vacunas - Cadena de frío",
    "origen": "vacunas",
    "explicacion": "El termómetro de máxima y mínima registra tres valores: la temperatura actual, la máxima alcanzada y la mínima alcanzada desde el último reseteo. Esto es fundamental porque permite detectar si hubo excursiones de temperatura fuera del rango +2°C a +8°C, incluso cuando nadie estaba presente (noches, fines de semana). Se debe registrar dos veces al día (mañana y tarde) en la hoja de control de temperatura."
  },
  {
    "id": 1037,
    "pregunta": "Un niño de 13 meses recibió su primera dosis de SPR hace 15 días. Ahora se reporta un caso de sarampión en su comunidad. ¿Se debe aplicar una segunda dosis de SPR como parte del bloqueo vacunal?",
    "opciones": {
      "A": "Sí, se aplica inmediatamente sin importar el intervalo",
      "B": "No, se debe respetar el intervalo mínimo de 4 semanas entre dosis de vacunas virales vivas",
      "C": "Sí, pero solo media dosis",
      "D": "No, porque ya está protegido con una sola dosis"
    },
    "respuesta": "B",
    "tema": "Vacunas - Intervalos entre vacunas",
    "origen": "vacunas",
    "explicacion": "Se debe respetar el intervalo mínimo de 28 días (4 semanas) entre dos dosis de vacunas virales vivas inyectables. Aplicar la segunda dosis antes de este intervalo puede resultar en interferencia por el interferón producido tras la primera dosis, reduciendo la eficacia de la segunda. En este caso, el niño ya tiene cierta protección parcial con la primera dosis (eficacia del 93-95%) y se completará el esquema a los 18 meses."
  },
  {
    "id": 1038,
    "pregunta": "La vacuna contra la Influenza en adultos mayores de 60 años tiene menor eficacia que en adultos jóvenes. ¿Cuál es la razón principal?",
    "opciones": {
      "A": "La vacuna tiene menor concentración de antígeno",
      "B": "La inmunosenescencia: el envejecimiento del sistema inmune reduce la capacidad de generar anticuerpos",
      "C": "Los adultos mayores ya tienen inmunidad natural",
      "D": "La vía de administración es diferente en adultos mayores"
    },
    "respuesta": "B",
    "tema": "Vacunas - Influenza",
    "origen": "vacunas",
    "explicacion": "La inmunosenescencia es el deterioro progresivo del sistema inmune asociado al envejecimiento. Se caracteriza por menor producción de linfocitos T naïve, menor diversidad de anticuerpos y respuesta inflamatoria crónica de bajo grado. Esto reduce la eficacia vacunal del 70-90% en adultos jóvenes al 30-40% en adultos mayores. A pesar de esto, la vacunación sigue siendo fundamental porque reduce hospitalizaciones y mortalidad por influenza en este grupo."
  },
  {
    "id": 1039,
    "pregunta": "En el esquema de vacunación peruano, ¿cuántas vacunas se administran al recién nacido dentro de las primeras 24 horas de vida?",
    "opciones": {
      "A": "Solo BCG",
      "B": "BCG y Hepatitis B",
      "C": "BCG, Hepatitis B y Polio oral",
      "D": "Solo Hepatitis B"
    },
    "respuesta": "B",
    "tema": "Vacunas - Esquema del recién nacido",
    "origen": "vacunas",
    "explicacion": "Al recién nacido se le administran dos vacunas dentro de las primeras 24 horas: BCG (intradérmica en brazo derecho) para prevenir formas graves de tuberculosis, y Hepatitis B (intramuscular en muslo) para prevenir la transmisión vertical. Ambas se aplican lo más pronto posible porque la protección temprana es crítica: la TB meningea tiene alta mortalidad en neonatos y la HvB perinatal cronifica en el 90% de los casos."
  },
  {
    "id": 1040,
    "pregunta": "La vacuna antineumocócica polisacárida 23-valente (PPSV23) se indica en adultos mayores de 60 años. ¿En qué se diferencia de la vacuna conjugada 13-valente (PCV13)?",
    "opciones": {
      "A": "La PPSV23 cubre más serotipos pero no genera memoria inmunológica duradera",
      "B": "La PPSV23 es más efectiva en niños menores de 2 años",
      "C": "No hay diferencia, son intercambiables",
      "D": "La PCV13 cubre más serotipos que la PPSV23"
    },
    "respuesta": "A",
    "tema": "Vacunas - Neumococo",
    "origen": "vacunas",
    "explicacion": "La PPSV23 contiene polisacáridos purificados de 23 serotipos, pero al ser antígenos T-independientes, no generan memoria inmunológica ni son efectivos en menores de 2 años (cuyo sistema inmune no responde bien a polisacáridos puros). La PCV13 conjuga los polisacáridos con una proteína transportadora, convirtiéndolos en antígenos T-dependientes que sí generan memoria inmunológica y son efectivos desde los 2 meses de edad."
  },
  {
    "id": 1041,
    "pregunta": "Un personal de salud aplica la vacuna Pentavalente sin verificar la fecha de vencimiento y el frasco estaba vencido hace 2 meses. ¿Cómo se clasifica este ESAVI si el niño presenta reacción local severa?",
    "opciones": {
      "A": "ESAVI por reacción inherente a la vacuna",
      "B": "ESAVI por error programático (error de inmunización)",
      "C": "ESAVI coincidente",
      "D": "ESAVI idiosincrático"
    },
    "respuesta": "B",
    "tema": "Vacunas - ESAVI por error programático",
    "origen": "vacunas",
    "explicacion": "Un ESAVI por error programático ocurre cuando el evento adverso es causado por un error en el almacenamiento, preparación, manejo o administración de la vacuna. Aplicar una vacuna vencida es un error programático porque el personal no cumplió con verificar la fecha de caducidad. Otros errores incluyen: dosis incorrecta, vía equivocada, sitio incorrecto, no respetar contraindicaciones y fallas en la cadena de frío."
  },
  {
    "id": 1042,
    "pregunta": "Una madre lactante pregunta si puede vacunarse contra la Fiebre Amarilla. ¿Cuál es la recomendación?",
    "opciones": {
      "A": "Sí, puede vacunarse sin restricciones",
      "B": "Se debe evitar en madres que amamantan a menores de 6 meses por riesgo de transmisión del virus vacunal por leche materna",
      "C": "Está contraindicada durante toda la lactancia",
      "D": "Solo puede vacunarse si suspende la lactancia por 1 mes"
    },
    "respuesta": "B",
    "tema": "Vacunas - Vacunación y lactancia",
    "origen": "vacunas",
    "explicacion": "La vacuna contra Fiebre Amarilla es de virus vivo atenuado y se ha documentado transmisión del virus vacunal a través de la leche materna, pudiendo causar encefalitis en el lactante menor de 6 meses. Por ello se posterga la vacunación de la madre hasta que el bebé cumpla 6 meses. Las demás vacunas (incluyendo SPR, Varicela, Influenza, Td) son seguras durante la lactancia."
  },
  {
    "id": 1043,
    "pregunta": "En el almacenamiento de vacunas en el refrigerador del establecimiento de salud, ¿dónde se deben colocar las vacunas virales vivas (SPR, Varicela)?",
    "opciones": {
      "A": "En la puerta del refrigerador",
      "B": "En la primera bandeja (parte superior), cerca del evaporador",
      "C": "En el congelador",
      "D": "En la parte inferior junto a las botellas de agua"
    },
    "respuesta": "B",
    "tema": "Vacunas - Cadena de frío",
    "origen": "vacunas",
    "explicacion": "Las vacunas virales vivas (SPR, Varicela, Fiebre Amarilla) son más sensibles al calor pero toleran la congelación, por lo que se colocan en la primera bandeja (más fría, cerca del evaporador). Las vacunas adsorbidas (Pentavalente, DPT, Td, HvB, Neumococo) se colocan en la segunda bandeja porque NO deben congelarse. La puerta del refrigerador NUNCA debe usarse para vacunas por las fluctuaciones de temperatura al abrirla."
  },
  {
    "id": 1044,
    "pregunta": "El Monitoreo Rápido de Coberturas (MRC) es una herramienta que se realiza después de una campaña de vacunación. ¿Cuál es su objetivo principal?",
    "opciones": {
      "A": "Calcular el presupuesto utilizado en la campaña",
      "B": "Verificar en campo si la población objetivo fue efectivamente vacunada e identificar niños no vacunados",
      "C": "Evaluar la calidad de las vacunas utilizadas",
      "D": "Capacitar al personal de salud en técnicas de vacunación"
    },
    "respuesta": "B",
    "tema": "Vacunas - Monitoreo de coberturas",
    "origen": "vacunas",
    "explicacion": "El MRC se realiza visitando viviendas seleccionadas aleatoriamente para verificar, mediante la revisión del carné de vacunación, si los niños fueron vacunados. Permite identificar bolsones de no vacunados, evaluar la efectividad de la campaña y tomar acciones correctivas inmediatas. Se considera exitosa la campaña si el MRC muestra cobertura ≥95%. Es una herramienta rápida, económica y práctica para el nivel local."
  },
  {
    "id": 1045,
    "pregunta": "¿Cuál es la diferencia principal entre una vacuna inactivada y una vacuna viva atenuada?",
    "opciones": {
      "A": "Las inactivadas son más efectivas que las vivas atenuadas",
      "B": "Las vivas atenuadas contienen microorganismos debilitados que se replican en el huésped; las inactivadas contienen microorganismos muertos o fracciones que no se replican",
      "C": "Las inactivadas se administran solo por vía oral",
      "D": "No hay diferencia significativa entre ambas"
    },
    "respuesta": "B",
    "tema": "Vacunas - Tipos de vacunas",
    "origen": "vacunas",
    "explicacion": "Las vacunas vivas atenuadas (BCG, SPR, Varicela, Rotavirus, Fiebre Amarilla) contienen microorganismos vivos debilitados que se replican limitadamente en el huésped, simulando una infección natural y generando inmunidad robusta y duradera, generalmente con menos dosis. Las vacunas inactivadas (IPV, Influenza, Hepatitis A) y las de subunidades/conjugadas (Pentavalente, Neumococo, VPH) no se replican, por lo que suelen necesitar múltiples dosis y refuerzos."
  },
  {
    "id": 1046,
    "pregunta": "Un niño de 12 meses debe recibir simultáneamente SPR, Neumococo (refuerzo) e Influenza. ¿Es correcto administrar las tres vacunas el mismo día?",
    "opciones": {
      "A": "No, se deben separar por al menos 2 semanas",
      "B": "Sí, se pueden administrar simultáneamente en sitios anatómicos diferentes",
      "C": "Solo se pueden aplicar dos vacunas el mismo día",
      "D": "No, las vacunas vivas no se pueden combinar con inactivadas"
    },
    "respuesta": "B",
    "tema": "Vacunas - Administración simultánea",
    "origen": "vacunas",
    "explicacion": "Se pueden administrar múltiples vacunas simultáneamente sin límite de número, siempre que se apliquen en sitios anatómicos diferentes (separados al menos 2.5 cm). La administración simultánea no reduce la eficacia ni aumenta los efectos adversos. Es una estrategia fundamental para completar esquemas atrasados y reducir oportunidades perdidas, especialmente en poblaciones con dificultad de acceso a los servicios de salud."
  },
  {
    "id": 1047,
    "pregunta": "La vacuna contra Hepatitis B genera protección cuando los niveles de anticuerpos anti-HBs son iguales o mayores a:",
    "opciones": {
      "A": "5 mUI/mL",
      "B": "10 mUI/mL",
      "C": "20 mUI/mL",
      "D": "100 mUI/mL"
    },
    "respuesta": "B",
    "tema": "Vacunas - Hepatitis B",
    "origen": "vacunas",
    "explicacion": "Se considera que una persona está protegida contra Hepatitis B cuando sus anticuerpos anti-HBs son ≥10 mUI/mL (seroconversión). Este nivel se alcanza en el 95% de los vacunados con esquema completo. El personal de salud debe verificar su seroconversión 1-2 meses después de completar el esquema. Si no alcanza 10 mUI/mL, se considera no respondedor y debe recibir un segundo esquema completo."
  },
  {
    "id": 1048,
    "pregunta": "La vacuna contra el Rotavirus está contraindicada en niños con antecedente de:",
    "opciones": {
      "A": "Prematuridad",
      "B": "Intususcepción intestinal previa",
      "C": "Diarrea leve",
      "D": "Lactancia materna exclusiva"
    },
    "respuesta": "B",
    "tema": "Vacunas - Contraindicaciones específicas",
    "origen": "vacunas",
    "explicacion": "La intususcepción intestinal previa es una contraindicación específica de la vacuna contra Rotavirus porque existe un pequeño riesgo aumentado de intususcepción post-vacunal (1-2 casos adicionales por cada 100,000 dosis). En un niño con antecedente de intususcepción, este riesgo es inaceptable. La prematuridad, diarrea leve y lactancia materna NO son contraindicaciones. También está contraindicada en inmunodeficiencia combinada severa (SCID)."
  },
  {
    "id": 1049,
    "pregunta": "El personal de salud sufre un pinchazo con aguja contaminada de un paciente con Hepatitis B. ¿Cuál es la conducta inmediata respecto a la inmunoprofilaxis?",
    "opciones": {
      "A": "Solo observación por 6 meses",
      "B": "Verificar estado vacunal; si no está vacunado, administrar inmunoglobulina anti-HB + iniciar esquema de vacunación dentro de las primeras 24 horas",
      "C": "Aplicar solo antibióticos profilácticos",
      "D": "Esperar resultados de serología antes de actuar"
    },
    "respuesta": "B",
    "tema": "Vacunas - Profilaxis post-exposición",
    "origen": "vacunas",
    "explicacion": "Ante exposición percutánea a sangre de paciente HBsAg positivo, si el trabajador no está vacunado o no tiene anticuerpos protectores (≥10 mUI/mL), se debe administrar inmunoglobulina específica anti-HB (IGHB) + primera dosis de vacuna HvB dentro de las primeras 24 horas. La IGHB proporciona protección pasiva inmediata mientras la vacuna genera inmunidad activa. Si el trabajador está vacunado con anti-HBs ≥10, no necesita profilaxis."
  },
  {
    "id": 1050,
    "pregunta": "La vacuna DPT (célula entera) puede causar como efecto adverso raro pero conocido:",
    "opciones": {
      "A": "Intususcepción intestinal",
      "B": "Episodio hipotónico-hiporreactivo (EHH) y convulsiones febriles",
      "C": "Meningitis aséptica",
      "D": "Trombocitopenia"
    },
    "respuesta": "B",
    "tema": "Vacunas - Efectos adversos específicos",
    "origen": "vacunas",
    "explicacion": "La DPT de célula entera contiene el componente pertussis completo, que es más reactogénico. Puede causar episodio hipotónico-hiporreactivo (EHH: palidez, hiporreactividad, hipotenía súbita) y convulsiones febriles en 1 de cada 1,750 dosis. Estos eventos son autolimitados y no dejan secuelas, pero requieren notificación como ESAVI. La vacuna acelular (Tdap) tiene menor reactogenicidad porque contiene solo fracciones purificadas de pertussis."
  },
  {
    "id": 1051,
    "pregunta": "Un niño de 18 meses con VIH asintomático (categoría clínica A) y CD4 >25%. ¿Puede recibir la vacuna SPR?",
    "opciones": {
      "A": "No, todas las vacunas vivas están contraindicadas en VIH",
      "B": "Sí, los niños con VIH asintomáticos o con inmunosupresión leve pueden recibir SPR",
      "C": "Solo si tiene carga viral indetectable por más de 1 año",
      "D": "Solo puede recibir vacunas inactivadas"
    },
    "respuesta": "B",
    "tema": "Vacunas - Vacunación en VIH",
    "origen": "vacunas",
    "explicacion": "Los niños con VIH asintomáticos o con inmunosupresión leve-moderada (CD4 >15%) pueden recibir vacunas vivas como SPR y Varicela. La contraindicación es solo para inmunosupresión severa (CD4 <15%). El sarampión natural tiene alta mortalidad en niños con VIH (hasta 50%), por lo que el beneficio de la vacunación supera ampliamente el riesgo. La BCG está contraindicada en VIH confirmado por riesgo de BCGitis diseminada."
  },
  {
    "id": 1052,
    "pregunta": "Un frasco multidosis de vacuna Pentavalente fue abierto a las 8:00 am en el establecimiento de salud. ¿Hasta qué hora puede utilizarse según la política de frascos abiertos?",
    "opciones": {
      "A": "Solo durante las primeras 4 horas",
      "B": "Hasta el final de la jornada laboral del mismo día, máximo 6 horas, si se mantuvo en cadena de frío",
      "C": "Puede usarse hasta 7 días después",
      "D": "Solo para la siguiente dosis inmediata"
    },
    "respuesta": "B",
    "tema": "Vacunas - Manejo de frascos multidosis",
    "origen": "vacunas",
    "explicacion": "Los frascos multidosis de vacunas que contienen preservante (como la Pentavalente con tiomersal) pueden usarse hasta el final de la jornada laboral del mismo día (máximo 6 horas) siempre que se mantengan en cadena de frío (+2 a +8°C) y se hayan manipulado con técnica aséptica. Las vacunas sin preservante (como BCG reconstituida y SPR reconstituida) deben usarse dentro de las 6 horas post-reconstitución y descartarse al final de la jornada."
  },
  {
    "id": 1053,
    "pregunta": "En la vacunación escolar, ¿qué vacunas se administran a niñas del 5° grado de primaria según el esquema peruano?",
    "opciones": {
      "A": "Solo Influenza",
      "B": "VPH (1ra dosis) y refuerzo de dT",
      "C": "SPR y Varicela",
      "D": "Solo Hepatitis A"
    },
    "respuesta": "B",
    "tema": "Vacunas - Vacunación escolar",
    "origen": "vacunas",
    "explicacion": "En la vacunación escolar se administra la primera dosis de VPH a niñas de 9-13 años (generalmente en 5° grado de primaria) para prevenir el cáncer de cuello uterino, y el refuerzo de dT (difteria-tétanos) para mantener la inmunidad. La vacunación escolar es una estrategia efectiva porque permite alcanzar altas coberturas al tener a la población objetivo cautiva en las instituciones educativas."
  },
  {
    "id": 1054,
    "pregunta": "El adyuvante más utilizado en las vacunas del esquema regular es el hidróxido de aluminio. ¿Cuál es su función?",
    "opciones": {
      "A": "Conservar la vacuna por más tiempo",
      "B": "Potenciar la respuesta inmune al retener el antígeno en el sitio de inyección y estimular las células inmunes",
      "C": "Reducir el dolor en el sitio de aplicación",
      "D": "Prevenir la contaminación bacteriana del frasco"
    },
    "respuesta": "B",
    "tema": "Vacunas - Componentes de las vacunas",
    "origen": "vacunas",
    "explicacion": "El hidróxido de aluminio actúa como adyuvante formando un depósito en el sitio de inyección que libera lentamente el antígeno (efecto depot), prolongando la exposición del sistema inmune. Además, activa las células presentadoras de antígeno y estimula la respuesta inflamatoria local. Esto permite usar menor cantidad de antígeno y obtener una respuesta inmune más potente y duradera. Es la razón por la que estas vacunas no deben congelarse."
  },
  {
    "id": 1055,
    "pregunta": "La vigilancia de ESAVI tiene como objetivo principal:",
    "opciones": {
      "A": "Suspender la vacunación ante cualquier evento adverso",
      "B": "Detectar, notificar, investigar y responder a eventos adversos para mantener la confianza en la vacunación y mejorar la seguridad",
      "C": "Sancionar al personal de salud responsable",
      "D": "Eliminar las vacunas que causan efectos adversos"
    },
    "respuesta": "B",
    "tema": "Vacunas - Vigilancia de ESAVI",
    "origen": "vacunas",
    "explicacion": "La vigilancia de ESAVI es un componente esencial del programa de inmunizaciones que busca: detectar señales de seguridad, investigar la causalidad de los eventos, implementar acciones correctivas, mantener la confianza pública en las vacunas y mejorar continuamente las prácticas de vacunación. NO tiene como objetivo suspender la vacunación ni sancionar, sino aprender y mejorar. Todos los ESAVI severos deben notificarse dentro de las 24 horas."
  },
  {
    "id": 1056,
    "pregunta": "Un viajero adulto que irá a la selva peruana y nunca fue vacunado contra Fiebre Amarilla. ¿Cuántos días antes del viaje debe vacunarse como mínimo?",
    "opciones": {
      "A": "El mismo día del viaje",
      "B": "Al menos 10 días antes del viaje",
      "C": "Al menos 30 días antes",
      "D": "Al menos 3 días antes"
    },
    "respuesta": "B",
    "tema": "Vacunas - Vacunación del viajero",
    "origen": "vacunas",
    "explicacion": "La vacuna contra Fiebre Amarilla necesita al menos 10 días para generar anticuerpos protectores (seroconversión). Por eso el Certificado Internacional de Vacunación contra Fiebre Amarilla es válido a partir del décimo día post-vacunación. Si el viajero se vacuna con menos de 10 días de anticipación, no estará protegido al llegar a la zona endémica y deberá tomar medidas adicionales contra picaduras de mosquitos."
  },
  {
    "id": 1057,
    "pregunta": "La vacuna contra Hepatitis B en el personal de salud se administra en esquema de:",
    "opciones": {
      "A": "1 dosis única",
      "B": "3 dosis: 0, 1 y 6 meses",
      "C": "2 dosis: 0 y 6 meses",
      "D": "4 dosis: 0, 1, 2 y 12 meses"
    },
    "respuesta": "B",
    "tema": "Vacunas - Vacunación del personal de salud",
    "origen": "vacunas",
    "explicacion": "El esquema clásico de HvB es 0-1-6 meses (3 dosis). La primera dosis inicia la respuesta inmune, la segunda dosis al mes la amplifica, y la tercera dosis a los 6 meses genera memoria inmunológica de larga duración. El personal de salud es grupo prioritario por su exposición ocupacional a sangre y fluidos. Se recomienda verificar seroconversión (anti-HBs ≥10 mUI/mL) 1-2 meses después de la tercera dosis."
  },
  {
    "id": 1058,
    "pregunta": "La anafilaxia post-vacunal generalmente ocurre dentro de los primeros:",
    "opciones": {
      "A": "30 minutos posteriores a la vacunación",
      "B": "24 horas posteriores",
      "C": "48 a 72 horas posteriores",
      "D": "7 días posteriores"
    },
    "respuesta": "A",
    "tema": "Vacunas - Anafilaxia post-vacunal",
    "origen": "vacunas",
    "explicacion": "La anafilaxia es una reacción alérgica sistémica grave mediada por IgE que ocurre generalmente dentro de los primeros 15-30 minutos post-vacunación. Por esta razón, se recomienda observar al vacunado durante 30 minutos después de la administración. Todo establecimiento que vacuna debe contar con un kit de emergencia con adrenalina (epinefrina), que es el tratamiento de primera línea para la anafilaxia."
  },
  {
    "id": 1059,
    "pregunta": "La vacuna SPR puede causar como efecto adverso esperado, entre los 5 y 12 días post-vacunación:",
    "opciones": {
      "A": "Diarrea severa y deshidratación",
      "B": "Fiebre, exantema leve (rash) y artralgias transitorias",
      "C": "Convulsiones afebriles",
      "D": "Parálisis fláccida aguda"
    },
    "respuesta": "B",
    "tema": "Vacunas - Efectos adversos SPR",
    "origen": "vacunas",
    "explicacion": "Entre los 5-12 días post-SPR puede aparecer fiebre (5-15% de vacunados), exantema maculopapular transitorio (5%) y artralgias (componente rubéola, más frecuente en mujeres adultas). Estos síntomas representan la replicación del virus vacunal atenuado y son una 'mini-enfermedad' que confirma la respuesta inmune. Son autolimitados, no contagiosos y no requieren tratamiento específico, solo manejo sintomático."
  },
  {
    "id": 1060,
    "pregunta": "En la técnica de administración de vacunas, el ángulo de inserción de la aguja para la vía intramuscular es de:",
    "opciones": {
      "A": "15 grados",
      "B": "90 grados (perpendicular a la piel)",
      "C": "45 grados",
      "D": "30 grados"
    },
    "respuesta": "B",
    "tema": "Vacunas - Técnica de administración",
    "origen": "vacunas",
    "explicacion": "La vía intramuscular (IM) requiere inserción a 90° para asegurar que la vacuna se deposite en el músculo. La vía subcutánea (SC) usa 45°, y la intradérmica (ID) usa 15° con bisel hacia arriba. El ángulo correcto es fundamental: si una vacuna IM se aplica a menor ángulo, queda en tejido subcutáneo donde la absorción es menor, la eficacia se reduce y aumentan las reacciones locales, especialmente con vacunas adsorbidas."
  },
  {
    "id": 1061,
    "pregunta": "El sarampión es una enfermedad prevenible por vacuna con alta contagiosidad. ¿Cuál es su principal complicación y causa de muerte en niños?",
    "opciones": {
      "A": "Insuficiencia renal aguda",
      "B": "Neumonía",
      "C": "Hepatitis fulminante",
      "D": "Meningitis bacteriana"
    },
    "respuesta": "B",
    "tema": "Vacunas - Enfermedades prevenibles por vacuna",
    "origen": "vacunas",
    "explicacion": "La neumonía es la complicación más frecuente y la principal causa de muerte por sarampión en niños, responsable del 60% de las defunciones. El virus del sarampión causa inmunosupresión transitoria que predispone a sobreinfecciones bacterianas pulmonares. Otras complicaciones incluyen encefalitis (1 en 1,000 casos), panencefalitis esclerosante subaguda (PEES) y diarrea severa. La vacunación con SPR es la medida más efectiva de prevención."
  },
  {
    "id": 1062,
    "pregunta": "La inmunoglobulina humana normal (gammaglobulina) proporciona qué tipo de inmunidad y cuánto dura su protección?",
    "opciones": {
      "A": "Inmunidad activa artificial, protección de por vida",
      "B": "Inmunidad pasiva artificial, protección temporal de 2-4 semanas",
      "C": "Inmunidad activa natural, protección de 6 meses",
      "D": "Inmunidad innata, protección permanente"
    },
    "respuesta": "B",
    "tema": "Vacunas - Inmunoglobulinas",
    "origen": "vacunas",
    "explicacion": "Las inmunoglobulinas proporcionan inmunidad pasiva artificial: se administran anticuerpos preformados que brindan protección inmediata pero temporal (2-4 semanas) porque los anticuerpos se degradan sin generar memoria inmunológica. Se usan en profilaxis post-exposición (hepatitis B, rabia, tétanos, sarampión) cuando se necesita protección rápida. Después de administrar inmunoglobulinas, se debe esperar 3-6 meses para aplicar vacunas vivas."
  },
  {
    "id": 1063,
    "pregunta": "Ante un brote de sarampión, ¿a partir de qué edad se puede administrar una dosis adicional de SPR (dosis cero) a los niños?",
    "opciones": {
      "A": "Desde los 2 meses",
      "B": "Desde los 6 meses de edad",
      "C": "Solo a partir de los 12 meses",
      "D": "Desde los 9 meses"
    },
    "respuesta": "B",
    "tema": "Vacunas - Vacunación en brotes",
    "origen": "vacunas",
    "explicacion": "En situación de brote de sarampión, se puede administrar una 'dosis cero' de SPR a partir de los 6 meses de edad. Esta dosis no se cuenta como parte del esquema regular porque a esa edad los anticuerpos maternos residuales pueden interferir con la respuesta vacunal (eficacia del 50-60%). El niño debe recibir igualmente sus dosis regulares a los 12 y 18 meses. Esta estrategia busca brindar alguna protección en un contexto de alto riesgo."
  },
  {
    "id": 1064,
    "pregunta": "El indicador VVM (Vaccine Vial Monitor) es una etiqueta sensible al calor que se coloca en los frascos de vacunas. ¿Cómo se interpreta cuando el cuadrado interior es más oscuro que el círculo exterior?",
    "opciones": {
      "A": "La vacuna está en buen estado",
      "B": "La vacuna ha sido expuesta a calor excesivo y debe descartarse",
      "C": "La vacuna necesita refrigerarse inmediatamente pero aún sirve",
      "D": "El indicador está defectuoso"
    },
    "respuesta": "B",
    "tema": "Vacunas - Termoestabilidad",
    "origen": "vacunas",
    "explicacion": "El VVM cambia de color progresivamente con la exposición acumulada al calor. Cuando el cuadrado interior se oscurece hasta igualar o superar el color del círculo exterior, indica que la vacuna ha recibido una exposición térmica que compromete su potencia y debe descartarse. Es una herramienta invaluable para monitorear la cadena de frío, especialmente durante campañas de vacunación en campo donde no siempre hay termómetros disponibles."
  },
  {
    "id": 1065,
    "pregunta": "El registro nominal de vacunación es un instrumento fundamental del programa de inmunizaciones. ¿Cuál es su principal utilidad?",
    "opciones": {
      "A": "Solo para fines estadísticos nacionales",
      "B": "Permite el seguimiento individual de cada niño, identificar esquemas incompletos y programar búsqueda de desertores",
      "C": "Exclusivamente para el cálculo de coberturas",
      "D": "Solo para justificar el gasto en vacunas"
    },
    "respuesta": "B",
    "tema": "Vacunas - Registro vacunal",
    "origen": "vacunas",
    "explicacion": "El registro nominal permite identificar a cada niño por nombre, fecha de nacimiento y dirección, registrando cada dosis aplicada con fecha y lote. Esto permite: detectar niños con esquema incompleto, programar visitas domiciliarias para búsqueda de desertores, calcular coberturas reales, verificar intervalos entre dosis y generar alertas para dosis pendientes. Es superior al registro consolidado porque permite seguimiento personalizado."
  },
  {
    "id": 1066,
    "pregunta": "La tos ferina (pertussis) es especialmente peligrosa en recién nacidos menores de 3 meses. ¿Cuál es la estrategia de vacunación para protegerlos antes de que puedan recibir su primera dosis de Pentavalente?",
    "opciones": {
      "A": "Vacunar al recién nacido con DPT al nacer",
      "B": "Vacunar a la gestante con Tdap en el tercer trimestre y vacunar a los contactos cercanos (estrategia capullo)",
      "C": "Administrar inmunoglobulina anti-pertussis al recién nacido",
      "D": "Aislar al recién nacido durante los primeros 3 meses"
    },
    "respuesta": "B",
    "tema": "Vacunas - Estrategia capullo",
    "origen": "vacunas",
    "explicacion": "La estrategia capullo (cocoon strategy) consiste en vacunar con Tdap a la gestante (para transferencia de anticuerpos al feto) y a todos los contactos cercanos del recién nacido (padre, hermanos, abuelos, cuidadores) para crear un 'capullo' protector. Los neonatos menores de 3 meses no pueden vacunarse y la tos ferina tiene una letalidad del 1-3% en este grupo, con apneas y cianosis como manifestaciones graves."
  },
  {
    "id": 1067,
    "pregunta": "La vacuna contra la rabia humana se administra como profilaxis post-exposición ante mordedura de animal sospechoso. ¿Cuántas dosis comprende el esquema reducido (Essen modificado)?",
    "opciones": {
      "A": "3 dosis: días 0, 3 y 7",
      "B": "5 dosis: días 0, 3, 7, 14 y 28",
      "C": "2 dosis: días 0 y 14",
      "D": "4 dosis: días 0, 7, 14 y 28"
    },
    "respuesta": "B",
    "tema": "Vacunas - Rabia",
    "origen": "vacunas",
    "explicacion": "El esquema post-exposición de rabia consta de 5 dosis intramusculares los días 0, 3, 7, 14 y 28. En exposiciones graves (mordeduras en cara, cuello, manos o múltiples) se agrega inmunoglobulina antirrábica el día 0. La rabia tiene una letalidad del 100% una vez que aparecen los síntomas, por lo que la profilaxis post-exposición oportuna es la única forma de prevenir la muerte. El lavado inmediato de la herida con agua y jabón por 15 minutos es la primera medida."
  },
  {
    "id": 1068,
    "pregunta": "La vacuna BCG deja una cicatriz característica en el brazo. Si un niño de 3 meses no presenta cicatriz de BCG, ¿cuál es la conducta?",
    "opciones": {
      "A": "Revacunar inmediatamente",
      "B": "No revacunar; la ausencia de cicatriz no significa falta de protección",
      "C": "Realizar prueba de tuberculina antes de decidir",
      "D": "Aplicar doble dosis de BCG"
    },
    "respuesta": "B",
    "tema": "Vacunas - BCG",
    "origen": "vacunas",
    "explicacion": "La OMS y la normativa peruana actual NO recomiendan revacunar con BCG por ausencia de cicatriz. Estudios han demostrado que el 5-10% de los vacunados no desarrollan cicatriz visible, pero sí generan respuesta inmune celular protectora. La cicatriz depende de factores como la técnica de aplicación, la cepa vacunal y la respuesta individual de la piel. Revacunar no aporta beneficio adicional y aumenta el riesgo de reacciones locales."
  },
  {
    "id": 1069,
    "pregunta": "En la conservación de vacunas durante actividades extramurales (vacunación en campo), se utiliza el termo porta-vacunas. ¿Cuánto tiempo mantiene la temperatura adecuada con paquetes fríos correctamente preparados?",
    "opciones": {
      "A": "Hasta 2 horas",
      "B": "Hasta 6-8 horas dependiendo del tipo de termo y condiciones ambientales",
      "C": "Hasta 24 horas",
      "D": "Hasta 48 horas"
    },
    "respuesta": "B",
    "tema": "Vacunas - Cadena de frío",
    "origen": "vacunas",
    "explicacion": "El termo porta-vacunas mantiene la temperatura entre +2°C y +8°C durante 6-8 horas aproximadamente, dependiendo del tipo de termo, número de paquetes fríos, temperatura ambiental y frecuencia de apertura. Los paquetes fríos deben acondicionarse previamente (dejar a temperatura ambiente hasta que aparezca sudoración) para evitar congelar las vacunas adsorbidas. Se debe colocar un termómetro dentro del termo para monitorear la temperatura."
  },
  {
    "id": 1070,
    "pregunta": "La difteria es una enfermedad prevenible por vacuna que se caracteriza por la formación de pseudomembranas en la garganta. ¿Cuál es el mecanismo de protección de la vacuna?",
    "opciones": {
      "A": "Genera anticuerpos contra la bacteria Corynebacterium diphtheriae",
      "B": "Genera anticuerpos antitoxina que neutralizan la toxina diftérica, previniendo la enfermedad clínica",
      "C": "Elimina la bacteria del organismo",
      "D": "Estimula la inmunidad celular contra la bacteria"
    },
    "respuesta": "B",
    "tema": "Vacunas - Mecanismo de protección",
    "origen": "vacunas",
    "explicacion": "La vacuna contra difteria contiene toxoide diftérico (toxina inactivada con formaldehído). Los anticuerpos generados neutralizan la toxina diftérica, que es la responsable del daño tisular (miocarditis, neuropatía, obstrucción de vía aérea). La vacuna NO previene la colonización por la bacteria, pero sí previene la enfermedad clínica grave. Por eso una persona vacunada puede ser portadora asintomática pero no desarrollará la enfermedad."
  },
  {
    "id": 1071,
    "pregunta": "El tétanos neonatal se previene principalmente mediante la vacunación de la gestante con Td. ¿Cuántas dosis necesita una gestante que nunca fue vacunada para proteger al recién nacido?",
    "opciones": {
      "A": "1 sola dosis en el tercer trimestre",
      "B": "Al menos 2 dosis de Td durante el embarazo, con intervalo mínimo de 1 mes, la última al menos 2 semanas antes del parto",
      "C": "3 dosis con intervalo de 2 meses",
      "D": "No se puede vacunar durante el embarazo"
    },
    "respuesta": "B",
    "tema": "Vacunas - Tétanos neonatal",
    "origen": "vacunas",
    "explicacion": "Una gestante sin antecedente vacunal necesita al menos 2 dosis de Td para generar anticuerpos antitetánicos suficientes que se transfieran al feto por vía transplacentaria. La última dosis debe aplicarse al menos 2 semanas antes del parto para permitir la transferencia de IgG. El tétanos neonatal ocurre por contaminación del cordón umbilical con esporas de Clostridium tetani, especialmente en partos domiciliarios sin condiciones de asepsia."
  },
  {
    "id": 1072,
    "pregunta": "Después de un desastre natural (inundación), ¿qué vacuna se prioriza para la población afectada con heridas contaminadas?",
    "opciones": {
      "A": "Hepatitis A",
      "B": "Td (Tétanos-Difteria) según antecedente vacunal y tipo de herida",
      "C": "Influenza",
      "D": "Fiebre Amarilla"
    },
    "respuesta": "B",
    "tema": "Vacunas - Vacunación en desastres",
    "origen": "vacunas",
    "explicacion": "En situaciones de desastre con heridas contaminadas (tierra, agua estancada, objetos oxidados), la prioridad es la profilaxis antitetánica. Se evalúa el antecedente vacunal: si tiene esquema completo y última dosis hace menos de 5 años, no necesita refuerzo; si hace más de 5 años, se aplica refuerzo de Td; si no tiene antecedente o es desconocido, se aplica Td + inmunoglobulina antitetánica. Las esporas de C. tetani están en el suelo y el riesgo aumenta con heridas profundas y contaminadas."
  },
  {
    "id": 1073,
    "pregunta": "La vacuna contra Haemophilus influenzae tipo b (Hib) incluida en la Pentavalente previene principalmente:",
    "opciones": {
      "A": "Gripe común (influenza)",
      "B": "Meningitis bacteriana, neumonía y epiglotitis en menores de 5 años",
      "C": "Tuberculosis pulmonar",
      "D": "Infecciones urinarias"
    },
    "respuesta": "B",
    "tema": "Vacunas - Haemophilus influenzae tipo b",
    "origen": "vacunas",
    "explicacion": "El Haemophilus influenzae tipo b (Hib) es una bacteria (NO es el virus de la gripe/influenza, a pesar de la similitud del nombre). Antes de la vacunación, era la primera causa de meningitis bacteriana en menores de 5 años, con alta mortalidad (5-10%) y secuelas neurológicas (30%). También causa neumonía, epiglotitis, artritis séptica y celulitis. La vacuna conjugada redujo la incidencia de enfermedad invasiva por Hib en más del 99%."
  },
  {
    "id": 1074,
    "pregunta": "La erradicación de la poliomielitis es un objetivo global. ¿Cuál de los tres serotipos de poliovirus salvaje aún no ha sido erradicado?",
    "opciones": {
      "A": "Serotipo 1",
      "B": "Serotipo 2",
      "C": "Serotipo 3",
      "D": "Los tres serotipos siguen circulando"
    },
    "respuesta": "A",
    "tema": "Vacunas - Erradicación de polio",
    "origen": "vacunas",
    "explicacion": "El poliovirus salvaje tipo 2 fue declarado erradicado en 2015 y el tipo 3 en 2019. Solo el poliovirus salvaje tipo 1 continúa circulando en Afganistán y Pakistán. Por eso en 2016 se retiró el componente tipo 2 de la vacuna oral (OPV trivalente a bivalente). La estrategia actual combina IPV (inyectable, inactivada) con OPV bivalente (tipos 1 y 3) en países que aún la usan, mientras Perú usa exclusivamente IPV."
  },
  {
    "id": 1075,
    "pregunta": "¿Por qué las vacunas conjugadas son más efectivas que las polisacáridas en niños menores de 2 años?",
    "opciones": {
      "A": "Porque contienen más serotipos",
      "B": "Porque al conjugar el polisacárido con una proteína, convierten la respuesta T-independiente en T-dependiente, generando memoria inmunológica",
      "C": "Porque se administran por vía intradérmica",
      "D": "Porque contienen adyuvante de aluminio"
    },
    "respuesta": "B",
    "tema": "Vacunas - Vacunas conjugadas",
    "origen": "vacunas",
    "explicacion": "Los niños menores de 2 años tienen un sistema inmune inmaduro que no responde bien a antígenos polisacáridos puros (respuesta T-independiente, sin memoria). Al conjugar el polisacárido capsular con una proteína transportadora, se activan los linfocitos T helper, generando una respuesta T-dependiente con producción de anticuerpos de alta afinidad y células de memoria. Este principio se aplica en vacunas contra neumococo (PCV13), Hib y meningococo conjugadas."
  },
  {
    "id": 1076,
    "pregunta": "Los frascos vacíos y las agujas utilizadas en la vacunación se clasifican como residuos:",
    "opciones": {
      "A": "Comunes, se desechan en bolsa negra",
      "B": "Biocontaminados punzocortantes, se desechan en recipientes rígidos rotulados",
      "C": "Especiales, se devuelven al laboratorio",
      "D": "Reciclables, se separan para reutilización"
    },
    "respuesta": "B",
    "tema": "Vacunas - Manejo de residuos vacunales",
    "origen": "vacunas",
    "explicacion": "Las agujas, jeringas y frascos de vacunas (especialmente los de vacunas vivas) son residuos biocontaminados punzocortantes que deben descartarse en recipientes rígidos (cajas de bioseguridad) resistentes a punciones, con tapa, rotulados con el símbolo de riesgo biológico. NUNCA se deben reencapuchar las agujas (riesgo de pinchazo accidental), doblar ni romper. Los recipientes se llenan hasta 3/4 de su capacidad y se sellan para su tratamiento final."
  },
  {
    "id": 1077,
    "pregunta": "La vacuna contra la rubéola es especialmente importante en mujeres en edad fértil. ¿Cuál es la principal complicación que se busca prevenir?",
    "opciones": {
      "A": "Artritis reumatoide",
      "B": "Síndrome de rubéola congénita (SRC): malformaciones cardíacas, sordera, cataratas y retardo mental en el feto",
      "C": "Encefalitis en la madre",
      "D": "Infertilidad permanente"
    },
    "respuesta": "B",
    "tema": "Vacunas - Rubéola",
    "origen": "vacunas",
    "explicacion": "El síndrome de rubéola congénita (SRC) ocurre cuando una gestante no inmune se infecta con rubéola durante el primer trimestre del embarazo. El virus atraviesa la placenta y causa malformaciones graves: cardiopatía congénita (PCA, estenosis pulmonar), sordera neurosensorial, cataratas, microcefalia y retardo mental. El riesgo de SRC es del 90% si la infección ocurre antes de las 11 semanas. La vacunación previa al embarazo es la única prevención efectiva."
  },
  {
    "id": 1078,
    "pregunta": "Un niño de 2 años recibió solo 2 dosis de Pentavalente (a los 2 y 4 meses) y no regresó para la tercera dosis. ¿Se debe reiniciar el esquema?",
    "opciones": {
      "A": "Sí, se debe reiniciar desde la primera dosis",
      "B": "No, se continúa con la tercera dosis sin reiniciar; cada dosis previa cuenta independientemente del tiempo transcurrido",
      "C": "Se aplican las 3 dosis nuevamente por seguridad",
      "D": "Ya no se puede completar el esquema después de los 12 meses"
    },
    "respuesta": "B",
    "tema": "Vacunas - Esquemas atrasados",
    "origen": "vacunas",
    "explicacion": "El principio fundamental es: 'dosis aplicada, dosis válida'. No existen intervalos máximos entre dosis; solo intervalos mínimos. Aunque haya pasado mucho tiempo, las dosis previas generaron células de memoria inmunológica que se reactivarán con la siguiente dosis (respuesta anamnésica). Reiniciar esquemas es innecesario, costoso y expone al niño a dosis adicionales sin beneficio. Se completa el esquema con las dosis faltantes."
  },
  {
    "id": 1079,
    "pregunta": "La vacuna contra la Influenza se reformula cada año. ¿Cuál es la razón principal?",
    "opciones": {
      "A": "Porque la vacuna pierde potencia después de un año",
      "B": "Porque el virus de la Influenza muta constantemente (drift antigénico) y las cepas circulantes cambian cada temporada",
      "C": "Porque los anticuerpos del año anterior interfieren con la nueva vacuna",
      "D": "Por regulaciones farmacéuticas internacionales"
    },
    "respuesta": "B",
    "tema": "Vacunas - Influenza",
    "origen": "vacunas",
    "explicacion": "El virus de la Influenza sufre mutaciones puntuales constantes en sus proteínas de superficie (hemaglutinina y neuraminidasa), fenómeno llamado drift antigénico. Esto hace que los anticuerpos generados contra las cepas del año anterior no reconozcan eficientemente las nuevas variantes. La OMS monitorea las cepas circulantes globalmente y cada año recomienda la composición de la vacuna para el hemisferio sur y norte por separado."
  },
  {
    "id": 1080,
    "pregunta": "En el manejo de la cadena de frío, ¿qué se debe hacer ante un corte prolongado de energía eléctrica que afecta al refrigerador de vacunas?",
    "opciones": {
      "A": "Abrir el refrigerador frecuentemente para verificar la temperatura",
      "B": "Mantener cerrado el refrigerador, registrar la hora del corte, monitorear temperatura y activar el plan de contingencia",
      "C": "Trasladar inmediatamente todas las vacunas a otro establecimiento",
      "D": "Descartar todas las vacunas por precaución"
    },
    "respuesta": "B",
    "tema": "Vacunas - Cadena de frío",
    "origen": "vacunas",
    "explicacion": "Ante un corte de energía: 1) Mantener cerrado el refrigerador (conserva la temperatura por 4-6 horas si no se abre). 2) Registrar la hora del corte. 3) Monitorear la temperatura con termómetro de máxima y mínima. 4) Si el corte se prolonga, activar el plan de contingencia: trasladar las vacunas en termos con paquetes fríos a otro establecimiento con cadena de frío operativa. Abrir frecuentemente el refrigerador acelera la pérdida de frío."
  },
  {
    "id": 1081,
    "pregunta": "La parotiditis (paperas) es prevenida por el componente de la vacuna SPR. ¿Cuál es la complicación más temida de las paperas en varones adolescentes y adultos?",
    "opciones": {
      "A": "Meningitis viral",
      "B": "Orquitis (inflamación testicular) que puede causar infertilidad",
      "C": "Pancreatitis aguda",
      "D": "Sordera bilateral permanente"
    },
    "respuesta": "B",
    "tema": "Vacunas - Enfermedades prevenibles por vacuna",
    "origen": "vacunas",
    "explicacion": "La orquitis por paperas ocurre en el 20-30% de los varones postpuberales infectados. La inflamación testicular puede causar atrofia testicular y, en casos bilaterales, infertilidad. Otras complicaciones incluyen meningitis aséptica (1-10%), pancreatitis y sordera neurosensorial (rara pero permanente). La vacunación con SPR previene eficazmente estas complicaciones con una eficacia del 88% con 2 dosis."
  },
  {
    "id": 1082,
    "pregunta": "Si un niño necesita recibir inmunoglobulina y vacuna SPR simultáneamente, ¿cuál es la recomendación?",
    "opciones": {
      "A": "Se pueden aplicar juntas sin restricción",
      "B": "Se aplica la inmunoglobulina y se posterga la SPR por 3-6 meses porque los anticuerpos pasivos interfieren con la respuesta a la vacuna viva",
      "C": "Se aplica la SPR y se posterga la inmunoglobulina por 2 semanas",
      "D": "Se aplican en el mismo brazo"
    },
    "respuesta": "B",
    "tema": "Vacunas - Inmunoglobulinas y vacunas vivas",
    "origen": "vacunas",
    "explicacion": "Los anticuerpos contenidos en las inmunoglobulinas pueden neutralizar los virus vacunales vivos atenuados (SPR, Varicela) antes de que generen respuesta inmune, reduciendo la eficacia vacunal. Por eso se debe esperar 3-6 meses (según el tipo y dosis de inmunoglobulina) para aplicar vacunas vivas. Las vacunas inactivadas NO se afectan por inmunoglobulinas y pueden administrarse simultáneamente en sitios diferentes."
  },
  {
    "id": 1083,
    "pregunta": "La eficacia vacunal se mide en ensayos clínicos controlados, mientras que la efectividad vacunal se mide en:",
    "opciones": {
      "A": "Laboratorios de investigación",
      "B": "Condiciones reales de uso en la población (campo)",
      "C": "Modelos animales",
      "D": "Estudios in vitro"
    },
    "respuesta": "B",
    "tema": "Vacunas - Eficacia vs efectividad",
    "origen": "vacunas",
    "explicacion": "La eficacia se determina en condiciones ideales (ensayos clínicos controlados con selección estricta de participantes, cadena de frío perfecta, seguimiento riguroso). La efectividad mide el rendimiento real de la vacuna en la población general, donde influyen factores como cadena de frío imperfecta, técnica de aplicación variable, estado nutricional e inmunológico diverso. La efectividad suele ser menor que la eficacia."
  },
  {
    "id": 1084,
    "pregunta": "La vacuna contra Hepatitis B es producida mediante tecnología de ADN recombinante. ¿Qué significa esto?",
    "opciones": {
      "A": "Se obtiene del virus completo inactivado",
      "B": "Se produce insertando el gen del antígeno de superficie (HBsAg) en levaduras que lo sintetizan, sin usar el virus real",
      "C": "Se obtiene de pacientes recuperados de hepatitis B",
      "D": "Se produce atenuando el virus en cultivos celulares"
    },
    "respuesta": "B",
    "tema": "Vacunas - Tecnología recombinante",
    "origen": "vacunas",
    "explicacion": "La vacuna HvB recombinante se produce insertando el gen que codifica el antígeno de superficie del virus (HBsAg) en células de levadura (Saccharomyces cerevisiae). Las levaduras producen grandes cantidades de HBsAg puro, que se purifica y formula como vacuna. Al no contener material genético viral, es imposible que cause la enfermedad. Fue la primera vacuna producida por ingeniería genética aprobada para uso humano (1986)."
  },
  {
    "id": 1085,
    "pregunta": "Un niño de 6 meses va a viajar a una zona endémica de Fiebre Amarilla. ¿Se le puede aplicar la vacuna antiamarílica?",
    "opciones": {
      "A": "Sí, se aplica a cualquier edad en zonas endémicas",
      "B": "No, la vacuna antiamarílica está contraindicada en menores de 6 meses y no se recomienda entre 6-8 meses salvo situación de brote",
      "C": "Sí, pero a media dosis",
      "D": "Solo si tiene esquema completo de otras vacunas"
    },
    "respuesta": "B",
    "tema": "Vacunas - Fiebre Amarilla",
    "origen": "vacunas",
    "explicacion": "La vacuna antiamarílica está contraindicada en menores de 6 meses por el riesgo de encefalitis post-vacunal (el sistema nervioso central inmaduro es vulnerable al virus vacunal). Entre 6-8 meses solo se recomienda en situaciones de brote donde el riesgo de enfermedad supera el riesgo vacunal. En el esquema regular peruano se aplica a los 15 meses. Se recomienda no viajar con lactantes menores de 9 meses a zonas endémicas."
  },
  {
    "id": 1086,
    "pregunta": "Un niño con alergia al huevo documentada. ¿Puede recibir la vacuna SPR?",
    "opciones": {
      "A": "No, está absolutamente contraindicada",
      "B": "Sí, la SPR puede administrarse de forma segura en alérgicos al huevo porque se cultiva en fibroblastos de embrión de pollo, no en huevo",
      "C": "Solo si la alergia es leve",
      "D": "Solo en ambiente hospitalario con desensibilización previa"
    },
    "respuesta": "B",
    "tema": "Vacunas - Alergia al huevo",
    "origen": "vacunas",
    "explicacion": "La SPR se cultiva en fibroblastos de embrión de pollo, no en huevo de gallina, por lo que contiene cantidades ínfimas de proteína de huevo (ovoalbúmina) insuficientes para causar reacción alérgica. Múltiples estudios han demostrado que la SPR es segura en niños con alergia al huevo, incluso con antecedente de anafilaxia al huevo. La vacuna contra Influenza y Fiebre Amarilla sí se cultivan en huevos embrionados y requieren precaución en alérgicos severos."
  },
  {
    "id": 1087,
    "pregunta": "El término 'seroconversión' en el contexto de vacunación se refiere a:",
    "opciones": {
      "A": "La aparición de efectos adversos post-vacunales",
      "B": "El desarrollo de anticuerpos protectores detectables en sangre después de la vacunación",
      "C": "La conversión de una vacuna viva en inactivada",
      "D": "El cambio de serotipo del microorganismo"
    },
    "respuesta": "B",
    "tema": "Vacunas - Conceptos inmunológicos",
    "origen": "vacunas",
    "explicacion": "La seroconversión es el paso de un estado seronegativo (sin anticuerpos detectables) a seropositivo (con anticuerpos protectores) después de la vacunación o la infección natural. Es el indicador más directo de que la vacuna generó respuesta inmune. La tasa de seroconversión varía según la vacuna: HvB 95%, SPR 95-98%, Pentavalente >95%. Los no respondedores (que no seroconvierten) pueden necesitar dosis adicionales."
  },
  {
    "id": 1088,
    "pregunta": "La vacuna contra el neumococo conjugada 13-valente (PCV13) protege contra los serotipos de Streptococcus pneumoniae que causan la mayoría de enfermedades invasivas en niños. ¿Cuáles son las principales enfermedades que previene?",
    "opciones": {
      "A": "Solo otitis media",
      "B": "Neumonía, meningitis, bacteriemia y otitis media aguda",
      "C": "Solo neumonía",
      "D": "Faringitis y amigdalitis"
    },
    "respuesta": "B",
    "tema": "Vacunas - Neumococo",
    "origen": "vacunas",
    "explicacion": "El Streptococcus pneumoniae (neumococo) es la principal causa bacteriana de neumonía adquirida en la comunidad, meningitis bacteriana (después de la introducción de la vacuna Hib), bacteriemia oculta y otitis media aguda en niños. La PCV13 cubre los 13 serotipos más frecuentes causantes de enfermedad invasiva. Además, genera inmunidad de mucosas que reduce la portación nasofaringea, contribuyendo a la protección indirecta de no vacunados."
  },
  {
    "id": 1089,
    "pregunta": "La vacuna contra la Hepatitis A se administra a los 15 meses en el Perú. ¿Cuál es la vía de transmisión de la Hepatitis A que justifica la vacunación infantil?",
    "opciones": {
      "A": "Vía sanguínea y sexual",
      "B": "Vía fecal-oral, a través de agua y alimentos contaminados",
      "C": "Vía respiratoria por gotitas",
      "D": "Transmisión vertical madre-hijo"
    },
    "respuesta": "B",
    "tema": "Vacunas - Hepatitis A",
    "origen": "vacunas",
    "explicacion": "La Hepatitis A se transmite por vía fecal-oral: ingesta de agua o alimentos contaminados con heces de personas infectadas, o contacto directo persona a persona. Es altamente prevalente en países con deficiente saneamiento básico. Los niños pequeños suelen tener infecciones asintomáticas pero son grandes diseminadores del virus. La vacunación infantil interrumpe la cadena de transmisión y protege indirectamente a los adultos."
  },
  {
    "id": 1090,
    "pregunta": "En la preparación de paquetes fríos para el termo porta-vacunas, ¿por qué se deben acondicionar (dejar a temperatura ambiente) antes de colocarlos?",
    "opciones": {
      "A": "Para que duren más tiempo",
      "B": "Para evitar que congelen las vacunas adsorbidas al estar a temperatura de congelación",
      "C": "Para reducir el peso del termo",
      "D": "Para que el termo cierre correctamente"
    },
    "respuesta": "B",
    "tema": "Vacunas - Cadena de frío",
    "origen": "vacunas",
    "explicacion": "Los paquetes fríos recién sacados del congelador están a -15°C a -20°C. Si se colocan directamente en el termo, pueden congelar las vacunas adsorbidas (Pentavalente, DPT, Td, HvB, Neumococo), destruyendo irreversiblemente el adyuvante de aluminio. El acondicionamiento consiste en dejarlos a temperatura ambiente hasta que aparezca 'sudoración' (condensación) en la superficie y al agitarlos se escuche movimiento de agua líquida, indicando que alcanzaron 0°C."
  },
  {
    "id": 1091,
    "pregunta": "El personal de salud debe recibir un esquema de vacunación específico por su exposición ocupacional. ¿Cuáles son las vacunas prioritarias para este grupo?",
    "opciones": {
      "A": "Solo Hepatitis B e Influenza",
      "B": "Hepatitis B, Influenza, Tdap, SPR, Varicela y COVID-19",
      "C": "Solo las vacunas del esquema infantil",
      "D": "Solo Influenza anual"
    },
    "respuesta": "B",
    "tema": "Vacunas - Vacunación del personal de salud",
    "origen": "vacunas",
    "explicacion": "El personal de salud tiene doble riesgo: adquirir enfermedades de los pacientes y transmitirlas a pacientes vulnerables. Por eso necesita: HvB (3 dosis + verificar seroconversión), Influenza (anual), Tdap (refuerzo cada 10 años), SPR (2 dosis si no tiene evidencia de inmunidad), Varicela (2 dosis si es susceptible) y COVID-19. La vacunación del personal es una medida de seguridad del paciente y salud ocupacional."
  },
  {
    "id": 1092,
    "pregunta": "Una mujer descubre que está embarazada de 6 semanas y hace 2 semanas recibió la vacuna SPR. ¿Cuál es la conducta correcta?",
    "opciones": {
      "A": "Interrumpir el embarazo por riesgo de malformaciones",
      "B": "Tranquilizar a la paciente: no se ha demostrado daño fetal por vacunación inadvertida con SPR en el embarazo, pero se debe hacer seguimiento",
      "C": "Administrar inmunoglobulina para neutralizar la vacuna",
      "D": "Repetir la vacuna para asegurar protección"
    },
    "respuesta": "B",
    "tema": "Vacunas - Vacunación inadvertida en embarazo",
    "origen": "vacunas",
    "explicacion": "Aunque la SPR está contraindicada en el embarazo por riesgo teórico, los registros de vigilancia de miles de mujeres vacunadas inadvertidamente durante el embarazo NO han demostrado aumento de malformaciones congénitas ni síndrome de rubéola congénita por la cepa vacunal. La vacunación inadvertida NO es indicación de interrupción del embarazo. Se debe tranquilizar a la paciente y hacer seguimiento prenatal habitual."
  },
  {
    "id": 1093,
    "pregunta": "La tasa de deserción vacunal mide la diferencia entre la cobertura de la primera y tercera dosis de una vacuna. Si la cobertura de Pentavalente 1 es 95% y Pentavalente 3 es 80%, ¿cuál es la tasa de deserción?",
    "opciones": {
      "A": "10%",
      "B": "15.8%",
      "C": "15%",
      "D": "20%"
    },
    "respuesta": "B",
    "tema": "Vacunas - Indicadores del programa",
    "origen": "vacunas",
    "explicacion": "La tasa de deserción se calcula: (Cobertura 1ra dosis - Cobertura 3ra dosis) / Cobertura 1ra dosis x 100 = (95-80)/95 x 100 = 15.8%. Una tasa de deserción mayor al 5% indica problemas de acceso, calidad de atención o falta de seguimiento. Se deben implementar estrategias como búsqueda activa de desertores, visitas domiciliarias y mejora de la calidad del servicio para reducir esta tasa."
  },
  {
    "id": 1094,
    "pregunta": "La vacunación extramural (fuera del establecimiento) es una estrategia fundamental para alcanzar coberturas óptimas. ¿En qué situaciones se implementa?",
    "opciones": {
      "A": "Solo durante campañas nacionales de vacunación",
      "B": "En comunidades dispersas, zonas de difícil acceso, instituciones educativas, mercados y durante barridos y campañas",
      "C": "Solo cuando hay brotes epidemiológicos",
      "D": "Exclusivamente en zonas urbanas"
    },
    "respuesta": "B",
    "tema": "Vacunas - Estrategias de vacunación",
    "origen": "vacunas",
    "explicacion": "La vacunación extramural lleva las vacunas a donde está la población, eliminando barreras de acceso geográfico. Incluye: brigadas móviles a comunidades dispersas, vacunación en instituciones educativas (VPH, dT), puestos fijos en mercados y plazas, vacunación casa por casa en barridos, y campañas masivas. Es especialmente importante en zonas rurales y periurbanas donde la población tiene dificultad para acudir al establecimiento."
  },
  {
    "id": 1095,
    "pregunta": "La vacuna contra COVID-19 se incorporó al esquema de vacunación. ¿Cuál fue el principal mecanismo de acción de las vacunas de ARNm (Pfizer, Moderna)?",
    "opciones": {
      "A": "Contienen el virus SARS-CoV-2 inactivado",
      "B": "Contienen ARN mensajero que instruye a las células a producir la proteína Spike, generando respuesta inmune sin usar el virus",
      "C": "Contienen bacterias atenuadas que estimulan la inmunidad",
      "D": "Contienen anticuerpos preformados contra el virus"
    },
    "respuesta": "B",
    "tema": "Vacunas - COVID-19",
    "origen": "vacunas",
    "explicacion": "Las vacunas de ARNm representan una tecnología innovadora: contienen ARN mensajero sintético que codifica la proteína Spike (S) del SARS-CoV-2. Al inyectarse, las células del huésped leen el ARNm y producen la proteína S, que es reconocida como extraña por el sistema inmune, generando anticuerpos y células T. El ARNm se degrada rápidamente (horas) y NO modifica el ADN celular. Esta plataforma permite desarrollo rápido ante nuevas variantes."
  },
  {
    "id": 1096,
    "pregunta": "La Semana de Vacunación en las Américas (SVA) es una iniciativa anual de la OPS. ¿Cuál es su objetivo principal?",
    "opciones": {
      "A": "Investigar nuevas vacunas",
      "B": "Promover la equidad y el acceso a la vacunación, cerrar brechas de cobertura y llegar a poblaciones no alcanzadas",
      "C": "Capacitar exclusivamente al personal de salud",
      "D": "Evaluar la calidad de las vacunas disponibles"
    },
    "respuesta": "B",
    "tema": "Vacunas - Estrategias de vacunación",
    "origen": "vacunas",
    "explicacion": "La SVA se celebra cada año en abril y busca: vacunar a poblaciones de difícil acceso, cerrar brechas de cobertura, promover la equidad en el acceso a vacunas, sensibilizar a la población sobre la importancia de la vacunación y fortalecer los programas nacionales de inmunización. Es una oportunidad para realizar barridos vacunales, completar esquemas atrasados y llegar a comunidades indígenas, fronterizas y migrantes."
  },
  {
    "id": 1097,
    "pregunta": "La tasa de abandono de la tercera dosis de Pentavalente es un indicador clave del programa de inmunizaciones. ¿Qué valor se considera aceptable?",
    "opciones": {
      "A": "Menor al 10%",
      "B": "Menor al 5%",
      "C": "Menor al 15%",
      "D": "Menor al 20%"
    },
    "respuesta": "B",
    "tema": "Vacunas - Indicadores del programa",
    "origen": "vacunas",
    "explicacion": "Una tasa de abandono menor al 5% indica que el programa tiene buena capacidad de seguimiento y retención de los niños. Tasas superiores al 5% sugieren problemas como: horarios inadecuados, maltrato al usuario, falta de información a los padres, desabastecimiento de vacunas, barreras geográficas o culturales. Se requieren estrategias activas como llamadas telefónicas, visitas domiciliarias y coordinación con agentes comunitarios."
  },
  {
    "id": 1098,
    "pregunta": "La vacuna contra el tétanos protege mediante la generación de anticuerpos antitoxina. ¿Por qué una persona que padeció tétanos y sobrevivió NO queda inmune y necesita vacunarse?",
    "opciones": {
      "A": "Porque el tétanos destruye las células de memoria",
      "B": "Porque la cantidad de toxina que causa la enfermedad es tan pequeña que no genera respuesta inmune suficiente para conferir inmunidad natural",
      "C": "Porque el Clostridium tetani muta constantemente",
      "D": "Porque los antibióticos eliminan la respuesta inmune"
    },
    "respuesta": "B",
    "tema": "Vacunas - Tétanos",
    "origen": "vacunas",
    "explicacion": "El tétanos es una de las pocas enfermedades que NO confiere inmunidad natural. La toxina tetanósica (tetanospasmina) es tan potente que cantidades ínfimas (nanogramos) causan enfermedad grave, pero esta cantidad es insuficiente para estimular una respuesta inmune protectora. Por eso, incluso después de sobrevivir al tétanos, la persona sigue siendo susceptible y debe completar su esquema de vacunación con toxoide tetánico."
  },
  {
    "id": 1099,
    "pregunta": "En la planificación de una campaña de vacunación, el cálculo de la meta de vacunación se basa en:",
    "opciones": {
      "A": "El número de vacunas disponibles en almacén",
      "B": "La población objetivo según grupo etario, la cobertura actual y la meta de cobertura deseada",
      "C": "Solo el número de personal de salud disponible",
      "D": "El presupuesto asignado para la campaña"
    },
    "respuesta": "B",
    "tema": "Vacunas - Planificación de vacunación",
    "origen": "vacunas",
    "explicacion": "La meta de vacunación se calcula identificando la población objetivo (ej: niños menores de 1 año), determinando la cobertura actual (ej: 80%) y estableciendo la meta deseada (ej: 95%). La brecha (15%) multiplicada por la población objetivo da el número de niños a vacunar. Se agrega un factor de pérdida (desperdicio) según el tipo de vacuna y presentación (frascos multidosis tienen mayor desperdicio que monodosis)."
  },
  {
    "id": 1100,
    "pregunta": "La vacuna contra la varicela post-exposición también puede prevenirse con inmunoglobulina específica (VZIG). ¿En qué grupo está indicada la VZIG en lugar de la vacuna?",
    "opciones": {
      "A": "Adultos sanos susceptibles",
      "B": "Recién nacidos de madres con varicela periparto, gestantes susceptibles e inmunosuprimidos severos que no pueden recibir vacuna viva",
      "C": "Niños mayores de 5 años",
      "D": "Personal de salud vacunado previamente"
    },
    "respuesta": "B",
    "tema": "Vacunas - Inmunoprofilaxis pasiva",
    "origen": "vacunas",
    "explicacion": "La VZIG (inmunoglobulina específica contra varicela-zoster) se indica en personas de alto riesgo que no pueden recibir la vacuna viva: recién nacidos cuyas madres desarrollaron varicela entre 5 días antes y 2 días después del parto (riesgo de varicela neonatal grave con 30% de mortalidad), gestantes susceptibles (riesgo de varicela congénita y neumonía materna) e inmunosuprimidos severos. Debe administrarse dentro de las 96 horas post-exposición."
  }
];
