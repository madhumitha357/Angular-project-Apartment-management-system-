import { Component, OnInit } from '@angular/core';
import { SmartserviceService } from 'src/app/smartservice.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {

  complaint : any;
  rid:number;
  constructor(private service :SmartserviceService,private router:Router,private toster: ToastrService) { 
    this.complaint = {complaintId: '', complaintStatus: '', complaintmessage: '', 
    resident: {residentId: '', residentName: '', gender: '',mobile:'',loginId:'',password:'',
    apartment : {apartmentId:'',location:'',apartmentName:''}
    }}
  }

  ngOnInit(): void {
     this.rid = this.service.getResidentId();
     this.complaint.resident.residentId = this.rid;
  }
  ShowSuccess(){ this.toster.success("Complaint Sending success "," ",{timeOut:4000}); } 
  ShowError(){ this.toster.error("Invalid Credentials "," ",{timeOut:2000}); }
  ShowWarning(){ this.toster.warning("Please select some other slot or date "," ",{timeOut:4000}); }

registerComplaint(complaintForm: any): void {
    this.service.registerComplaint(this.complaint).subscribe((result: any) => { console.log(result); } );
    console.log(this.complaint);
    //alert('complaint sending success')
    this.ShowSuccess();

  }
 
}
