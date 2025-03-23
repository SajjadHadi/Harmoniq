<script setup lang="ts">

import LibraryList from "../components/library/LibraryList.vue";
import PlaylistsList from "../components/library/PlaylistsList.vue";
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <h2 class="mb-2 pl-2">Recent Tracks</h2>
        <LibraryList :limit="5"/>
      </v-col>
    </v-row>

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