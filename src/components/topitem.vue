<template>
  <div class="topitem">
    <p>
      <span class="ti1">我的</span>
      <span class="ti2">搜索</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "topitem"
};
</script>

<style lang="scss">
.topitem {
  width: 100%;
  height: 3rem;
  background: gray;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    width: 100%;
    color: white;
    text-align: center;
    position: relative;
    font-size: 16px;
    .ti2 {
      position: absolute;
      right: 20px;
    }
  }
}
</style>