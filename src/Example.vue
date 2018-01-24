<template>
  <css-grid
    :columns="currentGrid.columns"
    :rows="currentGrid.rows"
    :areas="currentGrid.areas">

    <css-grid-item area="title">
      <h1>A grid experiment!</h1>
    </css-grid-item>

    <css-grid-item area="header">
      <h2>Header</h2>
    </css-grid-item>

    <css-grid-item area="main">
      <h2>Main</h2>
    </css-grid-item>

    <css-grid-item area="sidebar">
      <h2>Sidebar</h2>
    </css-grid-item>

    <css-grid-item area="footer">
      <h2>footer</h2>
    </css-grid-item>

    <viewport-listener v-model="viewport"/>
  </css-grid>
</template>

<script>
export default {
  data () {
    return {
      viewport: {width: 320, height: 568},

      mobileGrid: {
        columns: ['100%'],
        rows: ['auto', 'auto', 'auto', 'auto', 'auto'],
        areas: [
          ['title'],
          ['header'],
          ['main'],
          ['sidebar'],
          ['footer']
        ]
      },

      tabletGrid: {
        columns: ['60%', 'auto'],
        rows: ['200px', '450px', 'auto', '200px'],
        areas: [
          ['header', 'header'],
          ['main', 'title'],
          ['main', 'sidebar'],
          ['footer', 'footer']
        ]
      },

      desktopGrid: {
        columns: ['30%', 'auto', '20%'],
        rows: ['100px', '500px', '100px'],
        areas: [
          ['title', 'title', 'title'],
          ['main', 'header', 'header'],
          ['main', 'sidebar', 'footer']
        ]
      }
    }
  },

  computed: {
    currentGrid () {
      if (this.viewport.width > 768) {
        return this.desktopGrid
      }
      if (this.viewport.width > 576) {
        return this.tabletGrid
      }

      return this.mobileGrid
    }
  }
}
</script>
