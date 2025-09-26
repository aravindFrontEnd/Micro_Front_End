import App from "./App.svelte";

let svelteInstance = null;

// Mount function for micro frontend
const mount = (element) => {
  // Clean up any existing instance
  if (svelteInstance) {
    try {
      svelteInstance.$destroy();
    } catch (e) {
      console.warn("Error destroying previous Svelte instance:", e);
    }
  }

  let target = element;

  if (!target) {
    // Standalone mode - use existing #app or create new div
    target = document.getElementById("app");
    if (!target) {
      target = document.createElement("div");
      target.id = "app";
      document.body.appendChild(target);
    }
  }

  try {
    svelteInstance = new App({
      target: target,
    });
    console.log("Svelte app mounted successfully");
    return svelteInstance;
  } catch (error) {
    console.error("Svelte mount error:", error);
    if (target) {
      target.innerHTML =
        '<div style="padding: 20px; text-align: center; color: red;">Svelte app failed to load</div>';
    }
    return null;
  }
};

// Only mount if running standalone (port 8084)
const isStandalone =
  document.getElementById("app") && window.location.port === "8084";

if (isStandalone) {
  mount();
}

export default mount;
