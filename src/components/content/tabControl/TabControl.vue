<template>
  <div class="tabcontrol">
    <div
      v-for="(item,index) in titles"
      :key="item.id"
      class="tabcontrolitem"
      :class="{active:index===currentIndex}"
      @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      currentIndex: 0
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    }
  }
};
</script>
<style scoped>
.tabcontrol {
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 15px;
  background-color: #fff;
}
.tabcontrolitem {
  flex: 1;
}
.active {
  color: red;
}
.active span {
  border-bottom: 2px solid red;
}
</style>