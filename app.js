// import express
const express = require('express');
const app = express();

// setting up config env
const dotenv = require('dotenv');
dotenv.config({path : './config/config.env'});
// connect with database
const connectDatabase = require('./config/database');
connectDatabase();
// set up body parser
app.use(express.json());
// import all routers
const user = require('./routes/users');
app.use('/api/v1', user);
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server is start with port ${PORT} env ${process.env.NODE_ENV}`)
});