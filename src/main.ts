import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import vuetify from "./plugins/vuetify.ts";


createApp(App).use(vuetify).use(createPinia()).mount("#app");
