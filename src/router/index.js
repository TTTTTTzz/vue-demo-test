import Vue from 'vue'
import Router from 'vue-router'
// 导入自己编写的组件
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'test1',
      component: test
    },
    {
      path: '/error',
      name: 'Error',
      component: Error
    }
  ]
})
