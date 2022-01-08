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
    
    this.elementsService.create_empty().subscribe(value => { 

      console.log(value);

      const data:any = {
        username:this.currentUserContent.username,
        amount: this.form.amount,
        totalunits:this.form.totalunits,
        unitprice:this.form.unitprice,
        transectionstatus:"created",
        transectiontype:"sell_bitoptimizer"
      }
  
      this.elementsService.update(value.id,data).subscribe(count => { 
        console.log(count)
        if(count)
          this.elementsService.read(value.id).subscribe(data => { 
            console.log(data);
          });
      });
    });

    this.submitted=true;

    setTimeout(() => {
      this.submitted=false;
      this.successed=true;
    }, 10000);

  }

}
