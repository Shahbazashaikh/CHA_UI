import { TableModel } from '../shared/table/table.model';

export class BuyerMasterModel {
    BuyerName: string = 'All';
    gridConfig: TableModel = new TableModel();
    type: string;
    countries: string[] = [];
}

export class InsertUpdateBuyerModel {
    buyerId: number;
    name: string;
    address1: string;
    address2: string;
    address3: string;
    countryName: string;
    countries: string[] = [];
    action: string;
}
