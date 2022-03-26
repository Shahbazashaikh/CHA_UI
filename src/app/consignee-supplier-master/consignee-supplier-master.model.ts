import { TableModel } from '../shared/table/table.model';
import { ConsigneeSupplierResponseModel } from '../models';

export class ConsigneeSupplierMasterModel {
    consigneeName: string;
    country: string;
    countries: string[] = [];
    gridConfig: TableModel = new TableModel();
    type: string;
}

export class InsertUpdateConsigneeSupplierModel {
    id: number;
    name: string;
    branchNo: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    country: string;
    countryCode: string;
    zipCode: number;
    remarks: string;
    userId: number;
    action: string;
    states: string[] = [];
    countries: string[] = [];
    countryCodes: string[] = [];
    type: string;
}