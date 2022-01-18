import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransectionService } from '../_modules/transection/services/transection.service';
import { BASE_URL } from '../_providers/global-url';

const _httpOptions = {
  headers:  new HttpHeaders()
  .append('Content-Type', ['application/json'])
  .append('Accept', ['application/json'])
  
};

const PAYPAL_PAYMENT_API = BASE_URL + '/server/paypals/checkout/';

@Injectable({
  providedIn: 'root'
})
export class CheckuotService {

  constructor(private tranService:TransectionService,
    private httpclient:HttpClient) { }

  checkoutreceived(_transectionId:any,received:any) : Observable<any> {

    return   this.httpclient.post(PAYPAL_PAYMENT_API+`received/${_transectionId}`,received,
    _httpOptions);
    
  }

  checkoutreject(_transectionId:any,data:any) : Observable<any> {

    return   this.httpclient.post(PAYPAL_PAYMENT_API+`reject/${_transectionId}`,data,
    _httpOptions);
    
  }

  checkoutcancel(_transectionId:any,data:any) : Observable<any> {

    return   this.httpclient.post(PAYPAL_PAYMENT_API+`cancel/${_transectionId}`,data,
    _httpOptions);
    
  }

}
