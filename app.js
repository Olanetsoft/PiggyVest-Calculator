const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');

//requiring app route
const applicationRoute = require('./routes/route');

const app = express();



//Set headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


app.use(cookieParser());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));



// Registering and setting  the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));





app.use(applicationRoute);

module.exports = app;