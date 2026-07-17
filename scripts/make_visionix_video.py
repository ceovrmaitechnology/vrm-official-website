"""
Visionix AI – Promo Video Generator  (no ImageMagick needed)
Composes a ~12-second MP4 from 4 gallery images + AI voice narration.
Images are resized/cropped to 1280x720, cross-faded at 0.5s.
"""

from moviepy.editor import (
    ImageClip, AudioFileClip, concatenate_videoclips
)
from PIL import Image
import numpy as np
import os, shutil

BASE = r"c:\Users\ADMIN\Downloads\vrm-official-website-main\vrm-official-website-main"
SRC_IMAGES = [
    os.path.join(BASE, "src", "assets", "images", "visionix", "visionix-image.png"),
    os.path.join(BASE, "src", "assets", "images", "visionix", "visionix-image-2.png"),
    os.path.join(BASE, "src", "assets", "images", "visionix", "visionix-image-3.png"),
    os.path.join(BASE, "src", "assets", "images", "visionix", "visionix-image-4.png"),
]
AUDIO   = os.path.join(BASE, "public", "assets", "images", "visionix", "voice.wav")
OUT_MP4 = os.path.join(BASE, "public", "assets", "images", "visionix", "visionix-promo.mp4")

W, H       = 1280, 720
SLIDE_DUR  = 3.0   # seconds each
FADE_DUR   = 0.45  # cross-fade overlap

def resize_cover(img_path, target_w, target_h):
    """Resize + center-crop to fill target dimensions, return numpy array."""
    img = Image.open(img_path).convert("RGB")
    iw, ih = img.size
    scale = max(target_w / iw, target_h / ih)
    new_w, new_h = int(iw * scale), int(ih * scale)
    img = img.resize((new_w, new_h), Image.LANCZOS)
    left = (new_w - target_w) // 2
    top  = (new_h - target_h) // 2
    img  = img.crop((left, top, left + target_w, top + target_h))
    return np.array(img)

print("Building slides…")
slides = []
for p in SRC_IMAGES:
    arr   = resize_cover(p, W, H)
    clip  = (
        ImageClip(arr)
        .set_duration(SLIDE_DUR)
        .fadein(FADE_DUR)
        .fadeout(FADE_DUR)
    )
    slides.append(clip)

print("Concatenating with cross-fade…")
final = concatenate_videoclips(slides, method="compose", padding=-FADE_DUR)

# Attach audio (trim to video length)
audio_clip = AudioFileClip(AUDIO)
audio_dur  = min(audio_clip.duration, final.duration)
audio_clip = audio_clip.subclip(0, audio_dur)
final = final.set_audio(audio_clip).set_duration(final.duration)

print(f"Rendering to {OUT_MP4}  ({final.duration:.1f}s)…")
final.write_videofile(
    OUT_MP4,
    fps=24,
    codec="libx264",
    audio_codec="aac",
    preset="fast",
    verbose=False,
    logger=None,
)
print("Done! ✓")
