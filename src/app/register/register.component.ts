import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {
    username: null,
    email: null,
    password: null,
    confirmpassword:null,
    supervisorname:null
  };

 
  isSuccessful = false;
  isSignUpFailed = false;

  errorMessage = '';

  constructor(
    private authService: AuthService, 
    private tokenStorage: TokenStorageService,
    private router: Router) {}

  ngOnInit(): void {

  }

  onSubmit(): void {

   
    const { username, email, password, supervisorname } = this.form;
    
    this.authService.register(username, email, password, supervisorname).subscribe(
      data => {
       
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
  
        this.isSuccessful = true;
        this.isSignUpFailed = false;

        console.log(data.message);
        this.reloadUser();

      },
      err => {

        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        this.isSuccessful = false;

        console.log(this.errorMessage);
        this.reloadSignUp();

      }
    );
  }

  reloadSignUp(): void {
    setTimeout(() => {
      window.location.reload();
    }, 5000);
  };

  reloadUser(): void {
    setTimeout(() => {
      this.router.navigateByUrl('user')
      .then(() => {
        window.location.reload();
      });
    }, 5000);
  };
}
