import Vue from 'vue'
import Router from 'vue-router'
// 导入自己编写的组件
import HelloWorld from '@/components/home/HelloWorld'
import Login from '@/components/Login' // import 组件文件名 from '组件文件路径'
import User from '@/components/user_management/UserManagement'
import Order from '@/components/OrderManagement'
import Staff from '@/components/StaffManagement'
import Role from '@/components/role_management/RoleManagement'
import Permission from '../components/permission_management/PermissionManagement'
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
      redirect: '/index',
      // 配置父子路由关系 // todo?
      children: [
        {
          path: '/index',
          name: 'HelloWorld',
          component: HelloWorld,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/user',
          name: 'User',
          component: User,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/role',
          name: 'Role',
          component: Role,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/permission',
          name: 'Permission',
          component: Permission,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/order',
          name: 'Order',
          component: Order,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/staff',
          name: 'Staff',
          component: Staff,
          meta: {
            requireAuth: true
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/error',
      name: 'Error',
      component: Error // 保留字?
    }
  ]
})
