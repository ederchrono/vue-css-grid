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
        height: this.height,
        isPhone: this.isPhone,
        isTablet: this.isTablet,
        isDesktop: this.isDesktop,
        isLargeDesktop: this.isLargeDesktop
      })
    },
    onResize () {
      this.width = window.innerWidth
      this.height = window.innerHeight
      this.update()
    }
  },

  computed: {
    isPhone () {
      return this.width < 768
    },
    isTablet () {
      return this.width >= 768 && this.width < 992
    },
    isDesktop () {
      return this.width >= 992 && this.width < 1200
    },
    isLargeDesktop () {
      return this.width >= 1200
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
