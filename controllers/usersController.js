const User = require('../models/usersModel')

// get user /api/v1/user
exports.getUser = (req,res,next) => {
    res.status(200).json({
        success: true,
        message: 'get user info'
    })
}
// create a new user => /api/v1/user/new
exports.newUser = async  (req, res, next) => {
    console.log(req.body);
    const user = await User.create(req.body);
    res.status(200).json({
        success: true,
        message: 'user created',
        data: user
    })
}