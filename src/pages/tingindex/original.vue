<template>
  <div class="original">
    <search>
      <div slot="search1" class="s1">
        <p>两世欢</p>
      </div>
      <div slot="search2" class="s2">
        <span>筛选</span>
      </div>
    </search>
    <swiperList bol="true">
      <div class="swiper-slide" slot="slide1" v-for="item in dataList" :key="item.id">
        <img :src="item.url" alt />
      </div>
    </swiperList>
    <navbar></navbar>
    <mrtj>
      <div slot="eachday" class="e1">
        <div class="l1">
          <img src="../../../static/4055.jpg" alt />
        </div>
        <div class="l2">
          <img src="../../../static/4725.jpg" alt />
        </div>
      </div>
    </mrtj>
    <newbar title="新书速递">
      <div slot="newbar11" class="newbar11" v-for="item in newbarList" :key="item.id">
        <div class="nn1">
          <img :src="item.url" alt />
        </div>
        <div class="nn2">
          <p>{{item.title}}</p>
        </div>
      </div>
    </newbar>
    <titlelist title1="限时特惠" title3="打折打到你骨折"></titlelist>
    <div class="ysxs1">
      <halfitem
        :htitle1="item.title1"
        :htitle2="item.title2"
        v-for="item in halflist"
        :key="item.id"
      >
        <img :src="item.url" alt slot="himg1" />
      </halfitem>
    </div>
    <div class="end"></div>
  </div>
</template>

<script>
import Search from "../../components/search";
import SwiperList from "../../components/swiperList";
import Swiper from "swiper";
import Navbar from "../../components/navbar";
import Mrtj from "../../components/mrtj";
import Newbar from "../../components/newbar";
import Titlelist from "../../components/titlelist";
import Halfitem from "../../components/halfitem";
export default {
  name: "original",
  components: { Search, SwiperList, Navbar, Mrtj, Newbar, Titlelist, Halfitem },
  mounted() {
    this.getData();
  },
  data() {
    return {
      dataList: [],
      newbarList: [],
      halflist: []
    };
  },
  created() {
    this.$ajax.get("../../static/newbar3.json").then(res => {
      this.newbarList = res;
    });
    this.$ajax.get("../../static/half.json").then(res => {
      this.halflist = res;
      console.log(res);
    });
  },
  methods: {
    getData() {
      this.$ajax.get("../../static/swiper2.json").then(res => {
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

<style lang="scss" scoped="scoped">
.s1 {
  width: 75%;
  outline: px solid red;
  border-radius: 30px;
  background: rgb(60, 60, 60);
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    color: white;
    font-size: 12px;
  }
}
.s2 {
  width: 20%;
  outline: px solid red;
  border-radius: 30px;
  background: rgb(60, 60, 60);
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    color: white;
    font-size: 12px;
    padding: 0 3px;
  }
}
.e1 {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  .l1 {
    width: 47%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .l2 {
    width: 47%;
    img {
      width: 100%;
      height: 100%;
    }
  }
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
.end {
  width: 100%;
  height: 200px;
}
.ysxs1 {
  width: 100%;
  height: 15rem;
  display: flex;
  flex-wrap: wrap;
}
</style>