import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/app/_providers/global-url';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

const CONTENT_API = BASE_URL + '/server/contents/';

@Injectable({
  providedIn: 'root'
})

export class UsercontentService {

  constructor(private http: HttpClient,
    private tokenStorege:TokenStorageService) { }

  fineByPk(id:any): Observable<any> {
  
    const httpOptions = {
      headers:  new HttpHeaders()
      .append('x-access-token',[''+this.tokenStorege.getToken()])
      .append('Content-Type', ['application/json'])
      .append('Accept', ['application/json'])
     
    };

    return   this.http.get(`${CONTENT_API}find/${id}`,httpOptions);
  }

  find(search:any): Observable<any> {
  
    const httpOptions = {
      headers:  new HttpHeaders()
      .append('x-access-token',[''+this.tokenStorege.getToken()])
      .append('Content-Type', ['application/json'])
      .append('Accept', ['application/json'])
     
    };

    return   this.http.post(`${CONTENT_API}find`,search,httpOptions);
  }

  update(id:any,usercontent:any): Observable<any> {
  
    const httpOptions = {
      headers:  new HttpHeaders()
      .append('x-access-token',[''+this.tokenStorege.getToken()])
      .append('Content-Type', ['application/json'])
      .append('Accept', ['application/json'])
     
    };

    return   this.http.put(`${CONTENT_API}update/${id}`,usercontent,httpOptions);
  }
  
}
