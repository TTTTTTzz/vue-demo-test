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
      <a><i class="el-icon-edit"/></a>
    </el-table-column>
    <el-table-column
      label="delete">
      <template slot-scope="scope">
        <a href="#nowhere" v-on:click="deleteUser(scope.row.id)"><i class="el-icon-delete"/></a>
      </template>
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
    },
    deleteUser (id) {
      var url = '/user/' + id
      this.$axios.delete(url).then(response => {
        if (response.data.code === 200) {
          alert('删除成功')
          this.getUserList()
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
