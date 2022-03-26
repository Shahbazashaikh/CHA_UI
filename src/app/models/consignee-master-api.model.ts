export interface GetRequestModel {
    companyName: string;
    countryCode: string;
}

export interface ConsigneeSupplierResponseModel {
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

export interface ConsigneeSupplierRequestModel {
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
