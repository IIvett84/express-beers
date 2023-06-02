// entry point

// BASE_URL: http://localhost:8080/scripts/

// HTTP: http://localhost:8080/scripts/view.js
import { initApp } from "./main/index.js";

function main() {
  initApp();
}

window.onload = () => main();
