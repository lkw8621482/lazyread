<template>
  <div class="tabbaritem" @click="fn()">
    <p :class="{active:bol}">{{title}}</p>
  </div>
</template>

<script>
export default {
  name: "tabbaritem",
  props: ["title", "mark", "active"],
  computed: {
    bol() {
      if (this.mark == this.active) {
        // console.log(this.mark);
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    fn() {
      this.$emit("myevent", this.mark);
      this.$router.push("/" + this.mark);
    }
  }
};
</script>

<style lang="scss">
.tabbaritem {
  width: 25%;
  color: #cccccc;
}
.tabbaritem p {
  text-align: center;
}
.active {
  color: rgb(230, 159, 59);
}
</style>