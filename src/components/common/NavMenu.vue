<template>
  <el-menu :default-active="activeIndex"
           router
           mode="horizontal"
           background-color="white"
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
      activeIndex: this.$route.path,
      navList: [
        {name: '/index', navItem: 'Home'},
        {name: '/user', navItem: 'User Management'},
        {name: '/role', navItem: 'Role Management'},
        {name: '/permission', navItem: 'Permission Management'}
        // {name: '/order', navItem: 'Order Management'},
        // {name: '/staff', navItem: 'Staff Management'}
      ]
    }
  },
  watch: {
    '$route' (to, from) {
      this.activeIndex = to.path
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
