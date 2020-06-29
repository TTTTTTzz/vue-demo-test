<template>
  <el-form label-width="80px" class="login-container">
    <h3 class="login_title">Welcome!🌍</h3>
    <el-form-item label="Username">
      <el-input type="text" v-model="user.name"/>
    </el-form-item>
    <el-form-item label="Password">
      <el-input type="password" v-model="user.password"/>
    </el-form-item>
    <el-button v-on:click="login">Login</el-button>
  </el-form>
</template>

<script>
export default {
  name: 'login',
  props: { // 属性
    msg: {
      type: String, // 类型
      default: 'testtttt' // 默认值
    }
  },
  methods: {
    login () {
      var _this = this // todo 全局？？两个this的区别是什么
      this.$axios.post('/login', {
        name: this.user.name,
        password: this.user.password
      }).then(successResponse => {
        if (successResponse.data.code === 200) {
          // this.$router.replace({path: '/hello'})
          _this.$store.commit('login', _this.user)
          // todo the difference between _this and this? which they refer to?
          var path = this.$route.query.redirect
          this.$router.replace(({path: path === '/' || path === undefined ? '/home' : path})) // todo 跳转到有内容的界面 '/hello'报错？
        }
      }).catch(failResponse => {
        /* if (failResponse.data.code === 400) {
          this.$router.replace({path: '/error'})
        } */
      })
    }
  },
  data () { // ES6写法
    return {
      user: {
        name: '',
        password: ''
      },
      responseResult: []
    }
  }
}
</script>

<style>
  .login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .login_title {
    margin: 0 auto 40px auto;
    text-align: center;
    color: #505458;
  }

</style>
