import os
from PIL import Image

dist_dir = 'dist'

def compress_images():
    count = 0
    for root, _, files in os.walk(dist_dir):
        for file in files:
            if file.lower().endswith(('.jpg', '.jpeg', '.png')):
                filepath = os.path.join(root, file)
                try:
                    size_mb = os.path.getsize(filepath) / (1024 * 1024)
                    if size_mb > 0.5: # compress images larger than 500KB
                        with Image.open(filepath) as img:
                            if img.mode != 'RGB':
                                img = img.convert('RGB')
                            
                            # Preserve EXIF data to keep rotation/metadata
                            exif = img.info.get('exif')
                            if exif:
                                img.save(filepath, format='JPEG', optimize=True, quality=65, exif=exif)
                            else:
                                img.save(filepath, format='JPEG', optimize=True, quality=65)
                        count += 1
                except Exception as e:
                    pass
    print(f"Compressed {count} large images in dist folder.")

if __name__ == "__main__":
    compress_images()
