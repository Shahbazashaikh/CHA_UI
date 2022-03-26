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
    loadChildren: () => import('./consignee-supplier-master/consignee-supplier-master.module').then(m => m.ConsigneeSupplierMasterModule),
    data: { masterName: 'Consignee' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'master/supplier',
    loadChildren: () => import('./consignee-supplier-master/consignee-supplier-master.module').then(m => m.ConsigneeSupplierMasterModule),
    data: { masterName: 'Supplier' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'master/buyer',
    loadChildren: () => import('./buyer-master/buyer-master.module').then(m => m.BuyerMasterModule),
    data: { masterName: 'Buyer' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'master/client',
    loadChildren: () => import('./client-master/client-master.module').then(m => m.ClientMasterModule),
    data: { masterName: 'Client' },
    canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
