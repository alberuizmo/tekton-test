<template>
  <div id="app">    
    <router-view/>    
  </div><LoadingOverlay/>
</template>

<script lang="ts" setup>
import LoadingOverlay from '@/commons/LoadingOverlay.vue'
</script>

<style scoped lang="scss">
#app {
  padding: 2rem;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  min-height: 100vh;
}
</style>
