import { Component,Input,OnChanges,ViewChild }from '@angular/core'
import { paypals } from 'src/app/_providers/paypal-config';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { TransectionService } from 'src/app/_modules/transection/services/transection.service';
import { CheckuotService } from '../checkout.service';
import { ElementsService } from 'src/app/elements/elements.service';

@Component({
  selector: 'app-butt-deposit',
  templateUrl: './butt-deposit.component.html',
  styleUrls: ['./butt-deposit.component.css']
})
export class ButtDepositComponent implements OnChanges {

  public client_id=paypals.sanbox.CLIENT_ID; //----CLIENT-ID----//
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
    private elementService:ElementsService,
    private checkoutService:CheckuotService) {
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
        onApprove: (data, progress) => {
          this.checkoutService.OnApprove(this.checkoutitem.id,data).subscribe(()=>{
          });
        },
        onClientAuthorization: (data) => {
         this.checkoutService.onClientAuthorization(this.checkoutitem.id,data).subscribe(()=>{
          this.submitted=true;
          
          setTimeout(() => {
            this.submitted=false;
            this.successed=true;
            this.elementService.RefreshUserContent();
            this.reloadPage();
         }, 5000);
           
         });
        },
        onCancel: (data, progress) => {
         // console.log(data);
          this.checkoutService.onCancel(this.checkoutitem.id,data).subscribe(()=>{});
        },
        onError: err => {
         // console.log(err);
          this.checkoutService.onError(this.checkoutitem.id,err).subscribe(()=>{});
        },
        onClick: (data, actions) => {
          actions.reject();

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
          this.checkoutService.onClick(_request).subscribe(data=>{
            this.checkoutitem=data;
            actions.resolve();
          });
        }
    }
  }

  reloadPage(): void {
    setTimeout(() => {
        window.location.reload();
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

}