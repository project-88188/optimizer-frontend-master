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
const INVESTING_API = BASE_URL + '/server/paypals/';

@Injectable({
  providedIn: 'root'
})
export class InvestingService {

  constructor(private tranService:TransectionService,
    private httpclient:HttpClient) { }

    buy_investment(data:any): Observable<any> {
      return   this.httpclient.post(INVESTING_API+'buy',data,_httpOptions);
    }

    sell_investment(data:any): Observable<any> {
      return   this.httpclient.post(INVESTING_API+'sell',data,_httpOptions);
    }

    getmarket_investment(): Observable<any> {
      return   this.httpclient.get(INVESTING_API+'getmarket',_httpOptions);
    }

}
