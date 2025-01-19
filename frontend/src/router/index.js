import { createRouter, createWebHistory ,createWebHashHistory} from 'vue-router'

const Home = () => import('@/views/Home.vue')
const Work = () => import('@/views/Work.vue')
const WorkList = () => import('@/views/WorkList.vue')

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:Home,
      meta: {
        isLogin: false
      }
    },
    {
      path: '/',
      name: 'Home',
      component:Home,
      meta: {
        isLogin: false
      }
    },
      ]
})

export default router
