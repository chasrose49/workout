let User_Controller= require('../controllers/user.controller')
const router = require('express').Router()

//get

router.route('/user_workouts/:id').get(User_Controller.readWorkouts)
router.route('/journal/:id').get(User_Controller.readJournal)
router.route('/login/:email').get(User_Controller.read);
router.route('/update_workouts/:id').get(User_Controller.findById)
router.route('/user_menu/:id').get(User_Controller.readUserMenu)


//post
router.route('/create_account').post(User_Controller.create);
router.route('/update_journal/:id').post(User_Controller.updateJournal)
router.route('/create_workouts/:id').post(User_Controller.addWorkout)
router.route('/create_journal/:id').post(User_Controller.addJournal)
router.route('/update_workouts/:id').post(User_Controller.update)
router.route('/delete/:id').delete(User_Controller.delete)

module.exports=router;        