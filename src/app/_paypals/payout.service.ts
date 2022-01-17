import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransectionService } from '../_modules/transection/services/transection.service';
import { UsercontentService } from '../_modules/usercontent/services/usercontent.service';
import { BASE_URL } from '../_providers/global-url';
import { TokenStorageService } from '../_services/token-storage.service';

const _httpOptions = {
  headers:  new HttpHeaders()
  .append('Content-Type', ['application/json'])
  .append('Accept', ['application/json'])
  
};
const PAYPAL_PAYMENT_API = BASE_URL + '/server/paypals/';

@Injectable({
  providedIn: 'root'
})
export class PayoutService {

  constructor(private tranService:TransectionService,
    private tokenStorege:TokenStorageService,
    private userContent:UsercontentService) { }

  //#region processwithdrawal

  processwithdrawal(withdrawaldata:any): void {

    var transectionId=-1;

    //statting transection status is create
    this.tranService.create(withdrawaldata).subscribe(data => { 

      transectionId=data.items.id;

      if(data.items.amount==null)
      {
        let  userdata=this.tokenStorege.getUser();  //<-----------------
        let  _content=JSON.parse(userdata.content);
        // test cash balance
        _content.cashbalance=Number.parseFloat(_content.cashbalance)-Number.parseFloat(value.amount);
        // if pass then go..
        if(_content.cashbalance  && _content.cashbalance >0 )   {
    
          userdata.content=JSON.stringify(_content);
          this.tokenStorege.saveUser(userdata);  //<-----------------
          const  resultcontent ={
            cashbalance:_content.cashbalance,   }
          this.userContent.update(_content.id,resultcontent).subscribe(()=>{
              //<----------------- withdrawal from server status transection is processing
            this.tranService.update(transectionId,{transectionstatus:'processing'}).subscribe(()=>{

              // then starting pay out
              this.payoutone(value).subscribe(data=>{
                // then transection status is pending
                if(data.batch_header.batch_status=='PENDING')
                {
                  this.tranService.update(transectionId,{transectionstatus:'pending'}).subscribe(()=>{});
                }
                //waiting
                setTimeout(() => {
                  //see results
                  this.getpayout(data.batch_header.payout_batch_id).subscribe(data=>{
          
                  let results:any[] = data.items;
                  for(let i =0 ;i <results.length; i++)
                  {
                    //case status unclaim return money then rejected
                    if(results[i].transaction_status=='UNCLAIMED')
                    {
                      console.log(transectionId);
                      this.tranService.update(transectionId,{transectionstatus:'rejected'}).subscribe(()=>{

                        let  userdata=this.tokenStorege.getUser(); //<-----------------
                          let  _content=JSON.parse(userdata.content);
                          _content.cashbalance=Number.parseFloat(_content.cashbalance)+Number.parseFloat(value.amount);

                          if(_content.cashbalance)   {

                              userdata.content=JSON.stringify(_content);
                              this.tokenStorege.saveUser(userdata); //<-----------------

                              const  resultcontent ={
                                cashbalance:_content.cashbalance,   }

                              this.userContent.update(_content.id,resultcontent).subscribe(()=>{ });

                          }
                      });

                    }
                    //case status success then go completed
                    if(results[i].transaction_status=='SUCCESS')
                    {
          
                      if(results[i].payout_item.amount.value && results[i].payout_item_fee.value)     {

                          let  userdata=this.tokenStorege.getUser(); //<-----------------
                          let  _content=JSON.parse(userdata.content);
                          _content.withdrawal=Number.parseFloat(_content.withdrawal)-Number.parseFloat(results[i].payout_item.amount.value);
                          _content.fees=Number.parseFloat(_content.fees)-Number.parseFloat(results[i].payout_item_fee.value);

                          if(_content.withdrawal && _content.fees)   {

                                  userdata.content=JSON.stringify(_content);
                                  this.tokenStorege.saveUser(userdata); //<-----------------

                                  const  resultcontent ={
                                  withdrawal:_content.withdrawal,
                                  fees: _content.fees
                                  }

                                  this.userContent.update(_content.id,resultcontent).subscribe(()=>{  //<-----------------
                                console.log(transectionId);
                                  this.tranService.update(transectionId,{transectionstatus:'completed'}).subscribe(()=>{});
                                  });

                          }
                      }
                  
                    }
                
                  }
          
                  });
          
              }, 5000000);
          
              });

            });
            });
    
        }
        else
        {
          this.elemService.updatestatus(transectionId,{transectionstatus:'rejected'}).subscribe(()=>{});
        }
      }

      if(!transectionId)
      console.log('ERROR wrong id!!');

      this.tranService.fineByPk(transectionId).subscribe(result => {
        console.log(result);
      })

    });

  }

  //#endregion

  payoutone(transection:any): Observable<any> {

    return   this.http.post(PAYPAL_PAYMENT_API+'payoutone',transection,_httpOptions);
  }

  getpayout(payoutId:any) : Observable<any> {

    return   this.http.post(PAYPAL_PAYMENT_API+'getpayout',{
      payoutId:payoutId
    },_httpOptions);

  }

}
