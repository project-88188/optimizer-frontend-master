import { Component,Input,OnChanges }from '@angular/core'
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { ElementsService } from '../elements.service';
import { CLIENT_ID,SECRET } from 'src/app/_providers/paypal-config';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { EmailValidator } from '@angular/forms';

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
  public result:any;


  @Input()
    currentUserContent:any = {};
  @Input()
   tabChangedCount:Number =-1;

   form: any = {
    amount:Number,
    paypalaccount:this.currentUserContent.paymentdetail
  };
 

  constructor(private elementsService:ElementsService,
    private tokenStorage:TokenStorageService) {
     }

  ngOnChanges(): void {
    this.initConfig();
  }

  onSubmit() {

    if(this.tokenStorage.getToken())
    {
      const orderRequest ={
        "intent": "CAPTURE",
        "purchase_units": [
          {
            "amount": {
              "currency_code": "USD",
              "value": "100.00"
            }
          }
        ]
      }

      const data = {
        username:this.currentUserContent.username,
        amount:this.form.amount,
        paymentmethod:"PAYPAL",
        paymentdetail:this.form.paypalaccount,
        published:false,
        transectionstatus:"created",
        transectiontype:"deposit"
      }

      this.elementsService.deposit(data);

      this.submitted=true;
  
      setTimeout(() => {
        this.submitted=false;
        this.successed=true;
        this.reloadPage();
      }, 2000);
  
    }

  }

  reloadPage(): void {
    setTimeout(() => {
        window.location.reload();
    }, 2000);
  };

  private initConfig(): void {
    this.payPalConfig = {
        currency: 'EUR',
        clientId: this.client_id,
        createOrderOnClient: (data) => < ICreateOrderRequest > {
            intent: 'CAPTURE',
            purchase_units: [{
                amount: {
                    currency_code: 'EUR',
                    value: '9.99',
                    breakdown: {
                        item_total: {
                            currency_code: 'EUR',
                            value: '9.99'
                        }
                    }
                },
                items: [{
                    name: 'Enterprise Subscription',
                    quantity: '1',
                    category: 'DIGITAL_GOODS',
                    unit_amount: {
                        currency_code: 'EUR',
                        value: '9.99',
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
            console.log('onApprove - transaction was approved, but not authorized', data, actions);
            actions.order.get().then(() => {
                console.log('onApprove - you can get full order details inside onApprove: ');
            });

        },
        onClientAuthorization: (data) => {
            console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
            this.showSuccess = true;
        },
        onCancel: (data, actions) => {
            console.log('OnCancel', data, actions);
         //   this.showCancel = true;

        },
        onError: err => {
            console.log('OnError', err);
          //  this.showError = true;
        },
        onClick: (data, actions) => {
            console.log('onClick', data, actions);
          //  this.resetStatus();
        }
    };
  }
}

