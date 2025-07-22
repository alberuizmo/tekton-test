<template>
  <div v-if="person">
    <h1>{{ person.name }}</h1>
    <p><strong>Género:</strong> {{ person.gender }}</p>
    <p><strong>Películas:</strong></p>
    <ul>
      <li v-for="film in person.films" :key="film">{{ film }}</li>
    </ul>
    <p><strong>Especies:</strong></p>
    <ul>
      <li v-for="species in person.species" :key="species">{{ species }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { usePeopleStore } from '@/store/peopleStore'

const route = useRoute()
const peopleStore = usePeopleStore()

onMounted(() => {
  peopleStore.loadPerson(Number(route.params.id))
})

const person = peopleStore.selectedPerson
</script>
