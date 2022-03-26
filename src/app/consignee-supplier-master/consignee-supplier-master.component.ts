import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { ModalDialogResponse } from '../models';
import { ConsigneeSupplierMasterModel, InsertUpdateConsigneeSupplierModel } from './consignee-supplier-master.model';
import { ConsigneeSupplierMasterService } from './consignee-supplier-master.service';
import { InsertUpdateComponent } from './insert-update/insert-update.component';
import { ConfirmationModalComponent } from '../shared/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-consignee-master',
  templateUrl: './consignee-supplier-master.component.html',
  styleUrls: ['./consignee-supplier-master.component.scss']
})
export class ConsigneeSupplierMasterComponent implements OnInit {
  model: ConsigneeSupplierMasterModel = new ConsigneeSupplierMasterModel();

  constructor(public dialog: MatDialog,
    private consigneeService: ConsigneeSupplierMasterService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.model.type = response.masterName;

      this.initializeGridConfig();
    });
    this.initializeCountries();
    this.getConsignees();
  }

  onSearchClick() {
    this.getConsignees();
  }

  onCancelClick() {
    this.model.consigneeName = '';
    this.model.country = '';
    this.getConsignees();
  }

  onAddNewClick(): void {
    const insertUpdateModel: InsertUpdateConsigneeSupplierModel = new InsertUpdateConsigneeSupplierModel();
    insertUpdateModel.action = 'Add';
    insertUpdateModel.type = this.model.type;
    insertUpdateModel.countries = this.model.countries;
    const dialogRef = this.dialog.open(InsertUpdateComponent, {
      height: '565px',
      width: '700px',
      data: insertUpdateModel
    });

    dialogRef.afterClosed().subscribe((data: ModalDialogResponse) => {
      if (data.response) {
        this.messageService.add({ severity: 'success', summary: 'Successfully Saved' });
        this.getConsignees();
      } else {
        if (data.errorMessage)
          this.messageService.add({ severity: 'error', summary: data.errorMessage });
      }
    });
  }

  onEditRowClick(updateConsignee: InsertUpdateConsigneeSupplierModel) {
    updateConsignee.action = 'Update';
    updateConsignee.type = this.model.type;
    updateConsignee.countries = this.model.countries;
    const dialogRef = this.dialog.open(InsertUpdateComponent, {
      height: '565px',
      width: '700px',
      data: updateConsignee
    });

    dialogRef.afterClosed().subscribe((data: ModalDialogResponse) => {
      if (data.response) {
        this.messageService.add({ severity: 'success', summary: 'Successfully Updated' });
        this.getConsignees();
      } else {
        if (data.errorMessage)
          this.messageService.add({ severity: 'error', summary: data.errorMessage });
      }
    });
  }

  onDeleteRowClick(deleteConsignee: InsertUpdateConsigneeSupplierModel) {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      height: '205px',
      width: '395px'
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.consigneeService.deleteConsigneeMaster(deleteConsignee.id)
          .subscribe({
            next: (result: boolean) => {
              if (result) {
                this.messageService.add({ severity: 'success', summary: 'Successfully Deleted' });
                this.getConsignees();
              }
            },
            error: (error: any) => {
              this.messageService.add({ severity: 'error', summary: error });
            }
          });
      }
    });
  }

  private initializeGridConfig(): void {
    this.model.gridConfig.columns = [
      { field: 'name', header: this.model.type, sortable: true },
      { field: 'branchNo', header: 'Branch No.', sortable: true },
      { field: 'address1', header: 'Address', sortable: true },
      { field: 'city', header: 'City', sortable: true },
      { field: 'state', header: 'State', sortable: true },
      { field: 'country', header: 'Country', sortable: true },
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

  private getConsignees(): void {
    this.consigneeService.getConsigneeMaster({
      companyName: this.model.consigneeName,
      countryCode: this.model.country
    }).subscribe((response) => {
      this.model.gridConfig.data = response;
      this.model.gridConfig.totalRecords = response.length;
    }, (error) => {
      this.model.gridConfig.data = [];
      this.model.gridConfig.totalRecords = 0;
      this.messageService.add({ severity: 'error', summary: error });
    });
  }
}
