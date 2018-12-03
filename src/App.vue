<template>
  <div id="app">
    <!-- <router-view/> -->
    <product></product>
  </div>
</template>

<script>
import product from './components/product'

export default {
  name: 'App',
  components: {product}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
