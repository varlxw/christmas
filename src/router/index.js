import Vue from 'vue'
import Router from 'vue-router'
import ChristmasMain from '@/components/christmas-main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ChristmasMain',
      component: ChristmasMain
    }
  ]
})
