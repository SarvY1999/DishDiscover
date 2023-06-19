const jwt = require('jsonwebtoken');
const { unathenticated } = require('../error/userError');
const authenticate = (req, res, next) => {
    const reqHeaders = req.headers.authorization;

    if (!reqHeaders || !reqHeaders.startsWith('Bearer')) {
        throw new unathenticated();
    }

    const token = reqHeaders.split(' ')[1];

    try {
        const payload = jwt.verify(token, process.env.SECRET);
        req.user = payload;
        next()
    } catch (error) {
        throw new unathenticated();
    }
};

module.exports = authenticate;