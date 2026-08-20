import sys, base64
target = sys.argv[1]
mode = sys.argv[2]
data = sys.argv[3].encode('utf-8')
open(target, mode, encoding='utf-8').write(base64.b64decode(data).decode('utf-8'))
print(f'Wrote {len(data)} bytes to {target} (mode: {mode})')
