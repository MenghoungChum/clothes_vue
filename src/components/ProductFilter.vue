<template lang="">
    <div class="w-full h-[70px] bg-gray-300 flex items-center justify-between">
        <div class="flex gap-8 items-center">
            <div>
                About Product
            </div>
            <div>
                <Button text="Filter" icon="fa-solid fa-filter" />
            </div>
        </div>
        <div class="flex items-center border-2 rounded-md border-gray-400 lg:px-6 px-2 lg:py-1 py-1 shadow gap-2">
            <i class="fa-solid fa-sort"></i>
            Short By: Recommend
        </div>
    </div>
</template>
<script setup>
    import Button from './Button.vue';
</script>
<style lang="">
    
</style>