import { createWebHistory, createRouter } from "vue-router";
import Login from '@/views/login.vue';
import Signup from '@/views/signup.vue';
import SwordWindBuild from '@/views/sword-wind-build.vue';
const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/sword-wind-build",
    name: "sword-wind-build",
    component: SwordWindBuild,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;