// ฟังก์ชัน formatPrice ใช้ในการแปลงค่าตัวเลขเป็นรูปแบบราคาที่เหมาะสม โดยใช้ Intl.NumberFormat เพื่อจัดรูปแบบตัวเลขเป็นสกุลเงินไทย (THB) และคืนค่าผลลัพธ์เป็นสตริงที่แสดงราคาที่จัดรูปแบบแล้ว
export const formatPrice = (value) => {
    return new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(value)
}

// ตัวแปร VAT_RATE เป็นค่าคงที่ที่ใช้ในการคำนวณภาษีมูลค่าเพิ่ม (VAT) โดยมีค่าเท่ากับ 0.07 หรือ 7%
export const VAT_RATE = 0.07

// ฟังก์ชัน calcVat ใช้ในการคำนวณภาษีมูลค่าเพิ่ม (VAT) จากราคาสินค้า โดยรับพารามิเตอร์ price ซึ่งเป็นราคาสินค้า และคืนค่าผลลัพธ์เป็นจำนวนเงินภาษีมูลค่าเพิ่มที่คำนวณได้
export default function calcVat(price) {
    return price * VAT_RATE
}

// console.log(formatPrice(2490));