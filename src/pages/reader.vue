<template>
  <div class="reader">
    <zqtitle title="看书专区"></zqtitle>
    <swiperList>
      <div class="swiper-slide" slot="slide1" v-for="item in dataList" :key="item.id">
        <img :src="item.url" alt />
      </div>
    </swiperList>
    <div class="pad">
      <titlelist title1="热门推荐" title2="更多"></titlelist>
      <div
        v-infinite-scroll="getData"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
      >
        <leftimg
          v-for="item in leftimgList"
          :key="item.id"
          :title1="item.title1"
          :title2="item.title2"
          :title3="item.title3"
          :author="item.author"
          :tag1="item.tag1"
          :tag2="item.tag2"
        >
          <img slot="limg" :src="item.url" alt />
        </leftimg>
      </div>
    </div>
    <div class="end"></div>
  </div>
</template>

<script>
import { InfiniteScroll } from "mint-ui"; //引入mintUI的无限滚动组件
import Vue from "vue"; //引入Vue 使用mint UI必须引入
Vue.use(InfiniteScroll);
import Zqtitle from "../components/zqtitle";
import SwiperList from "../components/swiperList";
import Swiper from "swiper";
import Titlelist from "../components/titlelist";
import Leftimg from "../components/leftimg";
export default {
  name: "reader",
  components: { Zqtitle, SwiperList, Titlelist, Leftimg },
  mounted() {
    this.getData();
  },
  created() {
    this.$ajax.get("../../static/leftimg.json").then(res => {
      this.leftimgList = res;
      // console.log(this.leftimgList);
    });
  },
  data() {
    return {
      dataList: [],
      leftimgList: []
    };
  },
  methods: {
    getData() {
      this.$ajax.get("../../static/swiper4.json").then(res => {
        this.dataList = res;
        this.$nextTick(() => {
          this.doSwiper();
        });
      });
    },
    doSwiper() {
      var mySwiper = new Swiper(".swiper-container", {
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        }
      });
    }
  }
};
</script>

<style lang="scss">
.pad {
  padding: 0 20px;
}
.end {
  width: 100%;
  height: 200px;
}
</style>