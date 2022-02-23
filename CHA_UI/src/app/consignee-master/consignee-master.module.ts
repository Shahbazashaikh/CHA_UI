import { NgModule } from '@angular/core';
import { ConsigneeMasterRoutingModule } from './consignee-master-routing.module';
import { SharedModule } from '../shared/shared.module';

//Component
import { ConsigneeMasterComponent } from './consignee-master.component';

//Service

@NgModule({
    imports: [
        ConsigneeMasterRoutingModule,
        SharedModule
    ],
    declarations: [
        ConsigneeMasterComponent
    ],
    providers: [

    ]
})
export class ConsigneeMasterModule { }