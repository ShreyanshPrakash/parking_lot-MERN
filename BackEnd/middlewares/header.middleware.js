const express = require('express');

const loggerApp = express();

loggerApp.all('*', (req,res,next) => {
    console.log("*******************Header Middleware starts*******************");
    res.setHeader('Cache-Control', 'no-cache');
    console.log("*******************Header Middleware ends*******************");
    next();
});

// add function here that will be called from the controllers/routes and will set
// the headers based on logic.

module.exports = loggerApp;