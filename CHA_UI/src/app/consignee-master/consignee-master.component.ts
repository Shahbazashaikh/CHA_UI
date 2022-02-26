import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConsigneeMasterModel } from './consignee-master.model';

@Component({
  selector: 'app-consignee-master',
  templateUrl: './consignee-master.component.html',
  styleUrls: ['./consignee-master.component.scss']
})
export class ConsigneeMasterComponent implements OnInit {
  model: ConsigneeMasterModel = new ConsigneeMasterModel();
  @ViewChild('consigneeMasterSearchForm') searchForm: NgForm;

  constructor() { }

  ngOnInit(): void {
    this.model.gridConfig.columns = [
      { field: 'name', header: 'Name', exportHeader: 'Name', filterType: 'text', isFrozen: false, sortable: true },
      { field: 'email', header: 'Email', exportHeader: 'Email', filterType: 'text', isFrozen: false, sortable: true },
    ];
  }

  onSearchClick() {
    if (!this.isValid())
      return;
  }

  onCancelClick() {
    this.searchForm.reset();
    this.searchForm.resetForm(this.searchForm.value);
  }

  private isValid(): boolean {
    return this.model.consigneeName != '' && this.model.country != '';
  }
}
