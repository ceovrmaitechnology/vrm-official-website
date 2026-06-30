import os
import base64
from PIL import Image

def generate_favicons(source_path="public/assets/images/fav.png"):
    output_dir = "public"
    
    if not os.path.exists(source_path):
        print(f"Error: Source image not found at {source_path}")
        return

    try:
        img = Image.open(source_path)
    except Exception as e:
        print(f"Error opening image: {e}")
        return

    # Preprocess the image to crop extra transparency and make it square
    try:
        if img.mode != 'RGBA':
            img = img.convert('RGBA')
        
        # Get alpha channel and create mask ignoring low-alpha noise
        alpha = img.getchannel('A')
        mask = alpha.point(lambda p: 255 if p > 5 else 0)
        bbox = mask.getbbox()
        if bbox:
            cropped_img = img.crop(bbox)
            w, h = cropped_img.size
            # Create a square transparent canvas
            square_size = max(w, h)
            square_img = Image.new("RGBA", (square_size, square_size), (0, 0, 0, 0))
            # Paste the cropped image centered
            offset_x = (square_size - w) // 2
            offset_y = (square_size - h) // 2
            square_img.paste(cropped_img, (offset_x, offset_y))
            img = square_img
            print("Cropped (with alpha threshold) and padded source image to a square format.")
            # Save the preprocessed square image back to fav.png
            os.makedirs(os.path.dirname(source_path), exist_ok=True)
            img.save(source_path, "PNG")
        else:
            print("Warning: Image is completely transparent/empty.")
    except Exception as e:
        print(f"Error preprocessing image to square: {e}")

    sizes = [
        (16, 16, "favicon-16x16.png"),
        (32, 32, "favicon-32x32.png"),
        (48, 48, "favicon-48x48.png"),
        (64, 64, "favicon-64x64.png"),
        (180, 180, "apple-touch-icon.png"),
        (192, 192, "android-chrome-192x192.png"),
        (512, 512, "android-chrome-512x512.png"),
        (192, 192, "logo192.png"),
        (512, 512, "logo512.png")
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

    # Generate favicon.svg by embedding base64 encoded PNG
    try:
        png_512_path = os.path.join(output_dir, "android-chrome-512x512.png")
        if os.path.exists(png_512_path):
            with open(png_512_path, "rb") as image_file:
                encoded_string = base64.b64encode(image_file.read()).decode('utf-8')
            
            svg_content = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">\n  <image href="data:image/png;base64,{encoded_string}" x="0" y="0" width="512" height="512"/>\n</svg>\n'
            
            svg_path = os.path.join(output_dir, "favicon.svg")
            with open(svg_path, "w") as svg_file:
                svg_file.write(svg_content)
            print("Generated favicon.svg")
        else:
            print("Error: 512x512 PNG not found, cannot generate favicon.svg")
    except Exception as e:
        print(f"Error generating favicon.svg: {e}")

if __name__ == "__main__":
    # If the user uploaded a custom logo path, we can pass it here
    custom_logo = "C:/Users/ADMIN/.gemini/antigravity/brain/869cdf98-49d7-4989-a7c8-f17fc178c8a2/media__1782801893892.png"
    if os.path.exists(custom_logo):
        print(f"Using custom uploaded logo from {custom_logo}")
        generate_favicons(custom_logo)
    else:
        generate_favicons()

