<template>
  <el-menu :default-active="'/home'"
           router
           mode="horizontal"
           background-color="white"
           style="min-width: 1300px"
           active-text-color="green">
    <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
      {{ item.navItem }}
    </el-menu-item>
    <a href="" style="position: absolute;padding-top: 20px;right: 10%">{{this.$store.state.user.username}}</a>
  </el-menu>
</template>

<script>
export default {
  name: 'NavTest',
  data () {
    return {
      navList: [
        {name: '/home', navItem: 'Home'},
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
