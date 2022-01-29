import { Component, OnInit,Input } from '@angular/core';
import { InvestingService } from '../investing.service';

@Component({
  selector: 'app-butt-buy-investment',
  templateUrl: './butt-buy-investment.component.html',
  styleUrls: ['./butt-buy-investment.component.css']
})
export class ButtBuyInvestmentComponent implements OnInit {

  form: any = {
    totalunits:null,
    unitprice:null
  };

  @Input()
  currentUserContent: any;


  submitted = false;
  successed = false;
  constructor(private investingService:InvestingService) { }

  ngOnInit(): void { }

  onSubmit() {

    if(!this.form.totalunits)
    return;

    if(!this.form.unitprice)
    return;
 
    const data:any = {
      contentid:this.currentUserContent.id,
      username:this.currentUserContent.username,
      totalunits:this.form.totalunits,
      unitprice:this.form.unitprice,
    }

    this.investingService.buy_investment(data);
  
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
