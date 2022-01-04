import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { ElementsService } from '../elements.service';

@Component({
  selector: 'app-market-board-bitoptimizer',
  templateUrl: './market-board-bitoptimizer.component.html',
  styleUrls: ['./market-board-bitoptimizer.component.css']
})
export class MarketBoardBitoptimizerComponent implements OnInit {
 
  constructor(private elementsService:ElementsService) { }
  buys:any[] =[];
  sells:any[] =[];


  ngOnInit(): void {
    this.elementsService.get_market_buy_bitoptimizer().subscribe(
      data=>{
        this.buys=data as any[];
        this.buys.sort((a,b) => a.unitprice.localeCompare(b.unitprice));
      });
    this.elementsService.get_market_sell_bitoptimizer().subscribe(
      data=>{
       
        this.sells=data as any[];
        this.sells.sort((a,b) => b.unitprice.localeCompare(a.unitprice));
      });
  }

}
