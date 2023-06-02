import { initBeerFeed } from "../beer-feed/index.js";
import { initBeerForm } from "../beer-form/index.js";
import { createEl } from '../utils/createEl.js'

const root = document.querySelector("#root");

// --- VIEW ----
function renderHeader() {
  const nav = createEl("nav");
  const head = createEl("h1", { innerText: "Beer Blog App" });

  nav.append(head);
  root.append(nav);
}

// --- CONTROLLER ----
export async function initApp() {
  renderHeader();

  const beerFeedRoot = createEl('div');
  const beerFormRoot = createEl('div');

  await initBeerFeed(beerFeedRoot);
  initBeerForm(beerFormRoot);

  root.append(beerFormRoot, beerFeedRoot);
}
