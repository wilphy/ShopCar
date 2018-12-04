<template>
  <div class="cart">
    <h1> 已选商品</h1>
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th>id</th>
          <th>名称</th>
          <th>价格</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="n in cartProducts" v-bind:key="n">
          <td> {{ n.id }} </td>
          <td> {{ n.name }} </td>
          <td> {{ n.price }} </td>
          <td> {{ n.num }} </td>
          <td>
            <div @click="addToCart(n)" class="btn btn-danger">删除</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'cart',
  data () {
    return {}
  },
  computed: {
  // 使用对象展开运算符将 getter 混入 computed 对象中
    // 映射数据，vuex中的cart模块的getters里
    ...mapGetters([
      'cartProducts'
    ])
  }
  // methods: {
  //   // 映射事件，vuex中的cart模块的actions里
  //   ...mapActions([
  //     'addToCart'
  //   ])
  // }
}

</script>
