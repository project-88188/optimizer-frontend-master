import { Component, OnInit,Input } from '@angular/core';
import { ElementsService } from '../elements.service';

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
   constructor(private elementsService:ElementsService) { }

  ngOnInit(): void { }

  onSubmit() {
  
    this.form.amount=this.form.totalunits*this.form.unitprice;
      const data:any = {
        username:this.currentUserContent.username,
        amount: this.form.amount,
        totalunits:this.form.totalunits,
        unitprice:this.form.unitprice,
        published:false,
        transectionstatus:"created",
        transectiontype:"sell_bitoptimizer"
      }
  
      const result = this.elementsService.sell_bitoptimizer(data);

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
