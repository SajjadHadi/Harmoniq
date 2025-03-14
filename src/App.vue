<script setup lang="ts">
import {ref} from "vue";
import {invoke} from "@tauri-apps/api/core";

const greetMsg = ref("");
const name = ref("");

async function greet() {
  greetMsg.value = await invoke("greet", {name: name.value});
}
</script>

<template>
  <main class="container">
    <form class="row" @submit.prevent="greet">
      <v-text-field clearable label="Name" v-model="name"></v-text-field>
      <button type="submit">Greet</button>
    </form>
    <p>{{ greetMsg }}</p>
  </main>
</template>

<style scoped>

</style>
