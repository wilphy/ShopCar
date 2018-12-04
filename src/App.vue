<template>
  <div id="app">
    <!-- <router-view/> -->
    <!-- 商品列表 -->
    <product></product>

    <!-- 购物车列表 -->
    <cart></cart>
  </div>
</template>

<script>
import product from './components/product'
import cart from './components/cart'

export default {
  name: 'App',
  components: {product, cart}
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
