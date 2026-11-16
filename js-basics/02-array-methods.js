// การสร้างตัวแปร array
const products = [
  { id: 1, name: 'เมาส์ไร้สาย', price: 590, category: 'accessories', stock: 25 },
  { id: 2, name: 'คีย์บอร์ด Mechanical', price: 1890, category: 'accessories', stock: 12 },
  { id: 5, name: 'หูฟังบลูทูธ ANC', price: 2490, category: 'audio', stock: 10 },
  { id: 8, name: 'สายชาร์จ USB-C', price: 250, category: 'mobile', stock: 60 },
  { id: 10, name: 'ขาตั้งโทรศัพท์', price: 350, category: 'mobile', stock: 0 },
]

// map: แปลงทุกสมาชิก -> Array ใหม่ขนาดเท่าเดิม
// map เหมือนการวนลูป for แต่จะ return ค่าออกมาเป็น array ใหม่
const names = products.map((p) => p.name);
console.log(names);

// filter: คัดเฉพาะที่เงื่อนไขเป็น true
const cheap = products.filter((p) => p.price < 1000);
console.log(cheap);

// find: ตัวแรกที่ตรงเงื่อนไข
const found = products.find((p) => p.id === 5);
console.log(found);

// reduce: รวมทั้ง Array ให้เหลือค่าเดียว
// ตัวอย่างเช่น การรวมราคาสินค้าทั้งหมด
const total = products.reduce((sum, p) => sum + p.price, 0);
console.log(total);

// chaining: การเรียกใช้ method ต่อเนื่องกัน
const accessories = products.filter((p) => p.category === 'accessories')
    .toSorted((a, b) => b.price - a.price)
    .map((p) => `${p.name} (${p.price})`)

console.log(accessories);
