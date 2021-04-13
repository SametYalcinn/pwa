import { createRouter, createWebHashHistory } from "vue-router";
// import Discover from "../views/Discover.vue";

const routes = [
  {
    path: "/",
    name: "Discover",
    component: () =>
    import( "../views/Discover.vue"),
  },
  {
    path: "/saved",
    name: "Saved",
    component: () =>
      import( "../views/Saved.vue"),
  },
  {
    path: "/add",
    name: "Add",
    component: () =>
      import( "../views/Add.vue"),
  },
  {
    path: "/sdg",
    name: "Sdg",
    component: () =>
      import("../views/Sdg.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import("../views/Profile.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
