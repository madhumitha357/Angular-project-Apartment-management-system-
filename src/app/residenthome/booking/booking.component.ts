import { Component, OnInit } from '@angular/core';
import { SmartserviceService } from 'src/app/smartservice.service';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr'; 

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  token:any;
  booking:any;
  amenities : any;
  slots :any;
  amenityname:String;
  mybook : any;
  mybooki:any;
  rid:any;
  invoice : any;
  constructor(private service : SmartserviceService,private router : Router,private toster: ToastrService) {
    
  
    this.booking = {bookingId: '', date: '', startingtime: '', endingtime: '',
    amenity: {amenityId: '', amenityName: '', charge: '',timing:''},
    slot :{slotId:'',status:'',slotName:''},
    resident : {residentId: '', residentName: '', gender: '', mobile: '',loginId:'' , password:'',
    apartment: {apartmentId: '', apartmentName: '', location: ''}}}
    
   }
   handler:any = null;

  ngOnInit(): void {
    this.service.getAllAmenities().subscribe((data: any) => {console.log(data); this.amenities = data; });
    this.service.getAllSlots().subscribe((data: any) => {console.log(data); this.slots = data; });
    this.rid = this.service.getResidentId();
    this.booking.resident.residentId = this.rid;
    this.loadStripe();


  }
  ShowSuccess( ){ this.toster.success("Payment success "," ",{timeOut:4000}); } 
  ShowError( ){ this.toster.error("Invalid Credentials "," ",{timeOut:2000}); }
  ShowWarning( ){ this.toster.warning("Please select some other slot or date "," ",{timeOut:4000}); }

  book(bookingForm: any): void {
    this.service.getLastBooking().subscribe((data: any) => {console.log(data); this.mybooki = data; });


      this.service.bookAmenity(this.booking).subscribe((result: any) => { console.log(result); } );
      console.log(this.booking);

    
  }
  getLastBooking():void{
    this.service.getLastBooking().subscribe((data: any) => {console.log(data); this.mybook = data; });
    if(this.mybooki.bookingId != this.mybook.bookingId){
      localStorage.setItem('invoice',JSON.stringify(this.mybook));
      this.router.navigate(['residenthome/amenitypayment']);


    }else{
      this.ShowWarning();
      this.router.navigate(['residenthome/amenities']);

    }

  }
   
  loadStripe() {
     
      if(!window.document.getElementById('stripe-script')) {
        var s = window.document.createElement("script");
        s.id = "stripe-script";
        s.type = "text/javascript";
        s.src = "https://checkout.stripe.com/checkout.js";
        s.onload = () => {
          this.handler = (<any>window).StripeCheckout.configure({
            key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
            locale: 'auto',
            token: function (token: any) {
              // You can access the token ID with `token.id`.
              // Get the token ID to your server-side code for use.
              console.log(token)
              alert('Payment Success!!');
            }
          });
        }
         
        
        window.document.body.appendChild(s);
      }
    }
  pay(amount) {    
   
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        this.ShowSuccess();
        this.token = token;
        
      }
    });
  
    handler.open({
      name: 'Payment',
      description: '2 widgets',
      amount: amount * 100
    });
  
  }

}
