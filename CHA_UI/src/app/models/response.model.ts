export interface ResponseModel<T> {
    data: T;
    isSuccessful: boolean;
    errorDetails: ErrorModel<string>;
}

export interface ErrorModel<T> {
    errorMessage: T;
    statusCode: number;
}
