<template>
  <div class="p-4">
    <div class="text-center mt-4">
      <router-link to="/" class="button-back">
        Volver al inicio
      </router-link>
    </div>
    <Card v-if="person" class="p-shadow-4 card-detail">
      <template #title>
        {{ person.name }}
      </template>

      <template #content>
        <div class="p-mb-3"><strong>Género:</strong>
          <Tag :value="person.gender" />
        </div>

        <div class="p-mb-3"><strong>Año de nacimiento:</strong>
          {{ formatStarWarsDate(person.birth_year) }}
        </div>

        <div v-if="person.films.length">
          <h3>Películas</h3>
          <ul class="p-pl-3">
            <li v-for="film in person.films" :key="film">
              <a class="link-styled" :href="film" target="_blank">
                {{ extractIdFromUrl(film, 'films') }}
              </a>
            </li>
          </ul>
        </div>

        <div v-if="person.species.length">
          <h3>Especies</h3>
          <ul class="p-pl-3">
            <li v-for="species in person.species" :key="species"><a class="link-styled" :href="species"
                target="_blank">{{ extractIdFromUrl(species, 'species') }}</a></li>
          </ul>
        </div>

        <div v-if="person.vehicles.length">
          <h3>Vehículos</h3>
          <ul class="p-pl-3">
            <li v-for="vehicle in person.vehicles" :key="vehicle"><a class="link-styled" :href="vehicle"
                target="_blank">{{ extractIdFromUrl(vehicle, 'vehicles') }}</a></li>
          </ul>
        </div>

        <div v-if="person.starships.length">
          <h3>Naves espaciales</h3>
          <ul class="p-pl-3">
            <li v-for="starship in person.starships" :key="starship"><a class="link-styled" :href="starship"
                target="_blank">{{ extractIdFromUrl(starship, 'starships') }}</a></li>
          </ul>
        </div>
      </template>
    </Card>    
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { usePeopleStore } from '@/store/peopleStore'
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import { formatStarWarsDate } from '@/helpers/dates'
import { useToast } from 'primevue/usetoast';

const toast = useToast();
const route = useRoute()
const peopleStore = usePeopleStore()
const person = computed(() => peopleStore.selectedPerson)

onMounted(async() => {
  try {
    await peopleStore.loadPerson(Number(route.params.id));
  } catch (error) {
    toast.add({ severity: 'error', summary: 'Error', detail: 'No se pudo cargar la persona', life: 3000 }); 
  }
})

function extractIdFromUrl(url: string, type: string): string {
  const parts = url.split(`${type}/`)
  return parts.length > 1 ? `${type} #${parts[1].replace('/', '')}` : url
}
</script>

<style scoped>
h3 {
  margin-top: 1rem;
}

.link-styled {
  color: #007bff;
  text-decoration: none;
}

.link-styled:hover {
  text-decoration: underline;
}

.card-detail{
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.button-back{
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #10B981;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}

.button-back:hover {
  background-color: #059669;
}
</style>
