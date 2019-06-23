import React from 'react';

export default class AdminComponent extends React.Component{

    constructor( props ){
        super( props );
        console.log('Hello weold');
    }


    render(){
        return(
            <React.Fragment>
                <h1>Admin Component</h1>
            </React.Fragment>
        )
    }
}