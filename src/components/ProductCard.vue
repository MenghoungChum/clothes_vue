<template lang="">
    <div>
        <RouterLink
        :to="`/man/${product.id}`"
        :key="product.id" class="cursor-pointer">
            <div className="h-105">
                <img :src="product.colors[0].images[0]" alt="" className="w-full h-full object-cover">
            </div>

            <div class="flex justify-between items-center">
                <div>
                    <p className="font-bold text-xl pt-4 pb-2">{{product.currency}} ${{product.price}}</p>
                    <p className="text-md">{{product.name}}</p>
                </div>
                <i 
                @click.prevent="storeFavourite.addToFavourite(product)"
                :class="storeFavourite.isFavourit(product) ? 'text-red-500': ''"
                class="fa-regular fa-heart cursor-pointer"></i>
            </div>
        </RouterLink>
    </div>
</template>
<script setup>
    import { useRoute } from 'vue-router';
    import imageex from '../assets/imageex.jpg'
    import { StoreFavouriteCart } from '../stores/favoutite';
    defineProps({
        product: Object
    })
    const storeFavourite=StoreFavouriteCart();
</script>
<style lang="">
    
</style>