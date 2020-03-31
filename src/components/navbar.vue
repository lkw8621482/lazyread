<template>
  <div class="navbar">
    <div class="bar1">
      <navitem
        v-for="item in dataList"
        :key="item.id"
        :title="item.title"
        @click.native="fn(item.id)"
      >
        <img slot="img1" :src="item.url" alt />
      </navitem>
    </div>
  </div>
</template>

<script>
import Navitem from "./navitem";
export default {
  components: { Navitem },
  data() {
    return {
      dataList: []
    };
  },
  created() {
    this.$ajax.get("../../static/navitem.json").then(res => {
      this.dataList = res;
      // console.log(this.dataList);
    });
  },
  methods: {
    fn(id) {
      if (id == 1) {
        this.$router.push("/vipdetail");
      }
      if (id == 2) {
        this.$router.push("/reader");
      }
    }
  }
};
</script>

<style lang="scss">
.navbar {
  width: 100%;
  height: 5rem;
  padding: 10px;
  background: rgb(26, 26, 26);
  border-radius: 10px;
  margin-top: 1rem;
  .bar1 {
    width: 100%;
    height: 100%;
    display: flex;
    outline: px solid red;
  }
}
</style>