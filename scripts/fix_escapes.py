import re

file_path = 'src/app/learning/2026/8/how-can-ap-economics-teachers-distinguish-authentic-graph-shifting-analysis-from-ai-generated-macroeconomic-writeups/page.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace LaTeX style arrows with clean HTML entities or unicode
replacements = [
    (r'\\uparrow', '&uarr;'),
    (r'\\downarrow', '&darr;'),
    (r'\\Longleftrightarrow', '&hArr;'),
    (r'\\longrightarrow', '&rarr;'),
    (r'\\to', '&rarr;'),
    (r'\\Delta', '&Delta;'),
    (r'\\pi', '&pi;'),
]

for old, new in replacements:
    content = re.sub(old, new, content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Replaced LaTeX escape sequences successfully.")
