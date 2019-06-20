const express = require('express');
const wikiRouter = express.Router();
const landingPage = require('../views/layout');
const { addPage } = require('../views');

wikiRouter.get('/', (req, res, next) => {
  res.send(landingPage(''));
});

wikiRouter.post('/', (req, res, next) => {
  res.send();
});

wikiRouter.get('/add', (req, res, next) => {
  res.send(addPage());
});

module.exports = wikiRouter;
