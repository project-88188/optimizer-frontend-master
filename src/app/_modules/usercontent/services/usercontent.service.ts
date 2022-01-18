import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/app/_providers/global-url';

const _httpOptions = {
  headers:  new HttpHeaders()
  .append('Content-Type', ['application/json'])
  .append('Accept', ['application/json'])
 
};

const CONTENT_API = BASE_URL + '/server/contents';

@Injectable({
  providedIn: 'root'
})

export class UsercontentService {

  constructor(private http: HttpClient) { }


  fineByPk(id:any): Observable<any> {
    return   this.http.get(`${CONTENT_API}/find/${id}`,_httpOptions);
  }

  find(search:any): Observable<any> {
  
    return   this.http.post(`${CONTENT_API}/find`,search,_httpOptions);
  }

  update(id:any,usercontent:any): Observable<any> {

    return   this.http.put(`${CONTENT_API}/update/${id}`,usercontent,_httpOptions);
  }
  
}
