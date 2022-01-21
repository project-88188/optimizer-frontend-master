import { Component, OnInit } from '@angular/core';
import { ElementsService } from '../../elements/elements.service';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../../_providers/global-url';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { MarketSolutionCardsListComponent } from 'src/app/_modules/solution/components/market-solution-cards-list/market-solution-cards-list.component';

const ELEMENTS_API = BASE_URL + '/server/transections/';

interface maketPrice {
  price:any,
  unit:any,
}

interface marketUI  {
  offer:any[],
  bid:any[]
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

  
  public displaysource= {offer:[],  bid:[]} as marketUI;

  constructor(private elementsService:ElementsService,
    private tokenStorage:TokenStorageService,
    private http:HttpClient) { 

     
      let market = {price:'unquote',
      unit:'unquote',} as maketPrice;
    
      for(let i=0; i<4; i++)
      {
        this.displaysource.bid.push(market)
        this.displaysource.offer.push(market)
      }
      
      
    }

  buys:any[] =[];
  sells:any[] =[];

  

  ngOnInit(): void {
  
    console.log(JSON.stringify(this.displaysource));
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
