<template lang="">
    <div>
        <div :key="product.id">
            <div className="h-105">
                <img :src="product.colors[0].images[0]" alt="" className="w-full h-full object-cover">
            </div>

            <div class="flex justify-between items-center">
                <div>
                    <p className="font-bold text-xl pt-4 pb-2">{{product.currency}} ${{product.price}}</p>
                    <p className="text-md">{{product.name}}</p>
                </div>
                <i class="fa-regular fa-heart"></i>
            </div>
        </div>
    </div>
</template>
<script setup>
    import imageex from '../assets/imageex.jpg'
    defineProps({
        product: Object
    })
</script>
<style lang="">
    
</style>