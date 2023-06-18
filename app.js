const express = require('express');
require('dotenv').config();
require('express-async-errors');
const app = express();
const connectDb = require('./db/connectDb');
const recipeRouter = require('./routes/recipe');
const userRouter = require('./routes/user');

const port = process.env.PORT || 3000
app.use(express.json())
app.use('/api/v1/recipe', recipeRouter);
app.use('/api/v1/user', userRouter);

const start = async () => {
    try {
        await connectDb(process.env.DB_STRING);
        app.listen(port, () => {
            console.log(`Server is listening at ${port}`);
        })

    } catch (error) {
        console.log(error);
    }
}

start();