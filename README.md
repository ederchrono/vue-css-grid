# vue-css-grid

>Components for easier grid CSS layouts in Vue

## Installation

``` bash
npm install --save vue-css-grid
```

## Setup

```javascript
import Vue from 'vue'

import { CssGrid, CssGridItem, ViewportListener } from 'vue-css-grid'

// Your main grid component, it declares the layout
Vue.component('css-grid', CssGrid)

// A grid item to use inside the grid component
Vue.component('css-grid-item', CssGridItem)

// Optional component to listen to viewport width and height changes
Vue.component('viewport-listener', ViewportListener)

```



## Component props and events
### `<css-grid>`
A component to define the grid properties. It should contain `css-grid-item` components directly in the first level.
#### Props
>##### columns: required
>Array of strings that defines the number of columns and their size. 
>You can use any combination of css sizing rules like `20px`, `1fr`, `20%` or `auto`.

>##### rows: required
>Array of strings that defines the number of rows and their size. 
>Also you can use any combination of css sizing rules.

>##### areas: required
>A matrix of strings with dimensions `rows x columns`.
>It defines the areas that will fill each cell of the grid.



### `<css-grid-item>`
Component to define the area of the grid to be used. It must be directly inside a `css-grid` component.

You can add another `css-grid` component inside the `css-grid-item` to create more complex layouts nesting grids.
#### Props
>##### area: required
>A string that matches one of the areas defined in the grid component

>##### html-tag: optional
>By default the `css-grid-item` will create a `<div>`, with this property you can define the HTML element.



### `<viewport-listener>`
A component that just adds functionality (won't render anything), it emits an object with viewport data, that you can use with v-model.

#### Viewport v-model object properties
>##### width: Number
>When the viewport width changes, this property will have the current value.
>##### height: Number
>When the viewport height changes, this property will have the current value.
>##### isPhone: Boolean
>True when `viewport.width < 768`
>##### isTablet: Boolean
>True when `768 <= viewport.width < 992`
>##### isDesktop: Boolean
>True when `992 <= viewport.width < 1200`
>##### isLargeDesktop: Boolean
>True when `viewport.width >= 1200`

## Usage

```HTML
<!-- A 2x3 example -->
<!-- For columns and rows you can use %, px, fr or any CSS measure -->
<css-grid
  :columns="['200px', 'auto']"
  :rows="['150px', 'auto', '100px']"
  :areas="[
    ['header', 'header'],
    ['sidebar', 'main'],
    ['footer', 'footer']
  ]">

  <!-- This item would fill the top row, both cells called "header" in the areas -->
  <css-grid-item area="header">
    <h2>Header</h2>
  </css-grid-item>

  <css-grid-item area="sidebar">
    <p>sidebar</p>
  </css-grid-item>

  <!-- Define a custom html tag -->
  <css-grid-item area="main" html-tag="article">
    <h1>Main</h1>
  </css-grid-item>

  <css-grid-item area="footer">
    <h3>Footer</h3>
  </css-grid-item>

  <viewport-listener v-model="viewportObject">
</css-grid>
```


## Example
>For a full running example with responsive breakpoints, refer to [Example.vue](./src/Example.vue)