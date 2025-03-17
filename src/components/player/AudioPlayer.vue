<script setup lang="ts">
import { ref, watch } from 'vue';
import { useLibraryStore } from '../../stores/LibraryStore';

const store = useLibraryStore();

const audio = ref<HTMLAudioElement | null>(null);
const isPlaying = ref(false);
const currentTime = ref(0);
const duration = ref(0);

const togglePlayback = () => {
  if (!audio.value) return;
  if (isPlaying.value) {
    audio.value.pause();
  } else {
    audio.value.play().catch(err => console.error("Play error:", err));
  }
};

const handlePlay = () => {
  isPlaying.value = true;
};

const handlePause = () => {
  isPlaying.value = false;
};

const updateTime = () => {
  if (audio.value) {
    currentTime.value = Math.floor(audio.value.currentTime);
  }
};

const updateMetadata = () => {
  if (audio.value) {
    duration.value = Math.floor(audio.value.duration);
  }
};

const seekAudio = (newTime: number) => {
  if (audio.value) {
    audio.value.currentTime = newTime;
  }
};

// Format seconds into mm:ss
const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
};

watch(
    () => store.currentTrack,
    (newTrack) => {
      if (!audio.value) return;
      // Pause current playback and reset timing
      audio.value.pause();
      currentTime.value = 0;
      duration.value = 0;

      if (newTrack && newTrack.path) {
        audio.value.src = newTrack.path;
        audio.value.load();
        audio.value.play().catch(err => console.error("Play error:", err));
      } else {
        audio.value.src = '';
      }
    }
);
</script>

<template>
  <v-card elevation="0" width="100%">
    <v-card-title class="headline mb-4" v-if="store.currentTrack"> {{ store.currentTrack?.title }}</v-card-title>
    <v-card-text>
      <audio
          ref="audio"
          @play="handlePlay"
          @pause="handlePause"
          @timeupdate="updateTime"
          @loadedmetadata="updateMetadata"
          style="display: none;"
      />

      <v-row>
        <v-col cols="auto" justify="center">
          <v-btn class="mr-1" color="primary" @click="store.skipToPreviousTrack()" icon>
            <v-icon left>mdi-skip-previous</v-icon>
          </v-btn>

          <v-btn class="mr-1" color="primary" @click="togglePlayback" icon>
            <v-icon left>{{ isPlaying ? 'mdi-pause' : 'mdi-play' }}</v-icon>
          </v-btn>

          <v-btn class="mr-1" color="primary" @click="store.skipToNextTrack()" icon>
            <v-icon left>mdi-skip-next</v-icon>
          </v-btn>

          <v-btn color="secondary" @click="store.openTrack()" icon>
            <v-icon left>mdi-folder-music</v-icon>
          </v-btn>
        </v-col>

        <v-col>
          <v-col>
            <v-row>
              <v-slider
                  v-model="currentTime"
                  :max="duration"
                  step="1"
                  hide-details
                  @update:modelValue="seekAudio"
              />
            </v-row>
            <v-row>
              <v-col class="pa-0">{{ formatTime(currentTime) }}</v-col>
              <v-col class="text-end pa-0">{{ formatTime(duration) }}</v-col>
            </v-row>
          </v-col>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>


