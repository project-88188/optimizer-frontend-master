import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../_providers/global-url';
import { TokenStorageService } from '../_services/token-storage.service';

const ELEMENTS_API = BASE_URL + '/server/transections/';

@Injectable({
  providedIn: 'root'
})

export class ElementsService {
  read:any;

  constructor(private http: HttpClient,
    private tokenStorege:TokenStorageService) { }

  createtransection_deposit(transection:any): Observable<any> {
    
    const httpOptions = {
      headers:  new HttpHeaders()
      .append('x-access-token',[''+this.tokenStorege.getToken()])
      .append('Content-Type', ['application/json'])
      .append('Accept', ['application/json'])
      .append('Transection-Type',['deposit'])
      .append('Transection-Id', '-1')
      
    };

    return   this.http.post(ELEMENTS_API,transection,httpOptions);
  }

  createtransection_withdrawal(transection:any): Observable<any> {
    
    const httpOptions = {
      headers:  new HttpHeaders()
      .append('x-access-token',[''+this.tokenStorege.getToken()])
      .append('Content-Type', ['application/json'])
      .append('Accept', ['application/json'])
      .append('Transection-Type', ['withdrawal'])
      .append('Transection-Id', '-1')
    };

   return  this.http.post(ELEMENTS_API,transection,httpOptions);
  }

  createtransection_buy_investment(transection:any): Observable<any> {
    
    const httpOptions = {
      headers:  new HttpHeaders()
      .append('x-access-token',[''+this.tokenStorege.getToken()])
      .append('Content-Type', ['application/json'])
      .append('Accept', ['application/json'])
      .append('Transection-Type', ['buy_investment'])
      .append('Transection-Id', '-1')
      
    };
    
    return    this.http.post(ELEMENTS_API,transection,httpOptions);
   }

   createtransection_sell_investment(transection:any): Observable<any> {
    
    const httpOptions = {
      headers:  new HttpHeaders()
      .append('x-access-token',[''+this.tokenStorege.getToken()])
      .append('Content-Type', ['application/json'])
      .append('Accept', ['application/json'])
      .append('Transection-Type', ['sell_investment'])
      .append('Transection-Id', '-1')
      
    };
    
    return    this.http.post(ELEMENTS_API,transection,httpOptions);
   }

   createtransection_buy_bitoptimizer(transection:any): Observable<any> {
    
    const httpOptions = {
      headers:  new HttpHeaders()
      .append('x-access-token',[''+this.tokenStorege.getToken()])
      .append('Content-Type', ['application/json'])
      .append('Accept', ['application/json'])
      .append('Transection-Type', ['buy_bitoptimizer'])
      .append('Transection-Id', '-1')
     
    };
    
    return    this.http.post(ELEMENTS_API,transection,httpOptions);
   }
   
   createtransection_sell_bitoptimizer(transection:any): Observable<any> {
    
    const httpOptions = {
      headers:  new HttpHeaders()
      .append('x-access-token',[''+this.tokenStorege.getToken()])
      .append('Content-Type', ['application/json'])
      .append('Accept', ['application/json'])
      .append('Transection-Type', ['sell_bitoptimizer'])
      .append('Transection-Id', '-1')
    
    };

    console.log(httpOptions);
    
    return    this.http.post(ELEMENTS_API,transection,httpOptions);
   }
   
   get_market_sell_bitoptimizer(): Observable<any> {
    
    const httpOptions = {
      headers:  new HttpHeaders()
      .append('x-access-token',[''+this.tokenStorege.getToken()])
      .append('Content-Type', ['application/json'])
      .append('Accept', ['application/json'])
      .append('Transection-Id', '-1')
      
     
    };
    
    return    this.http.get(ELEMENTS_API + 'market_sell_bitoptimizer',httpOptions);
   }

   get_market_buy_bitoptimizer(): Observable<any> {
    
    const httpOptions = {
      headers:  new HttpHeaders()
      .append('x-access-token',[''+this.tokenStorege.getToken()])
      .append('Content-Type', ['application/json'])
      .append('Accept', ['application/json'])
      .append('Transection-Id', '-1')
      
    };
    
    return    this.http.get(ELEMENTS_API + 'market_buy_bitoptimizer',httpOptions);
   }

   get_market_sell_investment(): Observable<any> {
    
    const httpOptions = {
      headers:  new HttpHeaders()
      .append('x-access-token',[''+this.tokenStorege.getToken()])
      .append('Content-Type', ['application/json'])
      .append('Accept', ['application/json'])
      .append('Transection-Id', '-1')
     
    };
    
    return    this.http.get(ELEMENTS_API + 'market_sell_investment',httpOptions);
   }

   get_market_buy_investment(): Observable<any> {
    
    const httpOptions = {
      headers:  new HttpHeaders()
      .append('x-access-token',[''+this.tokenStorege.getToken()])
      .append('Content-Type', ['application/json'])
      .append('Accept', ['application/json'])
      .append('Transection-Id', '-1')
      
    };
    
    return    this.http.get(ELEMENTS_API + 'market_buy_investment',httpOptions);
   }


}
