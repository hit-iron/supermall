<template>
  <div class="cart">
    <NavBar class="nav-bar">
      <div class="center" slot="center">购物车({{length}})</div>
    </NavBar>
    <CartList class="cart-list"></CartList>
    <CartBottomBar />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childComps/CartList";
import CartBottomBar from "./childComps/CartBottomBar";

import { mapGetters } from "vuex";
export default {
  name: "Cart",

  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    ...mapGetters({
      length: "cartLength",
      list: "cartList"
    })
  }
};
</script>
<style scoped>
#cart {
  /*position: relative;*/
  height: 100vh;
}

.nav-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
}

.cart-list {
  position: absolute;
  top: 44px;
  bottom: 49px;
  width: 100%;
}
</style>