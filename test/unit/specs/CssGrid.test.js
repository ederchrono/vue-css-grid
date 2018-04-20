import { mount } from '@vue/test-utils'
import CssGrid from '~/vue-css-grid/components/CssGrid'

describe('CssGrid.vue', () => {
  it('should render a div', () => {
    const wrapper = mount(CssGrid)
    expect(wrapper.is('div')).toBe(true)
  })
})
