<template>
  <div class="vipdetail">
    <zqtitle title="会员专区"></zqtitle>
    <swiperList>
      <div class="swiper-slide" slot="slide1" v-for="item in dataList" :key="item.id">
        <img :src="item.url" alt />
      </div>
    </swiperList>
    <div class="bot1">
      <p class="tq1">会员特权</p>
      <div class="tq2">
        <navitem v-for="item in navlist" :key="item.id" :title="item.title">
          <img slot="img1" :src="item.url" alt />
        </navitem>
      </div>

      <newbar title="会员书库" bol="true">
        <div slot="newbar11" class="newbar11" v-for="item in newbarList" :key="item.id">
          <div class="nn1">
            <img :src="item.url" alt />
          </div>
          <div class="nn2">
            <p>{{item.title}}</p>
          </div>
        </div>
      </newbar>
      <newbar title="会员书库" :bol="false">
        <div slot="newbar11" class="newbar11" v-for="item in newbarList1" :key="item.id">
          <div class="nn1">
            <img :src="item.url" alt />
          </div>
          <div class="nn2">
            <p>{{item.title}}</p>
          </div>
        </div>
      </newbar>
    </div>
  </div>
</template>

<script>
import SwiperList from "../components/swiperList";
import Swiper from "swiper";
import Zqtitle from "../components/zqtitle";
import Navitem from "../components/navitem";
import Titlelist from "../components/titlelist";
import Newbar from "../components/newbar";
export default {
  name: "vipdetail",
  components: { Zqtitle, SwiperList, Navitem, Titlelist, Newbar },
  mounted() {
    this.getData();
  },
  created() {
    this.$ajax.get("../../static/navlist.json").then(res => {
      this.navlist = res;
    });
    this.$ajax.get("../../static/newbar4.json").then(res => {
      this.newbarList = res;
    });
    this.$ajax.get("../../static/newbar5.json").then(res => {
      this.newbarList1 = res;
    });
  },
  data() {
    return {
      dataList: [],
      navlist: [],
      newbarList: [],
      newbarList1: []
    };
  },
  methods: {
    getData() {
      this.$ajax.get("../../static/swiper3.json").then(res => {
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
.tq1 {
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  font-size: 16px;
  color: rgb(230, 159, 59);
}
.tq2 {
  width: 100%;
  height: 5rem;
  display: flex;
}
.bot1 {
  padding: 10px;
}
.newbar11 {
  width: 23%;
  outline: px solid red;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .nn1 {
    height: 70%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .nn2 {
    height: 30%;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      text-align: center;
    }
  }
}
</style>