import { Component, OnInit,Input } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { ElementsService } from '../../elements/elements.service';
import { LendingService } from '../lending.service';

@Component({
  selector: 'app-butt-buy-bitoptimizer',
  templateUrl: './butt-buy-bitoptimizer.component.html',
  styleUrls: ['./butt-buy-bitoptimizer.component.css']
})
export class ButtBuyBitoptimizerComponent implements OnInit {

  form: any = {
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
  
    const data:any = {
      contentid:this.currentUserContent.id,
      username:this.currentUserContent.username,

      totalunits:this.form.totalunits,
      unitprice:this.form.unitprice,
    }

    this.lendingService.buy_bitoptimizer(data);
    
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
