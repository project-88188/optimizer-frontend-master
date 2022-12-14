import { Component, OnInit,Input } from '@angular/core';
import { PayoutService } from '../payout.service';

@Component({
  selector: 'app-butt-withdrawal',
  templateUrl: './butt-withdrawal.component.html',
  styleUrls: ['./butt-withdrawal.component.css']
})

export class ButtWithdrawalComponent implements OnInit {
  
  form: any = {
    amount: null,
    paypalaccount: null,
  };

  @Input()
  currentUserContent: any;

  public paypaloptions:any[] =[]
 
  submitted = false;
  successed = false;
  
  constructor(private payoutService:PayoutService) { }

  ngOnInit(): void { 
    this.paypaloptions= JSON.parse(this.currentUserContent.paymentmethod);
  }

  onSubmit() {

    if(!this.form.paypalaccount)
    return;
   
    if(!this.form.amount)
    return;

    const data = {
      contentid:this.currentUserContent.id,
      username:this.currentUserContent.username,
      amount:this.form.amount,
      paymentmethod:"paypal",
      paymentdetail:this.form.paypalaccount,
      published:false,
      status:"created",
      type:"withdrawal",
      fees: 0,
    }

    this.payoutService.processwithdrawal(data);

    this.submitted=true;
    
    setTimeout(() => {
       this.submitted=false;
       this.successed=true
       this.reloadPage();
    }, 2000);

  }

  reloadPage(): void {
    setTimeout(() => {
        window.location.reload();
    }, 2000);
  };

}
