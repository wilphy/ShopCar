// 初始化数据，里面是商品列表
const state = {
  // 商品列表
  shoplist: [{
    id: 11,
    name: '鸡翅',
    price: 10.00
  },
  {
    id: 12,
    name: '汉堡',
    price: 20.00
  },
  {
    id: 13,
    name: '薯条',
    price: 15.00
  }]
}

// 向外输出数据的方法
const getters = {
  shoplist: state => state.shoplist
}

// 异步的操作
const actions = {}

// 计算的过程
const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
}
