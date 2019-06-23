import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { HomeComponent } from '../components/home.component';

export class HomeRoutes extends React.Component{

    constructor( props ){
        super( props );
        if( this.props.location.pathname === '/'){
            this.props.history.push('/home');
        }
    }


    render(){

        return(
            <React.Fragment>
                <Route path="/home" component={ HomeComponent } />
            </React.Fragment>
        )
    }
}