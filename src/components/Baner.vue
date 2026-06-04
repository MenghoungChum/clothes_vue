<template lang="">
    <div className="w-full max-h-[calc(100-30px)] relative">
        <img :src="banner" className="w-full h-full"/>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-20 flex gap-8">
            <button type="buttone" className="border-3 rounded-md border-black lg:px-10 px-4 lg:py-2 py-1 shadow font-bold">Men</button>
            <button type="buttone" className="border-3 rounded-md border-black lg:px-10 px-4 lg:py-2 py-1 shadow font-bold">Women</button>
        </div> 
    </div>
</template>
<script setup>
    import banner from "../assets/banner.jpg"
</script>
<style lang="">
    
</style>