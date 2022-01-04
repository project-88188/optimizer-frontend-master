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
    username: null,// new FormControl('', [Validators.required, Validators.email]),
    email: null,//new FormControl('', [Validators.required, Validators.minLength(5),Validators.maxLength(20)]),
    password: null,// FormControl('', [Validators.required, Validators.minLength(5),Validators.maxLength(20)]),
    supervisorname:null
  };

  confirmpassword:any;
  isSuccessful = false;
  isSignUpFailed = false;

  errorMessage = '';

  constructor(
    private authService: AuthService, 
    private tokenStorage: TokenStorageService,
    private router: Router) {}

  email = new FormControl('', [Validators.required, Validators.email]);
  emailgetErrorMessage() {
    this.email.setValue(this.form.email);
    if (this.email.hasError('required')) {
      return 'You must enter a value'; 
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  password = new FormControl('', [Validators.required, Validators.minLength(6),Validators.maxLength(20)]);
  passwordgetErrorMessage() {
    this.password.setValue(this.form.password);
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }

    if (this.password.hasError('maxLength')) {
      return 'Length is more than (20) charactor';
    }
    return this.password.hasError('minLength') ? 'Length is less than (6) charactor' : '';
  }
  
  passwordVerify  = new FormControl('',[Validators.required]);
  verifypasswordgetErrorMessage() {
    this.passwordVerify.setValue(this.confirmpassword);
    if (this.username.hasError('required')) {
      return 'You must enter a value';
    }

    return (this.passwordVerify.value==this.form.password)? '': 'Verify password is fail';
  }

  username = new FormControl('', [Validators.required, Validators.minLength(6),Validators.maxLength(20)]);
  usernamegetErrorMessage() {
    this.username.setValue(this.form.username);
    if (this.username.hasError('required')) {
      return 'You must enter a value';
    }

    if (this.username.hasError('maxLength')) {
      return 'Length is more than (20) charactor';
    }

    return this.username.hasError('minLength') ? 'Length is less than (6) charactor' : '';
  }

  ngOnInit(): void {

  }

  onSubmit(): void {

    const { username, email, password, supervisorname } = this.form;
    
    console.log(this.form);

    this.authService.register(username, email, password, supervisorname).subscribe(
      data => {
       
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
  
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.reloadUser();

      },
      err => {

        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        this.isSuccessful = false;
        this.reloadSignUp();

      }
    );
  }

  reloadSignUp(): void {
    setTimeout(() => {
      window.location.reload();
    }, 20000);
  };

  reloadUser(): void {
    setTimeout(() => {
      this.router.navigateByUrl('user')
      .then(() => {
        window.location.reload();
      });
    }, 2000);
  };
}
