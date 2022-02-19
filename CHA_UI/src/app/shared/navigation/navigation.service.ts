import { Injectable } from '@angular/core';
import { HttpService } from '../services';
import { MenuModel } from '../../models';
import { Observable } from 'rxjs';

@Injectable()
export class NavigationService {

    constructor(private http: HttpService) { }

    getNavigationMenus(userId: number): Observable<MenuModel[]> {
        return new Observable(observer => {
            const menus: MenuModel[] = [];
            menus.push({
                menuName: 'Master',
                menuPath: '',
                menuIcon: 'home',
                subMenus: [
                    { subMenuName: 'Client', subMenuPath: '/master/client' },
                    { subMenuName: 'Supplier', subMenuPath: '/master/supplier' },
                    { subMenuName: 'Consignee', subMenuPath: '/master/consignee' }
                ]
            });
            menus.push({ menuName: 'Import', menuIcon: 'system_update_alt', menuPath: '/import' });
            menus.push({ menuName: 'Export', menuIcon: 'launch', menuPath: '/export' });
            observer.next(menus);
        });
    }
}
