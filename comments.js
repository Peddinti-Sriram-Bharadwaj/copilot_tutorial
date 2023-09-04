// Create web server
// 1. create web server
// 2. create router
// 3. create routes
// 4. create controllers
// 5. create views

// 1. create web server
const express = require('express');
const app = express();

// 2. create router
const comments = require('./routes/comments');

// 3. create routes
app.use('/comments', comments);

// 4. create controllers
// 5. create views

// 1. create web server
app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});