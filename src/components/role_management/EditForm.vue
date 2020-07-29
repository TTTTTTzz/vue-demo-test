<template>
  <div>
    <el-dialog
      title="Update User"
      :visible.sync="dialogFormVisible"
      @close="clear">
      <el-form v-model="roleBean" style="text-align: left" ref="dataForm">
        <el-form-item label="Role Name" :label-width="formLabelWidth" prop="name">
          <el-input v-model="roleBean.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Description" :label-width="formLabelWidth" prop="desc">
          <el-input v-model="roleBean.desc" autocomplete="off" type="text"></el-input>
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
      roleBean: {
        id: 0,
        name: '',
        description: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    clear () {
      this.roleBean.name = ''
      this.roleBean.description = ''
    },
    edit (role) {
      this.roleBean.id = role.id
      this.roleBean.name = role.name
      this.roleBean.description = role.description
      // this.roleBean = role
      this.dialogFormVisible = true
    },
    onSubmit () {
      var url = '/user/' + this.roleBean.id
      this.$axios.put(url, this.roleBean).then(response => {
        this.dialogFormVisible = false
        this.clear()
        this.$parent.getRoleList()
      })
    }
  }
}
</script>

<style scoped>

</style>
