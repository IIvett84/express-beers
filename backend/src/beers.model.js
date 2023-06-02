const fs = require("fs/promises");
const path = require("path");

const BLOG_FS_PATH = path.join(__dirname, "data", "blog.json");

function getMaxId(blog) {
  if (!blog.length) {
    return 1;
  }

  // maximum search alg.
  const el = blog.reduce(function(max, cur) {
    if (max.id < cur.id) {
      return cur;
    }
    return max;
  });

  return el.id;
}

function writeBlogToFs(blog) {
  return fs.writeFile(BLOG_FS_PATH, JSON.stringify(blog, null, 2));
}

async function readBeersBlog() {
  const current = await fs.readFile(BLOG_FS_PATH, { encoding: "utf-8" });
  const blog = JSON.parse(current);
  return blog;
}

async function addBeerBlogPost(blogPost) {
  const blog = await readBeersBlog();

  blogPost.id = getMaxId(blog) + 1;
  blogPost.createdAt = new Date().toISOString();

  // plain old javascript
  blog.push(blogPost);
  
  await writeBlogToFs(blog);
  return blogPost;
}

async function updateBeerBlogPost(blogPost) {
  const blog = await readBeersBlog();
}

async function removeBeerBlogPost(blogPost) {
  const blog = await readBeersBlog();
}

module.exports = {
  readBeersBlog,
  addBeerBlogPost,
  updateBeerBlogPost,
  removeBeerBlogPost,
};
