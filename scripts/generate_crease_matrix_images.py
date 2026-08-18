import os
import math
from PIL import Image, ImageDraw, ImageFont

output_dir = os.path.join(
    "public", "images", "blog", "2026", "08",
    "optimizing-folding-carton-grain-direction-crease-matrix-tolerances"
)
os.makedirs(output_dir, exist_ok=True)

def create_hero_image():
    w, h = 1376, 768
    img = Image.new("RGB", (w, h), color=(15, 23, 42)) # Slate 900
    draw = ImageDraw.Draw(img)
    
    # Background gradient
    for y in range(h):
        r = int(15 + (y / h) * (20 - 15) + math.sin(y / 50) * 2)
        g = int(23 + (y / h) * (37 - 23))
        b = int(42 + (y / h) * (65 - 42) + math.cos(y / 60) * 4)
        draw.line([(0, y), (w, y)], fill=(r, g, b))
        
    # Grid lines (engineering blueprint style)
    for x in range(0, w, 40):
        draw.line([(x, 0), (x, h)], fill=(30, 41, 59), width=1)
    for y in range(0, h, 40):
        draw.line([(0, y), (w, y)], fill=(30, 41, 59), width=1)
        
    # Accent glowing lines
    for i in range(5):
        y_pos = 180 + i * 90
        draw.line([(60, y_pos), (w - 60, y_pos)], fill=(14, 165, 233), width=1)
        
    # Technical box illustration (Carton Dieline / Tooling Schematic)
    # Left schematic card
    draw.rounded_rectangle([80, 120, 640, 640], radius=16, fill=(24, 34, 58), outline=(56, 189, 248), width=2)
    
    # Carton Blank Wireframe on Left Card
    draw.rectangle([140, 220, 580, 520], outline=(125, 211, 252), width=3)
    # Scorelines
    draw.line([(250, 220), (250, 520)], fill=(244, 63, 94), width=2) # Score 1
    draw.line([(360, 220), (360, 520)], fill=(56, 189, 248), width=2) # Score 2
    draw.line([(470, 220), (470, 520)], fill=(244, 63, 94), width=2) # Score 3
    draw.line([(550, 220), (550, 520)], fill=(56, 189, 248), width=2) # Score 4 (Glue Flap)
    
    # Grain Direction Arrow
    draw.line([(180, 370), (540, 370)], fill=(251, 191, 36), width=3)
    draw.polygon([(540, 362), (560, 370), (540, 378)], fill=(251, 191, 36))
    
    # Right schematic card (Crease Cross Section)
    draw.rounded_rectangle([680, 120, 1296, 640], radius=16, fill=(24, 34, 58), outline=(99, 102, 241), width=2)
    
    # Creasing rule male die
    draw.rectangle([940, 180, 1020, 320], fill=(71, 85, 105), outline=(148, 163, 184), width=2)
    draw.arc([940, 290, 1020, 350], start=0, end=180, fill=(226, 232, 240), width=4)
    
    # Paperboard sheet
    draw.rectangle([740, 360, 1236, 410], fill=(217, 119, 6), outline=(245, 158, 11), width=2)
    # Delamination shear lines inside board
    for ly in [372, 385, 398]:
        draw.line([(900, ly), (1060, ly)], fill=(254, 243, 199), width=2)
        
    # Female Matrix Counter Die
    draw.rectangle([740, 412, 920, 520], fill=(30, 41, 59), outline=(99, 102, 241), width=2)
    draw.rectangle([1040, 412, 1236, 520], fill=(30, 41, 59), outline=(99, 102, 241), width=2)
    
    # Dimension Callouts
    draw.line([(920, 460), (1040, 460)], fill=(56, 189, 248), width=2)
    draw.polygon([(920, 455), (910, 460), (920, 465)], fill=(56, 189, 248))
    draw.polygon([(1040, 455), (1050, 460), (1040, 465)], fill=(56, 189, 248))
    
    # Header Overlay Badge
    draw.rounded_rectangle([80, 40, 560, 95], radius=8, fill=(3, 105, 161), outline=(56, 189, 248), width=1)
    
    try:
        font_lg = ImageFont.truetype("arial.ttf", 20)
        font_md = ImageFont.truetype("arial.ttf", 16)
        font_sm = ImageFont.truetype("arial.ttf", 13)
        font_bold = ImageFont.truetype("arialbd.ttf", 18)
        font_title = ImageFont.truetype("arialbd.ttf", 22)
    except:
        font_lg = font_md = font_sm = font_bold = font_title = ImageFont.load_default()
        
    draw.text((95, 50), "PM PACKAGING TECHNICAL ENGINEERING LAB", fill=(255, 255, 255), font=font_bold)
    draw.text((95, 72), "Grain Direction & Crease Matrix Optimization", fill=(186, 230, 253), font=font_sm)
    
    draw.text((105, 145), "GRAIN ALIGNMENT & FOLDER-GLUER PRE-BREAK", fill=(56, 189, 248), font=font_lg)
    draw.text((180, 390), "Machine Direction (MD) Grain Vector", fill=(251, 191, 36), font=font_md)
    draw.text((140, 545), "Score 1 (180° Pre-Break)", fill=(244, 63, 94), font=font_sm)
    draw.text((360, 545), "Score 3 (180° Pre-Break)", fill=(244, 63, 94), font=font_sm)
    draw.text((140, 580), "CBR Range: 30% - 50% | High-Speed Erection @ 400+ CPM", fill=(148, 163, 184), font=font_sm)
    
    draw.text((710, 145), "PRECISION CREASE MATRIX DELAMINATION GEOMETRY", fill=(165, 180, 252), font=font_lg)
    draw.text((950, 210), "2-Pt Rule (Rt)", fill=(226, 232, 240), font=font_sm)
    draw.text((930, 475), "Matrix Width (W)", fill=(56, 189, 248), font=font_sm)
    draw.text((740, 560), "W = Rt + (k * T) | Tolerance: ±0.001 in (0.025 mm)", fill=(251, 191, 36), font=font_bold)
    draw.text((740, 595), "Pertinax Counter Die | Zero Clay Coat Cracking Protocol", fill=(148, 163, 184), font=font_sm)
    
    hero_path = os.path.join(output_dir, "hero.jpg")
    img.save(hero_path, "JPEG", quality=92)
    print("Created:", hero_path)

