import { createRouter, createWebHistory } from 'vue-router'
// import LoginView from '../views/LoginView.vue'
// import RegisterView from '../views/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:() => import('../views/EmployeesView.vue')
    },
    {
      path:'/login',
      name:'login',
      component:() => import('../views/LoginView.vue')
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
      path: '/edit-employee/:id',
      name: 'editEmployees',
      component:() => import('../views/EditEmployeeView.vue')
    },
    {
      path: '/positions',
      name: 'positions',
      component:() => import('../views/PositionsView.vue')
    },
    {
      path: '/detail-employee/:id',
      name: 'detailEmployee',
      component:() => import('../views/DetailEmployeeView.vue')
    },
    {
      path: '/employee-category/:id',
      name: 'EmployeeCategory',
      component:() => import('../views/EmployeeCategoryView.vue')
    },
    {
      path: '/add-admin',
      name: 'AddAdmin',
      component:() => import('../views/AddAdminView.vue')
    },
  ]
})
router.beforeEach((to, from, next) => {
  if (to.name === 'login' && localStorage.token) next('/')
  if (to.name !== 'login' && !localStorage.token) next('/login')

  else next()
})


export default router