<template>
  <div>
    <el-menu :default-active="activeIndex"
             router
             mode="horizontal"
             background-color="white"
             active-text-color="green">
      <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
        {{ item.navItem }}
      </el-menu-item>
      <!--todo-->
      <el-dropdown>
        <a style="position: absolute;padding-top: 20px;right: 10%" class="el-dropdown-link">
          {{this.$store.state.user.username}}
        </a>
        <el-dropdown-menu>
          <el-dropdown-item @click.native="logout">
            退出登录
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-menu>
  </div>
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
  },
  methods: {
    logout () {
      this.$store.commit('logout')
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
