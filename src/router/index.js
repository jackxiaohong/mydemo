import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Exam01 from '@/components/exam/Exam01.vue'
import Login from "@/components/exam/Login.vue"
import Product from '@/components/exam/Product.vue'
import register from '@/components/exam/register.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Exam01',
      component: Exam01
    },
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/Product',
      component: Product
    },
    {
      path: '/register',
      component: register
    },
  ]
})
