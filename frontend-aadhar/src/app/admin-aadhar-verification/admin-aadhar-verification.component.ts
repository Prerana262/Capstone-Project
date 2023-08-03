import { Component, OnInit } from '@angular/core';
import { Aadhar } from '../aadhar';
import { AadharService } from '../aadhar.service';

@Component({
  selector: 'app-admin-aadhar-verification',
  templateUrl: './admin-aadhar-verification.component.html',
  styleUrls: ['./admin-aadhar-verification.component.css'],
})
export class AdminAadharVerificationComponent implements OnInit {
  aadhars: Aadhar[] = [];

  constructor(public as: AadharService) {}

  ngOnInit(): void {
    this.findAllAadhar();
  }

  findAllAadhar() {
    this.as.findAllAadhar().subscribe({
      next: (result: Aadhar[]) => (this.aadhars = result),
      error: (error: any) => console.log(error),
      complete: () => console.log('complete'),
    });
  }

  verifyAadhar(aadhar: Aadhar) {
    alert('Aadhar ' + aadhar.cid + ' verified !');
    let actionBool = !aadhar.verified;
    this.as.updateVerified(aadhar.cid, actionBool).subscribe({
      next: (response: any) => {
        // Handle the response after verification.
        console.log('Request verified:', response);
        alert(response);
        // Update the status of the verified Aadhar card in the local array.
      },
      error: (error: any) => console.log(error),
    });
  }
}
