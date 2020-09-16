import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Icon from '@/components/Icon'
import Illust from '@/components/Illust'
import Color from '@/components/Color'
import Animation from '@/components/Animation'
import UserInterface from '@/components/UserInterface'
import Podcast from '@/components/Podcast'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Index', component: Index },
    { path: '/icon', name: 'Icon', component: Icon },
    { path: '/illust', name: 'Illust', component: Illust },
    { path: '/color', name: 'Color', component: Color },
    { path: '/animation', name: 'Animation', component: Animation },
    { path: '/ui', name: 'UserInterface', component: UserInterface },
    { path: '/podcast', name: 'Podcast', component: Podcast }
  ]
})
