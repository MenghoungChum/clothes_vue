import HomePage from "../components/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";
import ManCategory from "../components/ManCategory.vue";
import DetailPage from "../components/DetailPage.vue";
import WomanCategory from "../components/WomanCategory.vue";
import LifeStyle from "../components/LifeStyle.vue";
import FavoritePage from "../components/FavoritePage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/man",
    component: ManCategory,
  },
  {
    path: "/man/:id",
    component: DetailPage,
  },
  {
    path: "/woman",
    component: WomanCategory,
  },
  {
    path: '/lifeStyle',
    component: LifeStyle
  },
  {
    path: '/favorite',
    component: FavoritePage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;