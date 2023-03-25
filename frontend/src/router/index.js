import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import LoginView from '../views/LoginView.vue'
// import RegisterView from '../views/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/login',
      name:'login',
      component:null
    },
    {
      path:'/register',
      name:'register',
      component:null
    },
    {
      path: '/employees',
      name: 'employees',
      component:() => import('../views/EmployeesView.vue')
    },
    {
      path: '/add-employee',
      name: 'addEmployees',
      component:() => import('../views/AddEmployeeView.vue')
    },
    {
      path: '/positions',
      name: 'positions',
      component:() => import('../views/PositionsView.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.name === 'login' && localStorage.access_token) next('/')
  if (to.name === 'register' && localStorage.access_token) next('/')
  if (to.name === 'favorite' && !localStorage.access_token) next('/')
  else next()
})


export default router