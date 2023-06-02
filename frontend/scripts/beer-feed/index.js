import { get } from '../utils/request.js';
import { createEl } from '../utils/createEl.js'

let currentTargetEl;

// --- MODEL ---
async function getBeerFeed() {
  const blogPosts = await get('/api/beers');
  return blogPosts;
}

// --- VIEW (DOM Manipulation) ----
function renderBeerFeed(blogPosts, targetEl) {
  targetEl.innerHTML = '';
  const blog = createEl('div', { id: 'blog' });

  const elements = blogPosts.map(createFeedItem);
  blog.append(...elements);
  targetEl.append(blog);
}

function createFeedItem(blogPost) {
  const div = createEl('div', { className: 'blog-post' });
  const titleEl = createEl('h1', { innerText: blogPost.title });
  const textEl = createEl('p', { innerText: blogPost.text });
  
  div.append(titleEl, textEl);
  
  if (blogPost.image) {
    const imageEl = createEl('img', { src: blogPost.image });
    div.append(imageEl);
  }

  return div;
}

// --- CONTROLLER ---
export async function initBeerFeed(targetEl) {
  currentTargetEl = targetEl;
  const feed = await getBeerFeed();
  renderBeerFeed(feed, targetEl);
}

export async function reloadBeerFeed() {
  if (currentTargetEl) {
    await initBeerFeed(currentTargetEl);
  }
}
