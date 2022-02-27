export interface ResponseModel<T> {
    data: T;
    isSuccessful: boolean;
    error: ErrorModel<string>;
}

export interface ErrorModel<T> {
    errorMessage: T;
    statusCode: number;
}
