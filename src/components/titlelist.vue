<template>
  <div class="titlelist">
    <p>
      <span class="ts1">{{title1}}</span>
      <span class="ts2">更多</span>
    </p>
    <p class="tp1">{{title3}}</p>
  </div>
</template>

<script>
export default {
  name: "titlelist",
  props: ["title1", "title2", "title3"]
};
</script>

<style>
.titlelist {
  width: 100%;
  padding: 1rem 0;
}
.ts1 {
  font-size: 16px;

  color: rgb(230, 159, 59);
}
.ts2 {
  float: right;
}
.tp1 {
  margin-top: 2px;
}
</style>