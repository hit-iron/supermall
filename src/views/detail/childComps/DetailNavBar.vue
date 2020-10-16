<template>
  <div id="detailNavBar">
    <NavBar>
      <div class="back" slot="left" @click="backClick">
        <img src="~assets/img/common/back.svg" alt />
      </div>
      <div class="title" slot="center">
        <div
          :class="{active:currentIndex===index}"
          class="title-item"
          v-for="(item,index) in titles"
          :key="item.id"
          @click="itemClick(index)"
        >{{item}}</div>
      </div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      // isTrue: false,
      currentIndex: 0
    };
  },
  components: {
    NavBar
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
    backClick() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
.title {
  display: flex;
  text-align: center;
  font-size: 13px;
}
.title-item {
  flex: 1;
}
.active {
  color: red;
}
.back img {
  padding-top: 10px;
  /* padding-left: 30px; */
}
</style>