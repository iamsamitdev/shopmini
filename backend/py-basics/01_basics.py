# การแสดงผลข้อความใน console ใน python
print("Hello, Python")


# การสร้างตัวแปรใน python
shop_name = "ShopMini"
price = 590
vat_rate = 0.07
is_active = True
discount = None

print(shop_name, price, vat_rate, is_active, discount)


# f-string การแสดงผลข้อความแบบ f-string
print(f"{shop_name} ราคา {price} บาท มี VAT {vat_rate*100:.0f}% ราคาสุทธิ {price * (1 + vat_rate):.2f} บาท")


# การเขียนเงื่อนไข if else ใน python
if price > 500:
    print("Free shipping")
elif price > 300:
    print("Shipping fee 50 Baht")
else:
    print("Shipping fee 100 Baht")

# การดูชนิดของตัวแปรใน python
print(type(price), type(vat_rate), type(discount))