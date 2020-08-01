import { Component, OnInit } from '@angular/core';
import { SmartserviceService } from 'src/app/smartservice.service';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {
  payments:any;
  noofresidents:number;
  paid : number;
  constructor(private service:SmartserviceService) {

   }

  ngOnInit(): void {

    this.service.getAllPayments().subscribe((data: any) => {console.log(data); this.payments = data; });
    this.service.getPaidList().subscribe((data: any) => {console.log(data); this.paid = data; });

    this.noofresidents = Object.keys(this.payments).length;
    console.log(this.noofresidents)
    
    
  }
  msg(){
    
  }


}
