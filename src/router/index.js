import Vue from 'vue'
import Router from 'vue-router'
import HomePages from '../pages/HomePages'
import HomeMore from '../pages/HomeMore'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',

      component: HomePages,
    },
    {
      path: '/homemore/:id',
      component: HomeMore,
    },

  ]
})
