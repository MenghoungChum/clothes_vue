<template lang="">
    <div class="my-8">
        <div class="grid grid-cols-4 gap-3">
        <RouterLink
                :to="`/man/${product.id}`"
                v-for="product in manProducts"
                :key="product.id"
                class="cursor-pointer">
                <div 
                    @mouseenter="hoverId=product.id"
                    @mouseleave="hoverId = null"
                    className="h-105 relative containImage">
                    <img 
                    :src="getImage(product,false)" alt="" class="w-full h-full absolute inset-0 object-cover transition-opacity duration-300 ease-in-out"/>

                    <img 
                    :class="hoverId==product.id ? 'opacity-95' : 'opacity-0'"
                    :src="getImage(product,true)" alt="" class="w-full h-full absolute inset-0 object-cover transition-opacity duration-300 ease-in-out"/>
                </div>

                <div class="flex justify-between items-center">
                    <div>
                        <p className="font-bold text-xl pt-4 pb-2">{{product.price}}</p>
                        <p className="text-md">{{product.name}}</p>
                    </div>
                    <i class="fa-regular fa-heart"></i>
                </div>
                <div class="flex gap-3 items-center mt-2">
                    <div v-for="(color,index) in product.colors" :key="index" class="w-4 h-4 rounded-md" :style="{ backgroundColor: color.value }"></div>
                </div>
        </RouterLink>
        </div>
    </div>
</template>
<script setup>
    import Laced_Top1 from '../assets/Laced_Top1.jpg'
    import DIRECTOR_WASHED_T_SHIRT1 from '../assets/DIRECTOR_WASHED_T_SHIRT1.jpg'
    import DIRECTOR_WASHED_T_SHIRT2 from '../assets/DIRECTOR_WASHED_T_SHIRT2.jpg'
    import { computed, ref } from 'vue';
    import { products } from '../data/data';
import { useRoute } from 'vue-router';
    const firstImage=ref(DIRECTOR_WASHED_T_SHIRT1)
    const manProducts=computed(()=>{
        return products.filter(p=>p.section ==="man")
    })
    const hoverId=ref(null)

    function getImage(product,isHovered){
        return isHovered ? product.colors[0].images[1] : product.colors[0].images[0]
    }



</script>
<style lang="">
    
</style>