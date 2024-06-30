const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const JournalSchema = new Schema({
    user:[{type:Schema.Types.ObjectId, ref: 'user'}],
    date: {
         type:Date
    },
   weight: {
        type: Number
    },
    daysExercised: {
        type: Number
    },
    measurements: {
     chest:{
        type: Number
     },
     waist:{
        type: Number
     },
     biceps:{
        type: Number
     },
     hips:{
        type: Number
     },
     thighs:{
        type: Number
     }
    }

});
const Journal = mongoose.model("journal", JournalSchema);
module.exports = Journal; 