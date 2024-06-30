///Boiler Plate
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const path = require('path');
const handlebars = require('express-handlebars');
//helpers//
const hbs = handlebars.create({
  layoutsDir: __dirname + "/views/layouts",
  extname: "hbs",
  defaultLayout: "index",
  helpers: {}//helper
});
//handlebar engine//
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');//sets handlebar engine
app.use(bodyParser.json());//parses body 
app.use(bodyParser.urlencoded({ extended: true }));
//public use
app.use(express.static('public'));

module.exports = app