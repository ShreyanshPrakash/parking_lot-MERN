const express = require('express');
const router = express.Router();

const { getCmsDocument } = require('../controllers/cms.controller');

router.get('/:document', async (req,res) => {
    // console.log( req.url );
    // console.log( req.params );
    const document = await getCmsDocument( req.params.document );
    res.status( 200 ).json( document );
});


router.all('*', (req,res) => {
    res.status(404).json({
        "errorMessage" : "We did not find what you were looking for",
        "status": "[ERROR] 404"
    });
})

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