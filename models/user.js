const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

userSchema.pre("save", async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.verifyPassword = async function (pass) {
    const verify = await bcrypt.compare(pass, this.password);
    return verify;
};

userSchema.methods.createJWT = function () {
    const token = jwt.sign({ userId: this._id, name: this.name }, process.env.SECRET, { expiresIn: process.env.TIME })
    return token;
};

module.exports = mongoose.model('User', userSchema);
