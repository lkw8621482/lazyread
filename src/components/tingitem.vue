<template>
  <div class="tingitem">
    <div class="tp1">
      <div class="tps1">
        <slot name="img1"></slot>
      </div>
      <div class="tps2">{{title1}}</div>
    </div>
    <p class="tp2">
      <span v-for="item in title2Arr" :key="item.id">{{item}}</span>
    </p>
    <div class="tdiv1">
      <div class="tdiv2">
        <div class="tdiv3">
          <slot name="img2"></slot>
        </div>
        <div class="tdiv4">{{title3}}</div>
      </div>
    </div>
    <p class="tp3">
      <span class="tps3">{{tag}}</span>
    </p>
    <p class="tp4">
      <span>{{date}}</span>
      <span class="tps4">评论：{{comm}}</span>
      <span class="tps5">点赞：{{good}}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "tingitem",
  props: [
    "title1",
    "url1",
    "title2",
    "url1",
    "title3",
    "tag",
    "date",
    "comm",
    "good",
    "title2Arr"
  ]
};
</script>

<style lang="scss" scoped="scoped">
.tingitem {
  width: 100%;
  height: 18rem;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
}
.tp1 {
  display: flex;
  align-items: center;
  padding: 10px 0;
}
.tps1 {
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border: px solid red;
  border-radius: 50%;
}
.tps1 img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.tps2 {
  margin-left: 10px;
  color: white;
}
.tp2 {
  width: 100%;
  padding: 5px 0;
  color: white;
  span {
    display: inline-block;
    width: 20%;
    font-size: 14px;
  }
}
.tdiv1 {
  width: 100%;
  height: 5rem;
  padding: 10px;
  background: rgb(46, 46, 46);
  border-radius: 10px;
}
.tdiv2 {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .tdiv3 {
    width: 20%;
    height: 100%;
    border-radius: 10px;
    outline: px solid red;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .tdiv4 {
    width: 75%;
    color: white;
  }
}
.tp3 {
  padding: 10px 0;
  color: rgb(231, 160, 59);
  .tps3 {
    display: inline-block;

    background: rgb(46, 46, 46);
    border-radius: 10px;
    padding: 3px 10px;
  }
}
.tp4 {
  position: relative;
  color: rgb(46, 46, 46);
  .tps4 {
    position: absolute;
    right: 100px;
  }
  .tps5 {
    position: absolute;
    right: 30px;
  }
}
</style>