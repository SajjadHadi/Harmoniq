import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify.ts";


createApp(App)
    .use(router)
    .use(vuetify)
    .use(createPinia())
    .mount("#app");
