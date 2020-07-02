<template>
  <el-table
    :data="userList"
    stripe
    style="width: 50%;margin:auto;">
    <el-table-column
      prop="id"
      label="id">
    </el-table-column>
    <el-table-column
      prop="name"
      label="name">
    </el-table-column>
    <el-table-column
      label="edit">
      <a href=""><i class="el-icon-edit"/></a>
    </el-table-column>
    <el-table-column
      label="delete">
      <a href=""><i class="el-icon-delete"/></a>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
      userList: []
    }
  },
  // 钩子函数单独写
  mounted: function () {
    var _this = this
    _this.info = 4
    _this.getUserList()
  },
  methods: {
    getUserList () {
      this.$axios.get('/user/all').then(response => {
        this.userList = response.data
      }).catch(error => console.log(error))
    }
  }
}
</script>

<style scoped>

</style>
