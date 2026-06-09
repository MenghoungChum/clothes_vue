<script setup>
import HomePage from './components/HomePage.vue';
import Navbar from './components/Navbar.vue';


</script>

<template>
    <div className=" max-w-7xl h-auto mx-auto pb-20">
         <div class="sticky top-0 z-50 bg-white">
            <Navbar />
        </div>
        <router-view/>
    </div>
</template>
