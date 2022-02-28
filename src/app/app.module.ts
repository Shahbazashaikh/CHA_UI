import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';

//Component
import { LogInComponent } from './shared/login/login.component';
import { BranchSelectionComponent } from './shared/branch-selection/branch-selection.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';

//Services
import {
  AuthGuardService,
  CookieService,
  DataStorageService,
  HttpService,
  LoaderService
} from './shared/services';
import { MessageService } from 'primeng/api';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    BranchSelectionComponent,
    DashboardComponent,
    LogInComponent,
    LayoutComponent,
    NavigationComponent
  ],
  providers: [
    AuthGuardService,
    CookieService,
    DataStorageService,
    HttpService,
    LoaderService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
