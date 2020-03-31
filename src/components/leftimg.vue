<template>
  <div class="leftimg">
    <div class="left1">
      <slot name="limg"></slot>
    </div>
    <div class="right1">
      <p class="rp1">
        <span class="rps1">{{title1}}</span>
        <span class="rps2">{{title3}}</span>
      </p>
      <p class="rp2">{{title2}}</p>
      <p class="rp3">
        <span class="rps3">{{author}}</span>
        <span class="rps4">{{tag1}}</span>
        <span class="rps5">{{tag2}}人阅读</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "leftimg",
  props: ["title1", "title2", "title3", "tag1", "tag2", "author"]
};
</script>

<style lang="scss">
.leftimg {
  width: 100%;
  height: 11rem;
  outline: px solid red;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  .left1 {
    width: 25%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .right1 {
    width: 70%;
    .rps1 {
      font-size: 16px;
      font-weight: 500;
      color: rgb(230, 159, 59);
    }
    .rps2 {
      padding: 3px 6px;
      border-radius: 3px;
      background: rgb(151, 148, 239);
      color: white;
      font-size: 12px;
    }
  }
}
.rp1 {
  outline: px solid red;
  height: 3rem;
  line-height: 2rem;
}
.rp2 {
  font-size: 13px;
  color: #cccccc;
  height: 5rem;
}
.rps3 {
  font-size: 14px;
  color: #cccccc;
  position: relative;
}
.rps4 {
  font-size: 12px;
  color: #2c3e50;
  outline: 1px solid #2c3e50;
  padding: 1px;

  position: absolute;
  right: 1rem;
}
.rps5 {
  font-size: 12px;
  color: black;
  outline: 1px solid black;
  padding: 1px;

  position: absolute;
  right: 6rem;
}
</style>