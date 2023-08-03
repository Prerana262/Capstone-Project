import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css'],
})
export class AdmindashboardComponent implements OnInit {
  adminDetails: string = '';

  constructor() {}

  ngOnInit(): void {
    let obj = sessionStorage.getItem('adminDetails');
    if (obj != null) {
      this.adminDetails = obj;
    }
  }
}
