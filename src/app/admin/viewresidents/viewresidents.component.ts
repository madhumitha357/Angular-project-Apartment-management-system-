import { Component, OnInit } from '@angular/core';
import { SmartserviceService } from 'src/app/smartservice.service';

@Component({
  selector: 'app-viewresidents',
  templateUrl: './viewresidents.component.html',
  styleUrls: ['./viewresidents.component.css']
})
export class ViewresidentsComponent implements OnInit {

  residents:any;
  constructor(private service : SmartserviceService) { }

  ngOnInit(): void {
    this.service.getAllResidents().subscribe((data: any) => {console.log(data); this.residents = data; });

   
  }

}
