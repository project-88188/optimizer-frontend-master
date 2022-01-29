import { Component, OnInit,Input } from '@angular/core';
import { InvestingService } from '../investing.service';

@Component({
  selector: 'app-butt-sell-investment',
  templateUrl: './butt-sell-investment.component.html',
  styleUrls: ['./butt-sell-investment.component.css']
})
export class ButtSellInvestmentComponent implements OnInit {

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
  
       this.investingService.sell_investment(data);

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
