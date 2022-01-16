import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { SortDirection } from "@angular/material/sort";
import { OPTIMIZER_URL } from 'src/app/_providers/global-url';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

export interface DataApi {
  items:any[];
  total_count: number;
  message:string;
}

const baseUrl = OPTIMIZER_URL + '/server/totaldays/';

@Injectable({
  providedIn: 'root'
})
export class TotaldayTableService {

  constructor(private http: HttpClient,
    private tokenStorage:TokenStorageService) { }

  getData(sort: string, order: SortDirection, page: number,size:number, q: string): Observable<DataApi> {

    const _httpOptions = {
      headers:  new HttpHeaders()
      .append('x-access-token',[''+this.tokenStorage.getToken()])
      .append('Content-Type', ['application/json'])
      .append('Accept', ['application/json'])
     
    };

    let username='chaiya';
    return this.http.get<DataApi>(baseUrl+`/table/search?q=${q}&username=${username}&sort=${sort}&order=${order}&page=${page + 1}&size=${size}`,_httpOptions);
 }
 
}
