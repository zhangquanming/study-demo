<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" @click="handleClick"><br/>
    <button @click="handleClick">显示alert</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  methods: {
    handleClick () {
      this.$alert({
        message: '描述描述描述',
        title: '提示',
        cancelText: '不',
        confirmText: '好的'
      }).then(action => {
        console.log(`点击了${action}`)
      }).catch(action => {
        console.log(`点击了${action}`)
      })
    }
  }
}
</script>
