<script>
export default {
  // Enables an abstract component in Vue.
  // Warning! This property is undocumented and may change at any time
  abstract: true,
  render () {
    // Without using a wrapper component, we can only render one child component.
    try {
      return this.$slots.default[0]
    } catch (e) {
      throw new Error('IntersectionObserver.vue can only render one, and exactly one child component.')
    }
  },

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