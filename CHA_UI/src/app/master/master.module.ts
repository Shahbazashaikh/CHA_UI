import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
// Component Declaration
import { ConsigneeMasterComponent} from './consignee-master/consignee-master.component';


@NgModule({
    imports: [
        ConsigneeMasterComponent,
        SharedModule
    ],
    declarations: [
        ConsigneeMasterComponent
    ],
    providers: [
      
    ]
})
export class MasterModule { }