import { Injectable } from '@angular/core';
import { HttpService } from '../shared/services';
import { environment } from '../../environments/environment';
import {
    ResponseModel,
    ClientRequestModel
} from '../models';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorModel } from '../models';

@Injectable()
export class ClientMasterService {

    constructor(private http: HttpService) { }

    insertClientMaster(request: ClientRequestModel): Observable<boolean> {
        return new Observable(observer => {
            this.http.post<ResponseModel<boolean>>(environment.APIBaseURL + 'ClientMaster/InsertClient', request)
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
                        }
                        if (error.status == 400) {
                            const errorModel: ErrorModel<string[]> = <ErrorModel<string[]>>error.error;
                            observer.error(errorModel.errorMessage);
                        } else {
                            observer.error(error);
                        }
                    }
                });
        });
    }

}

