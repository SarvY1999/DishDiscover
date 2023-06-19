const { StatusCodes } = require('http-status-codes');


class missingDetails extends Error {
    constructor(message) {
        super(message)
        this.message = "Please provide all the details";
        this.statuscode = StatusCodes.BAD_REQUEST;
    }
}


class loginError extends Error {
    constructor(message) {
        super(message)
        this.message = "Invalid Email and Password";
        this.statuscode = StatusCodes.BAD_REQUEST;
    }

}


class unathenticated extends Error {
    constructor(message) {
        super(message)
        this.message = "Invalid Authorization";
        this.statuscode = StatusCodes.FORBIDDEN;
    }

}

module.exports = { missingDetails, loginError, unathenticated };