<template>
  <div class="container">
    <h1>All Roles</h1>
    <el-table
      :data="roleList"
      stripe
      align="center"
      style="width: 50%;margin: 20px auto auto;border: 1px solid #CCCCCC"
      ref="roleListTable">
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
        prop="desc"
        label="desc">
      </el-table-column>
      <el-table-column
        align="center"
        label="edit">
        <template slot-scope="scope">
          <el-button type="text" v-on:click="editClick(scope.row.id,scope.row.name,scope.row.description)"><i class="el-icon-edit"/></el-button>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="delete">
        <template slot-scope="scope">
          <el-button type="text" v-on:click="deleteRole(scope.row.id)"><i class="el-icon-delete"/></el-button>
        </template>
      </el-table-column>
    </el-table>
    <div id="form">
      <add-form></add-form>
      <edit-form ref="editForm"></edit-form>
    </div>
  </div>
</template>

<script>
import AddForm from './AddForm'
import EditForm from './EditForm'
export default {
  name: 'Role',
  components: {
    AddForm, EditForm
  },
  data () {
    return {
      roleList: []
    }
  },
  mounted () {
    this.getRoleList()
  },
  methods: {
    getRoleList () {
      this.$axios.get('/role/all').then(response => {
        this.roleList = response.data
      }).catch(error => console.log(error))
    },
    deleteRole (id) {
      console.log(id)
      var url = '/role/' + id
      this.$axios.delete(url).then(response => {
        if (response.data.code === 200) {
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          this.getRoleList()
        }
      })
    },
    editClick (id, name, description) {
      var temp = {id: 0, name: '', description: ''}
      temp.id = id
      temp.name = name
      temp.description = description
      // 父组件调用子组件的方法
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
