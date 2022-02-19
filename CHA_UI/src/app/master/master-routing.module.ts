import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsigneeMasterComponent} from './consignee-master/consignee-master.component'


const routes: Routes = [
    {
        path: '',
        component: ConsigneeMasterComponent
    },
    {
        path: 'Consignee-Master',
        component: ConsigneeMasterComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MasterRoutingModule { }