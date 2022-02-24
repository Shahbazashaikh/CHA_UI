import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from './navigation.service';
import { MenuModel } from '../../models';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    providers: [NavigationService]
})
export class NavigationComponent {
    menus: MenuModel[] = [];
    isExpanded: boolean = true;
    showSubmenu: boolean = false;

    constructor(private navigationService: NavigationService,
        private router: Router) { }

    ngOnInit(): void {
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
