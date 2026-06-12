<template>
  <div v-if="product" class="flex justify-between gap-25 h-180">
    <div class="w-[55%] h-full flex items-center gap-2">
      <!-- Thumbnail Images -->
      <div class="w-[14%] h-full flex flex-col gap-4">
        <img v-for="img in selectedColor.images"
          :src="img"
          alt=""
          @click="mainImage=img"
          :class="mainImage===img ? 'ring-2 ring-black': ''"
          class="w-full h-[17%] object-cover cursor-pointer"
        />
        
      </div>
      <!-- Main Image -->
      <div class="w-[86%] h-full">
        <img :src="mainImage" :alt="product.name" class="w-full h-full object-cover" />
      </div>
    </div>

    <div class="w-[45%] h-full">
      <!-- Product Info -->
      <div>
        <p class="text-xl font-bold">${{ product.price }}</p>
        <p class="my-3 text-md">{{ product.name }}</p>
      </div>

      <!-- Colors -->
      <div>
        <p class="font-medium">{{ product.colors.length }} color available</p>
        <div class="flex gap-3 mt-3">
          <div
            class="cursor-pointer"
            v-for="color in product.colors"
          >
            <div class="w-30 h-37.5">
              <img 
              @click="selectColor(color)"
              :src="color.images[0]" alt="" 
              class="w-full h-full object-cover" 
              :class="color.name===selectedColor.name ? 'ring-2 ring-black': ''"
              />
            </div>
            <p class="text-center">{{ color.name }}</p>
          </div>
        </div>
      </div>

      <!-- Sizes -->
      <div class="mt-12">
        <p class="font-medium text-lg">Size</p>
        <div class="h-10 flex items-center gap-5 my-2">
          <div
            v-for="size in ['S', 'M', 'L', 'XL']"
            :key="size"
            class="w-17.5 h-full bg-gray-300 rounded-md flex justify-center items-center font-medium cursor-pointer",
            :class="selectedSize===size? 'ring-2 ring-black': ''"
            @click="selectedSize=size"
          >
            {{ size }}
          </div>
        </div>
      </div>

      <!-- Quantity -->
      <div class="mt-6">
        <p class="font-medium text-lg">Quantity</p>
        <div class="h-10 flex items-center gap-3 my-2">
          <button
            class="w-17.5 h-full bg-gray-300 rounded-md flex justify-center items-center font-medium"
            @click="quantity>1 && quantity--"
          >-</button>
          <span class="font-medium text-lg w-17.5 h-full flex justify-center items-center ">{{ quantity }}</span>
          <button
            class="w-17.5 h-full bg-gray-300 rounded-md flex justify-center items-center font-medium"
            @click="quantity++"
          >+</button>
        </div>
      </div>

      <!-- Actions -->
      <div class="w-full h-12.5 flex items-center gap-3 mt-7">
        <button 
        @click="cartStore.addToCart(product,selectedColor.name,selectedSize,quantity)"
        class="flex-1 h-full rounded-md bg-black text-white font-bold cursor-pointer">
          Add to Cart
        </button>
        <div class="p-4 rounded-md bg-gray-100 flex justify-center items-center">
          <i class="fa-regular fa-heart"></i>
        </div>
      </div>
    </div>
  </div>

  <!-- Loading state -->
  <div v-else class="flex justify-center items-center h-180">
    <p>Loading...</p>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue"
import { useRoute } from "vue-router"
import { products } from "../data/data"
import { useCartStore } from "../stores/cart"

  onMounted(() => {
    window.scrollTo({
      top: 0,
    })
  })

const selectedColor=ref(null)
const route=useRoute();
const mainImage=ref(null)
const product=ref(null)
const selectedSize=ref("");
const quantity=ref(1)

function selectColor(color){
  selectedColor.value=color
  mainImage.value=color.images[0]
}

watch(
  () => route.params.id,
  (newId) => {
    const id = Number(newId)
    product.value = products.find(p => p.id === id)

    if (product.value) {
      selectedColor.value = product.value.colors[0]
      mainImage.value = product.value.colors[0].images[0]
      selectedSize.value = "M"   // reset size
      quantity.value = 1          // reset quantity
    }

    window.scrollTo({ top: 0 })
  },
  { immediate: true } // runs on first load too, replaces onMounted
)
const cartStore=useCartStore()
</script>