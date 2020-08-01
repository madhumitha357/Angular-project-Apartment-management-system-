import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SmartserviceService } from '../smartservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any;
  constructor(private router: Router, private Service:  SmartserviceService,private toster: ToastrService) {
    this.user = {loginId: '', password: ''};
  }
  ngOnInit() {
  }
  // userLogin(): void {
  //   console.log('Inside user Login method...');
  //   console.log(this.user);
  // }
  ShowSuccess(){ this.toster.success("login success "," ",{timeOut:4000}); } 
  ShowError(){ this.toster.error("Invalid Credentials "," ",{timeOut:2000}); }
  ShowWarning(){ this.toster.warning("Please select some other slot or date "," ",{timeOut:4000}); }

  loginSubmit(loginForm: any): void {
    if (loginForm.loginId === 'admin' && loginForm.password === 'admin') {
      this.Service.setUesrLoggedIn();
      //alert('valid success')
      this.ShowSuccess();
      this.router.navigate(['admin']);


    } else {
      //alert('Invalid Credentials..');
      this.ShowError();
    }
    console.log(loginForm);
  }

}

