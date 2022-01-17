import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../_providers/global-url';
import { TokenStorageService } from '../_services/token-storage.service';
import { UsercontentService } from '../_modules/usercontent/services/usercontent.service';

const ELEMENTS_API = BASE_URL + '/server/transections/';
const PAYPAL_PAYMENT_API = BASE_URL + '/server/paypals/';


@Injectable({
  providedIn: 'root'
})

export class ElementsService {

  constructor(private http: HttpClient,
    private userContent:UsercontentService,
    private tokenStorege:TokenStorageService) { }


    
  //#region  BUY_INVEST

  buy_investment(transection:any): void {

    this.create(transection).subscribe(value => { 
      let  userdata=this.tokenStorege.getUser();
      let  _content=JSON.parse(userdata.content);
      _content.cashbalance=Number.parseFloat(_content.cashbalance)-Number.parseFloat(value.amount);
    //  _content.invested=Number.parseFloat(_content.invested)+Number.parseFloat(value.amount);
      _content.investmentonmarket=Number.parseFloat(_content.investmentonmarket)+Number.parseFloat(value.totalunits);
 
      if(_content.cashbalance>=0) { 

        userdata.content=JSON.stringify(_content);
        this.tokenStorege.saveUser(userdata);
       //
       const  resultcontent ={
        cashbalance:_content.cashbalance,
       // invested:_content.invested,
        investmentonmarket:_content.investmentonmarket
        }
        
        this.userContent.update(_content.id,resultcontent).subscribe(()=>{
          this.updatestatus(value.id,{transectionstatus:'marketing'}).subscribe(()=>{});
        });

      } else {

        this.updatestatus(value.id,{transectionstatus:'rejected'}).subscribe(()=>{});
      }

    })
}

//#endregion

//#region SELL_INVEST

  sell_investment(transection:any) {

  this.create(transection).subscribe(value => { 
    let  userdata=this.tokenStorege.getUser();
    let  _content=JSON.parse(userdata.content);
   // _content.cashbalance=Number.parseFloat(_content.cashbalance)+Number.parseFloat(value.amount);
   // _content.sold=Number.parseFloat(_content.sold)+Number.parseFloat(value.amount);
    _content.investmentonmarket=Number.parseFloat(_content.investmentonmarket)-Number.parseFloat(value.totalunits);
  
    if(_content.investmentonmarket>=0) { 

      userdata.content=JSON.stringify(_content);
      this.tokenStorege.saveUser(userdata);
       //
       const  resultcontent ={
      //  cashbalance:_content.cashbalance,
      //  sold:_content.sold,
        investmentonmarket:_content.investmentonmarket
      }
      
      this.userContent.update(_content.id,resultcontent).subscribe(()=>{
        this.updatestatus(value.id,{transectionstatus:'marketing'}).subscribe(()=>{});
      });

        } else {

          this.updatestatus(value.id,{transectionstatus:'rejected'}).subscribe(()=>{});
      }
  


  })

}

//#endregion

//#region BUY_INVEST

  buy_bitoptimizer(transection:any) {

  
  this.create(transection).subscribe(value => { 
    let  userdata=this.tokenStorege.getUser();
    let  _content=JSON.parse(userdata.content);
    _content.cashbalance=Number.parseFloat(_content.cashbalance)-Number.parseFloat(value.amount);
   // _content.purchased=Number.parseFloat(_content.purchased)+Number.parseFloat(value.amount);
    _content.bitoptimizeronmarket=Number.parseFloat(_content.bitoptimizeronmarket)+Number.parseFloat(value.totalunits);
   
    if(_content.cashbalance>=0) { 

      userdata.content=JSON.stringify(_content);
      this.tokenStorege.saveUser(userdata);
       //
       const  resultcontent ={
        cashbalance:_content.cashbalance,
      //  purchased:_content.purchased,
        bitoptimizeronmarket:_content.bitoptimizeronmarket
      }
      
      this.userContent.update(_content.id,resultcontent).subscribe(()=>{
        this.updatestatus(value.id,{transectionstatus:'marketing'}).subscribe(()=>{});
      });

         } else {

          this.updatestatus(value.id,{transectionstatus:'rejected'}).subscribe(()=>{});
      }
 


  })
  }

