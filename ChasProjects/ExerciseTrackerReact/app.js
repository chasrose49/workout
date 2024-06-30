///Boiler Plate
const express = require("express");
const app= express()
const path = require('path');
const database = require('./database/database');
const exercisesRouter=require("./routes/exercises")
const usersRouter=require("./routes/users")
const starRouter=require('./routes/stars')
const React= require('react')
const cors=require('cors')
require('dotenv').config()
app.use(cors())
app.use(express.json());//parses body 
app.use(express.static('public'));
app.use("/rate", starRouter)
app.use("/exercises",exercisesRouter);
app.use("/users",usersRouter);
module.exports = app


  





