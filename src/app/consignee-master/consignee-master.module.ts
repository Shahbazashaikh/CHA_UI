import { NgModule } from '@angular/core';
import { ConsigneeMasterRoutingModule } from './consignee-master-routing.module';
import { SharedModule } from '../shared/shared.module';

//Component
import { ConsigneeMasterComponent } from './consignee-master.component';
import { InsertUpdateConsigneeComponent } from './insert-update-consignee/insert-update-consignee.component';

//Service
import { ConsigneeMasterService } from './consignee-master.service';

@NgModule({
    imports: [
        ConsigneeMasterRoutingModule,
        SharedModule
    ],
    declarations: [
        ConsigneeMasterComponent,
        InsertUpdateConsigneeComponent
    ],
    providers: [
        ConsigneeMasterService
    ],
    entryComponents: [
        InsertUpdateConsigneeComponent
    ]
})
export class ConsigneeMasterModule { }