def create_image_1():
    w, h = 1376, 768
    img = Image.new("RGB", (w, h), color=(17, 24, 39)) # Gray 900
    draw = ImageDraw.Draw(img)
    
    # Gradient backdrop
    for y in range(h):
        val = int(17 + (y / h) * 20)
        draw.line([(0, y), (w, y)], fill=(val, val + 5, val + 15))
        
    for x in range(0, w, 50):
        draw.line([(x, 0), (x, h)], fill=(31, 41, 55), width=1)
    for y in range(0, h, 50):
        draw.line([(0, y), (w, y)], fill=(31, 41, 55), width=1)
        
    try:
        font_title = ImageFont.truetype("arialbd.ttf", 24)
        font_lg = ImageFont.truetype("arialbd.ttf", 18)
        font_md = ImageFont.truetype("arial.ttf", 15)
        font_sm = ImageFont.truetype("arial.ttf", 13)
        font_bold = ImageFont.truetype("arialbd.ttf", 15)
    except:
        font_title = font_lg = font_md = font_sm = font_bold = ImageFont.load_default()
        
    # Top banner
    draw.rounded_rectangle([60, 30, 1316, 95], radius=12, fill=(30, 58, 138), outline=(96, 165, 250), width=2)
    draw.text((85, 48), "PM PACKAGING TECHNICAL DIE COUNTER & CBR TESTING PROTOCOL", fill=(255, 255, 255), font=font_title)
    
    # 3 Columns for Technical Comparison
    cols = [
        ("Solid Bleached Sulfate (SBS)", 60, 450, (30, 41, 59), (56, 189, 248), [
            "• 100% Virgin Bleached Chemical Pulp",
            "• MD:CD Taber Ratio: 1.8:1 - 2.2:1",
            "• Scott Bond Strength: > 140 J/m²",
            "• Delaminates smoothly into 4-6 micro plies",
            "• Matrix Formula: W = Rt + 1.50 * T",
            "• Optimal CBR Target: 35% ± 5%",
            "• Best for: Pharma, High-Speed Cosmetics"
        ]),
        ("Coated Unbleached Kraft (CUK)", 480, 870, (30, 41, 59), (245, 158, 11), [
            "• Virgin Long-Fiber Softwood Kraft",
            "• MD:CD Taber Ratio: 2.4:1 - 3.0:1",
            "• Highest Tear & Columnar Compression",
            "• Requires High Platen Die Tonnage",
            "• Matrix Formula: W = Rt + 1.60 * T",
            "• Aggressive 180° Pre-Break Required",
            "• Best for: Beverage 12-Packs, Heavy Hardware"
        ]),
        ("Recycled Multi-Ply (CCNB/CRB)", 900, 1290, (30, 41, 59), (239, 68, 68), [
            "• Multi-Ply Post-Consumer Recycled Core",
            "• MD:CD Taber Ratio: 2.0:1 - 2.8:1",
            "• Scott Bond Strength: 70 - 100 J/m²",
            "• Sensitive to Crease Channel Depth (D=0.95T)",
            "• Matrix Formula: W = Rt + 1.40 * T",
            "• Vulnerable to Low Humidity Cracking",
            "• Best for: CPG Dry Foods & Household Goods"
        ])
    ]
    
    for title, x1, x2, bg, border_col, points in cols:
        draw.rounded_rectangle([x1, 120, x2, 690], radius=16, fill=bg, outline=border_col, width=2)
        draw.rounded_rectangle([x1 + 10, 130, x2 - 10, 180], radius=8, fill=(15, 23, 42))
        draw.text((x1 + 20, 145), title, fill=border_col, font=font_lg)
        
        y_cursor = 210
        for pt in points:
            draw.text((x1 + 25, y_cursor), pt, fill=(226, 232, 240), font=font_md)
            y_cursor += 42
            
        # Mini diagram box inside each column
        draw.rounded_rectangle([x1 + 20, 520, x2 - 20, 660], radius=10, fill=(15, 23, 42), outline=(71, 85, 105), width=1)
        draw.text((x1 + 35, 535), "Converting Stability Index:", fill=(148, 163, 184), font=font_sm)
        
        # Progress bar
        bar_w = x2 - x1 - 70
        draw.rectangle([x1 + 35, 565, x1 + 35 + bar_w, 585], fill=(51, 65, 85))
        pct = 0.95 if "SBS" in title else (0.85 if "CUK" in title else 0.70)
        draw.rectangle([x1 + 35, 565, x1 + 35 + int(bar_w * pct), 585], fill=border_col)
        draw.text((x1 + 35, 600), f"Runnability: {int(pct*100)}% @ 450 CPM", fill=(255, 255, 255), font=font_bold)
        draw.text((x1 + 35, 625), "USMCA / Baja Converting Facility", fill=(148, 163, 184), font=font_sm)
        
    img1_path = os.path.join(output_dir, "image_1.jpg")
    img.save(img1_path, "JPEG", quality=92)
    print("Created:", img1_path)

