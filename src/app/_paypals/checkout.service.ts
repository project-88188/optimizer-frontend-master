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

  onClientAuthorization(_transectionId:any,data:any) : Observable<any> {
    return   this.httpclient.post(PAYPAL_PAYMENT_API+`onclientauthorization/${_transectionId}`,data,_httpOptions);
  }

  onError(_transectionId:any,data:any) : Observable<any> {
    return   this.httpclient.post(PAYPAL_PAYMENT_API+`onerror/${_transectionId}`,data,_httpOptions);
  }

  onCancel(_transectionId:any,data:any) : Observable<any> {
    return   this.httpclient.post(PAYPAL_PAYMENT_API+`oncancel/${_transectionId}`,data,_httpOptions);
  }

  OnApprove(_transectionId:any,data:any) : Observable<any> {
    return   this.httpclient.post(PAYPAL_PAYMENT_API+`onapprove/${_transectionId}`,data,_httpOptions);
  }

  onClick(data:any) : Observable<any> {
    return   this.httpclient.post(PAYPAL_PAYMENT_API+`onclick`,data,_httpOptions);
  }
  
}


