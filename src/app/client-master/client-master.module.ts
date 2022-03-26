import { NgModule } from '@angular/core';
import { ClientMasterRoutingModule } from './client-master.routing.module';
import { ClientMasterComponent } from './client-master.component';
import { SharedModule } from '../shared/shared.module';
import { InsertUpdateComponent } from './insert-update/insert-update.component';
import { ClientMasterService } from './client-master.service';

@NgModule({
    imports: [
        ClientMasterRoutingModule,
        SharedModule
    ],
    declarations: [
        ClientMasterComponent,
        InsertUpdateComponent
    ],
    providers: [
        ClientMasterService
    ],
    entryComponents: [
        InsertUpdateComponent
    ]
})
export class ClientMasterModule { }