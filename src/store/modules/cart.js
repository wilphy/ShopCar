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
  }],
  // 已选商品
  added: []

}

// 向外输出数据的方法
const getters = {
  // 商品列表
  shoplist: state => state.shoplist,
  // 购物车列表
  cartProducts: state => {
    return state.added.map(({id, num}) => {
      let _n = state.shoplist.find(n => n.id === id)
      return {
        ..._n,
        num
      }
    })
  }
}

// 异步的操作
const actions = {
  // 添加到购物车
  addToCart ({commit}, n) {
    // console.log(n.name)
    commit('add', {
      id: n.id
    })
  }
}

// 计算的过程
const mutations = {
  // 添加到购物车
  add (state, {id}) {
    // console.log(id)
    let _n = state.added.find(n => n.id === id)
    if (!_n) {
      state.added.push({
        id,
        num: 1
      })
    } else {
      _n.num++
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
