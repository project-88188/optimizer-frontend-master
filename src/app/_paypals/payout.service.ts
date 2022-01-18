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
const PAYPAL_PAYMENT_API = BASE_URL + '/server/paypals/';

@Injectable({
  providedIn: 'root'
})
export class PayoutService {

  constructor(private tranService:TransectionService,
    private httpclient:HttpClient) { }

  //#region processwithdrawal

  processwithdrawal(withdrawaldata:any): void {

    this.tranService.create(withdrawaldata).subscribe(data1 => {
    
      this.createpayout(data1.id).subscribe(data2=>{
        setTimeout(() => {
         this.getpayout(data1.id).subscribe(data3=>{
            
         });
        }, 5000);
      });
    });

  }

  createpayout(_transectionId:any): Observable<any> {

    return   this.httpclient.post(PAYPAL_PAYMENT_API+'createpayout',{
      transectionId:_transectionId,
    },_httpOptions);
  }

  getpayout(_transectionId:any) : Observable<any> {

    return   this.httpclient.post(PAYPAL_PAYMENT_API+'getpayout',{
      transectionId:_transectionId,
    },_httpOptions);

  }

  updatepayout(username:any) : Observable<any> {

    return   this.httpclient.get(PAYPAL_PAYMENT_API+`upatepayout/${username}`,
    _httpOptions);
  }

}
