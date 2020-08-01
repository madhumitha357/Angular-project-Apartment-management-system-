import { Component, OnInit } from '@angular/core';
import { SmartserviceService } from '../smartservice.service';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr'; 


@Component({
  selector: 'app-residentlogin',
  templateUrl: './residentlogin.component.html',
  styleUrls: ['./residentlogin.component.css']
})
export class ResidentloginComponent implements OnInit {

  resident: any;
  loginId : String;
  password:String;
  success : any;
  res : any;
  constructor(private router: Router,private service: SmartserviceService,private toster: ToastrService) { 
  }

  ngOnInit(): void {
  
  }
  ShowSuccess( ){ this.toster.success("login successfully "," ",{timeOut:4000}); } 
  ShowError( ){ this.toster.error("Invalid Credentials "," ",{timeOut:4000}); } 
  getResById(){
    this.service.getResById(this.loginId).subscribe((result: any) => {console.log(result); this.resident = result; });
    this.service.loginId=this.loginId;
    this.service.residentId=this.resident.residentId;

    if(this.resident===null){
      this.ShowError();
    }
    else{

    if (this.loginId === this.resident.loginId && this.password === this.resident.password) {
      this.service.setUesrLoggedIn();
     // this.router.navigate(['aboutus']);
      this.success=this.resident;
      localStorage.setItem('res',JSON.stringify(this.resident))

      this.router.navigate(['residenthome/home']);
      this.ShowSuccess();

    } else {
      this.ShowError();
    }
  }

  }
  loginSubmit(loginForm: any): void {
    if (loginForm.loginId === this.resident.loginId && loginForm.password === this.resident.password) {
      this.service.setUesrLoggedIn();
      this.router.navigate(['aboutus']);
    } else {
      this.ShowError();
    }
    console.log(loginForm);
  }
 
}
