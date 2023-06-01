// BASE_URL: http://localhost:8080/scripts/

// HTTP: http://localhost:8080/scripts/utils/createEl.js
import { createEl } from "./utils/createEl.js";

export function createHeader() {
  const nav = createEl('nav');
  const head = createEl('h1', { innerText: 'Beer Blog App' });

  nav.append(head);
  return nav;
}

// This function has no side effects (pure function)
// f(x) -> x * 2
// f() -> el
export function createBeerForm() {
  const form = createEl('form', { className: 'beer-form' });

  const titleEl = createEl('input', { name: 'title' });
  const textEl = createEl('textarea', { name: 'text' });
  const imageEl = createEl('input', { type: 'hidden', name: 'image', id: 'image' });
  const submit = createEl('button', { type: 'submit', innerText: 'Send this post' });

  form.append(titleEl, textEl, imageEl, submit);

  return form;
}

export function createBeerFileUploadForm() {
  const form = createEl('form', { className: 'beer-form' });
  const uploadEl = createEl('input', { type: 'file', name: 'image' });
  const submitEl = createEl('button', { type: 'submit', innerText: 'upload file for post' })

  form.append(uploadEl, submitEl);

  return form;
}

export function renderBlogPostAddedMessage() {
  const div = createEl('div', { className: 'flash-message', innerText: 'Blog Post Added' });
  document.querySelector('#root').prepend(div);
}

export function renderBlogPosts(blogPosts) {
  const root = document.querySelector('#root');
  const blog = createEl('div', { id: 'blog' });

  const elements = blogPosts.map(createBlogPostBox);
  blog.append(...elements);
  root.append(blog);
}

export function createBlogPostBox(blogPost) {
  const div = createEl('div', { className: 'blog-post' });
  const titleEl = createEl('h1', { innerText: blogPost.title });
  const textEl = createEl('p', { innerText: blogPost.text });
  const imageEl = createEl('img', { src: blogPost.image });

  div.append(titleEl, textEl);
  
  if (blogPost.image) {
    div.append(imageEl);
  }

  return div;
}
