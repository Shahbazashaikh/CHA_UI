import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientMaster, ClientAddressMaster } from '../client-master.model';
import { ClientMasterService } from '../client-master.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-insert-update',
  templateUrl: './insert-update.component.html',
  styleUrls: ['./insert-update.component.scss']
})
export class InsertUpdateComponent implements OnInit {
  model: ClientMaster = new ClientMaster();
  @ViewChild('ClientDetailsForm', { static: true }) clientDetailsForm: NgForm;

  constructor(private messageService: MessageService,
    private clientService: ClientMasterService) { }

  ngOnInit(): void {
    this.initType();
    this.initExpGSTNType();
    this.initImpGSTNType();
    this.initCity();
    this.initState();
    this.addDefaultAddressRow();
  }

  onSubmitClick() {
    if (this.clientDetailsForm.valid == false)
      return;
    this.saveClientMaster();
  }

  onAddRowClick() {
    this.model.addresses.push(this.addNewAddressRow());
  }

  onDeleteRowClick(index: number) {
    this.model.addresses.splice(index, 1);
  }

  private saveClientMaster(): void {
    this.clientService.insertClientMaster(this.model).subscribe({
      next: (response: boolean) => {
        if (response) {
          this.messageService.add({ severity: 'success', summary: 'Successfully Saved' });
        } else {
          this.messageService.add({ severity: 'error', summary: 'Something went wrong' });
        }
      },
      error: (error: any) => {
        this.messageService.add({ severity: 'error', summary: error });
      }
    });
  }

  private initType(): void {
    this.model.clienttypes = [
      { key: 'O', value: 'OTHERS' },
      { key: 'G', value: 'GOVERNMENT' }
    ];
  }

  private initExpGSTNType(): void {
    this.model.exportGSTNTypes = [
      { key: 'GSG', value: 'O/GSG GSTIN of Govt.Entities' },
      { key: 'GSD', value: 'D/GSD - GSTIN of Diplomats' },
      { key: 'PAN', value: 'I/PAN PAN Number (AAAPL1234C)' },
      { key: 'TAN', value: 'T/TAN TAN Number (AAAP12345C)' },
      { key: 'PSP', value: 'P/PSP -Passport Number( Max 9 Characters-AN)' },
      { key: 'ADH', value: 'A/ADH Aadhaar Number( 12 Numeric)' }
    ];
  }

  private initImpGSTNType(): void {
    this.model.importGSTNTypes = [
      { key: 'GST', value: 'G-GSTIN-NORMAL' },
      { key: 'OGS', value: 'O-GSTIN-GOVERNMENT' },
      { key: 'DGS', value: 'D-GSTIN-DIPLOMAT' },
      { key: 'ADH', value: 'A-AADHAAR' },
      { key: 'PAS', value: 'P-PASSPORT' },
      { key: 'TIN', value: 'T-TIN' },
      { key: 'PAN', value: 'I-PAN' },
      { key: 'VAT', value: 'V-VAT' },
      { key: 'CST', value: 'C-CST' },
      { key: 'SST', value: 'S-ST' },
    ];
  }

  private initCity(): void {
    this.model.cities = [
      { key: '1', value: 'Mumbai' },
      { key: '2', value: 'Pune' },
    ];
  }

  private initState(): void {
    this.model.states = [
      { key: '1', value: 'Maharashtra' },
      { key: '2', value: 'Kerala' },
      { key: '2', value: 'Delhi' },
    ];
  }

  private addDefaultAddressRow() {
    this.model.addresses.push(this.addNewAddressRow());
  }

  private addNewAddressRow(): ClientAddressMaster {
    return {
      address1: '',
      address2: '',
      branchNo: '',
      city: '',
      stateName: '',
      stateCode: '',
      district: '',
      pinCode: ''
    };
  }
}