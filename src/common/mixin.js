import { debounce } from "./utils";
import BackTop from "components/content/backTop/BackTop";
export const itemListenerMixin = {
  data() {
    return {
      itemImglistener: null
    }
  },
  mounted() {
    let newrefresh = debounce(this.$refs.scroll.refresh, 50);
    this.itemImglistener = () => {
      newrefresh();
    };
    this.$bus.$on("itemImageLoad", this.itemImglistener);


  }
}

export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false
    }
  },
  components: {
    BackTop
  },
  methods: {
    backClick() {

      this.$refs.scroll.scrollTo(0, 0, 300);
    },
  }
}