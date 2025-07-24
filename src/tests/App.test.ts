import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import App from "@/App.vue";
import { createRouter, createMemoryHistory } from "vue-router";
import { PeopleRoutes } from "@/router/routes";
import ToastService from 'primevue/toastservice';
import PrimeVue from "primevue/config";

describe("App.vue", async () => {
  let wrapper: any;
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [...PeopleRoutes],
  });

  beforeEach(async () => {
    wrapper = mount(App, {
      global: {
        plugins: [router, ToastService, PrimeVue],
      },
    });
  });

  it("renders the App component", async () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders LoadingOverlay and Toast components", async () => {
    expect(wrapper.findComponent({ name: "LoadingOverlay" }).exists()).toBe(
      true
    );
    expect(wrapper.findComponent({ name: "Toast" }).exists()).toBe(true);
  });
});
