<script setup>
  import { ref, reactive, computed } from "vue"
  const name = "Samit"

  // ref: ใช้ได้กับทุกชนิดข้อมูล
  const count = ref(0)

  // reactive: ใช้ได้กับ object เท่านั้น
  const cart = reactive({
    items: 0, price: 590
  })

  // computed: ใช้สำหรับสร้าง property ใหม่จาก property ที่มีอยู่แล้ว
  const total = computed(() => {
    return cart.items * cart.price
  })

  // สร้างฟังก์ชันเพิ่มจำนวนสินค้าในตะกร้า
  function addItem() {
    cart.items++
  }

</script>


<template>
  <h1>Hello, {{ name }}</h1>

  <button @click="count++">+</button>
  <h1>Count: {{ count }}</h1>
  <button @click="count--">-</button>

  <h1>Cart: {{ cart.items }} items, ${{ cart.price }}</h1>
  <h1>Total: ${{ total }}</h1>
  <button @click="addItem">Add Item</button>
</template>


<style>
  body {
    background-color: blue;
  }
  h1 {
    color: red;
  }
</style>