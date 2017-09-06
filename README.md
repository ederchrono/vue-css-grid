# vue-css-grid

>Components for easier grid CSS layouts in Vue

## Installation

``` bash
npm install --save vue-css-grid
```

## Setup

```javascript
import Vue from 'vue'

import { grid, gridItem, responsive } from 'vue-css-grid'

// Your main grid component, it declares the layout
Vue.component('grid', grid)

// A grid item to use inside the grid component
Vue.component('grid-item', gridItem)

// Optional responsive abstract component to listen to width changes
Vue.component('responsive', responsive)
```

## Usage

```HTML
<responsive @widthChange="myMethod">
  <!-- A 2x3 example -->
  <!-- For columns and rows you can use %, px, fr or any CSS measure -->
  <grid
    :columns="['200px', 'auto']"
    :rows="['150px', 'auto', '100px']"
    :areas="[
      ['header', 'header']
      ['sidebar', 'main']
      ['footer', 'footer']
    ]">

    <!-- This item would fill the top row, both cells called "header" in the areas -->
    <grid-item area="header">
      <h2>Header</h2>
    </grid-item>

    <grid-item area="sidebar">
      <p>sidebar</p>
    </grid-item>

    <!-- Define a custom html tag -->
    <grid-item area="main" html-tag="article">
      <h1>Main</h1>
    </grid-item>

    <grid-item area="footer">
      <h3>Footer</h3>
    </grid-item>

  </grid>
</responsive>
```


## Example
### A full example with responsive breakpoints
```HTML
<template>
  <responsive @widthChange="updateViewportWidth">
    <grid
      :columns="currentGrid.columns"
      :rows="currentGrid.rows"
      :areas="currentGrid.areas">

      <grid-item area="title">
        <h1>A grid experiment!</h1>
      </grid-item>

      <grid-item area="header">
        <h2>Header</h2>
      </grid-item>

      <grid-item area="main">
        <h2>Main</h2>
      </grid-item>

      <grid-item area="sidebar">
        <h2>Sidebar</h2>
      </grid-item>

      <grid-item area="footer">
        <h2>footer</h2>
      </grid-item>

    </grid>
  </responsive>
</template>

<script>
export default {
  data () {
    return {
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
        rows: ['100px', 'auto', '100px'],
        areas: [
          ['title', 'title', 'title'],
          ['main', 'header', 'header'],
          ['main', 'sidebar', 'footer']
        ]
      },
      viewportWidth: 320
    }
  },

  computed: {
    currentGrid () {
      if (this.viewportWidth > 768) {
        return this.desktopGrid
      }
      if (this.viewportWidth > 576) {
        return this.tabletGrid
      }

      return this.mobileGrid
    }
  },

  methods: {
    updateViewportWidth (width) {
      this.viewportWidth = width
    }
  }
}
</script>
```
