import { Component, OnInit } from '@angular/core';
import { SmartserviceService } from 'src/app/smartservice.service';

declare var jQuery: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  res : any;
  resident :any;
  editObject: any;

  constructor(private service :SmartserviceService) { 
    this.editObject = {residentId: '', residentName: '', gender: '', loginId: '' , imageurl: '', mobile: '', password: ''};

  }

  ngOnInit(): void {
    this.res = localStorage.getItem('res');
    this.resident = JSON.parse(this.res);
    console.log(this.resident)

  }
  showEditPopup(resident: any) {
    this.editObject = resident;

    jQuery('#Model').modal('show');
  }
  update() {
    this.service.update(this.editObject).subscribe();
    console.log(this.editObject);
  }
}
