<script setup lang="ts">
import PlaylistForm from "./components/library/PlaylistForm.vue";
import PlaylistsList from "./components/library/PlaylistsList.vue";
import AudioPlayer from "./components/player/AudioPlayer.vue";
import TracksList from "./components/library/TracksList.vue";
import Drawer from "./components/common/Drawer.vue";
</script>

<template>
  <v-app>
    <Drawer />

    <!-- Main Content Area -->
    <v-main class="pl-14" style="padding-bottom: 150px;">
      <v-container>
        <!-- Tracks List Section -->
        <v-row>
          <v-col>
            <h2>Tracks List</h2>
            <TracksList />
          </v-col>
        </v-row>

        <!-- Playlists Section -->
        <v-row>
          <v-col>
            <h2>Playlists</h2>
            <PlaylistsList />
          </v-col>
        </v-row>

        <!-- Create Playlist Section -->
        <v-row>
          <v-col>
            <h2>Create a Playlist</h2>
            <PlaylistForm />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- Footer -->
    <v-footer class="pl-16 position-fixed bottom-0 left-0 right-0">
      <AudioPlayer />
    </v-footer>
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
