<script setup lang="ts">
import { ref, computed, defineEmits, defineProps } from 'vue';
import { Playlist } from '../../types/playlist';

const props = defineProps<{
  playlists: Playlist[],
  isActive: boolean,
}>();

const emit = defineEmits<{
  (e: 'update:isActive', value: boolean): void;
  (e: 'save', value: string): void;
  (e: 'close'): void;
}>();

const modelIsActive = computed({
  get: () => props.isActive,
  set: (value: boolean) => emit('update:isActive', value)
});

const selectedPlaylist = ref('');
</script>

<template>
  <div class="pa-4 text-center" style="margin-top: -32px">
    <v-dialog v-model="modelIsActive" width="auto" scrollable>
      <v-card prepend-icon="mdi-playlist-music" title="Select Playlist">
        <v-divider class="mt-3"></v-divider>

        <v-card-text class="px-4" style="height: 300px;">
          <v-radio-group
              v-model="selectedPlaylist"
              messages="Select a playlist to add this track to..."
          >
            <v-radio
                v-for="playlist in props.playlists"
                :key="playlist.id"
                :label="playlist.title"
                :value="playlist.id"
            />
          </v-radio-group>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn text @click="emit('close')">Close</v-btn>
          <v-spacer></v-spacer>
          <v-btn
              color="secondary"
              text
              variant="flat"
              @click="emit('save', selectedPlaylist)"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
