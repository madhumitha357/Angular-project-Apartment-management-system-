import { Component, OnInit } from '@angular/core';
import { SmartserviceService } from '../smartservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-showresidents',
  templateUrl: './showresidents.component.html',
  styleUrls: ['./showresidents.component.css']
})
export class ShowresidentsComponent implements OnInit {
  residents: any;

  constructor(private service : SmartserviceService) { }

  ngOnInit(): void {
    this.service.getAllResidents().subscribe((result: any) => { console.log(result); this.residents = result; });

  }

}
