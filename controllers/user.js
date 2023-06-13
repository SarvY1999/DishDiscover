const { StatusCodes } = require('http-status-codes');
const User = require('../models/user');
const userError = require('../error/userError');

const register = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        throw new userError();
    };

    const user = await User.create({ ...req.body });

    res.status(StatusCodes.CREATED).json(user);
};

const login = (req, res) => {
    res.send('login user');
};

const logout = (req, res) => {
    res.send('logout user');
}

module.exports = {
    register,
    login,
    logout,
}
