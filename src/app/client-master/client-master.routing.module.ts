import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientMasterComponent } from './client-master.component';
import { InsertUpdateComponent } from './insert-update/insert-update.component';

const routes: Routes = [
    {
        path: '',
        component: ClientMasterComponent
    },
    {
        path: 'add',
        component: InsertUpdateComponent
    },
    {
        path: 'edit',
        component: InsertUpdateComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientMasterRoutingModule { }