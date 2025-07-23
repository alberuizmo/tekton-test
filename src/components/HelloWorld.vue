<template>
  <div>
    <p>{{ msg }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ msg: string }>();
</script>
