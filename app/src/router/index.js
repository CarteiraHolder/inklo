import { createRouter, createWebHistory } from 'vue-router'

import ListUser from '../views/ListUser.vue'
import DevInfo from '../views/DevInfo.vue'

const routes = [
    {
        path: '/',
        component: ListUser,
    },
    {
        path: '/DevInfo/:login',
        component: DevInfo,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router