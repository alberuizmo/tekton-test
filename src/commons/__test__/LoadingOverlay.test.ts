import { mount } from '@vue/test-utils';
import LoadingOverlay from '@/commons/LoadingOverlay.vue';
import { usePeopleStore } from '@/store/peopleStore';
import { describe, it, expect } from 'vitest';

describe('LoadingOverlay.vue', () => {
  const peopleStore = usePeopleStore();

  it('should render loading overlay when loading is true', () => {
    peopleStore.loading = true;

    const wrapper = mount(LoadingOverlay);

    expect(wrapper.find('.loading-overlay').exists()).toBe(true);
  });

  it('should not render loading overlay when loading is false', () => {
    peopleStore.loading = false;

    const wrapper = mount(LoadingOverlay);

    expect(wrapper.find('.loading-overlay').exists()).toBe(false);
  });
});
