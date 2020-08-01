import { Component, OnInit } from '@angular/core';
import { AttributeMarker } from '@angular/compiler/src/core';
import { SmartserviceService } from 'src/app/smartservice.service';

@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.css']
})
export class MybookingsComponent implements OnInit {

  bookings:any;
  constructor(private service : SmartserviceService) { }

  ngOnInit(): void {
    this.service.getAllBookings().subscribe((data: any) => {console.log(data); this.bookings = data; });

  }

}
