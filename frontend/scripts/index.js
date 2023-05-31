// entry point

// BASE_URL: http://localhost:8080/scripts/

// HTTP: http://localhost:8080/scripts/view.js
import { createBeerForm, createHeader } from './view.js';

function main() {
  const root = document.querySelector('#root');
  const form = createBeerForm();
  const head = createHeader();

  root.append(head, form);
}

window.onload = () => main();
