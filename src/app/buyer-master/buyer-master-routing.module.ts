import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BuyerMasterComponent} from './buyer-master.component';



const routes: Routes = [
    {
        path: '',
        component: BuyerMasterComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BuyerMasterRoutingModule { }