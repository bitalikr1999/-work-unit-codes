export interface IStatusCode {


    /*
        true of false - sometimes need for catch errors in front end 
    */

    success: boolean

    data?: any


    /* 
        <1000 - success response
        <2000 - request errors 
        <3000 - servers errors
        >3000 - others 
    */
    code: number

}


export abstract class Exception {
    public success: boolean = false
    public code: number = 0

    constructor(public readonly data: any) { }
}

/*
*
* Standart server response
* 
*/
export class SuccessResponse implements IStatusCode {
    public readonly success = true
    public readonly code = 0

    constructor(public readonly data: any) { }
}


/*
* Validation error 
*/
export class ValidationException extends Exception implements IStatusCode {
    public readonly success = false
    public readonly code = 1000
}

