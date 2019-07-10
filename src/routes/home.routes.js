import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { HomeComponent } from '../components/home.component';
import { LoginComponent } from '../components/login.component';
import { ErrorComponent } from '../components/error.component';

export default class HomeRoutes extends React.Component {

    constructor(props) {
        super(props);
        if (this.props.location.pathname === '/') {
            // this.props.history.push('/home');
            <Redirect to='/home' />
        } else {
            console.log(this.props.location.pathname);
        }
    }


    render() {

        return (
            <React.Fragment>
                <Switch>
                    <Route path="/home" component={HomeComponent} />
                    <Route path="/login" component={LoginComponent} />
                    <Route path="/" component={ErrorComponent} />
                </Switch>
            </React.Fragment>
        )
    }
}