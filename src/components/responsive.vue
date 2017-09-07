<template>
  <!-- Responsive component -->
  <!-- Since it is just behaviour it doesn't 'print' any markup -->
  <div v-if="false"></div>
</template>

<script>
export default {
  data () {
    return {
      width: 0,
      height: 0
    }
  },

  methods: {
    onResize () {
      if (this.width !== window.innerWidth) {
        this.width = window.innerWidth
        this.$emit('widthChange', this.width)
      }

      if (this.height !== window.innerHeight) {
        this.height = window.innerHeight
        this.$emit('heightChange', this.height)
      }
    }
  },

  mounted () {
    window.addEventListener('resize', this.onResize)
    this.width = window.innerWidth
    this.height = window.innerHeight

    this.$emit('widthChange', this.width)
    this.$emit('heightChange', this.height)
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  }
}
</script>