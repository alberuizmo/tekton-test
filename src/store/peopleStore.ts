import { defineStore } from "pinia";
import PeopleApi from "@/api/peopleApi";
import type { Person } from "@/types/person";

const peopleAPi = new PeopleApi();

type statusTypes = {
  loading: boolean;
  people: Person[];
  selectedPerson: Person | null;
  actualId: number;
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
        this.people = await peopleAPi.fetchPeople();
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
        this.selectedPerson = await peopleAPi.fetchPersonById(id);
        this.actualId = id;
      } catch {
        throw new Error("Failed to load persons data");
      } finally {
        this.loading = false;
      }
    },
  },
});
