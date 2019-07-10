export class InitialStateModel{

    constructor(){
        this.uiState = new UIStateModel();
    }
}

export class UIStateModel{

    constructor(){
        this.errorState = new UIErrorStateModel();
        this.successState = new UISuccessStateModel();
    }
    
}

export class UISuccessStateModel{

    constructor(){
        this.isSuccess = false;
        this.successMessage = '';
        this.successResponse = ''
    }
}

export class UIErrorStateModel{

    constructor(){
        this.hasError = false;
        this.errorMessage = '';
        this.errorResponse = ''
    }
}