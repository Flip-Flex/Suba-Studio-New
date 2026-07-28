with open('src/data/categoryContent.ts', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('\\"', '"')

with open('src/data/categoryContent.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print('Fixed!')
