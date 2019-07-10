import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { RootReducer } from './src/store/reducer.store';

import { App } from './src/app.js';

const store = createStore( RootReducer );
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