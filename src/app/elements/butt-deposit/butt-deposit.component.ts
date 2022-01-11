
import { Component, OnInit,Input } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { ElementsService } from '../elements.service';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { loadScript } from "@paypal/paypal-js";
import { CLIENT_ID, SECRET} from "../../_providers/paypal-config"

loadScript({ "client-id": CLIENT_ID })
.then((paypal) => {
    // start to use the PayPal JS SDK script
})
.catch((err) => {
    console.error("failed to load the PayPal JS SDK script", err);
});

@Component({
  selector: 'app-butt-deposit',
  templateUrl: './butt-deposit.component.html',
  styleUrls: ['./butt-deposit.component.css']
})
export class ButtDepositComponent implements OnInit {

  payPalConfig?: IPayPalConfig;

  showSuccess = false;

  form: any = {
    amount: null,
    paypalaccount: this.tokenStorage.getUser().email
  };

  @Input()
    currentUserContent: any;

  result:any;
  submitted = false;
  successed = false;
  constructor(private elementsService:ElementsService,
    private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {
  
   }

  onSubmit() {

    if(this.tokenStorage.getToken())
    {
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

}
