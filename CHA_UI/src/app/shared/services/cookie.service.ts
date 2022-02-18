import { Injectable, PLATFORM_ID, Inject, InjectionToken } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Injectable()
export class CookieService {
    private readonly isDocumentAccessible: boolean;

    constructor(@Inject(DOCUMENT) private document: Document,
        @Inject(PLATFORM_ID) private plateformId: InjectionToken<Object>) {
        this.isDocumentAccessible = isPlatformBrowser(this.plateformId);
    }

    getCookie(name: string): string {
        if (this.isDocumentAccessible) {
            const pattern: RegExp = new RegExp(name + '=.[^;]*');
            const matched = this.document.cookie.match(pattern);
            if (matched) {
                const cookie = matched[0].split('=');
                return cookie[1];
            }
        }
        return '';
    }
}
