let Exercise = require('../models/exercise.model')
const router = require('express').Router()



router.route('/list').get(function(req,res){
Exercise.find()
.then(exercises => res.json(exercises))
.catch(err => console.log(err))
})
router.route('/list/:id').get(function(req,res){
    Exercise.findById(req.params.id)
    .then(exercise=>res.json(exercise))
    .catch(err=>console.log(err))

})
router.route('/list/:id').delete(function(req,res){
   Exercise.findByIdAndDelete(req.params.id)
    .then(()=>res.json("Exercise Deleted"))
    .catch(err=>console.log(err))
})

router.route('/update/:id').post(function(req,res){
    Exercise.findById(req.params.id)
    .then(exercise => {
        exercise.username = req.body.username;
        exercise.description =req.body.description;
        exercise.duration = Number(req.body.duration);
        exercise.date = Date.parse(req.body.date);
        
         exercise.save()
      .then(()=>res.json("Exercise updated!"))
      .catch(err=>console.log(err)) 
   })
   .catch(err=>console.log(err))
})


router.route("/add").post(function(req,res){
    const username=req.body.username;
    const description=req.body.description;
    const duration = Number(req.body.duration);
    const date=Date.parse(req.body.date);

    const newExercises = new Exercise({
        username,
        description,
        duration,
        date,
    });

newExercises.save()
.then(()=>res.json("Exercise added!"))
.catch(err=>console.log(err))
})




module.exports= router;