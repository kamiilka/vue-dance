import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router"; // Імпортуємо наш файл
import { i18n } from "./i18n";

const app = createApp(App);

app.use(createPinia());
app.use(router); // Кажемо Vue використовувати роутер
app.use(i18n); // Кажемо Vue використовувати i18n
app.mount("#app");
