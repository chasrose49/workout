
let User = require('../models/user.model')
const router = require('express').Router()



 router.route("/").get(function (req, res) {
        User.find()
            .then(users => res.json(users))
            .catch(err => console.log(err))
    })

  router.route('/add').post(function (req, res) {
        const username = req.body.username
        const newUser = new User({ username })
        newUser.save()
            .then(() => res.json("User added!"))
            .catch(err => console.log(err))

    })





module.exports = router;


