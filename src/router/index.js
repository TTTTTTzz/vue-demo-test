import Vue from 'vue'
import Router from 'vue-router'
// 导入自己编写的组件
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login' // import 组件文件名 from '组件文件路径'
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
      name: 'login',
      component: Login
    },
    {
      path: '/error',
      name: 'Error',
      component: Error
    }
  ]
})
