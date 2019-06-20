const express = require('express');
const morgan = require('morgan');
const { db } = require('./models');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/users');
const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.use('/wiki', wikiRouter);

app.get('/', (req, res, next) => {
  res.redirect('/wiki');
});

const init = async () => {
  await db.sync({ force: true });

  app.listen(1337, () => {
    console.log('Host created');
  });
};

init();
