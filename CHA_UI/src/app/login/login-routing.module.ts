import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchSelectionComponent } from './branch-selection/branch-selection.component';
import { LogInComponent } from './login/login.component';

const routes: Routes = [
    {
        path: '',
        component: LogInComponent
    },
    {
        path: 'branch-selection',
        component: BranchSelectionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LogInRoutingModule { }