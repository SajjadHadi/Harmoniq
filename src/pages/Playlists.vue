<script setup lang="ts">

import PlaylistsList from "../components/library/PlaylistsList.vue";
import CreatePlaylist from "../components/library/CreatePlaylist.vue";
</script>

<template>

  <v-container>
    <!-- Playlists Section -->
    <v-row>
      <v-col>
        <v-row class="d-flex align-center justify-space-between pa-2">
          <h2 class="mb-2 pl-2">Playlists</h2>
          <CreatePlaylist/>
        </v-row>
        <PlaylistsList :limit="5"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>