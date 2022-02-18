import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';

// Component Declaration
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout.component';

@NgModule({
    imports: [
        LayoutRoutingModule,
        SharedModule
    ],
    declarations: [
        DashboardComponent,
        LayoutComponent
    ],
    providers: []
})
export class LayoutModule { }