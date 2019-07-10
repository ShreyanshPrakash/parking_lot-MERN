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

app.use( express.static( 
    // path.join( __dirname, '../', 'FrontEnd') 
    path.join( __dirname, '../', 'dist', 'FrontEnd') 
)); 

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
/*  Serving HTML file */

app.get('*' , (req,res) => {
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream( 
        // path.join( __dirname, '../', 'FrontEnd', 'index.html')
        path.join( __dirname, '../', 'dist', 'FrontEnd', 'index.html')
    ).pipe( res );
});





/* Port listening */
app.listen( 3300, () => {
    console.log("Listening at 3300")
});

// console.log( app._router.stack );

process.on('uncaughtException', function (err) {
    console.error(err);
});
