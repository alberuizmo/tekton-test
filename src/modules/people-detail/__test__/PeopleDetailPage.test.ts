import { mount } from "@vue/test-utils";
import PeopleDetailPage from "@/modules/people-detail/PeopleDetailPage.vue";
import { expect, it, describe, beforeEach, vi } from "vitest";
import PeopleApi from "@/api/peopleApi";
import type { Person } from "@/types/person";
import { setActivePinia, createPinia } from "pinia";
import { createRouter, createMemoryHistory } from "vue-router";
import { PeopleRoutes } from "@/router/routes";
import PrimeVue from "primevue/config";

const mockResponse = {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
    homeworld: "Tatooine",
    films: ["www.example/12.com", "www.example/13.com", "www.example/14.com"],
    species: ["www.example/12.com", "www.example/13.com", "www.example/14.com"],
    vehicles: ["www.example/12.com", "www.example/13.com", "www.example/14.com"],
    starships: ["www.example/12.com", "www.example/13.com", "www.example/14.com"],
    created: "",
    edited: "",
    url: "",
  } as Person;

vi.spyOn(PeopleApi.prototype, "fetchPersonById").mockResolvedValue(mockResponse);

describe("PeopleDetailPage", async() => {
  let wrapper: any;

  const router = createRouter({
    history: createMemoryHistory(),
    routes: [...PeopleRoutes],
  });

  router.push({ name: "PeopleDetail", params: { id: 1 } });

  await router.isReady();

  beforeEach(async () => {
    setActivePinia(createPinia());
    wrapper = mount(PeopleDetailPage, {
      global: {
        plugins: [router, PrimeVue],
      },
    });
  });

  it("should render correctly", async () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
 
  it("should display person data", async () => {
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toContain(mockResponse.name);
    expect(wrapper.text()).toContain(mockResponse.gender);
  });
});
