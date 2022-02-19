import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { NavigationService } from './navigation.service';
import { MenuModel } from '../../models';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    providers: [NavigationService]
})
export class NavigationComponent {
    private _mobileQueryListener: () => void;
    mobileQuery: MediaQueryList;
    menus: MenuModel[] = [];
    isExpanded = true;
    showSubmenu: boolean = false;

    constructor(private navigationService: NavigationService,
        private changeDetector: ChangeDetectorRef,
        private media: MediaMatcher,
        private router: Router) { }

    ngOnInit(): void {
        this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => this.changeDetector.detectChanges();
        this.mobileQuery.addListener(() => { });
        this.getNavigationMenus(0);
    }

    onMouseenter() {
        if (!this.isExpanded) {
            this.showSubmenu = true;
        }
    }

    onMouseleave() {
        if (!this.isExpanded) {
            this.showSubmenu = false;
        }
    }

    onMenuClick(menu: MenuModel) {
        if (menu.subMenus && menu.subMenus.length > 0) {
            this.showSubmenu = !this.showSubmenu;
        } else {
            this.router.navigateByUrl(menu.menuPath);
        }
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }

    private getNavigationMenus(userId: number) {
        this.navigationService.getNavigationMenus(userId)
            .subscribe({
                next: (data: MenuModel[]) => {
                    this.menus = data;
                },
                error: (error: any) => {
                    //show toasert with error messgae
                }
            });
    }
}
