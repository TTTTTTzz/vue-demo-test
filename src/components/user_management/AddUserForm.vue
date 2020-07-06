<template>
  <div>
    <el-button @click="dialogFormVisible = true" type="success" plain><i class="el-icon-circle-plus-outline"/> Add New
      User
    </el-button>
    <el-dialog
      title="Add User"
      :visible.sync="dialogFormVisible"
      @close="clear">
      <el-form v-model="userBean" style="text-align: left" ref="dataForm">
        <el-form-item label="Username" :label-width="formLabelWidth" prop="username">
          <el-input v-model="userBean.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Password" :label-width="formLabelWidth" prop="password">
          <el-input v-model="userBean.password" autocomplete="off" type="password"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'AddForm',
  data () {
    return {
      dialogFormVisible: false,
      userBean: {
        name: '',
        password: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    getUserList () {
      this.$axios.get('/user/all').then(response => {
        this.userList = response.data
      }).catch(error => console.log(error))
    },
    clear () {
      this.userBean = {
        name: ''
      }
    },
    onSubmit () {
      this.$axios.post('/user', this.userBean).then(response => {
        this.dialogFormVisible = false
        this.clear()
        this.getUserList()
      })
    }
  }
}
</script>

<style scoped>

</style>