def create_image_2():
    w, h = 1376, 768
    img = Image.new("RGB", (w, h), color=(15, 23, 42))
    draw = ImageDraw.Draw(img)
    
    for y in range(h):
        val = int(15 + (y / h) * 25)
        draw.line([(0, y), (w, y)], fill=(val, val + 5, val + 20))
        
    try:
        font_title = ImageFont.truetype("arialbd.ttf", 24)
        font_lg = ImageFont.truetype("arialbd.ttf", 18)
        font_md = ImageFont.truetype("arial.ttf", 15)
        font_sm = ImageFont.truetype("arial.ttf", 13)
        font_bold = ImageFont.truetype("arialbd.ttf", 15)
    except:
        font_title = font_lg = font_md = font_sm = font_bold = ImageFont.load_default()
        
    draw.rounded_rectangle([60, 30, 1316, 95], radius=12, fill=(19, 78, 74), outline=(45, 212, 191), width=2)
    draw.text((85, 48), "HIGH-SPEED FOLDER-GLUER 180° PRE-BREAKING & OEE IMPACT", fill=(255, 255, 255), font=font_title)
    
    # Left Card: Pre-break sword mechanics
    draw.rounded_rectangle([60, 120, 670, 690], radius=16, fill=(30, 41, 59), outline=(45, 212, 191), width=2)
    draw.text((85, 145), "Bobst High-Speed Pre-Breaking Sequence", fill=(45, 212, 191), font=font_lg)
    
    draw.rounded_rectangle([85, 195, 645, 320], radius=10, fill=(15, 23, 42), outline=(71, 85, 105), width=1)
    draw.text((105, 210), "Score 1 (Glue Flap): 180° Inward Pre-Break", fill=(255, 255, 255), font=font_bold)
    draw.text((105, 240), "• Folded flat over stationary hardened steel sword", fill=(203, 213, 225), font=font_sm)
    draw.text((105, 265), "• Fractures virgin fiber memory bonds by 65%", fill=(203, 213, 225), font=font_sm)
    draw.text((105, 290), "• Re-opened flat before cold adhesive application", fill=(203, 213, 225), font=font_sm)
    
    draw.rounded_rectangle([85, 340, 645, 465], radius=10, fill=(15, 23, 42), outline=(71, 85, 105), width=1)
    draw.text((105, 355), "Score 3 (Body Crease): 165°-180° Pre-Break", fill=(255, 255, 255), font=font_bold)
    draw.text((105, 385), "• Twisted belt pre-break mechanism at 400 m/min", fill=(203, 213, 225), font=font_sm)
    draw.text((105, 410), "• Eliminates asymmetrical box squaring (parallelogramming)", fill=(203, 213, 225), font=font_sm)
    draw.text((105, 435), "• Balances torque between opposing carton pairs", fill=(203, 213, 225), font=font_sm)
    
    draw.rounded_rectangle([85, 485, 645, 660], radius=10, fill=(15, 23, 42), outline=(71, 85, 105), width=1)
    draw.text((105, 500), "Quality Assurance & Opening Force Test", fill=(251, 191, 36), font=font_bold)
    draw.text((105, 530), "• TAPPI T 577 Bending Resistance Verification", fill=(203, 213, 225), font=font_sm)
    draw.text((105, 555), "• Continuous optical glue bead inspection", fill=(203, 213, 225), font=font_sm)
    draw.text((105, 580), "• Opening force reduced from 145g to 52g (-64%)", fill=(52, 211, 153), font=font_bold)
    draw.text((105, 615), "PM Packaging Baja Converting Center Protocol", fill=(148, 163, 184), font=font_sm)
    
    # Right Card: OEE & Cartoning Performance Comparison
    draw.rounded_rectangle([705, 120, 1316, 690], radius=16, fill=(30, 41, 59), outline=(96, 165, 250), width=2)
    draw.text((730, 145), "Cartoning Line OEE & Reliability Impact (380 CPM)", fill=(96, 165, 250), font=font_lg)
    
    draw.rectangle([730, 200, 1290, 240], fill=(15, 23, 42))
    draw.text((745, 212), "Operational Metric", fill=(148, 163, 184), font=font_bold)
    draw.text((960, 212), "Standard Carton", fill=(239, 68, 68), font=font_bold)
    draw.text((1130, 212), "PM Engineered", fill=(52, 211, 153), font=font_bold)
    
    metrics = [
        ("Line Speed (CPM)", "340 (Derated)", "380 (Max Rated)"),
        ("Line Jams / Hour", "4.2 jams/hr", "0.18 jams/hr"),
        ("Opening Force", "145 g-force", "52 g-force"),
        ("Crease Ratio (CBR)", "68% (Stiff)", "34% (Optimal)"),
        ("Line Scrap Rate", "3.15%", "0.22%"),
        ("Total Line OEE", "71.4%", "91.8% (+20.4%)")
    ]
    
    y_m = 250
    for label, before, after in metrics:
        draw.rectangle([730, y_m, 1290, y_m + 38], fill=(24, 34, 58) if (y_m // 38) % 2 == 0 else (15, 23, 42))
        draw.text((745, y_m + 10), label, fill=(226, 232, 240), font=font_sm)
        draw.text((960, y_m + 10), before, fill=(248, 113, 113), font=font_sm)
        draw.text((1130, y_m + 10), after, fill=(52, 211, 153), font=font_bold)
        y_m += 42
        
    draw.rounded_rectangle([730, 520, 1290, 660], radius=10, fill=(15, 23, 42), outline=(59, 130, 246), width=1)
    draw.text((750, 540), "Annual Economic Impact per Packaging Line:", fill=(251, 191, 36), font=font_bold)
    draw.text((750, 570), "• Labor & Line Clearance Recovery: $185,000", fill=(203, 213, 225), font=font_sm)
    draw.text((750, 595), "• Scrap & Product Re-Work Reduction: $140,000", fill=(203, 213, 225), font=font_sm)
    draw.text((750, 620), "• Total Net Annual Savings: $485,000 (Two Shifts)", fill=(52, 211, 153), font=font_bold)
    
    img2_path = os.path.join(output_dir, "image_2.jpg")
    img.save(img2_path, "JPEG", quality=92)
    print("Created:", img2_path)

create_hero_image()
create_image_1()
create_image_2()
