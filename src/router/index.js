import Vue from 'vue'
import VueRouter from 'vue-router'
import user from '../views/user.vue'
import login from '../views/login.vue'
import admin from '../views/admin.vue'
import { firebase } from '@firebase/app'
import '@firebase/auth'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin,
    meta:{requiresAuth:true,isAdmin:true}
  },
  {
    path: '/user',
    name: 'user',
    component: user,
    meta:{requiresAuth:true}
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next)=>{
  const isAdmin = '4qN9mjka8ONKUyIleLkMvr8urWM2'
  const requiresAuth = to.matched.some(record=>record.meta.requiresAuth)
  const isAuthenticated = firebase.auth().currentUser
  if(requiresAuth && isAuthenticated.uid == isAdmin && to.name == 'admin')
  {
    next();
  }
  if(requiresAuth && !isAuthenticated)
  {
    next('/')
  }else if(to.name !='admin'){
    next();
  }
})

export default router
