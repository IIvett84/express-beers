// Entry Point
const fileupload = require('express-fileupload');
const express = require('express');
const path = require('path');

const beersModel = require('./src/beers.model');

// PATTERN ALERT
// __dirname --> /home/devmetal91/work/short-fe/beers-app/backend
// 1. /home/devmetal91/work/short-fe/beers-app/backend/../frontend
// 2. /home/devmetal91/work/short-fe/beers-app/frontend/
const FE_FS_PATH = path.join(__dirname, '..', 'frontend');
const UPLOAD_FS_PATH = path.join(FE_FS_PATH, 'assets', 'upload');

// http server app
const app = express();

// convert raw json request body to an object into the req.body
// Watches: Content-Type: application/json
app.use(express.json());

// convert urlencoded request body to an object into the req.body
// watched: Content-Type: x-www-form/urlencoded
// watches: Content-Type: multipart/form-data
app.use(express.urlencoded({ extended: true }));

// This will make the file uploading feature works
// put the files into the req object req.files
// Watches: Content-Type: multipart/form-data
app.use(fileupload());

// Serve static files under FE_FS_PATH directory
app.use(express.static(FE_FS_PATH));

// event -> HTTP POST /api/beers
app.post('/api/beers', async function(req, res) {
  const beerBlogPost = req.body;
  // <input type="file" name="image" />
  const image = req?.files?.image; // optional chaining

  if (image) {
    const name = `${Date.now()}-${image.name}`
    const imagePath = path.join(UPLOAD_FS_PATH, name);
    const imageUri = `/assets/upload/${name}`;
    await image.mv(imagePath);
    beerBlogPost.image = imageUri;
  }

  const newBeerBlogPost = await beersModel.addBeerBlogPost(beerBlogPost);
  
  // .json ---> convert data json string and send those to client
  // .json ---> 2. close the response
  res.json(newBeerBlogPost);
});

app.get('/api/beers', async function(req, res) {
  const blogPosts = await beersModel.readBeersBlog();
  res.json(blogPosts);
});

app.listen(8080, function(){
  console.log('App started on :8080');
});
