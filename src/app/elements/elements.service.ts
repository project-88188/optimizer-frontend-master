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


withdrawal(transection:any) {

  this.create(transection).subscribe(value => { 

  //  console.log(value);

    this.payoutone(value).subscribe(data=>{

      if(data.batch_header.batch_status=='PENDING')
      {
        this.updatestatus(value.id,{transectionstatus:'pending'}).subscribe(()=>{});
      }
      
      setTimeout(() => {
        this.getpayout(data.batch_header.payout_batch_id).subscribe(data=>{

        //  let _fees=new Number(data.batch_header.fees);
         // let _amount=new Number(data.batch_header.amount);

         let results:any[] = data.items;
         for(let i =0 ;i <results.length; i++)
         {

          if(results[i].transaction_status=='UNCLAIMED')
          {
            this.updatestatus(value.id,{transectionstatus:'rejected'}).subscribe(()=>{});
          }

          if(results[i].transaction_status=='SUCCESS')
          {

            if(results[i].payout_item.amount.value && results[i].payout_item_fee.value)     {
              
              let  userdata=this.tokenStorege.getUser();
              let  _content=JSON.parse(userdata.content);
              _content.cashbalance=Number.parseFloat(_content.cashbalance)-Number.parseFloat(results[i].payout_item.amount.value);
              _content.withdrawal=Number.parseFloat(_content.withdrawal)-Number.parseFloat(results[i].payout_item.amount.value);
              _content.fees=Number.parseFloat(_content.fees)-Number.parseFloat(results[i].payout_item_fee.value);

              if(_content.cashbalance && _content.withdrawal && _content.fees)   {

                userdata.content=JSON.stringify(_content);
                this.tokenStorege.saveUser(userdata);
                const  resultcontent ={
                  cashbalance:_content.cashbalance,
                  withdrawal:_content.withdrawal,
                  fees: _content.fees
                  }
                  
                  this.userContent.update(_content.id,resultcontent).subscribe(()=>{ 
                    this.updatestatus(value.id,{transectionstatus:'completed'}).subscribe(()=>{});
                  });

              }

            }
        
          }
       
         }

        });

    }, 5000);

    });

  });

}


  //#region  BUY_INVEST

  withdrawal2(transection:any): void {

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

  //#region  TRAMSECTION_DELETE

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
    
    payoutone(transection:any): Observable<any> {

      const httpOptions = {
        headers:  new HttpHeaders()
        .append('x-access-token',[''+this.tokenStorege.getToken()])
        .append('Content-Type', ['application/json'])
        .append('Accept', ['application/json'])
        
      };
  
      return   this.http.post(PAYPAL_PAYMENT_API+'payoutone',transection,httpOptions);
    }

    getpayout(payoutId:any) : Observable<any> {

      const httpOptions = {
        headers:  new HttpHeaders()
        .append('x-access-token',[''+this.tokenStorege.getToken()])
        .append('Content-Type', ['application/json'])
        .append('Accept', ['application/json'])
        
      };

      return   this.http.post(PAYPAL_PAYMENT_API+'getpayout',{
        payoutId:payoutId
      },httpOptions);

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
