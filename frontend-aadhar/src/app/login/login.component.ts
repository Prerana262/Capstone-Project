import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginRef = new FormGroup({
    emailid: new FormControl(),
    password: new FormControl(),
    typeOfUser: new FormControl(),
  });
  msg: string = '';

  constructor(public ls: LoginService, public router: Router) {}

  ngOnInit(): void {}

  signIn() {
    const formValue = this.loginRef.value; // Get the form values as a partial representation
    const login: Login = new Login(
      formValue.emailid,
      formValue.password,
      formValue.typeOfUser
    );

    console.log(login);

    this.ls.signIn(login).subscribe({
      next: (result: any) => {
        console.log(result);
        if (result == 'Admin sucessfully login') {
          sessionStorage.setItem('adminDetails', login.emailid);
          this.router.navigate(['adminHome']);
        } else if (result == 'User successfully login') {
          sessionStorage.setItem('userDetails', login.emailid);
          this.router.navigate(['userHome']);
        } else {
          this.msg = result;
        }
      },
      error: (error: any) => console.log(error),
      complete: () => console.log('completed'),
    });
  }
}
