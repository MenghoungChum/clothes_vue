
<template>
  <div className="py-10">
    <Swiper
        :breakpoints="{
          768: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 40
          }
        }"
        :loop="true"
        :pagination="{ clickable: true }"
        :navigation="true"
        :modules="modules"
    >
        <SwiperSlide v-for="item in brandSlide" :key="item.id">
        <img :src="item.image" :alt="'Image'+ item.id" class="">
        </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {brandSlide} from '../data/data.js'

const modules = [Navigation, Pagination]
</script>

<style scoped>
img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
</style>