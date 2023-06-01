// entry point

// BASE_URL: http://localhost:8080/scripts/

// HTTP: http://localhost:8080/scripts/view.js
import {
  createBeerForm,
  createHeader,
  createBeerFileUploadForm,
} from "./view.js";

import {
  onBeerFormSubmit,
  onBeerFileUpload,
  initBlogPostsScreen
} from './controller/beers.controller.js'

function main() {
  const root = document.querySelector("#root");
  const beerForm = createBeerForm();
  const uploadForm = createBeerFileUploadForm();
  const head = createHeader();

  root.append(head, uploadForm, beerForm);
  
  initBlogPostsScreen();

  beerForm.addEventListener('submit', onBeerFormSubmit);
  uploadForm.addEventListener('submit', onBeerFileUpload);
}

window.onload = () => main();
