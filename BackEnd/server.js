const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();


/* Setting MiddleWares */
app.use( express.static( 
    path.join( __dirname, '../', 'FrontEnd') 
)); 

/* MiddleWares end here */
/*  Api endpoints start here  */

// app.use( '/restservices/cms/v1/', cmsRoutes );
// app.use( '/restservices/cms/v1/', cmsRoutes );
// app.use( '/restservices/cms/v1/', cmsRoutes );
// app.use( '/restservices/cms/v1/', cmsRoutes );
// app.use( '/restservices/cms/v1/', cmsRoutes );

/*  Api endpoints ends here  */
/*  Serving HTML file */
app.get('*' , (req,res) => {
    fs.createReadStream( 
        path.join( __dirname, '../', 'FrontEnd', 'index.html')
    ).pipe( res );
});


/* Port listening */
app.listen( 3300, () => {
    console.log("Listening at 3300")
});
