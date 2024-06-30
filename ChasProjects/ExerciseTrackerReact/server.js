const app = require("./app")
const PORT = process.env.PORT || 3003
 app.listen(PORT, err=>{
     console.log(`running on port ${PORT}`)
 })