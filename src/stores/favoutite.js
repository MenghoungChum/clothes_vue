import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { useToaster } from "../composables/useToast";
import Swal from "sweetalert2";

export const StoreFavouriteCart=defineStore('favourite',()=>{
    const {showToaster} =useToaster();
    const favouriteCart=ref(JSON.parse(localStorage.getItem('favourites'))|| []);

    const isFavourit=(product)=>{
        return favouriteCart.value.some(p=>p.id==product.id)
    }
    const addToFavourite=(product)=>{
        const index = favouriteCart.value.findIndex(p => p.id === product.id)
        if(index== -1){
            favouriteCart.value.push(product)
            showToaster(`${product.name} Add to cart successfully`,'success')
        }else{
            favouriteCart.value.splice(index,1)
            showToaster(`${product.name} already added to cart`,'warning')
        }
    }

    const removeFavourite= async(product)=>{
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
                favouriteCart.value=favouriteCart.value.filter(p=>p.id !==product.id)
                showToaster('Item removed from favourite', 'success')
            }
        

        
    }
    watch(
        favouriteCart.value,
        (newValue)=>{
            localStorage.setItem('favourites',JSON.stringify(newValue))
        }
    )
    return {
        favouriteCart,
        addToFavourite,
        isFavourit,
        removeFavourite
    }
})