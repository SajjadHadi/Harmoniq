<script setup lang="ts">
defineProps<{ message: string }>();
</script>

<template>
  <v-card class="pa-3 text-accent rounded-lg"><small>{{ message }}</small></v-card>
</template>
