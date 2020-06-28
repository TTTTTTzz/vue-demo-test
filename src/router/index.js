import Vue from 'vue'
import Router from 'vue-router'
// 导入自己编写的组件
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login' // import 组件文件名 from '组件文件路径'
// 作为父页面
import Home from '@/components/Home'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      // Home不需要被访问，重定向到hello world
      redirect: '/hello',
      // 配置父子路由关系 // todo?
      children: [
        {
          path: '/hello',
          name: 'HelloWorld',
          component: HelloWorld,
          meta: {
            requireAuth: true
          }
        }
      ]
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
