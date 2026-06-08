<template lang="">
    <div>
        <h1 className="text-2xl font-bold py-6">❤️New Arrival❤️</h1>
        <div class="my-10 mb-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <ProductCard v-for="product in products"
            :key="product.id"
            :product="product"
            />
        </div>
    </div>
</template>
<script setup>
    
    import ProductCard from './ProductCard.vue';
    import { products } from '../data/data.js';
</script>
<style lang="">
    
</style>