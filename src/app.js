import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ErrorBoundary } from './services/error.service';
import { ErrorComponent } from './components/error.component';

// const HomeRoutes = React.lazy(() => import('./routes/home.routes').then( module => {
//     console.log( module );
//     return module;
// }));
const HomeRoutes = React.lazy(() => import('./routes/home.routes'));
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
                                <Route path="/admin" component={AdminRoutes} />
                                <Route path="/customer" component={CustomerRoutes} />
                                <Route path="/error/:code" component={ErrorComponent} />
                                <Route path="/" component={HomeRoutes} />
                            </Switch>
                        </React.Fragment>
                    </BrowserRouter>
                </React.Suspense>
            </ErrorBoundary>

        )
    }
}