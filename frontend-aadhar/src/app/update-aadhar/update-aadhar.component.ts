import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AadharService } from '../aadhar.service';
import { Aadhar } from '../aadhar';

@Component({
  selector: 'app-update-aadhar',
  templateUrl: './update-aadhar.component.html',
  styleUrls: ['./update-aadhar.component.css'],
})
export class UpdateAadharComponent implements OnInit {
  msg: string = '';
  aadhar: Array<Aadhar> = [];
  constructor(public as: AadharService) {}

  ngOnInit(): void {}

  aadharRef = new FormGroup({
    cid: new FormControl(),
    cname: new FormControl(),
    dob: new FormControl(),
    address: new FormControl(),
    gender: new FormControl(),
    emailid: new FormControl(),
    number: new FormControl(),
  });

  updateAadhar(aadhar: any) {
    this.aadharRef.patchValue(aadhar);
  }

  updateAadharFromDb() {
    let aadhar = this.aadharRef.value;
    this.as.updateAadhar(aadhar).subscribe({
      next: (result: any) => console.log(result),
      error: (error: any) => console.log(error),
      complete: () => {
        this.msg =
          'Your Details Submitted Succesfully and Send for Verification';
      },
    });
  }
}
