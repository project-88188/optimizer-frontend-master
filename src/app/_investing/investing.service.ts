import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../_providers/global-url';
import { ElementsService } from '../elements/elements.service';

const _httpOptions = {
  headers:  new HttpHeaders()
  .append('Content-Type', ['application/json'])
  .append('Accept', ['application/json'])
  
};
const INVESTING_API = BASE_URL + '/server/investing/';

@Injectable({
  providedIn: 'root'
})
export class InvestingService {

  constructor(private elementsService:ElementsService,
    private httpclient:HttpClient) { }

    buy_investment(data:any): void {
   
         this.httpclient.post(INVESTING_API+'buy',data,_httpOptions).subscribe(()=>{
          this.setmarket_investment(data).subscribe(x=>{console.log(x)})
          setTimeout(()=>{
            this.elementsService.RefreshUserContent();
          },2000);
  
        });
    }

    sell_investment(data:any): void {
    
        this.httpclient.post(INVESTING_API+'sell',data,_httpOptions).subscribe(()=>{
          this.setmarket_investment(data).subscribe(x=>{console.log(x)})
          setTimeout(()=>{
            this.elementsService.RefreshUserContent();

          },2000);
  
        });
    }

    getmarket_investment(): Observable<any> {
     return this.httpclient.get(INVESTING_API+'getmarket',_httpOptions);
     // const marketurl = "https://asia-northeast3-bahts-club-app.cloudfunctions.net/get";

     // return   this.httpclient.post( marketurl,{
      //  "kind":"Task",
     //   "key":"sampletask1",  },_httpOptions);
        
    }

    setmarket_investment(transection:any):  Observable<any> {
      return this.httpclient.get(INVESTING_API+'setmarket',_httpOptions);
      
     // const marketurl = "https://asia-northeast3-bahts-club-app.cloudfunctions.net/set";
     // return   this.httpclient.post( marketurl,transection,_httpOptions);
    }

}
