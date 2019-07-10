// const express = require('express');

// const errorMiddlewareApp = express();

const errorMiddlewareApp =  (err,req,res,next) => {
    console.log("*******************Error Middleware starts*******************");
    console.log( "[req.originalUrl] :", req.originalUrl );
    console.log( "[err] :", err );
    console.log("*******************Error Middleware ends*******************");
    next();
};

module.exports = errorMiddlewareApp;