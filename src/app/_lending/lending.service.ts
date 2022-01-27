import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransectionService } from '../_modules/transection/services/transection.service';
import { BASE_URL } from '../_providers/global-url';
import { ElementsService } from '../elements/elements.service';

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

  constructor(private elementsService:ElementsService,
    private httpclient:HttpClient) { }

  buy_bitoptimizer(data:any): void {
   
      this.httpclient.post(LENDING_API+'buy',data,_httpOptions).subscribe(()=>{
        this.setmarket_bitoptimizer(data).subscribe(()=>{console.log("setmarket")});
        setTimeout(()=>{
          this.elementsService.RefreshUserContent();
        },2000);

      });
  }

  sell_bitoptimizer(data:any): void {
 
      this.httpclient.post(LENDING_API+'sell',data,_httpOptions).subscribe(()=>{
        this.setmarket_bitoptimizer(data).subscribe(()=>{console.log("setmarket")});
        setTimeout(()=>{
          this.elementsService.RefreshUserContent();
        
        },2000);
      });
  }

  getmarket_bitoptimizer(): Observable<any> {
    return this.httpclient.get(LENDING_API+'getmarket',_httpOptions);
  }

  setmarket_bitoptimizer(transection:any):  Observable<any> {
    return this.httpclient.get(LENDING_API+'setmarket',_httpOptions);
  }
}
