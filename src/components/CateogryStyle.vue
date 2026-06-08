<template lang="">
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py=t-20 gap-8">
    
        <img v-for="cateeogry in categories" :key="cateeogry.id" :src="cateeogry.image" alt="" className="w-full h-full">
        
    
    </div>
</template>
<script setup>
    import { categories } from '../data/data';
</script>
<style lang="">
    
</style>