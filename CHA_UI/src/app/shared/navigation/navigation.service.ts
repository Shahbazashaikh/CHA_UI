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
            menus.push({ menuName: 'Master', menuPath: '', subMenus: [{ subMenuName: 'Client', subMenuPath: '{outlets: {child: ["client"]}}' }] });
            menus.push({ menuName: 'Master', menuPath: '', subMenus: [{ subMenuName: 'Supplier', subMenuPath: '{outlets: {child: ["supplier"]}}' }] });
            menus.push({ menuName: 'Master', menuPath: '', subMenus: [{ subMenuName: 'Consignee', subMenuPath: '{outlets: {child: ["consignee"]}}' }] });
            menus.push({ menuName: 'Import', menuPath: '{outlets: {child: ["import"]}}' });
            menus.push({ menuName: 'Export', menuPath: '{outlets: {child: ["export"]}}' });
            observer.next(menus);
        });
    }
}
