// importing
const express = require('express');
const jsonServer = require('json-server');
const path = require('path');


// local variables
const port = 3000;
const dbFileName = 'db.json';

// fixed settings
const middlewares = jsonServer.defaults();
const router = jsonServer.router(path.join(__dirname, 'db.json'));

// routing with Express.js
const expressServer = express();
expressServer.use(middlewares)
expressServer.use(router)
expressServer.listen(port, () => {
  console.log('JSON Server is running', '\n\nhttp://localhost:' + port);
});
