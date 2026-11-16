// ตัวแปร object ที่ใช้เก็บข้อมูลสินค้า
const product = {
  id: 5,
  name: 'หูฟังบลูทูธ ANC',
  price: 2490,
  seller: { name: 'Audio Pro', address: null },
}

console.log(product.name); // การเข้าถึง property ของ object แบบเดิม
console.log(product.seller.name); // การเข้าถึง property ของ object แบบเดิม

// การเข้าถึง property ของ object แบบใหม่ (destructuring)
const { name, price, seller } = product;

console.log(name);
console.log(price);
console.log(seller.name);

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

console.log(array1 , array2); // การรวม array แบบเดิม

// Spread operator (...)
console.log(...array1, ...array2); // การรวม array แบบใหม่

// Optional Chaining (?.) และ Nullish Coalescing (??)
console.log(product.seller?.address ?? 'ไม่พบที่อยู่ของผู้ขาย'); // การเข้าถึง property ของ object แบบใหม่