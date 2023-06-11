const express = require('express');
require('dotenv').config();
const app = express();
const recipeRouter = require('./routes/recipe');

const port = process.env.PORT || 3000

app.use('/api/v1/recipe', recipeRouter);

app.listen(port, () => {
    console.log(`Server is listening at ${port}`);
})