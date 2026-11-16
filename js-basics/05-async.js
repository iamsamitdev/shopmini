// สร้างฟังชันที่ทำงานแบบ asynchronous
async function loadProducts() {
    try {
        const response = await fetch('https://dummyjson.com/products?limit=30&select=title,price,category');
        // ถ้ามีข้อผิดพลาดเกิดขึ้นในการโหลดข้อมูลจาก API ให้แสดงข้อความผิดพลาดใน console
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // แปลงข้อมูลที่ได้จาก API เป็น JSON
        const data = await response.json();

        // แสดงข้อมูลสินค้าใน console
        console.log(data.products);
    } catch (error) {
        console.error('Error loading products:', error.message);
    }
}

// เรียกใช้ฟังชัน loadProducts เพื่อโหลดข้อมูลสินค้า
await loadProducts();