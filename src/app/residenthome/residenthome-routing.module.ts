import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResidenthomeComponent } from './residenthome.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { BookingComponent } from './booking/booking.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { ParkingComponent } from './parking/parking.component';
import { PaymaintenanceComponent } from './paymaintenance/paymaintenance.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { AmenitypaymentComponent } from './amenitypayment/amenitypayment.component';
import { ProfileComponent } from './profile/profile.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvokeFunctionExpr } from '@angular/compiler';
import { InvoiceMaintainenceComponent } from './invoice-maintainence/invoice-maintainence.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [{
  path: '', component: ResidenthomeComponent, children: [
    {
      path: 'amenities', component: AmenitiesComponent
    },
    {
      path: 'booking', component: BookingComponent
    },
    {
      path: 'complaints', component: ComplaintsComponent
    },
    {
      path: 'parking', component: ParkingComponent
    },
    {
      path: 'paymaintenance', component: PaymaintenanceComponent
    },
    {
      path: 'mybooking', component: MybookingsComponent
    },
    {
      path: 'amenitypayment', component: AmenitypaymentComponent
    },
    {
      path: 'profile', component: ProfileComponent
    },
    {
      path: 'invoice', component: InvoiceComponent
    },
    {
      path: 'inm', component: InvoiceMaintainenceComponent
    },
    {
      path: 'home', component: HomepageComponent
    },
    
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResidenthomeRoutingModule { }
