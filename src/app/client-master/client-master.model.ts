import { TableModel } from '../shared/table/table.model';

export class ClientMasterModel {
    name: string;
    gridConfig: TableModel = new TableModel();
    type: string;
    action: string;
}

export interface DropDownData {
    key: string;
    value: string;
}

export class ClientMaster {
    clientId: number;
    iecNo: string;
    type: string;
    name: string;
    panNo: string;
    contactPerson: string;
    phoneNo: string;
    fax: string;
    email: string;
    binNo: string;
    tinNo: string;
    expgstnType: string;
    impgstnType: string;
    regNo: string;
    typeofExp: string;
    addresses: ClientAddressMaster[] = [];
    documents: ClientDocumentMaster[] = [];
    userId: number;
    action: string;
    exportGSTNTypes: DropDownData[] = [];
    importGSTNTypes: DropDownData[] = [];
    clienttypes: DropDownData[] = [];
    cities: DropDownData[] = [];
    states: DropDownData[] = [];
    documentTypes: DropDownData[] = [];
}

export class ClientAddressMaster {
    addressId?: number;
    clientId?: number;
    branchNo: string;
    address1: string;
    address2: string;
    city: string;
    stateName: string;
    stateCode: string;
    district: string;
    pinCode: string;
    userId?: number;
}

export class ClientDocumentMaster {
    documentId?: number;
    clientId?: number;
    documentName: string;
    documentType: number;
    file: any;
    userId?: number;
}