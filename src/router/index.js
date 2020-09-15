import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Icon from '@/components/Icon'
import Illust from '@/components/Illust'
import Color from '@/components/Color'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Index', component: Index },
    { path: '/icon', name: 'Icon', component: Icon },
    { path: '/illust', name: 'Illust', component: Illust },
    { path: '/color', name: 'Color', component: Color }
  ]
})
