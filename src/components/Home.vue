<template>
  <div>
    <nav-test class="nav-menu"></nav-test>
    <router-view/>
    <user-table></user-table>
  </div>
</template>

<script>
import NavTest from './common/NavMenu'
import UserTable from './management/UserTable'
export default {
  name: 'Home',
  components: {NavTest, UserTable}
}
</script>

<style scoped>
  .nav-menu {
    /*margin-bottom: 40px;*/
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);
  }
</style>
