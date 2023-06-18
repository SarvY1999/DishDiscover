const { StatusCodes } = require('http-status-codes');
const User = require('../models/user');
const { missingDetails, loginError } = require('../error/userError');

const register = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        throw new missingDetails();
    };

    const user = await User.create({ ...req.body });

    res.status(StatusCodes.CREATED).json(user);
};

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new loginError();
    }

    const user = await User.findOne({ email });

    const isCorrectPassword = await user.verifyPassword(password);

    if (!isCorrectPassword) {
        throw new loginError();
    }

    const token = await user.createJWT();
    res.status(StatusCodes.CREATED).json({ user, token });
};

const logout = (req, res) => {
    res.send('logout user');
}

module.exports = {
    register,
    login,
    logout,
}
