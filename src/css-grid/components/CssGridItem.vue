<template>
  <component :is="htmlTag" :style="style">
    <slot/>
  </component>
</template>

<script>
export default {
  props: {
    area: {
      type: String
    },
    htmlTag: {
      type: String,
      default: 'div'
    }
  },

  computed: {
    style () {
      return {
        gridArea: this.area,
        border: this.debugCss
      }
    }
  }
}
</script>