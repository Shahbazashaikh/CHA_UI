import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CommonAppModule } from './shared/common.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';

// Services
import { LoaderService } from './shared/services/loader.service';
import { HttpService } from './shared/services/http.service';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonAppModule,
    SharedModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    LoaderService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
