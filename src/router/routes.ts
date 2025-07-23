import type { RouteRecordRaw } from "vue-router";

export const PeopleRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "PeopleList",
    component: () => import("@/modules/people-list/PeopleListPage.vue"),
  },
  {
    path: "/people/:id",
    name: "PeopleDetail",
    component: () => import("@/modules/people-detail/PeopleDetailPage.vue"),
  },
];
