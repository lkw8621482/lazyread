<template>
  <div class="swiper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <!-- <div class="swiper-slide" v-for="item in dataList" :key="item.id">
          <img :src="item.url" alt />
        </div>-->
        <slot name="slide1"></slot>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "swiperList"
};
</script>

<style lang="scss">
@import "swiper/css/swiper.min.css";
.swiper {
  margin-top: 20px;
}
.swiper-container {
  width: 100%;
  height: 150px;
  .swiper-slide {
    outline: px solid red;
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
}
</style>