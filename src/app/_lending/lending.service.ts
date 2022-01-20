import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransectionService } from '../_modules/transection/services/transection.service';
import { BASE_URL } from '../_providers/global-url';

const _httpOptions = {
  headers:  new HttpHeaders()
  .append('Content-Type', ['application/json'])
  .append('Accept', ['application/json'])
  
};
const LENDING_API = BASE_URL + '/server/lending/';

@Injectable({
  providedIn: 'root'
})
export class LendingService {

  constructor(private tranService:TransectionService,
    private httpclient:HttpClient) { }

  buy_bitoptimizer(data:any): Observable<any> {
    return   this.httpclient.post(LENDING_API+'buy',data,_httpOptions);
  }

  sell_bitoptimizer(data:any): Observable<any> {
    return   this.httpclient.post(LENDING_API+'sell',data,_httpOptions);
  }

  getmarket_bitoptimizer(): Observable<any> {
    return   this.httpclient.get(LENDING_API+'getmarket',_httpOptions);
  }
}
