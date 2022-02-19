import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './shared/login/login.component';
import { BranchSelectionComponent } from './shared/branch-selection/branch-selection.component';
import { LayoutComponent } from './shared/layout/layout.component';
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
    component: LayoutComponent
  },
  {
    path: 'master',
    loadChildren: () => import('./master/master.module').then(m => m.MasterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
