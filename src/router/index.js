import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Chat from '@/components/Chat'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
    props: true,
    beforeEnter: (to, from, next) => {
      // Redirect page back to Welcome if not enter name
      if (to.params.name) {
        next()
      } else {
        next({name: 'Welcome'})
      }
    }
  }
  ]
})
