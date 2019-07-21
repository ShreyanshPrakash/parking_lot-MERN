import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { ErrorBoundary } from './services/error.service';
import { ErrorComponent } from './components/error.component';
import AuthenticationGuard from './guards/authentication.guard';
// const HomeRoutes = React.lazy(() => import('./routes/home.routes').then( module => {
//     console.log( module );
//     return module;
// }));
const HomeComponent = React.lazy(() => import('./components/home.component'));
const LoginComponent = React.lazy(() => import('./components/login.component'));
const AdminRoutes = React.lazy(() => import('./routes/admin.routes'));
const CustomerRoutes = React.lazy(() => import('./routes/customer.routes'));

export class App extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <ErrorBoundary>
                <React.Suspense fallback={<div>Loading.....</div>}>

                    <BrowserRouter>
                        <React.Fragment>
                            <Switch>
                                <AuthenticationGuard path="/admin" component={AdminRoutes} />
                                <AuthenticationGuard path="/customer" component={CustomerRoutes} />
                                {/* <Route path="/admin" component={AdminRoutes} /> */}
                                {/* <Route path="/customer" component={CustomerRoutes} /> */}
                                <Route path="/home" component={HomeComponent} />
                                <Route path="/login" component={LoginComponent} />
                                <Route path="/error/:code" component={ErrorComponent} />
                                <Route path="/" exact render={() => (<Redirect to="/home" />)} />
                                <Route path="*" component={ErrorComponent} />
                            </Switch>
                        </React.Fragment>
                    </BrowserRouter>
                </React.Suspense>
            </ErrorBoundary>

        )
    }
}