const register = (req, res) => {
    res.send('Register User');
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