<template>
  <div>
    <el-button @click="dialogFormVisible = true" type="success" plain><i class="el-icon-circle-plus-outline"/>&nbsp;&nbsp;Add
      New
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
  name: 'AddForm',
  data () {
    return {
      dialogFormVisible: false,
      userBean: {
        name: '',
        password: '',
        role: {id: 0, name: '', desc: ''}
      },
      roleName: '',
      roleList: [],
      formLabelWidth: '120px'
    }
  },
  mounted () {
    this.getRoleList()
  },
  methods: {
    getUserList () {
      this.$axios.get('/user/all').then(response => {
        this.userList = response.data
      }).catch(error => console.log(error))
    },
    getRoleByName () {
      let url = '/role/' + this.roleName
      this.$axios.get(url).then(response => {
        this.userBean.role = response.data
        // this.userBean.rid.id = response.data.id
        // this.userBean.rid.id = response.data.id
        console.log(this.userBean.role)
      })
    },
    getRoleList () {
      this.$axios.get('/role/all').then(response => {
        this.roleList = response.data
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
        this.$parent.getUserList()
      })
    }
  }
}
</script>

<style scoped>

</style>
