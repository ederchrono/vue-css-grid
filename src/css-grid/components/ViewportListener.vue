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
    update () {
      this.$emit('input', {
        width: this.width,
        height: this.height
      })
    },
    onResize () {
      this.width = window.innerWidth
      this.height = window.innerHeight
      this.update()
    }
  },

  mounted () {
    window.addEventListener('resize', this.onResize)
    this.width = window.innerWidth
    this.height = window.innerHeight

    this.update()
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  }
}
</script>
