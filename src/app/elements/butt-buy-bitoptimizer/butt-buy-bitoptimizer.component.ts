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

    if(!this.form.totalunits)
    return;

    if(!this.form.unitprice)
    return;
  
    this.form.amount=this.form.totalunits*this.form.unitprice;

    const data:any = {
      username:this.currentUserContent.username,
      amount: this.form.amount,
      totalunits:this.form.totalunits,
      unitprice:this.form.unitprice,
      published:false,
      transectionstatus:"created",
      transectiontype:"buy_bitoptimizer"
    }

    const result = this.elementsService.buy_bitoptimizer(data);
    
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
