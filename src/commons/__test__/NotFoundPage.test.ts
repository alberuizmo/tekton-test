import { mount } from "@vue/test-utils";
import NotFoundPage from "@/commons/NotFoundPage.vue";
import { expect, it, describe, beforeEach } from "vitest";
import PrimeVue from "primevue/config";

describe("NotFoundPage", async() => {
  let wrapper: any;

  beforeEach(async () => {
    wrapper = mount(NotFoundPage, {
      global: {
        plugins: [PrimeVue],
      },
    });
  });

  it("should render correctly", async () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should display error message", async () => {
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toContain("404 - Página no encontrada");
  });
});
