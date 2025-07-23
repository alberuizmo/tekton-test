<template>
  <div class="error-page">
    <h1>404 - Página no encontrada</h1>
    <img :src="errorImage" alt="Error 404" style="max-width: 100%; height: auto;" />
    <router-link to="/">Volver al inicio</router-link>
  </div>
</template>

<script lang="ts" setup>
import errorImage from '@/assets/error.webp';

</script>

<style scoped>
.error-page {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding: 50px;
  width: 100%;
}

.error-page img {
  width: 600px;
  max-width: 100%;
  margin:0px auto;
  margin-bottom: 1rem;
}
</style>
