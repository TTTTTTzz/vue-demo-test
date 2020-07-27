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
          <el-button type="text"><i class="el-icon-edit"/></el-button>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="delete">
        <template slot-scope="scope">
          <el-button type="text"><i class="el-icon-delete"/></el-button>
        </template>
      </el-table-column>
    </el-table>
    <div id="form">
      <add-form></add-form>
    </div>
  </div>
</template>

<script>
import AddForm from './AddForm'
export default {
  name: 'Role',
  components: {
    AddForm
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
