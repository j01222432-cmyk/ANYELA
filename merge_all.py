import json, re, os

base = os.path.dirname(os.path.abspath(__file__))
files = [
    'preguntas_1_50.js',
    'preguntas_51_100.js', 
    'preguntas_101_150.js',
    'preguntas_151_200.js',
    'preguntas_201_250.js',
    'preguntas_251_300.js',
    'preguntas_301_350.js',
    'preguntas_351_400.js',
    'preguntas_401_450.js',
    'preguntas_451_500.js'
]

all_items = []
for f in files:
    path = os.path.join(base, f)
    with open(path, 'r', encoding='utf-8') as fh:
        content = fh.read()
    match = re.search(r'=\s*(\[.*\])\s*;', content, re.DOTALL)
    if match:
        arr = json.loads(match.group(1))
        all_items.extend(arr)
        print(f'{f}: {len(arr)} preguntas')
    else:
        print(f'{f}: NO ENCONTRADO')

print(f'\nTotal: {len(all_items)} preguntas')

out_path = os.path.join(base, 'preguntas666.js')
with open(out_path, 'w', encoding='utf-8') as fh:
    fh.write('const preguntas666 = ')
    json.dump(all_items, fh, ensure_ascii=False, indent=2)
    fh.write(';\n')

print(f'preguntas666.js creado exitosamente!')
