<template>
  <div class="tingba">
    <ul>
      <router-link tag="li" active-class="act" to="/tingba/recommend">推荐</router-link>
      <router-link tag="li" active-class="act" to="/tingba/publish">出版</router-link>
      <router-link tag="li" active-class="act" to="/tingba/original">原创</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "tingba"
};
</script>

<style lang="scss">
.tingba {
  width: 100%;

  padding: 20px;
  outline: px solid red;
  ul {
    width: 100%;
    height: 37px;
    outline: px solid red;
    color: rgb(255, 255, 255);
    li {
      float: left;

      padding-right: 20px;
      list-style: none;
    }
  }
}
.act {
  font-size: 18px;
  font-weight: 500;
  color: rgb(230, 159, 59);
}
</style>