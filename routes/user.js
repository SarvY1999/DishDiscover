const express = require('express');
const userRouter = express.Router();
const {
    login,
    register,
    logout
} = require('../controllers/user')

userRouter.route('/login').post(login);
userRouter.route('/register').post(register);
userRouter.route('/logout').post(logout)

module.exports = userRouter