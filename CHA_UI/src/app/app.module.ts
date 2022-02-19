import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './login/login/login.component';
import { BranchSelectionComponent } from './login/branch-selection/branch-selection.component';
import{ConsigneeMasterComponent} from './master/consignee-master/consignee-master.component';
// Services
import {
  AuthGuardService,
  CookieService,
  HttpService,
  LoaderService
} from './shared/services';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    LogInComponent,
    BranchSelectionComponent,
    ConsigneeMasterComponent
  ],
  providers: [
    AuthGuardService,
    CookieService,
    HttpService,
    LoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
