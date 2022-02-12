import { NgModule } from '@angular/core';
import { CommonAppModule } from './common.module';

// Component
import { LogInComponent } from './login/login.component';

// Services
import { AuthenticationService } from './login/authentication.service';

@NgModule({
    imports: [
        CommonAppModule
    ],
    declarations: [
        LogInComponent
    ],
    providers: [
        AuthenticationService
    ],
    exports: [
        LogInComponent
    ]
})
export class SharedModule { }