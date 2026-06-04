<template lang="">
    <div>
        <h1 className="text-2xl font-bold py-6">❤️New Arrival❤️</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    </div>
</template>
<script setup>
    
    import ProductCard from './ProductCard.vue';
</script>
<style lang="">
    
</style>