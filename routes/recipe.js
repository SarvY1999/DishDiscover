const express = require('express');
const recipeRouter = express.Router();
const {
    createRecipe,
    updateRecipe,
    getRecipe,
    getAllRecipe,
    deleteRecipe
} = require('../controllers/recipe')

recipeRouter.route('/').get(getAllRecipe);
recipeRouter.route('/createRecipe').post(createRecipe);
recipeRouter.route('/:id').get(getRecipe).patch(updateRecipe).delete(deleteRecipe);

module.exports = recipeRouter