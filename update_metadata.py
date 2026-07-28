import os
import json
import struct

def get_image_size(file_path):
    with open(file_path, 'rb') as f:
        head = f.read(24)
        if len(head) != 24:
            return None
        if head.startswith(b'\x89PNG\r\n\x1a\n'):
            check = struct.unpack('>i', head[4:8])[0]
            if check != 0x0d0a1a0a:
                return None
            width, height = struct.unpack('>ii', head[16:24])
        elif head.startswith(b'\xff\xd8'):
            f.seek(0)
            size = 2
            ftype = 0
            while not 0xc0 <= ftype <= 0xcf or ftype in (0xc4, 0xc8, 0xcc):
                f.seek(size, 1)
                byte = f.read(1)
                while ord(byte) == 0xff:
                    byte = f.read(1)
                ftype = ord(byte)
                size = struct.unpack('>H', f.read(2))[0] - 2
            f.seek(1, 1)
            height, width = struct.unpack('>HH', f.read(4))
        else:
            return None
        return width, height

metadata = {}
public_dir = os.path.join(os.getcwd(), 'public')

for root, dirs, files in os.walk(public_dir):
    for file in files:
        if file.lower().endswith(('.png', '.jpg', '.jpeg')):
            file_path = os.path.join(root, file)
            try:
                size = get_image_size(file_path)
                if size:
                    width, height = size
                    rel_path = '/' + os.path.relpath(file_path, public_dir).replace('\\', '/')
                    orientation = 'landscape' if width > height else 'portrait'
                    aspect_ratio = round(width / height, 3)
                    metadata[rel_path] = {
                        'width': width,
                        'height': height,
                        'aspectRatio': aspect_ratio,
                        'orientation': orientation
                    }
            except Exception as e:
                pass

with open('src/data/imageMetadata.json', 'w') as f:
    json.dump(metadata, f, indent=2)

print('Successfully updated imageMetadata.json with', len(metadata), 'images')
