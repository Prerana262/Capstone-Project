import { Component } from '@angular/core';
import { Aadhar } from '../aadhar';
import { AadharService } from '../aadhar.service';

@Component({
  selector: 'app-admin-aadhar-approve',
  templateUrl: './admin-aadhar-approve.component.html',
  styleUrls: ['./admin-aadhar-approve.component.css'],
})
export class AdminAadharApproveComponent {
  aadhars: Array<Aadhar> = [];
  constructor(public as: AadharService) {}

  ngOnInit(): void {
    this.findAllAadhar();
  }

  findAllAadhar() {
    this.as.findAllAadhar().subscribe({
      next: (result: any) => (this.aadhars = result),
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

  approveAadhar(aadhar: Aadhar) {
    alert('Aadhar ' + aadhar.cid + ' approved !');
    let actionBool = !aadhar.verified;
    this.as.updateApproved(aadhar.cid, actionBool).subscribe({
      next: (response: any) => {
        // Handle the response after approval.
        console.log('Request approved:', response);
        alert(response);
        // Update the status of the approved Aadhar card in the local array.
      },
      error: (error: any) => console.log(error),
    });
  }
}
