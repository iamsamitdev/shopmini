# การสร้างฟังก์ชัน (Function) ในภาษา Python
# Default Argument และ Keyword Argument
def calc_total(price, qty=1, discount=0):
    return price * qty - discount

# เรียกใช้งานฟังก์ชัน
print(calc_total(590))                        # 590
print(calc_total(590, 3))                     # 1770
print(calc_total(590, qty=3, discount=100))   # 1670 (ระบุชื่อพารามิเตอร์ จึงสลับลำดับได้)
