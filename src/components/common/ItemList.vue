<script setup lang="ts">
import { ref } from "vue";

interface Item {
  id: string;
  title: string;
  [key: string]: any;
}

defineProps<{
  items: Item[];
  itemIcon?: string;
  onDelete: (id: string) => void;
  onEdit?: (id: string) => void;
}>();

const isEditing = ref<boolean>(false);
const activeItemId = ref<string | null>(null);

const toggleEdit = (itemId: string) => {
  if (activeItemId.value === itemId) {
    isEditing.value = false;
    activeItemId.value = null;
  } else {
    activeItemId.value = itemId;
    isEditing.value = true;
  }
};
</script>

<template>
  <v-list class="rounded-xl">
    <v-list-item
        @click="$emit('item-click', item.id)"
        v-for="item in items"
        :key="item.id"
        :class="{ 'editing-item': isEditing && activeItemId === item.id }">
      <template v-slot:prepend>
        <v-avatar color="primary">
          <v-icon :icon="itemIcon || ''" color="white"/>
        </v-avatar>
      </template>

      <v-list-item-title>{{ item.title }}</v-list-item-title>

      <template v-slot:append>
        <div v-if="isEditing && activeItemId === item.id">
          <v-btn
              icon
              color="error"
              variant="text"
              @click="onDelete(item.id)">
            <v-icon>mdi-delete</v-icon>
            <v-tooltip activator="parent" location="bottom">Remove</v-tooltip>
          </v-btn>

          <v-btn
              v-if="onEdit"
              icon
              color="warning"
              variant="text"
              @click="onEdit(item.id)">
            <v-icon>mdi-pencil</v-icon>
            <v-tooltip activator="parent" location="bottom">Edit</v-tooltip>
          </v-btn>

          <v-btn
              icon
              color="grey"
              variant="text"
              @click="toggleEdit(item.id)">
            <v-icon>mdi-close</v-icon>
            <v-tooltip activator="parent" location="bottom">Close</v-tooltip>
          </v-btn>
        </div>

        <v-btn
            v-else
            icon
            color="grey"
            variant="text"
            @click="toggleEdit(item.id)">
          <v-icon>mdi-dots-horizontal</v-icon>
          <v-tooltip activator="parent" location="bottom">More Options</v-tooltip>
        </v-btn>
      </template>
    </v-list-item>
  </v-list>
</template>
