import { createStore } from 'redux';

import { ActionTypes } from './action.store';
import { 
    InitialStateModel, 
    UISuccessStateModel, 
    UIErrorStateModel,
    UIStateModel 
} from '../models/allModels.model';
import { makeApiCall } from '../services/httpClent.service';
import { handleApiCallSuccess, handleApiCallFailure } from '../services/utility.service';

export const RootReducer = ( state = new InitialStateModel(), action ) => {
    console.log( action );
    console.log( '---------------- Reducer --------------------');
    switch( action.type ){

        case ActionTypes.API_CALL_SUCCESS : 
            return{
                ...state,
                uiState: {
                    errorState: new UIErrorStateModel(),
                    successState: handleApiCallSuccess( action.payload )
                }
            }

        case ActionTypes.API_CALL_FAILED :
            return{
                ...state,
                uiState: {
                    errorState: handleApiCallFailure( action.payload ),
                    successState: new UISuccessStateModel()
                }
            }

        default:
            return{
                ...state
            }
    }
}


export const store = createStore( RootReducer );