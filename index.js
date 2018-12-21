const express = require('express');
const jsonServer = require('json-server');

const expressServer = express();
// const fs = require('fs');
// let rawdata = fs.readFileSync('db.json');

const middlewares = jsonServer.defaults();
const router = jsonServer.router('db.json');
const port = 3000;

// server.get('/', (req, res) => {
//   console.log(jsonServer);
//   res.send(jsonServer);
// });

expressServer.use(middlewares)
expressServer.use(router)
expressServer.listen(port, () => {
  console.log('JSON Server is running', '\nhttp://localhost:' + port);
});
