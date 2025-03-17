<script setup lang="ts">
import { useLibraryStore } from "../../stores/LibraryStore.ts";
import ItemList from "../common/ItemList.vue";
import EmptyList from "../common/EmptyList.vue";

defineProps<{
  limit?: number
}>()

const store = useLibraryStore();

const handleDelete = (trackId: string) => {
  store.removeTrack(trackId);
};

const handleItemClick = (trackId: string) => {
  store.setCurrentTrack(trackId);
}
</script>

<template>
  <ItemList
      v-if="store.tracks.length > 0"
      :items="limit ? store.tracks.slice(0, limit) : store.tracks"
      item-count-key="tracks"
      item-icon="mdi-music"
      :on-delete="handleDelete"
      @item-click="handleItemClick"
  />
  <EmptyList v-else message="The track library is empty..." />
</template>