  //#endregion

  //#region SELL_BITOPT

  sell_bitoptimizer(transection:any) {
    
  this.create(transection).subscribe(value => { 
    let  userdata=this.tokenStorege.getUser();
    let  _content=JSON.parse(userdata.content);
   // _content.cashbalance=Number.parseFloat(_content.cashbalance)+Number.parseFloat(value.amount);
   // _content.sold=Number.parseFloat(_content.sold)+Number.parseFloat(value.amount);
    _content.bitoptimizeronmarket=Number.parseFloat(_content.bitoptimizeronmarket)-Number.parseFloat(value.totalunits);

    if( _content.bitoptimizeronmarket>=0) { 

      userdata.content=JSON.stringify(_content);
      this.tokenStorege.saveUser(userdata);
       //
       const  resultcontent ={
      //  cashbalance:_content.cashbalance,
      //  sold:_content.sold,
        bitoptimizeronmarket:_content.bitoptimizeronmarket
   }
   
   this.userContent.update(_content.id,resultcontent).subscribe(()=>{
    this.updatestatus(value.id,{transectionstatus:'marketing'}).subscribe(()=>{});
  });

    } else {

      this.updatestatus(value.id,{transectionstatus:'rejected'}).subscribe(()=>{});
        
    }

  })
  }

  //#endregion

  //#region TRANSECTION_CREATE
 
  create(transection:any): Observable<any> {
    const httpOptions = {
      headers:  new HttpHeaders()
      .append('x-access-token',[''+this.tokenStorege.getToken()])
      .append('Content-Type', ['application/json'])
      .append('Accept', ['application/json'])
      
    };

    return   this.http.post(ELEMENTS_API+'create',transection,httpOptions);
  }

  //#endregion

  //#region  TRANSECTION_UPDATE

  update(id:any,transection:any): Observable<any> {
  
    const httpOptions = {
      headers:  new HttpHeaders()
      .append('x-access-token',[''+this.tokenStorege.getToken()])
      .append('Content-Type', ['application/json'])
      .append('Accept', ['application/json'])
     
    };

    return   this.http.put(`${ELEMENTS_API}update/${id}`,transection,httpOptions);
  }

  //#endregion

  //#region  TRANSECTION_UPDATESTATUS

  updatestatus(id:any,transection:any): Observable<any> {
  
    const httpOptions = {
      headers:  new HttpHeaders()
      .append('x-access-token',[''+this.tokenStorege.getToken()])
      .append('Content-Type', ['application/json'])
      .append('Accept', ['application/json'])
     
    };

    return   this.http.put(`${ELEMENTS_API}updatestatus/${id}`,transection,httpOptions);
  }

  //#endregion

  //#region TRANSECTION_FIND_BYPK

  fineByPk(id:any): Observable<any> {
  
    const httpOptions = {
      headers:  new HttpHeaders()
      .append('x-access-token',[''+this.tokenStorege.getToken()])
      .append('Content-Type', ['application/json'])
      .append('Accept', ['application/json'])
     
    };

    return   this.http.get(`${ELEMENTS_API}find/${id}`,httpOptions);
  }

  //#endregion



  //#region  PAYPAL_API

  fakesecrete(): Observable<any> {
    const httpOptions = {
      headers:  new HttpHeaders()
      .append('x-access-token',[''+this.tokenStorege.getToken()])
      .append('Content-Type', ['application/json'])
      .append('Accept', ['application/json'])
      
    };

    return   this.http.get(PAYPAL_PAYMENT_API+'fakesecrete',httpOptions);
  }
    

  //#endregion

}
