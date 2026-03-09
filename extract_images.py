import fitz
import os
import sys

def extract_images_from_pdf(pdf_path, output_dir):
    os.makedirs(output_dir, exist_ok=True)
    
    try:
        doc = fitz.open(pdf_path)
    except Exception as e:
        print(f"Failed to open PDF: {e}")
        return
        
    img_count = 0
    for page_index in range(len(doc)):
        page = doc.load_page(page_index)
        image_list = page.get_images(full=True)
        
        for image_index, img in enumerate(image_list, start=1):
            xref = img[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]
            
            # Avoid very small images (like icons or logos, unless we want them)
            # but let's just dump all for now and see
            if len(image_bytes) < 10000: # skip smaller than 10KB
                continue
                
            image_filename = f"portfolio_img_{page_index + 1}_{image_index}.{image_ext}"
            image_filepath = os.path.join(output_dir, image_filename)
            
            with open(image_filepath, "wb") as f:
                f.write(image_bytes)
                
            print(f"Extracted: {image_filename}")
            img_count += 1
            
    print(f"Total images extracted: {img_count}")

if __name__ == "__main__":
    pdf_file = "Architecture Portfolio.pdf"
    out_dir = "src/assets/portfolio"
    extract_images_from_pdf(pdf_file, out_dir)
