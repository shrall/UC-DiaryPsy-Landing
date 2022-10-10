import { createRouter, createWebHistory } from "vue-router";

import LandingPage from "/src/views/LandingPage.vue";
import Policy from "/src/views/Policy.vue";

//Routes
const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
    meta: {
      title: "Diary of Character",
    },
  },
  {
    path: "/policy",
    name: "Policy",
    component: Policy,
    meta: {
      title: "Diary of Character - Policy",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
