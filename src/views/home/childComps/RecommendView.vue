<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.id" class="recommenditem">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style scoped>
.recommend {
  display: flex;
  text-align: center;
  width: 100%;
  font-size: 12px;
  /* margin: 10px 0; */
  border-bottom: 5px solid #eee;
  padding: 10px 0;
}
.recommenditem {
  flex: 1;
}
.recommenditem img {
  height: 65px;
  width: 65px;
}
</style>