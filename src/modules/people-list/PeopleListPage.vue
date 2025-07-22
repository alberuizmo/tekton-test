<template>
  <div>
    <h1>Listado de Personas</h1>
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Año de nacimiento</th>
          <th>Género</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(person, index) in peopleStore.people" :key="person.name">
          <td>{{ person.name }}</td>
          <td>{{ person.birth_year }}</td>
          <td>{{ person.gender }}</td>
          <td>
            <button @click="goToDetail(index)">Ver detalle</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { usePeopleStore } from '@/store/peopleStore'

const peopleStore = usePeopleStore()
const router = useRouter()

onMounted(() => {
  peopleStore.loadPeople()
})

function goToDetail(index: number) {
  router.push({ name: 'PeopleDetail', params: { id: index } })
}
</script>
