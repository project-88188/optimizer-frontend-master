import { Component, OnInit,Input } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { ElementsService } from '../elements.service';

@Component({
  selector: 'app-butt-withdrawal',
  templateUrl: './butt-withdrawal.component.html',
  styleUrls: ['./butt-withdrawal.component.css']
})
export class ButtWithdrawalComponent implements OnInit {
  form: any = {
    amount: null,
    paypalaccount: this.tokenStorage.getUser().email
  };

  @Input()
  currentUserContent: any;


  submitted = false;
  successed = false;
  constructor(private elementsService:ElementsService,
    private tokenStorage:TokenStorageService) { }

  ngOnInit(): void { 

  }

  onSubmit() {

    const data:any = {
      username:this.currentUserContent.username,
      amount:this.form.amount,
      paymentmethod:"PAYPAL",
      paymentdetail:this.form.paypalaccount,
      published:false,
      status:"created",
      transectionstatus:"created",
      transectiontype:"deposit"
    }

    const result = this.elementsService.withdawal(data);

    this.submitted=true;

    setTimeout(() => {
      this.submitted=false;
      this.successed=true;
      this.reloadPage();
    }, 2000);

  }

  reloadPage(): void {
    setTimeout(() => {
        window.location.reload();
    }, 2000);
  };

}
