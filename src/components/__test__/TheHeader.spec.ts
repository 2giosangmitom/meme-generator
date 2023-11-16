import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import TheHeader from '../TheHeader.vue';

describe('TheHeader', () => {
  const wrapper = mount(TheHeader);

  it('renders properly', () => {
    expect(wrapper.text()).toContain('VueJS' && 'Meme generator');
  });

  it('header image', () => {
    expect(wrapper.find('img').isVisible()).toBeTruthy();
  });
});
