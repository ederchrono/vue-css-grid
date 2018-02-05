
# vue-css-grid
Components for easier grid CSS layouts in Vue
[![npm version](https://badge.fury.io/js/vue-css-grid.svg)](https://badge.fury.io/js/vue-css-grid)

### `Important! Version 0.1.1 users`
Breaking changes on this new version:
- All components names were changed to follow the rules of [style guide](https://vuejs.org/v2/style-guide/).
- The usage of the `responsive` component (now `viewport-listener`), changed from listening to events to a `v-model` approach (see details below).

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
>##### columns
>Array of strings that defines the number of columns and their size.
>You can use any combination of css sizing rules like `20px`, `1fr`, `20%` or `auto`.

>##### rows
>Array of strings that defines the number of rows and their size.
>Also you can use any combination of css sizing rules.

>##### areas
>A matrix of strings with dimensions `rows x columns`.
>It defines the areas that will fill each cell of the grid.

>##### htmlTag: default 'div'
>String that defines the type of html node that the grid component should be.

>##### gap
>Defines the gutter between `grid-items`, can be either one value (`10px`) or two (`5px 10px`) for horizontal and vertical gutter.

>##### autoRows
>Useful to define the size of rows when the number of `grid-items` can be larger than the defined grid, causing more rows than expected.
>This is just a shorthand for the CSS grid property `grid-auto-rows`, so you can use any of the allowed strings.

>##### autoColumns
>Similar to gridAutoRows but for columns. Also a shorthand for the CSS grid property `grid-auto-columns`, so you can use any of the allowed strings.


>##### inline: default false
>Boolean to define if the `display` property should be `inline-grid` instead of just `grid`.


### `<css-grid-item>`
Component to define the area of the grid to be used. It must be directly inside a `css-grid` component.

You can add another `css-grid` component inside the `css-grid-item` to create more complex layouts nesting grids.
#### Props
>##### area
>A string that matches one of the areas defined in the grid component

>##### html-tag
>By default the `css-grid-item` will create a `<div>`, with this property you can define the HTML element.

>##### x
>##### endX | width
>When not using the `area` property, you can define the `grid-column-start` with `x`, and either use `endX` to declare where the item ends, or `width` to declare the number of columns the item should cover.

>##### y
>##### endY | height
>Similarly you can use `y`, `endY` or `height` to define the row position of the gridItem. Remember that if an area is already defined, this will not work.

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

## Example
>For a full running example with responsive breakpoints, refer to [Example.vue](./src/Example.vue)
