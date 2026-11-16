<script setup>
import { ref } from 'vue'

const isLoggedIn = ref(false)
const showDetail = ref(true)
const imageUrl = ref('https://picsum.photos/seed/shopmini-5/200/150')
const tags = ref(['ใหม่', 'ขายดี', 'ส่งฟรี'])
</script>

<template>
    <section>
        <h2>Directives Demo</h2>
        
        <!-- v-bind (ย่อ :) ผูกค่าเข้ากับ attribute -->
        <img :src="imageUrl" />


        <p></p>

        <!-- v-on (ย่อ @) ฟัง event -->
        <button @click="isLoggedIn = !isLoggedIn">
            {{ isLoggedIn ? 'ออกจากระบบ': 'เข้าสู่ระบบ' }}
        </button>

        <!-- v-if / v-else: สร้างหรือทำลาย element จริง -->
        <p v-if="isLoggedIn">สวัสดีสมาชิก</p>
        <p v-else>กรุณาเข้าสู่ระบบ</p>

        <!-- v-show: ซ่อนด้วย CSS display: none (element ยังอยู่ใน DOM) -->
        <button @click="showDetail = !showDetail">สลับรายละเอียด</button>
        <p v-show="showDetail">รายละเอียดสินค้าแบบยาว...</p>

        <!-- v-for + :key ที่ไม่ซ้ำกัน -->
        <ul>
            <li v-for="(tag, index) in tags">{{ index + 1 }} {{ tag }}</li>
        </ul>
    </section>
</template>

<style></style>