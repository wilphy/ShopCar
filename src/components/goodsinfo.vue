<template>
  <div>
    <div class="item-wrapper">
      <div class="item">
        总数： {{ totalNum }}
      </div>
      <div class="item">
        总价： {{ totalPrice }}
      </div>
      <div @click="clearAllCart" class="item btn btn-danger">清空购物车</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'goodsInfo',
  data () {
    return {

    }
  },
  computed: {
  // 使用对象展开运算符将 getter 混入 computed 对象中
    // 映射数据，vuex中的cart模块的getters里
    ...mapGetters([
      'totalNum',
      'totalPrice'
    ])
  },
  methods: {
    // 映射事件，vuex中的cart模块的actions里
    ...mapActions(['clearAllCart'])
  }
}
</script>

<style scoped>
  .item-wrapper {
    display: flex;
    background-color: bisque;
    align-items: center;
    justify-content: center
  }

  .item {
    flex: 1;
  }
</style>
