import { Component, OnInit } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-amenitypayment',
  templateUrl: './amenitypayment.component.html',
  styleUrls: ['./amenitypayment.component.css']
})
export class AmenitypaymentComponent implements OnInit {

  constructor(private toster: ToastrService,private router : Router) { }
  handler:any = null;
  mytoken:any;
  ngOnInit(): void {
    this.loadStripe();
  }
  ShowSuccess(){ this.toster.success("Payment success "," ",{timeOut:4000}); } 
  ShowError(){ this.toster.error("Invalid Credentials "," ",{timeOut:2000}); }
  ShowWarning(){ this.toster.warning("Please select some other slot or date "," ",{timeOut:4000}); }

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
     // this.ShowSuccess();
     alert(token.id)
     alert('Payment Success!!');

      this.mytoken=token;
      console.log(this.mytoken.id)

    }
  });

  handler.open({
    name: 'Payment Site',
    description: '2 widgets',
    amount: amount * 100
  });

}

getInvoice():void{

  this.router.navigate(['residenthome/invoice']);

}
}
