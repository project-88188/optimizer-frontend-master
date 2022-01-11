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
      _content.cashbalance=Number.parseFloat(_content.cashbalance)-Number.parseFloat(value.amount);
      _content.withdrawal=Number.parseFloat(_content.withdrawal)+Number.parseFloat(value.amount);

      if(_content.cashbalance>=0)
      {
        userdata.content=JSON.stringify(_content);
        this.tokenStorege.saveUser(userdata);
            
        const  resultcontent ={
          cashbalance:_content.cashbalance,
          withdrawal:_content.withdrawal,
          }

        this.userContent.update(_content.id,resultcontent).subscribe(()=>{
          this.updatestatus(value.id,{transectionstatus:'completed'}).subscribe(()=>{});
        });

      } else {
        this.updatestatus(value.id,{transectionstatus:'rejected'}).subscribe(()=>{});
      }

    })
  }

  deposit(transection:any) {
      this.create(transection).subscribe(value => { 

      let  userdata=this.tokenStorege.getUser();
      let  _content=JSON.parse(userdata.content);
      _content.cashbalance=Number.parseFloat(_content.cashbalance)+Number.parseFloat(value.amount);
      _content.deposit=Number.parseFloat(_content.deposit)+Number.parseFloat(value.amount);

      
      userdata.content=JSON.stringify(_content);
      this.tokenStorege.saveUser(userdata);
      //
      //
      const  resultcontent ={
        cashbalance:_content.cashbalance,
        deposit:_content.deposit,
      }
      
      this.userContent.update(_content.id,resultcontent).subscribe(()=>{
        this.updatestatus(value.id,{transectionstatus:'completed'}).subscribe(()=>{});
      });
   
    })
  }

  buy_investment(transection:any) {

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

  updatestatus(id:any,transection:any): Observable<any> {
  
    const httpOptions = {
      headers:  new HttpHeaders()
      .append('x-access-token',[''+this.tokenStorege.getToken()])
      .append('Content-Type', ['application/json'])
      .append('Accept', ['application/json'])
     
    };

    return   this.http.put(`${ELEMENTS_API}updatestatus/${id}`,transection,httpOptions);
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
