import { Injectable } from '@angular/core';
import { flatten } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SmartserviceService {
  private isUserLogged:any;
  public message : String;
  public loginId : String;
  public residentId : number;
  constructor(private httpClient : HttpClient) {
    this.isUserLogged=false;

   }
   setUesrLoggedIn():void{
    this.isUserLogged=true;
  }
  setUesrLoggedOut():void{
   this.isUserLogged=false;
 }
  getUserLogged():any{
    return this.isUserLogged;

  }
  getCountriesList():any{

    return this.httpClient.get('https://restcountries.eu/rest/v2/all');

   }
   getCovidList():any{

    return this.httpClient.get('https://api.covid19india.org/state_district_wise.json');

   }
   registerResident(resident:any){
    return this.httpClient.post('RESTAPI/webapi/myresource/registerResident' , resident);

   }
   registerRequest(request:any){
    return this.httpClient.post('RESTAPI/webapi/myresource/registerRequest' , request);

   }
   getAllApartments():any{
    return this.httpClient.get('RESTAPI/webapi/myresource/getAllApartments');

   }
   getAllAmenities():any{
    return this.httpClient.get('RESTAPI/webapi/myresource/getAllAmenities');

   }
   getResById(loginId: any) {
    return this.httpClient.get('RESTAPI/webapi/myresource/getResidentByLoginId/' + loginId);
   }
   getAllResidents(): any{
    return this.httpClient.get('RESTAPI/webapi/myresource/getAllResidents');
  }
  getAllPayments(): any{
    return this.httpClient.get('RESTAPI/webapi/myresource/getAllPayments');
  }
  getmessage():any{
    return this.message;
  }
  
  getAllComplaints(): any{
    return this.httpClient.get('RESTAPI/webapi/myresource/getAllComplaints');
  }
  getAllRequests(): any{
    return this.httpClient.get('RESTAPI/webapi/myresource/getAllRequests');
  }
  getAllSlots(): any{
    return this.httpClient.get('RESTAPI/webapi/myresource/getAllSlots');
  }
  getAllBookings(): any{
    return this.httpClient.get('RESTAPI/webapi/myresource/getAllBookings');
  }
  getLastBooking(): any{
    return this.httpClient.get('RESTAPI/webapi/myresource/lastbooking');
  }
  registerComplaint(complaint:any){
    return this.httpClient.post('RESTAPI/webapi/myresource/registerComplaint' , complaint);

   }
   bookAmenity(booking : any){
    return this.httpClient.post('RESTAPI/webapi/myresource/bookAmenity' , booking);

   }
   getBookingById(bookingId: any) {
    return this.httpClient.get('RESTAPI/webapi/myresource/getBookingById/' + bookingId);
   }
   getloginId(){
     return this.loginId;

   }
   getResidentId(){
     return this.residentId;
   }
   getPaidList(){
    return this.httpClient.get('RESTAPI/webapi/myresource/getPaidList');
  }
  deleteReq(request: any) {
    return this.httpClient.delete('RESTAPI/webapi/myresource/deleteReq/' + request.requestId);
   }

   sendMail(mail:any){
    return this.httpClient.post('RESTAPI/webapi/myresource/sendMail' , mail);
   }
   update(editObject: any) {
    return this.httpClient.put('RESTAPI/webapi/myresource/update', editObject);
   }
  
}
