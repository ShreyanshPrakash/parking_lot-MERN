import { apiConfigModel } from '../models/allModels.model';

export const ActionTypes = {

    API_CALL_SUCCESS : "[API] Api call is successful",
    API_CALL_FAILED : "[API] Api call failed",

    GET_PAGE_CONTENT : "[API-CONTENT] Get page content"

};


// export function GetContentForPage( pageName = new apiConfigModel() ){
//     return{
//         type: ActionTypes.GET_PAGE_CONTENT,
//         payload: pageName
//     }
// }

export function UISuccessResponse( res ){
    return{
        type: ActionTypes.API_CALL_SUCCESS,
        payload: res
    }
}

export function UIErrorResponse( err ){
    return{
        type: ActionTypes.API_CALL_FAILED,
        payload: err
    }
}

