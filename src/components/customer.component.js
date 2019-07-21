import React from 'react';

export class CustomerComponent extends React.Component{

    constructor( props ){
        super( props );
    }


    render(){
        return(
            <React.Fragment>
                <h1>Customer Component</h1>
            </React.Fragment>
        )
    }
}