<template>
  <div>
    <el-button @click="dialogFormVisible = true" type="success" plain><i class="el-icon-circle-plus-outline"/>&nbsp;&nbsp;Add New
      Role
    </el-button>
    <el-dialog
      title="Add Role"
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
  name: 'AddForm',
  data () {
    return {
      dialogFormVisible: false,
      roleBean: {
        name: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    clear () {
      this.roleBean = {
        name: '',
        desc: ''
      }
    },
    onSubmit () {
      this.$axios.post('/role', this.roleBean).then(response => {
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
