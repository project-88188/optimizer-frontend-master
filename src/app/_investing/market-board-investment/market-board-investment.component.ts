import { Component, OnInit } from '@angular/core';
import { ElementsService } from '../../elements/elements.service';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../../_providers/global-url';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

const ELEMENTS_API = BASE_URL + '/server/transections/';

interface maketPrice {
  price:'unquote',
  unit:'unquote',
}

interface marketUI  {
offer:maketPrice[],
bit:maketPrice[]

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

  constructor(private elementsService:ElementsService,
    private tokenStorage:TokenStorageService,
    private http:HttpClient) { }

  buys:any[] =[];
  sells:any[] =[];

  ngOnInit(): void {


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
