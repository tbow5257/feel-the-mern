// server.js
const express = require('express');
const path = require("path");
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const PORT = 8080;

app.use(cors());
// Our DB Configuration
require('./src/database');

// Routes
const postRouter = require('./src/routes/post.router');
const exerciseRouter = require('./src/routes/exercise.router');
const userRouter = require('./src/routes/user.router');

const CLIENT_BUILD_PATH = path.join(__dirname, "../client/build");

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

// Static files
app.use(express.static(CLIENT_BUILD_PATH));

app.use('/posts', postRouter);
app.use('/exercise', exerciseRouter);
app.use('/user', userRouter);

// Server React Client
app.get("/", function(req, res) {
  res.sendFile(path.join(CLIENT_BUILD_PATH , "index.html"));
});

app.listen(PORT, function () {
    console.log(`Server Listening on ${PORT}`);
});
