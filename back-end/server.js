const express = require('express');

const app = express();


app.get('*' , (req,res) => {
    res.end('Hello world');
});


app.listen( 3300, () => {
    console.log("Listening at 3300")
});
