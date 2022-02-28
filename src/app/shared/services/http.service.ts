import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, Subscriber } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable()
export class HttpService {

    constructor(private http: HttpClient,
        private loaderService: LoaderService) { }

    get<T>(url: string, data?: any, showLoader: boolean = true): Observable<T> {
        return new Observable(observer => {
            this.showLoader(showLoader);
            this.http.get<T>(url, { headers: this.getHttpHeaders(), params: this.getHttpParams(data), responseType: 'json' })
                .subscribe({
                    next: (value) => this.handleNextEventOfSubscription<T>(observer, value),
                    error: (error) => this.handleErrorEventOfSubscription<T>(observer, error),
                    complete: () => this.handleCompleteEventOfSubscription<T>(observer)
                });
        });
    }

    post<T>(url: string, body: any, showLoader: boolean = true): Observable<T> {
        return new Observable(observer => {
            this.showLoader(showLoader);
            this.http.post<T>(url, body, { headers: this.getHttpHeaders(), responseType: 'json' })
                .subscribe({
                    next: (value) => this.handleNextEventOfSubscription<T>(observer, value),
                    error: (error) => this.handleErrorEventOfSubscription<T>(observer, error),
                    complete: () => this.handleCompleteEventOfSubscription<T>(observer)
                });
        });
    }

    put<T>(url: string, body: any, showLoader: boolean = true): Observable<T> {
        return new Observable(observer => {
            this.showLoader(showLoader);
            this.http.put<T>(url, body, { headers: this.getHttpHeaders(), responseType: 'json' })
                .subscribe({
                    next: (value) => this.handleNextEventOfSubscription<T>(observer, value),
                    error: (error) => this.handleErrorEventOfSubscription<T>(observer, error),
                    complete: () => this.handleCompleteEventOfSubscription<T>(observer)
                });
        });
    }

    delete<T>(url: string, body?: any, showLoader: boolean = true): Observable<T> {
        return new Observable(observer => {
            this.showLoader(showLoader);
            this.http.delete<T>(url, { body: body, headers: this.getHttpHeaders(), responseType: 'json' })
                .subscribe({
                    next: (value) => this.handleNextEventOfSubscription<T>(observer, value),
                    error: (error) => this.handleErrorEventOfSubscription<T>(observer, error),
                    complete: () => this.handleCompleteEventOfSubscription<T>(observer)
                });
        });
    }

    private handleNextEventOfSubscription<T>(observer: Subscriber<T>, value: T): void {
        observer.next(value);
    }

    private handleErrorEventOfSubscription<T>(observer: Subscriber<T>, value: T): void {
        this.loaderService.hideLoader();
        observer.error(value);
    }

    private handleCompleteEventOfSubscription<T>(observer: Subscriber<T>): void {
        this.loaderService.hideLoader();
        observer.complete();
    }

    private showLoader(isVisible: boolean) {
        if (isVisible) {
            this.loaderService.showLoader();
        }
    }

    private getHttpHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json'
        });
    }

    private getHttpParams(data: any): HttpParams {
        const httpParams: HttpParams = new HttpParams();
        if (data) {
            const keys = Object.keys(data);
            if (keys && keys.length > 0) {
                keys.forEach(key => {
                    httpParams.append(key.toString(), data[key].toString());
                });
            }
        }
        return httpParams;
    }
}