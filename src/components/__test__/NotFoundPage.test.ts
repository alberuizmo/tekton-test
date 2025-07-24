import { mount } from "@vue/test-utils";
import NotFoundPage from "@/components/NotFoundPage.vue";
import { expect, it, describe, beforeEach } from "vitest";
import PrimeVue from "primevue/config";
import { PeopleRoutes } from "@/router/routes";
import { createMemoryHistory, createRouter } from "vue-router";

describe("NotFoundPage", async () => {
  let wrapper: any;
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [...PeopleRoutes],
  });

  beforeEach(async () => {
    wrapper = mount(NotFoundPage, {
      global: {
        plugins: [router, PrimeVue],
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
