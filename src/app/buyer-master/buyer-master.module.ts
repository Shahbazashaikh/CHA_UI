import { NgModule } from '@angular/core';
import { BuyerMasterRoutingModule } from './buyer-master-routing.module'
import { BuyerMasterComponent } from './buyer-master.component'
import { SharedModule } from '../shared/shared.module';
import { InsertUpdateComponent } from './insert-update/insert-update.component';


//Service
import { BuyerMasterService } from './buyer-master.service';

@NgModule({
    imports: [
        BuyerMasterRoutingModule,
        SharedModule
    ],
    declarations: [
        BuyerMasterComponent,
        InsertUpdateComponent
    ],
    providers: [
        BuyerMasterService
    ],
    entryComponents: [
    ]
})
export class BuyerMasterModule { }