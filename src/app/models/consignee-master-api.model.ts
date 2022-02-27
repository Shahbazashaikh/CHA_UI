export interface GetConsigneeRequestModel {
    companyName: string;
    countryCode: string;
}

export interface ConsigneeResponseModel {
    id: number;
    name: string;
    branchNo: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    country: string;
    countryCode: string;
    zipCode: string;
    remarks: string;
}

export interface ConsigneeRequestModel {
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
}
