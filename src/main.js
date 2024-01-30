import { createApp } from "vue";
import "./assets/styles/style.css";
import "./assets/styles/dist/build.css";
import App from "./App.vue";
import NavBar from "./components/NavBar.vue";
import { createPinia } from "pinia";

import router from "./router/index.js";

const app = createApp(App);

const pinia = createPinia();

app.directive("email", {
  created(el, biding) {
    el.innerHTML = `<a href="mailto:${biding.value}">${biding.value}</a>`;
  },
});

app
  .component("NavBar", NavBar)
  .use(router)
  .use(pinia)

  .mount("#app");
