import json

t = open('preguntas.js', 'r', encoding='utf-8').read()
data = json.loads(t.replace('const preguntas = ', '').rstrip().rstrip(';'))

print(f"Before: Q243 = {data[242]['pregunta'][:70]}")

# Replace index 242 (id=243)
data[242] = {
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
    "tema": "Salud Publica - Demografia en salud"
}

# Check duplicates
seen = {}
dups = []
for q in data:
    k = q['pregunta'][:80].lower().strip()
    if k in seen:
        dups.append(f"  #{seen[k]} = #{q['id']}")
    else:
        seen[k] = q['id']

print(f"After: Q243 = {data[242]['pregunta'][:70]}")
print(f"Total: {len(data)}")
print(f"Duplicados: {len(dups)}")
for d in dups:
    print(d)

# Write
out = 'const preguntas = ' + json.dumps(data, ensure_ascii=False, indent=2) + ';\n'
with open('preguntas.js', 'w', encoding='utf-8') as f:
    f.write(out)

print(f"Escrito: {len(out)} chars")
