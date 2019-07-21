import { UISuccessStateModel, UIErrorStateModel } from "../models/allModels.model";
import * as uiMessages from '../config/uiMessage.config';

export function getCurrentPageNameFromUrl( { location } ){
    let subRouteSplit = location.pathname.split('/')
    return subRouteSplit[ subRouteSplit.length -1 ];
}

export function handleApiCallSuccess( res ){

    const successRes = new UISuccessStateModel();
    successRes.isSuccess = true;
    successRes.successResponse = res.data
    successRes.successMessage = getUIMessage( res );
    return successRes;

}

export function handleApiCallFailure( res ){

    const errorRes = new UIErrorStateModel();
    errorRes.hasError = true;
    errorRes.errorResponse = res.data
    errorRes.errorMessage = getUIMessage( res );
    return errorRes;

}

export function getUIMessage( res ){

    // later on, this method will be used by ui code also to show error messages
    // say auuthentication error message.
    // u will get a success 200 from backend but u want to show error in UI
    // because user have no permission
    return uiMessages[ res.status ];

}