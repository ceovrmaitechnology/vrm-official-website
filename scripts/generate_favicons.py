
import os
from PIL import Image

def generate_favicons():
    source_path = "public/assets/images/fav.png"
    output_dir = "public"
    
    if not os.path.exists(source_path):
        print(f"Error: Source image not found at {source_path}")
        return

    try:
        img = Image.open(source_path)
    except Exception as e:
        print(f"Error opening image: {e}")
        return

    sizes = [
        (16, 16, "favicon-16x16.png"),
        (32, 32, "favicon-32x32.png"),
        (48, 48, "favicon-48x48.png"),
        (64, 64, "favicon-64x64.png"),
        (180, 180, "apple-touch-icon.png"),
        (192, 192, "android-chrome-192x192.png"),
        (512, 512, "android-chrome-512x512.png")
    ]

    for width, height, filename in sizes:
        try:
            # Resize with high quality resampling (LANCZOS)
            resized_img = img.resize((width, height), Image.Resampling.LANCZOS)
            output_path = os.path.join(output_dir, filename)
            resized_img.save(output_path, "PNG")
            print(f"Generated {filename}")
        except Exception as e:
            print(f"Error generating {filename}: {e}")

    # Generate favicon.ico (containing 16x16, 32x32, 48x48)
    try:
        icon_sizes = [(16, 16), (32, 32), (48, 48)]
        icon_images = []
        for w, h in icon_sizes:
             icon_images.append(img.resize((w, h), Image.Resampling.LANCZOS))
        
        icon_path = os.path.join(output_dir, "favicon.ico")
        icon_images[0].save(icon_path, format='ICO', sizes=[(i.width, i.height) for i in icon_images], append_images=icon_images[1:])
        print("Generated favicon.ico")

    except Exception as e:
         print(f"Error generating favicon.ico: {e}")

if __name__ == "__main__":
    generate_favicons()
