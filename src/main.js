import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router"; // Імпортуємо наш файл

const app = createApp(App);

app.use(createPinia());
app.use(router); // Кажемо Vue використовувати роутер
app.mount("#app");
