import { Component,Input,OnChanges,ViewChild }from '@angular/core'
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { ElementsService } from '../../elements/elements.service';
import { CLIENT_ID } from 'src/app/_providers/paypal-config';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { UsercontentService } from 'src/app/_modules/usercontent/services/usercontent.service';
import { NgxCaptchaModule,ReCaptcha2Component} from 'ngx-captcha';

@Component({
  selector: 'app-butt-deposit',
  templateUrl: './butt-deposit.component.html',
  styleUrls: ['./butt-deposit.component.css']
})
export class ButtDepositComponent implements OnChanges {

  public client_id=CLIENT_ID;
  public payPalConfig?: IPayPalConfig;

  public showSuccess = false;
  public submitted =false;
  public successed = false;

  public _paymentmethod:any[] =[]
  public deposit_trans:any = {};

  @Input()
    currentUserContent:any = {};
  @Input()
   tabChangedCount:Number =-1;

  @Input()
  currTapIndex:Number = -1;

   form: any = {
    amount:Number
  };
 

  constructor(private elementsService:ElementsService,
    private userContent:UsercontentService,
    private tokenStorage:TokenStorageService) {
      this.initConfig();
     }

  ngOnChanges(): void {

   // if(this.currTapIndex)
  //  {
      if(this.currTapIndex==0)
      this.initConfig();
   // }
  }


  private initConfig(): void {
    this.payPalConfig = {
        currency: 'USD',
        clientId: this.client_id,
        createOrderOnClient: (data) => < ICreateOrderRequest > {
            intent: 'CAPTURE',
            purchase_units: [{
                amount: {
                    currency_code: 'USD',
                    value: this.form.amount,
                    breakdown: {
                        item_total: {
                            currency_code: 'USD',
                            value: this.form.amount,
                        }
                    }
                },
                items: [{
                    name: 'Enterprise Subscription',
                    quantity: '1',
                    category: 'DIGITAL_GOODS',
                    unit_amount: {
                        currency_code: 'USD',
                        value: this.form.amount,
                    },
                }]
            }]
        },
        advanced: {
            commit: 'true'
        },
        style: {
            label: 'paypal',
            layout: 'vertical'
        },
        onApprove: (data, actions) => {

            actions.order.get().then(() => {
               // console.log('onApprove - you can get full order details inside onApproved');
            });

        },
        onClientAuthorization: (data) => {

           if('COMPLETED'==data.status)
           {
          
                //
                let  userdata=this.tokenStorage.getUser();
                let  _content=JSON.parse(userdata.content);
                _content.cashbalance=Number.parseFloat(_content.cashbalance)+Number.parseFloat(this.form.amount);
                _content.deposit=Number.parseFloat(_content.deposit)+Number.parseFloat(this.form.amount);

                if( _content.cashbalance &&  _content.deposit) {

                  this._paymentmethod= JSON.parse(_content.paymentmethod);

                  let _new_method:any[] =[];
                  for(let i=0; i <this._paymentmethod.length; i++) {
                     if(this._paymentmethod[i].detail!=data.payer.email_address && this._paymentmethod[i].method=='paypal') {
                      _new_method.push({method:'paypal', detail:this._paymentmethod[i].detail});  }
                  }
                  
  
                  _new_method.push({method:'paypal', detail:data.payer.email_address});
                  
                  _content.paymentmethod=JSON.stringify(_new_method);
  
                  _content.published=true;
                  
                  userdata.content=JSON.stringify(_content);
                  this.tokenStorage.saveUser(userdata);
  
                  const  resultcontent ={
                    cashbalance:_content.cashbalance,
                    deposit:_content.deposit,
                    paymentmethod:_content.paymentmethod,
                    published:_content.published,
                  }
                  
                  this.userContent.update(_content.id,resultcontent).subscribe(()=>{
                    
                    this.elementsService.update(this.deposit_trans.id,{
                      paymentdetail:data.payer.email_address,
                      transectiontype:'deposit',
                      transectionstatus:'completed'}).subscribe(()=>{});

                    this.showSuccess = true;
                    this.reloadPage();
                    
                  });

                }
          
           }
           
        },
        onCancel: (data, actions) => {

          if(this.deposit_trans && this.deposit_trans.id)
          {
            this.elementsService.updatestatus(this.deposit_trans.id,{transectionstatus:'canceled'}).subscribe(()=>{ });
          }
        },
        onError: err => {
          
          if(this.deposit_trans && this.deposit_trans.id)
          {
            this.elementsService.updatestatus(this.deposit_trans.id,{transectionstatus:'rejected'}).subscribe(()=>{});
          }
           
        
        },
        onClick: (data, actions) => {
          
         const _request = {
          contentid:this.currentUserContent.id,
          username:this.currentUserContent.username,
          amount:this.form.amount,
          paymentmethod: data.fundingSource,
          published:false,
          transectionstatus:"created",
          transectiontype:'deposit',
        }

        this.deposit_trans={ };

        this.elementsService.create(_request).subscribe(value => { 
          this.deposit_trans=value;  })
  
        }
    };
  }


  reloadPage(): void {
    setTimeout(() => {
        window.location.reload();
    }, 2000);
  };
}

