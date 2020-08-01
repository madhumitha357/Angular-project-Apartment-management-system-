import { Component, OnInit } from '@angular/core';
import { SmartserviceService } from 'src/app/smartservice.service';

@Component({
  selector: 'app-viewcomplaints',
  templateUrl: './viewcomplaints.component.html',
  styleUrls: ['./viewcomplaints.component.css']
})
export class ViewcomplaintsComponent implements OnInit {
complaints : any;
  constructor(private service:SmartserviceService) { }

  ngOnInit(): void {
    this.service.getAllComplaints().subscribe((result: any) => { console.log(result); this.complaints= result; });

  }

}
