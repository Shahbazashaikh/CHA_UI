export interface MenuModel {
    menuName: string;
    menuPath: string;
    menuIcon: string;
    subMenus?: SubMenuModel[];
}

export interface SubMenuModel {
    subMenuName: string;
    subMenuPath: string;
}
