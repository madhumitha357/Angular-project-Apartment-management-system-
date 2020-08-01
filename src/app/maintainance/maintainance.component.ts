import { Component, OnInit } from '@angular/core';
import { SmartserviceService } from '../smartservice.service';

@Component({
  selector: 'app-maintainance',
  templateUrl: './maintainance.component.html',
  styleUrls: ['./maintainance.component.css']
})
export class MaintainanceComponent implements OnInit {

  payments:any;
  noofresidents:number;
  
  constructor(private service:SmartserviceService) { }

  ngOnInit(): void {
    this.service.getAllPayments().subscribe((data: any) => {console.log(data); this.payments = data; });

    this.noofresidents = Object.keys(this.payments).length;
    console.log(this.noofresidents)
  }

}
