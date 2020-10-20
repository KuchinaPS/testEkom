import Vue from 'vue';
import VueRouter from 'vue-router';
import Authorization_page from "../views/Authorization_page";
import Analytics_page from "../views/Analytics_page";

Vue.use(VueRouter);

export function createRouter() {
    return new VueRouter({
        mode: 'history',
        routes: [
            {
                path: "/",
                component: Authorization_page,
            },
            {
                path: "/Analytics",
                component: Analytics_page
            },
        ]
    })
}