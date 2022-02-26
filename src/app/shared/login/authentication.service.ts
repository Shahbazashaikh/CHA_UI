import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../shared/services/http.service';
import { environment } from '../../../environments/environment';
import { AuthenticationModel } from './authentication.model';

@Injectable()
export class AuthenticationService {

    constructor(private http: HttpService) { }

    authenticateUser(model: AuthenticationModel): Observable<string> {
        return new Observable(observer => {
            this.http.post<string>(environment.APIBaseURL + 'User/AuthenticateUser', model)
                .subscribe({
                    next: (response) => {
                        observer.next(response);
                    },
                    error: (error) => {
                        console.log(error);
                    }
                })
        });
    }
}
