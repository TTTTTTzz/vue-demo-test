<template>
  <div class="container">
    <h1>All Users</h1>
    <el-table
      :data="userList"
      stripe
      align="center"
      style="width: 50%;margin: 20px auto auto;border: 1px solid #CCCCCC"
      ref="userListTable">
      <el-table-column
        align="center"
        prop="id"
        label="id">
      </el-table-column>
      <el-table-column
        align="center"
        prop="name"
        label="name">
      </el-table-column>
      <el-table-column
        align="center"
        label="edit">
        <template slot-scope="scope">
          <el-button type="text" v-on:click="editClick(scope.row.id,scope.row.name)"><i class="el-icon-edit"/></el-button>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="delete">
        <template slot-scope="scope">
          <el-button type="text" v-on:click="deleteUser(scope.row.id)"><i class="el-icon-delete"/></el-button>
        </template>
      </el-table-column>
    </el-table>
    <div id="form">
      <add-form></add-form>
      <edit-form ref="editForm" :updatedUserList="userList"></edit-form>
    </div>
  </div>
</template>

<script>
import AddForm from './AddForm'
import EditForm from './EditForm'
// todo 调整add button 的位置 margin ?
export default {
  name: 'User',
  components: {
    AddForm, EditForm
  },
  data () {
    return {
      userList: []
    }
  },
  // 钩子函数单独写
  mounted: function () {
    var _this = this
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
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          this.getUserList()
        }
      })
    },
    editClick (id, name) {
      var temp = {id: 0, name: '', password: ''}
      temp.id = id
      temp.name = name
      this.$refs.editForm.edit(temp)
    }
  }
}
</script>

<style scoped>
h1{
  color: #505458;
}
#form{
  margin: 20px auto;
}
</style>
