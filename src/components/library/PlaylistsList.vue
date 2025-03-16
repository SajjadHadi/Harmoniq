<script setup lang="ts">
import { usePlaylistStore } from "../../stores/PlaylistStore.ts";
import ItemList from "../common/ItemList.vue";

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
      :items="store.playlists"
      item-count-key="tracks"
      item-icon="mdi-playlist-music"
      :on-delete="handleDelete"
      :on-edit="handleEdit"
      @item-click="handleItemClick"
  />
</template>
