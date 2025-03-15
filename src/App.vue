<script setup lang="ts">
import { ref } from "vue";
import { open } from "@tauri-apps/plugin-dialog"
import { convertFileSrc } from "@tauri-apps/api/core";


const audio = ref<HTMLAudioElement | null>(null);
const currentTrack = ref<string>('');

const play = () => {
  if (audio.value) audio.value.play();
}

const pause = () => {
  if (audio.value) audio.value.pause();
}

const selectTrack = async () => {
  try {
    const file = await open({
      multiple: false,
      directory: false,
      filters: [{ name: 'Audio', extensions: ['mp3', 'wav', 'ogg'] }],
    })
    if (file) {
      const assetUrl = convertFileSrc(file as string);
      currentTrack.value = assetUrl;
    }
  } catch (error) {
    console.error(error);
  }
}

</script>

<template>
  <v-app>
    <v-main>
      <v-container class="player">
        <v-row justify="center">
          <v-col cols="12" md="8">
            <v-card elevation="4" class="pa-4">
              <v-card-title class="headline">Music Player</v-card-title>
              <v-card-text>
                <audio ref="audio" :src="currentTrack" controls class="mb-4"></audio>
                <v-row justify="center">
                  <v-btn color="primary" class="ma-2" @click="play">
                    <v-icon left>mdi-play</v-icon>
                    Play
                  </v-btn>
                  <v-btn color="error" class="ma-2" @click="pause">
                    <v-icon left>mdi-pause</v-icon>
                    Pause
                  </v-btn>
                  <v-btn color="secondary" class="ma-2" @click="selectTrack">
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
  </v-app>
</template>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: rgb(var(--v-theme-background));
}
</style>
