<template>
  <div
    class="block__container"
    :style="{'background-color': color}">
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'red'
    }
  }
}
</script>

<style>
.block__container {
  display: block;
  background-color: red;
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
