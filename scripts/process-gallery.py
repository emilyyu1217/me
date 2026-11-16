#!/usr/bin/env python3
"""
Gallery photo processor for emilyyu.io
Converts photos to match the site's B&W halftone dither style.

Usage:
  python3 scripts/process-gallery.py                    # process all images in gallery-raw/
  python3 scripts/process-gallery.py photo.jpg "label"  # process a single image with a gallery label

Drop photos into gallery-raw/ and run this script.
Processed images appear in public/gallery/ ready for the site.
"""

import os
import sys
import math
from PIL import Image, ImageDraw, ImageOps

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_DIR = os.path.dirname(SCRIPT_DIR)
RAW_DIR = os.path.join(PROJECT_DIR, "gallery-raw")
OUT_DIR = os.path.join(PROJECT_DIR, "public", "gallery")

MAX_WIDTH = 1400
MAX_HEIGHT = 1200
JPEG_QUALITY = 85

DOT_SPACING = 11  # pixels between halftone grid centers (measured from existing images)
DOT_RADIUS = 2.5  # radius of each bright dot
DOT_BRIGHTNESS = 35  # max brightness boost at dot center (measured ~30-40 in originals)


def apply_halftone_overlay(img: Image.Image) -> Image.Image:
    """Apply halftone dot grid matching the site's existing B&W dither style.

    The existing gallery images use a regular grid of bright dots spaced ~11px apart,
    where each dot raises brightness by ~30-40 points with a soft falloff.
    """
    width, height = img.size
    pixels = img.load()
    result = img.copy()
    result_pixels = result.load()

    # Precompute dot center positions
    dot_centers = []
    y_pos = 0
    while y_pos < height:
        x_pos = 0
        while x_pos < width:
            dot_centers.append((x_pos, y_pos))
            x_pos += DOT_SPACING
        y_pos += DOT_SPACING

    # For each pixel, compute the brightness boost from the nearest dot
    r_sq = DOT_RADIUS * DOT_RADIUS
    for cy, cx in [(c[1], c[0]) for c in dot_centers]:
        # Only iterate over the small bounding box around each dot
        x_min = max(0, int(cx - DOT_RADIUS - 1))
        x_max = min(width - 1, int(cx + DOT_RADIUS + 1))
        y_min = max(0, int(cy - DOT_RADIUS - 1))
        y_max = min(height - 1, int(cy + DOT_RADIUS + 1))

        for y in range(y_min, y_max + 1):
            for x in range(x_min, x_max + 1):
                dist_sq = (x - cx) ** 2 + (y - cy) ** 2
                if dist_sq <= r_sq:
                    # Smooth falloff from center
                    falloff = 1.0 - (dist_sq / r_sq)
                    boost = int(DOT_BRIGHTNESS * falloff)
                    new_val = min(255, result_pixels[x, y] + boost)
                    result_pixels[x, y] = new_val

    return result


def process_image(input_path: str, output_path: str) -> None:
    """Convert a photo to the site's B&W halftone dither style."""
    img = Image.open(input_path)

    # Apply EXIF orientation so the image is upright (iPhone photos store rotation in metadata)
    img = ImageOps.exif_transpose(img)

    # Convert to grayscale
    img = img.convert("L")

    # Resize to fit gallery dimensions, maintaining aspect ratio
    w, h = img.size
    ratio = min(MAX_WIDTH / w, MAX_HEIGHT / h)
    if ratio < 1:
        new_w = int(w * ratio)
        new_h = int(h * ratio)
        img = img.resize((new_w, new_h), Image.LANCZOS)

    # Apply halftone dot overlay
    img = apply_halftone_overlay(img)

    # Convert back to RGB (grayscale values in all 3 channels) for consistent JPEG output
    img_rgb = Image.merge("RGB", (img, img, img))

    # Save
    img_rgb.save(output_path, "JPEG", quality=JPEG_QUALITY)
    print(f"  -> {output_path} ({img.size[0]}x{img.size[1]})")


def process_all():
    """Process all images in gallery-raw/ and output to public/gallery/."""
    os.makedirs(OUT_DIR, exist_ok=True)

    extensions = {".jpg", ".jpeg", ".png", ".webp", ".heic", ".tiff", ".bmp"}
    raw_files = [
        f for f in os.listdir(RAW_DIR)
        if os.path.splitext(f)[1].lower() in extensions
    ]

    if not raw_files:
        print(f"No images found in {RAW_DIR}/")
        print("Drop your photos there and run this script again.")
        return

    print(f"Processing {len(raw_files)} image(s)...")
    for filename in sorted(raw_files):
        input_path = os.path.join(RAW_DIR, filename)
        name = os.path.splitext(filename)[0]
        # Sanitize: lowercase, replace spaces with hyphens
        safe_name = name.lower().replace(" ", "-")
        output_path = os.path.join(OUT_DIR, f"{safe_name}.jpg")

        print(f"  {filename}")
        process_image(input_path, output_path)

    print(f"\nDone! {len(raw_files)} image(s) saved to public/gallery/")
    print("\nTo add them to your gallery, update the items in app/page.tsx:")
    print("  { image: '/gallery/<name>.jpg', text: '<label>' }")


def process_single(input_path: str, label: str):
    """Process a single image."""
    os.makedirs(OUT_DIR, exist_ok=True)

    name = os.path.splitext(os.path.basename(input_path))[0]
    safe_name = name.lower().replace(" ", "-")
    output_path = os.path.join(OUT_DIR, f"{safe_name}.jpg")

    print(f"Processing {input_path}...")
    process_image(input_path, output_path)
    print(f"\nAdd to gallery in app/page.tsx:")
    print(f"  {{ image: '/gallery/{safe_name}.jpg', text: '{label}' }}")


if __name__ == "__main__":
    if len(sys.argv) == 3:
        process_single(sys.argv[1], sys.argv[2])
    elif len(sys.argv) == 1:
        process_all()
    else:
        print("Usage:")
        print("  python3 scripts/process-gallery.py                    # process all in gallery-raw/")
        print("  python3 scripts/process-gallery.py photo.jpg 'label'  # process one image")
