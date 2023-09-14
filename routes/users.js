const express = require('express');
const router = express.Router();
// import controller
const {getUser,newUser} = require('../controllers/usersController');
router.route('/users').get(getUser);
router.route('/users/new').post(newUser);
module.exports = router;