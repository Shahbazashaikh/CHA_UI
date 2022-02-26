import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './shared/login/login.component';
import { BranchSelectionComponent } from './shared/branch-selection/branch-selection.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { AuthGuardService } from './shared/services';

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
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'master/consignee',
    loadChildren: () => import('./consignee-master/consignee-master.module').then(m => m.ConsigneeMasterModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'master/supplier',
    loadChildren: () => import('./supplier-master/supplier-master.module').then(m => m.SupplierMasterModule),
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
