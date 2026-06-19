# -*- coding: utf-8 -*-
import re, json, os
os.chdir(os.path.dirname(os.path.abspath(__file__)))

def parse_exam(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()
    questions = []
    parts = re.split(r'\n(\d+)\.\s+', text)
    i = 1
    while i < len(parts) - 1:
        body = parts[i+1]
        opt_match = re.split(r'\n([A-D])\.\s+', body)
        if len(opt_match) >= 9:
            pregunta = opt_match[0].strip().replace('\r','').replace('\n',' ')
            opciones = {}
            for j in range(1, min(len(opt_match)-1, 8), 2):
                letra = opt_match[j]
                texto = opt_match[j+1].strip().split('\n')[0].strip().replace('\r','')
                opciones[letra] = texto
            if len(opciones) == 4:
                questions.append({"pregunta": pregunta, "opciones": opciones})
        i += 2
    return questions

# Respuestas correctas del examen 1
resp1 = "BABAB BDBCD DACAD CCBDB ACBAA CBBAD AADDB DCAAD BBBDB BCBAB DDBCA BDBAB CBADC BABCB AADBA DACAB DDBCA CAABC DACBD"
r1 = resp1.replace(" ","")

# Temas del examen 1
t1 = [
"Cuidado Integral - Prevención y control del Cáncer","Gestión - Clasificación de establecimientos","Gestión - Planificación y Presupuesto","Salud Pública - Brotes y epidemias","Ética - Bioética",
"Salud Pública - Exposición a metales pesados","Salud Pública - Bioseguridad","Salud Pública - Vigilancia epidemiológica","Cuidado Integral - Paquete del adolescente","Ética - Interculturalidad",
"Cuidado Integral - Paquete del adolescente","Cuidado Integral - Enfermedades no transmisibles","Salud Pública - ASIS","Gestión - Clima y cultura organizacional","Cuidado Integral - Tuberculosis",
"Gestión - Planeamiento estratégico","Gestión - Clasificación de establecimientos","Ética - Función pública","Salud Pública - Niveles de prevención","Salud Comunitaria - Sistemas de información",
"Salud Pública - Historia natural de la enfermedad","Ética - Interculturalidad","Cuidado Integral - Prevención y control de anemia","Gestión - Control de inventario y medicamentos","Salud Comunitaria - Intervenciones comunitarias",
"Gestión - Clima y cultura organizacional","Ética - Interculturalidad","Cuidado Integral - Emergencias obstétricas","Gestión - Planeamiento estratégico","Salud Pública - ASIS",
"Salud Comunitaria - Gestión de residuos sólidos","Ética - Función pública","Salud Pública - Epidemiología","Cuidado Integral - Prevención y control de anemia","Cuidado Integral - Emergencias obstétricas",
"Gestión - Calidad de servicios de salud","Ética - Función pública","Cuidado Integral - Paquete del adulto mayor","Cuidado Integral - Tuberculosis","Investigación - Aspectos éticos",
"Cuidado Integral - Vacunación y ESAVI","Salud Pública - Vigilancia epidemiológica","Ética - Interculturalidad","Cuidado Integral - Paquete del niño","Ética - Derechos de los usuarios",
"Cuidado Integral - Enfermedades no transmisibles","Salud Pública - Prevención y control de infecciones","Ética - Parto vertical","Gestión - Planeamiento estratégico","Salud Comunitaria - Gestión de residuos sólidos",
"Cuidado Integral - Paquete del niño","Cuidado Integral - Vacunación y ESAVI","Salud Pública - Niveles de prevención","Cuidado Integral - Enfermedades no transmisibles","Cuidado Integral - Paquete del adolescente",
"Investigación - Instrumentos de recolección","Gestión - Liderazgo de servicios de salud","Gestión - Clasificación de establecimientos","Salud Comunitaria - Trabajo intersectorial","Cuidado Integral - Enfermedades metaxénicas y zoonóticas",
"Cuidado Integral - Paquete del niño","Gestión - Calidad de servicios de salud","Ética - Interculturalidad","Cuidado Integral - Paquete del niño","Salud Pública - Vigilancia epidemiológica",
"Salud Pública - Niveles de prevención","Ética - Bioética","Salud Pública - Brotes y epidemias","Cuidado Integral - Enfermedades no transmisibles","Cuidado Integral - Salud mental",
"Cuidado Integral - Tuberculosis","Gestión - Telesalud","Salud Pública - Historia natural de la enfermedad","Cuidado Integral - Enfermedades metaxénicas y zoonóticas","Cuidado Integral - Climaterio y menopausia",
"Cuidado Integral - Vacunación y ESAVI","Cuidado Integral - Paquete del adulto mayor","Ética - Interculturalidad","Gestión - Historia clínica","Gestión - Calidad de servicios de salud",
"Gestión - Telesalud","Salud Pública - Bioseguridad","Salud Pública - ASIS","Salud Pública - Emergencias y desastres","Cuidado Integral - Prevención y control de anemia",
"Cuidado Integral - IAAS","Gestión - Administración de servicios","Ética - Interculturalidad","Salud Comunitaria - Determinantes ambientales","Salud Comunitaria - Determinantes sociales",
"Salud Pública - Emergencias y desastres","Salud Pública - Promoción de la salud","Cuidado Integral - Vacunación y ESAVI","Cuidado Integral - Enfermedades no transmisibles","Ética - Interculturalidad",
"Cuidado Integral - Alimentación y nutrición","Gestión - Planeamiento estratégico","Cuidado Integral - Paquete del adolescente","Ética - Medicina tradicional","Salud Comunitaria - Control de vectores",
]

# Respuestas examen 2
resp2 = "AADCB ADBAC CDCBC BCBAB BDADB AADCC DBDBC CDDBA DADCD BBAAB DCBCA ADBAB BCADB CDBAC BCABD CDCBA CABDB BCADB BABDA BBAAB"
r2 = resp2.replace(" ","")

t2 = [
"Cuidado Integral - Paquete del niño","Ética - Interculturalidad","Gestión - Planeamiento estratégico","Salud Pública - Niveles de prevención","Cuidado Integral - Tuberculosis",
"Ética - Función pública","Gestión - Clasificación de establecimientos","Investigación - Metodología","Salud Pública - Causalidad y riesgo","Cuidado Integral - Prevención y control de anemia",
"Salud Pública - Epidemiología","Investigación - Procesamiento y análisis de datos","Ética - Función pública","Investigación - Metodología","Investigación - Procesamiento y análisis de datos",
"Cuidado Integral - Paquete del niño","Gestión - Planeamiento estratégico","Investigación - Tipos de investigación","Salud Pública - Prevención y control de infecciones","Gestión - Control de inventario y medicamentos",
"Gestión - Calidad de servicios de salud","Gestión - Clima y cultura organizacional","Cuidado Integral - Paquete del joven","Gestión - Planificación y Presupuesto","Salud Comunitaria - Determinantes sociales",
"Salud Pública - Conceptos básicos","Ética - Interculturalidad","Cuidado Integral - Paquete del adulto mayor","Cuidado Integral - Prevención y control del Cáncer","Salud Pública - Vigilancia epidemiológica",
"Cuidado Integral - IAAS","Cuidado Integral - Emergencias obstétricas","Cuidado Integral - VIH","Ética - Bioética","Cuidado Integral - Vacunación y ESAVI",
"Ética - Deontología","Salud Pública - Promoción de la salud","Salud Pública - Pruebas diagnósticas","Salud Pública - Promoción de la salud","Salud Pública - Prevención y control de infecciones",
"Cuidado Integral - Paquete del adolescente","Cuidado Integral - Cuidado integral por curso de vida","Cuidado Integral - Enfermedades no transmisibles","Cuidado Integral - Salud bucal","Investigación - Publicación de resultados",
"Cuidado Integral - Enfermedades metaxénicas y zoonóticas","Salud Pública - Vigilancia epidemiológica","Gestión - Clasificación de establecimientos","Gestión - Clima y cultura organizacional","Gestión - Planeamiento estratégico",
"Investigación - Conceptos básicos","Gestión - Referencia y contrarreferencia","Gestión - Planeamiento estratégico","Gestión - Coordinación intersectorial","Gestión - Planeamiento estratégico",
"Gestión - Calidad de servicios de salud","Cuidado Integral - Vacunación y ESAVI","Investigación - Conceptos básicos","Cuidado Integral - Paquete prenatal","Salud Pública - Vigilancia epidemiológica",
"Investigación - Metodología","Gestión - Control de inventario y medicamentos","Salud Pública - Demografía en salud","Salud Pública - Epidemiología","Gestión - Uso racional de medicamentos",
"Gestión - Uso racional de medicamentos","Cuidado Integral - Enfermedades metaxénicas y zoonóticas","Salud Pública - Promoción de la salud","Investigación - Tipos de investigación","Salud Pública - ASIS",
"Cuidado Integral - Paquete del niño","Salud Pública - Historia natural de la enfermedad","Salud Pública - Epidemiología","Investigación - Aspectos éticos","Ética - Deontología",
"Gestión - Uso racional de medicamentos","Investigación - Enfoques de investigación","Ética - Derechos de los usuarios","Ética - Derechos de los usuarios","Ética - Interculturalidad",
"Salud Pública - Brotes y epidemias","Investigación - Tipos de investigación","Cuidado Integral - Tuberculosis","Gestión - Planeamiento estratégico","Salud Pública - Conceptos básicos",
"Ética - Derechos de los usuarios","Gestión - Referencia y contrarreferencia","Ética - Bioética","Cuidado Integral - Paquete del adulto mayor","Cuidado Integral - Alimentación y nutrición",
"Salud Comunitaria - Participación social y comunitaria","Salud Pública - Uso racional de medicamentos","Gestión - Historia clínica","Ética - Parto vertical","Gestión - Uso racional de medicamentos",
"Salud Pública - Conceptos básicos","Cuidado Integral - Vacunación y ESAVI","Cuidado Integral - Prevención y control de anemia","Gestión - Telesalud","Cuidado Integral - VIH",
]

# Parsear
e1 = parse_exam(os.path.join('..', 'examen1.txt'))
e2 = parse_exam(os.path.join('..', 'examen2.txt'))

# Asignar respuestas y temas al examen 1
all_questions = []
for i, q in enumerate(e1):
    q['id'] = i + 1
    q['respuesta'] = r1[i] if i < len(r1) else 'A'
    q['tema'] = t1[i] if i < len(t1) else 'Por clasificar'
    q['origen'] = 'examen'
    all_questions.append(q)

# Examen 2 - solo preguntas que no estan en examen 1 (comparar por primeras 50 chars)
e1_texts = set(q['pregunta'][:50] for q in e1)
next_id = 101
for i, q in enumerate(e2):
    if q['pregunta'][:50] not in e1_texts:
        q['id'] = next_id
        q['respuesta'] = r2[i] if i < len(r2) else 'A'
        q['tema'] = t2[i] if i < len(t2) else 'Por clasificar'
        q['origen'] = 'examen'
        all_questions.append(q)
        next_id += 1

print(f"Preguntas de examenes: {len(all_questions)}")

# === PREGUNTAS NUEVAS ===
nuevas = [
["Las Funciones Esenciales de Salud Publica (FESP) son un conjunto de competencias y acciones necesarias para alcanzar el objetivo central de la salud publica. Cuantas FESP renovadas se reconocen actualmente?","9","11","8","12","B","Salud Publica - Conceptos basicos"],
["En epidemiologia, la medida que expresa la probabilidad de que un individuo expuesto a un factor de riesgo desarrolle la enfermedad en comparacion con uno no expuesto se denomina:","Odds ratio","Riesgo relativo","Riesgo atribuible","Tasa de mortalidad","B","Salud Publica - Epidemiologia"],
["Segun los criterios de causalidad de Bradford Hill, cual es el unico criterio considerado indispensable?","Consistencia","Especificidad","Temporalidad","Plausibilidad biologica","C","Salud Publica - Causalidad y riesgo"],
["La piramide poblacional de un pais muestra una base ancha y una cuspide estrecha. A que tipo de estructura poblacional corresponde?","Poblacion envejecida","Poblacion estacionaria","Poblacion joven o expansiva","Poblacion regresiva","C","Salud Publica - Demografia en salud"],
["En la historia natural de la enfermedad, el periodo prepatogenico se caracteriza por la interaccion de tres elementos fundamentales conocidos como la triada ecologica. Cuales son?","Huesped, agente y vector","Agente, huesped y medio ambiente","Agente, vector y medio ambiente","Huesped, vector y reservorio","B","Salud Publica - Historia natural de la enfermedad"],
["La prevencion cuaternaria tiene como objetivo evitar el dano producido por intervenciones medicas innecesarias. Cual de las siguientes acciones corresponde a este nivel?","Vacunacion contra la influenza","Tamizaje de cancer de mama","Evitar la medicalizacion innecesaria de procesos normales","Rehabilitacion de pacientes con secuelas de ACV","C","Salud Publica - Niveles de prevencion"],
["Una prueba diagnostica tiene alta especificidad. Esto significa que:","Detecta correctamente a la mayoria de los enfermos","Tiene pocos falsos positivos entre los sanos","Tiene alto valor predictivo negativo","Es util como prueba de tamizaje masivo","B","Salud Publica - Pruebas diagnosticas"],
["Cuando una enfermedad se presenta de forma habitual y constante en una region geografica determinada, se denomina:","Epidemia","Pandemia","Endemia","Brote","C","Salud Publica - Brotes y epidemias"],
["Los cinco momentos del lavado de manos segun la OMS incluyen: antes del contacto con el paciente, antes de realizar una tarea aseptica, despues de la exposicion a fluidos corporales, despues del contacto con el paciente y:","Despues de retirarse los guantes","Antes de colocarse los guantes","Despues del contacto con el entorno del paciente","Antes de ingresar al establecimiento","C","Salud Publica - Prevencion y control de infecciones"],
["Los determinantes sociales estructurales de la salud incluyen:","Condiciones de vivienda y acceso a agua potable","Gobernanza, politicas macroeconomicas, politicas sociales y valores culturales","Estilos de vida y conductas de riesgo individuales","Factores biologicos y geneticos","B","Salud Comunitaria - Determinantes sociales"],
["La ficha familiar es un instrumento que permite al personal de salud identificar los riesgos de la familia. Cual es su principal utilidad en la atencion primaria?","Registrar las atenciones realizadas en el establecimiento","Identificar riesgos individuales y familiares para planificar intervenciones","Reemplazar la historia clinica individual","Cumplir con los indicadores de gestion del establecimiento","B","Salud Comunitaria - Sectorizacion y ficha familiar"],
["El sistema HIS en el Peru es utilizado principalmente para:","Registrar las referencias y contrarreferencias","Registrar las actividades y atenciones de salud realizadas en los establecimientos","Gestionar el inventario de medicamentos","Realizar la vigilancia epidemiologica de enfermedades transmisibles","B","Salud Comunitaria - Sistemas de informacion"],
["La inocuidad alimentaria se refiere a:","El valor nutricional de los alimentos consumidos","La garantia de que los alimentos no causaran dano al consumidor cuando se preparen y consuman","La cantidad suficiente de alimentos para la poblacion","La disponibilidad de alimentos organicos en el mercado","B","Salud Comunitaria - Alimentacion y nutricion"],
["En salud ocupacional, los riesgos psicosociales en el trabajador de salud incluyen:","Exposicion a radiaciones ionizantes","Estres laboral, burnout, acoso laboral y violencia en el trabajo","Manipulacion de sustancias quimicas peligrosas","Riesgos ergonomicos por posturas inadecuadas","B","Salud Comunitaria - Salud ocupacional"],
["El modelo de salud mental comunitaria en el Peru se implementa a traves de los CSMC. Cual es su principal caracteristica?","Brindan atencion exclusivamente a pacientes con trastornos severos","Ofrecen atencion ambulatoria especializada en salud mental con enfoque comunitario y territorial","Funcionan como hospitales psiquiatricos descentralizados","Solo realizan actividades de promocion y prevencion","B","Salud Comunitaria - Salud mental comunitaria"],
["La Carta de Ottawa (1986) establece cinco areas de accion para la promocion de la salud. Cual de las siguientes NO es una de ellas?","Crear ambientes favorables para la salud","Fortalecer la accion comunitaria","Garantizar el acceso universal a medicamentos","Desarrollar aptitudes personales","C","Salud Publica - Promocion de la salud"],
["En bioseguridad, los residuos biocontaminados generados en establecimientos de salud se identifican con bolsas de color:","Negro","Amarillo","Rojo","Azul","C","Salud Publica - Bioseguridad"],
["La gestion del riesgo de desastres en salud comprende tres procesos fundamentales: estimacion del riesgo, prevencion y reduccion del riesgo, y:","Evaluacion de danos","Preparacion, respuesta y rehabilitacion","Reconstruccion de infraestructura","Capacitacion del personal","B","Salud Publica - Emergencias y desastres"],
["El Proceso de Atencion de Enfermeria (PAE) consta de cinco etapas. Cual es el orden correcto?","Diagnostico, valoracion, planificacion, ejecucion, evaluacion","Valoracion, diagnostico, planificacion, ejecucion, evaluacion","Planificacion, valoracion, diagnostico, ejecucion, evaluacion","Valoracion, planificacion, diagnostico, ejecucion, evaluacion","B","Cuidado Integral - Proceso de atencion de enfermeria"],
["El esquema regular de vacunacion del nino incluye la vacuna BCG al recien nacido. Contra que formas de tuberculosis protege principalmente?","Tuberculosis pulmonar del adulto","Formas graves como meningitis tuberculosa y TB miliar en ninos","Tuberculosis extrapulmonar en adultos","Tuberculosis multidrogoresistente","B","Cuidado Integral - Vacunacion y ESAVI"],
["La cadena de frio es el sistema de conservacion, transporte y distribucion de vacunas. Cual es el rango de temperatura recomendado para la mayoria de las vacunas?","-15 a -25 grados C","+2 a +8 grados C","0 a +2 grados C","+8 a +15 grados C","B","Cuidado Integral - Vacunacion y ESAVI"],
["La suplementacion preventiva con hierro en ninos nacidos a termino con adecuado peso al nacer se inicia a partir de los:","2 meses con 2 mg/kg/dia","4 meses con 2 mg/kg/dia","6 meses con 2 mg/kg/dia","1 mes con 2 mg/kg/dia","B","Cuidado Integral - Prevencion y control de anemia"],
["Para el tamizaje de cancer de cuello uterino, la prueba recomendada en mujeres de 30 a 49 anos en el primer nivel de atencion es:","Papanicolaou anual","Inspeccion visual con acido acetico (IVAA)","Colposcopia directa","Biopsia de cuello uterino","B","Cuidado Integral - Prevencion y control del Cancer"],
["En el tratamiento de tuberculosis sensible, el esquema de primera linea consta de dos fases. La primera fase dura:","1 mes con 4 medicamentos","2 meses con 4 medicamentos","3 meses con 3 medicamentos","2 meses con 3 medicamentos","B","Cuidado Integral - Tuberculosis"],
["La transmision materno infantil del VIH puede ocurrir durante el embarazo, parto y lactancia. Cual es la medida mas efectiva para prevenirla?","Cesarea electiva en todos los casos","Tratamiento antirretroviral a la gestante y profilaxis al recien nacido","Suspension de lactancia materna exclusivamente","Tamizaje en el tercer trimestre solamente","B","Cuidado Integral - VIH"],
["En la clasificacion nutricional del nino menor de 5 anos, cuando el indicador Talla/Edad se encuentra por debajo de -2 DS, se clasifica como:","Desnutricion aguda","Desnutricion cronica","Desnutricion global","Talla baja normal","B","Cuidado Integral - Alimentacion y nutricion"],
["El tamizaje neonatal permite la deteccion temprana de enfermedades raras. Cual de las siguientes se detecta mediante este tamizaje en el Peru?","Sindrome de Down","Hipotiroidismo congenito","Cardiopatia congenita","Displasia de cadera","B","Cuidado Integral - Enfermedades raras y huerfanas"],
["Las IAAS se definen como aquellas que el paciente adquiere mientras recibe tratamiento. El tiempo minimo de hospitalizacion para considerar una IAAS es de:","24 horas","48 horas","72 horas","12 horas","B","Cuidado Integral - IAAS"],
["En la atencion prenatal reenfocada, el numero minimo de controles prenatales recomendados es:","4 controles","6 controles","8 controles","10 controles","B","Cuidado Integral - Paquete prenatal"],
["El puerperio inmediato comprende las primeras:","2 horas postparto","24 horas postparto","48 horas postparto","72 horas postparto","B","Cuidado Integral - Embarazo, parto y puerperio"],
["El codigo de etica del Colegio de Enfermeros establece que la enfermera debe respetar la autonomia del paciente. Esto implica:","Tomar decisiones por el paciente cuando este confundido","Respetar el derecho del paciente a tomar decisiones informadas sobre su cuidado","Informar a la familia antes que al paciente","Seguir las indicaciones medicas sin consultar al paciente","B","Etica - Deontologia"],
["El derecho a la informacion del usuario incluye recibir informacion completa sobre su diagnostico en terminos:","Tecnicos y cientificos exclusivamente","Comprensibles y adecuados a su nivel cultural","Escritos y firmados por el medico tratante","Proporcionados solo a los familiares directos","B","Etica - Derechos de los usuarios"],
["La adecuacion intercultural incluye la implementacion de la casa materna de espera. Cual es su principal objetivo?","Brindar alojamiento a gestantes de zonas alejadas para garantizar el parto institucional","Funcionar como centro de rehabilitacion para puerperas","Ofrecer atencion medica especializada a gestantes de alto riesgo","Capacitar a parteras tradicionales","A","Etica - Interculturalidad"],
["En investigacion, un estudio de cohortes se caracteriza por:","Partir de la enfermedad y buscar la exposicion previa","Seguir a un grupo de expuestos y no expuestos en el tiempo para comparar la aparicion de la enfermedad","Medir prevalencia en un momento determinado","Asignar aleatoriamente la intervencion a los participantes","B","Investigacion - Tipos de investigacion"],
["La operacionalizacion de variables en una investigacion consiste en:","Definir el tamano de la muestra","Transformar las variables abstractas en indicadores medibles y observables","Seleccionar el diseno de investigacion adecuado","Elaborar el marco teorico del estudio","B","Investigacion - Metodologia"],
["El ROF de un establecimiento de salud es un documento que:","Establece los procedimientos operativos de cada servicio","Define la estructura organica, funciones generales y especificas de la entidad","Programa las actividades anuales del establecimiento","Determina el presupuesto institucional","B","Gestion - Documentos normativos"],
["Las Redes Integradas de Salud (RIS) tienen como finalidad:","Centralizar la atencion en hospitales de alta complejidad","Articular los establecimientos de salud para garantizar la continuidad de la atencion","Reemplazar el sistema de referencia y contrarreferencia","Administrar exclusivamente los recursos financieros","B","Gestion - Redes integradas de salud"],
["La seguridad del paciente es un componente fundamental de la calidad en salud. Cual de las siguientes es una meta internacional de seguridad del paciente?","Reducir el tiempo de espera en consulta externa","Identificar correctamente a los pacientes","Aumentar la productividad del personal de salud","Mejorar la infraestructura del establecimiento","B","Gestion - Calidad de servicios de salud"],
["El valor predictivo positivo (VPP) de una prueba diagnostica depende de:","Solo de la sensibilidad de la prueba","La prevalencia de la enfermedad en la poblacion","Solo de la especificidad de la prueba","El tamano de la muestra del estudio","B","Salud Publica - Pruebas diagnosticas"],
["La tasa de mortalidad infantil mide las defunciones de menores de:","5 anos por cada 1000 nacidos vivos","1 ano por cada 1000 nacidos vivos","28 dias por cada 1000 nacidos vivos","1 ano por cada 10000 habitantes","B","Salud Publica - Demografia en salud"],
]

next_id_new = 201
for n in nuevas:
    all_questions.append({
        "id": next_id_new,
        "pregunta": n[0],
        "opciones": {"A": n[1], "B": n[2], "C": n[3], "D": n[4]},
        "respuesta": n[5],
        "origen": "nueva",
        "tema": n[6]
    })
    next_id_new += 1

# Re-numerar IDs secuencialmente
for i, q in enumerate(all_questions):
    q['id'] = i + 1

print(f"Total preguntas: {len(all_questions)}")

# Escribir JS
with open('preguntas.js', 'w', encoding='utf-8') as f:
    f.write('const preguntas = ')
    json.dump(all_questions, f, ensure_ascii=False, indent=2)
    f.write(';\n')

# Verificar
t = open('preguntas.js', encoding='utf-8').read()
print(f"Archivo size: {len(t)} chars")
for ch in ['ñ','á','é','í','ó','ú','¿']:
    print(f"  {ch}: {t.count(ch)}")
bad = t.count(chr(195))
print(f"  Bad chars (Ã): {bad}")
print("DONE!" if bad == 0 else "WARNING: hay caracteres corruptos!")
