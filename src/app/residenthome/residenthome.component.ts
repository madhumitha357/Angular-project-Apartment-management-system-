import { Component, OnInit } from '@angular/core';
import { SmartserviceService } from '../smartservice.service';

@Component({
  selector: 'app-residenthome',
  templateUrl: './residenthome.component.html',
  styleUrls: ['./residenthome.component.css']
})
export class ResidenthomeComponent implements OnInit {
loginId:String;
  constructor(private service : SmartserviceService) { }

  ngOnInit(): void {
    this.loginId=this.service.getloginId();

  }

}
