// importing
const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

// local variables
const port = 3000;
const API_ROOT = `http://localhost:${port}`;

// fixed settings
const middlewares = jsonServer.defaults();
const apiEndpoints = jsonServer.router(path.join(__dirname, 'db.json'));

// routing with Express.js
const expressServer = express();
expressServer.use(middlewares);
expressServer.use(apiEndpoints);
expressServer.listen(port, error => {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s. Open up %s in your browser.', port, API_ROOT);
  }
});
