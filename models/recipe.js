const mongoose = require('mongoose');

const recipe = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    descriprions: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Recipe', recipe);
