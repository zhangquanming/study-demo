<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" @click="handleClick">
    <Alert />
  </div>
</template>

<script>
// @ is an alias to /src
import Alert from '@/components/alert/Alert'

export default {
  name: 'Home',
  components: {
    Alert
  },
  methods: {
    handleClick () {
      console.log(11)
    }
  }
}
</script>
