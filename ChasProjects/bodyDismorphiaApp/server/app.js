const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db=require("./database/database")
const user = require('./routes/routes');
const app = express()
require('dotenv').config();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/', user);
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

module.exports=app