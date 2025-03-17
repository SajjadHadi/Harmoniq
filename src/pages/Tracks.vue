<script setup lang="ts">

import TracksList from "../components/library/TracksList.vue";
</script>

<template>
  <v-container>
    <!-- Recent Tracks Section -->
    <v-row>
      <v-col>
        <h2 class="mb-2 pl-2">Recent Tracks</h2>
        <TracksList/>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>