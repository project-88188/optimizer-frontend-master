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

  constructor(private http: HttpClient,
    private tokenStorege:TokenStorageService) { }


  create_empty(): Observable<any> {
  
    const httpOptions = {
      headers:  new HttpHeaders()
      .append('x-access-token',[''+this.tokenStorege.getToken()])
      .append('Content-Type', ['application/json'])
      .append('Accept', ['application/json'])
      
    };

    return   this.http.get(ELEMENTS_API,httpOptions);
  }


  update(id:any,transection:any): Observable<any> {
  
    const httpOptions = {
      headers:  new HttpHeaders()
      .append('x-access-token',[''+this.tokenStorege.getToken()])
      .append('Content-Type', ['application/json'])
      .append('Accept', ['application/json'])
     
    };

   // return this.http.put(`${baseUrl}/${id}`, data);
    return   this.http.put(`${ELEMENTS_API}${id}`,transection,httpOptions);
  }

  read(id:any): Observable<any> {
  
    const httpOptions = {
      headers:  new HttpHeaders()
      .append('x-access-token',[''+this.tokenStorege.getToken()])
      .append('Content-Type', ['application/json'])
      .append('Accept', ['application/json'])
     
    };

    return   this.http.get(`${ELEMENTS_API}${id}`,httpOptions);
  }

  createtransection_deposit(transection:any): Observable<any> {
    
    const httpOptions = {
      headers:  new HttpHeaders()
      .append('x-access-token',[''+this.tokenStorege.getToken()])
      .append('Content-Type', ['application/json'])
      .append('Accept', ['application/json'])
      .append('Transection-Type',['deposit'])
     
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
     
    
    };

    return    this.http.post(ELEMENTS_API,transection,httpOptions);
   }
   
   get_market_sell_bitoptimizer(): Observable<any> {
    
    const httpOptions = {
      headers:  new HttpHeaders()
      .append('x-access-token',[''+this.tokenStorege.getToken()])
      .append('Content-Type', ['application/json'])
      .append('Accept', ['application/json'])
     
    };
    
    return    this.http.get(ELEMENTS_API + 'market_sell_bitoptimizer',httpOptions);
   }

   get_market_buy_bitoptimizer(): Observable<any> {
    
    const httpOptions = {
      headers:  new HttpHeaders()
      .append('x-access-token',[''+this.tokenStorege.getToken()])
      .append('Content-Type', ['application/json'])
      .append('Accept', ['application/json'])
     
    };
    
    return    this.http.get(ELEMENTS_API + 'market_buy_bitoptimizer',httpOptions);
   }

   get_market_sell_investment(): Observable<any> {
    
    const httpOptions = {
      headers:  new HttpHeaders()
      .append('x-access-token',[''+this.tokenStorege.getToken()])
      .append('Content-Type', ['application/json'])
      .append('Accept', ['application/json'])
     
    };
    
    return    this.http.get(ELEMENTS_API + 'market_sell_investment',httpOptions);
   }

   get_market_buy_investment(): Observable<any> {
    
    const httpOptions = {
      headers:  new HttpHeaders()
      .append('x-access-token',[''+this.tokenStorege.getToken()])
      .append('Content-Type', ['application/json'])
      .append('Accept', ['application/json'])
    
    };
    
    return    this.http.get(ELEMENTS_API + 'market_buy_investment',httpOptions);
   }

}
