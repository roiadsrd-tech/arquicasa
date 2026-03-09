import fitz

doc = fitz.open("Architecture Portfolio.pdf")
text = ""
for i, page in enumerate(doc):
    text += f"=== PAGE {i+1} ===\n"
    text += page.get_text() + "\n"

with open("portfolio_text.txt", "w") as f:
    f.write(text)
print("Text extracted to portfolio_text.txt")
