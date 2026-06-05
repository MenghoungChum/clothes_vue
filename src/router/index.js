import HomePage from "../components/HomePage.vue";
import { createRouter, createWebHistory } from 'vue-router'
import ManCategory from "../components/ManCategory.vue";
import ShopLayout from "../components/Layouts/ShopLayout.vue";

const routes=[
    {
        path: "/",
        component: HomePage
    },
    {
        path: "/",
        component: ShopLayout,
        children:[
            {
                path: "/man",
                component: ManCategory
            }
        ]
    }
    
]

const router=createRouter({
    history: createWebHistory(),
    routes
})

export default router