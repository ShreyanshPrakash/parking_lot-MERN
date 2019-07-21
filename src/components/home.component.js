import React from 'react';
import { connect } from 'react-redux';

import { getCurrentPageNameFromUrl } from '../services/utility.service';
import { makeApiCall } from '../services/httpClent.service';
import { GetContentForPage } from '../store/action.store';
import * as restEndpoints from '../config/restEndpoints.config';

class HomeComponent extends React.Component{

    constructor( props ){
        super( props );
        const env = 'prod';
        const url = restEndpoints[ env ].getPageContent + getCurrentPageNameFromUrl( this.props );
        makeApiCall( { url: url } );
    }


    render(){
        return(
            <React.Fragment>
                <h1>Home Component</h1>
            </React.Fragment>
        )
    }
}

const mapStateToProps = ( state, ownProps ) => {
    return {
        uiState: state.uiState
    }
}

const mapDispatchToProps = ( dispatch, ownProps ) => {
    return {
        // getContent: ( event ) => dispatch( GetContentForPage( event ) )
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(HomeComponent);