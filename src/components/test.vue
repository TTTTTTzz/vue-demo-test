<template>
  <div>
    username:<label>
    <input type="text" v-model="user.username"/>
  </label>
    password:<label>
    <input type="password" v-model="user.password"/>
  </label>
    <button v-on:click="login">Login</button>
  </div>
</template>

<script>
export default {
  name: 'test1',
  props: { // 属性
    msg: {
      type: String, // 类型
      default: 'testtttt' // 默认值
    }
  },
  methods: {
    login () {
      this.$axios.post('/login', {
        username: this.user.username,
        password: this.user.password
      }).then(successResponse => {
        if (successResponse.data.code === 200) {
          this.$router.replace({path: '/hello'})
        }
      }).catch(failResponse => {
        if (failResponse.data.code === 400) {
          this.$router.replace({path: '/error'})
        }
      })
    }
  },
  data () { // ES6写法
    return {
      user: {
        username: '',
        password: ''
      },
      responseResult: []
    }
  }
}
</script>

<style>
</style>
