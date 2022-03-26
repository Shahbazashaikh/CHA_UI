import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsigneeSupplierMasterComponent } from './consignee-supplier-master.component';

const routes: Routes = [
    {
        path: '',
        component: ConsigneeSupplierMasterComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConsigneeSuppplierMasterRoutingModule { }