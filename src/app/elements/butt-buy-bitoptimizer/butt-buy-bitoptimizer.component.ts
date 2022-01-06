import { Component, OnInit,Input } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { ElementsService } from '../elements.service';

@Component({
  selector: 'app-butt-buy-bitoptimizer',
  templateUrl: './butt-buy-bitoptimizer.component.html',
  styleUrls: ['./butt-buy-bitoptimizer.component.css']
})
export class ButtBuyBitoptimizerComponent implements OnInit {

  form: any = {
    amount: null,
    totalunits:null,
    unitprice:null
  };

  @Input()
  currentUserContent: any;

  submitted = false;
  successed = false;
  constructor(  private elementsService:ElementsService,
    private tokenStorege:TokenStorageService ) { }

  ngOnInit(): void { }


  onSubmit() {
  
    this.form.amount=this.form.totalunits*this.form.unitprice;
    
    const data:any = {
      username:this.currentUserContent.username,
      amount: this.form.amount,
      totalunits:this.form.totalunits,
      unitprice:this.form.unitprice
    }

    this.elementsService.createtransection_buy_bitoptimizer(data).subscribe(data => {
        console.log(data);
      });

    this.submitted=true;

    setTimeout(() => {
      this.submitted=false;
      this.successed=true;
    }, 10000);

  }

}
