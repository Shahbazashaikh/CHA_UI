import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../services/http.service';
import { AuthenticationModel } from './authentication.model';

@Injectable()
export class AuthenticationService {

    constructor(private http: HttpService) { }

    authenticateUser(model: AuthenticationModel): Observable<string> {
        return new Observable(observer => {
            this.http.post<string>('/Authentication/AuthenticateUser', model, true).subscribe(response => {
                observer.next(response);
            }, (error) => {
                console.log(error);
            })
        });
    }
}
