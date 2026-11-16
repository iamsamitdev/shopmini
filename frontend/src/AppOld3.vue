<script setup>
    import { ref } from 'vue'

    // import { products, categories } from '@/data/products'
    import ProductCard from '@/components/ProductCard.vue'
    import SearchBar from '@/components/SearchBar.vue'
    import CategoryFilter from '@/components/CategoryFilter.vue'
    import ProductGrid from '@/components/ProductGrid.vue'
    import EmptyState from '@/components/EmptyState.vue'
    import LifecycleDemo from '@/playground/LifecycleDemo.vue'

    import { useProducts } from '@/composables/useProducts'

    //  สร้างตัวแปร reactive สำหรับเก็บค่าที่กรอกใน SearchBar และค่าที่เลือกใน CategoryFilter
    // const keyword = ref('')
    // const category = ref('all')

    const { keyword, category, categories, products, total, resetFilter } = useProducts()
    const showDemo = ref(true)

    // ฟังก์ชันเพิ่มสินค้าไปยังตะกร้า (เรียกจาก ProductCard ผ่าน emit)
    function onAddToCart(product) {
        console.log('เพิ่มลงตะกร้า:', product.name)
    }

</script>

<template>
    <main class="mx-auto max-w-6xl p-6">

        <button class="mb-2 text-sm underline" @click="showDemo = !showDemo">
            แสดง/ซ่อน LifecycleDemo
        </button>
        <LifecycleDemo v-if="showDemo" class="mb-6" />

        <SearchBar placeholder="ค้นหาสินค้า..." v-model="keyword" />
        <p class="my-2 text-sm">keyword ใน App.vue: {{ keyword }}</p>

        <CategoryFilter 
            :categories="categories" 
            :selected="category" 
            @change="category = $event" 
        />
        <p class="my-2 text-sm">category ใน App.vue: {{ category }}</p>

        
        <ProductGrid v-if="products.length" :products="products">
            <template #default="{ product }">
                <ProductCard :product="product" @add-to-cart="onAddToCart" />
            </template>
        </ProductGrid>

        <EmptyState :title="'ไม่พบสินค้า'">
            <p>ลองเปลี่ยนคำค้นหาหรือเลือกหมวดหมู่อื่น</p>
            <template #action>
                <button class="rounded-lg border px-4 py-2 hover:bg-slate-100" @click="">ล้างตัวกรอง</button>
            </template>
        </EmptyState>
        
    </main>
</template>

<style scoped>

</style>