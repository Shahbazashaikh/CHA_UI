import { Injectable } from '@angular/core';
import { HttpService } from '../shared/services';
import { environment } from '../../environments/environment';
import {
    ResponseModel,
    ClientRequestModel
} from '../models';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorModel } from '../models';

@Injectable()
export class ClientMasterService {

    constructor(private http: HttpService) { }

    insertClientMaster(request: ClientRequestModel): Observable<boolean> {
        return new Observable(observer => {
            this.http.post<ResponseModel<boolean>>(environment.APIBaseURL + 'ClientMaster/InsertClient', this.getFormDataForClient(request), true)
                .subscribe({
                    next: (response) => {
                        if (response.isSuccessful)
                            observer.next(response.data);
                        else
                            observer.error(response.error.errorMessage);
                    },
                    error: (error: HttpErrorResponse) => {
                        console.log(error);
                        if (error.status == 401) {
                            //token is not valid
                        }
                        if (error.status == 400) {
                            const errorModel: ErrorModel<string[]> = <ErrorModel<string[]>>error.error;
                            observer.error(errorModel.errorMessage);
                        } else {
                            observer.error(error);
                        }
                    }
                });
        });
    }

    private getFormDataForClient(request: ClientRequestModel): FormData {
        const formData: FormData = new FormData();
        if (request.clientId) {
            formData.append('ClientId', request.clientId.toString());
        }
        formData.append('IECNo', request.iecNo);
        formData.append('Type', request.type);
        formData.append('Name', request.name);
        formData.append('PANNo', request.panNo);
        formData.append('ContactPerson', request.contactPerson);
        formData.append('PhoneNo', request.phoneNo);
        formData.append('Fax', request.fax);
        formData.append('EMail', request.email);
        formData.append('BinNo', request.binNo);
        formData.append('TINNo', request.tinNo);
        formData.append('EXPGSTNType', request.expgstnType);
        formData.append('IMPGSTNType', request.impgstnType);
        formData.append('RegNo', request.regNo);
        formData.append('TypeofExp', request.typeofExp);
        formData.append('UserId', '1');
        if (request.addresses.length > 0) {
            request.addresses.forEach((address, index) => {
                formData.append('Addresses[' + index + '].BranchNo', address.branchNo);
                formData.append('Addresses[' + index + '].Address1', address.address1);
                formData.append('Addresses[' + index + '].Address2', address.address2);
                formData.append('Addresses[' + index + '].City', address.city);
                formData.append('Addresses[' + index + '].StateName', address.stateName);
                formData.append('Addresses[' + index + '].StateCode', address.stateCode);
                formData.append('Addresses[' + index + '].District', address.district);
                formData.append('Addresses[' + index + '].PINCode', address.pinCode);
            });
        }
        if (request.documents.length > 0) {
            request.documents.forEach((document, index) => {
                formData.append('Documents[' + index + '].DocumentName', document.documentName);
                formData.append('Documents[' + index + '].DocumentType', document.documentType.toString());
                formData.append('Documents[' + index + '].File', document.file);
            });
        }
        return formData;
    }
}

