const User = require('../models/userSchema');
const Journal = require('../models/journalSchema');
const Workout = require('../models/workoutSchema');
module.exports = {
    create(req, res) {
      let user = new User()
        user.user = req.body.user
        user.email = req.body.email
        user.password = req.body.password
        user.save()
            .then(() => res.json("User Created"))
            .catch(err => console.log(err))
    },
    read(req, res) {
        User.findOne({ email: req.params.email })
            .then(results => res.json(results))
            .catch(err => console.log(err))
    },
    readUserMenu(req, res) {
        User.findOne({ _id: req.params.id })
            .then(results => res.json(results))
            .catch(err => console.log(err))
    },
    readWorkouts(req, res) {
        new Promise((resolve, reject) => {
            resolve(Workout.find({ user: req.params.id }).populate('user').exec());
        }).then((data) => {
            if (data === null) {
                res.json("no workouts")
            } else {
                for (let i = 0; i < data.length; i++) {
                    let userInfo = data[i].user
                    for (let j = 0; j < userInfo.length; j++) {
                    }
                } res.json(data)
            }
        }).catch(err => console.log(err))
    },

    addWorkout(req, res) {
        User.find({ user: req.params.id }).populate('workouts').exec().then(() => {
            let workout = new Workout()
            workout.day = req.body.day
            workout.warmup.warmupname = req.body.warmupname
            workout.warmup.warmupreps = req.body.warmupreps
            workout.warmup.warmupsets = req.body.warmupsets
            workout.upperbody.ubname = req.body.ubname
            workout.upperbody.ubreps = req.body.ubreps
            workout.upperbody.ubsets = req.body.ubsets
            workout.lowerbody.lbname = req.body.lbname
            workout.lowerbody.lbreps = req.body.lbreps
            workout.lowerbody.lbsets = req.body.lbsets
            workout.core.cname = req.body.cname
            workout.core.creps = req.body.creps
            workout.core.csets = req.body.csets
            workout.user = req.params.id
            workout.save().then(() => res.json("Exercise Added"))
        }).catch(err => console.log(err))
    },
    findById(req, res) {
        Workout.findById(req.params.id).then(results => res.json(results)).catch(err => console.log(err))
    },
    addJournal(req, res) {
        User.findOne({ user: req.params.id }).populate('journals').exec().then(() => {
          
            let journal = new Journal()
            journal.user = req.params.id
            journal.dailyPointsAllowed = req.body.dailyPointsAllowed
            journal.date=req.body.date
            journal.save().then(() =>{
          
                 res.json("Journal Added")})
         })
    },
    readJournal(req, res) {
        new Promise((resolve, reject) => {
            resolve(Journal.find({ user: req.params.id }).populate('user').exec());
        }).then((data) => {
 

            if (data === null) {
               
                res.json("no Journal")
            } else {
                let userInfo
                for (let i = 0; i < data.length; i++) {
                   userInfo = data[i].user
                    for (let j = 0; j < userInfo.length; j++) {
                    }

                }
                 res.json(data)
            }
        }).catch(err => console.log(err))
    },
    delete(req, res) {
        Workout.findByIdAndDelete(req.params.id)
            .then(() => res.json("Workout Deleted"))
            .catch(err => console.log(err))
    },
    update(req, res) {
        let day = req.body.day,
            warmupname = req.body.warmupname,
            warmupsets = req.body.warmupsets,
            warmupreps = req.body.warmupreps,
            ubname = req.body.ubname,
            ubreps = req.body.ubreps,
            ubsets = req.body.ubsets,
            lbname = req.body.lbname,
            lbreps = req.body.lbreps,
            lbsets = req.body.lbsets,
            cname = req.body.cname,
            creps = req.body.creps,
            csets = req.body.csets,
            user = req.body.user
        Workout.updateOne({ _id: req.params.id }, { $set: { day: day, 'warmup.warmupname': warmupname, "warmup.warmupsets": warmupsets, 'warmup.warmupreps': warmupreps, 'upperbody.ubname': ubname, 'upperbody.ubreps': ubreps, 'upperbody.ubsets': ubsets, 'lowerbody.lbname': lbname, 'lowerbody.lbsets': lbsets, 'lowerbody.lbreps': lbreps, 'core.cname': cname, 'core.creps': creps, 'core.csets': csets, user: user } }, { upsert: true }).populate('user').exec().then((data) => {
            res.json(data)
        }).catch(err => console.log(err))
    },
    updateJournal(req,res){
      
      Journal.updateOne({ _id: req.params.id }, { $set: { day: req.body.day,date:req.body.date,dailyPointsAllowed:req.body.dailyPointsAllowed,dailyTotal:req.body.dailyTotal, user: req.body.user } }, { upsert: true }).then(() => {
            res.json("updated journal")
        }).then(()=>{
            Journal.find({ user: req.body.user }).populate('user').exec()}).then((data)=>{
                res.json(data)
            }).catch(err => console.log(err))
    
    }
}//module.exports












