<template>
  <div id="app">
    <keep-alive include="original">
      <router-view />
    </keep-alive>

    <tabbar></tabbar>
  </div>
</template>

<script>
import Tabbar from "./components/tabbar";
export default {
  name: "App",
  components: { Tabbar }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 13px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
body {
  background: gray;
}
</style>
