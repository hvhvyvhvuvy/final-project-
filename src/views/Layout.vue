<template>
    <div>
        <Header></Header>
        <slot></slot>
        <Footer></Footer>
    </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>