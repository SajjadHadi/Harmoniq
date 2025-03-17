<script setup lang="ts">
import PlaylistForm from "./components/library/PlaylistForm.vue";
import PlaylistsList from "./components/library/PlaylistsList.vue";
import AudioPlayer from "./components/player/AudioPlayer.vue";
import TracksList from "./components/library/TracksList.vue";
import Drawer from "./components/common/Drawer.vue";
</script>

<template>
  <v-app>
    <Drawer/>

    <!-- Main content area -->
    <v-main class="pl-14">
      <v-container fluid>
        <AudioPlayer/>

        <!-- Tracks List Section -->
        <v-row>
          <v-col>
            <h2>Tracks List</h2>
            <TracksList/>
          </v-col>
        </v-row>

        <!-- Playlists Section -->
        <v-row>
          <v-col>
            <h2>Playlists</h2>
            <PlaylistsList/>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <h2>Create a Playlist</h2>
            <PlaylistForm/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>