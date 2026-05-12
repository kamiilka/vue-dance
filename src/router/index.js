import { createRouter, createWebHistory } from "vue-router";
import Form from "../components/form.vue";
import Random from "../components/random.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Form,
    },
    {
      path: "/pairs",
      name: "pairs",
      component: Random,
    },
  ],
});

export default router;
