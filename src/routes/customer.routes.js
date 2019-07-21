import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { CustomerComponent } from '../components/customer.component';
import { DashboardComponent } from '../components/dashboard.component';

export default class CustomerRoutes extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <React.Fragment>
                <Switch>
                    <Route path="/customer" exact component={CustomerComponent} />
                    <Route path="/customer/dashboard" component={DashboardComponent} />
                </Switch>
            </React.Fragment>
        )
    }
}