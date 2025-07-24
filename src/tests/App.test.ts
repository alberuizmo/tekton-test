import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('renders the App component', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.exists()).toBe(true)
  })

  it('renders LoadingOverlay and Toast components', () => {
    const wrapper = shallowMount(App)

    expect(wrapper.findComponent({ name: 'LoadingOverlay' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'Toast' }).exists()).toBe(true)
  })
})
