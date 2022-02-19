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
    component: LogInComponent,
    outlet: 'layout'
  },
  {
    path: 'branch-selection',
    component: BranchSelectionComponent,
    outlet: 'layout'
  },
  {
    path: 'dashboard',
    component: LayoutComponent,
    outlet: 'child'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
