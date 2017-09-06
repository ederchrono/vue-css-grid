<template>
  <component :is="htmlTag" :style="style">
    <slot/>
  </component>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
      required: true
    },
    rows: {
      type: Array,
      required: true
    },
    areas: {
      type: Array,
      required: true
    },
    htmlTag: {
      type: String,
      default: 'div'
    }
  },

  watch: {
    // TODO check that lengths of columns, rows and areas match
  },

  computed: {
    style () {
      return {
        display: 'grid',
        gridTemplateColumns: this.columnsCss,
        gridTemplateRows: this.rowsCss,
        gridTemplateAreas: this.areasCss
      }
    },
    columnsCss () {
      return this.columns.reduce(this.arrayToCSSFraction, '')
    },
    rowsCss () {
      return this.rows.reduce(this.arrayToCSSFraction, '')
    },
    areasCss () {
      if (!this.areas) {
        return null
      }
      return this.areas.map(row => {
        return `"${row.join(' ')}"`
      }).join(' ')
    }
  },

  methods: {
    arrayToCSSFraction (acum, item) {
      if (typeof item === 'string') {
        // if not a number print as is (auto, 10px, 20%, etc)
        return `${acum} ${item}`
      }

      // if number use px
      return `${acum} ${item}px`
    }
  }
}
</script>