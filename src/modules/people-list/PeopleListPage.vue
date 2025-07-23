<template>
  <div>
    <h1>Listado de Personas</h1>
    <DataTable :value="peopleStore.people" stripedRows tableStyle="min-width: 50rem" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]">
      <Column field="name" header="Nombre"></Column>
      <Column field="birth_year" header="Año de nacimiento">
        <template #body="{ data }">
          {{ formatStarWarsDate(data.birth_year) }}
        </template>
      </Column>
      <Column field="gender" header="Género"></Column>
      <Column header="Acciones">
        <template #body="{ index }">
          <Button label="Ver detalle" @click="goToDetail(index+1)" />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { usePeopleStore } from '@/store/peopleStore'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from "primevue/button"
import { formatStarWarsDate } from '@/helpers/dates';

const peopleStore = usePeopleStore()
const router = useRouter()

onMounted(() => {
  peopleStore.loadPeople()
})

function goToDetail(index: number) {
  router.push({ name: 'PeopleDetail', params: { id: index } })
}
</script>
