<script setup lang="ts">
import { useRouter } from "vue-router";
import { usePlaylistStore } from "../../stores/PlaylistStore.ts";
import List from "../common/List.vue";
import EmptyList from "../common/EmptyList.vue";

defineProps<{
  limit?: number
}>();

const store = usePlaylistStore();
const router = useRouter();

const handleDelete = (playlistId: string) => {
  store.removePlaylist(playlistId);
};

const handleEdit = (playlistId: string) => {
  // TODO: Implement edit functionality
  console.log('Editing playlist:', playlistId);
};

const handleItemClick = (playlistId: string) => {
  router.push(`/playlist/${playlistId}`);
}
</script>

<template>
  <List
      v-if="store.playlists.length > 0"
      :items="limit ? store.playlists.slice(0, 5) : store.playlists"
      item-count-key="tracks"
      item-icon="mdi-playlist-music"
      :on-delete="handleDelete"
      :on-edit="handleEdit"
      @item-click="handleItemClick"
  />
  <EmptyList v-else message="The playlist library is empty..."/>
</template>
