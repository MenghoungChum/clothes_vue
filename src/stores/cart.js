
import { defineStore } from 'pinia';
import { computed, onMounted, ref, watch } from 'vue'
import { useToaster } from '../composables/useToast';
import Swal from 'sweetalert2'

export const useCartStore =defineStore('cart',()=>{
    const {showToaster}=useToaster()
    
    const cart=ref(JSON.parse(localStorage.getItem('cart')) || []);

    const addToCart=(product,color,size,quantity)=>{
        const existing=cart.value.find(
            item =>item.product.id === product.id)
        if(existing){
            existing.product.product.quantity++
            showToaster(`${product.name} already add to cart`,'warning')
        }else{
            cart.value.push({product,color,size,quantity})
            showToaster( `Product ${product.name} Add to cart successfully`,'success')
        }   
    }

    const removeCart=async (id)=>{
        const result = await Swal.fire({
            title: 'Remove item?',
            text: 'This item will be removed from your cart.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, remove it',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#ef4444',
            cancelButtonColor: '#6b7280',
        })
    
         if (result.isConfirmed) {
            cart.value = cart.value.filter(p => p.product.id !== id)
            showToaster('Item removed from cart', 'success')
        }
    }

    const DELIVERY_FEE = 2
    const total = computed(() =>cart.value.reduce((sum, item) => sum + item.product.price * item.quantity, 0))
    const discount = computed(() => {
        return cart.value.reduce((sum, item) => {
            const discountRate = item.product.discount || 0
            return sum + (item.product.price * item.quantity) * (discountRate / 100)
        }, 0)
    })

    const amountToPay = computed(() => 
        total.value - discount.value + DELIVERY_FEE  // ✅ no .value on DELIVERY_FEE
    )
    watch(
        cart,
        (newValue)=>{
            localStorage.setItem('cart',JSON.stringify(newValue))
        },
        {deep: true}
    )


    return {
        addToCart,
        cart,
        removeCart,
        total,
        DELIVERY_FEE,
        total,
        discount,
        amountToPay
    }
})