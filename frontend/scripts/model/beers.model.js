import { post, upload, get } from "../utils/request.js";

let blogPosts;

export async function getBlogPosts() {
  blogPosts = await get('/api/beers');
  return blogPosts;
}

export async function addBeerBlogPost(blogPost) {
  const response = await post('/api/beers', blogPost);
  return response;
}

export async function uploadBeerImageForm(formData) {
  const response = await upload('/api/images', formData);
  return response;
}
