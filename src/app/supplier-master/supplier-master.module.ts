import { NgModule } from '@angular/core';
import { SupplierMasterRoutingModule } from './supplier-master-routing.module';
import { SharedModule } from '../shared/shared.module';

//Component
import { SupplierMasterComponent } from './supplier-master.component';

//Service

@NgModule({
    imports: [
        SupplierMasterRoutingModule,
        SharedModule
    ],
    declarations: [
        SupplierMasterComponent
    ],
    providers: [

    ]
})
export class SupplierMasterModule { }