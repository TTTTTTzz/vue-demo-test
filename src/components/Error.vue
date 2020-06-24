<template>
  <h1>{{msg}}</h1>
</template>

<script>
export default {
  name: 'Error',
  data () {
    return {
      msg: 'ERROR❗'
    }
  }
}
</script>

<style scoped>
  h1 {
    color: red;
  }
</style>
