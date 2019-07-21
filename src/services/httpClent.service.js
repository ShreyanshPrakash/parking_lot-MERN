import axios from 'axios';

import { store } from '../store/reducer.store';
import { UISuccessResponse, UIErrorResponse } from '../store/action.store';
import { apiConfigModel } from '../models/allModels.model';

export function makeApiCall( apiConfig ){

    axios( getConfig( apiConfig ) ).then( res => {
        store.dispatch( UISuccessResponse( res ) );
    }).catch( err => {
        store.dispatch( UIErrorResponse( err ) );
    });

}


export function getConfig( apiConfig = new apiConfigModel() ){
    
    return {
        url : apiConfig.url,
        method: apiConfig.method,
        headers : {
            'Content-Type': 'application/text',
            'name': 'parkingLot',
            ...apiConfig.headers
        },
        params: {
            ...apiConfig.queryParams  // query params
        },
        data : {
            ...apiConfig.data  // payload for backend
        },
        responseType: 'json',
        responseEncoding: 'utf8',
        
    };
}






// const options = {
//     headers : {
//         'Content-Type': 'application/text',
//         'name': 'parkingLot'
//     },
//     params: {
//         client: 'parking'   // query params
//     },
//     data : {}, // payload for backend
//     responseType: 'json',
//     responseEncoding: 'utf8',
//     onUploadProgress: ( progressEvent ) => { },
//     onDownloadProgress: ( progressEvent ) => { },
//     validateStatus: function (status) {
//         return status >= 200 && status < 300; // default
//     }
// };