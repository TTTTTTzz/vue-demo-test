<template>
  <div>
    <el-dialog
      title="Update User"
      :visible.sync="dialogFormVisible"
      @close="clear">
      <el-form v-model="userBean" style="text-align: left" ref="dataForm">
        <el-form-item label="Username" :label-width="formLabelWidth" prop="username">
          <el-input v-model="userBean.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="onSubmit">Submit</el-button>
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'EditForm',
  data () {
    return {
      dialogFormVisible: false,
      userBean: {
        id: 0,
        name: ''
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
    edit (user) {
      this.userBean.id = user.id
      this.userBean.name = user.name
      this.dialogFormVisible = true
    },
    onSubmit () {
      var url = '/user/' + 13
      this.$axios.put(url, this.userBean).then(response => {
        this.dialogFormVisible = false
        this.clear()
      })
    }
  }
}
</script>

<style scoped>

</style>
