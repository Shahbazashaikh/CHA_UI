import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConsigneeMasterModel, InsertUpdateConsigneeModel } from './consignee-master.model';
import { ConsigneeMasterService } from './consignee-master.service';
import { InsertUpdateConsigneeComponent } from './insert-update-consignee/insert-update-consignee.component';
import { ConfirmationModalComponent } from '../shared/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-consignee-master',
  templateUrl: './consignee-master.component.html',
  styleUrls: ['./consignee-master.component.scss']
})
export class ConsigneeMasterComponent implements OnInit {
  model: ConsigneeMasterModel = new ConsigneeMasterModel();

  constructor(public dialog: MatDialog,
    private consigneeService: ConsigneeMasterService) { }

  ngOnInit(): void {
    this.initializeGridConfig();
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
    const insertUpdateModel: InsertUpdateConsigneeModel = new InsertUpdateConsigneeModel();
    insertUpdateModel.action = 'Add';
    insertUpdateModel.countries = this.model.countries;
    const dialogRef = this.dialog.open(InsertUpdateConsigneeComponent, {
      height: '550px',
      width: '700px',
      data: insertUpdateModel
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result == 'Successfully Saved') {
        this.getConsignees();
      }
    }, (error: any) => {
      //show toaster message
    });
  }

  onEditRowClick(updateConsignee: InsertUpdateConsigneeModel) {
    updateConsignee.action = 'Update';
    updateConsignee.countries = this.model.countries;
    const dialogRef = this.dialog.open(InsertUpdateConsigneeComponent, {
      height: '550px',
      width: '700px',
      data: updateConsignee
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.getConsignees();
      }
    }, (error: any) => {
      //show toaster message
    });
  }

  onDeleteRowClick(deleteConsignee: InsertUpdateConsigneeModel) {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      height: '190px',
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.consigneeService.deleteConsigneeMaster(deleteConsignee.id)
          .subscribe({
            next: (result: boolean) => {
              if (result) {
                this.getConsignees();
              }
            },
            error: (error: any) => {
              //show toaster message
            }
          })
      }
    });
  }

  private initializeGridConfig(): void {
    this.model.gridConfig.columns = [
      { field: 'name', header: 'Consignee', sortable: true },
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
      //show toaster message
    });
  }
}
