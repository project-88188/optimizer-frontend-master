import { Component,Input,OnChanges }from '@angular/core'
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { ElementsService } from '../elements.service';
import { CLIENT_ID } from 'src/app/_providers/paypal-config';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { UsercontentService } from 'src/app/_modules/usercontent/services/usercontent.service';

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

  public deposit_trans:any = {};

  @Input()
    currentUserContent:any = {};
  @Input()
   tabChangedCount:Number =-1;

   form: any = {
    amount:Number
  };
 

  constructor(private elementsService:ElementsService,
    private userContent:UsercontentService,
    private tokenStorage:TokenStorageService) {
     }

  ngOnChanges(): void {
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
              //  console.log('onApprove - you can get full order details inside onApprove: ');
            });

        },
        onClientAuthorization: (data) => {
        
           if('COMPLETED'==data.status)
           {
            this.elementsService.update(this.deposit_trans.id,{
              paymentdetail:data.payer.email_address,
              transectionstatus:'completed'}).subscribe(()=>{

                //
                let  userdata=this.tokenStorage.getUser();
                let  _content=JSON.parse(userdata.content);
                _content.cashbalance=Number.parseFloat(_content.cashbalance)+Number.parseFloat(this.form.amount);
                _content.deposit=Number.parseFloat(_content.deposit)+Number.parseFloat(this.form.amount);
          
                
                userdata.content=JSON.stringify(_content);
                this.tokenStorage.saveUser(userdata);
                //
                //
                const  resultcontent ={
                  cashbalance:_content.cashbalance,
                  deposit:_content.deposit,
                }
                
                this.userContent.update(_content.id,resultcontent).subscribe(()=>{
                  this.showSuccess = true;
                  this.reloadPage();
                });
                
            });
           }
           
        },
        onCancel: (data, actions) => {

          this.elementsService.updatestatus(this.deposit_trans.id,{transectionstatus:'canceled'}).subscribe(()=>{ });

        },
        onError: err => {

            this.elementsService.updatestatus(this.deposit_trans.id,{transectionstatus:'rejected'}).subscribe(()=>{});
        
        },
        onClick: (data, actions) => {
          
         const _request = {
          username:this.currentUserContent.username,
          amount:this.form.amount,
          paymentmethod: data.fundingSource,
          published:false,
          transectionstatus:"created",
          transectiontype:"deposit"
        }

        this.deposit_trans={ };

        this.elementsService.create(_request).subscribe(value => { 
          this.deposit_trans=value;
         // console.log(this.deposit_trans);
         // actions.resolve();
       })
  
        }
    };
  }


  reloadPage(): void {
    setTimeout(() => {
        window.location.reload();
    }, 2000);
  };
}

