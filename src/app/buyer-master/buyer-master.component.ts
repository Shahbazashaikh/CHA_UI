import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { ModalDialogResponse } from '../models';
import { ConfirmationModalComponent } from '../shared/confirmation-modal/confirmation-modal.component';
import { BuyerMasterModel, InsertUpdateBuyerModel } from './buyer-master.model';
import { InsertUpdateComponent } from './insert-update/insert-update.component';
import { BuyerMasterService } from './buyer-master.service';

@Component({
  selector: 'app-buyer-master',
  templateUrl: './buyer-master.component.html',
  styleUrls: ['./buyer-master.component.scss']
})
export class BuyerMasterComponent implements OnInit {
  model: BuyerMasterModel = new BuyerMasterModel();

  constructor(public dialog: MatDialog,
    private messageService: MessageService,
    private buyerservice: BuyerMasterService) { }

  ngOnInit(): void {
    this.initializeGridConfig();
    this.initializeCountries();
    this.getBuyerMaster();
  }

  onSearchClick() {
    this.getBuyerMaster();
  }

  onCancelClick() {
    this.model.BuyerName = 'All';
  }

  onAddNewClick(): void {
    const insertUpdateModel: InsertUpdateBuyerModel = new InsertUpdateBuyerModel();
    insertUpdateModel.action = 'Add';
    insertUpdateModel.countries = this.model.countries;
    const dialogRef = this.dialog.open(InsertUpdateComponent, {
      height: '410px',
      width: '700px',
      data: insertUpdateModel
    });

    dialogRef.afterClosed().subscribe((data: ModalDialogResponse) => {
      if (data.response) {
        this.messageService.add({ severity: 'success', summary: 'Successfully Saved' });
        this.getBuyerMaster();
      } else {
        if (data.errorMessage)
          this.messageService.add({ severity: 'error', summary: data.errorMessage });
      }
    });
  }

  onEditRowClick(updateBuyer: InsertUpdateBuyerModel) {
    updateBuyer.action = 'Update';
    updateBuyer.countries = this.model.countries;
    const dialogRef = this.dialog.open(InsertUpdateComponent, {
      height: '410px',
      width: '700px',
      data: updateBuyer
    });

    dialogRef.afterClosed().subscribe((data: ModalDialogResponse) => {
      if (data.response) {
        this.messageService.add({ severity: 'success', summary: 'Successfully Updated' });
        this.getBuyerMaster();
      } else {
        if (data.errorMessage)
          this.messageService.add({ severity: 'error', summary: data.errorMessage });
      }
    });
  }

  onDeleteRowClick(deleteBuyer: InsertUpdateBuyerModel) {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      height: '205px',
      width: '395px'
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {

      }
    });
  }

  private initializeGridConfig(): void {
    this.model.gridConfig.columns = [
      { field: 'name', header: 'Buyer Name', sortable: true },
      { field: 'address1', header: 'Address', sortable: true },
      { field: 'countryName', header: 'Country', sortable: true },
      { field: '', header: 'Action', sortable: false, isEditAllowed: true, isDeleteAllowed: true }
    ];
    //need to bind this dyanamically
    //need to check primeng documentation
    this.model.gridConfig.rows = 10;
  }

  private initializeCountries(): void {
    this.model.countries = [
      "India",
      "USA",
      "USB",
      "RSA",
      "Canada"
    ];
  }

  private getBuyerMaster(): void {
    this.buyerservice.getBuyerMaster(this.model.BuyerName).subscribe((response) => {
      this.model.gridConfig.data = response;
      this.model.gridConfig.totalRecords = response.length;
    }, (error) => {
      this.model.gridConfig.data = [];
      this.model.gridConfig.totalRecords = 0;
      this.messageService.add({ severity: 'error', summary: error });
    });
  }
}
