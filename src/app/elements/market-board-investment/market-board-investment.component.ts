import { Component, OnInit } from '@angular/core';
import { ElementsService } from '../elements.service';

@Component({
  selector: 'app-market-board-investment',
  templateUrl: './market-board-investment.component.html',
  styleUrls: ['./market-board-investment.component.css']
})
export class MarketBoardInvestmentComponent implements OnInit {

  constructor(private elementsService:ElementsService) { }

  buys:any[] =[];
  sells:any[] =[];

  ngOnInit(): void {

 //   this.elementsService.get_market_buy_investment().subscribe(
  //    data=>{
  //      this.buys=data as any[];
  //      this.buys.sort((a,b) => a.unitprice.localeCompare(b.unitprice));
  //    });
  //  this.elementsService.get_market_sell_investment().subscribe(
  //    data=>{
   //     this.sells=data as any[];
   //     this.sells.sort((a,b) => b.unitprice.localeCompare(a.unitprice));
   //   });
  }

}
