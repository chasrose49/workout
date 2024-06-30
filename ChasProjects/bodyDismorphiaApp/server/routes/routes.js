const User_Controller = require('../controllers/index')
const router = require('express').Router()
//get

router.route('/user/:id').get(User_Controller.showOne)
router.route('/singleUser/:id').get(User_Controller.showUserInfo)

// //post
router.route('/create_user_account').post(User_Controller.createUser);
router.route('/create_journal_entry/:id').post(User_Controller.createJournalEntry);

module.exports = router