import { defineStore } from "pinia";
import type { Person } from "@/types/person";
import type { PeopleApiType } from "@/api/peopleApi"

type statusTypes = {
  loading: boolean;
  people: Person[];
  selectedPerson: Person | null;
  actualId: number;
};

let peopleApi: PeopleApiType;

export const setPeopleApi = (api: PeopleApiType) => {
  peopleApi = api;
};

export const usePeopleStore = defineStore("people", {
  state: (): statusTypes => ({
    people: [],
    selectedPerson: null,
    loading: false,
    actualId: 0,
  }),

  actions: {
    async loadPeople() {
      if (this.people.length > 0) return;
      try {
        this.loading = true;
        this.people = await peopleApi.fetchPeople();
      } catch {
        throw new Error("Failed to load people data");
      } finally {
        this.loading = false;
      }
    },
    async loadPerson(id: number) {
      if (this.selectedPerson && id === this.actualId) return;
      this.selectedPerson = null;
      try {
        this.loading = true;
        this.selectedPerson = await peopleApi.fetchPersonById(id);
        this.actualId = id;
      } catch {
        throw new Error("Failed to load persons data");
      } finally {
        this.loading = false;
      }
    },
  },
});
