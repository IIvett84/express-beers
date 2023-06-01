import { addBeerBlogPost, getBlogPosts, uploadBeerImageForm } from "../model/beers.model.js";
import { createBlogPostBox, renderBlogPosts } from "../view.js";

export async function initBlogPostsScreen() {
  const blogPosts = await getBlogPosts();
  renderBlogPosts(blogPosts);
}

export async function onBeerFormSubmit(e) {
  e.preventDefault();
  const form = e.target;

  const blogPostForm = new FormData(form);

  const blogPost = {
    title: blogPostForm.get("title"),
    text: blogPostForm.get("text"),
    image: blogPostForm.get('image')
  };

  const blogPostAdded = await addBeerBlogPost(blogPost);
  
  const blogPostEl = createBlogPostBox(blogPostAdded);
  const blog = document.querySelector('#blog');
  blog.prepend(blogPostEl);

  form.reset();
}

export async function onBeerFileUpload(e) {
  e.preventDefault();
  const form = e.target;

  const uploadFormData = new FormData(form);
  const fileUploaded = await uploadBeerImageForm(uploadFormData);

  document.querySelector('#image').value = fileUploaded.imageUri;

  form.reset();
}
