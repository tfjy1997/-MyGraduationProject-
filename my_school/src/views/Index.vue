<template>
  <div>
    <Header class="page-header"></header>
    <div class="page-meddle">
      <left-menu class="left-menu"></left-menu>
      <h1 style="color:red">Hello World</h1>
    </div>
    <Footer class="page-footer"></footer>
  </div>
</template>

<script>
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import LeftMenu from '../components/common/LeftMenu'
export default {
  name: 'Index',
  components: {
    Header,
    Footer,
    LeftMenu,
  }
}
</script>

<style scoped>
  .page-header {
    position: absolute;
    top: 0;
    left: 0;
    height: 100px;
    width: 100%;
  }
  .page-meddle {
    height: auto;
    width: 100%;
  }
  .page-meddle .left-menu {
    position: absolute;
    top: 100px;
    left: 0;
    float: left;
    width: 20%;
    height: 100%;
  }
  .page-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 10%;
    width: 100%;
  }
</style>