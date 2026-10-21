#!/usr/bin/env python3
"""Generate SKYTOOLS institutional Open Graph preview from original brand assets."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
LOGO = ROOT / 'assets/img/skytools-logo-original-safe.png'
OUTPUT = ROOT / 'assets/img/og-skytools-main.png'
WIDTH, HEIGHT = 1200, 630

logo = Image.open(LOGO).convert('RGBA')
card = Image.new('RGBA', (WIDTH, HEIGHT), (5, 23, 35, 255))
d = ImageDraw.Draw(card)
d.rectangle((760, 0, WIDTH, HEIGHT), fill=(7, 38, 54, 255))
d.polygon([(795, 0), (880, 0), (665, 630), (570, 630)], fill=(6, 30, 43, 255))
d.line((780, -20, 500, 655), fill=(32, 230, 108, 255), width=3)
for x in (925, 1005, 1085, 1165):
    d.line((x, 80, x, 565), fill=(20, 65, 75, 255), width=2)
for y in (125, 205, 285, 365, 445, 525):
    d.line((840, y, 1200, y), fill=(20, 65, 75, 255), width=2)
d.rounded_rectangle((1080, 45, 1165, 53), radius=2, fill=(24, 242, 118, 255))
for radius in (90, 49, 15):
    d.ellipse((1000-radius, 305-radius, 1000+radius, 305+radius),
              outline=(28, 176, 121, 255), width=3)
for coords in ((1000, 215, 1000, 175), (1000, 395, 1000, 430),
               (910, 305, 875, 305), (1090, 305, 1125, 305)):
    d.line(coords, fill=(23, 225, 111, 255), width=5)
d.line([(950, 318), (1000, 284), (1050, 318), (1050, 356),
        (950, 356), (950, 318)], fill=(60, 240, 163, 255), width=5, joint='curve')
d.line((980, 356, 980, 320, 1000, 307, 1020, 320, 1020, 356),
       fill=(60, 240, 163, 255), width=3)
logo.thumbnail((565, 171), Image.Resampling.LANCZOS)
card.alpha_composite(logo, (70, 113))

font_bold = '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'
font_medium = '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
d = ImageDraw.Draw(card)
d.text((70, 312), 'INGENIERÍA QUE', font=ImageFont.truetype(font_bold, 46),
       fill=(249, 251, 253, 255))
d.text((70, 375), 'CONECTA MUNDOS', font=ImageFont.truetype(font_bold, 46),
       fill=(28, 243, 118, 255))
d.text((74, 480), 'RPAS   ·   3D   ·   FPV   ·   INMERSIVAS',
       font=ImageFont.truetype(font_medium, 22), fill=(195, 222, 232, 255))
d.line((72, 552, 220, 552), fill=(30, 244, 116, 255), width=5)
d.text((73, 570), 'skytools.org', font=ImageFont.truetype(font_medium, 20),
       fill=(176, 212, 226, 255))
card.convert('RGB').quantize(colors=16, method=Image.Quantize.FASTOCTREE,
                              dither=Image.Dither.NONE).save(OUTPUT, optimize=True)
print(f'{OUTPUT} ({OUTPUT.stat().st_size} bytes)')

# Build asset: assets/img/og-skytools-main.png
