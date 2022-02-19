import { NgModule } from '@angular/core';
import { MasterRoutingModule } from './master-routing.module';
import { SharedModule } from '../shared/shared.module';
// Component Declaration
import { ConsigneeMasterComponent } from './consignee-master/consignee-master.component';


@NgModule({
    imports: [
        MasterRoutingModule,
        SharedModule
    ],
    declarations: [
        ConsigneeMasterComponent
    ],
    providers: [

    ]
})
export class MasterModule { }