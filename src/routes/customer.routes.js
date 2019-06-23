import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { HomeComponent } from '../components/home.component';
import { CustomerComponent } from '../components/customer.component';
import { DashboardComponent } from '../components/dashboard.component';

export class CustomerRoutes extends React.Component{

    constructor( props ){
        super( props );
        console.log( this.props );
    }


    render(){

        return(
            <React.Fragment>
                <Route path="/customer" exact component={ CustomerComponent } />
                <Route path="/customer/dashboard" component={ DashboardComponent } />
            </React.Fragment>
        )
    }
}