
<template lang="">
    <div className="w-full relative">
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
                        <input 
                        readonly
                        @click="openSearch = true"
                        type="" placeholder="Search product" className="outline-0" />
                    </div>
                    <div class="flex gap-6 items-center ">
                        <i class="fa-regular fa-bell text-xl hover:text-gray-500"></i>
                        <i 
                            @click="router.push('/favorite')"
                            class="fa-regular fa-heart text-xl hover:text-gray-500 relative"
                        >
                            <div class="w-4 h-4 rounded-full bg-red-500 text-white flex justify-center items-center absolute -top-2 -right-2 text-sm p-2">{{favouritestore.favouriteCart.length}}</div>
                        </i>
                        <i 
                            @click="openCartSidbar=true"
                            class="fa-solid fa-bag-shopping text-xl hover:text-gray-500 relative"
                            ><div class="w-4 h-4 rounded-full bg-red-500 text-white flex justify-center items-center absolute -top-2 -right-2 text-sm p-2">{{cartStore.cart.length}}</div>
                        </i>
                        <div class="block md:hidden">
                            <i
                            @click="openSideBar=!openSideBar"
                            class="fa-solid fa-bars text-xl hover:text-gray-500"
                            >
                        </i>
                        </div>
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
             <div class="w-full p-2 border border-gray-500">
                <input
                type="text"
                placeholder="Search product"
                class="outline-none w-full"
                />

            </div>
        </div>
        
        <!-- Search block -->
         <div 
            :class="openSearch ? 'translate-y-0' : '-translate-y-full'"
            class="w-full h-100 bg-white/40 backdrop-blur-2xl fixed top-0 left-0 py-10 px-28 transition-all duration-300 ease-in-out"
         >
         
            <div class="w-full h-20 border-b-2 border-b-black relative flex justify-center items-center">
                <input 
                v-model="textSearch"
                placeholder="Enter product name to search" class="w-full p-3 outline-0 text-black text-xl"/>
                <div class="absolute right-6 h-full flex justify-center items-center gap-8">
                    <i class="fa-solid fa-magnifying-glass text-xl cursor-pointer"></i>
                    <i 
                    @click="openSearch=false, textSearch=''"
                    class="fa-solid fa-x text-xl cursor-pointer"></i>
                </div>
            </div>
            <div class="w-full max-h-60 overflow-y-scroll no-scrollbar py-3">
                <p 
                v-for="name in productName" :key="name.id"
                @click="goToDetail(name), openSearch=false,textSearch=''"
                class="px-2 py-2 w-full hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">{{name.name}}</p>
    
            </div>
         </div>

         <!-- Add to card Side bar -->
        <div 
            :class="openCartSidbar? 'right-0': '-right-full'"
            class="w-125 h-screen bg-white shadow-xl fixed top-0 px-4 flex flex-col transition-all duration-300 ease-in-out">
                <div class="w-full h-18 flex items-center justify-between border-b border-b-gray-500 mb-2">
                    <i 
                    @click="openCartSidbar=false"
                    class="fa-solid fa-x text-xl cursor-pointer"></i>
                    <i 
                    @click="router.push('/favorite')"
                    class="fa-regular fa-heart text-2xl cursor-pointer"></i>
                </div>
                <div class="w-full h-100  flex flex-col gap-4 overflow-y-scroll no-scrollbar">
                    <div v-if="cartStore.cart.length>0" class="h-auto flex flex-col gap-3 w-full">
                        
                        <div v-for="product in cartStore.cart" :key="product.product.id" class="flex items-center w-full gap-2 justify-between relative">
                            <div class="w-[30%] h-full">
                                <img :src="product.product.colors[0].images[0]" alt="" class="w-full h-full object-cover"/>
                            </div>
                            <div class="w-[70%] h-full">
                                <h3>{{product.product.name}}-{{product.color}}</h3>
                                <p>{{product.product.price}} $</p>
                                <div class="w-full h-20 gap-3.5 flex items-center">
                                    <div>
                                        <h3 class="text-md text-gray-500 mb-1">Size</h3>
                                        <select 
                                        v-model="product.size"
                                        class="px-5 py-1 rounded-sm border border-gray-400">
                                            <option v-for="size in productSizes" :key="size" :value="size">
                                                {{size}}
                                            </option>
                                        </select>
                                    </div>
                                    <div>
                                        <h3 class="text-md text-gray-500 mb-1">Quantity</h3>
                                        <select
                                        v-model="product.quantity"
                                        class="px-5 py-1 rounded-sm border border-gray-400">
                                            <option v-for="quantity in productQuantity" :key="quantity" :value="quantity">
                                                {{quantity}}
                                            </option>
                                            
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <i 
                            @click="cartStore.removeCart(product.product.id)"
                            class="fa-solid fa-trash text-lg absolute top-0 right-0 cursor-pointer"></i>
                        </div>
                    </div>
                    <div 
                    @click="router.push('/'), openCartSidbar=false"
                    v-else class="w-full h-full flex flex-col justify-center items-center">
                        <p class="my-8 text-red-500 text-xl">No product</p>
                        <button class="w-75 block h-10 rounded-md text-white bg-black hover:bg-gray-800">Go to shopping</button>
                    </div>
                </div>
                <div class="w-full flex-1">
                    <div class="w-full flex justify-between items-center my-2">
                        <span class="text-2xl font-bold">Total</span>
                        <span class="text-2xl font-bold">${{cartStore.total}}</span>
                    </div>
                    <div class="w-full flex justify-between items-center">
                        <span>Discount</span>
                        <span>$ {{cartStore.discount}}</span>
                    </div>
                    <div class="w-full flex justify-between items-center my-2 mb-4">
                        <span>Delivery fee</span>
                        <span>${{cartStore.DELIVERY_FEE}}</span>
                    </div>
                    <hr class="my-2"/>
                    <div class="w-full flex justify-between items-center my-5">
                        <span class="text-2xl font-bold">Amount to pay</span>
                        <span class="text-2xl font-bold">$ {{cartStore.amountToPay}}</span>
                    </div>
                    <div class="w-full h-12 rounded-md overflow-hidden">
                        <button class="w-full h-full text-white bg-black cursor-pointer transition-all duration-200 ease-in-out hover:bg-gray-800">Add to cart</button>
                    </div>
                </div>
          </div>
    </div>

    
    
</template>
<script setup>
    import { computed, ref } from 'vue';
    import Logo from '../assets/Logo.png'
    import Banner from '../assets/banner.jpg'
    import { useRoute, useRouter } from 'vue-router';
    import { navBar, products } from '../data/data';
    import Short_Sleeve_Shirt4 from '../assets/Short_Sleeve_Shirt4.jpg'
import { useCartStore } from '../stores/cart';
import { StoreFavouriteCart } from '../stores/favoutite';
    const openSideBar=ref(false)
    const route=useRoute()
    const router=useRouter()
    let active=ref("/");
    const openSearch=ref(false)
    const textSearch=ref("")

    const productName=computed(()=>{
        if(!textSearch.value) return products;
        return products.filter((pname)=>pname.name.toLowerCase().includes(textSearch.value.toLowerCase()));
    })
    const productSizes=['S','M','L','XL','XXL'];
    const productQuantity=[1,2,3,4,5,6,7,8]

    function goToDetail(name){
        router.push(`/${name.section}/${name.id}`)
    }

    const openCartSidbar=ref(false)
    const cartStore=useCartStore()
    const favouritestore=StoreFavouriteCart()
    

    
</script>
<style scoped>
    
</style>