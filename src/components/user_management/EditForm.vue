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
        <el-form-item label="Role" :label-width="formLabelWidth" prop="role">
          <el-select v-model="roleName" placeholder="请选择" @change="getRoleByName">
            <el-option
              v-for="item in roleList"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
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
      userBean: '',
      roleName: '',
      roleList: [],
      formLabelWidth: '120px'
    }
  },
  methods: {
    clear () {
      this.userBean.name = ''
    },
    edit (user) {
      /* this.userBean.id = user.id
      this.userBean.name = user.name */
      this.userBean = user
      this.getRoleList()
      this.dialogFormVisible = true
    },
    getRoleList () {
      this.$axios.get('/role/all-name').then(response => {
        this.roleList = response.data
      }).catch(error => console.log(error))
    },
    getRoleByName () { // todo
      let url = '/role/' + this.roleName
      this.$axios.get(url).then(response => {
        this.userBean.role = response.data
        // this.userBean.rid.id = response.data.id
        // this.userBean.rid.id = response.data.id
        console.log(this.userBean.role)
      })
    },
    onSubmit () {
      var url = '/user/' + this.userBean.id
      this.$axios.put(url, this.userBean).then(response => {
        this.dialogFormVisible = false
        this.clear()
        this.$parent.getUserList()
      })
    }
  }
}
</script>

<style scoped>

</style>
