const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

/* express object init */
const app = express();

/* express 'view engine' and 'views' variables set */
app.set('view engine', 'ejs');
app.set('views', './app/view');

/* express.static setting middleware  */
app.use(express.static('./app/public'));

/* body-parser as parsing middleware */
app.use(bodyParser.urlencoded({ extended: true }));

/* express-validator as validator middleware */
app.use(expressValidator());

/* routes, models and controllers autoload into app */
consign()
  .include('app/routes')
  .then('app/model')
  .then('app/controller')
  .into(app);

module.exports = app;
