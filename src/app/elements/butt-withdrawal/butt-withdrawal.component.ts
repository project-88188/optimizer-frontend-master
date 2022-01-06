import { Component, OnInit,Input } from '@angular/core';
import { ElementsService } from '../elements.service';

@Component({
  selector: 'app-butt-withdrawal',
  templateUrl: './butt-withdrawal.component.html',
  styleUrls: ['./butt-withdrawal.component.css']
})
export class ButtWithdrawalComponent implements OnInit {
  form: any = {
    amount: null,
    paypalaccount: null
  };

  @Input()
  currentUserContent: any;


  submitted = false;
  successed = false;
  constructor(private elementsService:ElementsService) { }

  ngOnInit(): void { }

  onSubmit() {

    const data:any = {
      username:this.currentUserContent.username,
      amount:this.form.amount,
      paymentmethod:"PAYPAL",
      paymentdetail:this.form.paypalaccount,
      published:false,
      status:"created"
    }

    this.elementsService.createtransection_withdrawal(data).subscribe(data => {
      console.log(data);
    });

    this.submitted=true;

    setTimeout(() => {
      this.submitted=false;
      this.successed=true;
    }, 10000);

  }

}
