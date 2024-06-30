const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let WorkOutSchema = new Schema({
    user:[{type:Schema.Types.ObjectId, ref: 'User'}],

    warmup: {
        warmupname: String,
        warmupreps: Number,
        warmupsets: Number
    },
    upperbody: {
        ubname: String,
        ubreps: Number,
        ubsets: Number
    },
    lowerbody: {
        lbname: String,
        lbreps: Number,
        lbsets: Number
    },
    core: {
        cname: String,
        creps: Number,
        csets: Number
    },
    day: {
        type: String,
    }
});
let Workout = mongoose.model("Workout", WorkOutSchema);
module.exports = Workout;
