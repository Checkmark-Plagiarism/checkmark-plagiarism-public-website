import sys, base64
dest = sys.argv[1]
b64_data = sys.argv[2]
with open(dest, 'a', encoding='utf-8') as f:
    f.write(base64.b64decode(b64_data).decode('utf-8'))
print(f'Appended to {dest}')
