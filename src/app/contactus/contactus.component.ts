import { Component, OnInit } from '@angular/core';
import { SmartserviceService } from '../smartservice.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  request : any;
 
  constructor(private service : SmartserviceService,private toster : ToastrService  ) { 
    this.request = {requestId :'',firstName: '', lastName: '', email: '', subject: ''}
  }

  ngOnInit(): void {
   
  }

  ShowSuccess(){ this.toster.success("Registration success "," ",{timeOut:4000}); }
  register(requestForm: any): void {
    this.service.registerRequest(this.request).subscribe((result: any) => { console.log(result); } );
    console.log(this.request);
    //alert('registration success')
    this.ShowSuccess();
  }
  
}
