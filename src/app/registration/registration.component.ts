import { Component, OnInit } from '@angular/core';
import { SmartserviceService } from '../smartservice.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public resident: any
  public countries : any
  public apartments : any;
 
  public covid : any;
  constructor(private service:SmartserviceService,private router: Router,private toster: ToastrService) { 
    this.resident = {residentId: '', residentName: '', gender: '', mobile: '',loginId:'' , password:'',
    apartment: {apartmentId: '', apartmentName: '', location: ''
    }}
  }

  ngOnInit(): void {
    this.service.getCountriesList().subscribe((data : any) => {console.log(data); this.countries=data;});
    this.service.getAllApartments().subscribe((data: any) => {console.log(data); this.apartments = data; });

  }

  ShowSuccess(){ this.toster.success("Registration success "," ",{timeOut:4000}); } 
  ShowError(){ this.toster.error("Invalid Credentials "," ",{timeOut:2000}); }
  ShowWarning(){ this.toster.warning("Please select some other slot or date "," ",{timeOut:4000}); }

  register(registerForm: any): void {
    this.service.registerResident(this.resident).subscribe((result: any) => { console.log(result); } );
    console.log(this.resident);
    //alert('registration success')
    this.ShowSuccess();
    this.router.navigate(['residentlogin']);
  }

    
  

}
