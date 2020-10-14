<template>
  <div id="app">
    <Navbar />

    <router-view/>

    <Footer />
  </div>
</template>
<script>
import Navbar from './components/navbar.vue';
import Footer from './components/footer.vue';

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
<style lang="scss">
@import "./assets/all.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
