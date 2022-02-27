import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { InsertUpdateConsigneeModel } from '../consignee-master.model';
import { ConsigneeMasterService } from '../consignee-master.service';

@Component({
    selector: 'app-insert-update-consignee',
    templateUrl: './insert-update-consignee.component.html',
    styleUrls: ['./insert-update-consignee.component.scss']
})
export class InsertUpdateConsigneeComponent implements OnInit {

    constructor(@Inject(MAT_DIALOG_DATA) public data: InsertUpdateConsigneeModel,
        public dialogRef: MatDialogRef<InsertUpdateConsigneeComponent>,
        private consigneeService: ConsigneeMasterService) { }

    ngOnInit(): void {
        this.initStates();
        this.initCountryCode();
    }

    onPrimaryButtonClick(): void {
        if (!this.isValid())
            return;
        if (this.data.action == 'Add') {
            this.consigneeService.insertConsigneeMaster(this.data).subscribe((data: string) => {
                this.dialogRef.close(data);
            }, (error: any) => {
                this.dialogRef.close(error);
            });
        }
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
