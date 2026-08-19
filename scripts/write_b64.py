import sys, base64
mode = sys.argv[1]
b = sys.argv[2].encode("ascii")
open("scripts/build_draft_609.py", mode, encoding="utf-8").write(base64.b64decode(b).decode("utf-8"))
print("Wrote", mode)
