export interface ClientRequestModel {
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
    addresses: ClientAddressRequestModel[];
    documents: ClientDocumentMasterRequest[];
    userId: number;
    action: string;
}

export interface ClientAddressRequestModel {
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

export interface ClientDocumentMasterRequest {
    documentId?: number;
    clientId?: number;
    clientName?: string;
    documentName: string;
    documentPath?: string;
    documentType: number;
    file: File;
    userId?: number;
}