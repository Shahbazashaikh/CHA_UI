import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LogInRoutingModule } from './login-routing.module';

//Component
import { BranchSelectionComponent } from './branch-selection/branch-selection.component';
import { LogInComponent } from './login/login.component';

//Services
import { AuthenticationService } from './login/authentication.service';

@NgModule({
    imports: [
        LogInRoutingModule,
        SharedModule
    ],
    declarations: [
        BranchSelectionComponent,
        LogInComponent
    ],
    providers: [
        AuthenticationService
    ]
})
export class LogInModule { }