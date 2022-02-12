import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { AuthenticationModel } from './authentication.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LogInComponent implements OnInit {
    model: AuthenticationModel = new AuthenticationModel();
    currentYear: number = 0;

    constructor(private authenticationService: AuthenticationService) { }

    ngOnInit(): void {
        this.currentYear = new Date().getFullYear();
    }

    onLogInClick() {
        if (!this.isValid())
            return;
        this.authenticationService.authenticateUser(this.model).subscribe(data => {
            console.log(data);
        });
    }

    isValid(): boolean {
        return this.model.userName == '' && this.model.password == '';
    }
}
