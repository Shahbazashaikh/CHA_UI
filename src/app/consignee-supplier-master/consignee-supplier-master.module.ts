import { NgModule } from '@angular/core';
import { ConsigneeSuppplierMasterRoutingModule } from './consignee-supplier-master-routing.module';
import { SharedModule } from '../shared/shared.module';

//Component
import { ConsigneeSupplierMasterComponent } from './consignee-supplier-master.component';
import { InsertUpdateComponent } from './insert-update/insert-update.component';

//Service
import { ConsigneeSupplierMasterService } from './consignee-supplier-master.service';

@NgModule({
    imports: [
        ConsigneeSuppplierMasterRoutingModule,
        SharedModule
    ],
    declarations: [
        ConsigneeSupplierMasterComponent,
        InsertUpdateComponent
    ],
    providers: [
        ConsigneeSupplierMasterService
    ],
    entryComponents: [
        InsertUpdateComponent
    ]
})
export class ConsigneeSupplierMasterModule { }