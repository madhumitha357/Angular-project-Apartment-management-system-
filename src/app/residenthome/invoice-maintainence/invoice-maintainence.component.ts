import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SmartserviceService } from 'src/app/smartservice.service';

@Component({
  selector: 'app-invoice-maintainence',
  templateUrl: './invoice-maintainence.component.html',
  styleUrls: ['./invoice-maintainence.component.css']
})
export class InvoiceMaintainenceComponent implements OnInit {
//object type resident
  maininvoice :any;
  myDate = new Date();
  mail :any;

  constructor(private toster: ToastrService,private service : SmartserviceService) { 
    this.mail = {to :'',sub: '', msg: ''}


  }

  ngOnInit(): void {
    
    this.maininvoice =JSON.parse(localStorage.getItem('res'));
    this.mail.to = this.maininvoice.email;
    this.mail.sub = "Payment Success";
    this.mail.msg= "Your payment was successfull.....\n Resident name : \n" +this.maininvoice.residentName+"\nApartment name :"+ this.maininvoice.apartment.apartmentName + "\nAmount : 25000 Rs" ;
    this.service.sendMail(this.mail).subscribe((result: any) => { console.log(result); } );

    this.ShowSuccess();

  }
  ShowSuccess(){ this.toster.success("Payment success "," ",{timeOut:4000}); } 
  ShowError(){ this.toster.error("Invalid Credentials "," ",{timeOut:2000}); }
  ShowWarning(){ this.toster.warning("Please select some other slot or date "," ",{timeOut:4000}); }


}
