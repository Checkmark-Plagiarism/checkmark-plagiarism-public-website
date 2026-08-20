import sys, base64
target = sys.argv[1]
b64_file = sys.argv[2]
data = open(b64_file, 'r', encoding='utf-8').read().strip()
missing_padding = len(data) % 4
if missing_padding != 0:
    data += '=' * (4 - missing_padding)
open(target, 'w', encoding='utf-8').write(base64.b64decode(data).decode('utf-8'))
print('Decoded', target)
