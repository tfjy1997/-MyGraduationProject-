<template>
  <div id="app">
    <router-view class="main"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  .main {
    height: 100%;
    width: 100%;
  }
</style>
