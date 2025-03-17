<script setup lang="ts">
import { usePlaylistStore } from "../../stores/PlaylistStore.ts";
import ItemList from "../common/ItemList.vue";
import EmptyList from "../common/EmptyList.vue";

defineProps<{
  limit?: number
}>();

const store = usePlaylistStore();

const handleDelete = (playlistId: string) => {
  store.removePlaylist(playlistId);
};

const handleEdit = (playlistId: string) => {
  // TODO: Implement edit functionality
  console.log('Editing playlist:', playlistId);
};

const handleItemClick = (playlistId: string) => {
  console.log('Playlist clicked:', playlistId);
}
</script>

<template>
  <ItemList
      v-if="store.playlists.length > 0"
      :items="limit ? store.playlists.slice(0, 5) : store.playlists"
      item-count-key="tracks"
      item-icon="mdi-playlist-music"
      :on-delete="handleDelete"
      :on-edit="handleEdit"
      @item-click="handleItemClick"
  />
  <EmptyList v-else message="The playlist library is empty..." />
</template>
