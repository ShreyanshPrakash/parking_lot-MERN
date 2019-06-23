import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { HomeRoutes } from './routes/home.routes';
import { AdminRoutes } from './routes/admin.routes';
import { CustomerRoutes } from './routes/customer.routes';

export class App extends React.Component{

    constructor( props ){
        super( props );
    }


    render(){

        return(
            <BrowserRouter>
                <React.Fragment>
                    <Route path="/admin/" component={AdminRoutes} />
                    <Route path="/customer" component={CustomerRoutes} />
                    <Route path="/" component={HomeRoutes} />
                </React.Fragment>
            </BrowserRouter>
        )
    }
}