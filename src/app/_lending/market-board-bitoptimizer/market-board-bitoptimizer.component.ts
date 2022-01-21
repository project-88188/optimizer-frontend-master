import { Component, OnInit } from '@angular/core';
import { ElementsService } from '../../elements/elements.service';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../../_providers/global-url';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { LendingService } from '../lending.service';

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
  selector: 'app-market-board-bitoptimizer',
  templateUrl: './market-board-bitoptimizer.component.html',
  styleUrls: ['./market-board-bitoptimizer.component.css']
})
export class MarketBoardBitoptimizerComponent implements OnInit {
 
  public displaysource= {offers:[],  bids:[]} as marketUI;

  constructor(private elementsService:ElementsService,
    private lendingService:LendingService,
    private tokenStorage:TokenStorageService,
    private http:HttpClient) { 

      let market = {price:'loading',
      units:'loading',} as maketPrice;
    
      for(let i=0; i<4; i++)
      {
        this.displaysource.bids.push(market)
        this.displaysource.offers.push(market)
      }
      
      
    }


  ngOnInit(): void {
    this.lendingService.getmarket_bitoptimizer().subscribe(data2=>{
      this.displaysource=data;
    })
   
  }

  get_market_sell_bitoptimizer(): Observable<any> {
    
    const httpOptions = {
      headers:  new HttpHeaders()
      .append('x-access-token',[''+this.tokenStorage.getToken()])
      .append('Content-Type', ['application/json'])
      .append('Accept', ['application/json'])
     
    };
    
    return    this.http.post(ELEMENTS_API + 'marketsell',{
      transectiontype:'sell_bitoptimizer',
      transectionstatus:'marketing'
      },httpOptions);
   }

   get_market_buy_bitoptimizer(): Observable<any> {
    
    const httpOptions = {
      headers:  new HttpHeaders()
      .append('x-access-token',[''+this.tokenStorage.getToken()])
      .append('Content-Type', ['application/json'])
      .append('Accept', ['application/json'])
     
    };
    
    return    this.http.post(ELEMENTS_API + 'marketbuy',{
      transectiontype:'buy_bitoptimizer',
      transectionstatus:'marketing'
      },httpOptions);
   }

}
