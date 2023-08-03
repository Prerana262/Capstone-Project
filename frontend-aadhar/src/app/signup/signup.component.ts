import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  loginRef = new FormGroup({
    emailid: new FormControl(),
    password: new FormControl(),
    typeOfUser: new FormControl(),
  });
  msg: string = '';

  constructor(public ls: LoginService) {}

  ngOnInit(): void {}
  signUp() {
    let login = this.loginRef.value;
    console.log(login);
    if (login.typeOfUser === 'admin') {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#&])[A-Za-z\d@#&]{8,}$/;
      // Password should have at least: One Uppercase, one lowercase, one special character (@,#,&), and one number.
      if (passwordRegex.test(login.password)) {
        this.ls.signUp(login).subscribe({
          next: (result: any) => (this.msg = result),
          error: (error: any) => console.log(error),
          complete: () => console.log('completed'),
        });

        // Password does not meet the requirements.
        // You can handle the validation failure here, for example, display an error message to the user.
      } else {
        alert(
          'Password should have at least: One Uppercase, one lowercase, one special character (@,#,&), and one number.'
        );
      }
    }
    if (login.typeOfUser === 'user') {
      const passwordRegex = /^\d+$/;
      // Password should consist of only digits
      if (passwordRegex.test(login.password)) {
        this.ls.signUp(login).subscribe({
          next: (result: any) => (this.msg = result),
          error: (error: any) => console.log(error),
          complete: () => console.log('completed'),
        });
      } else {
        alert('The password should consist of only digits.');
      }
    }

    // this.ls.signUp(login).subscribe({
    //   next: (result: any) => (this.msg = result),
    //   error: (error: any) => console.log(error),
    //   complete: () => console.log('completed'),
    // });
  }
}
