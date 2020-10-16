<template>
  <div class="DetailSwiper">
    <Swiper class="dswiper">
      <SwiperItem v-for="item in topImages" :key="item.id">
        <img :src="item" alt />
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "DetailSwiper",
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>
<style scoped>
.dswiper {
  overflow: hidden;
  height: 300px;
}
</style>