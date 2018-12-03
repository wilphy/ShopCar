import Vue from 'vue'
import Router from 'vue-router'
import product from '@/components/product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'product',
      component: product
    }
  ]
})
