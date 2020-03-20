<template>
  <div class="hot">
    <p class="hotp">
      <span class="mrtj1">热门节目</span>
      <span class="gd1">更多</span>
    </p>
    <div class="hot1">
      <div class="hot2" v-for="item in dataList" :key="item.id">
        <div class="hot3">
          <img :src="item.url" alt />
        </div>
        <div class="hot4">
          <p class="hp1">{{item.title1}}</p>
          <p class="hp2">{{item.title2}}</p>
          <p class="hp3">{{item.title3}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hot",
  data() {
    return {
      dataList: []
    };
  },
  created() {
    this.$ajax.get("../../static/hot.json").then(res => {
      this.dataList = res;
      // console.log(this.dataList);
    });
  }
};
</script>

<style lang="scss">
.hot {
  width: 100%;
  height: 23rem;
  outline: px solid red;
  .hotp {
    height: 2rem;
    line-height: 2rem;
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
  .hot1 {
    width: 100%;
    height: 21rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .hot2 {
      height: 30%;
      outline: px solid red;
      display: flex;
      justify-content: space-between;
    }
  }
}
.hot3 {
  width: 30%;
  img {
    width: 100%;
    height: 100%;
  }
}
.hot4 {
  width: 65%;
  .hp1 {
    font-size: 16px;
    font-weight: bold;
    padding: 2px 0;
  }
  .hp2 {
    font-size: 12px;
    padding: 0 0 1.8rem 0;
  }
  .hp3 {
    font-size: 12px;
  }
}
</style>