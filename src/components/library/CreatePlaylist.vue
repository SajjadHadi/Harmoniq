<script lang="ts" setup>
import { ref } from "vue";
import { usePlaylistStore } from "../../stores/PlaylistStore.ts";

const store = usePlaylistStore();
const dialog = ref(false);
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
    dialog.value = false;
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
  <div class="pa-4 text-center">
    <v-btn
        icon="mdi-plus"
        color="secondary"
        @click="dialog = true"
    ></v-btn>

    <v-dialog
        v-model="dialog"
        max-width="400"
    >
      <v-card title="Create Playlist" class="rounded-xl pa-2">
        <v-card-text>
          <v-form ref="form" @submit.prevent="handleSubmit">
            <v-text-field
                v-model="title"
                :rules="playlistRules"
                clearable
                label="Playlist title"
            />
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="Close" variant="plain" @click="dialog = false"></v-btn>

          <v-btn
              color="secondary"
              text="Save"
              variant="elevated"
              @click="handleSubmit"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
