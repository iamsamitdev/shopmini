import { defineStore } from "pinia"
import { computed, ref } from "vue"

// Setup Store
export const useCartStore = defineStore('cart', () => {

    // State: รายการสินค้าในตะกร้า
    const items = ref([
        {
            id:1,
            name: 'Shirt',
            price: 200,
            quantity: 1
        },
        {
            id:2,
            name: 'Shoe',
            price: 400,
            quantity: 3
        },
    ])

    // Getter: คำนวณยอดรวมต่างๆ
    const totalCount = computed(() => {
        return items.value.reduce((sum, item) => sum + item.quantity, 0)
    })

    const totalPrice = computed(() => {
        return items.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
    })

    // Action: จัดการเพิ่มสินค้า
    function addToCart(product) {
        const existing = items.value.find((item) => item.id === product.id)
        if(existing) {
            existing.quantity++
        } else {
            items.value.push({...product, quantity: 1})
        }
    }

    // ส่งออกทุกอย่างที่การให้ component นำไปใช้
    return { items, totalCount, totalPrice, addToCart }

})