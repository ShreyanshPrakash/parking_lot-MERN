import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { AdminComponent } from '../components/admin.component';
import { DashboardComponent } from '../components/dashboard.component';
import HomeComponent from '../components/home.component';

// const AdminComponent = React.lazy(() => import('../components/admin.component.js'));
// const DashboardComponent = React.lazy(() => import('../components/dashboard.component.js'));

class AdminRoutes extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        
        return (
            <React.Suspense fallback={<div>Waiting</div>}>
                <React.Fragment>
                    <Switch>
                        <Route path="/admin" exact component={AdminComponent} />
                        <Route path="/admin/dashboard" component={DashboardComponent} />
                    </Switch>
                </React.Fragment>
            </React.Suspense>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        uiState: state.uiState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        // setAuthenticationError: ( event ) => dispatch( GetContentForPage( event ) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminRoutes);