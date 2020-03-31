<template>
  <div class="newbar">
    <p class="hotp" v-if="bol">
      <span class="mrtj1">{{title}}</span>
      <span class="gd1">更多</span>
    </p>
    <div class="newbar1">
      <slot name="newbar11"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "newbar",
  props: ["title", "bol"]
};
</script>


<style lang="scss">
.newbar {
  width: 100%;
  height: 12rem;
  margin-top: 1rem;
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
}
.newbar1 {
  width: 100%;
  height: 10rem;
  outline: px solid red;
  display: flex;
  justify-content: space-between;
}
</style>