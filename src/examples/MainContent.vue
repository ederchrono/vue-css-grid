<template>
  <css-grid
    gap="10px"
    :columns="['1fr', '1fr', '1fr', '1fr']"
    auto-rows="120px">
    <!-- auto-rows/columns is used when the content is of unkown length -->

    <css-grid-item
      v-for="(item, index) in items"
      :key="index">
      <color-block color="gray">
        <h1>item #{{item}}</h1>
      </color-block>
    </css-grid-item>

    <css-grid-item x="2" y="2" width="2" height="3">
      <color-block color="cyan">
        <h2>Fixed position</h2>
        <pre>
        x="2"
        y="2"
        width="2"
        height="3"
        </pre>
      </color-block>
    </css-grid-item>

    <css-grid-item
      style="z-index:1;"
      x="1" y="4" endX="3" endY="6">
      <color-block color="magenta">
        <h2>I'm overlapping</h2>
        <pre>
        x="1"
        y="4"
        endX="3"
        endY="6"
        style="z-index:1;"
        </pre>
      </color-block>
    </css-grid-item>

  </css-grid>
</template>

<script>
import colorBlock from './ColorBlock'

export default {
  components: {
    colorBlock
  },

  data () {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    }
  }
}
</script>

<style>

</style>
