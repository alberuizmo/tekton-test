import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import HelloWorld from './HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renderiza el mensaje correctamente', () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: 'Hola Mundo' },
    });
    expect(wrapper.text()).toContain('Hola Mundo');
  });
});
