const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require("mongoose");
const db=require('./database/index.js')
const user = require('./routes/index.js');
const PORT = process.env.PORT || 3001;
const app = express()
require('dotenv').config();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())



app.use('/user', user);

db.on('error', console.error.bind(console, 'MongoDB connection error:'))



app.listen(PORT, () => console.log(`Server running on port ${PORT}`))