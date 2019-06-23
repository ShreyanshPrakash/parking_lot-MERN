import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// import { AdminComponent } from '../components/admin.component';
// import { DashboardComponent } from '../components/dashboard.component';

const AdminComponent = React.lazy(() => import('../components/admin.component.js'));
const DashboardComponent = React.lazy(() => import('../components/dashboard.component.js'));

export class AdminRoutes extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props);
    }


    render() {

        return (
            <React.Suspense fallback={<div>Waiting</div>}>
                <React.Fragment>
                    <Route path="/admin" exact component={AdminComponent} />
                    <Route path="/admin/dashboard" component={DashboardComponent} />
                </React.Fragment>
            </React.Suspense>

        )
    }
}