export class InitialStateModel{

    constructor(){
        this.uiState = new UIStateModel();
    }
}

export class UIStateModel{

    constructor(){
        this.errorState = new UIErrorStateModel();
        this.successState = new UISuccessStateModel();
        this.isUserAuthenticated = true;
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

export class apiConfigModel{

    constructor(){
        this.url = ''
        this.method = 'get',
        this.headers = {},
        this.params = {},
        this.data = {},
        this.responseType = 'json',
        this.responseEncoding = 'utf-8'
    }
}