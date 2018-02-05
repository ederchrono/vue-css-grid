<template>
  <css-grid
    gap="5px 10px"
    :columns="['1fr', '1fr', '1fr', '1fr']"
    auto-rows="120px">
    <!-- auto-rows/columns is used when the content is of unkown length -->

    <css-grid-item
      style="text-align: center;"
      x="1" width="4">
      <h2>mainContent component</h2>
      <p>This contains a nested grid with auto-row and no areas</p>
    </css-grid-item>

    <css-grid-item
      v-for="(item, index) in items"
      :key="index">
      <color-block
        class="shadow"
        color="#AE8799">
        <h3>item #{{item}}</h3>
      </color-block>
    </css-grid-item>

    <css-grid-item
      class="shadow"
      x="2" y="3" width="2" height="3">
      <color-block color="#496DDB">
        <h2>Fixed position</h2>
        <pre style="text-align: left;">
        x="2"
        y="3"
        width="2"
        height="3"
        </pre>
      </color-block>
    </css-grid-item>

    <css-grid-item
      class="overlapped-item"
      x="1" y="5" endX="3" endY="7">
      <color-block color="#717EC3">
        <h2>I'm overlapping</h2>
        <pre style="text-align: left;">
        x="1"
        y="5"
        endX="3"
        endY="7"
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
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    }
  }
}
</script>

<style scoped>
.shadow {
  box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.5);
}
.overlapped-item {
  z-index:1;
  box-shadow: 2px 4px 8px 0px rgba(0,0,0,0.5);
}
</style>
