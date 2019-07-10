import { ActionTypes } from './action.store';
import { 
    InitialStateModel, 
    UISuccesStateModel, 
    UIErrorStateModel,
    UIStateModel 
} from '../models/allModels.model';

export const RootReducer = ( state = new InitialStateModel(), action ) => {

    switch( action.type ){

        case ActionTypes.API_CALL_SUCCESS : 
            const successInfo = handleApiCallSuccess( action.payload );
            return{
                ...state,
                uiState:{
                    errorState: new UIErrorStateModel(),
                    successState: successInfo
                }
            }

        default:
            return{
                ...state
            }
    }
}