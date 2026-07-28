import os
from PIL import Image

public_dir = 'public'
folders = ['Baby', 'hindu', 'Christian', 'prewed', 'postwed', 'Maternity', 'engagement', 'cover', 'Bridal', 'groom', 'couple_portrait', 'Rituals', 'portfolio']

total_before = 0
total_after = 0
count = 0

for folder in folders:
    folder_path = os.path.join(public_dir, folder)
    if not os.path.exists(folder_path):
        continue
    for fname in os.listdir(folder_path):
        if fname.lower().endswith(('.jpg', '.jpeg', '.png')):
            fpath = os.path.join(folder_path, fname)
            try:
                size_before = os.path.getsize(fpath)
                img = Image.open(fpath)
                if img.mode in ('RGBA', 'P'):
                    img = img.convert('RGB')
                max_w = 1920
                if img.width > max_w:
                    ratio = max_w / img.width
                    new_h = int(img.height * ratio)
                    img = img.resize((max_w, new_h), Image.LANCZOS)
                img.save(fpath, 'JPEG', quality=72, optimize=True, progressive=True)
                size_after = os.path.getsize(fpath)
                total_before += size_before
                total_after += size_after
                count += 1
            except Exception as e:
                print(f'ERROR {fpath}: {e}')

print(f'Compressed {count} images')
print(f'Before: {total_before/1024/1024:.1f} MB')
print(f'After:  {total_after/1024/1024:.1f} MB')
print(f'Saved:  {(total_before - total_after)/1024/1024:.1f} MB ({(1 - total_after/total_before)*100:.0f}% reduction)')
