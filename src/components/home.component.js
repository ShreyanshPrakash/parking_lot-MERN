import React from 'react';

export class HomeComponent extends React.Component{

    constructor( props ){
        super( props );
        console.log('Hello weold');
    }


    render(){
        return(
            <React.Fragment>
                <h1>Home Component</h1>
            </React.Fragment>
        )
    }
}