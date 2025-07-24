<template>
    <div class="loading-overlay" v-if="loading">
        <ProgressSpinner strokeWidth="4" fill="transparent" />
    </div>
</template>

<script lang="ts" setup>
import ProgressSpinner from 'primevue/progressspinner';
import { usePeopleStore } from '@/store/peopleStore';
import { computed } from 'vue';

const peopleStore = usePeopleStore();

const loading = computed(() => peopleStore.loading);

</script>

<style scoped>
.loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>