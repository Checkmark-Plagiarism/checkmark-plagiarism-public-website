import sys, base64
filepath = sys.argv[1]
b64_str = sys.argv[2]
with open(filepath, 'w', encoding='utf-8') as f:
    f.write(base64.b64decode(b64_str.encode('ascii')).decode('utf-8'))
print('Saved', filepath)
