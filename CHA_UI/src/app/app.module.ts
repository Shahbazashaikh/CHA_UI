import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';

// Services
import { LoaderService } from './shared/services/loader.service';
import { HttpService } from './shared/services/http.service';
import { SupplierMasterComponent } from './master/supplier-master/supplier-master.component';
import { ConsigneeMasterComponent } from './master/consignee-master/consignee-master.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    SupplierMasterComponent,
    ConsigneeMasterComponent
  ],
  providers: [
    LoaderService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
