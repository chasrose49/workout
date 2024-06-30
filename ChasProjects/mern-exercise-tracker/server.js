///Boiler Plate
const express = require("express");
const cors = require('cors')
require('dotenv').config()
const app= express()

const PORT = process.env.PORT || 8011
app.use(cors())

app.use(express.json())

app.listen(PORT, err=>{
    console.log(`running on port ${PORT}`)
})



