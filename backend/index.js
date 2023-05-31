// Entry Point
const express = require('express');
const path = require('path');

const beersModel = require('./src/beers.model');

// PATTERN ALERT
// __dirname --> /home/devmetal91/work/short-fe/beers-app/backend
// 1. /home/devmetal91/work/short-fe/beers-app/backend/../frontend
// 2. /home/devmetal91/work/short-fe/beers-app/frontend/
const FE_FS_PATH = path.join(__dirname, '..', 'frontend');

// http server app
const app = express();

// convert raw json request body to an object into the req.body
// Watches: Content-Type: application/json
app.use(express.json());

// Serve static files under FE_FS_PATH directory
app.use(express.static(FE_FS_PATH));

// event -> HTTP POST /api/beers
app.post('/api/beers', async function(req, res) {
  const body = req.body;
  const newBeerBlogPost = await beersModel.addBeerBlogPost(body);
  
  // .json ---> convert data json string and send those to client
  // .json ---> 2. close the response
  res.json(newBeerBlogPost);
});

app.listen(8080, function(){
  console.log('App started on :8080');
});
