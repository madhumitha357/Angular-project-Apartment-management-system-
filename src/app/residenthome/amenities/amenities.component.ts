import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-amenities',
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.css']
})
export class AmenitiesComponent implements OnInit {
 obj : any;
  booking:any;
  constructor() { 
    this.booking = {bookingId: '', date: '', startingtime: '', endingtime: '',
    amenity: {amenityId: '', amenityName: '', charge: '',timing:''
    },
    resident: {residentId: '', residentName: '', mobile: '',loginId:'',password:'',apartment:{apartmentId :'',apartmentName:'',location:''}
    }
  }
  }

  ngOnInit(): void {
  }
  showPopup() {
    
    jQuery('#bookingModel').modal('show');
  }
}
