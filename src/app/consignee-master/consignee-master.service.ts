import { Injectable } from '@angular/core';
import { HttpService } from '../shared/services';
import { environment } from '../../environments/environment';
import {
    ResponseModel,
    GetConsigneeRequestModel,
    ConsigneeResponseModel,
    ConsigneeRequestModel
} from '../models';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ConsigneeMasterService {

    constructor(private http: HttpService) { }

    getConsigneeMaster(request: GetConsigneeRequestModel): Observable<ConsigneeResponseModel[]> {
        return new Observable(observer => {
            this.http.post<ResponseModel<ConsigneeResponseModel[]>>(environment.APIBaseURL + 'ConsigneeMaster/GetConsigneeMaster', request)
                .subscribe({
                    next: (response) => {
                        if (response.isSuccessful)
                            observer.next(response.data);
                        else
                            observer.error(response.error.errorMessage);
                    },
                    error: (error: HttpErrorResponse) => {
                        console.log(error);
                        if (error.status == 401) {
                            //token is not valid
                        } else {
                            observer.error(error.message);
                        }
                    }
                });
        });
    }

    insertConsigneeMaster(request: ConsigneeRequestModel): Observable<string> {
        return new Observable(observer => {
            this.http.post<ResponseModel<string>>(environment.APIBaseURL + 'ConsigneeMaster/InsertConsigneeMaster', request)
                .subscribe({
                    next: (response) => {
                        if (response.isSuccessful)
                            observer.next(response.data);
                        else
                            observer.error(response.error.errorMessage);
                    },
                    error: (error: HttpErrorResponse) => {
                        console.log(error);
                        if (error.status == 401) {
                            //token is not valid
                        } else {
                            observer.error(error.message);
                        }
                    }
                });
        });
    }

    updateConsigneeMaster(request: ConsigneeRequestModel): Observable<boolean> {
        return new Observable(observer => {
            this.http.put<ResponseModel<boolean>>(environment.APIBaseURL + 'ConsigneeMaster/UpdateConsigneeMaster', request)
                .subscribe({
                    next: (response) => {
                        if (response.isSuccessful)
                            observer.next(response.data);
                        else
                            observer.error(response.error.errorMessage);
                    },
                    error: (error: HttpErrorResponse) => {
                        console.log(error);
                        if (error.status == 401) {
                            //token is not valid
                        } else {
                            observer.error(error.message);
                        }
                    }
                });
        });
    }

    deleteConsigneeMaster(id: number): Observable<boolean> {
        return new Observable(observer => {
            this.http.delete<ResponseModel<boolean>>(environment.APIBaseURL + 'ConsigneeMaster/DeleteConsigneeMaster/' + id)
                .subscribe({
                    next: (response) => {
                        if (response.isSuccessful)
                            observer.next(response.data);
                        else
                            observer.error(response.error.errorMessage);
                    },
                    error: (error: HttpErrorResponse) => {
                        console.log(error);
                        if (error.status == 401) {
                            //token is not valid
                        } else {
                            observer.error(error.message);
                        }
                    }
                });
        });
    }
}
