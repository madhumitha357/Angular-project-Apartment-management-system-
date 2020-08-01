import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

import { ResidenthomeRoutingModule } from './residenthome-routing.module';
import { AmenitiesComponent } from './amenities/amenities.component';
import { ParkingComponent } from './parking/parking.component';
import { BookingComponent } from './booking/booking.component';
import { PaymaintenanceComponent } from './paymaintenance/paymaintenance.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { AmenitypaymentComponent } from './amenitypayment/amenitypayment.component';
import { ReactiveFormsModule } from '@angular/forms'
import { ToastrModule } from 'ngx-toastr';
import { ProfileComponent } from './profile/profile.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceMaintainenceComponent } from './invoice-maintainence/invoice-maintainence.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [AmenitiesComponent, ParkingComponent, BookingComponent, PaymaintenanceComponent, ComplaintsComponent, MybookingsComponent, AmenitypaymentComponent, ProfileComponent, InvoiceComponent, InvoiceMaintainenceComponent, HomepageComponent],
  imports: [
    FormsModule,
    CommonModule,
    ResidenthomeRoutingModule,
    ReactiveFormsModule ,

 ToastrModule.forRoot(),
  ]
})
export class ResidenthomeModule { }
