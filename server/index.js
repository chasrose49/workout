const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db=require('./database/database')
const user = require('./routes/user');

const cookieParser=require('cookie-parser')
const PORT = process.env.PORT || 3001;
const app = express()
require('dotenv').config();
app.use(cors())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())



app.use('/user', user);

db.on('error', console.error.bind(console, 'MongoDB connection error:'))



app.listen(PORT, () => console.log(`Server running on port ${PORT}`))