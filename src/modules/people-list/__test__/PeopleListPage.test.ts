import { mount } from "@vue/test-utils";
import PeopleListPage from "@/modules/people-list/PeopleListPage.vue";
import { expect, it, describe, beforeEach, vi } from "vitest";
import PeopleApi from "@/api/peopleApi";
import type { Person } from "@/types/person";
import { setActivePinia, createPinia } from "pinia";
import { createRouter, createMemoryHistory } from "vue-router";
import { PeopleRoutes } from "@/router/routes";
import PrimeVue from "primevue/config";
import { formatStarWarsDate } from "@/helpers/dates";
import ToastService from 'primevue/toastservice';

const mockResponse = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
    homeworld: "Tatooine",
    films: ["A New Hope", "The Empire Strikes Back", "Return of the Jedi"],
    species: [],
    vehicles: [],
    starships: [],
    created: "",
    edited: "",
    url: "",
  },
] as Person[];

vi.spyOn(PeopleApi.prototype, "fetchPeople").mockResolvedValue(mockResponse);

describe("PeopleListPage", () => {
  let wrapper: any;

  const router = createRouter({
    history: createMemoryHistory(),
    routes: [...PeopleRoutes],
  });

  beforeEach(async () => {
    setActivePinia(createPinia());
    wrapper = mount(PeopleListPage, {
      global: {
        plugins: [router, PrimeVue, ToastService],
      },
    });
  });

  it("should render correctly", async () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should display people data", async () => {
    const dateOfBirth = formatStarWarsDate(mockResponse[0].birth_year);
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toContain(mockResponse[0].name);
    expect(wrapper.text()).toContain(dateOfBirth);
    expect(wrapper.text()).toContain(mockResponse[0].gender);
  });

  it("should navigate to detail page on button click", async () => {
    const routerPush = vi.spyOn(wrapper.vm.$router, "push");
    await wrapper.vm.$nextTick();

    const button = wrapper.find("button");
    await button.trigger("click");

    expect(routerPush).toHaveBeenCalledWith({
      name: "PeopleDetail",
      params: { id: 1 },
    });
  });
});
