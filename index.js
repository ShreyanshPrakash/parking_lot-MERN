import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './src/store/reducer.store';

import { App } from './src/app.js';


store.subscribe( () => {
    console.log( store.getState() );
});

ReactDOM.render(
    <Provider store={store}>
        <React.Fragment>
            <App />
        </React.Fragment>
    </Provider>,
    document.getElementById('app')
)