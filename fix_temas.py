import json, unicodedata

t = open('preguntas.js', 'r', encoding='utf-8').read()
data = json.loads(t.replace('const preguntas = ', '').rstrip().rstrip(';'))

# Funcion para quitar tildes
def strip_accents(s):
    return ''.join(c for c in unicodedata.normalize('NFD', s) if unicodedata.category(c) != 'Mn')

# Primero recopilar todos los temas CON tildes (los correctos)
temas_con_tilde = {}
for q in data:
    tema = q['tema']
    key = strip_accents(tema).lower()
    # Preferir la version con tildes (mas caracteres unicode)
    if key not in temas_con_tilde or len(tema.encode('utf-8')) > len(temas_con_tilde[key].encode('utf-8')):
        temas_con_tilde[key] = tema

# Ahora reemplazar todos los temas con la version correcta
fixed = 0
for q in data:
    key = strip_accents(q['tema']).lower()
    correcto = temas_con_tilde.get(key, q['tema'])
    if q['tema'] != correcto:
        q['tema'] = correcto
        fixed += 1

temas = sorted(set(q['tema'] for q in data))
print(f"Temas corregidos: {fixed}")
print(f"Temas unicos: {len(temas)}")
for t in temas:
    print(f"  {t}")

out = 'const preguntas = ' + json.dumps(data, ensure_ascii=False, indent=2) + ';\n'
with open('preguntas.js', 'w', encoding='utf-8') as f:
    f.write(out)
print(f"\nGuardado: {len(data)} preguntas, {len(out)} chars")
