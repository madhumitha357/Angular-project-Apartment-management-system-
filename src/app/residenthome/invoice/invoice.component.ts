import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  binvoice : any;
  constructor() { }

  ngOnInit(): void {
    this.binvoice =JSON.parse(localStorage.getItem('invoice'));
  }


}
