import { UIErrorStateModel } from './error.model';
import { UISuccessStateModel } from './success.model';

export class UIStateModel{

    constructor(){
        this.errorState = new UIErrorStateModel();
        this.successState = new UISuccessStateModel();
    }
    
}