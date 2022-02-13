import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../services/http.service';
import { ResponseModel } from '../../models';
import { AuthenticationModel } from './authentication.model';

@Injectable()
export class AuthenticationService {

    constructor(private http: HttpService) { }

    authenticateUser(model: AuthenticationModel): Observable<string> {
        return new Observable(observer => {
            this.http.post<ResponseModel<string>>('/api/Authentication/AuthenticateUser', model)
                .subscribe({
                    next: (response) => {
                        if (response && response.isSuccessful) {
                            observer.next(response.data);
                        } else {
                            observer.error(response.errorDetails.errorMessage);
                        }
                    },
                    error: (error) => {
                        console.log(error);
                    }
                })
        });
    }
}
