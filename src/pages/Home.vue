<script setup lang="ts">

import TracksList from "../components/library/TracksList.vue";
import PlaylistsList from "../components/library/PlaylistsList.vue";
</script>

<template>
  <v-container>
    <!-- Recent Tracks Section -->
    <v-row>
      <v-col>
        <h2 class="mb-2 pl-2">Recent Tracks</h2>
        <TracksList :limit="5"/>
      </v-col>
    </v-row>

    <!-- Recent Playlists Section -->
    <v-row>
      <v-col>
        <h2 class="mb-2 pl-2">Recent Playlists</h2>
        <PlaylistsList :limit="5"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>