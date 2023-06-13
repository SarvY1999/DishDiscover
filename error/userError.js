const { StatusCodes } = require('http-status-codes');


class missingDetails extends Error {
    constructor(statuscode) {
        super(message)
        this.message = "Please provide all the details";
        this.statuscode = StatusCodes.BAD_REQUEST;
    }
}

module.exports = missingDetails;