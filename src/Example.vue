<template>
  <css-grid
    :columns="currentGrid.columns"
    :rows="currentGrid.rows"
    :areas="currentGrid.areas">

    <css-grid-item area="title">
      <color-block color="#BBBDF6">
        <h1>Header</h1>
      </color-block>
    </css-grid-item>

    <css-grid-item area="leftbar">
      <color-block color="#FE4A49">
        <h2>Left bar</h2>
      </color-block>
    </css-grid-item>

    <css-grid-item area="main">
      <main-content />
    </css-grid-item>

    <css-grid-item area="rightbar">
      <color-block color="#009FB7">
        <h2>Right bar</h2>
      </color-block>
    </css-grid-item>

    <css-grid-item area="footer">
      <color-block color="#8D6B94">
        <h2>footer</h2>
      </color-block>
    </css-grid-item>

    <viewport-listener v-model="viewport"/>
  </css-grid>
</template>

<script>
// Component used to show the cell areas clearly
import colorBlock from './examples/ColorBlock'
// A nested grid with more use cases
import mainContent from './examples/MainContent'

export default {
  components: {
    colorBlock,
    mainContent
  },

  data () {
    return {
      // default viewport, mobile first
      viewport: {width: 320, height: 568},

      // 3x3 grid
      desktopGrid: {
        columns: ['20%', 'auto', '20%'],
        rows: ['100px', 'auto', '100px'],
        areas: [
          ['title', 'title', 'title'],
          ['leftbar', 'main', 'rightbar'],
          ['footer', 'footer', 'footer']
        ]
      },

      // 2x4 grid
      tabletGrid: {
        columns: ['30%', 'auto'],
        rows: ['150px', '400px', 'auto', '100px'],
        areas: [
          ['title', 'title'],
          ['leftbar', 'main'],
          ['rightbar', 'main'],
          ['footer', 'footer']
        ]
      },

      // 1x5 grid
      mobileGrid: {
        columns: ['100%'],
        rows: [
          '80px',
          'auto',
          '100px',
          '100px',
          '80px'
        ],
        areas: [
          ['title'],
          ['main'],
          ['leftbar'],
          ['rightbar'],
          ['footer']
        ]
      }
    }
  },

  computed: {
    // change Layout according to the viewport size
    currentGrid () {
      if (this.viewport.isDesktop ||
        this.viewport.isLargeDesktop) {
        return this.desktopGrid
      }
      if (this.viewport.isTablet) {
        return this.tabletGrid
      }
      return this.mobileGrid
    }
  }
}
</script>
