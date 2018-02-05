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
      default: null
    },
    rows: {
      type: Array,
      default: null
    },
    areas: {
      type: Array,
      default: () => []
    },
    htmlTag: {
      type: String,
      default: 'div'
    },
    gap: {
      type: String,
      default: null
    },
    gridAutoRows: {
      type: String,
      default: null
    },
    gridAutoColumns: {
      type: String,
      default: null
    },
    inline: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    style () {
      return {
        display: this.inline ? 'inline-grid' : 'grid',
        gridTemplateColumns: this.columnsCss,
        gridTemplateRows: this.rowsCss,
        gridTemplateAreas: this.areasCss,
        gridGap: this.gap,
        gridAutoRows: this.gridAutoRows,
        gridAutoColumns: this.gridAutoColumns
      }
    },
    columnsCss () {
      if (!this.columns) {
        return null
      }
      return this.columns.reduce(this.arrayToCSS, '')
    },
    rowsCss () {
      if (!this.rows) {
        return null
      }
      return this.rows.reduce(this.arrayToCSS, '')
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
    arrayToCSS (acum, item) {
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
