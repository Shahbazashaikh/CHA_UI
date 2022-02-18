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

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private cookieService: CookieService,
        private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (this.cookieService.getCookie('Test')) {
            this.router.navigateByUrl('dashboard');
        }
        return true;
    }
}
