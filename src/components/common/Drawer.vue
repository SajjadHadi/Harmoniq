<script setup lang="ts">
import { ref } from 'vue';

const drawer = ref(true);
const rail = ref(true);
</script>


<template>
  <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      permanent
      @click="rail = false"
  >
    <v-list-item
        prepend-icon="mdi-music-clef-treble"
        title="Harmoniq Player"
        nav
    >
      <template v-slot:append>
        <v-btn
            icon="mdi-chevron-left"
            variant="text"
            @click.stop="rail = !rail"
        />
      </template>
    </v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-home" title="Home" to="/" nav/>
      <v-list-item prepend-icon="mdi-playlist-music" title="Playlist" to="/playlist" nav/>
      <v-list-item prepend-icon="mdi-music" title="Library" to="/library" nav/>
    </v-list>

  </v-navigation-drawer>
</template>