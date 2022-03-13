import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "@/App.vue";
import { FontAwesomeIcon } from "@/assets/plugins/font-awesome";
import router from "./router";

const app = createApp(App).component("fa", FontAwesomeIcon);
app.use(createPinia());
app.use(router);

app.mount("#app");
