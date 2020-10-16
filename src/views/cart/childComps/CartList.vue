<template>
  <div class="cart-list">
    <Scroll class="content" ref="scroll">
      <CartListItem v-for="item in list" :key="item.iid" :itemInfo="item"></CartListItem>
    </Scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import CartListItem from "./CartListItem";

import { mapGetters } from "vuex";

export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters({
      length: "cartLength",
      list: "cartList"
    })
  },
  props: {
    CartList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  activated() {
    this.$refs.scroll.refresh();
  }
};
</script>
<style scoped>
.cart-list {
  height: calc(100%-44px-49px-44px);
}
.content {
  height: 100%;
  overflow: hidden;
}
</style>