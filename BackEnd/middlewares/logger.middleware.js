// const express = require('express');

// const loggerMiddlewareApp = express();

const loggerMiddlewareApp = (req,res,next) => {
    console.log("*******************Logger Middleware starts*******************");
    console.log( "[req.url] :", req.url );
    console.log( "[req.originalUrl] :", req.originalUrl );
    console.log( "[req.headers.host] :", req.headers.host );
    // console.log(  "[router.stack] :",loggerApp.stack ); 
    console.log("*******************Logger Middleware ends*******************");
    // throw new Error('Testing');
    next(); // in case of error, next wont be called hence the next middleware wont execute
};

module.exports = loggerMiddlewareApp;