import React from 'react';

export  class ErrorComponent extends React.Component{

    constructor( props ){
        super( props );

        this.props.match.params.code ? '' : 'set error message to no page found'
        // this.props.history.push('/error/403');

    }

    render(){
        return(
            <React.Fragment>
                <h1>Error Component</h1>
            </React.Fragment>
        )
    }
}