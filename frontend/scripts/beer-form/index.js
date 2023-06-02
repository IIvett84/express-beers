import { upload } from '../utils/request.js';
import { createEl } from '../utils/createEl.js'
import { reloadBeerFeed } from '../beer-feed/index.js';

// ---- MODEL ----
async function uploadBeerBlogEntry(data) {
  const response = await upload('/api/beers', data);
  return response;
}

// ---- VIEW ----
function renderBeerForm(targetEl) {
  targetEl.innerHTML = '';

  const form = createEl('form', { className: 'beer-form' });

  const titleEl = createEl('input', { name: 'title' });
  const textEl = createEl('textarea', { name: 'text' });
  const uploadEl = createEl('input', { type: 'file', name: 'image' });
  const imageEl = createEl('input', { type: 'hidden', name: 'image', id: 'image' });
  const submit = createEl('button', { type: 'submit', innerText: 'Send this post' });

  form.append(titleEl, textEl, uploadEl, imageEl, submit);

  // init event
  form.addEventListener('submit', onBeerFormSubmit);

  targetEl.append(form);
}

// ---- CONTROLLER ----
async function onBeerFormSubmit(e) {
  e.preventDefault();
  const form = e.target;

  const formData = new FormData(form);
  await uploadBeerBlogEntry(formData);
  await reloadBeerFeed();

  form.reset();
}

export function initBeerForm(targetEl) {
  renderBeerForm(targetEl);
}
