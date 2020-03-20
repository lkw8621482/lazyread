<template>
  <div class="mrtj">
    <slot name="eachday"></slot>
  </div>
</template>

<script>
export default {
  name: "mrtj"
};
</script>

<style>
.mrtj {
  width: 100%;
  height: 8rem;
  outline: px solid red;
  margin-top: 1rem;
}
</style>