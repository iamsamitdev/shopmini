from decimal import Decimal

from pydantic import BaseModel, Field, ValidationError


class ProductIn(BaseModel):
    name: str = Field(min_length=2, max_length=200)
    price: Decimal = Field(gt=0, max_digits=10, decimal_places=2)
    stock: int = Field(default=0, ge=0)
    tags: list[str] = []


# ข้อมูลถูกต้อง: Pydantic แปลงชนิดให้อัตโนมัติ ("590" -> Decimal, "5" -> int)
p = ProductIn(name="เมาส์ไร้สาย", price="590", stock="5")
print(p)
print(p.model_dump())
print(p.model_dump_json())

# ข้อมูลผิด: ได้ ValidationError ที่บอกตำแหน่งและเหตุผลครบทุกช่อง
try:
    ProductIn(name="A", price=-10, stock=-1)
except ValidationError as e:
    print(f"พบข้อผิดพลาด {e.error_count()} รายการ")
    for err in e.errors():
        print(" -", err["loc"], err["msg"])