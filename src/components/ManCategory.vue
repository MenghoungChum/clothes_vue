<template>
  <div class="my-8 flex gap-6">
    <!-- Filter Sidebar -->
    <aside class="w-56 shrink-0">
      <div class="border border-gray-200 rounded-xl p-4 space-y-5">
        <p class="text-xs font-medium text-gray-500 uppercase tracking-wider">Filters</p>

        <!-- Price Range -->
        <div>
          <p class="text-sm font-medium mb-3">Price</p>
          <div class="relative h-2 mx-1 mb-4">
            <!-- Background track -->
            <div class="absolute w-full h-full bg-gray-200 rounded"></div>
            <!-- Active fill -->
            <div
              class="absolute h-full bg-black rounded"
              :style="{
                left: `${(filters.priceMin / maxPrice) * 100}%`,
                right: `${100 - (filters.priceMax / maxPrice) * 100}%`
              }"
            ></div>
            <!-- Min thumb -->
            <input
              v-model.number="filters.priceMin"
              type="range"
              min="0"
              :max="maxPrice"
              step="1"
              class="price-range absolute w-full pointer-events-none appearance-none bg-transparent"
            />
            <!-- Max thumb -->
            <input
              v-model.number="filters.priceMax"
              type="range"
              min="0"
              :max="maxPrice"
              step="1"
              class="price-range absolute w-full pointer-events-none appearance-none bg-transparent"
            />
          </div>
          <div class="flex justify-between text-sm text-gray-600">
            <span>${{ filters.priceMin }}</span>
            <span>${{ filters.priceMax }}</span>
          </div>
        </div>

        <!-- Category -->
        <div class="border-t pt-4">
          <p class="text-sm font-medium mb-2">Category</p>
          <div class="flex flex-col gap-2">
            <label
              v-for="cat in allCategories"
              :key="cat"
              class="flex items-center gap-2 text-sm cursor-pointer"
            >
              <input type="checkbox" :value="cat" v-model="filters.categories" />
              {{ cat }}
            </label>
          </div>
        </div>

        <!-- Size -->
        <div class="border-t pt-4">
          <p class="text-sm font-medium mb-2">Size</p>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="size in allSizes"
              :key="size"
              @click="toggleFilter(filters.sizes, size)"
              :class="
                filters.sizes.includes(size)
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-black border-gray-300 hover:border-gray-500'
              "
              class="px-2.5 py-1 text-sm rounded border transition-colors"
            >
              {{ size }}
            </button>
          </div>
        </div>

        <!-- Color -->
        <div class="border-t pt-4">
          <p class="text-sm font-medium mb-2">Color</p>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="color in allColors"
              :key="color.name"
              @click="toggleFilter(filters.colors, color.name)"
              :title="color.name"
              :style="{ backgroundColor: color.value }"
              :class="
                filters.colors.includes(color.name)
                  ? 'ring-2 ring-offset-2 ring-black'
                  : ''
              "
              class="w-6 h-6 rounded-full border border-gray-300 transition-all"
            ></button>
          </div>
        </div>

        <!-- Clear -->
        <div class="border-t pt-4">
          <button
            @click="clearFilters"
            class="w-full text-sm border border-gray-300 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors"
          >
            Clear all
          </button>
        </div>
      </div>
    </aside>

    <!-- Product Grid -->
    <div class="flex-1">
      <div class="flex justify-between items-center mb-4">
        <p class="text-sm text-gray-500">
          Showing {{ filteredProducts.length }} product{{ filteredProducts.length !== 1 ? 's' : '' }}
        </p>
        <select
          v-model="sortOrder"
          class="text-sm border border-gray-300 rounded px-2 py-1"
        >
          <option value="">Sort: featured</option>
          <option value="asc">Price: low → high</option>
          <option value="desc">Price: high → low</option>
        </select>
      </div>

      <div v-if="filteredProducts.length === 0" class="text-center py-16 text-gray-400 text-sm">
        No products match the selected filters.
      </div>

      <div class="grid grid-cols-3 gap-3">
        <RouterLink
          v-for="product in filteredProducts"
          :key="product.id"
          :to="`/man/${product.id}`"
          class="cursor-pointer group"
        >
          <!-- Image -->
          <div
            @mouseenter="hoverId = product.id"
            @mouseleave="hoverId = null"
            class="h-100 relative overflow-hidden rounded-lg bg-gray-100"
          >
            <img
              :src="getImage(product, false)"
              alt=""
              class="w-full h-full absolute inset-0 object-cover transition-opacity duration-300 ease-in-out"
            />
            <img
              :src="getImage(product, true)"
              :class="hoverId === product.id ? 'opacity-100' : 'opacity-0'"
              alt=""
              class="w-full h-full absolute inset-0 object-cover transition-opacity duration-300 ease-in-out"
            />
          </div>

          <!-- Info -->
          <div class="flex justify-between items-start mt-3">
            <div>
              <p class="font-medium text-base">{{ product.name }}</p>
              <p class="text-sm text-gray-500 mt-0.5">${{ product.price.toFixed(2) }}</p>
            </div>
            <button
              @click.prevent="toggleWishlist(product.id)"
              class="mt-1"
            >
              <i
                :class="wishlist.includes(product.id) ? 'fa-solid fa-heart text-red-500' : 'fa-regular fa-heart text-gray-400'"
              ></i>
            </button>
          </div>

          <!-- Color swatches -->
          <div class="flex gap-2 items-center mt-2">
            <div
              v-for="(color, index) in product.colors"
              :key="index"
              class="w-4 h-4 rounded-full border border-gray-200"
              :style="{ backgroundColor: color.value }"
              :title="color.name"
            ></div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { products } from '../data/data'

