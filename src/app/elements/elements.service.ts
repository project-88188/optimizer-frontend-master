import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../_providers/global-url';
import { TokenStorageService } from '../_services/token-storage.service';
import { UsercontentService } from '../_modules/usercontent/services/usercontent.service';

const ELEMENTS_API = BASE_URL + '/server/transections/';

@Injectable({
  providedIn: 'root'
})

export class ElementsService {

  constructor(private http: HttpClient,
    private userContent:UsercontentService,
    private tokenStorege:TokenStorageService) { }


    //#region BUTTON

  withdawal(transection:any) {
    this.create(transection).subscribe(value => { 

      let  userdata=this.tokenStorege.getUser();
      let  _content=JSON.parse(userdata.content);
      _content.balance=Number.parseFloat(_content.balance)-Number.parseFloat(value.amount);
      _content.withdrawal=Number.parseFloat(_content.withdrawal)+Number.parseFloat(value.amount);
      userdata.content=JSON.stringify(_content);
      this.tokenStorege.saveUser(userdata);
      //
      const  resultcontent ={
        balance:_content.balance,
        withdrawal:_content.withdrawal,
   }

    this.userContent.update(_content.id,resultcontent).subscribe(()=>{});
    //

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
      //
      //
      const  resultcontent ={
        balance:_content.balance,
        deposit:_content.deposit,
   }
   
   this.userContent.update(_content.id,resultcontent).subscribe(()=>{});
   //

      })
  }

  buy_investment(transection:any) {

    this.create(transection).subscribe(value => { 
      let  userdata=this.tokenStorege.getUser();
      let  _content=JSON.parse(userdata.content);
      _content.balance=Number.parseFloat(_content.balance)-Number.parseFloat(value.amount);
      _content.invested=Number.parseFloat(_content.invested)+Number.parseFloat(value.amount);
      _content.investment=Number.parseFloat(_content.investment)+Number.parseFloat(value.totalunits);
      userdata.content=JSON.stringify(_content);
      this.tokenStorege.saveUser(userdata);
     //
     const  resultcontent ={
      balance:_content.balance,
      invested:_content.invested,
      investment:_content.investment
 }
 
 this.userContent.update(_content.id,resultcontent).subscribe(()=>{});
 //

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
     //
     const  resultcontent ={
      balance:_content.balance,
      sold:_content.sold,
      investment:_content.investment
 }
 
 this.userContent.update(_content.id,resultcontent).subscribe(()=>{});
 //

  })
  }

  buy_bitoptimizer(transection:any) {

  
  this.create(transection).subscribe(value => { 
    let  userdata=this.tokenStorege.getUser();
    let  _content=JSON.parse(userdata.content);
    _content.balance=Number.parseFloat(_content.balance)-Number.parseFloat(value.amount);
    _content.purchased=Number.parseFloat(_content.purchased)+Number.parseFloat(value.amount);
    _content.bitoptimizer=Number.parseFloat(_content.bitoptimizer)+Number.parseFloat(value.totalunits);
    userdata.content=JSON.stringify(_content);
    this.tokenStorege.saveUser(userdata);
     //
     const  resultcontent ={
      balance:_content.balance,
      purchased:_content.purchased,
      bitoptimizer:_content.bitoptimizer
 }
 
 this.userContent.update(_content.id,resultcontent).subscribe(()=>{});
 //

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
     //
     const  resultcontent ={
      balance:_content.balance,
      sold:_content.sold,
      bitoptimizer:_content.bitoptimizer
 }
 
 this.userContent.update(_content.id,resultcontent).subscribe(()=>{});
 //
  
  })
  }

  //#endregion

  //#region TRANSECTION
 
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

  //#endregion


  //#region MARKET

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

//#endregion
}
