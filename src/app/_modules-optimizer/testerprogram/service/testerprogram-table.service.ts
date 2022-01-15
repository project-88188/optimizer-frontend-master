import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { SortDirection } from "@angular/material/sort";
import { OPTIMIZER_URL } from 'src/app/_providers/global-url';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

export interface DataApi {
  items:any[];
  total_count: number;
}

const API_URL = OPTIMIZER_URL + '/server/testerprograms/';

@Injectable({
  providedIn: 'root'
})
export class TesterprogramTableService {

  constructor(private httpClient: HttpClient,
    private tokenStorage:TokenStorageService) { }

  getData(sort: string, order: SortDirection, page: number,size:number, q: string): Observable<DataApi> {

    const _httpOptions = {
      headers:  new HttpHeaders()
      .append('x-access-token',[''+this.tokenStorage.getToken()])
      .append('Content-Type', ['application/json'])
      .append('Accept', ['application/json'])
     
    };

    return this.httpClient.get<DataApi>(API_URL+`search/issues?q=${q}&sort=${sort}&order=${order}&page=${page + 1}&size=${size}`,_httpOptions);
 }
 
}

