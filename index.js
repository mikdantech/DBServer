// importing
const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

// instnce from Express.js
const expressServer = express();

// local variables
const port = 3000;
const API_PATH = '/api/v1/';
const API_ROOT = `http://localhost:${port}`;

// fixed settings
const middlewares = jsonServer.defaults();
const apiEndpoints = jsonServer.router(path.join(__dirname, 'db.json'));

// routing with Express.js
expressServer.get('/', (req, res) => {
  res.send('Service Not Found');
});
expressServer.use(API_PATH, middlewares);
expressServer.use(API_PATH, apiEndpoints);
expressServer.listen(port, error => {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s. Open up %s in your browser.', port, API_ROOT);
  }
});
