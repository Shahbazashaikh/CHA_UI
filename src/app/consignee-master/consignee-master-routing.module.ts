import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsigneeMasterComponent } from './consignee-master.component';

const routes: Routes = [
    {
        path: '',
        component: ConsigneeMasterComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConsigneeMasterRoutingModule { }