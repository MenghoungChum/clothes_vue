
<template lang="">
    <div className="sticky top-0">
        <nav className="w-full max-w-7xl max-h-18 mx-auto flex justify-between items-center py-3">
            <div className="flex items-center gap-6 px-2 py-2">
                <a className="font-medium text-lg uppercase" href="">Women</a>
                <a className="font-medium text-lg uppercase" href="">Man</a>
                <a className="font-medium text-lg uppercase" href="">Z.home</a>
                <a className="font-medium text-lg uppercase" href="">LiftStyle</a>
            </div>
            <div className="w-35">
                <img :src="Logo"/>
            </div>
            <div className="flex justify-between items-center gap-10">
                <div className="flex items-center flex-1 px-2 py-1 outline-0 border-2 rounded-md relative">
                    <input type="" placeholder="Search product" className="outline-0" />
                </div>
                <div className="flex gap-6 items-center ">
                    <i class="fa-regular fa-bell text-xl hover:text-gray-500"></i>
                    <i class="fa-regular fa-heart text-xl hover:text-gray-500"></i>
                    <i class="fa-solid fa-bag-shopping text-xl hover:text-gray-500"></i>
                </div>

                <Bell />
                <div className="flex gap-4 items-center">
                    <button className="cursor-pointer hover:text-gray-500">Login</button>
                    <button className="cursor-pointer hover:text-gray-500">Register</button>
                </div>
            </div>
        </nav>
        <div className="max-w-7xl  mx-auto flex items-center justify-center py-2 bg-black text-white font-bold">Shop 40$ Free delivery</div>
    </div>
</template>
<script setup>
    import Logo from '../assets/Logo.png'
    import Banner from '../assets/banner.jpg'
</script>
<style scoped>
    
</style>