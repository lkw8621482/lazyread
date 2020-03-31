<template>
  <div class="tingyou">
    <tingitem
      v-for="item in datalist"
      :key="item.id"
      :title1="item.title1"
      :title2Arr="item.title2"
      :date="item.date"
      :comm="item.comm"
      :good="item.good"
      :title3="item.title3"
      :tag="item.tag"
    >
      <img slot="img1" :src="item.url" alt />
      <img slot="img2" :src="item.url1" alt />
    </tingitem>
  </div>
</template>

<script>
import Tingitem from "../../components/tingitem";
export default {
  name: "tingyou",
  components: { Tingitem },
  data() {
    return {
      datalist: []
    };
  },
  created() {
    this.$ajax.get("../../../static/tingitem.json").then(res => {
      this.datalist = res;
    });
  }
};
</script>

<style  scoped="scoped">
</style>