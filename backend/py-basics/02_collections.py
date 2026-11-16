# list เทียบได้กับ Array
products = [
    {"id": 1, "name": "เมาส์ไร้สาย", "price": 590, "stock": 25},
    {"id": 5, "name": "หูฟังบลูทูธ ANC", "price": 2490, "stock": 10},
    {"id": 10, "name": "ขาตั้งโทรศัพท์", "price": 350, "stock": 0},
]

# print(products)
print(products[0]["name"])  # การเข้าถึงข้อมูลใน list

# dict เทียบได้กับ Object
first = {
    "id": 1,
    "name": "เมาส์ไร้สาย",
    "price": 590,
    "stock": 25,
}
print(first["name"])  # การเข้าถึงข้อมูลใน dict

# tuple: ลำดับที่แก้ไขไม่ได้ (immutable)
point = (13.75, 100.50)
lat, lng = point                    # unpacking เทียบได้กับ destructuring
print(lat, lng)

# การวนลูป for ใน python
for product in products:
    print(f"{product['name']} ราคา {product['price']} บาท มีสต็อก {product['stock']} ชิ้น")