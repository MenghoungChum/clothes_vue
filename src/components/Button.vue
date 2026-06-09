<template lang="">
    <div>
        <button type="buttone" class=" cursor-pointer border-2 rounded-md border-gray-400 lg:px-6 px-2 lg:py-1 py-1 shadow"><i v-if="icon" :class="icon"></i> {{text}}</button>
    </div>
</template>
<script setup>
    const {text}=defineProps({
        text:String,
        icon: {
            type: String,
            default:null
        }
    })
</script>
<style lang="">
    
</style>