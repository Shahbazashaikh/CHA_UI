import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ModalDialogResponse } from '../../models';
import { InsertUpdateConsigneeSupplierModel } from '../consignee-supplier-master.model';
import { ConsigneeSupplierMasterService } from '../consignee-supplier-master.service';

@Component({
    selector: 'app-insert-update',
    templateUrl: './insert-update.component.html',
    styleUrls: ['./insert-update.component.scss']
})
export class InsertUpdateComponent implements OnInit {
    dialogResponse: ModalDialogResponse;

    constructor(@Inject(MAT_DIALOG_DATA) public data: InsertUpdateConsigneeSupplierModel,
        public dialogRef: MatDialogRef<InsertUpdateComponent>,
        private consigneeService: ConsigneeSupplierMasterService) { }

    ngOnInit(): void {
        this.initStates();
        this.initCountryCode();
    }

    onPrimaryButtonClick(): void {
        if (!this.isValid())
            return;
        if (this.data.action == 'Add') {
            this.consigneeService.insertConsigneeMaster(this.data).subscribe({
                next: (response: boolean) => {
                    this.dialogResponse = {
                        response: response,
                        errorMessage: response == true ? '' : 'There is some error while saving data.'
                    };
                    this.dialogRef.close(this.dialogResponse);
                },
                error: (error: any) => {
                    this.dialogResponse = {
                        response: false,
                        errorMessage: error
                    };
                    this.dialogRef.close(this.dialogResponse);
                }
            });
        } else {
            this.consigneeService.updateConsigneeMaster(this.data).subscribe({
                next: (response: boolean) => {
                    this.dialogResponse = {
                        response: response,
                        errorMessage: response == true ? '' : 'There is some error while saving data.'
                    };
                    this.dialogRef.close(this.dialogResponse);
                },
                error: (error: any) => {
                    this.dialogResponse = {
                        response: false,
                        errorMessage: error
                    };
                    this.dialogRef.close(this.dialogResponse);
                }
            });
        }
    }

    onCloseClick() {
        this.dialogResponse = {
            response: false,
            errorMessage: ''
        };
        this.dialogRef.close(this.dialogResponse);
    }

    private initStates(): void {
        this.data.states = [
            "Maharashtra",
            "Uttar Pradesh",
            "Madhya Pradesh"
        ];
    }

    private initCountryCode(): void {
        this.data.countryCodes = [
            "IN",
            "US",
            "US1"
        ];
    }

    private isValid(): boolean {
        return (this.data.name != '' && this.data.name != undefined) &&
            (this.data.address1 != '' && this.data.address1 != undefined) &&
            (this.data.country != '' && this.data.country != undefined) &&
            (this.data.countryCode != '' && this.data.countryCode != undefined);
    }
}
