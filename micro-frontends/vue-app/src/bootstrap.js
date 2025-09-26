import { createApp } from "vue";
import App from "./App.vue";

// Mount function for micro frontend
const mount = (element) => {
  const app = createApp(App);

  if (element) {
    app.mount(element);
  } else {
    // Create a div for mounting
    const div = document.createElement("div");
    document.body.appendChild(div);
    app.mount(div);
  }

  return app;
};

// Only mount if running standalone (port 8083)
const isStandalone =
  document.getElementById("app") && window.location.port === "8083";

if (isStandalone) {
  mount("#app");
}

export default mount;
