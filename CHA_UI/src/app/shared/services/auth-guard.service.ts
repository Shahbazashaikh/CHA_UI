import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from './cookie.service';
import { DataStorageService } from './data-storage.service';
import { DataStorageKeys } from '../../models';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private cookieService: CookieService,
        private dataStorage: DataStorageService,
        private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (this.cookieService.getCookie('Test')) {
            this.router.navigateByUrl('dashboard');
        }
        if (!this.dataStorage.exists(DataStorageKeys.ShowMenu))
            this.dataStorage.add({ key: DataStorageKeys.ShowMenu, value: true });
        return true;
    }
}
