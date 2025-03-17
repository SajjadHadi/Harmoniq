<script setup lang="ts">
import AudioPlayer from "./components/player/AudioPlayer.vue";
import Drawer from "./components/common/Drawer.vue";
</script>

<template>
  <v-app>
    <Drawer/>

    <!-- Main Content Area -->
    <v-main class="pl-14" style="padding-bottom: 150px;">
      <router-view/>
    </v-main>

    <!-- Footer -->
    <v-footer class="pl-16 position-fixed bottom-0 left-0 right-0">
      <AudioPlayer/>
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
