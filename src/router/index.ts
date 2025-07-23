import { createRouter, createWebHistory } from "vue-router";
import { PeopleRoutes } from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...PeopleRoutes,
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("@/commons/NotFoundPage.vue"),
    },
  ],
});

export default router;
