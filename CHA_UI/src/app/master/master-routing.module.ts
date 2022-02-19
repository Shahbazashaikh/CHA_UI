import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsigneeMasterComponent } from './consignee-master/consignee-master.component'


const routes: Routes = [
    {
        path: 'supplier',
        component: ConsigneeMasterComponent
    },
    {
        path: 'consignee',
        component: ConsigneeMasterComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MasterRoutingModule { }