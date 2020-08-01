import { Component, OnInit } from '@angular/core';
import { SmartserviceService } from '../smartservice.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  showFiller = false;
  residents : any;
  payments : any;
  constructor(private service :SmartserviceService) {
 
   }

  ngOnInit(): void {
    //Toggle Click Function
    

  }
  viewresidents(): void{
    this.service.getAllResidents().subscribe((data: any) => {console.log(data); this.residents = data; });


    this.service.getAllResidents().unsubscribe();
  }
  viewpayments(): void{
    this.service.getAllPayments().subscribe((data: any) => {console.log(data); this.payments = data; });


    this.service.getAllResidents().unsubscribe();
  }

}

  