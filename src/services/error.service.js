import React from 'react';

export class ErrorBoundary extends React.Component{

    constructor( props ){
        super( props );
        
    }

    static getDerivedStateFromError( error ){

    }

    componentDidCatch(){

    }


    render(){
        // if( this.props.uiState.error.hasError ){
        //     return(
        //         <React.Fragment>
        //             <h1>error Occured</h1>
        //         </React.Fragment>
        //     )
        // } else {
            return this.props.children;
        // }
    }


}