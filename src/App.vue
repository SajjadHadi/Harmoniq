<script setup lang="ts">

import PlaylistForm from "./components/library/PlaylistForm.vue";
import PlaylistsList from "./components/library/PlaylistsList.vue";
import AudioPlayer from "./components/player/AudioPlayer.vue";
import TracksList from "./components/library/TracksList.vue";
</script>

<template>
  <v-app>
    <AudioPlayer/>
    <h2>Tracks List</h2>
    <TracksList/>

    <h2>Playlists</h2>
    <PlaylistsList/>

    <h2>Create a Playlist</h2>
    <PlaylistForm/>
  </v-app>
</template>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: rgb(var(--v-theme-primary));
}
</style>
