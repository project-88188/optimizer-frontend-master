import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { SortDirection } from '@angular/material/sort';
import { OPTIMIZER_URL } from 'src/app/_providers/global-url';

export interface DataApi {
  items:any[];
  total_count: number;
}

const API_URL = OPTIMIZER_URL + '/server/experts/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ExpertTableService {

  constructor(private httpClient: HttpClient) { }

  getData(sort: string, order: SortDirection, page: number,size:number, q: string): Observable<DataApi> {
    return this.httpClient.get<DataApi>(API_URL+`search/issues?q=${q}&sort=${sort}&order=${order}&page=${page + 1}&size=${size}`);
 }
 
}

