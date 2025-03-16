<script lang="ts" setup>
import { ref } from "vue";
import { usePlaylistStore } from "../../stores/PlaylistStore.ts";

const store = usePlaylistStore();
const title = ref<string>("");
const form = ref();

const playlistRules = [
  (value: string) => {
    if (!value) return "Playlist title is required";
    if (value.length > 128) return "Playlist title must be smaller than 128 characters";
    return true;
  }
];

const handleSubmit = () => {
  if (!form.value.isValid) return;
  try {
    store.createPlaylist(title.value);
    resetForm();
  } catch (error) {
    console.error("Error creating playlist:", error);
  }
};

const resetForm = () => {
  title.value = "";
  form.value.reset();
  form.value.resetValidation();
};
</script>

<template>
  <v-sheet>
    <v-form ref="form" @submit.prevent="handleSubmit">
      <v-text-field
          v-model="title"
          :rules="playlistRules"
          clearable
          label="Playlist title"/>
      <v-btn
          block
          class="mt-2"
          color="secondary"
          type="submit">
        Create Playlist
      </v-btn>
    </v-form>
  </v-sheet>
</template>