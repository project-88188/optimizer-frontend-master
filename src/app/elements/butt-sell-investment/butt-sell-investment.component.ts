import { Component, OnInit,Input } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { ElementsService } from '../elements.service';

@Component({
  selector: 'app-butt-sell-investment',
  templateUrl: './butt-sell-investment.component.html',
  styleUrls: ['./butt-sell-investment.component.css']
})
export class ButtSellInvestmentComponent implements OnInit {

  form: any = {
    amount: null,
    totalunits:null,
    unitprice:null
  };

  @Input()
  currentUserContent: any;


  submitted = false;
  successed = false;
  constructor(private elementsService:ElementsService) { }

  ngOnInit(): void { }


  onSubmit() {

    this.form.amount=this.form.totalunits*this.form.unitprice;

    const data:any = {
      username:this.currentUserContent.username,
      amount: this.form.amount,
      totalunits:this.form.totalunits,
      unitprice:this.form.unitprice
    }

    this.elementsService.createtransection_sell_investment(data).subscribe(data =>{
        if(data)
        console.log(data);
      });

      this.submitted=true;

      setTimeout(() => {
        this.submitted=false;
        this.successed=true;
      }, 10000);

  }

}
