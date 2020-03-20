<template>
  <div class="halfitem">
    <div class="half1">
      <slot name="himg1"></slot>
    </div>
    <div class="half2">
      <div>
        <p class="hp1">{{htitle1}}</p>
        <p class="hp2">{{htitle2}}万播放</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "halfitem",
  props: ["htitle1", "htitle2"]
};
</script>

<style lang="scss">
.halfitem {
  width: 46%;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  .half1 {
    width: 40%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .half2 {
    width: 55%;
    display: flex;
    align-items: center;
    .hp1 {
      font-size: 16px;
      color: #473f80;
      font-weight: 600;
    }
    .hp2 {
      font-size: 12px;
    
    }
  }
}
</style>