<script setup lang="ts">
import { ref } from "vue";
import { useLibraryStore } from "../../stores/LibraryStore.ts";

const store = useLibraryStore();
const audio = ref<HTMLAudioElement | null>(null);

const play = () => {
  if (audio.value) audio.value.play();
};

const pause = () => {
  if (audio.value) audio.value.pause();
};

// TODO: Autoplay when clicking new audio
// watch(() => store.currentTrack, () => {
//   if (audio.value) {
//     console.log("watch");
//     audio.value.play();
//   }
// });
</script>

<template>
  <v-main>
    <v-container class="player">
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card elevation="4" class="pa-4">
            <v-card-title class="headline">Music Player</v-card-title>
            <v-card-text>
              <audio ref="audio" :src="store.currentTrack?.path" controls class="mb-4"></audio>
              <v-row justify="center">
                <v-btn color="primary" class="ma-2" @click="play">
                  <v-icon left>mdi-play</v-icon>
                  Play
                </v-btn>
                <v-btn color="error" class="ma-2" @click="pause">
                  <v-icon left>mdi-pause</v-icon>
                  Pause
                </v-btn>
                <v-btn color="secondary" class="ma-2" @click="store.openTrack()">
                  <v-icon left>mdi-folder-music</v-icon>
                  Open File
                </v-btn>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>