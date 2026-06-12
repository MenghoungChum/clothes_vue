<template lang="">
    <div class="mt-7">
        <h2 class="mb-4">{{storeFavourite.favouriteCart.length}} Items</h2>
        <div v-if="storeFavourite.favouriteCart.length==0" class ="w-full h-113 flex justify-center items-center text-red-500 ">Now Favourite Product</div>
        <div v-else class="grid grid-cols-3 gap-4">
            <div
            v-for="product in storeFavourite.favouriteCart"
             class="h-auto flex flex-col gap-3">
                <div class="flex items-center w-full gap-2 justify-between relative">
                    <div class="w-[30%] h-full">
                        <img :src="product.colors[0].images[0]" alt="" class="w-full h-full object-cover"/>
                    </div>
                    <div class="w-[70%] h-full">
                        <p>{{product.name}}</p>
                        <h3>{{product.price}}</h3>
                        <div class="w-full h-20 gap-3.5 flex items-center">
                            <div>
                                <h3 class="text-md text-gray-500 mb-1">Color</h3>
                                <select class="px-5 py-1 rounded-sm border border-gray-400">
                                    <option v-for="color in productColors" :value="color">
                                        {{color}}
                                    </option>
                                </select>
                            </div>
                            <div>
                                <h3 class="text-md text-gray-500 mb-1">Size</h3>
                                <select class="px-5 py-1 rounded-sm border border-gray-400">
                                    <option v-for="size in productSzies" :value="size">
                                        {{size}}
                                    </option>
                                    
                                </select>
                            </div>
                        </div>
                    </div>
                    <i 
                    @click="storeFavourite.removeFavourite(product)"
                    class="fa-solid fa-trash text-lg absolute top-0 right-0 cursor-pointer"></i>
                </div>
                <div class="w-full">
                    <button 
                    @click="storeCart.addToCart(product)"
                    class="w-full flex justify-center py-3 rounded-md bg-transparent border-2 text-black hover:bg-black hover:text-white transition-all duration-300 ease-in-out cursor-pointer">Add to Card</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import Short_Sleeve_Shirt4 from '../assets/Short_Sleeve_Shirt4.jpg'
    import { useCartStore } from '../stores/cart';
    import { StoreFavouriteCart } from '../stores/favoutite';
    const storeFavourite=StoreFavouriteCart();
    const storeCart=useCartStore()
    const productColors=['White','Black','Green','Yellow']
    const productSzies=['S','L','M','XL','XXL']
</script>
<style lang="">
    
</style>