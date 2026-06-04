<template>
  <Swiper
    :slides-per-view="1"
    :loop="true"
    :autoplay="{ delay: 3000, disableOnInteraction: false }"
    :modules="modules"
  >
    <SwiperSlide
      v-for="item in bannerData"
      :key="item.id"
    >
      <img :src="item.image" :alt="item.id" />
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { bannerData } from '../data/data.js'

const modules = [Autoplay]
</script>

<style scoped>
img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
</style>