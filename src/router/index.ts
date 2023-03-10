import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/IndexPage.vue"),
      meta: {
        title: "Nguyen Tien Hoach",
      },
    },
    {
      path: "/works",
      name: "works",
      component: () => import("@/views/WorkPage.vue"),
      meta: {
        title: "Work | Nguyen Tien Hoach",
      },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/AboutPage.vue"),
      meta: {
        title: "About | Nguyen Tien Hoach",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
