import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/app/_providers/global-url';
import { SortDirection } from "@angular/material/sort";


const baseUrl = BASE_URL + '/server/table/transections';

export interface DataApi {
  items:any[];
  total_count: number;
}

@Injectable({
  providedIn: 'root'
})
export class TransectionService {

  constructor(private http: HttpClient) { }

  getData(sort: string, order: SortDirection, page: number,size:number, q: string): Observable<DataApi> {
    return this.http.get<DataApi>(baseUrl+`/table/search/issues?q=${q}&sort=${sort}&order=${order}&page=${page + 1}&size=${size}`);
 }

}
