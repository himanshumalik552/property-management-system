import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
//const express = require('express'); // 1 - with latest npm we can use import statments
// go in package.json and add type: module 
// Step 2 ------------>>>>>>>> Routing
import Routes from './server/route.js';

const app = express(); // we need to do this with every express application to initilise it with app and then we run 
// it as a fuction

// To handle HTTP POST requests in Express.js version 4 and above, you need to install the middleware module called body-parser.
// body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body.
app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// Step 2 ------------------->
app.use('/users', Routes);
const URL = "mongodb+srv://himanshumalik:storybook123@cluster0.mcmqw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || '8080'; //2 - get the port from env file, if not available pick 8080
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => { 
    // we need .then becausew
    //it returns a promise 
    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
}).catch((error) => {
    console.log('Error:', error.message)
})

// We can do something like this or we can set it directly in the url as well
// mongoose.set('useFindAndModify', false);
