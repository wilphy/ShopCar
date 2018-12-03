<template>
  <div>
    <h1> {{ msg }} </h1>
    <div v-for="n in shoplist" v-bind:key="n">
      <li> {{ n.name }} </li>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'product',
  data () {
    return {
      msg: 'vuex购物车'
    }
  },
  computed: {
  // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'shoplist'
    ])
  }
}
</script>
