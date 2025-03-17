<script setup lang="ts">

import PlaylistsList from "../components/library/PlaylistsList.vue";
import PlaylistForm from "../components/library/PlaylistForm.vue";
</script>

<template>

  <v-container>
    <!-- Playlists Section -->
    <v-row>
      <v-col>
        <h2 class="mb-2 pl-2">Playlists</h2>
        <PlaylistsList :limit="5"/>
      </v-col>
    </v-row>

    <!-- Create Playlist Section -->
    <v-row>
      <v-col>
        <h2 class="mb-2 pl-2">Create a Playlist</h2>
        <PlaylistForm/>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>