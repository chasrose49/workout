let Rate = require('../models/rate.model')
const router = require('express').Router()



router.route('/').get(function (req, res) {
    Rate.find({})
        .then(data => res.json(data))
        .catch(err => console.log(err))
})

router.route('/add').post(function (req, res) {
    const username = req.body.username
    const starsSelected = req.body.starsSelected
   
    const newRate = new Rate({ username:username, starsSelected:starsSelected })
    newRate.save()
        .then(() => res.json("Stars added!"))
        .catch(err => console.log(err))
})


module.exports = router;


