import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../_providers/global-url';
import { TokenStorageService } from '../_services/token-storage.service';
import { UsercontentService } from '../_modules/usercontent/services/usercontent.service';
import { Usercontent } from '../_modules/usercontent/models/usercontent.model';

const ELEMENTS_API = BASE_URL + '/server/transections/';

@Injectable({
  providedIn: 'root'
})

export class ElementsService {

  constructor(private http: HttpClient,
    private userContent:UsercontentService,
    private tokenStorege:TokenStorageService) { }

  withdawal(transection:any) {
    this.create(transection).subscribe(value => { 

      let  userdata=this.tokenStorege.getUser();
      let  _content=JSON.parse(userdata.content);
      _content.balance=Number.parseFloat(_content.balance)-Number.parseFloat(value.amount);
      _content.withdrawal=Number.parseFloat(_content.withdrawal)+Number.parseFloat(value.amount);
      userdata.content=JSON.stringify(_content);
      this.tokenStorege.saveUser(userdata);

    })
  }

  deposit(transection:any) {
      this.create(transection).subscribe(value => { 

      let  userdata=this.tokenStorege.getUser();
      let  _content=JSON.parse(userdata.content);
      _content.balance=Number.parseFloat(_content.balance)+Number.parseFloat(value.amount);
      _content.deposit=Number.parseFloat(_content.deposit)+Number.parseFloat(value.amount);
      userdata.content=JSON.stringify(_content);
      this.tokenStorege.saveUser(userdata);

      })
  }

  buy_investment(transection:any) {

    this.create(transection).subscribe(value => { 
      let  userdata=this.tokenStorege.getUser();
      let  _content=JSON.parse(userdata.content);
      console.log(value);
      console.log(_content)
      _content.balance=Number.parseFloat(_content.balance)-Number.parseFloat(value.amount);
      _content.invested=Number.parseFloat(_content.invested)+Number.parseFloat(value.amount);
      _content.investment=Number.parseFloat(_content.investment)+Number.parseFloat(value.totalunits);
      userdata.content=JSON.stringify(_content);
      this.tokenStorege.saveUser(userdata);

    })
  }

  sell_investment(transection:any) {

  this.create(transection).subscribe(value => { 
    let  userdata=this.tokenStorege.getUser();
    let  _content=JSON.parse(userdata.content);
    _content.balance=Number.parseFloat(_content.balance)+Number.parseFloat(value.amount);
    _content.sold=Number.parseFloat(_content.sold)+Number.parseFloat(value.amount);
    _content.investment=Number.parseFloat(_content.investment)-Number.parseFloat(value.totalunits);
    userdata.content=JSON.stringify(_content);
    this.tokenStorege.saveUser(userdata);

  })
  }

  buy_bitoptimizer(transection:any) {

  
  this.create(transection).subscribe(value => { 
    let  userdata=this.tokenStorege.getUser();
    let  _content=JSON.parse(userdata.content);
    console.log(value);
    console.log(_content)
    _content.balance=Number.parseFloat(_content.balance)-Number.parseFloat(value.amount);
    _content.purchased=Number.parseFloat(_content.purchased)+Number.parseFloat(value.amount);
    _content.bitoptimizer=Number.parseFloat(_content.bitoptimizer)+Number.parseFloat(value.totalunits);
    userdata.content=JSON.stringify(_content);
    this.tokenStorege.saveUser(userdata);

  })
  }

  sell_bitoptimizer(transection:any) {
    
  this.create(transection).subscribe(value => { 
    let  userdata=this.tokenStorege.getUser();
    let  _content=JSON.parse(userdata.content);
    _content.balance=Number.parseFloat(_content.balance)+Number.parseFloat(value.amount);
    _content.sold=Number.parseFloat(_content.sold)+Number.parseFloat(value.amount);
    _content.bitoptimizer=Number.parseFloat(_content.bitoptimizer)-Number.parseFloat(value.totalunits);
    userdata.content=JSON.stringify(_content);
    this.tokenStorege.saveUser(userdata);
  
  })
  }
 
  create(transection:any): Observable<any> {
    const httpOptions = {
      headers:  new HttpHeaders()
      .append('x-access-token',[''+this.tokenStorege.getToken()])
      .append('Content-Type', ['application/json'])
      .append('Accept', ['application/json'])
      
    };

    return   this.http.post(ELEMENTS_API+'create',transection,httpOptions);
  }

  update(id:any,transection:any): Observable<any> {
  
    const httpOptions = {
      headers:  new HttpHeaders()
      .append('x-access-token',[''+this.tokenStorege.getToken()])
      .append('Content-Type', ['application/json'])
      .append('Accept', ['application/json'])
     
    };

    return   this.http.put(`${ELEMENTS_API}update/${id}`,transection,httpOptions);
  }

  fineByPk(id:any): Observable<any> {
  
    const httpOptions = {
      headers:  new HttpHeaders()
      .append('x-access-token',[''+this.tokenStorege.getToken()])
      .append('Content-Type', ['application/json'])
      .append('Accept', ['application/json'])
     
    };

    return   this.http.get(`${ELEMENTS_API}find/${id}`,httpOptions);
  }

  delete(id:any): Observable<any> {
  
    const httpOptions = {
      headers:  new HttpHeaders()
      .append('x-access-token',[''+this.tokenStorege.getToken()])
      .append('Content-Type', ['application/json'])
      .append('Accept', ['application/json'])
     
    };

    return   this.http.get(`${ELEMENTS_API}delete/${id}`,httpOptions);
  }



   get_market_sell_bitoptimizer(): Observable<any> {
    
    const httpOptions = {
      headers:  new HttpHeaders()
      .append('x-access-token',[''+this.tokenStorege.getToken()])
      .append('Content-Type', ['application/json'])
      .append('Accept', ['application/json'])
     
    };
    
    return    this.http.get(ELEMENTS_API + 'marketsell',httpOptions);
   }

   get_market_buy_bitoptimizer(): Observable<any> {
    
    const httpOptions = {
      headers:  new HttpHeaders()
      .append('x-access-token',[''+this.tokenStorege.getToken()])
      .append('Content-Type', ['application/json'])
      .append('Accept', ['application/json'])
     
    };
    
    return    this.http.get(ELEMENTS_API + 'marketbuy',httpOptions);
   }

   get_market_sell_investment(): Observable<any> {
    
    const httpOptions = {
      headers:  new HttpHeaders()
      .append('x-access-token',[''+this.tokenStorege.getToken()])
      .append('Content-Type', ['application/json'])
      .append('Accept', ['application/json'])
     
    };
    
    return    this.http.get(ELEMENTS_API + 'marketsell',httpOptions);
   }

   get_market_buy_investment(): Observable<any> {
    
    const httpOptions = {
      headers:  new HttpHeaders()
      .append('x-access-token',[''+this.tokenStorege.getToken()])
      .append('Content-Type', ['application/json'])
      .append('Accept', ['application/json'])
    
    };
    
    return    this.http.get(ELEMENTS_API + 'marketbuy',httpOptions);
   }

}
