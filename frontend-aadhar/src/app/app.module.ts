import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AddAadharComponent } from './add-aadhar/add-aadhar.component';
import { AdminAadharViewComponent } from './admin-aadhar-view/admin-aadhar-view.component';
import { UpdateAadharComponent } from './update-aadhar/update-aadhar.component';
import { DeleteAadharComponent } from './delete-aadhar/delete-aadhar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminAadharVerificationComponent } from './admin-aadhar-verification/admin-aadhar-verification.component';
import { AdminAadharApproveComponent } from './admin-aadhar-approve/admin-aadhar-approve.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdmindashboardComponent,
    UserdashboardComponent,
    AddAadharComponent,
    AdminAadharViewComponent,
    UpdateAadharComponent,
    DeleteAadharComponent,
    HomepageComponent,
    NavbarComponent,
    AdminAadharVerificationComponent,
    AdminAadharApproveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
