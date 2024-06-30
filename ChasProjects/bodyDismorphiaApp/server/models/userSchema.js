const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  name: {
    type: String
  },
  password: {
    type: String
  }

});
const User = mongoose.model("user", UserSchema);


module.exports = User;