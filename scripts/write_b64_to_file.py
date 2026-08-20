import sys, base64, os
dest = sys.argv[1]
b64_data = sys.argv[2]
os.makedirs(os.path.dirname(dest), exist_ok=True)
with open(dest, 'w', encoding='utf-8') as f:
    f.write(base64.b64decode(b64_data).decode('utf-8'))
print(f'Wrote to {dest}')
