<template>
  <component :is="htmlTag" :style="style">
    <slot/>
  </component>
</template>

<script>
export default {
  props: {
    area: {
      type: String,
      default: null
    },
    htmlTag: {
      type: String,
      default: 'div'
    },
    x: {
      type: String,
      default: null
    },
    y: {
      type: String,
      default: null
    },
    endX: {
      type: String,
      default: null
    },
    endY: {
      type: String,
      default: null
    },
    width: {
      type: String,
      default: null
    },
    height: {
      type: String,
      default: null
    }
  },

  computed: {
    style () {
      if (this.area) {
        return {
          gridArea: this.area
        }
      }

      // no area defined
      const areaWidth = this.width ? `span ${this.width}` : null
      const areaHeight = this.height ? `span ${this.height}` : null
      return {
        gridColumnStart: this.x,
        gridColumnEnd: this.endX || areaWidth,
        gridRowStart: this.y,
        gridRowEnd: this.endY || areaHeight
      }
    }
  }
}
</script>
