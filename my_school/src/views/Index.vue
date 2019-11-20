<template>
  <div style="width:200px;height:200px">
    <h1 style="color:red">Hello World</h1>
    <hello></hello>
  </div>
</template>

<script>
import Hello from '../components/HelloWorld'
export default {
  name: 'Index',
  components: {
    Hello
  }
}
</script>

<style scoped>

</style>