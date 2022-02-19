import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoaderService {
    private isLoaderVisible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private showNavigation$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    showLoader() {
        this.isLoaderVisible$.next(true);
    }

    hideLoader() {
        this.isLoaderVisible$.next(false);
    }

    isLoaderVisible(): BehaviorSubject<boolean> {
        return this.isLoaderVisible$;
    }

    showMenu() {
        this.showNavigation$.next(true);
    }

    isNavigationVisible(): BehaviorSubject<boolean> {
        return this.showNavigation$;
    }
}
