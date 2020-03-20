<template>
  <div class="navitem">
    <div class="n1">
      <slot name="img1" :src="url"></slot>
    </div>
    <div class="n2">
      <p>{{title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "navitem",
  props: ["url", "title"]
};
</script>

<style lang="scss">
.navitem {
  width: 25%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  .n1 {
    height: 70%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .n2 {
    height: 30%;
    p {
      color: white;
      text-align: center;
    }
  }
}
</style>