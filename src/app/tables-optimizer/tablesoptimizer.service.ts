
import { SortDirection } from "@angular/material/sort";
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/app/_providers/global-url';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

const _httpOptions = {
  headers:  new HttpHeaders()
  .append('Content-Type', ['application/json'])
  .append('Accept', ['application/json'])
 
};


export interface DataApi {
  items:any[];
  total_count: number;
  message:string;
}

@Injectable({
  providedIn: 'root'
})
export class TablesoptimizerService {

  constructor(private httpClient: HttpClient,
    private tokenStorage:TokenStorageService) {
  }

getDataCurrency(sort: string, order: SortDirection, page: number,size:number, q: string): Observable<DataApi> {

  const username=this.tokenStorage.getUser().username;
  const baseUrl = BASE_URL + '/server/currencies/table/';

  return this.httpClient.get<DataApi>(baseUrl+`search?q=${q}&username=${username}&sort=${sort}&order=${order}&page=${page + 1}&size=${size}`,_httpOptions);
}

getDataDeposit(sort: string, order: SortDirection, page: number,size:number, q: string): Observable<DataApi> {

  const username=this.tokenStorage.getUser().username;
  const baseUrl = BASE_URL + '/server/deposits/table/';

  return this.httpClient.get<DataApi>(baseUrl+`search?q=${q}&username=${username}&sort=${sort}&order=${order}&page=${page + 1}&size=${size}`,_httpOptions);
}

getDataExpert(sort: string, order: SortDirection, page: number,size:number, q: string): Observable<DataApi> {

  const username=this.tokenStorage.getUser().username;
  const baseUrl = BASE_URL + '/server/experts/table/';

  return this.httpClient.get<DataApi>(baseUrl+`search?q=${q}&username=${username}&sort=${sort}&order=${order}&page=${page + 1}&size=${size}`,_httpOptions);
}

getDataLeverage(sort: string, order: SortDirection, page: number,size:number, q: string): Observable<DataApi> {

  const username=this.tokenStorage.getUser().username;
  const baseUrl = BASE_URL + '/server/leverages/table/';

  return this.httpClient.get<DataApi>(baseUrl+`search?q=${q}&username=${username}&sort=${sort}&order=${order}&page=${page + 1}&size=${size}`,_httpOptions);
}

getDataOptimizerControl(sort: string, order: SortDirection, page: number,size:number, q: string): Observable<DataApi> {

  const username=this.tokenStorage.getUser().username;
  const baseUrl = BASE_URL + '/server/optimizercontrols/table/';

  return this.httpClient.get<DataApi>(baseUrl+`search?q=${q}&username=${username}&sort=${sort}&order=${order}&page=${page + 1}&size=${size}`,_httpOptions);
}

getDataPeriod(sort: string, order: SortDirection, page: number,size:number, q: string): Observable<DataApi> {

  const username=this.tokenStorage.getUser().username;
  const baseUrl = BASE_URL + '/server/periods/table/';

  return this.httpClient.get<DataApi>(baseUrl+`search?q=${q}&username=${username}&sort=${sort}&order=${order}&page=${page + 1}&size=${size}`,_httpOptions);
}

getDataProgram(sort: string, order: SortDirection, page: number,size:number, q: string): Observable<DataApi> {

  const username=this.tokenStorage.getUser().username;
  const baseUrl = BASE_URL + '/server/programs/table/';

  return this.httpClient.get<DataApi>(baseUrl+`search?q=${q}&username=${username}&sort=${sort}&order=${order}&page=${page + 1}&size=${size}`,_httpOptions);
}

getDataSymbol(sort: string, order: SortDirection, page: number,size:number, q: string): Observable<DataApi> {

  const username=this.tokenStorage.getUser().username;
  const baseUrl = BASE_URL + '/server/symbols/table/';

  return this.httpClient.get<DataApi>(baseUrl+`search?q=${q}&username=${username}&sort=${sort}&order=${order}&page=${page + 1}&size=${size}`,_httpOptions);
}

getDataTestercontrol(sort: string, order: SortDirection, page: number,size:number, q: string): Observable<DataApi> {

  const username=this.tokenStorage.getUser().username;
  const baseUrl = BASE_URL + '/server/testercontrols/table/';

  return this.httpClient.get<DataApi>(baseUrl+`search?q=${q}&username=${username}&sort=${sort}&order=${order}&page=${page + 1}&size=${size}`,_httpOptions);
}

getDataTestResult(sort: string, order: SortDirection, page: number,size:number, q: string): Observable<DataApi> {

  const username=this.tokenStorage.getUser().username;
  const baseUrl = BASE_URL + '/server/testresults/table/';

  return this.httpClient.get<DataApi>(baseUrl+`search?q=${q}&username=${username}&sort=${sort}&order=${order}&page=${page + 1}&size=${size}`,_httpOptions);
}

getDataTotalday(sort: string, order: SortDirection, page: number,size:number, q: string): Observable<DataApi> {

  const username=this.tokenStorage.getUser().username;
  const baseUrl = BASE_URL + '/server/totaldays/table/';

  return this.httpClient.get<DataApi>(baseUrl+`search?q=${q}&username=${username}&sort=${sort}&order=${order}&page=${page + 1}&size=${size}`,_httpOptions);
}

getDataTradingParameter(sort: string, order: SortDirection, page: number,size:number, q: string): Observable<DataApi> {

  const username=this.tokenStorage.getUser().username;
  const baseUrl = BASE_URL + '/server/tradingparameters/table/';

  return this.httpClient.get<DataApi>(baseUrl+`search?q=${q}&username=${username}&sort=${sort}&order=${order}&page=${page + 1}&size=${size}`,_httpOptions);
}

}
