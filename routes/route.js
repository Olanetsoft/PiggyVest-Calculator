const express = require('express');


const applicationRoute = express.Router();


applicationRoute.get('/', (req, res, next) => {
    res.render('index', {
        title: 'Home',
        greet: 'Hi Everyone !'
    }
    );
});




module.exports = applicationRoute;
