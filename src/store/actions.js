import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation_types';


const actions = {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      // context解构成{state,commit}
      // 查找之前数组中是否有该商品
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid);
      // 判断product存不存在
      if (oldProduct) {
        // oldProduct.count += 1;
        context.commit(ADD_COUNTER, oldProduct);
        resolve('当前商品的数量加1')
      }
      else {
        payload.count = 1;

        context.commit(ADD_TO_CART, payload);
        resolve('添加了新的商品')

      }
    })

  }

}

export default actions