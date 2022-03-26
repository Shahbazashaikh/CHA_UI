import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientMaster, ClientMasterModel } from './client-master.model'
import { MessageService } from 'primeng/api';
import { ModalDialogResponse } from '../models';

@Component({
  selector: 'app-client-master',
  templateUrl: './client-master.component.html',
  styleUrls: ['./client-master.component.scss']
})
export class ClientMasterComponent implements OnInit {
  model: ClientMasterModel = new ClientMasterModel();

  constructor(private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
    private route: Router) { }

  ngOnInit(): void {
    this.initializeGridConfig();
  }

  onAddNewClick(): void {
    this.route.navigate(['add'], { relativeTo: this.activatedRoute });
    // this.route.navigateByUrl('client/add');
  }

  private initializeGridConfig(): void {
    this.model.gridConfig.columns = [
      { field: 'IECNo', header: 'IEC No', sortable: true },
      { field: 'name', header: 'Client Name', sortable: true },
      { field: 'Type', header: 'Type', sortable: true },
      { field: 'PANNo', header: 'Pan No', sortable: true },
      { field: '', header: 'Action', sortable: false, isEditAllowed: true, isDeleteAllowed: true }
    ];
    //need to bind this dyanamically
    //need to check primeng documentation
    this.model.gridConfig.rows = 10;
  }
}
