import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './shared/services';
import { LogInComponent } from './login/login/login.component';
import { BranchSelectionComponent } from './login/branch-selection/branch-selection.component';
import {ConsigneeMasterComponent} from './master/consignee-master/consignee-master.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    component: LogInComponent
  },
  {
    path: 'branch-selection',
    component: BranchSelectionComponent
  },
  {
    path: 'Consignee-selection',
    component: ConsigneeMasterComponent
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
