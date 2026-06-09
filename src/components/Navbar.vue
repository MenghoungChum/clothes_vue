
<template lang="">
    <div className="w-full">
        <div className=" bg-white">
            <nav className="w-full max-w-7xl max-h-18 mx-auto flex md:justify-between justify-end items-center py-3 px-3 md:px-2 lg:px-0">
                <div className=" items-center gap-3 md:gap-6 px-2 py-2 hidden md:flex">
                    <router-link 
                    
                    v-for="item in navBar" :key="item.id" 
                    class="font-medium md:text-md lg:text-lg uppercase text-sm transition-all duration-200 ease-in-out" :to="item.path"
                    @click="active=item.path"
                    :class="active==item.path ? 'underline' :  ''"
                    >{{ item.name}}</router-link>
                    
                </div>
                <div className="w-35 hidden lg:block">
                    <img :src="Logo"/>
                </div>
                <div className="flex justify-between items-center gap-10">
                    <div class="hidden md:flex items-center flex-1 px-2 py-1 outline-0 border-2 rounded-md relative">
                        <input type="" placeholder="Search product" className="outline-0" />
                    </div>
                    <div class="flex gap-6 items-center ">
                        <i class="fa-regular fa-bell text-xl hover:text-gray-500"></i>
                        <i class="fa-regular fa-heart text-xl hover:text-gray-500"></i>
                        <i class="fa-solid fa-bag-shopping text-xl hover:text-gray-500"></i>
                        <i
                            @click="openSideBar=!openSideBar"
                            class="fa-solid fa-bars text-xl hover:text-gray-500 md:hidden"
                            ></i>
                    </div>
                    <div className=" gap-4 items-center hidden md:flex">
                        <button className="cursor-pointer hover:text-gray-500">Login</button>
                        <button className="cursor-pointer hover:text-gray-500">Register</button>
                    </div>
                </div>
            </nav>
        </div>
        <div v-if="route.path=='/'" className="max-w-7xl mx-auto flex items-center justify-center py-2 bg-black text-white font-bold">Shop 40$ Free delivery</div>

        <div :class="['w-[80%] z-20 min-h-screen bg-white/40 backdrop-blur-2xl fixed top-0 left-0 transition-all ease-in-out',openSideBar ? 'translate-x-0' : '-translate-x-full']">
            <div className="w-full min-h-11  border-b-2 border-b-olive-400 flex justify-between items-center p-4">
                <div className="w-20">
                    <img :src="Logo"/>
                </div>
                    <i 
                    @click="openSideBar=false"
                    class="fa-solid fa-xmark text-xl hover:text-gray-500 cursor-pointer"></i>
            </div>
            <div>
                <a className="font-medium md:text-lg uppercase text-sm block p-3 hover:bg-gray-500 transition-all ease-in-out" href="">Women</a>
                <a className="font-medium md:text-lg uppercase text-sm block p-3 hover:bg-gray-500 transition-all ease-in-out" href="">Man</a>
                <a className="font-medium md:text-lg uppercase text-sm block p-3 hover:bg-gray-500 transition-all ease-in-out"  href="">Z.home</a>
                <a className="font-medium md:text-lg uppercase text-sm block p-3 hover:bg-gray-500 transition-all ease-in-out" href="">LiftStyle</a>
                
            </div>
            <div className="w-full p-2 border border-gray-500">
                <input type="text" placeholder="Search product" className="outline-0 w-full" />
            </div>
        </div>
    </div>
    
    
</template>
<script setup>
    import { ref } from 'vue';
    import Logo from '../assets/Logo.png'
    import Banner from '../assets/banner.jpg'
    import { useRoute } from 'vue-router';
    import { navBar } from '../data/data';
    const openSideBar=ref(false)
    const route=useRoute()
    let active=ref("/");
     
</script>
<style scoped>
    
</style>