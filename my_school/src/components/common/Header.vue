<template>
  <div class="header">
    <span>{{  user.name }} 欢迎回来</span>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      user: {
        name: 'abc',
        img: '',
      }
    }
  },
}
</script>

<style scoped>
  .header {
    height: 100%;
    width: 100%;
    background-color: #00ffff;
    color: #aaa;
  }
</style>