import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ViewresidentsComponent } from './viewresidents/viewresidents.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { ViewcomplaintsComponent } from './viewcomplaints/viewcomplaints.component';
import { ViewrequestsComponent } from './viewrequests/viewrequests.component';


const routes: Routes = [{
  path: '', component: AdminComponent, children: [
    {
      path: 'viewresidents', component: ViewresidentsComponent
    },
    {
      path: 'maintenance', component: MaintenanceComponent
    },
    {
      path: 'viewcomplaints', component: ViewcomplaintsComponent
    },
    {
      path: 'viewrequests', component: ViewrequestsComponent
    }
    
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
