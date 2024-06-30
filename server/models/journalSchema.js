const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const pointsJournalSchema = new Schema({
    user:[{type:Schema.Types.ObjectId, ref: 'User'}],
    date: {
         type:Date
    },
    dailyPointsAllowed: {
        type: Number
    },
    day: {
        type: String
    },
    dailyTotal: {
        type: Number
    }

});
const Journal = mongoose.model("Journal", pointsJournalSchema);
module.exports = Journal; 