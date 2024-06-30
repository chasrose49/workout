const mongoose = require('mongoose'),
       url = 'mongodb://localhost/seedProjectThree'
mongoose.Promise = global.Promise;0.
mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex:true
}, function (err) {
    if (err) throw err
})
mongoose.connection.on('open', function() {
    console.log(`MongDB is connected`)
})