// BASE_URL: http://localhost:8080/scripts/

// HTTP: http://localhost:8080/scripts/utils/createEl.js
import { createEl } from "./utils/createEl.js";

export function createHeader() {
  const nav = createEl('nav');
  const head = createEl('h1', { innerText: 'Beer Blog App' });

  nav.append(head);
  return nav;
}

export function createBeerForm() {
  const form = createEl('form');

  const body = createEl('textarea', { name: 'text' });
  const submit = createEl('button', { type: 'submit', innerText: 'Send this post' });

  form.append(body, submit);

  return form;
}
