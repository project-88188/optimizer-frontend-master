import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../_providers/global-url';

//const ip = window.location.origin // this will give you the ip:port
//if you just want the ip or hostname you can use window.location.hostname
const AUTH_API = BASE_URL + '/server/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string, supervisorkey:string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password,
      supervisorkey
    }, httpOptions);
  }

  logout():Observable<any> {
    return this.http.get(AUTH_API + 'signout', httpOptions);
  }

}


