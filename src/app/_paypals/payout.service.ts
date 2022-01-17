import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransectionService } from '../_modules/transection/services/transection.service';
import { UsercontentService } from '../_modules/usercontent/services/usercontent.service';
import { BASE_URL } from '../_providers/global-url';
import { TokenStorageService } from '../_services/token-storage.service';

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
    private httpclient:HttpClient,
    private tokenStorege:TokenStorageService,
    private userContent:UsercontentService) { }

  //#region processwithdrawal

  processwithdrawal(withdrawaldata:any): void {

   const content = JSON.parse(this.tokenStorege.getUser().content);
    this.tranService.create(withdrawaldata).subscribe(data1 => {
    
      this.createpayout(data1.id,content.id).subscribe(data2=>{
        setTimeout(() => {
         this.getpayout(data1.id,content.id).subscribe(data3=>{
            console.log(data3);
         });
        }, 10000);
      });
    });

  }

  createpayout(_transectionId:any,_contentId:any): Observable<any> {

    return   this.httpclient.post(PAYPAL_PAYMENT_API+'createpayout',{
      transectionId:_transectionId,
      contentId:_contentId,
    },_httpOptions);
  }

  getpayout(_transectionId:any,_contentId:any) : Observable<any> {

    return   this.httpclient.post(PAYPAL_PAYMENT_API+'getpayout',{
      transectionId:_transectionId,
      contentId:_contentId,
    },_httpOptions);

  }

}
