<template>
  <div class="recommend">
    <search>
      <div slot="search1" class="s1">
        <p>暗界神使</p>
      </div>
      <div slot="search2" class="s2">
        <span>限时免费</span>
        <span>相声评书</span>
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
        <p>
          <span class="mrtj1">每日推荐</span>
          <span class="gd1">更多</span>
        </p>
        <div class="bk1">
          <div class="bk2">
            <img src="../../../static/bk.jpg" alt />
          </div>
          <div class="bk3">
            <p class="dd1">对话星播客</p>
            <p>热播剧</p>
            <p>懒人电台</p>
          </div>
        </div>
      </div>
    </mrtj>
    <hot></hot>
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
    <titlelist title1="有声小说" title3="海量热门爽文任你PK"></titlelist>
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
import Hot from "../../components/hot";
import Newbar from "../../components/newbar";
import Titlelist from "../../components/titlelist";
import Halfitem from "../../components/halfitem";
export default {
  name: "recommend",
  components: {
    Search,
    SwiperList,
    Navbar,
    Mrtj,
    Hot,
    Newbar,
    Titlelist,
    Halfitem
  },
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
    this.$ajax.get("../../static/newbar1.json").then(res => {
      this.newbarList = res;
    });
    this.$ajax.get("../../static/half.json").then(res => {
      this.halflist = res;
    });
  },
  methods: {
    getData() {
      this.$ajax.get("../../static/swiper.json").then(res => {
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
.end {
  width: 100%;
  height: 200px;
}
.s1 {
  width: 50%;
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
  width: 45%;
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
  p {
    padding: 4px;
    .mrtj1 {
      font-size: 16px;
      color: rgb(230, 159, 59);
      letter-spacing: 2px;
    }
    .gd1 {
      float: right;
      color: rgb(19, 18, 18);
      letter-spacing: 2px;
    }
  }

  .bk1 {
    width: 100%;
    height: 70px;
    display: flex;
    outline: px solid red;

    justify-content: space-between;
    .bk2 {
      width: 25%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .bk3 {
      width: 70%;
      height: 100%;
      .dd1 {
        font-size: 16px;
        font-weight: bold;
      }
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
.ysxs1 {
  width: 100%;
  height: 15rem;
  display: flex;
  flex-wrap: wrap;
}
</style>