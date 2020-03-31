<template>
  <div class="mine">
    <topitem></topitem>

    <div class="content">
      <swiperList>
        <div class="swiper-slide" slot="slide1" v-for="item in dataList" :key="item.id">
          <img :src="item.url" alt />
        </div>
      </swiperList>
      <titlelist title1="最近收听"></titlelist>
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
      <ul>
        <router-link tag="li" active-class="act" to="/mine/gengxin">关注更新</router-link>
        <router-link tag="li" active-class="act" to="/mine/xiangting">猜你想听</router-link>
        <router-link tag="li" active-class="act" to="/mine/tingyou">听友推荐</router-link>
      </ul>
      <router-view></router-view>
      <div class="end"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import Topitem from "../components/topitem";
import SwiperList from "../components/swiperList";
import Titlelist from "../components/titlelist";
import Leftimg from "../components/leftimg";
export default {
  name: "mine",
  components: { Topitem, SwiperList, Titlelist, Leftimg },
  mounted() {
    this.getData();
  },
  created() {
    this.$ajax.get("../../static/leftimg1.json").then(res => {
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
      this.$ajax.get("../static/swiper5.json").then(res => {
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

<style lang="scss"  scoped="scoped">
.content {
  padding: 0 10px;
  ul {
    width: 100%;
    height: 4rem;
    padding: 10px 0;
    outline: px solid red;
    color: rgb(255, 255, 255);
    li {
      float: left;
      padding-right: 30px;
      list-style: none;
    }
  }
}
.act {
  font-size: 16px;
  font-weight: 500;
  color: rgb(230, 159, 59);
}
.end {
  width: 100%;
  height: 20rem;
}
</style>