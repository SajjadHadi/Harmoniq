<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from "vue-router";
import { usePlaylistStore } from "../stores/PlaylistStore.ts";
import { usePlaybackStore } from "../stores/PlaybackStore.ts";
import List from "../components/common/List.vue";
import { Playlist } from "../types/playlist";
import { Track } from "../types/track";
import EmptyList from "../components/common/EmptyList.vue";

const route = useRoute();
const router = useRouter();
const playlistStore = usePlaylistStore();
const playbackStore = usePlaybackStore();

const playlist = ref<Playlist | undefined>(undefined)
const playlistId = ref<string>('');

onMounted(() => {
  playlistId.value = route.params.id as string;
  playlist.value = playlistStore.getPlaylistById(playlistId.value);

  if (playlist.value === undefined) {
    router.push('/home');
  }
})

const handleDelete = (trackId: string) => {
  playlistStore.removeFromPlaylist(playlistId.value, trackId);
};

const handleItemClick = (trackId: string) => {
  playbackStore.setQueue(playlist.value?.tracks as Track[], trackId, 'playlist');
};

</script>

<template>
  <v-sheet v-if="playlist" class="pa-4 bg-transparent">
    <v-sheet class="d-flex align-center mb-4 bg-transparent">
      <v-btn icon="mdi-keyboard-backspace" @click="router.back()"/>
      <h2 class="ml-4">{{ playlist.title }}</h2>
    </v-sheet>

    <List
        v-if="playlist.tracks.length > 0"
        :items="playlist.tracks"
        item-count-key="tracks"
        item-icon="mdi-music"
        :on-delete="handleDelete"
        @item-click="handleItemClick"
    />
    <EmptyList v-else message="The playlist is empty..."/>
  </v-sheet>
</template>


<style scoped>

</style>