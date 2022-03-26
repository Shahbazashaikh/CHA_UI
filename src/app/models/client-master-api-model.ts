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
    UserId: number;
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