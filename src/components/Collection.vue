<template lang="">
    <h1 className="text-3xl font-bold pb-5 pt-16">😒Clock it Collection😒</h1>
    <div className="grid grid-cols-4">
        <div className="relative">
            <div className="h-105">
                <img :src="collection1" alt="" className="w-full h-full object-cover">
            </div>

            <div className="flex gap-3 items-center pt-6">
                <p className="font-bold text-xl">100$</p>
                <p className="text-red-500 line-through font-bold text-lg">Discount</p>
            </div>
            <p className="text-md">New Shoes</p>
            <div>
                color
            </div>
        </div>
    </div>
</template>
<script setup>
    import collection1 from '../assets/collection1.jpg'
</script>
<style lang="">
    
</style>