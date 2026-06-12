import { ref } from "vue";

const visible=ref(false)
const message=ref("")
const typeMessage=ref("");
let timer=null

export function useToaster(){
    const showToaster=(msg="Add to cart successfully",toastType="success")=>{
        message.value=msg
        typeMessage.value=toastType
        visible.value=false
        requestAnimationFrame(()=>{
            visible.value=true
            clearTimeout(timer)
            timer=setTimeout(()=> visible.value=false ,3000)
        })   
    }
    return {
        visible,
        showToaster,
        message,
        typeMessage
    }
}