// ── Wishlist ───────────────────────────────────────────────
const wishlist = ref([])

function toggleWishlist(id) {
  const i = wishlist.value.indexOf(id)
  i === -1 ? wishlist.value.push(id) : wishlist.value.splice(i, 1)
}

// ── Hover ──────────────────────────────────────────────────
const hoverId = ref(null)

function getImage(product, isHovered) {
  return isHovered ? product.colors[0].images[1] : product.colors[0].images[0]
}

// ── Filter options ─────────────────────────────────────────
const allCategories = ['T-Shirt', 'Hoodie', 'Jeans', 'Jacket']
const allSizes = ['S', 'M', 'L', 'XL', 'XXL']
const allColors = [
  { name: 'Black',  value: '#000000' },
  { name: 'Gray',   value: '#808080' },
  { name: 'Blue',   value: '#1e3a8a' },
  { name: 'Purple', value: '#6a5acd' },
]

// ── Max price derived from data ────────────────────────────
const manProducts = products.filter(p => p.section === 'man')
const maxPrice = computed(() =>
  Math.ceil(Math.max(...manProducts.map(p => p.price)))
)

// ── Filters state ──────────────────────────────────────────
const filters = ref({
  priceMin: 0,
  priceMax: maxPrice.value,
  categories: [],
  sizes: [],
  colors: [],
})

const sortOrder = ref('')

// Prevent thumbs from crossing
watch(() => filters.value.priceMin, (val) => {
  if (val > filters.value.priceMax) filters.value.priceMin = filters.value.priceMax
})
watch(() => filters.value.priceMax, (val) => {
  if (val < filters.value.priceMin) filters.value.priceMax = filters.value.priceMin
})

// ── Helpers ────────────────────────────────────────────────
function toggleFilter(arr, value) {
  const i = arr.indexOf(value)
  i === -1 ? arr.push(value) : arr.splice(i, 1)
}

function clearFilters() {
  filters.value = {
    priceMin: 0,
    priceMax: maxPrice.value,
    categories: [],
    sizes: [],
    colors: [],
  }
  sortOrder.value = ''
}

// ── Filtered + sorted products ─────────────────────────────
const filteredProducts = computed(() => {
  const { priceMin, priceMax, categories, sizes, colors } = filters.value

  let result = manProducts.filter(p => {
    if (p.price < priceMin || p.price > priceMax) return false
    if (categories.length && !categories.includes(p.category)) return false
    if (sizes.length && !sizes.some(s => p.sizes.includes(s))) return false
    if (colors.length && !colors.some(c => p.colors.some(pc => pc.name === c))) return false
    return true
  })

  if (sortOrder.value === 'asc') result = [...result].sort((a, b) => a.price - b.price)
  if (sortOrder.value === 'desc') result = [...result].sort((a, b) => b.price - a.price)

  return result
})
</script>

<style scoped>
.price-range::-webkit-slider-thumb {
  pointer-events: all;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #000;
  border: 2px solid #fff;
  box-shadow: 0 0 0 1px #000;
  appearance: none;
  cursor: pointer;
}

.price-range::-moz-range-thumb {
  pointer-events: all;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #000;
  border: 2px solid #fff;
  box-shadow: 0 0 0 1px #000;
  cursor: pointer;
}

.price-range::-webkit-slider-runnable-track {
  background: transparent;
}
</style> 