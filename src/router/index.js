import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Icon from '@/components/Icon'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/icon',
      name: 'Icon',
      component: Icon
    }
  ]
})
