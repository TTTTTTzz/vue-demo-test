<template>
  <el-table
    :data="tableData"
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
      tableData: [{
        id: '1',
        name: 'user1'
      },
      {
        id: '2',
        name: 'user2'
      },
      {
        id: '3',
        name: 'user3'
      }],
      userList:[]
    }
  },
  methods:{
    getUserList(){
      var _this = this
      this.$axios.get('/user/all').then(successResponse=>{
        if(successResponse.data.code === 200){
          _this.userList = successResponse.data.list
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
