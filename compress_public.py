import os
from PIL import Image

def compress_images(directory, max_size=1920):
    count = 0
    for root, _, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(('.jpg', '.jpeg', '.png')):
                filepath = os.path.join(root, file)
                try:
                    size_mb = os.path.getsize(filepath) / (1024 * 1024)
                    if size_mb > 1.0: # compress images larger than 1MB
                        with Image.open(filepath) as img:
                            if img.mode != 'RGB':
                                img = img.convert('RGB')
                            
                            # resize if too large
                            if img.width > max_size or img.height > max_size:
                                img.thumbnail((max_size, max_size), Image.Resampling.LANCZOS)
                            
                            exif = img.info.get('exif')
                            if exif:
                                img.save(filepath, format='JPEG', optimize=True, quality=75, exif=exif)
                            else:
                                img.save(filepath, format='JPEG', optimize=True, quality=75)
                        print(f"Compressed: {filepath}")
                        count += 1
                except Exception as e:
                    print(f"Error compressing {filepath}: {e}")
    print(f"Compressed {count} large images in {directory}.")

if __name__ == "__main__":
    compress_images('public/portfolio')
