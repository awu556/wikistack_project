const express = require('express');
const wikiRouter = express.Router();

wikiRouter.get('/', async (req, res) => {
  await res.send('dog');
});
