export class ApiException extends Error{
    message = '';
    constructor(message){
        super();
        this.message = message;
    }
}