<template>
  <div>
    <h1> {{ msg }} </h1>
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th>id</th>
          <th>名称</th>
          <th>价格</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="n in shoplist" v-bind:key="n">
          <td> {{ n.id }} </td>
          <td> {{ n.name }} </td>
          <td> {{ n.price }} </td>
          <td>
            <div @click="addToCart(n)" class="btn btn-info">添加</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'product',
  data () {
    return {
      msg: 'vuex购物车'
    }
  },
  computed: {
  // 使用对象展开运算符将 getter 混入 computed 对象中
    // 映射数据，vuex中的cart模块的getters里
    ...mapGetters([
      'shoplist'
    ])
  },
  methods: {
    // 映射事件，vuex中的cart模块的actions里
    ...mapActions([
      'addToCart'
    ])
  }
}
</script>
