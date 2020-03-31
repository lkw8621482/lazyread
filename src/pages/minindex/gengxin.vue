<template>
  <div class="gengxin">
    <div class="gz">
      <span class="gz1">关注的主播</span>
      <span class="gz1">关注的标签</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "gengxin"
};
</script>

<style>
.gz {
  width: 90%;
  margin: 0 auto;
  height: 3rem;
  outline: px solid #cccccc;
  display: flex;
  justify-content: space-between;
}
.gz1 {
  display: inline-block;
  width: 45%;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  background: rgb(246, 246, 246);
  border-radius: 20px;
}
</style>