import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable()
export class HttpService {

    constructor(private http: HttpClient,
        private loaderService: LoaderService) { }

    get<T>(url: string, showLoader: boolean): Observable<T> {
        return new Observable(observer => {
            if (showLoader) {
                this.loaderService.showLoader();
            }
            this.http.get<T>(url, { headers: this.getHttpHeaders(), responseType: 'json' })
                .subscribe((response: T) => {
                    observer.next(response);
                    this.loaderService.hideLoader();
                }, (error) => {
                    observer.error(error);
                    this.loaderService.hideLoader();
                });
        });
    }

    post<T>(url: string, body: any, showLoader: boolean): Observable<T> {
        return new Observable(observer => {
            if (showLoader) {
                this.loaderService.showLoader();
            }
            this.http.post<T>(url, body, { headers: this.getHttpHeaders(), responseType: 'json' })
                .subscribe((response: T) => {
                    observer.next(response);
                    this.loaderService.hideLoader();
                }, (error) => {
                    observer.error(error);
                    this.loaderService.hideLoader();
                });
        });
    }

    private getHttpHeaders(): HttpHeaders {
        const headers: HttpHeaders = new HttpHeaders();
        headers.append('Content-Type', 'application/json')
        return headers;
    }
}