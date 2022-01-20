import { Component, OnInit,Input } from '@angular/core';
import { ElementsService } from '../../elements/elements.service';
import { LendingService } from '../lending.service';

@Component({
  selector: 'app-butt-sell-bitoptimizer',
  templateUrl: './butt-sell-bitoptimizer.component.html',
  styleUrls: ['./butt-sell-bitoptimizer.component.css']
})
export class ButtSellBitoptimizerComponent implements OnInit {

  form: any = {
    amount: null,
    totalunits:null,
    unitprice:null
  };

  @Input()
  currentUserContent: any;

  submitted = false;
  successed = false;

   constructor(private lendingService:LendingService) { }

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
  
    this.lendingService.sell_bitoptimizer(data);

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
