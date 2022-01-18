import { Component,Input,OnChanges,ViewChild }from '@angular/core'
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { CLIENT_ID } from 'src/app/_providers/paypal-config';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { UsercontentService } from 'src/app/_modules/usercontent/services/usercontent.service';
import { TransectionService } from 'src/app/_modules/transection/services/transection.service';
import { CheckuotService } from '../checkout.service';

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
  public checkoutitem:any = {};

  @Input()
    currentUserContent:any = {};
  @Input()
   tabChangedCount:Number =-1;

  @Input()
  currTapIndex:Number = -1;

   form: any = {
    amount:Number
  };
 

  constructor( private transService:TransectionService,
    private checkoutService:CheckuotService,
    private userContent:UsercontentService,
    private tokenStorage:TokenStorageService) {
      this.initConfig();
     }

  ngOnChanges(): void {
    if(this.currTapIndex==0)
    this.initConfig();
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
                    name: 'Optimizer service',
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
          console.log(data);
          console.log(this.checkoutitem);
        },
        onClientAuthorization: (data) => {
        // console.log(data);
       //  console.log(this.checkoutitem);
     
       this.checkoutService.checkoutreceived(this.checkoutitem,data);
        },
        onCancel: (data, actions) => {
       //   console.log(data);
       //   console.log(this.checkoutitem);
          this.checkoutService.checkoutcancel(this.checkoutitem,data);
        },
        onError: err => {
          this.checkoutService.checkoutreject(this.checkoutitem,err);
        },
        onClick: (data, actions) => {
   //       console.log(data);
        this.createCheckout(data);  
        }
    };
  }

  reloadPage(): void {
    setTimeout(() => {
       // window.location.reload();
    }, 2000);
  };

  createCheckout(data:any)  {

    const _request = {
      contentid:this.currentUserContent.id,
      username:this.currentUserContent.username,
      amount:this.form.amount,
      paymentmethod: data.fundingSource,
      published:false,
      status:"created",
      type:'deposit',
      fees:0,
    }

    this.checkoutitem={ };

    this.transService.create(_request).subscribe(value => { 
      this.checkoutitem=value;  
    //  console.log(value);
    })
  }

  cancelCheckout() { 
  
    if(this.checkoutitem && this.checkoutitem.id)
    {
      this.transService.update(this.checkoutitem.id,{status:'canceled'}).subscribe(()=>{ });
    }
  }

  rejectCheckout() {

    if(this.checkoutitem && this.checkoutitem.id)
    {
      this.transService.update(this.checkoutitem.id,{status:'rejected'}).subscribe(()=>{ });
    }
  }

  clientAuthorizatio(data:any) {

    this.checkoutService.checkoutreceived(0,data);

    /*
    if('COMPLETED'==data.status)
    {
    
      console.log(data);
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
              
              this.transService.update(this.checkoutitem.id,{
                paymentdetail:data.payer.email_address,
                transectiontype:'deposit',
                transectionstatus:'completed'}).subscribe(()=>{});

              this.showSuccess = true;
          //    this.reloadPage();
              
            });

          }

          */
    
    }

}

