import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';

// Component Declaration
import { LogInComponent } from './login/login.component';
import { BranchSelectionComponent } from './branch-selection/branch-selection.component';
import { DashboardComponent } from './dashboard/dashboard.component';

//Service Declaration
import { AuthenticationService } from './login/authentication.service';

@NgModule({
    imports: [
        LayoutRoutingModule,
        SharedModule
    ],
    declarations: [
        BranchSelectionComponent,
        DashboardComponent,
        LogInComponent
    ],
    providers: [
        AuthenticationService
    ]
})
export class LayoutModule { }