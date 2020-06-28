<template>
  <el-menu :default-active="'/hello'"
           router
           mode="horizontal"
           background-color="white"
           style="min-width: 1300px"
           active-text-color="green">
    <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
      {{ item.navItem }}
    </el-menu-item>
    <a href="/userHome" style="position: absolute;padding-top: 20px;right: 10%">admin</a>
  </el-menu>
</template>

<script>
export default {
  name: 'NavTest',
  data () {
    return {
      navList: [
        {name: '/hello', navItem: 'Home'},
        {name: '/user', navItem: 'User Management'},
        {name: '/order', navItem: 'Order Management'},
        {name: '/staff', navItem: 'Staff Management'}
      ]
    }
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;
  }

  span {
    pointer-events: none;
  }
</style>
