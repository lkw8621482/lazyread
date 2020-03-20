<template>
  <div class="tabbar">
    <div class="t1">
      <tabbaritem title="听吧" mark="tingba" :active="sel" @myevent="doevent"></tabbaritem>
      <tabbaritem title="我的" mark="mine" :active="sel" @myevent="doevent"></tabbaritem>
      <tabbaritem title="发现" mark="find" :active="sel" @myevent="doevent"></tabbaritem>
      <tabbaritem title="账号" mark="acount" :active="sel" @myevent="doevent"></tabbaritem>
    </div>
  </div>
</template>

<script>
import Tabbaritem from "./tabbaritem";
export default {
  name: "tabbar",
  components: { Tabbaritem },
  data() {
    return {
      sel: "tingba"
    };
  },
  methods: {
    doevent(val) {
      this.sel = val;
      //   console.log(this.sel);
    }
  }
};
</script>

<style lang="scss">
.tabbar {
  width: 100%;
  height: 80px;
  background: rgb(72, 72, 72);
  outline: px solid red;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 5px 20px 20px 20px;
  .t1 {
    width: 100%;
    height: 100%;
    display: flex;
  }
}
</style>