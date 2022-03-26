import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ModalDialogResponse } from '../../models';
import { InsertUpdateBuyerModel } from '../buyer-master.model';
import { BuyerMasterService } from '../buyer-master.service';

@Component({
  selector: 'app-insert-update',
  templateUrl: './insert-update.component.html',
  styleUrls: ['./insert-update.component.scss']
})
export class InsertUpdateComponent implements OnInit {
  dialogResponse: ModalDialogResponse;

  constructor(@Inject(MAT_DIALOG_DATA) public data: InsertUpdateBuyerModel,
    private buyerservice: BuyerMasterService,
    public dialogRef: MatDialogRef<InsertUpdateComponent>) { }

  ngOnInit(): void {
  }

  onPrimaryButtonClick(): void {
    if (!this.isValid())
      return;
    if (this.data.action == 'Add') {
      this.buyerservice.insertBuyerMaster(this.data).subscribe({
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
      this.buyerservice.updateBuyerMaster(this.data).subscribe({
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

  private isValid(): boolean {
    return (this.data.name != '' && this.data.name != undefined) &&
      (this.data.address1 != '' && this.data.address1 != undefined) &&
      (this.data.countryName != '' && this.data.countryName != undefined)
  }
}
