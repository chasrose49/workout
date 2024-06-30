const User = require('../models/userSchema')
const Journal = require('../models/journalSchema')


exports.createUser = (req, res) => {
  User.aggregate([
    { $match: { name: req.body.name, password: req.body.password } }
  ]).then((data) => {
    if (data.length === 0) {
      let user = new User()
      user.name = req.body.name
      user.password = req.body.password
      user.save().then(() => {
        User.find({ name: user.name, password: user.password }).then((data) => {
          res.json(data)
        })
      })
    } else {
      res.json(data)
    }
  }).catch(err => console.log(err))
}

exports.createJournalEntry = (req, res) => {
  let id = req.params.id
  User.find({ user: id }).populate('journals').exec()
    .then(() => {
      let newJournalEntry = new Journal()
      newJournalEntry.date = req.body.date
      newJournalEntry.weight = req.body.weight
      newJournalEntry.daysExercised = req.body.daysExercised
      newJournalEntry.measurements.chest = req.body.chest
      newJournalEntry.measurements.waist = req.body.waist
      newJournalEntry.measurements.biceps = req.body.biceps
      newJournalEntry.measurements.hips = req.body.hips
      newJournalEntry.measurements.thighs = req.body.thighs
      newJournalEntry.user = id
      newJournalEntry.save().then(() => res.json())
    }).catch(err => console.log(err))
},



  exports.showUserInfo = (req, res) => {
    let id = req.params.id
    User.findById({ _id: id }).then((data) => {
      res.json(data)
    }).catch(console.error)
  }

exports.showOne = (req, res) => {
  let id = req.params.id
  new Promise((resolve, reject) => {
    resolve(Journal.find({ user: id }).populate('user').exec());
  }).then((data) => {
    if (data === null) {
      res.json("no Journal")
    } else {
      for (let i = 0; i < data.length; i++) {
        let userInfo = data[i].user
        for (let j = 0; j < userInfo.length; j++) {
        }
      } res.json(data)
    }
  }).catch(err => console.log(err))
}

