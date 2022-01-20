import { Component, OnInit,Input } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { ElementsService } from '../../elements/elements.service';

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

    if(!this.form.totalunits)
    return;

    if(!this.form.unitprice)
    return;

    this.form.amount=this.form.totalunits*this.form.unitprice;

    const data:any = {
      contentid:this.currentUserContent.id,
      username:this.currentUserContent.username,
      amount: this.form.amount,
      totalunits:this.form.totalunits,
      remainunits:this.form.totalunits,
      unitprice:this.form.unitprice,
      matchunits:0,
      published:false,
      fees:0,
    }
  
       this.elementsService.sell_investment(data);

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
