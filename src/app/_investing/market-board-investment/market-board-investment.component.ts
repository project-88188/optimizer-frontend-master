import { Component, OnInit } from '@angular/core';
import { ElementsService } from '../../elements/elements.service';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../../_providers/global-url';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { MarketSolutionCardsListComponent } from 'src/app/_modules/solution/components/market-solution-cards-list/market-solution-cards-list.component';
import { InvestingService } from '../investing.service';

const ELEMENTS_API = BASE_URL + '/server/transections/';

interface maketPrice {
  price:any,
  units:any,
}

interface marketUI  {
  offers:any[],
  bids:any[]
}

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-market-board-investment',
  templateUrl: './market-board-investment.component.html',
  styleUrls: ['./market-board-investment.component.css']
})
export class MarketBoardInvestmentComponent implements OnInit {

  
  public displaysource= {offers:[],  bids:[]} as marketUI;

  constructor(private elementsService:ElementsService,
    private investingService:InvestingService,
    private tokenStorage:TokenStorageService,
    private http:HttpClient) { 

     
      let market = {price:'unquote',
      units:'unquote',} as maketPrice;
    
      for(let i=0; i<4; i++)
      {
        this.displaysource.bids.push(market)
        this.displaysource.offers.push(market)
      }
      
      
    }

  ngOnInit(): void {
  this.investingService.getmarket_investment().subscribe(data2=>{
    console.log(data2);
  })
  }

  get_market_sell_investment(): Observable<any> {
    
    const httpOptions = {
      headers:  new HttpHeaders()
      .append('x-access-token',[''+this.tokenStorage.getToken()])
      .append('Content-Type', ['application/json'])
      .append('Accept', ['application/json'])
     
    };
    
    return    this.http.post(ELEMENTS_API + 'marketsell',{
      transectiontype:'sell_investment',
      transectionstatus:'marketing'
      },httpOptions);
   }

   get_market_buy_investment(): Observable<any> {
    
    const httpOptions = {
      headers:  new HttpHeaders()
      .append('x-access-token',[''+this.tokenStorage.getToken()])
      .append('Content-Type', ['application/json'])
      .append('Accept', ['application/json'])
    
    };
    
    return    this.http.post(ELEMENTS_API + 'marketbuy',{
        transectiontype:'buy_investment',
        transectionstatus:'marketing'
        },httpOptions);
   }


}
