import { createRouter,createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: () => import("@/views/Home.vue"),
        },
        {
            path: "/about",
            component: () => import("@/views/About.vue"),
        },
        {
            path: "/service",
            component: () => import("@/views/Service.vue"),
        },
        {
            path: "/contact",
            component: () => import("@/views/Contact.vue"),
        },
        {
            path: "/facebook",
            component: () => import("@/views/footer/facebook.vue"),
        },
        {
            path: "/twitter",
            component: () => import("@/views/footer/twitter.vue"),
        },
        {
            path: "/ig",
            component: () => import("@/views/footer/ig.vue"),
        },
        {
            path: "/wa",
            component: () => import("@/views/footer/wa.vue"),
        },
    ],
});

export default router;