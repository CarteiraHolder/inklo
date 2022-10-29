import { createRouter, createWebHistory } from 'vue-router'

import ListUser from '../views/ListUser.vue'

const routes = [
    {
        path: '/',
        component: ListUser,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router