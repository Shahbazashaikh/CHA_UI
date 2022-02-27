import { TableModel } from '../shared/table/table.model';
import { ConsigneeResponseModel } from '../models';

export class ConsigneeMasterModel {
    consigneeName: string;
    country: string;
    countries: string[] = [];
    gridConfig: TableModel = new TableModel();
}

export class InsertUpdateConsigneeModel {
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
}