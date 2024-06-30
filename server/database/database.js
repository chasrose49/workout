const mongoose = require('mongoose'),
      url = 'mongodb://localhost/graduate_project';
mongoose.Promise = global.Promise;
mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,

}, function (err) {  
    if (err) throw err;
});
const db = mongoose.connection

module.exports=db