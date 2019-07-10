const express = require('express');


const router = express.Router();

router.get('/home', (req,res) => {
    // console.log(  "[router.stack] :",router.stack ); 
});


module.exports = router;



// this is how the routes should be.
// Logic just directing to the controllers.
/*
var router = require('express').Router();

// split up route handling
router.use('/products', require('./products'));
router.use('/categories', require('./categories'));
// etc.

module.exports = router;
*/