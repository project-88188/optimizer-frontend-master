import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { SortDirection } from "@angular/material/sort";
import { OPTIMIZER_URL } from 'src/app/_providers/global-url';

export interface DataApi {
  items:any[];
  total_count: number;
}

const API_URL = OPTIMIZER_URL + '/api/optimizercontrols/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class OptimizercontrolTableService {

  constructor(private httpClient: HttpClient) { }

  getData(sort: string, order: SortDirection, page: number, q: string): Observable<DataApi> {
    return this.httpClient.get<DataApi>(API_URL+`search/issues?q=${q}&sort=${sort}&order=${order}&page=${page + 1}`);
 }
 
}

