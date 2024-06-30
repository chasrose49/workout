const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    user: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },

 
});
const User = mongoose.model("User", UserSchema);


module.exports = User;
   

       
    


