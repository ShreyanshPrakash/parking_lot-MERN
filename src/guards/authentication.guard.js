import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

function AuthenticationGuard(props) {
    return (
        <React.Fragment>
            {   // maybe need to pass props.defaultProps...will see
                props.uiState.isUserAuthenticated ? <props.component {...props} />
                    : props.history.push('/login')
            }
        </React.Fragment>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(
    withRouter(AuthenticationGuard)
);



















// <React.Fragment>
                //     <Route { ...rest } render={ (props) => {
                //         rest.uiState.isUserAuthenticated ? <component { ...props } /> 
                //             : props.history.push('/login')
                //         }
                //     }/>
                // </React.Fragment>