import { Component, OnInit } from '@angular/core';
import { SmartserviceService } from 'src/app/smartservice.service';

@Component({
  selector: 'app-viewrequests',
  templateUrl: './viewrequests.component.html',
  styleUrls: ['./viewrequests.component.css']
})
export class ViewrequestsComponent implements OnInit {

  requests :any;
  constructor(private service : SmartserviceService) { }

  ngOnInit(): void {
    this.service.getAllRequests().subscribe((result: any) => { console.log(result); this.requests= result; });

  }
  deleteReq(request: any) {
    this.service.deleteReq(request).subscribe((result: any) => {
  const i = this.requests.findIndex((element) => {return element.requestId === request.requestId;
      });
  this.requests.splice(i , 1);
    });
  }

}
