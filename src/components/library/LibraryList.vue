<script setup lang="ts">
import { ref } from 'vue';
import { useLibraryStore } from '../../stores/LibraryStore';
import { usePlaybackStore } from '../../stores/PlaybackStore';
import { usePlaylistStore } from '../../stores/PlaylistStore';
import List from '../common/List.vue';
import EmptyList from '../common/EmptyList.vue';
import SelectPlaylist from '../modals/SelectPlaylist.vue';

defineProps<{
  limit?: number
}>()

const libraryStore = useLibraryStore();
const playbackStore = usePlaybackStore();
const playlistStore = usePlaylistStore();

const selectedTrack = ref<string>('');
const isModalActive = ref(false);

const handleDelete = (trackId: string) => {
  libraryStore.removeTrack(trackId);
};

const handleItemClick = (trackId: string) => {
  playbackStore.setQueue(libraryStore.tracks, trackId, 'library');
};

const resetAddToPlaylist = () => {
  selectedTrack.value = "";
  isModalActive.value = false;
};

const handleAddToPlaylist = (trackId: string) => {
  selectedTrack.value = trackId;
  isModalActive.value = true;
};

const handleCloseSaveToPlaylists = () => {
  resetAddToPlaylist();
};

const handleSaveToPlaylists = (playlistId: string) => {
  const trackToAdd = libraryStore.tracks.find(t => t.id === selectedTrack.value);
  if (trackToAdd)  playlistStore.addToPlaylist(playlistId, trackToAdd);
  resetAddToPlaylist();
};
</script>

<template>
  <SelectPlaylist
      v-model:isActive="isModalActive"
      :playlists="playlistStore.playlists"
      @save="handleSaveToPlaylists"
      @close="handleCloseSaveToPlaylists"
  />

  <List
      v-if="libraryStore.tracks.length > 0"
      :items="limit ? libraryStore.tracks.slice(0, limit) : libraryStore.tracks"
      item-count-key="tracks"
      item-icon="mdi-music"
      :on-delete="handleDelete"
      :on-add="handleAddToPlaylist"
      @item-click="handleItemClick"
  />
  <EmptyList v-else message="The track library is empty..." />
</template>
