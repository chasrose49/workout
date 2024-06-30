const app = require("./app")
const PORT = process.env.PORT || 8090
app.listen(PORT, err => {
    console.log(`running on port ${PORT}`)
})
