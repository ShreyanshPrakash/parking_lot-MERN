const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const envConfig = fs.readFileSync(
    path.join(__dirname, 'config.json')
).toString();

const cmsRoutes = require('./routes/cms.routes.js');
const loggerMiddlewarteApp = require('./middlewares/logger.middleware');
const errorMiddlewareApp = require('./middlewares/error.middleware.js');

/* Setting MiddleWares */
app.use( loggerMiddlewarteApp );
app.use( errorMiddlewareApp );
/* MiddleWares end here */

/*  Api endpoints start here  */
app.use( '/restservices/cms/v1/', cmsRoutes );
// app.use( '/restservices/cms/v1/', cmsRoutes );
// app.use( '/restservices/cms/v1/', cmsRoutes );
// app.use( '/restservices/cms/v1/', cmsRoutes );
// app.use( '/restservices/cms/v1/', cmsRoutes );
/*  Api endpoints ends here  */
app.get('/restservices/', (req,res) => {
    // console.log( req );
    console.log( req.originalUrl );
    res.end('restservices');
})
app.get('*', (req,res) => {
    // console.log( req );
    console.log( req.originalUrl );
    res.end('404');
})

/* Port listening */
app.listen( 3400, () => {
    console.log("Listening at 3400")
});

// console.log( app._router.stack );

process.on('uncaughtException', function (err) {
    console.error(err);
});
