<script setup>
import HomePage from './components/HomePage.vue';
import Navbar from './components/Navbar.vue';
import { useToaster } from './composables/useToast.js';
const {visible,message,typeMessage}=useToaster();

</script>

<template>
    <div className=" max-w-7xl h-auto mx-auto pb-20">
         <div class="sticky top-0 z-50 bg-white">
            <Navbar />
        </div>
        <router-view/>

        <!-- Toaster alert -->
        <Transition name="toast">
            <div
                v-if="visible"
                class="fixed top-5 right-5 z-1000 flex items-center gap-3 bg-white border shadow-lg rounded-xl px-4 py-3 min-w-65"
                :class="typeMessage === 'warning' ? 'border-yellow-300' : 'border-green-200'"
            >
                <!-- success icon -->
                <div v-if="typeMessage === 'success'" class="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 shrink-0">
                <svg class="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                </div>
                <!-- warning icon -->
                <div v-else class="flex items-center justify-center w-6 h-6 rounded-full bg-yellow-100 shrink-0">
                <svg class="w-4 h-4 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                </svg>
                </div>

                <span class="text-sm font-medium text-gray-800 flex-1">{{ message }}</span>
                <button @click="visible = false" class="text-gray-400 hover:text-gray-600 text-lg leading-none">✕</button>
            </div>
        </Transition>
    </div>
</template>
