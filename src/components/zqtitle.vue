<template>
  <div class="zqtitle">
    <p>
      <span class="s1" @click="fn()">《</span>
      <span>{{title}}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "zqtitle",
  props: ["title"],
  methods: {
    fn() {
      this.$router.push("/tingba/recommend");
    }
  }
};
</script>

<style lang="scss">
.zqtitle {
  width: 100%;
  height: 4rem;
  background: rgb(60, 60, 60);
  line-height: 4rem;
  p {
    text-align: center;
    .s1 {
      float: left;
    }
    span {
      color: rgb(230, 159, 59);
      font-size: 16px;
    }
  }
}
</style>