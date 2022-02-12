import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoaderService {
    isLoaderVisible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    showLoader() {
        this.isLoaderVisible$.next(true);
    }

    hideLoader() {
        this.isLoaderVisible$.next(false);
    }
}
