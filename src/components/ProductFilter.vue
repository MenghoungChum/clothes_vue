<template lang="">
    <div class="w-full h-17.5 flex items-center justify-between sticky top-[72px] z-200">
        <div class="flex gap-8 items-center cursor-pointer">
            <div>
                About Product
            </div>
            <div>
                <Button
               @click="toggleFilter()"
                text="Filter" icon="fa-solid fa-filter" />
            </div>
        </div>

        <div class="w-112.5 h-screen fixed right-0 top-0 bg-white z-50 p-6 shadow shadow-olive-500 transition-all duration-300 ease-in-out"
            :class="openFilter ? 'translate-x-0': 'translate-x-full'"
        >
            <div class="w-full h-full relative">
                <div class="flex justify-between items-center my-8">
                    <p class="text-lg font-bold">Filter</p>
                    <i 
                    @click="toggleFilter()"
                    class="fa-solid fa-xmark text-2xl cursor-pointer font-bold text-gray-700 hover:text-black transition-all duration-300 ease-in-out"></i>
                </div>
                <div class="w-full h-137.5 overflow-y-scroll no-scrollbar">
                    <p class="text-2xl font-bold">Price Range</p>
                    <div>
                        <input
                        type="range"
                        min="0"
                        max="100"
                        v-model="price"
                        class="w-full"
                        />
                    </div>

                    <p class="text-2xl font-bold mt-6 mb-3">Size</p>
                    <div class="w-full grid grid-cols-3 gap-2 p-1">
                        <div class="px-8 py-2 ring-1 ring-black rounded-md flex justify-center font-bold">M</div>
                        
                    </div>

                    <p class="text-2xl font-bold mt-6 mb-3">Color</p>
                    <div class="w-full grid grid-cols-3 gap-2 p-1">
                        <div class="px-8 py-2 ring-1 ring-black rounded-md flex justify-center items-center gap-3">
                            <div class="w-4 h-4" :style="{ backgroundColor: '#000000' }"></div>
                            <p>Black</p>
                        </div>
            
                    </div>
                </div>
                <div class="w-full  h-25 flex items-center gap-3 absolute bottom-0 left-0 right-0 bg-white">
                    <button class=" w-[50%] py-2 rounded-md bg-gray-500">Clear</button>
                    <button class=" w-[50%] py-2 rounded-md bg-black text-white" >Apply</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { ref } from 'vue';
import Button from './Button.vue';
    const openFilter=ref(false)
    function toggleFilter(){
        openFilter.value= !openFilter.value
    }
</script>
<style lang="">
    
</style>