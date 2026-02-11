import { createRouter, createWebHistory } from 'vue-router'
// import HomePage from '../views/HomePage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: ()=> import ('@/views/HomePage.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/signup.vue'),
    },
    {
      path:'/sample',
      name:'sample',
      component:()=> import('../views/scoreboard.vue')
    },
     {
      path:'/table',
      name:'table',
      component:()=> import('../views/viewtable.vue')
    },{
      path :"/login",
      name:'Loginpage',
      component:()=> import ('@/views/loginpage.vue')
    },{
      path:"/user/edit/:id",
      name:'edituser',
      component:() => import ('../views/editpage.vue')
    }
  ],
})

export default router
