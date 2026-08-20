import sys, os, base64
dest = sys.argv[1]
b64_str = sys.argv[2]
data = base64.b64decode(b64_str).decode('utf-8')
os.makedirs(os.path.dirname(dest), exist_ok=True)
with open(dest, 'w', encoding='utf-8') as f:
    f.write(data)
print(f'Wrote {len(data)} chars ({len(data.split())} words) to {dest}')
