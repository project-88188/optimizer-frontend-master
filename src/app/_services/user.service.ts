import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BASE_URL } from '../_providers/global-url';

const API_URL = BASE_URL + '/server/contents/';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient) { }

    getUserContent(userid:any,username:any): Observable<any> {

  const _httpOptions = {
      headers: new HttpHeaders({ 
          'Content-Type': 'application/json',
          "user-id":[userid],
          "username":[username],
      })
  };

  return this.http.get(API_URL + 'user',_httpOptions);
  }

    getPublicBoard(userid:any,username:any): Observable<any> {

  const _httpOptions = {
      headers: new HttpHeaders({ 
          'Content-Type': 'application/json',
          "user-id":[userid],
          "username":[username],
      })
  };

  return this.http.get(API_URL + 'all', _httpOptions);
  }
    
    getModeratorBoard(userid:any,username:any): Observable<any> {

      const _httpOptions = {
          headers: new HttpHeaders({ 
              'Content-Type': 'application/json',
              "user-id":[userid],
              "username":[username],
          })
      };
    
  return this.http.get(API_URL + 'mod', _httpOptions);
  }
    
    getAdminBoard(userid:any,username:any): Observable<any> {

      const _httpOptions = {
          headers: new HttpHeaders({ 
              'Content-Type': 'application/json',
              "user-id":[userid],
              "username":[username],
          })
      };
      
  return this.http.get(API_URL + 'admin', _httpOptions);
  }

}
