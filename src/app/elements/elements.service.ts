import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../_providers/global-url';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const ELEMENTS_API = BASE_URL + '/transections/';

@Injectable({
  providedIn: 'root'
})

export class ElementsService {
  read:any;

  constructor(private http: HttpClient) {}

  createtransection_deposit(transection:any): Observable<any> {
  return   this.http.post(ELEMENTS_API + 'deposit',transection,httpOptions);
  }

  createtransection_withdrawal(transection:any): Observable<any> {
   return    this.http.post(ELEMENTS_API + 'withdrawal',transection,httpOptions);
  }

  createtransection_buy_investment(transection:any): Observable<any> {
    return    this.http.post(ELEMENTS_API + 'buy_investment',transection,httpOptions);
   }

   createtransection_sell_investment(transection:any): Observable<any> {
    return    this.http.post(ELEMENTS_API + 'sell_investment',transection,httpOptions);
   }

   createtransection_buy_bitoptimizer(transection:any): Observable<any> {
    return    this.http.post(ELEMENTS_API + 'buy_bitoptimizer',transection,httpOptions);
   }
   
   createtransection_sell_bitoptimizer(transection:any): Observable<any> {
    return    this.http.post(ELEMENTS_API + 'sell_bitoptimizer',transection,httpOptions);
   }
   
   get_market_sell_bitoptimizer(): Observable<any> {
    return    this.http.get(ELEMENTS_API + 'market_sell_bitoptimizer',httpOptions);
   }

   get_market_buy_bitoptimizer(): Observable<any> {
    return    this.http.get(ELEMENTS_API + 'market_buy_bitoptimizer',httpOptions);
   }

   get_market_sell_investment(): Observable<any> {
    return    this.http.get(ELEMENTS_API + 'market_sell_investment',httpOptions);
   }

   get_market_buy_investment(): Observable<any> {
    return    this.http.get(ELEMENTS_API + 'market_buy_investment',httpOptions);
   }


}
