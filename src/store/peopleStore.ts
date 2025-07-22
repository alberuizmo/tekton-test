import { defineStore } from 'pinia'
import { fetchPeople, fetchPersonById } from '@/api/peopleApi'
import type { Person } from '@/types/person'

export const usePeopleStore = defineStore('people', {
  state: () => ({
    people: [] as Person[],
    selectedPerson: null as Person | null,
    loading: false
  }),

  actions: {
    async loadPeople() {
      this.loading = true
      this.people = await fetchPeople()
      this.loading = false
    },

    async loadPerson(id: number) {
      this.loading = true
      this.selectedPerson = await fetchPersonById(id)
      this.loading = false
    }
  }
})
