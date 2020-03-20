<template>
  <div class="search">
    <!-- <div class="s1">
      <p>暗界神使</p>
    </div>
    <div class="s2">
      <span>限时免费</span>
      <span>相声评书</span>
    </div>-->
    <slot name="search1"></slot>
    <slot name="search2"></slot>
  </div>
</template>

<script>
export default {
  name: "search"
};
</script>

<style lang="scss">
.search {
  width: 100%;
  height: 30px;
  outline: px solid red;
  display: flex;
  justify-content: space-between;
}
</style>