import os
import glob
from PIL import Image, ImageOps

def process_images():
    # Setup paths
    script_dir = os.path.dirname(os.path.abspath(__file__))
    photos_dir = os.path.join(script_dir, 'photos')
    output_path = os.path.join(script_dir, 'grid_output.jpg')

    # Configuration
    TILE_SIZE = 512
    GRID_COLS = 4
    GRID_ROWS = 4
    EXPECTED_COUNT = GRID_COLS * GRID_ROWS

    # Get all JPG files
    files = sorted(glob.glob(os.path.join(photos_dir, '*.JPG')))
    
    if len(files) < EXPECTED_COUNT:
        print(f"Error: Found only {len(files)} images. Need at least {EXPECTED_COUNT}.")
        return

    # Take the first 16 images
    files = files[:EXPECTED_COUNT]

    # Create the canvas
    grid_width = TILE_SIZE * GRID_COLS
    grid_height = TILE_SIZE * GRID_ROWS
    grid_image = Image.new('RGB', (grid_width, grid_height), color='white')

    print(f"Processing {len(files)} images...")

    for i, file_path in enumerate(files):
        try:
            with Image.open(file_path) as img:
                # 0. Fix orientation based on EXIF data
                img = ImageOps.exif_transpose(img)

                # 1. Crop to square
                width, height = img.size
                min_dim = min(width, height)
                
                left = (width - min_dim) // 2
                top = (height - min_dim) // 2
                right = (width + min_dim) // 2
                bottom = (height + min_dim) // 2
                
                img_cropped = img.crop((left, top, right, bottom))
                
                # 2. Resize to 512x512
                img_resized = img_cropped.resize((TILE_SIZE, TILE_SIZE), Image.Resampling.LANCZOS)
                
                # 3. Paste into grid
                col = i % GRID_COLS
                row = i // GRID_COLS
                x = col * TILE_SIZE
                y = row * TILE_SIZE
                
                grid_image.paste(img_resized, (x, y))
                print(f"Processed [{i+1}/{EXPECTED_COUNT}]: {os.path.basename(file_path)}")
                
        except Exception as e:
            print(f"Error processing {file_path}: {e}")

    # Save the result
    grid_image.save(output_path, quality=95)
    print(f"Done! Grid saved to: {output_path}")

if __name__ == "__main__":
    process_images()
