export interface MenuModel {
    menuName: string;
    menuPath: string;
    subMenus?: SubMenuModel[];
}

export interface SubMenuModel {
    subMenuName: string;
    subMenuPath: string;
}
