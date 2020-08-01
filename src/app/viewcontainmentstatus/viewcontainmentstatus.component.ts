import { Component, OnInit } from '@angular/core';
import { SmartserviceService } from '../smartservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-viewcontainmentstatus',
  templateUrl: './viewcontainmentstatus.component.html',
  styleUrls: ['./viewcontainmentstatus.component.css']
})
export class ViewcontainmentstatusComponent implements OnInit {

  location :any;
  constructor(private service : SmartserviceService,private toster: ToastrService) { 
    
  }

  ngOnInit(): void {

    
  }
ShowSuccess(){ this.toster.success("SAFE "," ",{timeOut:4000}); } 
  ShowError(){ this.toster.error("RED ZONE "," ",{timeOut:2000}); }
  ShowWarning(){ this.toster.warning("ORANGE ZONE "," ",{timeOut:4000}); }
check():void{
  if(this.location === 'Hyderabad' || this.location=== 'Medchal' || this.location==='Rangareddy' || this.location==='Asifabad' || this.location==='Suryapet'){
    this.ShowError();

}else if(this.location==='Karimnagar' || this.location==='Mahaboobnagar'||this.location==='Medak'||this.location==='Nalgonda'||this.location==='Khammam'||this.location==='Adilabad'||this.location==='Warangal Urban'
||this.location==='Nirmal'||this.location==='Narayanpet'||this.location==='Bhadradri'||this.location==='Vikarabad'){
this.ShowWarning();

}else{
  this.ShowSuccess();
}
}
  
}
