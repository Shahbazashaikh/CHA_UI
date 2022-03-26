import { Injectable } from '@angular/core';
import { HttpService } from '../shared/services';
import { environment } from '../../environments/environment';
import {
    ResponseModel,
    BuyerResponseModel
} from '../models';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { InsertUpdateBuyerModel } from './buyer-master.model';

@Injectable()
export class BuyerMasterService {

    constructor(private http: HttpService) { }

    getBuyerMaster(buyerName: string): Observable<BuyerResponseModel[]> {
        return new Observable(observer => {
            this.http.get<ResponseModel<BuyerResponseModel[]>>(environment.APIBaseURL + 'BuyerMaster/GetBuyerMaster/' + buyerName)
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

    insertBuyerMaster(request: InsertUpdateBuyerModel): Observable<boolean> {
        return new Observable(observer => {
            this.http.post<ResponseModel<boolean>>(environment.APIBaseURL + 'BuyerMaster/InsertBuyerMaster', request)
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

    updateBuyerMaster(request: InsertUpdateBuyerModel): Observable<boolean> {
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


}
