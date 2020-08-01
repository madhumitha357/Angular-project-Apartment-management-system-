import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ViewresidentsComponent } from './viewresidents/viewresidents.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { ViewcomplaintsComponent } from './viewcomplaints/viewcomplaints.component';
import { ViewrequestsComponent } from './viewrequests/viewrequests.component';


@NgModule({
  declarations: [ViewresidentsComponent, MaintenanceComponent, ViewcomplaintsComponent, ViewrequestsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
