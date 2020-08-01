import { Component, OnInit } from '@angular/core';
import { SmartserviceService } from '../smartservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  mail : any;
 
  constructor(private service : SmartserviceService,private toster : ToastrService  ) { 
    this.mail = {to :'',sub: '', msg: ''}
  }

  ngOnInit(): void {
   
  }

  ShowSuccess(){ this.toster.success("Registration success "," ",{timeOut:4000}); }
  register(mailForm: any): void {
    this.service.sendMail(this.mail).subscribe((result: any) => { console.log(result); } );
    console.log(this.mail);
    //alert('registration success')
    this.ShowSuccess();
  }
  
}
